# Senren
A customizable Anki note type for studying Japanese, with many features, responsive, a smooth design, and compatibility with most tools.

<img src="https://github.com/BrenoAqua/Senren/blob/main/Images/Senren%20v2.1%20Preview.gif" width="800">

### Contents
- [Senren](#senren)
   - [Features](#features)
     - [Automatic Colors for Every Pitch Accent + Pitch Position](#automatic-colors-for-every-pitch-accent--pitch-position)
     - [Custom Dark Mode](#custom-dark-mode)
     - [Image Blurring](#image-blurring)
     - [Definition Toggle](#definition-toggle)
     - [Picture Lightbox](#picture-lightbox)
     - [Stylization Changes for Jitendex](#stylization-changes-for-jitendex)
     - [Additional Features](#additional-features)
   - [Yomitan](#yomitan)
     - [Fields](#fields)
     - [Handlebars](#handlebars)
     - [Result Display](#result-display)
   - [Anki](#anki)
     - [Frequency Sorting](#frequency-sorting)
     - [Fonts](#fonts)
     - [Addons](#addons)
- [Additional Resources](#additional-resources)
   - [Setting Up ShareX](#setting-up-sharex)
     - [Audio Settings](#audio-settings)
     - [ShareX Hotkeys](#sharex-hotkeys)
   - [Kaishi Template](#kaishi-template)
     - [Installation Instructions](#installation-instructions)
     - [Kaishi Template Features](#kaishi-template-features)

## Features

### Automatic Colors for Every Pitch Accent + Pitch Position
- 🔵 **Heiban** 
- 🔴 **Atamadaka**
- 🟠 **Nakadaka**
- 🟢 **Odaka**
- 🟣 **Kifuku**

### Custom Dark Mode
- Easily toggle between the default theme (light or original dark mode) and dark mode with a black background.

### Image Blurring
- Add the `NSFW` tag to any card to automatically blur its image.

### Definition Toggle

- Switch between definitions by pressing the left or right button on either side of the displayed definition (this option is hidden if only one definition is available). You can also switch using the left and right arrow keys.  

  - Light Mode

  <img src="https://github.com/user-attachments/assets/145b21a6-29bb-48fe-828d-d4454d2baf95" width="500">
  <br>

  - Dark Mode

  <img src="https://github.com/user-attachments/assets/a4bc4087-2dfe-487f-bfe1-f54a6005f0d0" width="500">
  <br>

  - Custom Dark Mode
  <img src="https://github.com/user-attachments/assets/13adf4cd-efc5-4744-b38b-e417b07499e5" width="500">


### Picture Lightbox
  - Click the image to view it in a larger, more focused display. Close it by clicking outside or pressing ESC.
- **Zoom**
  - The zoom follows the cursor. You can click and drag to move the image.
- **Support for multiple images**
  - Only the first image appears in the default picture container.
  - Switch between images using the left and right arrow keys or by pressing the buttons on either side of the screen (or on the image itself, if the Lightbox is not open). 

    ![Preview](https://github.com/BrenoAqua/Senren/blob/main/Images/Lightbox%20Preview.gif)
    <img src="https://github.com/BrenoAqua/Senren/blob/main/Images/Lightbox%20Preview%202.gif" width="800">

### Stylization Changes for Jitendex
- **Hover Effects**
  - Example sentences, antonyms, cross-references, and notes smoothly expand on hover and collapse when the mouse leaves.
    - Related content (translations, explanations) slides open smoothly.
  - Furigana appear smoothly when hovering over example sentences.

    ![Preview](https://github.com/user-attachments/assets/2ef17782-593c-4fda-87c0-f8f6ffdcba45)

- **Highlighted Keywords**
  - Target words in example sentences match the bold color style of the note type.
- **Glossary (Word List)**
  - Words are displayed in a flexible, easy-to-read list.
  - Glossary items are organized with `|` symbols between them for better readability. 
- **Hidden Sections**
  - Attribution and forms are completely hidden.

### Additional Features
- A collapsible list to show **Word Frequencies**.
- **English translations** appear when the Japanese sentence is hovered over, if available.
- **Misc Info** appears when the picture is hovered over, if available.
- Support for **Sorting by Frequency**.
- Hovering over the **Pitch Accent "Position"** displays the name of the associated pitch accent category.

  - Light Mode
  <img src="https://github.com/user-attachments/assets/aaa2f796-b5f5-478f-adc5-12c27a5e54a1" width="500">
  <br>

  - Dark Mode
  <img src="https://github.com/user-attachments/assets/09a30ed1-f735-4f9e-9fb8-4ad43706aa8c" width="500">
  <br>

  - Custom Dark Mode
  <img src="https://github.com/user-attachments/assets/0a38f4ae-3510-44a0-81da-c2a06aa6d889" width="500">
  
</details>

- **Mobile support:** It has not been tested on AnkiMobile, but it works well on AnkiDroid.

Download the latest version from here: [v2.4](https://github.com/BrenoAqua/Senren/releases/download/v2.4/Senren.v2.4.apkg)

## Yomitan

### Fields

| Field         | Value                         | Extra Note |
|---------------|-------------------------------|------------|
| word          | `{expression}`                |            |
| sentence      | `{cloze-prefix}<span class="highlight">{cloze-body}</span>{cloze-suffix}` |            |
| sentenceFurigana      |                       | I recommend using it with [AJT Japanese](https://ankiweb.net/shared/info/1344485230) `200813220` or [AJT Japanese for JP Mining Note](https://ankiweb.net/shared/info/200813220) `200813220` |
| sentenceEng   |                               | Leave it empty. |
| reading       | `{pitch-accents}`             | Change to `{reading}` if you don't want pitch accents. |
| definition    | `{single-glossary-jitendexorg-2025-01-27-brief}` | It's where you put your main dictionary, but it depends on its version. |
| wordAudio     | `{audio}`                     |            |
| sentenceAudio |                               | Leave it empty. |
| picture       | `{clipboard-image}`           |            |
| glossary      | `{single-glossary-大辞林-第四版-brief}{single-glossary-漢検漢字辞典-第二版-brief}{single-glossary-実用日本語表現辞典-brief}{single-glossary-旺文社国語辞典-第十一版-brief}{single-glossary-明鏡国語辞典-第二版-brief}{single-glossary-新明解国語辞典-第八版-brief}{single-glossary-デジタル大辞泉-brief}{single-glossary-精選版-日本国語大辞典-brief}{single-glossary-岩波国語辞典-第八版-brief}{single-glossary-広辞苑-第七版-brief}{single-glossary-ハイブリッド新辞林-brief}{single-glossary-故事ことわざの辞典-brief}{single-glossary-漢字源-brief}{single-glossary-新明解四字熟語辞典-brief}{single-glossary-学研-四字熟語辞典-brief}`| Fill in your dictionaries as shown in the example. Use `{glossary-brief}` if you prefer not to list each one individually. However, they will all be displayed at once when toggled to the glossary. I recommend adding "-brief" (without quotes) before the closing brace of each individual dictionary. |
| pitchPosition | `{pitch-accent-positions}`    |            |
| pitch         | `{pitch-accent-categories}`   |            |
| frequency     | `{frequencies}`               |            |
| freqSort      | `{frequency-harmonic-rank}`   |            |
| miscInfo      | `{document-title}`            | Leave it empty if you use MPVacious or another tool with this function. |

### Handlebars
It's not necessary, as this note type works perfectly fine without them, but I recommend it.

<details>
<summary>Click here to expand</summary>

```handlebars
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
                    <li>
                        {{~set "any" false~}}
                        {{~#each tags~}}
                            {{~#if (get "any")}}, {{else}}<i>({{/if~}}
                            {{name}}
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

{{~> (lookup . "marker") ~}}
```

</details>

**Explanation:**
```
{{#*inline "pitch-accents"}}
    {{#if (op ">" pitchCount 0)}}
        {{~> pitch-accent-list format='text'~}}
    {{else}}
        {{~definition.reading~}}
    {{/if}}
{{/inline}}
```
This Handlebar template checks for Pitch Accents in a word. If present, it displays them. If not, it shows the word's reading to ensure it's available even without Pitch Accents.

### Result Display
**Group term-reading pairs** or **Group related terms** is necessary to use the `glossary` field. Otherwise, only the main definition will be shown.

![Result Display](https://github.com/BrenoAqua/Senren/blob/main/Images/Result%20Display.png)
## Anki

### Frequency Sorting

Paste this into [AutoReorder](https://ankiweb.net/shared/info/757527607)'s settings to automatically sort your new cards by frequency using the `freqSort` field. It will reorder them every time Anki is opened.
```AutoReorder
{
    "search_to_sort": "deck:Senren is:new",
    "shift_existing": true,
    "sort_field": "freqSort",
    "sort_reverse": false
}
```
Make sure the option "Sort by this field in the browser" is checked for the `freqSort` field.

![Senren_note type](https://github.com/user-attachments/assets/86a862fd-56b4-4069-9d12-c5d2410b45f0)

### Fonts
If you want to load the fonts locally, follow these steps:

1. Go to the [Fonts](https://github.com/BrenoAqua/Senren/tree/main/Fonts).
2. Download the font files.
   - _Hiragino Kaku Gothic ProN W3.otf
   - _KleeOne-SemiBold.ttf
   - _NotoSansJP.ttf
   - _NotoSerifJP.ttf
> Noto Sans JP is used as a fallback for Hiragino. If you prefer to use Noto Sans JP, you can ignore Hiragino and skip downloading it. Similarly, Noto Serif JP serves as a fallback for Klee One. However, if you don’t want to use Klee One, you’ll need to adjust the styling in the CSS.
3. Navigate to the following directory on your computer:
 `C:\Users\Administrator\AppData\Roaming\Anki2\YourAnkiProfileName\collection.media`
    - Replace **YourAnkiProfileName** with the actual name of your Anki profile.
4. Place the downloaded font files inside this folder.

### Addons

**Must Have**  
- [AnkiConnect](https://ankiweb.net/shared/info/2055492159) `2055492159`  

**Recommended**  
- [AJT Japanese](https://ankiweb.net/shared/info/1344485230) `200813220` or [AJT Japanese for JP Mining Note](https://ankiweb.net/shared/info/200813220) `200813220`
- [Local Audio Server for Yomichan](https://ankiweb.net/shared/info/1045800357) `1045800357`
- [Edit Field During Review](https://ankiweb.net/shared/info/1020366288) `1020366288`
- [AnkiWebView Inspector](https://ankiweb.net/shared/info/31746032) `31746032`
- [Adjust Sound Volume](https://ankiweb.net/shared/info/2123044452) `2123044452`
- [Auto-refresh browser](https://ankiweb.net/shared/info/746398558) `746398558`
- [Advanced Browser](https://ankiweb.net/shared/info/874215009) `874215009`
- [Kanji Grid Kuuube](https://ankiweb.net/shared/info/1610304449) `1610304449`
- [Review Heatmap](https://ankiweb.net/shared/info/1771074083) `1771074083`
- [Batch Editing](https://ankiweb.net/shared/info/291119185) `291119185`
- [AutoReorder](https://ankiweb.net/shared/info/757527607) `757527607`

# Additional Resources

## Setting Up ShareX

1. Download [ShareX](https://getsharex.com/).
2. Import the [Senren-ShareX-settings](https://github.com/BrenoAqua/Senren/blob/main/ShareX/Senren-ShareX-Settings.sxb):
   - Go to **ShareX** > **Application Settings** > **Settings** > **Import** > select **Senren-ShareX-settings**.
3. Update the paths for the Hotkeys:
   - Go to **ShareX** > **Hotkey Settings** > **Screenshot** / **Screenshot-NSFW** / **Audio** > **Edit**.
   - Mark **Override screenshots folder** and change the path to:  
     `C:\Users\Administrator\AppData\Roaming\Anki2\YourAnkiProfileName\collection.media`.

### Audio Settings

If you want ShareX to record audio, follow these steps:

1. Go to **Hotkey Settings** > **Audio** > **Edit** > **Screen Recorder** > **Screen Recorder Options**.
2. Click on **Install Recorder Devices**.
3. Set the following:
   - **Video Source**: `None`
   - **Audio Source**: `Virtual-Audio-Capturer`

### ShareX Hotkeys

- **Alt + C**: Takes a screenshot, saves it to your Anki media folder, and adds it to your last created card.
- **Alt + N**: Takes a screenshot, saves it to your Anki media folder, adds it to your last created card, and adds the NSFW tag.
- **Alt + V**: Records audio, saves it to your Anki media folder, and adds it to your last created card.
- **PrtSc**: Takes a normal screenshot, saves it to your ShareX Screenshot Folder, and copies it to the clipboard.
> Remember to use the Hotkeys **AFTER** creating the card.

## Kaishi Template
These are the settings I use for Kaishi. When I finished Kaishi, I merged it with my mining deck (while keeping its original note type). Since then, I’ve made a lot of edits to make it look more like Senren.

<img src="https://github.com/BrenoAqua/Senren/blob/main/Template/kaishi/Kaishi%20Template%20Preview.gif" width="800">

### Installation Instructions
1. Go to **Browse** in Anki.
2. Select the **Kaishi 1.5k** Note Type.
3. Click on **Cards**.
4. Replace the contents of the **Front Template**, **Back Template**, and **Styling** sections with the provided files:
   - [`front.html`](https://github.com/BrenoAqua/Senren/blob/main/Template/kaishi/front.html)
   - [`back.html`](https://github.com/BrenoAqua/Senren/blob/main/Template/kaishi/back.html)
   - [`styling.css`](https://github.com/BrenoAqua/Senren/blob/main/Template/kaishi/styling.css)

### Kaishi Template Features

**Colors for Every Pitch Accent**
- 🔵 **Heiban** 
- 🔴 **Atamadaka**
- 🟠 **Nakadaka**
- 🟢 **Odaka**
- 🟣 **Kifuku**
> This isn't automatic, as the color will only be applied if you tag the card. For example, if the pitch is heiban, you need to add the `heiban` tag to the card for its corresponding color to be applied.

**Custom Dark Mode**
- Easily toggle between the default theme (light or original dark mode) and custom dark mode with a black background.
> It works the same way as Senren, and it also supports light mode.

**Hover Effects**
- English translations appear when hovering over Japanese sentences.
- Sentence Furigana appears when hovering over Japanese sentences.
> These hover effects use the same styling as Senren.
