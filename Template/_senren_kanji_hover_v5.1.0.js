/* _senren_kanji_hover_v5.1.0.js */
(function () {
  if (window.senrenConfig && window.senrenConfig.enableKanjiHover === 'false') {
    return;
  }
  const ankiConnectUrl = "http://localhost:8765";
  let tooltipElement = document.getElementById("kanji-tooltip");
  let hideTooltipTimeout = null;

  const preloadedKanjiData = {};

  function isKanji(char) {
    return window.REGEX.KANJI.test(char);
  }

  // Helper function to draw pitch accent lines in the tooltip (fallback)
  function drawTooltipPitchLines(tooltip) {
    if (!tooltip) return;

    const moraRegex = window.REGEX.MORA;

    const entries = tooltip.querySelectorAll('li');

    entries.forEach(li => {
      const rt = li.querySelector('rt');
      const numberSpan = li.querySelector('.pitch-number');

      if (!rt || !numberSpan) return;
      if (rt.querySelector('.pronunciation')) return;

      const readingText = rt.textContent.trim();
      const morae = readingText.match(moraRegex) || [];
      const moraCount = morae.length;
      if (moraCount === 0) return;

      const pitchNum = parseInt(numberSpan.textContent.trim(), 10);
      if (isNaN(pitchNum)) return;

      let pattern = [];
      for (let i = 0; i < moraCount; i++) {
        if (pitchNum === 0) { // Heiban
          pattern.push(i === 0 ? 'L' : 'H');
        } else if (pitchNum === 1) { // Atamadaka
          pattern.push(i === 0 ? 'H' : 'L');
        } else { // Nakadaka or Odaka
          if (i === 0) pattern.push('L');
          else if (i < pitchNum) pattern.push('H');
          else pattern.push('L');
        }
      }

      let pClass = 'heiban';
      if (pitchNum === 1) pClass = 'atamadaka';
      else if (pitchNum === 0) pClass = 'heiban';
      else if (pitchNum === moraCount) pClass = 'odaka';
      else pClass = 'nakadaka';

      const container = document.createElement('span');
      container.className = `pronunciation ${pClass}`;

      for (let i = 0; i < moraCount; i++) {
        const type = pattern[i] === 'H' ? 'high' : 'low';
        const span = document.createElement('span');
        span.className = 'pronunciation-mora';
        span.textContent = morae[i];
        span.dataset.pitch = type;

        if (type === 'high') {
          if ((i + 1 < moraCount && pattern[i + 1] === 'L') || (pClass === 'odaka' && i === moraCount - 1)) {
            span.dataset.pitchNext = 'low';
          }
        }

        const line = document.createElement('span');
        line.className = 'pronunciation-mora-line';
        span.appendChild(line);
        container.appendChild(span);
      }

      rt.innerHTML = '';
      rt.appendChild(container);
    });
  }

  // Helper function to send requests to AnkiConnect
  async function ankiConnectRequest(action, params = {}) {
    try {
      const response = await fetch(ankiConnectUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ action, version: 6, params }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.error) {
        throw new Error(`AnkiConnect error: ${data.error}`);
      }
      return data.result;
    } catch (error) {
      console.error("[Senren Hover] AnkiConnect Failure:", error);
      return null;
    }
  }

  // Positions the tooltip near the kanji element, ensuring it stays within viewport boundaries
  function positionTooltipNearElement(element, targetElement) {
    if (!element || !targetElement) return;

    const parent = element.offsetParent;
    if (!parent) return;

    const targetRect = targetElement.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();

    const arrowSize = 7;
    const defaultArrowLeft = 15;

    const relativeTop = targetRect.top - parentRect.top;
    const relativeLeft = targetRect.left - parentRect.left;

    element.style.left = `${relativeLeft}px`;
    element.style.top = `${relativeTop + targetRect.height}px`;
    element.classList.remove('tooltip-above');

    element.style.setProperty('--tooltip-arrow-left', `${targetRect.width / 2}px`);

    const tooltipRect = element.getBoundingClientRect();

    if (tooltipRect.right > window.innerWidth) {
      element.style.left = `${relativeLeft + (window.innerWidth - tooltipRect.right - 10)}px`;
    }

    const finalLeft = parseFloat(element.style.left || '0');
    if (finalLeft + parentRect.left < 0) {
      element.style.left = `${-parentRect.left + 10}px`;
    }

    const bottomBuffer = 10;
    if (tooltipRect.bottom > window.innerHeight - bottomBuffer) {
      const potentialTopAbove = relativeTop - tooltipRect.height - arrowSize;
      if (potentialTopAbove + parentRect.top > 0) {
        element.style.top = `${potentialTopAbove}px`;
        element.classList.add('tooltip-above');
      } else {
        element.classList.remove('tooltip-above');
      }
    } else {
      element.classList.remove('tooltip-above');
    }

    const finalTop = parseFloat(element.style.top || '0');
    if (element.classList.contains('tooltip-above') && (finalTop + parentRect.top < 0)) {
      element.style.top = `${-parentRect.top + 10}px`;
    }

    const finalTooltipLeftRelative = parseFloat(element.style.left || '0');
    let newArrowLeft = defaultArrowLeft;

    const targetCenterRelativeX = relativeLeft + (targetRect.width / 2);
    newArrowLeft = targetCenterRelativeX - finalTooltipLeftRelative;

    const tooltipWidth = element.offsetWidth;
    newArrowLeft = Math.max(arrowSize, Math.min(newArrowLeft, tooltipWidth - arrowSize));
    element.style.setProperty('--tooltip-arrow-left', `${newArrowLeft}px`);
  }

  // Hides the tooltip after a short delay unless forced
  function hideKanjiInfo(force = false) {
    if (tooltipElement) {
      clearTimeout(hideTooltipTimeout);
      hideTooltipTimeout = setTimeout(() => {
        const isOverKanji = document.querySelector('.kanji:hover');
        const isOverTooltip = tooltipElement.matches(':hover');

        if (!isOverKanji && !isOverTooltip) {
          tooltipElement.classList.remove('active');
          tooltipElement.style.display = 'none';
        }
      }, force ? 0 : 100);
    }
  }

  // Displays related words for the hovered Kanji
  async function showKanjiInfo(element) {
    if (!tooltipElement) return;
    clearTimeout(hideTooltipTimeout);
    const kanji = element.textContent;

    tooltipElement.innerHTML = "";

    if (preloadedKanjiData[kanji]) {
      const relatedWords = preloadedKanjiData[kanji];
      let relatedWordsHtml = "<ul class=\"kanji-tooltip-list\">";
      let count = 0;
      const maxInitialWords = 5;

      const kanjiHighlightRegex = new RegExp(kanji.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g');
      const highlightSpan = `<span class="kanji-highlight">${kanji}</span>`;

      for (const wordInfo of relatedWords) {
        const wordHtml = wordInfo.word.replace(kanjiHighlightRegex, highlightSpan);

        let sentenceHtml = '';
        if (wordInfo.sentence) {
          const autoQuote = window.senrenConfig && window.senrenConfig.kanjiHoverAutoQuote === 'true';

          const s = wordInfo.sentence.trim();
          const plainText = s.replace(/<[^>]*>/g, '').trim();
          const alreadyQuoted = plainText.startsWith('「') || plainText.startsWith('『');

          if (autoQuote && !alreadyQuoted) {
            sentenceHtml = `<div class="related-sentence">「${s}」</div>`;
          } else {
            sentenceHtml = `<div class="related-sentence">${wordInfo.sentence}</div>`;
          }
        }

        let formattedPositionHtml = '';
        let firstPitchCategory = '';
        let fullCategoriesHtml = '';

        if (wordInfo.pitchPosition) {
          const numbers = Array.from(wordInfo.pitchPosition.matchAll(/\d+/g))
            .map(match => parseInt(match[0], 10))
            .filter((num, index, arr) => arr.indexOf(num) === index);

          let tempRt = null;
          if (wordInfo.reading) {
            const tempReadingDiv = document.createElement('div');
            tempReadingDiv.innerHTML = wordInfo.reading;
            const readingTextContent = tempReadingDiv.textContent || tempReadingDiv.innerText || "";

            if (readingTextContent) {
              tempRt = document.createElement('rt');
              tempRt.textContent = readingTextContent;
            }
          }

          if (numbers.length > 0) {
            formattedPositionHtml = numbers.map((num, index) => {
              let pitchType = window.senrenGetPitchType(num, tempRt);
              pitchType = pitchType.split(',')[0].trim();
              return `<span class="pitch-number ${pitchType}">${num}</span>`;
            }).join('・');

            const relevantPitchTypes = numbers.map(num => window.senrenGetPitchType(num, tempRt).split(',')[0].trim());
            firstPitchCategory = relevantPitchTypes[0] || '';
            fullCategoriesHtml = relevantPitchTypes.join('<br>');
          } else {
            firstPitchCategory = wordInfo.pitch ? wordInfo.pitch.split(',')[0].trim() : '';
            fullCategoriesHtml = wordInfo.pitch ? wordInfo.pitch.replace(/,/g, '<br>') : '';
          }
        } else {
          firstPitchCategory = wordInfo.pitch ? wordInfo.pitch.split(',')[0].trim() : '';
          fullCategoriesHtml = wordInfo.pitch ? wordInfo.pitch.replace(/,/g, '<br>') : '';
        }

        const newClass = wordInfo.isNew ? 'is-new-card' : '';
        const clickAction = `onclick="window.senrenAnkiRequest('guiBrowse', { query: 'nid:${wordInfo.noteId}' })"`;
        const itemHtml = `
          <li class="${newClass} ${firstPitchCategory || ''}" style="${count >= maxInitialWords ? 'display: none;' : ''}">
            <div class="related-word-container pitch card-a">
              <span class="pitch-info ${firstPitchCategory || ''} ${wordInfo.tags || ''}">
                <ruby>
                  <span class="related-word clickable-word" ${clickAction}>${wordHtml}</span>
                  ${wordInfo.reading ? `<rt>${wordInfo.reading}</rt>` : ''}
                </ruby>
                ${formattedPositionHtml ? `<div class="position">${formattedPositionHtml}</div>` : ''}
                ${firstPitchCategory ? `<div class="categories" data-first-category="${firstPitchCategory}" data-full-categories="${fullCategoriesHtml}">${firstPitchCategory}</div>` : ''}
              </span>
            </div>
            ${sentenceHtml}
          </li>
        `;

        relatedWordsHtml += itemHtml;
        count++;
      }
      relatedWordsHtml += "</ul>";

      if (relatedWords.length > maxInitialWords) {
        relatedWordsHtml += `<button class="show-more-btn">Show More (${relatedWords.length - maxInitialWords})</button>`;
      }

      tooltipElement.innerHTML = count === 0 ? "No words found." : relatedWordsHtml;
      drawTooltipPitchLines(tooltipElement);
      tooltipElement.classList.add('active');
      tooltipElement.style.display = 'block';
      positionTooltipNearElement(tooltipElement, element);

      const showMoreBtn = tooltipElement.querySelector('.show-more-btn');
      if (showMoreBtn) {
        showMoreBtn.addEventListener('click', () => {
          const hiddenItems = tooltipElement.querySelectorAll('li[style="display: none;"]');
          hiddenItems.forEach(item => item.style.display = '');
          showMoreBtn.remove();
        });
      }

      tooltipElement.addEventListener('mouseover', () => clearTimeout(hideTooltipTimeout));
      tooltipElement.addEventListener('mouseout', () => hideKanjiInfo());
      tooltipElement.addEventListener('mouseover', (event) => {
        const positionElement = event.target.closest('.position');
        if (positionElement) {
          const categoriesElement = positionElement.nextElementSibling;
          if (categoriesElement && categoriesElement.classList.contains('categories') && categoriesElement.dataset.fullCategories) {
            if (categoriesElement.innerHTML !== categoriesElement.dataset.fullCategories) {
              categoriesElement.innerHTML = categoriesElement.dataset.fullCategories;
            }
          }
        }
      });
    }
  }

  window.senrenAnkiRequest = ankiConnectRequest;

  // init
  window.senrenInitKanjiHover = async function () {
    tooltipElement = document.getElementById("kanji-tooltip");
    if (!tooltipElement) return;

    const wordContainer = document.getElementById("word");
    if (!wordContainer) return;

    const mainSpan = wordContainer.querySelector(':scope > span');
    if (!mainSpan) return;

    const rubyElement = mainSpan.querySelector('ruby');
    if (!rubyElement) return;

    let wordText = '';
    let readingText = '';

    const kanjiSpans = rubyElement.querySelectorAll('.kanji');
    if (kanjiSpans.length > 0) {
      wordText = Array.from(kanjiSpans).map(span => span.textContent.trim()).join('');
    }

    for (const node of rubyElement.childNodes) {
      if (node.nodeName.toLowerCase() === 'rt') {
        readingText = node.textContent.trim();
        break;
      }
    }

    if (!wordText) {
      for (const node of rubyElement.childNodes) {
        if (node.nodeName.toLowerCase() === 'rt') {
          break;
        }
        if (node.nodeType === Node.TEXT_NODE || node.nodeType === Node.ELEMENT_NODE) {
          wordText += node.textContent.trim();
        }
      }
    }

    if (!readingText) {
      wordText = rubyElement.textContent.trim();
    }
    if (!/[一-龯㐀-䶿]/.test(wordText)) return;

    const uniqueKanji = new Set();
    for (const char of wordText) {
      if (isKanji(char)) uniqueKanji.add(char);
    }

    // Fetch related words for all identified Kanji
    await Promise.all(Array.from(uniqueKanji).map(async (kanji) => {
      if (preloadedKanjiData[kanji]) return;

      const query = `note:Senren "word:*${kanji}*"`;
      const noteIds = await ankiConnectRequest("findNotes", { query });

      if (!noteIds || noteIds.length === 0) return;

      const notesInfo = await ankiConnectRequest("notesInfo", { notes: noteIds });
      if (!notesInfo) return;

      const allCardIds = [];
      notesInfo.forEach(n => { if (n.cards && n.cards.length) allCardIds.push(...n.cards); });

      const cardTypeMap = {};
      if (allCardIds.length > 0) {
        const cardsInfo = await ankiConnectRequest("cardsInfo", { cards: allCardIds });
        if (cardsInfo) {
          cardsInfo.forEach(c => cardTypeMap[c.cardId] = c.type);
        }
      }

      const relatedWords = [];
      const uniqueWords = new Set();

      for (const note of notesInfo) {
        const fields = note.fields;
        if (fields && fields.word && fields.word.value) {
          const wordValueRaw = fields.word.value;
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = wordValueRaw;
          const wordValue = tempDiv.textContent || tempDiv.innerText || "";

          if (wordValue.trim() !== wordText && !uniqueWords.has(wordValue.trim())) {
            const readingValueFull = (fields.pitchAccents ? fields.pitchAccents.value : (fields.reading ? fields.reading.value : ''));
            const sentenceValue = fields.sentence ? fields.sentence.value : '';
            let readingHtml = '';

            if (readingValueFull && readingValueFull.includes('<li')) {
              try {
                const tempDivInner = document.createElement('div');
                tempDivInner.innerHTML = readingValueFull;
                const firstLi = tempDivInner.querySelector('li');
                if (firstLi) readingHtml = firstLi.innerHTML;
              } catch (e) {
                readingHtml = readingValueFull.split(/[,、・]/)[0].trim();
              }
            } else {
              readingHtml = readingValueFull.split(/[,、・]/)[0].trim();
            }

            const pitchValue = (fields.pitchCategories ? fields.pitchCategories.value : (fields.pitch ? fields.pitch.value : ''));
            const pitchPositionValue = (fields.pitchPositions ? fields.pitchPositions.value : (fields.pitchPosition ? fields.pitchPosition.value : ''));
            const tagsValue = fields.Tags ? fields.Tags.value : '';
            const isNewCard = !note.cards.some(cid => cardTypeMap[cid] > 0);

            relatedWords.push({
              word: wordValue,
              reading: readingHtml,
              sentence: sentenceValue,
              pitch: pitchValue,
              pitchPosition: pitchPositionValue,
              tags: tagsValue,
              isNew: isNewCard,
              noteId: note.noteId
            });

            uniqueWords.add(wordValue.trim());
          }
        }
      }
      preloadedKanjiData[kanji] = relatedWords;
    }));

    // Wrap Kanji in spans for hover
    const textContent = wordText;
    const fragment = document.createDocumentFragment();
    let lastIndex = 0;

    for (let i = 0; i < textContent.length; i++) {
      if (isKanji(textContent[i])) {
        if (lastIndex < i) {
          fragment.appendChild(document.createTextNode(textContent.slice(lastIndex, i)));
        }
        const span = document.createElement("span");
        span.textContent = textContent[i];
        span.className = "kanji";
        span.addEventListener("mouseover", () => showKanjiInfo(span));
        span.addEventListener("mouseout", () => hideKanjiInfo());
        fragment.appendChild(span);
        lastIndex = i + 1;
      }
    }

    if (lastIndex < textContent.length) {
      fragment.appendChild(document.createTextNode(textContent.slice(lastIndex)));
    }

    const extraNodes = Array.from(rubyElement.childNodes).filter(node =>
      node.nodeName.toLowerCase() === 'rt' || node.nodeName.toLowerCase() === 'rp'
    );

    while (rubyElement.firstChild) {
      rubyElement.removeChild(rubyElement.firstChild);
    }

    rubyElement.appendChild(fragment);
    extraNodes.forEach(node => rubyElement.appendChild(node));
  };

  window.senrenInitKanjiHover();

})();
