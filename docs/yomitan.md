# Setup: Anki

Configure Yomitan to automatically populate Senren's fields when creating cards.

## Fields Configuration

In Yomitan Settings -> Anki -> Configure Anki Card Format:

| Field                | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Note                                                                                                                                                                        |
|----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `word`               | `{expression}`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |                                                                                                                                                                             |
| `sentence`           | `{cloze-prefix}<span class="highlight">{cloze-body}</span>{cloze-suffix}`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                                                                                             |
| `sentenceFurigana` | `{sentence-furigana-plain}`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |                                                                                                                                      |
| `sentenceEng`        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Leave empty.                                                                                                                |
| `reading`            | `{pitch-accents}`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Change to `{reading}` if you don't use/want pitch accents.                                                                                                                 |
| `sentenceCard`            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Leave empty.                                                                                                                 |
| `audioCard`            |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Leave empty.                                                                                                                 |
| `definition`         | `{single-glossary-jitendexorg-2025-01-27-brief}`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Set your primary dictionary here. Use the `-brief` version if available.                                                                            |
| `wordAudio`          | `{audio}`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |                                                                                                                                                                             |
| `sentenceAudio`      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Leave empty.                                                                                                                    |
| `picture`            | `{clipboard-image}`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |                                                                                                                             |
| `glossary`           | `{single-glossary-新選国語辞典-第十版-brief}{single-glossary-デジタル大辞泉-brief}{single-glossary-漢検漢字辞典-第二版-brief}{single-glossary-明鏡国語辞典-第二版-brief}{single-glossary-旺文社国語辞典-第十一版-brief}{single-glossary-岩波国語辞典-第八版-brief}{single-glossary-ハイブリッド新辞林-brief}{single-glossary-広辞苑-第七版-brief}{single-glossary-精選版-日本国語大辞典-brief}{single-glossary-大辞林-第四版-brief}{single-glossary-実用日本語表現辞典-brief}{single-glossary-故事ことわざの辞典-brief}{single-glossary-漢字源-brief}{single-glossary-新明解四字熟語辞典-brief}{single-glossary-学研-四字熟語辞典-brief}{single-glossary-語彙力二字熟語の百科事典-brief}{single-glossary-使い方の分かる-類語例解辞典-brief}{single-glossary-全国方言辞典-brief}{single-glossary-日本語俗語辞書-brief}{single-glossary-jlpt文法解説まとめ-brief}{single-glossary-画像付き-絵でわかる日本語-brief}{single-glossary-ことわざ慣用句の百科事典-brief}` | **Example:** List your desired secondary dictionaries. Use `-brief` versions. Requires "Group term-reading pairs" or "Group related terms" in Result Display [(see below)](#result-display-setting). [Dictionaries Used](https://drive.google.com/drive/folders/1OgCWBif-wnN5iz8k1oi_UQdB0_niDud4?usp=sharing). |
| `pitchPosition`      | `{pitch-accent-positions}`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Requires pitch accent dictionaries. [Downloads](https://drive.google.com/drive/folders/1dMjjHX7_rnTKCHU3btnQReM9M4f2Sirr?usp=sharing)                                 |
| `pitch`              | `{pitch-accent-categories}`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Uses same pitch dictionaries.                                                                                                                                               |
| `frequency`          | `{frequencies}`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Requires frequency dictionaries. [Downloads](https://drive.google.com/drive/folders/1cJn4lw-a-YollDJvEkfUyRcel6QndFDN?usp=sharing)                                      |
| `freqSort`           | `{frequency-harmonic-rank}`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Used for sorting new cards. Uses same frequency dictionaries.                                                                                                              |
| `miscInfo`           | `{document-title}`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Captures the source web page title. Leave empty if using mpvacious or similar tools that populate this.                                                                     |
| `dictionaryPreference`| `glossary`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Enter `glossary` to show the glossary field first by default. Leave empty to show the `definition` field first. Use [Batch Editing add-on](https://ankiweb.net/shared/info/291119185) to update existing cards.           |

## Result Display Setting

Crucially, for the `glossary` field to work correctly with multiple dictionaries listed, you need to enable grouping in Yomitan:

Go to **Yomitan Settings** -> **Appearance** -> **Result Display** and select either:

*   **Group term-reading pairs** OR
*   **Group related terms**

![Yomitan Result Display Setting](assets/images/Result_Display.png)

## Handlebars Template (Optional)

This Handlebars template displays the **Reading (kana)** as fallback for words lacking pitch data.

* Go to Yomitan Settings -> Anki -> Configure Anki card Templates...
* Select all existing content in the template editor.
* Replace it with the following code:

??? note "Click to expand Handlebars code"

    ```
    {{#*inline "glossary-single"}}
        {{~#unless brief~}}
            {{~#scope~}}
                {{~set "any" false~}}
                {{~#each definitionTags~}}
                    {{~#if (op "||" (op "!" @root.compactTags) (op "!" redundant))~}}
                        {{~#if (get "any")}}, {{else}}<i>({{/if~}}
                        {{name}}
                        {{~set "any" true~}}
                    {{~/if~}}
                {{~/each~}}
                {{~#unless noDictionaryTag~}}
                    {{~#if (op "||" (op "!" @root.compactTags) (op "!==" dictionary (get "previousDictionary")))~}}
                        {{~#if (get "any")}}, {{else}}<i>({{/if~}}
                        {{dictionaryAlias}}
                        {{~set "any" true~}}
                    {{~/if~}}
                {{~/unless~}}
                {{~#if (get "any")}})</i> {{/if~}}
            {{~/scope~}}
            {{~#if only~}}({{#each only}}{{.}}{{#unless @last}}, {{/unless}}{{/each}} only) {{/if~}}
        {{~/unless~}}
        {{~#if (op "<=" glossary.length 1)~}}
            {{#each glossary}}{{formatGlossary ../dictionary .}}{{/each}}
        {{~else if @root.compactGlossaries~}}
            {{#each glossary}}{{formatGlossary ../dictionary .}}{{#unless @last}} | {{/unless}}{{/each}}
        {{~else~}}
            <ul>{{#each glossary}}<li>{{formatGlossary ../dictionary .}}</li>{{/each}}</ul>
        {{~/if~}}
        {{~set "previousDictionary" dictionary~}}
    {{/inline}}

    {{#*inline "audio"}}
        {{~#if (hasMedia "audio")~}}
            [sound:{{getMedia "audio"}}]
        {{~/if~}}
    {{/inline}}

    {{#*inline "character"}}
        {{~definition.character~}}
    {{/inline}}

    {{#*inline "dictionary"}}
        {{~definition.dictionary~}}
    {{/inline}}

    {{#*inline "dictionary-alias"}}
        {{~definition.dictionaryAlias~}}
    {{/inline}}

    {{#*inline "expression"}}
        {{~#if merge~}}
            {{~#if modeTermKana~}}
                {{~#each definition.reading~}}
                    {{{.}}}
                    {{~#unless @last}}、{{/unless~}}
                {{~else~}}
                    {{~#each definition.expression~}}
                        {{{.}}}
                        {{~#unless @last}}、{{/unless~}}
                    {{~/each~}}
                {{~/each~}}
            {{~else~}}
                {{~#each definition.expression~}}
                    {{{.}}}
                    {{~#unless @last}}、{{/unless~}}
                {{~/each~}}
            {{~/if~}}
        {{~else~}}
            {{~#if modeTermKana~}}
                {{~#if definition.reading~}}
                    {{definition.reading}}
                {{~else~}}
                    {{definition.expression}}
                {{~/if~}}
            {{~else~}}
                {{definition.expression}}
            {{~/if~}}
        {{~/if~}}
    {{/inline}}

    {{#*inline "furigana"}}
        {{~#if merge~}}
            {{~#each definition.expressions~}}
                <span class="expression-{{termFrequency}}">{{~furigana .~}}</span>
                {{~#unless @last}}、{{/unless~}}
            {{~/each~}}
        {{~else~}}
            {{furigana definition}}
        {{~/if~}}
    {{/inline}}

    {{#*inline "furigana-plain"}}
        {{~#if merge~}}
            {{~#each definition.expressions~}}
                <span class="expression-{{termFrequency}}">{{~furiganaPlain .~}}</span>
                {{~#unless @last}}、{{/unless~}}
            {{~/each~}}
        {{~else~}}
            {{furiganaPlain definition}}
        {{~/if~}}
    {{/inline}}

    {{~#*inline "glossary"~}}
        <div style="text-align: left;" class="yomitan-glossary">
        {{~#scope~}}
            {{~#if (op "===" definition.type "term")~}}
                {{~#unless (op "&&" selectedDictionary (op "!=" selectedDictionary definition.dictionary))~}}
                    {{~> glossary-single definition brief=brief noDictionaryTag=noDictionaryTag ~}}
                    {{~#if definition.glossaryScopedStyles~}}
                        <style>{{{definition.glossaryScopedStyles}}}</style>
                    {{~/if~}}
                {{~/unless~}}
            {{~else if (op "||" (op "===" definition.type "termGrouped") (op "===" definition.type "termMerged"))~}}
                {{~#if (op ">" definition.definitions.length 1)~}}
                    <ol>
                        {{~#each definition.definitions~}}
                            {{~#unless (op "&&" ../selectedDictionary (op "!=" ../selectedDictionary dictionary))~}}
                                <li data-dictionary="{{dictionary}}">
                                    {{~> glossary-single . brief=../brief noDictionaryTag=../noDictionaryTag ~}}
                                </li>
                                {{~#if dictScopedStyles~}}
                                    <style>{{{dictScopedStyles}}}</style>
                                {{~/if~}}
                            {{~/unless~}}
                        {{~/each~}}
                    </ol>
                {{~else~}}
                    {{~#each definition.definitions~}}
                        {{~#unless (op "&&" ../selectedDictionary (op "!=" ../selectedDictionary dictionary))~}}
                            {{~> glossary-single . brief=../brief noDictionaryTag=../noDictionaryTag ~}}
                            {{~#if glossaryScopedStyles~}}
                                <style>{{{glossaryScopedStyles}}}</style>
                            {{~/if~}}
                        {{~/unless~}}
                    {{~/each~}}
                {{~/if~}}
            {{~else if (op "===" definition.type "kanji")~}}
                {{~#if (op ">" definition.glossary.length 1)~}}
                    <ol>{{#each definition.glossary}}<li>{{.}}</li>{{/each}}</ol>
                {{~else~}}
                    {{~#each definition.glossary~}}{{.}}{{~/each~}}
                {{~/if~}}
            {{~/if~}}
        {{~/scope~}}
        </div>
    {{~/inline~}}

    {{#*inline "glossary-no-dictionary"}}
        {{~> glossary noDictionaryTag=true ~}}
    {{/inline}}

    {{#*inline "glossary-brief"}}
        {{~> glossary brief=true ~}}
    {{/inline}}

    {{~#*inline "glossary-first"~}}
        <div style="text-align: left;" class="yomitan-glossary">
        {{~#scope~}}
            {{~#if (op "===" definition.type "term")~}}
                {{~> glossary-single definition brief=brief noDictionaryTag=noDictionaryTag ~}}
                {{~#if definition.glossaryScopedStyles~}}
                    <style>{{{definition.glossaryScopedStyles}}}</style>
                {{~/if~}}
            {{~else if (op "||" (op "===" definition.type "termGrouped") (op "===" definition.type "termMerged"))~}}
                {{~#if (op ">" definition.definitions.length 1)~}}
                    {{~#with definition.definitions.[0]~}}
                        {{~> glossary-single . brief=../brief noDictionaryTag=../noDictionaryTag ~}}
                        {{~#if glossaryScopedStyles~}}
                            <style>{{{glossaryScopedStyles}}}</style>
                        {{~/if~}}
                    {{~/with~}}
                {{~else~}}
                    {{~#with definition.definitions.[0]~}}
                        {{~> glossary-single . brief=../brief noDictionaryTag=../noDictionaryTag ~}}
                        {{~#if glossaryScopedStyles~}}
                            <style>{{{glossaryScopedStyles}}}</style>
                        {{~/if~}}
                    {{~/with~}}
                {{~/if~}}
            {{~/if~}}
        {{~/scope~}}
        </div>
    {{~/inline~}}

    {{#*inline "glossary-first-no-dictionary"}}
        {{~> glossary-first noDictionaryTag=true ~}}
    {{/inline}}

    {{#*inline "glossary-first-brief"}}
        {{~> glossary-first brief=true ~}}
    {{/inline}}

    {{#*inline "kunyomi"}}
        {{~#each definition.kunyomi}}{{.}}{{#unless @last}}, {{/unless}}{{/each~}}
    {{/inline}}

    {{#*inline "onyomi"}}
        {{~#each definition.onyomi}}{{.}}{{#unless @last}}, {{/unless}}{{/each~}}
    {{/inline}}

    {{#*inline "onyomi-hiragana"}}
        {{~#each definition.onyomi}}{{hiragana .}}{{#unless @last}}, {{/unless}}{{/each~}}
    {{/inline}}

    {{#*inline "reading"}}
        {{~#unless modeTermKana~}}
            {{~#if merge~}}
                {{~#each definition.reading~}}
                    {{{.}}}
                    {{~#unless @last}}、{{/unless~}}
                {{~/each~}}
            {{~else~}}
                {{~definition.reading~}}
            {{~/if~}}
        {{~/unless~}}
    {{/inline}}

    {{#*inline "sentence"}}
        {{~#if definition.cloze}}{{{definition.cloze.sentence}}}{{/if~}}
    {{/inline}}

    {{#*inline "cloze-prefix"}}
        {{~#if definition.cloze}}{{{definition.cloze.prefix}}}{{/if~}}
    {{/inline}}

    {{#*inline "cloze-body"}}
        {{~#if definition.cloze}}{{{definition.cloze.body}}}{{/if~}}
    {{/inline}}

    {{#*inline "cloze-body-kana"}}
        {{~#if definition.cloze}}{{{definition.cloze.bodyKana}}}{{/if~}}
    {{/inline}}

    {{#*inline "cloze-suffix"}}
        {{~#if definition.cloze}}{{{definition.cloze.suffix}}}{{/if~}}
    {{/inline}}

    {{#*inline "tags"}}
        {{~#mergeTags definition group merge}}{{this}}{{/mergeTags~}}
    {{/inline}}

    {{~#*inline "url"~}}
        <a href="{{definition.url}}">{{definition.url}}</a>
    {{~/inline~}}

    {{#*inline "screenshot"}}
        {{~#if (hasMedia "screenshot")~}}
            <img src="{{getMedia "screenshot"}}" />
        {{~/if~}}
    {{/inline}}

    {{#*inline "document-title"}}
        {{~context.document.title~}}
    {{/inline}}

    {{! Pitch Accents }}
    {{#*inline "pitch-accent-item"}}
        {{~pronunciation format=format reading=reading downstepPosition=position nasalPositions=nasalPositions devoicePositions=devoicePositions~}}
    {{/inline}}

    {{#*inline "pitch-accent-item-disambiguation"}}
        {{~#scope~}}
            {{~set "exclusive" (spread exclusiveExpressions exclusiveReadings)~}}
            {{~#if (op ">" (property (get "exclusive") "length") 0)~}}
                {{~set "separator" ""~}}
                <em>({{#each (get "exclusive")~}}
                    {{~get "separator"~}}{{{.}}}
                {{~/each}} only) </em>
            {{~/if~}}
        {{~/scope~}}
    {{/inline}}

    {{#*inline "pitch-accent-list"}}
        {{~#if (op ">" pitchCount 0)~}}
            {{~#if (op ">" pitchCount 1)~}}<ol>{{~/if~}}
            {{~#each pitches~}}
                {{~#each pitches~}}
                    {{~#if (op ">" ../../pitchCount 1)~}}<li>{{~/if~}}
                        {{~> pitch-accent-item-disambiguation~}}
                        {{~> pitch-accent-item format=../../format~}}
                    {{~#if (op ">" ../../pitchCount 1)~}}</li>{{~/if~}}
                {{~/each~}}
            {{~/each~}}
            {{~#if (op ">" pitchCount 1)~}}</ol>{{~/if~}}
        {{~/if~}}
    {{/inline}}

    {{#*inline "pitch-accents"}}
        {{#if (op ">" pitchCount 0)}}
            {{~> pitch-accent-list format='text'~}}
        {{else}}
            {{~definition.reading~}}
        {{/if}}
    {{/inline}}

    {{#*inline "pitch-accent-graphs"}}
        {{~> pitch-accent-list format='graph'~}}
    {{/inline}}

    {{#*inline "pitch-accent-graphs-jj"}}
        {{~> pitch-accent-list format='graph-jj'~}}
    {{/inline}}

    {{#*inline "pitch-accent-positions"}}
        {{~> pitch-accent-list format='position'~}}
    {{/inline}}

    {{~#*inline "pitch-accent-categories"~}}
        {{~#each (pitchCategories @root)~}}{{~.~}}{{~#unless @last~}},{{~/unless~}}{{~/each~}}
    {{~/inline~}}
    {{! End Pitch Accents }}

    {{#*inline "phonetic-transcriptions"}}
        {{~#if (op ">" definition.phoneticTranscriptions.length 0)~}}
            <ul>
                {{~#each definition.phoneticTranscriptions~}}
                    {{~#each phoneticTranscriptions~}}
                        <li class="pronunciation" data-pronunciation-type="phonetic-transcription">
                            {{~set "any" false~}}
                            {{~#each tags~}}
                                {{~#if (get "any")}}, {{else}}<i>({{/if~}}
                                <span class="tag" data-details="{{name}}">{{name}}</span>
                                {{~set "any" true~}}
                            {{~/each~}}
                            {{~#if (get "any")}})</i> {{/if~}}
                            {{ipa~}}
                        </li>
                    {{~/each~}}
                {{~/each~}}
            </ul>
        {{~/if~}}
    {{/inline}}

    {{#*inline "clipboard-image"}}
        {{~#if (hasMedia "clipboardImage")~}}
            <img src="{{getMedia "clipboardImage"}}" />
        {{~/if~}}
    {{/inline}}

    {{#*inline "clipboard-text"}}
        {{~#if (hasMedia "clipboardText")}}{{{getMedia "clipboardText"}}}{{/if~}}
    {{/inline}}

    {{#*inline "conjugation"}}
        {{~#if (op ">" definition.inflectionRuleChainCandidates.length 0)~}}
            {{~set "multiple" false~}}
            {{~#if (op ">" definition.inflectionRuleChainCandidates.length 1)~}}
                {{~set "multiple" true~}}
            {{~/if~}}
            {{~#if (get "multiple")~}}<ul>{{/if~}}
                {{~#each definition.inflectionRuleChainCandidates~}}
                    {{~#if (op ">" inflectionRules.length 0)~}}
                        {{~#if (get "multiple")~}}<li>{{/if~}}
                        {{~#each inflectionRules~}}
                            {{~#if (op ">" @index 0)}} « {{/if~}}
                            {{name}}
                        {{~/each~}}
                        {{~#if (get "multiple")~}}</li>{{/if~}}
                    {{~/if~}}
                {{~/each~}}
            {{~#if (get "multiple")~}}</ul>{{/if~}}
        {{~/if~}}
    {{/inline}}

    {{#*inline "frequencies"}}
        {{~#if (op ">" definition.frequencies.length 0)~}}
            <ul style="text-align: left;">
            {{~#each definition.frequencies~}}
                <li>
                {{~#if (op "!==" ../definition.type "kanji")~}}
                    {{~#if (op "||" (op ">" ../uniqueExpressions.length 1) (op ">" ../uniqueReadings.length 1))~}}(
                        {{~furigana expression reading~}}
                    ) {{/if~}}
                {{~/if~}}
                {{~dictionaryAlias}}: {{frequency~}}
                </li>
            {{~/each~}}
            </ul>
        {{~/if~}}
    {{/inline}}

    {{#*inline "frequency-harmonic-rank"}}
        {{~#if (op "===" definition.frequencyHarmonic -1) ~}}
            9999999
        {{~else ~}}
            {{definition.frequencyHarmonic}}
        {{~/if~}}
    {{/inline}}

    {{#*inline "frequency-harmonic-occurrence"}}
        {{~#if (op "===" definition.frequencyHarmonic -1) ~}}
            0
        {{~else ~}}
            {{definition.frequencyHarmonic}}
        {{~/if~}}
    {{/inline}}

    {{#*inline "frequency-average-rank"}}
        {{~#if (op "===" definition.frequencyAverage -1) ~}}
            9999999
        {{~else ~}}
            {{definition.frequencyAverage}}
        {{~/if~}}
    {{/inline}}

    {{#*inline "frequency-average-occurrence"}}
        {{~#if (op "===" definition.frequencyAverage -1) ~}}
            0
        {{~else ~}}
            {{definition.frequencyAverage}}
        {{~/if~}}
    {{/inline}}

    {{#*inline "stroke-count"}}
        {{~#scope~}}
            {{~set "found" false~}}
            {{~#each definition.stats.misc~}}
                {{~#if (op "===" name "strokes")~}}
                    {{~set "found" true~}}
                    Stroke count: {{value}}
                {{~/if~}}
            {{~/each~}}
            {{~#if (op "!" (get "found"))~}}
                Stroke count: Unknown
            {{~/if~}}
        {{~/scope~}}
    {{/inline}}

    {{#*inline "part-of-speech-pretty"}}
        {{~#if (op "===" . "v1")~}}Ichidan verb
        {{~else if (op "===" . "v5")~}}Godan verb
        {{~else if (op "===" . "vk")~}}Kuru verb
        {{~else if (op "===" . "vs")~}}Suru verb
        {{~else if (op "===" . "vz")~}}Zuru verb
        {{~else if (op "===" . "adj-i")~}}I-adjective
        {{~else if (op "===" . "n")~}}Noun
        {{~else~}}{{.}}
        {{~/if~}}
    {{/inline}}

    {{#*inline "part-of-speech"}}
        {{~#scope~}}
            {{~#if (op "!==" definition.type "kanji")~}}
                {{~set "first" true~}}
                {{~#each definition.expressions~}}
                    {{~#each wordClasses~}}
                        {{~#unless (get (concat "used_" .))~}}
                            {{~> part-of-speech-pretty . ~}}
                            {{~#unless (get "first")}}, {{/unless~}}
                            {{~set (concat "used_" .) true~}}
                            {{~set "first" false~}}
                        {{~/unless~}}
                    {{~/each~}}
                {{~/each~}}
                {{~#if (get "first")~}}Unknown{{~/if~}}
            {{~/if~}}
        {{~/scope~}}
    {{/inline}}

    {{#*inline "search-query"}}
        {{~#multiLine}}{{context.fullQuery}}{{/multiLine~}}
    {{/inline}}

    {{#*inline "popup-selection-text"}}
        {{~#if (hasMedia "popupSelectionText")}}{{{getMedia "popupSelectionText"}}}{{/if~}}
    {{/inline}}

    {{#*inline "sentence-furigana"}}
        {{~#if definition.cloze~}}
            {{~#if (hasMedia "textFurigana" definition.cloze.sentence)~}}
                {{{getMedia "textFurigana" definition.cloze.sentence escape=false}}}
            {{~else~}}
                {{{definition.cloze.sentence}}}
            {{~/if~}}
        {{~/if~}}
    {{/inline}}

    {{#*inline "sentence-furigana-plain"}}
        {{~#if definition.cloze~}}
            {{~#if (hasMedia "textFuriganaPlain" definition.cloze.sentence)~}}
                {{{getMedia "textFuriganaPlain" definition.cloze.sentence escape=false}}}
            {{~else~}}
                {{{definition.cloze.sentence}}}
            {{~/if~}}
        {{~/if~}}
    {{/inline}}
    {{~> (lookup . "marker") ~}}
    ```
  ## CSS Template (Optional) 

* Go to Yomitan Settings -> Appearance -> Configure Custom CSS...
* Select all existing content in the template editor.
* Replace it with the following code:

??? note "Click to expand CSS code"

    ```
    :root[data-theme="dark"] {
      --dict-color-opacity: 100%;
      --dict-color: var(--tag-dictionary-background-color);
      --dict-bg-opacity: 0;
      --tag-text-color: white;
      --tag-border-color: transparent --tag-default-background-color: #88C0D0;
      --tag-name-background-color: #88C0D0;
      --tag-expression-background-color: #88C0D0;
      --tag-popular-background-color: #88C0D0;
      --tag-frequent-background-color: #88C0D0;
      --tag-archaism-background-color: #88C0D0;
      --tag-dictionary-background-color: #8FBCBB;
      --tag-frequency-background-color: #81A1C1;
      --tag-part-of-speech-background-color: #88C0D0;
      --tag-search-background-color: #88C0D0;
      --tag-pitch-accent-dictionary-background-color: #5E81AC;
      --accent-color: #FCFF61;
      --text-color: white;
      --pitch-accent-annotation-color: #ebffff;
      --input-background-color: #3B4252;
      --reason-text-color: #5E81AC;
      --notification-text-color: #ebffff;
      --notification-background-color: #3B4252;
      --progress-bar-track-color: #D8DEE9;
      --sidebar-background-color: #2E3440;
      --sidebar-button-background-color: transparent;
      --sidebar-button-background-color-hover: #81A1C1;
      --sidebar-button-background-color-active: #6d88a3;
      --sidebar-button-danger-background-color: transparent;
      --sidebar-button-danger-background-color-hover: #BF616A;
      --sidebar-button-danger-background-color-active: #8a373f;
      --sidebar-button-icon-color: #ebffff;
      --sidebar-button-disabled-icon-color: #808c8c;
      --sidebar-button-danger-icon-color: #ebffff;
      --toggle-track-color: #cccccc;
    }

    /* Base Settings */
    body {
      font-family: "Noto Sans JP", sans-serif;
    }

    .source-text {
      font-family: klee one;
      font-size: 1.5rem;
    }

    .source-text rt {
      font-family: Noto Sans JP;
      font-size: 1.5rem;
    }

    ul, ol, li {
      list-style: none !important;
    }

    ul, ol {
      display: inline;
    }

    .definition-list {
      padding: 0;
    }

    .entry-current-indicator {
      display: none;
    }

    .toggle>input[type=checkbox]:checked+.toggle-body>.toggle-track {
      background: var(--toggle-track-color);
    }

    /* Disable furigana on search page */
    rt.query-parser-segment-reading {
      display: none;
    }

    /* Dictionary Colorizer */
    .definition-item {
      background-color: color-mix(in srgb,
        var(--dict-color) calc(var(--dict-bg-opacity) * var(--dict-color-opacity)),
        var(--background-color));
      --tag-dictionary-background-color: var(--dict-color);
    }

    .definition-item[data-dictionary^="旺文社国語辞典"] {
      --dict-color: rgb(187, 255, 255);
      --dict-bg-opacity: 0.06;
      --tag-text-color: black;
    }

    .definition-item[data-dictionary^="明鏡国語辞典"] {
      --dict-color: rgb(51, 51, 221);
      --dict-bg-opacity: 0.03;
    }

    .definition-item[data-dictionary^="岩波国語辞"] {
      --dict-color: rgb(51, 85, 51);
      --dict-bg-opacity: 0.05;
    }

    .definition-item[data-dictionary*="新明解"] {
      --dict-color: rgb(255, 0, 0);
      --dict-bg-opacity: 0.025;
    }

    .definition-item[data-dictionary^="大辞林"] {
      --dict-color: rgb(85, 34, 85);
      --dict-bg-opacity: 0.03;
    }

    .definition-item[data-dictionary="デジタル大辞泉"] {
      --dict-color: rgb(170, 0, 0);
      --dict-bg-opacity: 0.04;
    }

    .definition-item[data-dictionary="精選版　日本国語大辞典"] {
      --dict-color: rgb(238, 238, 204);
      --dict-bg-opacity: 0.05;
      --tag-text-color: black;
    }

    .definition-item[data-dictionary="ハイブリッド新辞林"] {
      --dict-color: rgb(221, 221, 238);
      --dict-bg-opacity: 0.15;
      --tag-text-color: black;
    }

    .definition-item[data-dictionary^="広辞苑"] {
      --dict-color: rgb(51, 51, 51);
      --dict-bg-opacity: 0.05;
    }

    .definition-item[data-dictionary$="辞典オンライン"],
    .definition-item[data-dictionary="故事・ことわざ・慣用句オンライン"] {
      --dict-color: rgb(255, 227, 124);
      --dict-bg-opacity: 0.05;
      --tag-text-color: black;
    }

    .definition-item[data-dictionary="実用日本語表現辞典"] {
      --dict-color: rgb(99, 108, 141);
      --dict-bg-opacity: 0.05;
    }

    .definition-item[data-dictionary^="三省堂国語辞典"] {
      --dict-color: rgb(229, 107, 57);
      --dict-bg-opacity: 0.03;
    }

    .definition-item[data-dictionary^="JMdict"],
    .definition-item[data-dictionary^="JMDict"],
    .definition-item[data-dictionary^="JMnedict"],
    .definition-item[data-dictionary^="Jitendex"] {
      --dict-color: rgb(0, 132, 255);
      --dict-bg-opacity: 0.02;
    }

    .definition-item[data-dictionary="NEW斎藤和英大辞典"] {
      --dict-color: rgb(244, 225, 254);
      --dict-bg-opacity: 0.15;
      --tag-text-color: black;
    }

    .definition-item[data-dictionary="新和英"] {
      --dict-color: rgb(21, 70, 51);
      --dict-bg-opacity: 0.03;
    }

    .definition-item[data-dictionary^="Pixiv"] {
      --dict-color: rgb(0, 151, 250);
      --dict-bg-opacity: 0.03;
    }

    .definition-item[data-dictionary="漢字源"] {
      --dict-color: rgb(201, 149, 93);
      --dict-bg-opacity: 0.05;
    }

    .definition-item[data-dictionary="日本語俗語辞書"] {
      --dict-color: rgb(176, 4, 157);
      --dict-bg-opacity: 0.05;
    }

    .definition-item[data-dictionary="weblio古語辞典"] {
      --dict-color: rgb(193, 123, 148);
      --dict-bg-opacity: 0.05;
    }

    .definition-item[data-dictionary="語源由来辞典"] {
      --dict-color: rgb(206, 169, 47);
      --dict-bg-opacity: 0.05;
    }

    .definition-item[data-dictionary="学研 四字熟語辞典"] {
      --dict-color: rgb(180, 192, 152);
      --dict-bg-opacity: 0.08;
      --tag-text-color: black;
    }

    .definition-item[data-dictionary="故事ことわざの辞典"] {
      --dict-color: rgb(117, 87, 85);
      --dict-bg-opacity: 0.05;
    }

    .definition-item[data-dictionary^="日本語文法辞典"] {
      --dict-color: rgb(23, 59, 173);
      --dict-bg-opacity: 0.05;
    }

    .definition-item[data-dictionary="絵でわかる日本語"] {
      --dict-color: rgb(207, 76, 110);
      --dict-bg-opacity: 0.05;
    }

    .definition-item[data-dictionary="JLPT文法解説まとめ"] {
      --dict-color: rgb(244, 66, 54);
      --dict-bg-opacity: 0.05;
    }

    .definition-item[data-dictionary="どんなときどう使う 日本語表現文型辞典"] {
      --dict-color: rgb(126, 168, 232);
      --dict-bg-opacity: 0.08;
    }

    .definition-item[data-dictionary="毎日のんびり日本語教師"] {
      --dict-color: rgb(255, 216, 228);
      --dict-bg-opacity: 0.12;
      --tag-text-color: black;
    }

    .definition-item[data-dictionary^="新選国語辞典"] {
      --dict-color: #0073c4;
      --dict-bg-opacity: 0.03;
    }

    .definition-item[data-dictionary="使い方の分かる 類語例解辞典"],
    .definition-item[data-dictionary="全国方言辞典"] {
      --dict-color: #9c4836;
      --dict-bg-opacity: 0.03;
    }

    .definition-item[data-dictionary="新語時事用語辞典"] {
      --dict-color: #6e9ac6;
      --dict-bg-opacity: 0.07;
    }

    .definition-item[data-dictionary="漢字ペディア同訓異義"] {
      --dict-color: #b7b7b7;
      --dict-bg-opacity: 0.12;
    }

    .definition-item[data-dictionary*="Wikipedia"] {
      --dict-color: #447ff5;
      --dict-bg-opacity: 0.03;
    }

    .definition-item[data-dictionary^="漢検漢字辞典"] {
      --dict-color: #e7a93a;
      --dict-bg-opacity: 0.08;
    }

    .definition-item[data-dictionary^="例解学習国語辞典"] {
      --dict-color: #faa72f;
      --dict-bg-opacity: 0.05;
    }

    .definition-item[data-dictionary^="現代国語例解辞典"] {
      --dict-color: #e3323a;
      --dict-bg-opacity: 0.04;
    }

    .tag[data-category="dictionary"][data-details="漢字辞典オンライン"] {
      --tag-color: rgb(255, 227, 124);
      --tag-text-color: black;
    }

    .tag[data-category="dictionary"][data-details="JPDB Kanji"] {
      --tag-color: #ff3e3d;
    }

    .tag[data-category="dictionary"][data-details="TheKanjiMap Kanji Radicals/Composition"] {
      --tag-color: #2a94c9;
    }

    .tag[data-category="dictionary"][data-details*="Wiktionary"] {
      --tag-color: #447ff5;
    }

    .tag[data-category="dictionary"][data-details^="KANJIDIC"] {
      --tag-color: rgb(0, 132, 255);
    }

    /* Pitch Accent */
    .tag[data-category="pronunciation-dictionary"][data-details="NHK"] {
      --tag-color: #0076d0;
    }

    .tag[data-category="pronunciation-dictionary"][data-details^="大辞泉"] {
      --tag-color: rgb(170, 0, 0);
    }

    .tag[data-category="pronunciation-dictionary"][data-details^="大辞林"] {
      --tag-color: rgb(85, 34, 85);
    }

    /* Frequency Dicts (Also Kanji Dicts) */
    .frequency-group-item[data-details^="JPDB"] {
      --tag-frequency-background-color: #ff3e3d;
    }

    .frequency-group-item[data-details^="Innocent"] {
      --tag-frequency-background-color: #e82c9c;
    }

    .frequency-group-item[data-details="Novels"] {
      --tag-frequency-background-color: #e537fa;
    }

    .frequency-group-item[data-details^="BCCWJ"] {
      --tag-frequency-background-color: #8f27e3;
    }

    .frequency-group-item[data-details="CC100"] {
      --tag-frequency-background-color: #6238fa;
    }

    .frequency-group-item[data-details="Conversation Corpus"] {
      --tag-frequency-background-color: #273ce3;
    }

    .frequency-group-item[data-details^="青空文庫"] {
      --tag-frequency-background-color: #3d93ff;
    }

    .frequency-group-item[data-details="Youtube"] {
      --tag-frequency-background-color: #fd0101;
    }

    .frequency-group-item[data-details^="Wikipedia"] {
      --tag-frequency-background-color: #447ff5;
    }

    /* End Dictionary Colorizer */

    /* Hide ALL Dotted Circles */
    span[style*="border:1.5px dotted #c83c28"] {
      display: none !important;
    }

    /* Paint the devoiced mora */
    span[style*="display:inline-block;position:relative;"]>span[style*="display:inline"]:has(+ span[style*="border:1.5px dotted #c83c28"]) {
      color: var(--devoiced-color) !important;
    }

    /* Collapse lists of links */
    .definition-item:not([data-dictionary="JMdict"]) .gloss-list:has(.gloss-content > a:only-child) {
      list-style: none;
      display: inline;
      padding-left: 0;
    }

    .definition-item:not([data-dictionary="JMdict"]) .gloss-list:has(.gloss-content > a:only-child) * {
      display: inline;
    }

    /* Collapse JMnedict entries */
    .definition-item[data-dictionary="JMnedict"] .gloss-list {
      list-style: none;
      display: inline;
      padding-left: 0;
    }

    .definition-item[data-dictionary="JMnedict"] .gloss-list * {
      display: inline;
    }

    .definition-item[data-dictionary="JMnedict"] .gloss-list>.gloss-item:not(:last-child)::after {
      content: " | ";
    }

    /* Only show summary for Pixiv */
    [data-sc-pixiv="children"],
    [data-sc-pixiv="related-tags"],
    [data-sc-pixiv="continue-reading"],
    [data-sc-pixiv="nav-header"] {
      display: none;
    }

    /* Only show the first 2 frequency lists */
    span.frequency-group-item:nth-child(n + 3) {
      display: none;
    }

    /* Show on hover */
    span.frequency-group-item:first-child:has(.tag-label:hover)~* {
      display: inline-block;
    }

    /* Only show the first pitch dictionary */
    li.pronunciation-group:first-child~* {
      display: none;
    }

    ol.pronunciation-group-list:not([data-count="1"]) {
      list-style: none;
      padding: 0;
    }

    /* Show on hover */
    li.pronunciation-group:first-child:has(.tag:hover)~* {
      display: inline-block;
    }

    /* Hide add duplicate */
    button.action-button[title="Add duplicate expression (Alt + E)"] {
      display: none;
    }

    /* Changes for Jitendex */
    .definition-item[data-dictionary*="Jitendex"] *[data-sc-content="example-sentence-a"] {
      font-size: 1em !important;
    }

    [data-sc-content="glossary"] {
      display: flex;
      /* Use flexbox for layout */
      flex-wrap: wrap;
      padding: 0;
      margin: 0;
    }

    [data-sc-content="glossary"] li:not(:last-child)::after {
      content: "|";
      color: rgba(255, 255, 255, 0.5);
      margin: 0 8px;
    }

    /* Example Keyword */
    span[data-sc-content="example-keyword"] {
      color: #FCFF61 !important;
      text-decoration: none !important;
    }

    /* Example Sentences */
    [data-sc-content|="example-sentence"] {
      opacity: 0.5;
      display: block;
      transition: opacity 0.3s ease;
    }

    [data-sc-content|="example-sentence"]:hover {
      opacity: 1;
    }

    [data-sc-content="example-sentence-a"] {
      transition: opacity 0.3s ease;
    }

    [data-sc-content="example-sentence-b"] {
      opacity: 0;
      transition: opacity 0.3s ease;
      max-height: 0;
      /* Collapse height initially */
      overflow: hidden;
      /* Hide overflow */
    }

    [data-sc-content="example-sentence-a"]:hover+[data-sc-content="example-sentence-b"] {
      opacity: 1;
      max-height: 500px;
    }

    [data-sc-content="example-sentence"] rt {
      opacity: 0;
      transition: opacity ease 0.3s;
    }

    [data-sc-content="example-sentence"]:hover rt {
      opacity: 1;
    }

    [data-sc-content="example-sentence"] span,
    [data-sc-content="example-sentence"] span {
      color: #FCFF61 !important;
    }

    /* Forms */
    [data-sc-content="forms"] {
      opacity: 0;
      display: block;
      transition: opacity 0.3s ease;
    }

    [data-sc-content|="forms"]:hover {
      opacity: 1;
      display: block;
    }

    /* Hidden (unnecessary) */
    div[data-sc-content="attribution"] {
      display: none;
    }

    /* Extra */
    [data-sc-content="antonym"],
    [data-sc-content="sense-note"],
    [data-sc-content="xref"] {
      opacity: 0.5;
      transition: opacity 0.3s ease;
    }

    [data-sc-content="antonym"]:hover,
    [data-sc-content="sense-note"]:hover,
    [data-sc-content="xref"]:hover {
      opacity: 1;
    }
    ```
