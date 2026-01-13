/* _senren_deferred_v4.7.0.js */
(function () {
  // Adds hover effects to Jitendex dictionary content 
  function jitendexHover() {
    const sentencePairs = document.querySelectorAll('[data-sc-content="example-sentence-a"]');
    const xrefPairs = document.querySelectorAll('[data-sc-content="xref"]');
    const antonymPairs = document.querySelectorAll('[data-sc-content="antonym"]');
    const notePairs = document.querySelectorAll('[data-sc-content="sense-note"]');
    const explanationPairs = document.querySelectorAll('[data-sc-content="info-gloss"]');
    const langPairs = document.querySelectorAll('[data-sc-content="lang-source"]');

    const handleHover = (parentElement, elementB) => {
      if (parentElement && elementB && !parentElement.dataset.hasHoverListener) {
        parentElement.classList.add('tappable');
        parentElement.style.opacity = '0.5';
        parentElement.style.transition = 'opacity 0.3s ease';
        elementB.style.maxHeight = '0';
        elementB.style.overflow = 'hidden';
        elementB.style.transition = 'max-height 0.3s ease, opacity 0.3s ease';
        elementB.style.display = 'block';

        const showContent = () => {
          requestAnimationFrame(() => {
            parentElement.style.opacity = '1';
            elementB.style.maxHeight = elementB.scrollHeight + 'px';
            elementB.style.opacity = '1';
          });
        };

        const hideContent = () => {
          requestAnimationFrame(() => {
            parentElement.style.opacity = '0.5';
            elementB.style.maxHeight = '0';
            elementB.style.opacity = '0';
          });
        };

        elementB.addEventListener('mouseover', showContent);
        parentElement.addEventListener('mouseover', showContent);

        elementB.addEventListener('mouseout', hideContent);
        parentElement.addEventListener('mouseout', hideContent);

        const preventFlipAndLinks = (e) => {
          e.stopPropagation();
          if (e.target.tagName === 'A' || e.target.closest('a')) {
            e.preventDefault();
          }
        };

        parentElement.addEventListener('click', preventFlipAndLinks);
        elementB.addEventListener('click', preventFlipAndLinks);

        parentElement.dataset.hasHoverListener = 'true';
      }
    };

    sentencePairs.forEach(sentenceA => {
      const sentenceB = sentenceA.nextElementSibling;
      if (sentenceA && sentenceB && !sentenceA.dataset.hasClickListener) {
        sentenceA.classList.add('tappable');
        sentenceA.style.opacity = '0.5';
        sentenceA.style.transition = 'opacity 0.3s ease';
        sentenceA.style.cursor = 'pointer';
        sentenceB.style.maxHeight = '0';
        sentenceB.style.overflow = 'hidden';
        sentenceB.style.transition = 'max-height 0.3s ease, opacity 0.3s ease';
        sentenceB.style.display = 'block';
        sentenceB.style.opacity = '0';

        let isSentenceBVisible = false;

        sentenceA.addEventListener('click', (event) => {
          event.stopPropagation();
          isSentenceBVisible = !isSentenceBVisible;

          const sentenceContainer = sentenceA.closest('[data-sc-content="example-sentence"]');

          requestAnimationFrame(() => {
            if (isSentenceBVisible) {
              sentenceA.style.opacity = '1';
              sentenceB.style.maxHeight = sentenceB.scrollHeight + 'px';
              sentenceB.style.opacity = '1';

              if (sentenceContainer) {
                sentenceContainer.classList.add('sentence-active');
              }

            } else {
              if (!sentenceA.matches(':hover')) {
                sentenceA.style.opacity = '0.5';
              }
              sentenceB.style.maxHeight = '0';
              sentenceB.style.opacity = '0';

              if (sentenceContainer) {
                sentenceContainer.classList.remove('sentence-active');
              }
            }
          });
        });

        sentenceA.addEventListener('mouseenter', () => {
          sentenceA.style.opacity = '1';
        });

        sentenceA.addEventListener('mouseleave', () => {
          if (!isSentenceBVisible) {
            sentenceA.style.opacity = '0.5';
          }
        });

        sentenceB.addEventListener('click', (e) => {
          e.stopPropagation();
          if (e.target.tagName === 'A' || e.target.closest('a')) {
            e.preventDefault();
          }
        });

        sentenceA.dataset.hasClickListener = 'true';
      }
    });

    xrefPairs.forEach(xref => {
      const xrefGlossary = xref.querySelector('[data-sc-content="xref-glossary"]');
      handleHover(xref, xrefGlossary);
    });

    antonymPairs.forEach(antonym => {
      const antonymGlossary = antonym.querySelector('[data-sc-content="antonym-glossary"]');
      handleHover(antonym, antonymGlossary);
    });

    notePairs.forEach(note => {
      const noteGlossary = note.querySelector('div:last-child');
      handleHover(note, noteGlossary);
    });

    explanationPairs.forEach(explanation => {
      const infoGloss = explanation.querySelector('div:last-child');
      handleHover(explanation, infoGloss);
    });

    langPairs.forEach(lang => {
      const langSource = lang.querySelector('div:last-child');
      handleHover(lang, langSource);
    });
  }

  // Allows cycling through images
  function enableImageSwitching() {
    let currentImageIndex = 0;

    function switchImage(direction, event) {
      if (event) event.preventDefault();
      if (event) event.stopPropagation();

      const images = document.querySelectorAll('.picture-container img');
      if (images.length === 0) return;

      const visibleIndex = Array.from(images).findIndex(img => {
        return window.getComputedStyle(img).display !== 'none';
      });

      if (visibleIndex !== -1) currentImageIndex = visibleIndex;

      images.forEach(img => img.style.setProperty('display', 'none', 'important'));

      currentImageIndex += direction;

      if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
      } else if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
      }

      images[currentImageIndex].style.setProperty('display', 'block', 'important');
    }

    const arrows = document.querySelectorAll('.nav-arrow');
    const images = document.querySelectorAll('.picture-container img');

    if (images.length <= 1) {
      arrows.forEach(arrow => arrow.classList.add('hidden'));
    } else {
      arrows.forEach(arrow => arrow.classList.remove('hidden'));
    }

    arrows.forEach(arrow => {
      if (!arrow.dataset.hasClickListener) {
        arrow.addEventListener('click', (event) => {
          const direction = arrow.classList.contains('left') ? -1 : 1;
          switchImage(direction, event);
        });
        arrow.dataset.hasClickListener = 'true';
      }
    });
  }

  // Creates lightbox for image viewing
  function enableLightbox() {
    const images = document.querySelectorAll(".picture-container img");
    if (!images.length) return;

    let currentIndex = 0;
    let scale = 1, translateX = 0, translateY = 0;
    let isPanning = false, startX = 0, startY = 0;
    let isGridView = false;

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const leftButton = document.querySelector(".lightbox-nav.left");
    const rightButton = document.querySelector(".lightbox-nav.right");
    const showAll = document.getElementById("show-all");

    if (!lightbox || !lightboxImg || !leftButton || !rightButton || !showAll) return;

    if (images.length <= 1) {
      leftButton.classList.add("hidden");
      rightButton.classList.add("hidden");
      showAll.style.display = "none";
    } else {
      leftButton.classList.remove("hidden");
      rightButton.classList.remove("hidden");
      showAll.style.display = "block";
    }

    function showGridView() {
      isGridView = true;
      const gridContainer = document.createElement("div");
      gridContainer.className = "lightbox-grid";

      images.forEach((img, index) => {
        const gridImg = document.createElement("img");
        gridImg.src = img.src;
        gridImg.alt = `Image ${index + 1}`;
        gridImg.classList.add('tappable');
        gridImg.addEventListener("click", () => {
          showImage(index);
          hideGridView();
        });
        gridContainer.appendChild(gridImg);
      });

      const imgCount = images.length;
      if (imgCount <= 4) {
        gridContainer.style.gridTemplateColumns = `repeat(${imgCount}, 1fr)`;
      } else if (imgCount <= 9) {
        gridContainer.style.gridTemplateColumns = "repeat(3, 1fr)";
      } else {
        gridContainer.style.gridTemplateColumns = "repeat(4, 1fr)";
      }

      lightbox.appendChild(gridContainer);
      lightboxImg.style.display = "none";
      leftButton.style.display = "none";
      rightButton.style.display = "none";
      showAll.textContent = "Back";
    }

    function hideGridView() {
      isGridView = false;
      const grid = document.querySelector(".lightbox-grid");
      if (grid) {
        grid.remove();
      }
      lightboxImg.style.display = "block";
      leftButton.style.display = "";
      rightButton.style.display = "";
      showAll.textContent = "Show All";
    }

    const showImage = (index) => {
      if (isGridView) hideGridView();
      currentIndex = index;
      lightboxImg.src = images[index].src;
      resetTransform();
      if (images.length > 1) showAll.style.display = "block";
      lightbox.classList.add("active");
    };

    const resetTransform = () => {
      scale = 1;
      translateX = 0;
      translateY = 0;
      updateTransform();
    };

    const updateTransform = () => {
      lightboxImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    };

    images.forEach((img, index) => {
      if (!img.dataset.hasLightboxListener) {
        const container = img.closest('.picture-container');
        const isNSFW = container && container.className.toLowerCase().includes('nsfw');

        if (isNSFW) {
          img.addEventListener("click", (e) => {
            if (img.classList.contains('clicked')) {
              showImage(index);
            } else {
              img.classList.add('clicked');
            }
          });
        } else {
          img.addEventListener("click", () => showImage(index));
        }
        img.dataset.hasLightboxListener = 'true';
      }
    });

    if (!showAll.dataset.hasClickListener) {
      showAll.addEventListener("click", (e) => {
        e.stopPropagation();
        if (isGridView) {
          hideGridView();
        } else {
          showGridView();
        }
      });
      showAll.dataset.hasClickListener = 'true';
    }

    if (!lightbox.dataset.hasShortcutsListener) {
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          if (isGridView) {
            hideGridView();
          } else {
            lightbox.classList.remove("active");
          }
        }

        if (lightbox.classList.contains("active") && !isGridView) {
          if (e.key === "ArrowLeft") {
            showImage(currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1);
          }
          if (e.key === "ArrowRight") {
            showImage(currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0);
          }
        }
      });
      lightbox.dataset.hasShortcutsListener = 'true';
    }

    if (!lightboxImg.dataset.hasWheelListener) {
      lightboxImg.addEventListener("wheel", (e) => {
        e.preventDefault();
        const prevScale = scale;
        scale = Math.min(Math.max(1, scale + e.deltaY * -0.001), 3);

        if (scale === 1) {
          resetTransform();
          if (images.length > 1) showAll.style.display = "block";
        } else {
          const rect = lightboxImg.getBoundingClientRect();
          const offsetX = (e.clientX - rect.left) / rect.width;
          const offsetY = (e.clientY - rect.top) / rect.height;
          translateX -= (offsetX - 0.5) * (scale - prevScale) * rect.width;
          translateY -= (offsetY - 0.5) * (scale - prevScale) * rect.height;
          updateTransform();
          showAll.style.display = "none";
        }
      });
      lightboxImg.dataset.hasWheelListener = 'true';
    }

    if (!lightboxImg.dataset.hasMousedownListener) {
      lightboxImg.addEventListener("mousedown", (e) => {
        if (scale === 1) return;
        e.preventDefault();
        isPanning = true;
        startX = e.clientX - translateX;
        startY = e.clientY - translateY;
        lightboxImg.style.cursor = "grabbing";
      });
      lightboxImg.dataset.hasMousedownListener = 'true';
    }

    let initialDistance = null;

    if (!lightboxImg.dataset.hasTouchListeners) {
      lightboxImg.addEventListener('touchstart', (e) => {
        if (e.touches.length === 2) {
          initialDistance = Math.hypot(
            e.touches[0].pageX - e.touches[1].pageX,
            e.touches[0].pageY - e.touches[1].pageY
          );
          isPanning = false;
        } else if (e.touches.length === 1 && scale > 1) {
          isPanning = true;
          startX = e.touches[0].pageX - translateX;
          startY = e.touches[0].pageY - translateY;
          initialDistance = null;
        } else {
          isPanning = false;
          initialDistance = null;
        }
      });

      lightboxImg.addEventListener('touchmove', (e) => {
        if (e.touches.length === 2 && initialDistance !== null) {
          e.preventDefault();
          const newDistance = Math.hypot(
            e.touches[0].pageX - e.touches[1].pageX,
            e.touches[0].pageY - e.touches[1].pageY
          );
          const newScale = scale * (newDistance / initialDistance);
          const prevScale = scale;

          scale = Math.min(Math.max(1, newScale), 3);

          if (scale > 1) {
            const rect = lightboxImg.getBoundingClientRect();
            const touchCenterX = (e.touches[0].pageX + e.touches[1].pageX) / 2;
            const touchCenterY = (e.touches[0].pageY + e.touches[1].pageY) / 2;

            const offsetX = (touchCenterX - rect.left) / rect.width;
            const offsetY = (touchCenterY - rect.top) / rect.height;

            translateX -= (offsetX - 0.5) * (scale - prevScale) * rect.width;
            translateY -= (offsetY - 0.5) * (scale - prevScale) * rect.height;

            updateTransform();
            showAll.style.display = "none";
          } else {
            resetTransform();
            if (images.length > 1) showAll.style.display = "block";
          }
          initialDistance = newDistance;

        } else if (e.touches.length === 1 && isPanning) {
          e.preventDefault();
          translateX = e.touches[0].pageX - startX;
          translateY = e.touches[0].pageY - startY;
          updateTransform();
        }
      });

      lightboxImg.addEventListener('touchend', (e) => {
        if (e.touches.length < 2) {
          initialDistance = null;
        }
        if (e.touches.length < 1) {
          isPanning = false;
        }
      });
      lightboxImg.dataset.hasTouchListeners = 'true';
    }

    const moveImage = (e) => {
      if (!isPanning) return;
      translateX = e.clientX - startX;
      translateY = e.clientY - startY;
      updateTransform();
    };

    if (!lightbox.dataset.hasMouseMoveListeners) {
      document.addEventListener("mousemove", (e) => {
        if (isPanning) requestAnimationFrame(() => moveImage(e));
      });

      document.addEventListener("mouseup", () => {
        isPanning = false;
        lightboxImg.style.cursor = "grab";
      });
      lightbox.dataset.hasMouseMoveListeners = 'true';
    }

    if (!lightbox.dataset.hasClickListeners) {
      lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox ||
          (isGridView && !e.target.closest('.lightbox-grid img') && e.target !== showAll)) {
          if (isGridView) {
            lightbox.classList.remove("active");
          } else {
            lightbox.classList.remove("active");
          }
        }
      });

      lightbox.addEventListener("touchend", (e) => {
        if (e.target === lightbox ||
          (isGridView && !e.target.closest('.lightbox-grid img') && e.target !== showAll)) {
          if (isGridView) {
            lightbox.classList.remove("active");
          } else {
            lightbox.classList.remove("active");
          }
        }
      });
      lightbox.dataset.hasClickListeners = 'true';
    }

    if (!leftButton.dataset.hasClickListener) {
      leftButton.addEventListener("click", () => {
        showImage(currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1);
      });
      leftButton.dataset.hasClickListener = 'true';
    }

    if (!rightButton.dataset.hasClickListener) {
      rightButton.addEventListener("click", () => {
        showImage(currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0);
      });
      rightButton.dataset.hasClickListener = 'true';
    }
  }

  // Custom Shortcuts
  function enableCustomShortcuts() {
    ['senrenFrontSettingsHandler', 'senrenBackKeyHandler'].forEach(h => {
      if (window[h]) document.removeEventListener('keydown', window[h]);
      window[h] = null;
    });

    const utils = {
      isTyping: () => {
        const active = document.activeElement;
        return active && ['INPUT', 'TEXTAREA'].includes(active.tagName);
      },

      getVar: (name) => {
        const map = {
          '--toggle-settings-key': 'toggleSettingsKey',
          '--toggle-picture-lightbox-grid-key': 'togglePictureLightboxGridKey',
          '--toggle-picture-lightbox-key': 'togglePictureLightboxKey',
          '--toggle-custom-dark-mode-key': 'toggleCustomDarkModeKey',
          '--toggle-image-key': 'toggleImageKey'
        };
        const key = map[name];
        return key ? senrenConfig[key] : '';
      }
    };

    const actions = {
      settings: () => {
        const modal = document.getElementById('senren-settings-modal');
        const btn = document.querySelector('.toggle-settings-btn');

        if (modal) {
          modal.classList.toggle('active');
        } else if (btn) {
          btn.click();
        }
      },

      lightboxGrid: () => {
        const lb = document.getElementById("lightbox");
        const btn = document.getElementById("show-all");

        if (lb && !lb.classList.contains("active")) {
          const img = document.querySelector('.picture-container img[style*="display: block"]') ||
            document.querySelector('.picture-container img');

          img?.click();
          setTimeout(() => btn?.click(), 10);
        } else if (btn) {
          btn.click();
        }
      },

      lightbox: () => {
        const lb = document.getElementById("lightbox");

        if (lb?.classList.contains("active")) {
          lb.classList.remove("active");

          const grid = document.querySelector(".lightbox-grid");
          if (grid) grid.remove();

          const showAll = document.getElementById("show-all");
          if (showAll) showAll.textContent = "Show All";

          const navs = document.querySelectorAll(".lightbox-nav");
          navs.forEach(n => n.style.display = "");
        } else {
          const imgs = document.querySelectorAll('.picture-container img');
          const visible = Array.from(imgs).find(i => getComputedStyle(i).display !== 'none') || imgs[0];

          visible?.click();
        }
      },

      customDarkMode: () => {
        const dmBtn = document.querySelector(".toggle-custom-dark-mode");

        if (dmBtn) dmBtn.click();
      },

      imageToggle: () => {
        const wrap = document.querySelector('.back');
        const btn = document.querySelector('.header .show-btn');

        if (wrap && btn) {
          const isHidden = wrap.classList.toggle('image-removed');

          localStorage.setItem("senrenImageHidden", isHidden);
          btn.style.setProperty('display', isHidden ? 'flex' : 'none', 'important');

          if (typeof dynamicCardHeight === 'function') dynamicCardHeight();
        }
      }
    };

    if (window.senrenBackKeyHandler) {
      document.removeEventListener('keydown', window.senrenBackKeyHandler);
      window.senrenBackKeyHandler = null;
    }

    window.senrenBackKeyHandler = (e) => {
      if (utils.isTyping()) return;

      const shortcuts = [
        { key: senrenConfig.toggleSettingsKey, action: actions.settings },
        { key: senrenConfig.togglePictureLightboxGridKey, action: actions.lightboxGrid },
        { key: senrenConfig.togglePictureLightboxKey, action: actions.lightbox },
        { key: senrenConfig.toggleCustomDarkModeKey, action: actions.customDarkMode },
        { key: senrenConfig.toggleImageKey, action: actions.imageToggle }
      ];

      for (const item of shortcuts) {
        const keyStr = item.key;

        if (!keyStr) continue;

        const config = parseKeyConfig(keyStr);

        if (isKeyMatch(e, config)) {
          e.preventDefault();
          e.stopPropagation();

          item.action();
          break;
        }
      }
    };

    document.addEventListener('keydown', window.senrenBackKeyHandler);
  }

  // Init
  function senrenInitDeferred() {
    jitendexHover();
    enableImageSwitching();
    enableLightbox();
    if (!window.IS_MOBILE) {
      enableCustomShortcuts();
    }
  }

  window.senrenInitDeferred = senrenInitDeferred;
  senrenInitDeferred();
})();
