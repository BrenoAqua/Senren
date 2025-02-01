# Senren
[Senren](https://github.com/BrenoAqua/Senren/releases/tag/v1.0) is a customizable [Anki](https://apps.ankiweb.net/) note type for Japanese, offering pitch accent styling, word frequency, NSFW image blurring, a dark mode toggle, and support for multiple dictionaries with easy switching between definitions.

![Exemple](https://github.com/BrenoAqua/Senren/raw/main/images/example.gif)

## Festures

### Automatic Colors for Every Pitch Accent
- **Heiban** - blue
- **Atamadaka** - red
- **Nakadaka** - orange
- **Odaka** - green
- **Kifuku** - purple

### Dark Mode
Easily toggle between default and dark mode. The note type remembers your last selection.

### NSFW Image Blurring
Simply add the `NSFW` tag to any card to automatically blur its image.

### Definition Toggle
Switch between definitions by pressing the left or right button on either side of the displayed definition.

### Stylization Changes for Jitendex
- **Example Sentences**:
  - Adjusted font size and added hover effects for smooth transitions.
  - Translation fades in on hover.
- **Glossary**:
  - Flex layout with `|` separators between items.
- **Keywords**:
  - Highlighted in `#FCFF61` for better visibility.
- **Attribution & Forms**:
  - Hidden.
- **JavaScript**:
  - Replaced `color-mix` with `#FCFF61` for consistent keyword colors.

## Yomitan

### Fields

| Field         | Value                         | Extra Note |
|---------------|-------------------------------|------------|
| word          | `{expression}`                |            |
| sentence      | `{cloze-prefix}<span class="highlight">{cloze-body}</span>{cloze-suffix}` |            |
| sentenceEng   |                               | Leave it empty. |
| reading       | `{pitch-accents}`             | Change to `{reading}` if you don't want pitch accents. |
| definition    | `{single-glossary-jitendexorg-2025-01-27-brief}` | It's where you put your main dictionary, but it depends on its version. |
| wordAudio     | `{audio}`                     |            |
| sentenceAudio |                               | Leave it empty. |
| picture       | `{clipboard-image}`           |            |
| glossary      | `{single-glossary-大辞林-第四版-brief}{single-glossary-漢検漢字辞典-第二版-brief}{single-glossary-実用日本語表現辞典-brief}{single-glossary-旺文社国語辞典-第十一版-brief}{single-glossary-明鏡国語辞典-第二版-brief}{single-glossary-新明解国語辞典-第八版-brief}{single-glossary-デジタル大辞泉-brief}{single-glossary-精選版-日本国語大辞典-brief}{single-glossary-岩波国語辞典-第八版-brief}{single-glossary-広辞苑-第七版-brief}{single-glossary-ハイブリッド新辞林-brief}{single-glossary-故事ことわざの辞典-brief}{single-glossary-漢字源-brief}{single-glossary-新明解四字熟語辞典-brief}{single-glossary-学研-四字熟語辞典-brief}`| Fill with your dictionaries. Use `{glossary-brief}` if you don't want to use a single glossary for each one. |
| pitchPosition | `{pitch-accent-positions}`    |            |
| pitch         | `{pitch-accent-categories}`   |            |
| frequency     | `{frequencies}`               |            |
| freqSort      | `{frequency-harmonic-rank}`   |            |

### Handlebars
It's not necessary, this note type works perfectly fine without them, but it's here in case you want to use it.

<details>
<summary>Clique para expandir o código</summary>

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

### Result Display
Group term-reading pairs or Group related terms is necessary in order to use `{glossary-brief}` in the glossary field.
![Result Display](images/Result%20Display.png)
## Anki Addons

### **Must Have**  
- [AnkiConnect](https://ankiweb.net/shared/info/2055492159) `2055492159`  

### **Recommended**  
- [Review Heatmap](https://ankiweb.net/shared/info/1771074083) `1771074083`  
- [Advanced Browser](https://ankiweb.net/shared/info/874215009) `874215009`  
- [Adjust Sound Volume](https://ankiweb.net/shared/info/2123044452) `2123044452`  
- [AutoReorder](https://ankiweb.net/shared/info/757527607) `757527607`  
- [Local Audio Server for Yomichan](https://ankiweb.net/shared/info/1045800357) `1045800357`  
- [AnkiWebView Inspector](https://ankiweb.net/shared/info/31746032) `31746032`  
- [Auto-refresh browser](https://ankiweb.net/shared/info/746398558) `746398558`  
- [Batch Editing](https://ankiweb.net/shared/info/291119185) `291119185`  
- [Edit Field During Review](https://ankiweb.net/shared/info/1020366288) `1020366288`  
- [Kanji Grid Kuuube](https://ankiweb.net/shared/info/1610304449) `1610304449`  
- [Speed Focus Mode](https://ankiweb.net/shared/info/1046608507) `1046608507`  
- [Pass/Fail 2 (Remove Easy/Hard)](https://ankiweb.net/shared/info/876946123) `876946123`  

### **Aesthetics**  
- [Colorful Tags (+ Hierarchical Tags)](https://ankiweb.net/shared/info/594329229) `594329229`  
- [Large and Colorful Buttons](https://ankiweb.net/shared/info/1829090218) `1829090218`  
- [True Retention](https://ankiweb.net/shared/info/613684242) `613684242`  
