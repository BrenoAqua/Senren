# Dictionary Preference & Definition Toggle
This controls which definition pops up first when you reveal the answer, and how you flip through different dictionaries.

*   **Priority Logic:** The card decides what to show based on the following priority order:
    1.  **Selection Text:** If you highlighted text while creating the card (using Yomitan), that shows up first.                                            
    2.  **Memory:** The card remembers if you last looked at "Definition", "Glossary", "Selection Text" or any specific glossary dictionary via `localStorage`, and keeps it until Anki is closed.
    3.  **Specific Dictionary Name:** If you set a preference in the `dictionaryPreference` field (e.g., "新選国語辞典　第十版"), the card attempts to open that specific dictionary within the glossary first.
    4.  **Generic Preference:** If the preference is set to simply "glossary", it opens the first available dictionary in the glossary list.
    5.  **Main Definition:** If none of the conditions above are met, it defaults to showing the single dictionary chosen for the definition.
    
*   **Navigation:**
    *   **Click Zones:** The left and right edges of the screen are clickable. Clicking **Right** cycles forward; Clicking **Left** cycles backward.
    *   **Cycle Order:** Selection Text ↔ Definition ↔ Glossary 1 ↔ Glossary Dictionary 1... Glossary Dictionary 2...
    *   **Keyboard Shortcuts:** Left Arrow and Right Arrow keys perform the same toggling action.
    *   **Counter:** After you cycle at least once, a small indicator (e.g., `1 / 4`) appears in the top right, showing the current and total dictionaries.

    === "Definition Toggle"
        ![type:video](assets/definition_toggle_preview.mp4) }

    === "Dictionary Preference"
        ![type:video](assets/dictionary_preference_preview.mp4) }

Use the [Batch Editing](https://ankiweb.net/shared/info/291119185) add-on to update multiple cards at once.
