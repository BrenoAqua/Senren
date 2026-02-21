/* _senren_settings_v5.1.0.js */
(function () {
  const ANKI_CONNECT_URL = "http://127.0.0.1:8765";
  const PRESET_FILENAME = "_senren_presets.js";
  const DECK_PRESETS_FILENAME = "_senren_deck_presets.js";

  // CONFIGURATION
  // =========================================================================
  const groups = {
    "Visibility": [
      { type: "header", label: "Desktop / Global" },
      { label: "Settings Toggle", var: "--settings-visibility", type: "switch-int", desc: "Show the gear icon to open the settings.", mobileHidden: true },
      { label: "Main Card Background", var: "--main-bg-visibility", type: "switch-int", desc: "Show the main card background.", mobileHidden: true },
      { label: "Card Shadow", var: "--main-bg-shadow-visibility", type: "switch-int", desc: "Show a drop shadow around the main card background.", mobileHidden: true },
      { label: "Dark Mode Toggle", var: "--custom-dark-mode-visibility", type: "switch-int", desc: "Show the Sun/Moon icon to toggle the custom dark mode.", mobileHidden: true },
      { label: "Audio Buttons", var: "--audio-visibility", type: "switch-int", desc: "Show replay buttons for Word/Sentence audio.", mobileHidden: true },
      { label: "Frequency", var: "--freq-visibility", type: "switch-int", desc: "Show the frequency rank indicator.", mobileHidden: true },
      { label: "Tags", var: "--tag-visibility", type: "switch-int", desc: "Show tags in the bottom-left area of the card footer." },
      { label: "External Links", var: "--external-links-visibility", type: "switch-int", desc: "Show icons for external links such as Jisho, JPDB, Immersion Kit, etc." },

      { type: "header", label: "Smaller Screens (≤ 1050px)" },
      { label: "Settings Toggle", var: "--settings-visibility-header", type: "switch-int", desc: "Show the gear icon in the header to open the settings." },
      { label: "Main Card Background", var: "--main-bg-1050-visibility", type: "switch-int", desc: "Show the main card background on smaller screens." },
      { label: "Card Shadow", var: "--main-bg-shadow-1050-visibility", type: "switch-int", desc: "Show a drop shadow around the main card background on smaller screens." },
      { label: "Dark Mode Toggle", var: "--custom-dm-header-visibility", type: "switch-int", desc: "Show the sun/moon icon to toggle the custom dark mode in the header." },
      { label: "Audio Buttons", var: "--audio-header-visibility", type: "switch-int", desc: "Show audio buttons in the header." },
      { label: "Frequency", var: "--freq-header-visibility", type: "switch-int", desc: "Show the frequency rank in the header." }
    ],
    "Card Behavior": [
      { type: "header", label: "General Settings" },
      { label: "Enable Animations", var: "--enable-animations", type: "switch-bool", desc: "Enable transition animations." },

      { type: "header", label: "Front" },
      { label: "Expand Sentence (Word)", var: "--word-sentence-default-expanded", type: "switch-bool", desc: "Show sentence on word cards immediately." },
      { label: "Expand Sentence (Audio)", var: "--audio-sentence-default-expanded", type: "switch-bool", desc: "Show sentence on audio cards immediately." },
      { label: "Expand Hint", var: "--hint-default-expanded", type: "switch-bool", desc: "Show hint on cards immediately." },

      { type: "header", label: "Back" },
      { label: "Expand Translation", var: "--translation-default-expanded", type: "switch-bool", desc: "Show translation immediately." },
      { label: "Expand Notes", var: "--notes-default-expanded", type: "switch-bool", desc: "Show notes immediately." },
      { label: "No Duplicate Kana", var: "--no-duplicate-kana", type: "switch-bool", desc: "Hide the reading for words written entirely in kana." },
      { label: "Mute Sentence Audio", var: "--mute-sentence-audio", type: "switch-bool", desc: "Disable automatic sentence audio playback." }
    ],
    "Typography": [
      { type: "header", label: "General Settings" },
      { label: "Base Size", var: "--base-size", type: "text", desc: "Controls the font size of all text." },
      { label: "Definition / Glossary Line Height", var: "--base-line-height", type: "text", desc: "Line spacing within definition and glossary entries." },
      { label: "Bold Highlights", var: "--bold-highlight", type: "switch-int", desc: "Make highlighted text bold." },
      {
        label: "Serif", var: "--serif", type: "segment", desc: "Target word font family.", options: [
          { label: "Klee", val: '"Klee One", klee, "Hiragino Mincho ProN", "Noto Serif CJK JP", notoserifjp, "Yu Mincho", serif' },
          { label: "Hiragino", val: '"Hiragino Mincho ProN", "Klee One", klee, "Noto Serif CJK JP", notoserifjp, "Yu Mincho", serif' },
          { label: "Noto", val: '"Noto Serif CJK JP", notoserifjp, "Klee One", klee, "Hiragino Mincho ProN", "Yu Mincho", serif' },
          { label: "Yu", val: '"Yu Mincho", "Klee One", klee, "Hiragino Mincho ProN", "Noto Serif CJK JP", notoserifjp, serif' }
        ]
      },
      {
        label: "Sans", var: "--sans", type: "segment", desc: "General font family.", options: [
          { label: "Hiragino", val: '"Hiragino Kaku Gothic ProN", "Noto Sans CJK JP", notosansjp, "Segoe UI", sans-serif' },
          { label: "Noto", val: '"Noto Sans CJK JP", notosansjp, "Hiragino Kaku Gothic ProN", "Segoe UI", sans-serif' },
          { label: "Segoe", val: '"Segoe UI", "Hiragino Kaku Gothic ProN", "Noto Sans CJK JP", notosansjp, sans-serif' }
        ]
      },
      { label: "Wrapped Sentence Alignment", var: "--sentence-alignment", type: "segment", options: [{ val: "left", label: "Left" }, { val: "center", label: "Center" }, { val: "right", label: "Right" }], desc: "Alignment for multi-line sentences." },

      { type: "sub-header", label: "Word Scaling" },
      { label: "Base", var: "--word-size-base", type: "text", desc: "1-3 chars." },
      { label: "4 Chars", var: "--word-size-4", type: "text" },
      { label: "5 Chars", var: "--word-size-5", type: "text" },
      { label: "6 Chars", var: "--word-size-6", type: "text" },
      { label: "7 Chars", var: "--word-size-7", type: "text" },
      { label: "8 Chars", var: "--word-size-8", type: "text" },
      { label: "9+ Chars", var: "--word-size-9", type: "text" },

      { type: "header", label: "Reading / Furigana" },
      { label: "Reading Position", var: "--reading-position", type: "segment", options: [{ val: "above", label: "Above" }, { val: "below", label: "Below" }], desc: "Display the reading above or below the target word." },
      { label: "Dynamic Furigana Size", var: "--dynamic-furigana-size", type: "switch-int", desc: "Use automatic sizing for furigana." },
      { label: "Word Furigana Size", var: "--furigana-size", type: "text", desc: "Size relative to the target word." },
      { label: "Word Furigana Height", var: "--furigana-height", type: "text", desc: "Vertical distance from the word; a negative value moves it up (e.g., -0.05rem)." },
      { label: "Show Sentence Furigana", var: "--sentence-furigana-display", type: "switch-int" },
      { label: "Sentence Furigana Height", var: "--sentence-furigana-height", type: "text", desc: "Vertical distance for sentence furigana; a negative value moves it up (e.g., -0.05rem)." },

      { type: "sub-header", label: "Font Sizes" },
      { label: "Sentence", var: "--sentence-size", type: "text" },
      { label: "Sentence Translation", var: "--sentence-eng-size", type: "text" },
      { label: "Definition / Glossary", var: "--definition-size", type: "text" },
      { label: "Misc Info", var: "--misc-info-size", type: "text" },
      { label: "Tags", var: "--tag-font-size", type: "text" },
      { label: "Frequency", var: "--frequency-size", type: "text" },
      { label: "Frequency Content", var: "--frequency-content-size", type: "text" }
    ],
    "Dimensions": [
      { type: "header", label: "Structure & Layout" },
      { label: "Radius Small", var: "--border-radius-sm", type: "text" },
      { label: "Radius Medium", var: "--border-radius-ms", type: "text" },
      { label: "Radius Large", var: "--border-radius-md", type: "text" },
      { label: "Radius XL", var: "--border-radius-lg", type: "text" },
      { label: "Tag Radius", var: "--tag-border-radius", type: "text" },

      { type: "sub-header", label: "Dimensions" },
      { label: "Card Max Width", var: "--card-max-width", type: "text", desc: "Maximum width of the content area." },
      { label: "Front Offset", var: "--front-top-offset", type: "text", desc: "Vertical positioning for the front card." },
      { label: "Back Offset", var: "--back-top-offset", type: "text", desc: "Vertical positioning for the back card." },

      { type: "header", label: "Spacing Scale" },
      { label: "XS", var: "--spacing-xs", type: "text" },
      { label: "SM", var: "--spacing-sm", type: "text" },
      { label: "MS", var: "--spacing-ms", type: "text" },
      { label: "MD", var: "--spacing-md", type: "text" },
      { label: "LG", var: "--spacing-lg", type: "text" },
      { label: "XL", var: "--spacing-xl", type: "text" },
      { label: "XXL", var: "--spacing-xxl", type: "text" },
      { label: "XXXL", var: "--spacing-xxxl", type: "text" },
      { label: "Base Padding", var: "--base-padding", type: "text", desc: "Padding inside the main card container." },

      { type: "header", label: "UI & Effects" },
      { label: "Button Size", var: "--button-size", type: "text" },
      { label: "Lightbox Nav", var: "--lightbox-nav-width", type: "text" },
      { label: "External Links Icon", var: "--external-links-icon-size", type: "text" },
      { label: "Freq List Height", var: "--frequency-max-height", type: "text" },

      { type: "sub-header", label: "Transitions" },
      { label: "Base", var: "--base-transition", type: "text" },
      { label: "Fast", var: "--fast-transition", type: "text" }
    ],
    "Dictionary": [
      { type: "header", label: "General" },
      { label: "Collapse Entries", var: "--dictionary-collapse", type: "switch-int", desc: "Allows dictionary entries to be collapsed." },
      { label: "Max Height", var: "--dictionary-max-height", type: "text", desc: "Maximum height before entries collapse." },
      { label: "Show Definition Titles", var: "--definition-title-visibility", type: "switch-int", desc: "Show dictionary titles (e.g., 'Jitendex', '大辞泉') in the definition box." },
      { label: "Show Glossary Titles", var: "--glossary-title-visibility", type: "switch-int", desc: "Show dictionary titles (e.g., 'Jitendex', '大辞泉') in the glossary box." },
      { label: "Dictionary Counter", var: "--dictionary-counter-visibility", type: "segment", options: [{ val: "1", label: "Always" }, { val: "0", label: "Toggle" }], desc: "Show always or only after toggling." },

      { type: "header", label: "Colorizer" },
      { label: "Enable Colorizer", var: "--dictionary-colorizer", type: "switch-int", desc: "Automatically applies a unique color to each dictionary entry." },
      { label: "Show Background", var: "--dict-bg-enabled", type: "switch-int", desc: "Adds a background color to individual dictionary boxes." },
      { label: "Full Card Background", var: "--dict-back-bg", type: "switch-int", desc: "Applies the dictionary background to the entire card." },
      { label: "Background Opacity", var: "--dict-bg-opacity", type: "text" },
      { label: "Border Width", var: "--dict-border-width", type: "text" },

      { type: "header", label: "Jitendex" },
      { label: "Enable POS Header", var: "--pos-header", type: "switch-int", desc: "Extracts Jitendex POS tags into a centered sticky header." },
      { label: "Hide Example Sentences", var: "--jitendex-hide-examples", type: "switch-int" },
      { label: "Hide Explanations", var: "--jitendex-hide-info-gloss", type: "switch-int" },
      { label: "Hide Cross References", var: "--jitendex-hide-xref", type: "switch-int" },
      { label: "Hide Graphics", var: "--jitendex-hide-graphic", type: "switch-int" },
      { label: "Hide Notes", var: "--jitendex-hide-notes", type: "switch-int" },
      { label: "Hide Antonyms", var: "--jitendex-hide-antonyms", type: "switch-int" },
      { label: "Hide Forms", var: "--jitendex-hide-forms", type: "switch-int" },
      { label: "Hide Attribution", var: "--jitendex-hide-attribution", type: "switch-int" }
    ],
    "Pitch Accent": [
      { type: "header", label: "Word" },
      { label: "Pitch Style", var: "--pitch-style", type: "segment", options: [{ val: "default", label: "Default" }, { val: "alt", label: "Alt" }], desc: "Determines whether only the pitch downstep or the entire word is colored according to its pitch pattern." },
      { label: "Pitch Position", var: "--pitch-position-visibility", type: "switch-int", desc: "Show pitch downstep position." },
      { label: "Pitch Colors", var: "--pitch-colors", type: "switch-bool", desc: "Enables pitch downstep coloring." },
      { label: "Sentence Highlight", var: "--sentence-pitch-highlight", type: "switch-bool", desc: "Highlights the target word in the sentence using pitch colors." },
      { label: "Kana-Only Pitch Size", var: "--only-kana-pitch-size", type: "text", desc: "Border thickness for kana-only words." }
    ],
    "Kanji Hover": {
      mobileHidden: true,
      items: [
        { type: "header", label: "General" },
        { label: "Enable Kanji Hover", var: "--enable-kanji-hover", type: "switch-bool", desc: "Enable Kanji Hover." },
        { label: "Show Example Sentences", var: "--kanji-hover-sentence-visibility", type: "switch-int", desc: "Display context sentences within the hover tooltip." },
        { label: "Auto-Quote Example Sentences", var: "--kanji-hover-auto-quote", type: "switch-bool", desc: "Wrap the example sentences in quotation marks." },
        { label: "Word Font", var: "--kanji-hover-word-font", type: "segment", options: [{ val: "var(--serif)", label: "Serif" }, { val: "var(--sans)", label: "Sans" }], desc: "Select the font style for the word." },
        { label: "Word Size", var: "--kanji-hover-word-size", type: "slider", min: "1", max: "2", step: "0.1", unit: "rem", desc: "Adjust the scale of the word." },
        { label: "Reading Size", var: "--kanji-hover-word-reading-size", type: "slider", min: "0.65", max: "1.25", step: "0.1", unit: "rem", desc: "Adjust the scale of the reading." },

        { type: "header", label: "Pitch Accent" },
        { label: "Pitch Colors", var: "--kanji-hover-pitch-colors", type: "switch-bool", desc: "Enables pitch downstep coloring." },
        { label: "Word / Sentence Highlight", var: "--kanji-hover-pitch-highlight", type: "switch-bool", desc: "Highlights the target kanji and word in the sentence using pitch colors." }
      ]
    },
    "Grid Control": [
      { type: "header", label: "Global" },
      {
        label: "Grid Gap",
        var: "--grid-gap",
        type: "segment",
        desc: "Spacing between word and picture containers.",
        options: [
          { label: "XS", val: "var(--spacing-xs)" },
          { label: "SM", val: "var(--spacing-sm)" },
          { label: "MS", val: "var(--spacing-ms)" },
          { label: "MD", val: "var(--spacing-md)" },
          { label: "LG", val: "var(--spacing-lg)" },
          { label: "XL", val: "var(--spacing-xl)" },
          { label: "XXL", val: "var(--spacing-xxl)" },
          { label: "XXXL", val: "var(--spacing-xxxl)" }
        ]
      },
      { label: "Min Column Width", var: "--grid-column-min-width", type: "text", desc: "Minimum width before wrapping occurs." },

      { type: "header", label: "Default Desktop", mobileHidden: true },
      { label: "Order", var: "--grid-order", type: "segment", options: [{ val: "1", label: "Normal" }, { val: "2", label: "Flip" }], desc: "Swaps the word and picture container positions horizontally.", mobileHidden: true },
      { label: "Vertical", var: "--vertical-grid-order", type: "segment", options: [{ val: "0", label: "Off" }, { val: "1", label: "On" }, { val: "2", label: "Flip" }], desc: "Force vertical layout.", mobileHidden: true },

      { type: "header", label: "Large Screens", mobileHidden: true },
      { label: "Horizontal", var: "--horizontal-grid-large", type: "segment", options: [{ val: "0", label: "Off" }, { val: "1", label: "On" }, { val: "2", label: "Flip" }], mobileHidden: true },
      { label: "Vertical", var: "--vertical-grid-large", type: "segment", options: [{ val: "0", label: "Off" }, { val: "1", label: "On" }, { val: "2", label: "Flip" }], mobileHidden: true },

      { type: "header", label: "Medium Screens", mobileHidden: true },
      { label: "Horizontal", var: "--horizontal-grid-medium", type: "segment", options: [{ val: "0", label: "Off" }, { val: "1", label: "On" }, { val: "2", label: "Flip" }], mobileHidden: true },
      { label: "Vertical", var: "--vertical-grid-medium", type: "segment", options: [{ val: "0", label: "Off" }, { val: "1", label: "On" }, { val: "2", label: "Flip" }], mobileHidden: true },

      { type: "header", label: "Small Screens" },
      { label: "Horizontal", var: "--horizontal-grid-small", type: "segment", options: [{ val: "0", label: "Off" }, { val: "1", label: "On" }, { val: "2", label: "Flip" }] },
      { label: "Vertical", var: "--vertical-grid-small", type: "segment", options: [{ val: "0", label: "Off" }, { val: "1", label: "On" }, { val: "2", label: "Flip" }] }
    ],
    "Backdrop Layout": [
      { type: "header", label: "Depth Control" },
      { label: "Enable Layout", var: "--enable-backdrop-layout", type: "switch-int", desc: "Layers the image behind the text instead of placing it beside it." },
      { label: "Backdrop Mode", var: "--backdrop-style", type: "segment", options: [{ val: "0", label: "Card BG" }, { val: "1", label: "Word BG" }], desc: "Determines if the image fills the whole card or just the word box." },
      { label: "Dynamic Card Height", var: "--backdrop-dynamic-height", type: "switch-int", desc: "Forces the card height to fit the entire image (only for Card BG).", mobileHidden: true },

      { type: "header", label: "Visual Adjustments" },
      { label: "Card BG Offset", var: "--bd-card-bg-front-offset", type: "text", desc: "Front word offset for Card BG mode." },
      { label: "Word BG Offset", var: "--bd-word-bg-front-offset", type: "text", desc: "Front word offset for Word BG mode." },
      { label: "Background Box", var: "--word-background-box", type: "switch-int", desc: "Enable the background box behind the text area." },
      { label: "Image Opacity", var: "--backdrop-opacity", type: "slider", min: "0", max: "1", step: "0.1", desc: "Opacity of the background image." },
      { label: "Image Min Height", var: "--backdrop-background-height", type: "slider", min: "0", max: "500", step: "10", unit: "px", desc: "Minimum height of the background image area." },
      { label: "Text Shadow Color", var: "--bd-text-shadow-color-light", theme: "light", type: "color", desc: "Changes the color of the text shadow." },
      { label: "Text Shadow Color", var: "--bd-text-shadow-color", theme: "dark", type: "color", desc: "Changes the color of the text shadow." },
      { label: "Text Shadow Intensity", var: "--bd-text-shadow-opacity-light", theme: "light", type: "slider", min: "0", max: "1", step: "0.1", desc: "Increases text readability against dark images." },
      { label: "Text Shadow Intensity", var: "--bd-text-shadow-opacity", theme: "dark", type: "slider", min: "0", max: "1", step: "0.1", desc: "Increases text readability against bright images." },

      { type: "header", label: "Fade Effects" },
      { label: "Card BG Fade", var: "--card-background-fade", type: "switch-int", desc: "Applies a bottom fade to the image in Card Background mode." },
      { label: "Card BG Fade Intensity", var: "--card-fade-strength", type: "slider", min: "0", max: "100", step: "5", unit: "%", desc: "Visible percentage of the image." },
      { label: "Word BG Fade", var: "--word-background-fade", type: "switch-int", desc: "Applies a bottom fade to the image in Word Background mode." },
      { label: "Word BG Fade Intensity", var: "--word-fade-strength", type: "slider", min: "0", max: "100", step: "5", unit: "%", desc: "Visible percentage of the image." },

      { type: "header", label: "Front Side Word Alignment" },
      { label: "Manual Front Positioning", var: "--enable-custom-offsets", type: "switch-int", desc: "Enables manual overrides to align the front word/sentence with the back side." },
      { label: "Word BG Word Offset (≤ 1050px)", var: "--bd-word-bg-front-offset-1050", type: "text", desc: "Front word offset for Word BG mode at 1050px max width.", mobileHidden: true },
      { label: "Card BG Word Offset (≤ 1050px)", var: "--bd-card-bg-front-offset-1050", type: "text", desc: "Front word offset for Card BG mode at 1050px max width." },
      { label: "Word BG Word Offset (Mobile)", var: "--bd-word-bg-front-offset-mobile", type: "text", desc: "Front word offset for Word BG mode on mobile devices." }
    ],
    "Picture": [
      { type: "header", label: "General" },
      { label: "Collect Glossary Images", var: "--collect-glossary-images", type: "switch-bool", desc: "Automatically collect glossary images into the picture container." },
      { type: "header", label: "Picture Counter" },
      { label: "Visibility", var: "--picture-counter-visibility", type: "segment", options: [
        { val: "1", label: "Always" },
        { val: "3", label: "More than 1" },
        { val: "2", label: "Hover" },
        { val: "0", label: "Hidden" }
      ], desc: "Show always, only when there are multiple images, only on hover, or never." },
      { label: "Font Size", var: "--picture-counter-size", type: "slider", min: "0.3", max: "1.2", step: "0.05", unit: "rem", desc: "Adjust the counter's font size." },
      { label: "Background Opacity", var: "--picture-counter-bg-opacity", type: "slider", min: "0", max: "1", step: "0.1", desc: "Opacity of the background box." },
      { label: "Shadow Intensity", var: "--picture-counter-shadow-intensity", type: "slider", min: "0", max: "1", step: "0.1", desc: "Adjust the shadow intensity." },
      { type: "header", label: "Dimensions" },
      { label: "Max Picture Height", var: "--picture-height", type: "text", desc: "Maximum picture container height." },
      { label: "Max Picture Height (≤ 624px)", var: "--picture-height-small", type: "text", desc: "Maximum picture container height on small screens." }
    ],
    "Misc Info": [
      { label: "Expand Misc Info", var: "--misc-info-default-expanded", type: "switch-bool", desc: "Show misc info immediately." },
      { label: "Misc Info Position", var: "--misc-info-above", type: "segment", options: [{ val: "true", label: "above" }, { val: "false", label: "Below" }], desc: "Display Misc Info above or below tags and external links." },
      { label: "Bold Misc Info", var: "--bold-misc-info", type: "switch-int", desc: "Make misc info text bold." },
      { label: "Wrapped Misc Info Alignment", var: "--misc-info-alignment", type: "segment", options: [{ val: "left", label: "Left" }, { val: "center", label: "Center" }, { val: "right", label: "Right" }], desc: "Alignment for multi-line misc info." },
      { label: "Misc Info Background", var: "--misc-info-bg-visibility", type: "switch-int", desc: "Show background for misc info." }
    ],
    "NSFW": [
      { label: "Blur NSFW Pictures", var: "--blur-nsfw-picture", type: "switch-bool", desc: "Blur images tagged as NSFW until clicked." },
      { label: "Mute NSFW Audio", var: "--mute-nsfw-audio", type: "switch-bool", desc: "Disable automatic sentence audio playback on NSFW-tagged cards." }
    ],
    "Shortcuts": {
      mobileHidden: true,
      items: [
        { label: "Toggle Settings", var: "--toggle-settings-key", type: "keybind", desc: "Key to open the settings." },
        { label: "Replay Scene", var: "--scene-replay-shortcut-key", type: "keybind", desc: "Key to replay the active scene (only for cards with multiple scenes)." },
        { label: "Toggle Dark Mode", var: "--toggle-custom-dark-mode-key", type: "keybind", desc: "Key to toggle the custom dark mode." },
        { label: "Toggle Lightbox", var: "--toggle-picture-lightbox-key", type: "keybind", desc: "Key to open the image viewer." },
        { label: "Toggle Grid", var: "--toggle-picture-lightbox-grid-key", type: "keybind", desc: "Key to toggle the image grid view." },
        { label: "Toggle Image Visibility", var: "--toggle-image-key", type: "keybind", desc: "key to show or hide the image." },
        { label: "Toggle Image Switch", var: "--toggle-image-switch-key", type: "keybind", isPair: true, desc: "Key to switch between images." },
        { label: "Toggle Scene Switch", var: "--toggle-scene-switch-key", type: "keybind", isPair: true, desc: "Key to switch between scenes." },
        { label: "Toggle Dictionary Switch", var: "--toggle-dictionary-switch-key", type: "keybind", isPair: true, desc: "Key to switch between dictionary entries." }
      ]
    },
    "Theme": [
      { type: "header", label: "General Colors" },
      { label: "Main Text", var: "--text-light", type: "color", theme: "light" },
      { label: "Main Text", var: "--text", type: "color", theme: "dark" },
      { label: "Highlight", var: "--light-highlight", type: "color", theme: "light" },
      { label: "Highlight", var: "--dark-highlight", type: "color", theme: "dark" },
      { label: "Devoiced Mora", var: "--light-devoiced-color", type: "color", theme: "light" },
      { label: "Devoiced Mora", var: "--dark-devoiced-color", type: "color", theme: "dark" },
      { label: "Freq Text", var: "--freq-text-light", type: "color", theme: "light" },
      { label: "Freq Text", var: "--freq-text", type: "color", theme: "dark" },

      { type: "header", label: "Footer" },
      { label: "Tag BG", var: "--tag-bg-light", type: "color", theme: "light" },
      { label: "Tag BG", var: "--tag-bg", type: "color", theme: "dark" },
      { label: "Tag Text", var: "--tag-color-light", type: "color", theme: "light" },
      { label: "Tag Text", var: "--tag-color", type: "color", theme: "dark" },
      { label: "Tag Text Hover ", var: "--tag-color-hover-light", type: "color", theme: "light" },
      { label: "Tag Text Hover", var: "--tag-color-hover", type: "color", theme: "dark" },
      { label: "External Links BG", var: "--external-links-bg-light", type: "color", theme: "light" },
      { label: "External Links BG", var: "--external-links-bg", type: "color", theme: "dark" },

      { type: "header", label: "Misc Info" },
      { label: "Misc Info Text", var: "--misc-info-text-light", type: "color", theme: "light" },
      { label: "Misc Info Text", var: "--misc-info-text", type: "color", theme: "dark" },
      { label: "Misc Info Text Hover", var: "--misc-info-text-hover-light", type: "color", theme: "light" },
      { label: "Misc Info Text Hover", var: "--misc-info-text-hover", type: "color", theme: "dark" },
      { label: "Misc Info BG", var: "--misc-info-bg-light", type: "color", theme: "light" },
      { label: "Misc Info BG", var: "--misc-info-bg", type: "color", theme: "dark" },
      { label: "Misc Info BG Hover", var: "--misc-info-bg-hover-light", type: "color", theme: "light" },
      { label: "Misc Info BG Hover", var: "--misc-info-bg-hover", type: "color", theme: "dark" },

      { type: "header", label: "Controls" },
      { label: "Icons", var: "--svg-color-light", type: "color", theme: "light" },
      { label: "Icons", var: "--svg-color", type: "color", theme: "dark" },
      { label: "Icon Hover", var: "--svg-hover-light", type: "color", theme: "light" },
      { label: "Icon Hover", var: "--svg-hover", type: "color", theme: "dark" },
      { label: "Button BG", var: "--buttons-bg-light", type: "color", theme: "light" },
      { label: "Button BG", var: "--buttons-bg", type: "color", theme: "dark" },
      { label: "Button Hover", var: "--buttons-bg-hover-light", type: "color", theme: "light" },
      { label: "Button Hover", var: "--buttons-bg-hover", type: "color", theme: "dark" },

      { type: "header", label: "Interface" },
      { label: "Global BG", var: "--background-light", type: "color", theme: "light" },
      { label: "Global BG", var: "--background", type: "color", theme: "dark" },
      { label: "Card BG", var: "--card-bg-light", type: "color", theme: "light" },
      { label: "Card BG", var: "--card-bg", type: "color", theme: "dark" },
      { label: "Card Shadow", var: "--card-shadow-light", type: "color", theme: "light" },
      { label: "Card Shadow", var: "--card-shadow", type: "color", theme: "dark" },
      { label: "Lightbox BG", var: "--lightbox-bg-light", type: "color", theme: "light" },
      { label: "Lightbox BG", var: "--lightbox-bg", type: "color", theme: "dark" },
      { label: "Pitch Position BG", var: "--pitch-position-bg-light", type: "color", theme: "light" },
      { label: "Pitch Position BG", var: "--pitch-position-bg", type: "color", theme: "dark" },

      { type: "header", label: "Pitch Accent" },
      { label: "Atamadaka", var: "--pitch-red-light", type: "color", theme: "light" },
      { label: "Atamadaka", var: "--pitch-red", type: "color", theme: "dark" },
      { label: "Heiban", var: "--pitch-blue-light", type: "color", theme: "light" },
      { label: "Heiban", var: "--pitch-blue", type: "color", theme: "dark" },
      { label: "Nakadaka", var: "--pitch-orange-light", type: "color", theme: "light" },
      { label: "Nakadaka", var: "--pitch-orange", type: "color", theme: "dark" },
      { label: "Odaka", var: "--pitch-green-light", type: "color", theme: "light" },
      { label: "Odaka", var: "--pitch-green", type: "color", theme: "dark" },
      { label: "Kifuku", var: "--pitch-purple-light", type: "color", theme: "light" },
      { label: "Kifuku", var: "--pitch-purple", type: "color", theme: "dark" },

      { type: "header", label: "Content Boxes" },
      { label: "Word Box BG", var: "--word-bg-light", type: "color", theme: "light" },
      { label: "Word Box BG", var: "--word-bg", type: "color", theme: "dark" },
      { label: "Picture Box BG", var: "--picture-bg-light", type: "color", theme: "light" },
      { label: "Picture Box BG", var: "--picture-bg", type: "color", theme: "dark" },
      { label: "Notes Box BG", var: "--notes-bg-light", type: "color", theme: "light" },
      { label: "Notes Box BG", var: "--notes-bg", type: "color", theme: "dark" },
      { label: "Definition/Glossary Box BG", var: "--definition-bg-light", type: "color", theme: "light" },
      { label: "Definition/Glossary Box BG", var: "--definition-bg", type: "color", theme: "dark" },
      { label: "Freq List Box BG", var: "--frequency-bg-light", type: "color", theme: "light" },
      { label: "Freq List Box BG", var: "--frequency-bg", type: "color", theme: "dark" }
    ],
    "Advanced": [
      { label: "Custom CSS", var: "user-custom-css", type: "textarea", },

      { type: "header", label: "Auto Advance" },
      { label: "Auto Show Answer", var: "--auto-show-answer", type: "switch-bool", desc: "Automatically show the answer after a delay." },
      { label: "Show Answer Delay", var: "--show-answer-delay", type: "slider", min: "0", max: "15", step: "0.5", unit: "s", desc: "Delay before showing the answer." },
      { label: "Auto Advance", var: "--auto-advance", type: "switch-bool", desc: "Automatically advance to the next card after a delay." },
      { label: "Auto Advance Delay", var: "--auto-advance-delay", type: "slider", min: "0", max: "15", step: "0.5", unit: "s", desc: "Delay before advancing to the next card." },
      {
        label: "Auto Advance Ease", var: "--auto-advance-ease", type: "segment", desc: "The ease button to automatically click.", options: [
          { label: "Again", val: "1" },
          { label: "Hard", val: "2" },
          { label: "Good", val: "3" }
        ]
      },
      { label: "Enable Fade-in", var: "--enable-fade-in", type: "switch-bool", desc: "Adds a smooth fade-in effect when flipping the card." }
    ]
  };

  // CONVERT ANY COLOR TO HEX
  // =========================================================================
  function getSafeHexColor(str) {
    if (!str) return '#000000';

    str = str.trim();

    if (/^#[0-9A-F]{6}$/i.test(str)) return str;
    if (/^#[0-9A-F]{3}$/i.test(str)) {
      return '#' + str[1] + str[1] + str[2] + str[2] + str[3] + str[3];
    }

    const rgba = str.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i);
    if (rgba) {
      const r = parseInt(rgba[1]).toString(16).padStart(2, '0');
      const g = parseInt(rgba[2]).toString(16).padStart(2, '0');
      const b = parseInt(rgba[3]).toString(16).padStart(2, '0');
      return `#${r}${g}${b}`;
    }

    const triplet = str.match(/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)$/);
    if (triplet) {
      const r = parseInt(triplet[1]).toString(16).padStart(2, '0');
      const g = parseInt(triplet[2]).toString(16).padStart(2, '0');
      const b = parseInt(triplet[3]).toString(16).padStart(2, '0');
      return `#${r}${g}${b}`;
    }

    const d = document.createElement("div");
    d.style.color = str;
    d.style.display = "none";
    document.body.appendChild(d);
    const computed = window.getComputedStyle(d).color;
    document.body.removeChild(d);

    if (computed && computed !== str && computed !== 'rgba(0, 0, 0, 0)') {
      return getSafeHexColor(computed);
    }

    return '#000000';
  }

  function utf8_to_b64(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
  }

  function getLiveCustomCss() {
    const liveTag = document.getElementById("senren-live-custom-css");
    if (liveTag && liveTag.textContent.trim()) return liveTag.textContent.trim();

    const styles = document.querySelectorAll('style');
    for (const s of styles) {
      if (s.textContent.includes('/* CUSTOM CSS START */')) {
        const match = s.textContent.match(/\/\* CUSTOM CSS START \*\/([\s\S]*?)\/\* CUSTOM CSS END \*\//);
        if (match && match[1]) return match[1].trim();
      }
    }
    return null;
  }

  // UPDATE BACKDROP STATE CLASSES
  // =========================================================================
  function updateBackdropState() {
    const doc = document.documentElement;

    let enabled = doc.style.getPropertyValue('--enable-backdrop-layout').trim();
    if (!enabled) enabled = getComputedStyle(doc).getPropertyValue('--enable-backdrop-layout').trim();

    let style = doc.style.getPropertyValue('--backdrop-style').trim();
    if (!style) style = getComputedStyle(doc).getPropertyValue('--backdrop-style').trim();

    document.body.classList.remove('senren-bd-card', 'senren-bd-word');

    if (enabled === '1' || enabled === 'true') {
      if (style === '1') {
        document.body.classList.add('senren-bd-word');
      } else {
        document.body.classList.add('senren-bd-card');
      }
    }
  }

  // STYLING
  // =========================================================================
  if (!document.getElementById('senren-styles-injected')) {
    const antiFlashStyle = document.createElement('style');
    antiFlashStyle.id = 'senren-anti-flash';
    antiFlashStyle.textContent = `
			#senren-settings-modal { 
				display: none !important; 
				opacity: 0 !important;
			}
		`;
    document.head.appendChild(antiFlashStyle);

    const link = document.createElement('link');
    link.id = 'senren-styles-injected';
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = '_senren_settings_v5.1.0.css';

    link.onload = function () {
      const temp = document.getElementById('senren-anti-flash');
      if (temp) temp.remove();
    };

    document.head.appendChild(link);
  }

  // ANKI CONNECT
  // =========================================================================
  async function invokeAnkiConnect(action, params = {}) {
    if (window.IS_MOBILE) return null;

    const response = await fetch(ANKI_CONNECT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action, version: 6, params }),
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    if (data.error) throw new Error(data.error);
    return data.result;
  }

  async function saveToAnki() {
    if (window.IS_MOBILE) return;
    const statusBtn = document.getElementById('senren-save-btn');
    const origText = "Save to Anki";
    statusBtn.innerText = "Processing...";
    statusBtn.disabled = true;

    try {
      const cardInfo = await invokeAnkiConnect('guiCurrentCard');
      if (!cardInfo) throw new Error("Current card not found.");
      const modelName = cardInfo.modelName;

      const styleInfo = await invokeAnkiConnect('modelStyling', { modelName: modelName });
      let modifiedCss = styleInfo.css;
      const originalCss = modifiedCss;

      const liveSettings = getCurrentSettings();
      const items = Object.values(groups).flatMap(g => Array.isArray(g) ? g : g.items);

      items.forEach(item => {
        if (item.type === 'header' || item.type === 'sub-header') return;

        let newVal = liveSettings[item.var];

        if (item.type === 'textarea') {
          let cssVal = newVal || "";

          const startMarker = "/* CUSTOM CSS START */";
          const endMarker = "/* CUSTOM CSS END */";
          const blockRegex = /\/\* CUSTOM CSS START \*\/[\s\S]*?\/\* CUSTOM CSS END \*\//g;
          const newBlock = `${startMarker}\n${cssVal}\n${endMarker}`;

          if (blockRegex.test(modifiedCss)) {
            modifiedCss = modifiedCss.replace(blockRegex, newBlock);
          } else if (cssVal !== "") {
            modifiedCss += "\n\n" + newBlock;
          }
        }
        else {
          if (newVal === null || newVal === undefined) return;

          const safeVar = item.var.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
          const regex = new RegExp(`(${safeVar}\\s*:\\s*)([^;\\r\\n]+)(;)([ \\t]*)(\\/\\*.*)?`, 'g');

          if (regex.test(modifiedCss)) {
            modifiedCss = modifiedCss.replace(regex, (match, prefix, oldVal, semi, padding, comment) => {
              if (!comment) return `${prefix}${newVal}${semi}${padding}`;

              const diff = newVal.length - oldVal.length;
              let newPadding = padding;

              if (diff > 0) {
                if (padding.length >= diff) newPadding = padding.substring(diff);
                else newPadding = "";
              } else if (diff < 0) {
                newPadding = padding + " ".repeat(Math.abs(diff));
              }

              return `${prefix}${newVal}${semi}${newPadding}${comment}`;
            });
          }
        }
      });

      if (modifiedCss === originalCss) {
        alert("No changes detected.");
        statusBtn.innerText = "No Changes";
        statusBtn.disabled = false;
        setTimeout(() => statusBtn.innerText = origText, 2000);
        return;
      }

      statusBtn.innerText = "Saving...";
      await invokeAnkiConnect('updateModelStyling', {
        model: { name: modelName, css: modifiedCss }
      });

      items.forEach(item => {
        if (item.type === 'header' || item.type === 'sub-header') return;
        localStorage.removeItem("senren_" + item.var);
      });

      statusBtn.innerText = "Saved!";
      statusBtn.style.background = "#28a745";
      statusBtn.style.borderColor = "#28a745";
      statusBtn.style.color = "white";

      setTimeout(() => {
        statusBtn.innerText = origText;
        statusBtn.disabled = false;
        statusBtn.style.background = "";
        statusBtn.style.color = "";
        statusBtn.style.borderColor = "";
      }, 2500);

    } catch (e) {
      console.error(e);
      alert("Error: " + e.message);
      statusBtn.innerText = "Failed";
      statusBtn.disabled = false;
      setTimeout(() => statusBtn.innerText = origText, 2000);
    }
  }

  // PRESET LOGIC
  // =========================================================================
  let activePreset = null;
  let presetsCache = {};

  async function savePresetsToFile(presets) {
    if (window.IS_MOBILE) return;
    localStorage.setItem('senren_presets_cache', JSON.stringify(presets));
    const jsonStr = JSON.stringify(presets, null, 2);
    const base64Data = utf8_to_b64(jsonStr);

    await invokeAnkiConnect('storeMediaFile', {
      filename: PRESET_FILENAME,
      data: base64Data
    });
  }

  async function loadPresetsFromFile() {
    let presets = {};
    try {
      const response = await fetch(`${PRESET_FILENAME}?t=${new Date().getTime()}`);
      if (response.ok) {
        presets = await response.json();
        localStorage.setItem('senren_presets_cache', JSON.stringify(presets));
      }
    } catch (e) { }

    if (!presets || Object.keys(presets).length === 0) {
      const cached = localStorage.getItem('senren_presets_cache');
      if (cached) {
        presets = JSON.parse(cached);
      } else {
        presets = { "Default": getCurrentSettings(), "_active": "Default" };
        try { await savePresetsToFile(presets); } catch (e) { }
      }
    }
    presetsCache = presets || {};
    return presets;
  }

  async function saveDeckLinksToFile(links) {
    if (window.IS_MOBILE) return;
    localStorage.setItem('senren_deck_presets_cache', JSON.stringify(links));
    const jsonStr = JSON.stringify(links, null, 2);
    const base64Data = utf8_to_b64(jsonStr);
    await invokeAnkiConnect('storeMediaFile', {
      filename: DECK_PRESETS_FILENAME,
      data: base64Data
    });
  }

  async function loadDeckLinksFromFile() {
    try {
      const response = await fetch(`${DECK_PRESETS_FILENAME}?t=${new Date().getTime()}`);
      if (response.ok) {
        const links = await response.json();
        localStorage.setItem('senren_deck_presets_cache', JSON.stringify(links));
        return links;
      }
    } catch (e) { }
    const cached = localStorage.getItem('senren_deck_presets_cache');
    return cached ? JSON.parse(cached) : {};
  }

  async function renderDeckLinksUI() {
    const container = document.getElementById('senren-deck-links-container');
    if (!container) return;

    const links = await loadDeckLinksFromFile();
    const meta = document.getElementById('senren-metadata');
    const currentDeck = meta ? meta.getAttribute('data-deck') : "Unknown Deck";

    let linksHtml = '';
    const deckNames = Object.keys(links).sort();

    if (deckNames.length === 0) {
      linksHtml = '<div class="senren-deck-links-empty">No decks are currently linked to a preset.</div>';
    } else {
      deckNames.forEach(deck => {
        linksHtml += `
          <div class="senren-row">
            <div class="senren-label-group">
              <span class="senren-label-main">${deck}</span>
              <span class="senren-label-desc">Linked to: <span class="senren-deck-link-val">${links[deck]}</span></span>
            </div>
            <button class="senren-btn danger senren-btn-sm" onclick="window.senrenRemoveDeckLink('${deck}')">Unlink Deck</button>
          </div>
        `;
      });
    }

    container.innerHTML = `
      <div class="senren-grid-wrapper">
        <div class="senren-grid-card">
          <div class="senren-group-header">Current Deck</div>
          <div class="senren-row">
            <div class="senren-label-group">
              <span class="senren-label-main">${currentDeck}</span>
              <span class="senren-label-desc">Link this deck to the active preset.</span>
            </div>
            <button class="senren-btn senren-btn-primary senren-btn-md" onclick="window.senrenLinkCurrentDeck()">Link Deck</button>
          </div>
        </div>

        <div class="senren-grid-card">
          <div class="senren-group-header">Linked Decks</div>
          <div id="senren-deck-links-list">${linksHtml}</div>
        </div>
      </div>
    `;
  }

  window.senrenLinkCurrentDeck = async function () {
    if (!activePreset) return alert("Please select a preset first.");
    const meta = document.getElementById('senren-metadata');
    const deckName = meta ? meta.getAttribute('data-deck') : null;
    if (!deckName) return alert("Could not detect deck name.");

    const links = await loadDeckLinksFromFile();
    links[deckName] = activePreset;

    try {
      await saveDeckLinksToFile(links);
      renderDeckLinksUI();
    } catch (e) {
      alert("Error saving deck link: " + e.message);
    }
  };

  window.senrenRemoveDeckLink = async function (deckName) {
    const links = await loadDeckLinksFromFile();
    if (!links[deckName]) return;

    delete links[deckName];
    try {
      await saveDeckLinksToFile(links);
      renderDeckLinksUI();
    } catch (e) {
      alert("Error removing deck link: " + e.message);
    }
  };
  function getCurrentSettings() {
    const settings = {};
    const computedRoot = getComputedStyle(document.documentElement);
    const cardEl = document.querySelector('.card');
    const computedCard = cardEl ? getComputedStyle(cardEl) : null;

    const items = Object.values(groups).flatMap(g => Array.isArray(g) ? g : g.items);
    items.forEach(item => {
      if (item.type === 'header' || item.type === 'sub-header') return;

      let val = null;

      // Try to get value from live UI if modal exists
      const input = document.querySelector(`[data-var="${item.var}"]`);
      if (input) {
        if (input.type === 'checkbox') {
          val = input.checked ? (item.type === 'switch-bool' ? 'true' : '1') : (item.type === 'switch-bool' ? 'false' : '0');
        } else if (item.type === 'slider') {
          const unit = input.getAttribute('data-unit') || '';
          val = input.value + unit;
        } else if (input.classList.contains('senren-segment-group')) {
          const activeBtn = input.querySelector('.senren-segment-btn.active');
          if (activeBtn) val = activeBtn.getAttribute('data-val');
        } else {
          val = input.value;
        }
      }

      // Fallback to localStorage
      if (val === null || val === undefined || val === "null") {
        val = localStorage.getItem("senren_" + item.var);
      }

      // Fallback to active preset if UI and localStorage are missing
      if ((val === null || val === "null") && activePreset && presetsCache[activePreset] && presetsCache[activePreset][item.var] !== undefined) {
        val = presetsCache[activePreset][item.var];
      }

      // Fallback to Computed Card Styles
      if (val === null || val === "null") {
        if (item.var === 'user-custom-css') {
          val = getLiveCustomCss();
        } else {
          val = computedRoot.getPropertyValue(item.var).trim();
          if ((!val || val === '' || val === 'initial') && computedCard) {
            val = computedCard.getPropertyValue(item.var).trim();
          }
        }
      }

      if (val === "null") val = "";

      if (val !== null) {
        if (item.type === 'textarea' || (val !== '' && val !== 'initial')) {
          settings[item.var] = val;
        }
      }
    });
    return settings;
  }

  function applyPreset(settings) {
    const items = Object.values(groups).flatMap(g => Array.isArray(g) ? g : g.items);

    items.forEach(item => {
      if (item.type === 'header' || item.type === 'sub-header') return;
      localStorage.removeItem("senren_" + item.var);
      document.documentElement.style.removeProperty(item.var);
    });

    for (const [key, value] of Object.entries(settings)) {
      const isValid = items.some(i => i.var === key);
      if (isValid) {
        localStorage.setItem("senren_" + key, value);
        document.documentElement.style.setProperty(key, value);
      }
    }

    const container = document.querySelector('.senren-content');
    if (container) {
      items.forEach(item => {
        if (item.type === 'header' || item.type === 'sub-header') return;

        const savedVal = localStorage.getItem("senren_" + item.var);
        const input = document.querySelector(`[data-var="${item.var}"]`);

        if (input) {
          if (item.type === 'switch-bool' || item.type === 'switch-int') {
            input.checked = (savedVal === 'true' || savedVal === '1');

          } else if (item.type === 'color') {
            input.value = savedVal || "#000000";
            if (input.previousElementSibling && input.previousElementSibling.type === 'color') {
              input.previousElementSibling.value = getSafeHexColor(savedVal || "#000000");
            }

          } else if (item.type === 'textarea') {
            input.value = savedVal || "";

          } else if (item.type !== 'segment') {
            if (item.type === 'slider') {
              input.value = parseFloat(savedVal) || 0;
            } else {
              input.value = savedVal || "";
            }
            input.dispatchEvent(new Event('input'));
          }
        }

        if (item.type === 'segment') {
          const btns = document.querySelectorAll(`.senren-segment-btn[onclick*="${item.var}"]`);
          const clean = (s) => s ? s.toString().toLowerCase().replace(/['"\s]/g, '') : '';

          const resolveVal = (v) => {
            if (!v) return v;
            if (v.startsWith('var(')) {
              const dummy = document.createElement('div');
              dummy.style.setProperty('display', 'none');
              dummy.style.setProperty('width', v);
              document.body.appendChild(dummy);
              const computed = getComputedStyle(dummy).width;
              document.body.removeChild(dummy);
              return computed;
            }
            return v;
          }

          const resolvedSaved = resolveVal(savedVal);

          const btnsArray = Array.from(btns);
          let foundExact = false;

          btnsArray.forEach(btn => {
            const btnVal = btn.getAttribute('data-val');
            if (clean(btnVal) === clean(savedVal)) {
              btn.classList.add('active');
              foundExact = true;
            } else {
              btn.classList.remove('active');
            }
          });

          if (!foundExact) {
            let foundResolved = false;
            btnsArray.forEach(btn => {
              const btnVal = btn.getAttribute('data-val');
              const resolvedBtn = resolveVal(btnVal);
              if (!foundResolved && resolvedBtn && resolvedBtn === resolvedSaved) {
                btn.classList.add('active');
                foundResolved = true;
              } else {
                btn.classList.remove('active');
              }
            });
          }
        }
      });
    }

    triggerUpdates();
  }

  // PRESET UI HANDLERS & CUSTOM SELECT
  // =========================================================================
  async function renderPresetUI() {
    const presets = await loadPresetsFromFile();

    let savedActive = presets["_active"];
    delete presets["_active"];

    const names = Object.keys(presets).sort();

    if (!activePreset) {
      if (savedActive && presets[savedActive]) activePreset = savedActive;
      else if (names.includes("Default")) activePreset = "Default";
      else if (names.length > 0) activePreset = names[0];
    }

    const container = document.getElementById('senren-custom-select-container');
    if (!container) return;

    let optionsHtml = '';
    names.forEach(name => {
      const isSelected = name === activePreset ? 'selected' : '';
      optionsHtml += `<div class="senren-option ${isSelected}" onclick="window.senrenSelectPreset('${name}')">${name}</div>`;
    });

    container.innerHTML = `
            <div class="senren-custom-select" id="senren-custom-select">
                <div class="senren-select-trigger" onclick="window.senrenToggleCustomSelect(event)">
                    <span id="senren-selected-text">${activePreset || "Select..."}</span>
                    <i class="fas fa-chevron-up" style="font-size: 10px;"></i>
                </div>
                <div class="senren-custom-options">
                    ${optionsHtml}
                </div>
            </div>
        `;
  }

  window.senrenToggleCustomSelect = function (e) {
    e.stopPropagation();
    document.getElementById('senren-custom-select').classList.toggle('active');
    document.getElementById('senren-preset-menu').classList.remove('active');
  }

  window.senrenSelectPreset = async function (name) {
    activePreset = name;

    document.getElementById('senren-selected-text').textContent = name;
    document.getElementById('senren-custom-select').classList.remove('active');

    const presets = await loadPresetsFromFile();

    if (presets[name]) {
      applyPreset(presets[name]);

      presets["_active"] = name;
      try { await savePresetsToFile(presets); } catch (e) { console.error(e); }

      await renderPresetUI();
    }
  }

  window.senrenToggleMenu = function (e) {
    e.stopPropagation();
    const menu = document.getElementById('senren-preset-menu');
    menu.classList.toggle('active');
    const select = document.getElementById('senren-custom-select');
    if (select) select.classList.remove('active');
  };

  window.senrenUpdateCurrentPreset = async function () {
    if (!activePreset) {
      try {
        const tempPresets = await loadPresetsFromFile();
        if (tempPresets && tempPresets["_active"]) {
          activePreset = tempPresets["_active"];
        }
      } catch (e) { }
    }

    if (!activePreset) {
      window.senrenAddPreset();
      return;
    }

    const btn = document.querySelector('.senren-btn-split-main');
    const origText = btn ? btn.innerText : "Save";

    if (btn) {
      btn.innerText = "Saving...";
      btn.disabled = true;
    }

    const presets = await loadPresetsFromFile();
    const currentActive = presets["_active"] || activePreset;
    delete presets["_active"];

    presets[activePreset] = getCurrentSettings();
    presets["_active"] = currentActive;

    try {
      await savePresetsToFile(presets);

      if (btn) {
        btn.innerText = "Saved!";
        btn.style.background = "#28a745";
        btn.style.borderColor = "#28a745";
        btn.style.color = "white";

        setTimeout(() => {
          btn.innerText = origText;
          btn.disabled = false;
          btn.style.background = "";
          btn.style.borderColor = "";
          btn.style.color = "";
        }, 2000);
      }
    } catch (e) {
      alert("Error saving: " + e.message);
      if (btn) {
        btn.innerText = "Failed";
        setTimeout(() => {
          btn.innerText = origText;
          btn.disabled = false;
        }, 2000);
      }
    }
  };

  // HELPER: CUSTOM PROMPT
  // =========================================================================
  function senrenCustomPrompt(message, defaultValue = "") {
    return new Promise((resolve) => {
      const existing = document.getElementById('senren-prompt-overlay');
      if (existing) existing.remove();

      const overlay = document.createElement('div');
      overlay.id = 'senren-prompt-overlay';

      overlay.innerHTML = `
				<div class="senren-prompt-box">
					<div class="senren-prompt-header">
						<div class="senren-prompt-title">${message}</div>
						<span class="senren-prompt-close">&times;</span>
					</div>
					
					<input type="text" class="senren-prompt-input" value="${defaultValue}">
					
					<div class="senren-prompt-buttons">
						<button class="senren-prompt-btn" id="prompt-cancel">Cancel</button>
						<button class="senren-prompt-btn" id="prompt-ok">Save</button>
					</div>
				</div>
			`;
      document.body.appendChild(overlay);

      requestAnimationFrame(() => overlay.classList.add('active'));

      const input = overlay.querySelector('input');
      const btnOk = overlay.querySelector('#prompt-ok');
      const btnCancel = overlay.querySelector('#prompt-cancel');
      const btnClose = overlay.querySelector('.senren-prompt-close');

      input.focus();
      input.select();

      const close = (value) => {
        overlay.classList.remove('active');
        setTimeout(() => overlay.remove(), 200);
        resolve(value);
      };

      btnOk.onclick = () => close(input.value);
      btnCancel.onclick = () => close(null);
      btnClose.onclick = () => close(null);

      input.onkeydown = (e) => {
        if (e.key === 'Enter') close(input.value);
        if (e.key === 'Escape') close(null);
      };
    });
  }

  window.senrenAddPreset = async function () {
    document.getElementById('senren-preset-menu').classList.remove('active');

    const name = await senrenCustomPrompt("Add Preset");
    if (!name) return;

    const presets = await loadPresetsFromFile();
    delete presets["_active"];

    presets[name] = getCurrentSettings();
    presets["_active"] = name;

    try {
      await savePresetsToFile(presets);
      activePreset = name;
      await renderPresetUI();
    } catch (e) {
      alert("Error: " + e.message);
    }
  };

  window.senrenRenamePreset = async function () {
    document.getElementById('senren-preset-menu').classList.remove('active');

    if (!activePreset) {
      alert("No preset selected to rename.");
      return;
    }

    const newName = await senrenCustomPrompt("Rename Preset", activePreset);
    if (!newName || newName === activePreset) return;

    const presets = await loadPresetsFromFile();
    delete presets["_active"];

    presets[newName] = presets[activePreset];
    delete presets[activePreset];
    presets["_active"] = newName;

    try {
      await savePresetsToFile(presets);
      activePreset = newName;
      await renderPresetUI();
    } catch (e) {
      alert("Error: " + e.message);
    }
  };

  window.senrenRemovePreset = async function () {
    document.getElementById('senren-preset-menu').classList.remove('active');

    if (!activePreset) {
      alert("No preset selected to remove.");
      return;
    }

    const presets = await loadPresetsFromFile();
    delete presets["_active"];
    delete presets[activePreset];

    const names = Object.keys(presets);
    const nextActive = names.length > 0 ? (names.includes("Default") ? "Default" : names[0]) : null;

    if (nextActive) presets["_active"] = nextActive;

    try {
      await savePresetsToFile(presets);
      activePreset = nextActive;
      await renderPresetUI();
    } catch (e) {
      alert("Error: " + e.message);
    }
  };

  window.senrenExportTheme = async function () {
    const themeSettings = {};
    const themeVars = groups["Theme"].map(i => i.var);
    const current = getCurrentSettings();

    themeVars.forEach(v => {
      if (current[v] !== undefined) themeSettings[v] = current[v];
    });

    if (current["user-custom-css"]) {
      themeSettings["user-custom-css"] = current["user-custom-css"];
    }

    const jsonStr = JSON.stringify(themeSettings, null, 2);

    try {
      const handle = await window.showSaveFilePicker({
        suggestedName: 'senren_theme.json',
        types: [{
          description: 'JSON File',
          accept: { 'application/json': ['.json'] },
        }],
      });
      const writable = await handle.createWritable();
      await writable.write(jsonStr);
      await writable.close();
    } catch (err) {
      if (err.name !== 'AbortError') {
        alert("Error saving theme: " + err.message);
      }
    }
  };

  window.senrenImportTheme = function () {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';

    input.onchange = e => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = readerEvent => {
        try {
          const content = readerEvent.target.result;
          const themeSettings = JSON.parse(content);
          applyPreset(themeSettings);
          alert("Theme imported and applied successfully.");
        } catch (err) {
          alert("Error importing theme: Invalid JSON file.");
        }
      };
      reader.readAsText(file, 'UTF-8');
    };

    input.click();
  };

  // UI LOGIC
  // =========================================================================
  function triggerUpdates() {
    if (typeof window.senrenUpdateConfig === 'function') {
      window.senrenUpdateConfig(true);
    }

    let customCssVal = localStorage.getItem("senren_user-custom-css");
    if (customCssVal === null || customCssVal === "null") {
      customCssVal = getLiveCustomCss();
    }
    if (customCssVal === null && activePreset && presetsCache[activePreset] && presetsCache[activePreset]["user-custom-css"] !== undefined) {
      customCssVal = presetsCache[activePreset]["user-custom-css"];
    }
    const safeCss = (customCssVal === null || customCssVal === "null" || customCssVal === undefined) ? "" : customCssVal;

    let styleTag = document.getElementById("senren-live-custom-css");
    if (!styleTag) {
      styleTag = document.createElement("style");
      styleTag.id = "senren-live-custom-css";
      document.head.appendChild(styleTag);
    }
    styleTag.textContent = safeCss;

    if (typeof window.alternativePitchStyle === 'function') window.alternativePitchStyle();
    if (typeof window.dynamicWordSize === 'function') window.dynamicWordSize();
    if (typeof window.toggleDefinition === 'function') window.toggleDefinition();
    if (typeof window.noDuplicateKana === 'function') window.noDuplicateKana();
    if (typeof window.initializeAudioSentenceState === 'function') window.initializeAudioSentenceState();
    if (typeof window.initializeSentenceState === 'function') window.initializeSentenceState();
    if (typeof window.initializeHintState === 'function') window.initializeHintState();
    if (typeof window.dynamicCardHeight === 'function') window.dynamicCardHeight();
    if (typeof window.enableInteractions === 'function') window.enableInteractions();
    if (typeof window.senrenRefreshScenes === 'function') window.senrenRefreshScenes();
    if (typeof window.initPOSHeader === 'function') window.initPOSHeader();

    updateBackdropState();
  }

  function restoreState() {
    const items = Object.values(groups).flatMap(g => Array.isArray(g) ? g : g.items);

    items.forEach(item => {
      if (item.type === 'header' || item.type === 'sub-header') return;

      const savedVal = localStorage.getItem("senren_" + item.var);

      if (savedVal !== null) {
        document.documentElement.style.setProperty(item.var, savedVal);
      }
    });

    triggerUpdates();
  }

  restoreState();

  function buildMenu() {
    const btn = document.querySelector('.toggle-settings-btn');

    if (btn) {
      btn.onclick = () => {
        const modal = document.getElementById('senren-settings-modal');
        if (modal) modal.classList.add('active');
        renderPresetUI();
      };
    }

    if (document.getElementById('senren-settings-modal')) return;

    let navHtml = '';
    let contentHtml = '';
    let groupIndex = 0;

    const isDark = document.body.classList.contains('nightMode') || document.documentElement.classList.contains('custom-dark-mode');

    for (const [groupName, groupData] of Object.entries(groups)) {
      const items = Array.isArray(groupData) ? groupData : groupData.items;
      const groupMobileHidden = Array.isArray(groupData) ? false : (groupData.mobileHidden || false);

      if (groupMobileHidden && window.IS_MOBILE) {
        continue;
      }

      const isActive = groupIndex === 0 ? 'active' : '';
      const panelId = `panel-${groupIndex}`;

      navHtml += `<div class="senren-nav-item ${isActive}" onclick="window.switchTab(this, '${panelId}')">${groupName}</div>`;

      let rowsHtml = '';

      const hasHeaders = items.some(i => i.type === 'header');

      if (hasHeaders) {
        rowsHtml += `<div class="senren-grid-wrapper">`;
        let currentCardHtml = '';

        if (items.length > 0 && items[0].type !== 'header') {
          currentCardHtml = `<div class="senren-grid-card">`;
        }

        items.forEach(item => {
          if (item.theme && item.theme !== (isDark ? 'dark' : 'light')) {
            return;
          }

          if (item.type === 'header') {
            if (currentCardHtml) {
              currentCardHtml += `</div>`;
              rowsHtml += currentCardHtml;
            }
            const mobileClass = (item.mobileHidden && window.IS_MOBILE) ? ' senren-mobile-hidden' : '';
            currentCardHtml = `<div class="senren-grid-card${mobileClass}"><div class="senren-group-header">${item.label}</div>`;
          } else if (item.type === 'sub-header') {
            const mobileClass = (item.mobileHidden && window.IS_MOBILE) ? ' senren-mobile-hidden' : '';
            currentCardHtml += `<div class="senren-sub-header${mobileClass}">${item.label}</div>`;
          } else {
            currentCardHtml += generateControlHtml(item, 'grid-row');
          }
        });

        if (currentCardHtml) {
          currentCardHtml += `</div>`;
          rowsHtml += currentCardHtml;
        }
        rowsHtml += `</div>`;

      } else {
        items.forEach(item => {
          rowsHtml += generateControlHtml(item, 'standard');
        });
      }

      let panelHeader = `<h3>${groupName}</h3>`;
      if (groupName === 'Theme') {
        panelHeader = `
          <div class="senren-panel-header">
            <h3>${groupName}</h3>
            <a href="https://github.com/BrenoAqua/Senren/tree/main/themes" target="_blank" class="senren-btn-browse">
              <i class="fab fa-github"></i> Browse Themes
            </a>
          </div>`;
      }

      contentHtml += `<div id="${panelId}" data-group="${groupName}" class="senren-panel ${isActive}">${panelHeader}${rowsHtml}</div>`;
      groupIndex++;
    }

    // Deck Presets Panel
    const deckLinksPanelId = `panel-${groupIndex}`;
    navHtml += `<div class="senren-nav-item" onclick="window.switchTab(this, '${deckLinksPanelId}')">Deck Presets</div>`;
    contentHtml += `<div id="${deckLinksPanelId}" data-group="Deck Links" class="senren-panel">
      <h3>Deck Presets</h3>
      <div id="senren-deck-links-container"></div>
    </div>`;

    const modal = document.createElement('div');
    modal.id = 'senren-settings-modal';
    modal.innerHTML = `
            <div class="senren-dialog">
                <div class="senren-header">
                    <h2>Preferences</h2>
                    <div class="senren-header-actions">
                        <!-- Dock Toggle -->
                        <div class="senren-icon-btn senren-dock-btn" onclick="window.senrenToggleDock()">
                            <i class="fas fa-columns"></i>
                        </div>
                        <!-- Close Button -->
                        <div class="senren-icon-btn senren-close-btn" onclick="window.senrenCloseSettings()">
                            <i class="fas fa-times"></i>
                        </div>
										</div>
                </div>
                <div class="senren-body">
                    <div class="senren-sidebar">${navHtml}</div>
                    <div class="senren-content">${contentHtml}</div>
                </div>
                
                <div class="senren-footer">
                    <!-- Preset Controls -->
                    <div class="senren-footer-left">
                        <div id="senren-custom-select-container"></div>
                        
                        <div class="senren-split-group">
                            <button class="senren-btn senren-btn-split-main" onclick="window.senrenUpdateCurrentPreset()">Save</button>
                            <button class="senren-btn senren-btn-split-menu" onclick="window.senrenToggleMenu(event)">
                                <i class="fas fa-chevron-up" style="font-size: 10px;"></i>
                            </button>
                        </div>

                        <!-- Popup Menu -->
                        <div id="senren-preset-menu" class="senren-popup-menu">
                            <div class="senren-menu-item" onclick="window.senrenAddPreset()">Add Preset</div>
                            <div class="senren-menu-item" onclick="window.senrenRenamePreset()">Rename Preset</div>
                            <div class="senren-menu-spacer"></div>
                            <div class="senren-menu-item" onclick="window.senrenExportTheme()">Share Theme</div>
                            <div class="senren-menu-item" onclick="window.senrenImportTheme()">Import Theme</div>
                            <div class="senren-menu-spacer"></div>
                            <div class="senren-menu-item danger" onclick="window.senrenRemovePreset()">Remove Preset</div>
                        </div>
                    </div>

                    <!-- Global Actions -->
                    <div class="senren-footer-right">
                        <button class="senren-btn" onclick="window.senrenReset()">Reset Defaults</button>
                        <button id="senren-save-btn" class="senren-btn senren-btn-primary">Save to Anki</button>
                    </div>
                </div>
            </div>`;
    document.body.appendChild(modal);

    if (!window._senrenSettingsClickInitialized) {
      window.addEventListener('click', (e) => {
        const menu = document.getElementById('senren-preset-menu');
        const select = document.getElementById('senren-custom-select');
        const btn = document.querySelector('.senren-btn-split-menu');

        if (menu && menu.classList.contains('active') && !menu.contains(e.target) && !btn.contains(e.target)) {
          menu.classList.remove('active');
        }
        if (select && select.classList.contains('active') && !select.contains(e.target)) {
          select.classList.remove('active');
        }
      });
      window._senrenSettingsClickInitialized = true;
    }

    document.getElementById('senren-save-btn').onclick = saveToAnki;

    renderPresetUI();

    // EVENTS
    modal.querySelectorAll('input, textarea').forEach(input => {
      const varName = input.getAttribute('data-var');
      const type = input.getAttribute('data-type');

      if (type === 'keybind') {
        input.addEventListener('click', () => {
          input.value = "Press key...";
          input.classList.add('listening');
        });

        input.addEventListener('keydown', (e) => {
          e.preventDefault();
          e.stopPropagation();

          if (['Control', 'Alt', 'Shift', 'Meta'].includes(e.key)) return;

          const isPair = input.getAttribute('data-pair') === 'true';
          const parts = [];
          if (e.ctrlKey) parts.push('Ctrl');
          if (e.altKey) parts.push('Alt');
          if (e.shiftKey) parts.push('Shift');
          if (e.metaKey) parts.push('Meta');

          let key = e.key;
          if (key === ' ') key = 'Space';
          
          if (isPair) {
            if (key === 'ArrowLeft') key = 'Left/Right';
            else if (key === 'ArrowRight') key = 'Left/Right';
            else if (key.length === 1) key = key.toUpperCase();
          } else {
            if (key.length === 1) key = key.toUpperCase();
          }

          const combo = parts.length > 0 ? parts.join('+') + '+' + key : key;

          input.value = combo;
          input.classList.remove('listening');
          input.blur();

          const event = new Event('change');
          input.dispatchEvent(event);
        });

        input.addEventListener('blur', () => {
          if (input.value === "Press key...") {
            const saved = localStorage.getItem("senren_" + varName);
            input.value = saved || "";
          }
          input.classList.remove('listening');
        });
      }

      if (type === 'color' && input.type === 'color') {
        const textInput = input.nextElementSibling;
        input.addEventListener('input', () => {
          const newHex = input.value;
          const currentVal = textInput.value.trim();
          const r = parseInt(newHex.slice(1, 3), 16);
          const g = parseInt(newHex.slice(3, 5), 16);
          const b = parseInt(newHex.slice(5, 7), 16);
          const rgbaMatch = currentVal.match(/rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*([0-9.]+)\s*\)/i);
          const tripletMatch = currentVal.match(/^\s*\d+\s*,\s*\d+\s*,\s*\d+\s*$/);

          if (rgbaMatch) {
            const alpha = rgbaMatch[1];
            textInput.value = `rgba(${r}, ${g}, ${b}, ${alpha})`;
          } else if (tripletMatch) {
            textInput.value = `${r}, ${g}, ${b}`;
          } else {
            textInput.value = newHex;
          }

          textInput.dispatchEvent(new Event('input'));
          textInput.dispatchEvent(new Event('change'));
        });
        return;
      }

      const handler = () => {
        let newVal;
        if (input.type === 'checkbox') {
          newVal = input.checked ? (type === 'switch-bool' ? 'true' : '1') : (type === 'switch-bool' ? 'false' : '0');
        }

        else if (type === 'slider') {
          const unit = input.getAttribute('data-unit') || '';
          newVal = input.value + unit;
          if (input.nextElementSibling) {
            input.nextElementSibling.textContent = newVal;
          }
        }

        else {
          newVal = input.value;
          if (input.previousElementSibling && input.previousElementSibling.type === 'color') {
            const rgbaMatch = newVal.match(/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i);
            if (rgbaMatch) {
              const r = parseInt(rgbaMatch[1]).toString(16).padStart(2, '0');
              const g = parseInt(rgbaMatch[2]).toString(16).padStart(2, '0');
              const b = parseInt(rgbaMatch[3]).toString(16).padStart(2, '0');
              input.previousElementSibling.value = `#${r}${g}${b}`;
            } else if (/^#[0-9A-F]{6}$/i.test(newVal)) {
              input.previousElementSibling.value = newVal;
            }
          }
        }

        document.documentElement.style.setProperty(varName, newVal);
        localStorage.setItem("senren_" + varName, newVal);
        triggerUpdates();
      };
      input.addEventListener('change', handler);
      if (input.type === 'text' || input.type === 'range' || input.tagName === 'TEXTAREA') {
        input.addEventListener('input', handler);
      }
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        window.senrenCloseSettings();
      }
    });
  }

  function generateControlHtml(item, rowStyle) {
    const computedRoot = getComputedStyle(document.documentElement);
    const cardEl = document.querySelector('.card');
    const computedCard = cardEl ? getComputedStyle(cardEl) : null;

    let currentVal = localStorage.getItem("senren_" + item.var);

    if (currentVal === null || currentVal === "null") {
      if (item.var === 'user-custom-css') {
        currentVal = getLiveCustomCss();
      } else {
        currentVal = computedRoot.getPropertyValue(item.var).trim();
        if ((!currentVal || currentVal === '' || currentVal === 'initial') && computedCard) {
          currentVal = computedCard.getPropertyValue(item.var).trim();
        }
      }

      if ((!currentVal || currentVal === '' || currentVal === 'initial') && activePreset && presetsCache[activePreset] && presetsCache[activePreset][item.var] !== undefined) {
        currentVal = presetsCache[activePreset][item.var];
      }
    }

    const clean = (s) => s ? s.toString().toLowerCase().replace(/['"\s]/g, '') : '';
    const resolve = (val) => {
      if (!val || typeof val !== 'string') return val;
      const match = val.match(/var\((--[^)]+)\)/);
      if (match) {
        let res = computedRoot.getPropertyValue(match[1]).trim();
        if ((!res || res === '') && computedCard) {
          res = computedCard.getPropertyValue(match[1]).trim();
        }
        return res || val;
      }
      return val;
    };

    let controlHtml = '';

    if (item.type === 'switch-bool' || item.type === 'switch-int') {
      const isChecked = (currentVal === 'true' || currentVal === '1');
      controlHtml = `
                <label class="senren-switch">
                    <input type="checkbox" data-var="${item.var}" data-type="${item.type}" ${isChecked ? 'checked' : ''}>
                    <span class="senren-slider"></span>
                </label>`;
    } else if (item.type === 'segment') {
      const curClean = clean(currentVal);
      const resolvedCur = clean(resolve(currentVal));

      let exactMatchIndex = item.options.findIndex(opt => clean(opt.val) === curClean);
      let resolvedMatchIndex = -1;

      if (exactMatchIndex === -1 && resolvedCur !== '') {
        resolvedMatchIndex = item.options.findIndex(opt => clean(resolve(opt.val)) === resolvedCur);
      }

      const buttons = item.options.map((opt, idx) => {
        const isActive = (exactMatchIndex !== -1) ? (idx === exactMatchIndex) : (idx === resolvedMatchIndex);

        return `
                <div class="senren-segment-btn ${isActive ? 'active' : ''}" 
                     onclick="window.updateSegment(this, '${item.var}', this.getAttribute('data-val'))"
                     data-val='${opt.val}'>
                     ${opt.label}
                </div>
            `}).join('');
      controlHtml = `<div class="senren-segment-group" data-var="${item.var}">${buttons}</div>`;
    } else if (item.type === 'color') {
      let safeColor = getSafeHexColor(currentVal);
      controlHtml = `
                <div class="senren-color-wrapper">
                    <input type="color" class="senren-color-picker" data-type="color" value="${safeColor}">
                    <input type="text" class="senren-input senren-color-text" data-var="${item.var}" data-type="${item.type}" value="${currentVal}">
                </div>`;

    } else if (item.type === 'keybind') {
      controlHtml = `<input type="text" class="senren-input senren-keybind" 
                data-var="${item.var}" 
                data-type="keybind" 
                data-pair="${item.isPair || false}"
                value="${currentVal}" 
                readonly 
                style="cursor: pointer; text-align: center; font-family: 'Segoe UI'; font-weight: bold;" 
                placeholder="Click to Set">`;

    } else if (item.type === 'slider') {
      let numericVal = parseFloat(currentVal);
      if (isNaN(numericVal)) numericVal = item.min || 0;

      const unit = item.unit || '';

      controlHtml = `
        <div class="senren-range-wrapper">
            <input type="range" class="senren-range" 
                   data-var="${item.var}" 
                   data-type="slider" 
                   data-unit="${unit}"
                   min="${item.min}" max="${item.max}" step="${item.step}" 
                   value="${numericVal}">
            <span class="senren-range-value">${numericVal}${unit}</span>
        </div>`;

    } else if (item.type === 'textarea') {
      controlHtml = `
        <textarea class="senren-input senren-textarea" 
                  data-var="${item.var}" 
                  data-type="textarea" 
                  spellcheck="false"
                  placeholder="Insert Custom CSS here...">${currentVal || ""}</textarea>`;

    } else {
      controlHtml = `<input type="text" class="senren-input" data-var="${item.var}" value="${currentVal}">`;
    }

    let className = (item.type === 'textarea' ? 'senren-row senren-row-full' : (rowStyle === 'standard' ? 'senren-row standard' : 'senren-row'));
    if (item.mobileHidden && window.IS_MOBILE) {
      className += ' senren-mobile-hidden';
    }

    return `
            <div class="${className}">
                <div class="senren-label-group">
                    <span class="senren-label-main">${item.label}</span>
                    ${item.desc ? `<span class="senren-label-desc">${item.desc}</span>` : ''}
                </div>
                ${controlHtml}
            </div>`;
  }

  // GLOBAL EVENT HANDLERS
  // =========================================================================
  window.switchTab = function (navItem, panelId) {
    document.querySelectorAll('.senren-nav-item').forEach(el => el.classList.remove('active'));
    navItem.classList.add('active');
    document.querySelectorAll('.senren-panel').forEach(el => el.classList.remove('active'));
    const panel = document.getElementById(panelId);
    panel.classList.add('active');

    if (panel.getAttribute('data-group') === 'Deck Links') {
      renderDeckLinksUI();
    }
  };

  window.updateSegment = function (btn, varName, val) {
    const group = btn.parentElement;
    group.querySelectorAll('.senren-segment-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.documentElement.style.setProperty(varName, val);
    localStorage.setItem("senren_" + varName, val);
    triggerUpdates();
  };

  window.senrenReset = async function () {
    const statusBtn = document.querySelector('.senren-footer-right button:first-child');
    const origText = statusBtn.innerText;
    statusBtn.innerText = "Restoring...";
    statusBtn.disabled = true;

    try {
      const response = await fetch('_senren_defaults_v5.1.0.css');
      if (!response.ok) throw new Error("File '_senren_defaults_v5.1.0.css' not found in media folder.");
      const defaultsCss = await response.text();

      const cardInfo = await invokeAnkiConnect('guiCurrentCard');
      if (!cardInfo) throw new Error("Current card not found.");
      const modelName = cardInfo.modelName;

      const styleInfo = await invokeAnkiConnect('modelStyling', { modelName: modelName });
      let modifiedCss = styleInfo.css;

      const items = Object.values(groups).flatMap(g => Array.isArray(g) ? g : g.items);
      let changesCount = 0;
      const clean = (s) => s ? s.toString().toLowerCase().replace(/['"\s]/g, '') : '';

      items.forEach(item => {
        if (item.type === 'header' || item.type === 'sub-header') return;

        // Custom CSS Handling
        if (item.type === 'textarea') {
          const blockRegex = /\/\* CUSTOM CSS START \*\/[\s\S]*?\/\* CUSTOM CSS END \*\//g;
          if (blockRegex.test(modifiedCss)) {
            modifiedCss = modifiedCss.replace(blockRegex, "/* CUSTOM CSS START */\n/* CUSTOM CSS END */");
            changesCount++;
          }
          return;
        }

        const safeVar = item.var.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        const defaultRegex = new RegExp(`${safeVar}\\s*:\\s*([^;\\r\\n]+)`, 'i');
        const match = defaultsCss.match(defaultRegex);

        if (match) {
          const defaultValue = match[1].trim();

          const replaceRegex = new RegExp(`(${safeVar}\\s*:\\s*)([^;\\r\\n]+)(;)([ \\t]*)(\\/\\*.*)?`, 'g');
          if (replaceRegex.test(modifiedCss)) {
            modifiedCss = modifiedCss.replace(replaceRegex, (m, prefix, oldVal, semi, padding, comment) => {
              if (clean(oldVal) !== clean(defaultValue)) {
                changesCount++;
              }

              if (!comment) return `${prefix}${defaultValue}${semi}${padding}`;

              const diff = defaultValue.length - oldVal.length;
              let newPadding = padding;

              if (diff > 0) {
                if (padding.length >= diff) newPadding = padding.substring(diff);
                else newPadding = "";
              } else if (diff < 0) {
                newPadding = padding + " ".repeat(Math.abs(diff));
              }

              return `${prefix}${defaultValue}${semi}${newPadding}${comment}`;
            });
          }
        }
      });

      if (changesCount > 0) {
        await invokeAnkiConnect('updateModelStyling', {
          model: { name: modelName, css: modifiedCss }
        });
      }

      items.forEach(item => {
        if (item.type === 'header' || item.type === 'sub-header') return;

        // Custom CSS UI Reset
        if (item.type === 'textarea') {
          localStorage.removeItem("senren_" + item.var);
          const input = document.querySelector(`[data-var="${item.var}"]`);
          if (input) {
            input.value = "";
            input.dispatchEvent(new Event('input'));
          }
          return;
        }

        const safeVar = item.var.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        const defaultRegex = new RegExp(`${safeVar}\\s*:\\s*([^;\\r\\n]+)`, 'i');
        const match = defaultsCss.match(defaultRegex);

        if (match) {
          const defaultValue = match[1].trim();

          localStorage.setItem("senren_" + item.var, defaultValue);

          document.documentElement.style.setProperty(item.var, defaultValue);

          if (item.type === 'segment') {
            const btns = document.querySelectorAll(`.senren-segment-btn[onclick*="${item.var}"]`);
            const btnsArray = Array.from(btns);
            let foundExact = false;

            // Check for exact match
            btnsArray.forEach(btn => {
              const btnVal = btn.getAttribute('data-val');
              if (clean(btnVal) === clean(defaultValue)) {
                btn.classList.add('active');
                foundExact = true;
              } else {
                btn.classList.remove('active');
              }
            });

            // Fallback to resolved match if no exact match found
            if (!foundExact) {
              const resolveVal = (v) => {
                if (!v) return v;
                if (v.startsWith('var(')) {
                  const dummy = document.createElement('div');
                  dummy.style.setProperty('display', 'none');
                  dummy.style.setProperty('width', v);
                  document.body.appendChild(dummy);
                  const computed = getComputedStyle(dummy).width;
                  document.body.removeChild(dummy);
                  return computed;
                }
                return v;
              };

              const resolvedDefault = resolveVal(defaultValue);
              let foundResolved = false;

              btnsArray.forEach(btn => {
                const btnVal = btn.getAttribute('data-val');
                const resolvedBtn = resolveVal(btnVal);
                if (!foundResolved && resolvedBtn && resolvedBtn === resolvedDefault) {
                  btn.classList.add('active');
                  foundResolved = true;
                } else {
                  btn.classList.remove('active');
                }
              });
            }
          } else {
            const input = document.querySelector(`[data-var="${item.var}"]`);
            if (input) {
              if (item.type === 'switch-bool' || item.type === 'switch-int') {
                input.checked = (defaultValue === 'true' || defaultValue === '1');
              } else if (item.type === 'color') {
                input.value = defaultValue;
                if (input.previousElementSibling && input.previousElementSibling.type === 'color') {
                  input.previousElementSibling.value = getSafeHexColor(defaultValue);
                }
              } else {
                if (item.type === 'slider') {
                  input.value = parseFloat(defaultValue) || 0;
                } else {
                  input.value = defaultValue;
                }
                input.dispatchEvent(new Event('input'));
              }
            }
          }
        }
      });

      triggerUpdates();
      statusBtn.innerText = "Reset Complete!";
      statusBtn.style.background = "#d9534f";
      statusBtn.style.borderColor = "#d9534f";
      statusBtn.style.color = "white";

      setTimeout(() => {
        statusBtn.innerText = origText;
        statusBtn.disabled = false;
        statusBtn.style.background = "";
        statusBtn.style.borderColor = "";
        statusBtn.style.color = "";
      }, 2000);

    } catch (e) {
      console.error(e);
      alert("Error: " + e.message);
      statusBtn.innerText = "Failed";
      statusBtn.disabled = false;
      setTimeout(() => statusBtn.innerText = origText, 2000);
    }
  };

  window.senrenBuildMenu = buildMenu;

  window.senrenToggleDock = function () {
    const modal = document.getElementById('senren-settings-modal');
    const body = document.body;
    modal.classList.toggle('docked');
    body.classList.toggle('senren-docked-mode');

    updateBackdropState();
  };

  window.senrenCloseSettings = function () {
    const modal = document.getElementById('senren-settings-modal');

    if (modal) {
      modal.classList.remove('active');
      modal.classList.remove('docked');

      document.body.classList.remove('senren-docked-mode');

      if (typeof updateBackdropState === 'function') {
        updateBackdropState();
      }

      document.body.style.display = 'none';
      void document.body.offsetHeight;
      document.body.style.display = '';

      if (typeof window.triggerUpdates === 'function') {
        window.triggerUpdates();
      }
    }
  };
  async function init() {
    await loadPresetsFromFile();
    await loadDeckLinksFromFile();

    const presets = presetsCache;
    let savedActive = presets["_active"];
    if (!activePreset) {
      if (savedActive && presets[savedActive]) activePreset = savedActive;
      else {
        const names = Object.keys(presets).filter(n => n !== "_active").sort();
        if (names.includes("Default")) activePreset = "Default";
        else if (names.length > 0) activePreset = names[0];
      }
    }

    buildMenu();
  }

  init();
})();

