# Senren・洗練
A highly customizable Anki note type for studying Japanese, featuring a responsive layout, smooth animations, and extensive functionality. Designed for compatibility with most tools and optimized for an efficient learning experience.

<img src="https://github.com/BrenoAqua/Senren/blob/main/Images/Senren_v3.2_Preview.gif" width="1000">

### Contents
- [Senren・洗練](#senren洗練)
   - [Features](#features)
     - [Automatic Colors for Every Pitch Accent + Pitch Position](#automatic-colors-for-every-pitch-accent--pitch-position)
     - [Kanji Hover](#kanji-hover)
     - [Custom Dark Mode](#custom-dark-mode)
     - [Image Blurring](#image-blurring)
     - [External Links](#external-links)
     - [Definition Toggle](#definition-toggle)
     - [Picture Lightbox](#picture-lightbox)
     - [Stylization Changes for Jitendex](#stylization-changes-for-jitendex)
     - [Different Layouts For Different Screen Sizes](#different-layouts-for-different-screen-sizes)
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
   - [Setting Up mpvacious](#setting-up-mpvacious)

## Features

### Automatic Colors for Every Pitch Accent + Pitch Position
- 🔵 **Heiban** 
- 🔴 **Atamadaka**
- 🟠 **Nakadaka**
- 🟢 **Odaka**
- 🟣 **Kifuku**

### Kanji Hover
- You can hover over each kanji in a word to see all cards in the note type that contain the same kanji.

  <img src="https://github.com/user-attachments/assets/aca60447-6b26-413e-af77-3d45c5ddb18f" width="300">
- Up to 5 words will be shown. If there are more, a "Show More" option will appear to display the others.
> Only works on PC.

### Custom Dark Mode
- Easily toggle between the default theme (light or original dark mode) and dark mode with a black background.

### Image Blurring
- Add the `NSFW` tag to any card to automatically blur its image.
- Images remain unblurred after being clicked once.

### External Links
- Supported Sites:
  - JPDB
  - Jisho
  - Google Images
  - Nadeshiko
  - Immersion Kit  
 > Clicking any of these buttons will redirect you to the respective site and search for the target word automatically.
![image](https://github.com/user-attachments/assets/8fee6dd1-b55e-4cbb-95dc-53911953b9c1)

### Definition Toggle
- Switch between definitions using the left and right buttons or the arrow keys. You can also switch using the left and right arrow keys.
  - Save your dictionary viewing preference while reviewing (glossary or definition first).
    - You need to enter "glossary" into the `dictionaryPreference` field for all your cards to display the glossary first instead of the definition (which is the default when empty).
      
       ![dictionaryPreference](https://github.com/user-attachments/assets/13d38364-d6bd-43d3-b343-5b457504c231)
    - You can update all your cards at once using the [Batch Editing](https://ankiweb.net/shared/info/291119185) add-on.
    

  - Remember the last dictionary selected until Anki is restarted.

### Picture Lightbox
  - Click the image to view it in a larger, more focused display. Close it by clicking outside or pressing ESC.
- **Zoom**
  - The zoom follows the cursor. You can click and drag to move the image.
- **Support for multiple images**
  - Only the first image appears in the default picture container.
  - Switch between images using the left and right arrow keys or by pressing the buttons on either side of the screen (or on the image itself, if the Lightbox is not open). 

    ![Preview](https://github.com/BrenoAqua/Senren/blob/main/Images/Lightbox%20Preview.gif)
    <img src="https://github.com/BrenoAqua/Senren/blob/main/Images/Lightbox%20Preview%202.gif" width="800">

  - Display images from glossary dictionaries in the picture container.

    <img src="https://github.com/user-attachments/assets/dc1ea0b7-0875-499d-b3ef-3494ccf15368" width="400">
- **Lightbox Grid View**

   <details>
    <summary>Default View:</summary>
    <img src="https://github.com/user-attachments/assets/b8752a8e-e275-47e3-b106-9c392aa67575" width="500">
   </details>
   
   <details>
    <summary>Grid View:</summary>
    <img src="https://github.com/user-attachments/assets/0a354d91-2811-491c-ba39-2401f4b65a1a" width="500">
   </details>

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

### Different Layouts For Different Screen Sizes
- **Default**: Width greater than **1050px** (2-column layout).
  <details>
    <summary>Preview</summary>
    <img src="https://github.com/user-attachments/assets/73ed4a9b-ddaf-4b89-b39e-582f40548193" width="500">
  </details>

- **Large**: Width less than or equal to **1050px** (2-column layout).
  <details>
    <summary>Preview</summary>
    <img src="https://github.com/user-attachments/assets/0f4a32cc-6c40-4d8f-bea6-0d113079e875" width="500">
  </details>

- **Medium**: Width less than or equal to **768px** (2-column layout, not different from **Large**).
  
- **Small**: Width less than or equal to **624px** (switches to a single-column layout).
  <details>
    <summary>Preview</summary>
    <img src="https://github.com/user-attachments/assets/37e1d42d-bc74-44da-aeb6-6bf4c3929475" width="500">
  </details>
  
  **All layouts are fully customizable. You can:**
    - Switch between 1-column and 2-column layouts.
    - Flip the content direction (e.g. picture left, word right).
    - Hide individual sections of the Header and Footer.
    - Remove the Header and Footer entirely.

### Additional Features
- **3 Front Card Types:**
  - **Default:** Displays only the **Word** initially.
  - **Sentence Card:** Displays only the **Sentence** initially.
  - **Audio Card:** Plays the **Audio**, both **Word** and **Sentence** are hidden.
- A collapsible list to show **Word Frequencies**.
- Clicking the Sentence shows the **Sentence Translation**, if available in the `sentenceEng` field.
- **Misc Info** appears when the picture is hovered over, if available in the `miscInfo` field.
- Support for **Sorting by Frequency** (need [Frequency Dictionaries](https://drive.google.com/drive/folders/1cJn4lw-a-YollDJvEkfUyRcel6QndFDN?usp=sharing)).
- Hovering over the **Pitch Accent "Position"** displays the name of the associated pitch accent category.

    <details>
      <summary>Light Mode</summary>
      <img src="https://github.com/user-attachments/assets/aaa2f796-b5f5-478f-adc5-12c27a5e54a1" width="500">
    </details>

    <details>
      <summary>Dark Mode</summary>
  <img src="https://github.com/user-attachments/assets/09a30ed1-f735-4f9e-9fb8-4ad43706aa8c" width="500">
    </details>

    <details>
      <summary>Custom Dark Mode</summary>
      <img src="https://github.com/user-attachments/assets/0a38f4ae-3510-44a0-81da-c2a06aa6d889" width="500">
    </details>
- **Tags** displayed below the definition/glossary.
- **Mobile support:** It has not been tested on AnkiMobile, but it works well on AnkiDroid.

    <details>
      <summary>Mobile Layout</summary>
      <p float="left">
        <img src="https://github.com/user-attachments/assets/28924b83-5134-494f-af1e-02e93721fa7e" width="35%" />
        <img src="https://github.com/user-attachments/assets/00bd92fc-23df-474e-afe9-7ed42035fa9f" width="35%" />
      </p>
    </details>
Download the latest version from here: [Senren v3.6](https://github.com/BrenoAqua/Senren/releases/download/v3.6/Senren.v3.6.apkg)

## Yomitan

### Fields

| Field         | Value                         | Extra Note |
|---------------|-------------------------------|------------|
| word          | `{expression}`                |            |
| sentence      | `{cloze-prefix}<span class="highlight">{cloze-body}</span>{cloze-suffix}` |            |
| sentenceFurigana | `{sentence-furigana}` | `{sentence-furigana-plain}` also works. |
| sentenceEng   |                               | Leave it empty. |
| reading       | `{pitch-accents}`             | Change to `{reading}` if you don't want pitch accents. |
| definition    | `{single-glossary-jitendexorg-2025-01-27-brief}` | It's where you put your main dictionary. |
| wordAudio     | `{audio}`                     |            |
| sentenceAudio |                               | Leave it empty. |
| picture       | `{clipboard-image}`           |            |
| glossary      | `{single-glossary-新選国語辞典-第十版-brief}{single-glossary-デジタル大辞泉-brief}{single-glossary-漢検漢字辞典-第二版-brief}{single-glossary-明鏡国語辞典-第二版-brief}{single-glossary-旺文社国語辞典-第十一版-brief}{single-glossary-岩波国語辞典-第八版-brief}{single-glossary-ハイブリッド新辞林-brief}{single-glossary-広辞苑-第七版-brief}{single-glossary-精選版-日本国語大辞典-brief}{single-glossary-大辞林-第四版-brief}{single-glossary-実用日本語表現辞典-brief}{single-glossary-故事ことわざの辞典-brief}{single-glossary-漢字源-brief}{single-glossary-新明解四字熟語辞典-brief}{single-glossary-学研-四字熟語辞典-brief}{single-glossary-語彙力二字熟語の百科事典-brief}{single-glossary-使い方の分かる-類語例解辞典-brief}{single-glossary-全国方言辞典-brief}{single-glossary-日本語俗語辞書-brief}{single-glossary-jlpt文法解説まとめ-brief}{single-glossary-画像付き-絵でわかる日本語-brief}{single-glossary-ことわざ慣用句の百科事典-brief}`| Fill in your dictionaries as shown in the example. Use `{glossary-brief}` if you prefer not to list each one individually. However, they will all be displayed at once when toggled to the glossary. Add "-brief" (without quotes) before the closing brace of each individual dictionary. You can download all the dictionaries I use [here](https://drive.google.com/drive/folders/1OgCWBif-wnN5iz8k1oi_UQdB0_niDud4?usp=sharing) |
| pitchPosition | `{pitch-accent-positions}`    | It will only generate results if you have pitch accent dictionaries installed in Yomitan. You can download the ones I use [here](https://drive.google.com/drive/folders/1dMjjHX7_rnTKCHU3btnQReM9M4f2Sirr?usp=sharing).           |
| pitch         | `{pitch-accent-categories}`   | Uses the same pitch accent dictionaries as `pitchPosition`.           |
| frequency     | `{frequencies}`               | It will only generate results if you have frequency dictionaries installed in Yomitan. You can download the ones I use [here](https://drive.google.com/drive/folders/1cJn4lw-a-YollDJvEkfUyRcel6QndFDN?usp=sharing).           |
| freqSort      | `{frequency-harmonic-rank}`   | Uses the same frequency dictionaries as `frequency`.           |
| miscInfo      | `{document-title}`            | Leave it empty if you use MPVacious or another tool with this function. |
| dictionaryPreference | `glossary`             | Leave it empty if you want to see the dictionary in `definition` first. You need to enter "glossary" into the `dictionaryPreference` field for all your cards to display the glossary first instead of the definition (which is the default when empty). You can use the [Batch Editing](https://ankiweb.net/shared/info/291119185) to do this. |

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
**Group term-reading pairs** or **Group related terms** is necessary to use the `glossary` field. Otherwise, only the definition will be shown.

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

## Setting Up mpvacious

1. Download the configuration file from the following link:  
   [subs2srs.conf](https://github.com/BrenoAqua/Senren/blob/main/mpvacious/subs2srs.conf)

2. Move the file to the script-opts directory:

   - If you're using the default `mpv` settings location:  
     ```
     C:/Users/Username/AppData/Roaming/mpv/script-opts
     ```

   - If `script-opts` is inside your `mpv` folder:  
     ```
     MPV/script-opts
     ```
