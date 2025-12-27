# Preference Settings

A menu that allows you to customize the note type directly inside the reviewer, no CSS knowledge required!

![type:video](assets/preferences_preview.mp4)

### How it Works

**1. Real-Time Preview**
All adjustments made in the Preferences menu are applied instantly to the current card. You can modify font sizes, colors, spacing, layout options, and more, and see the results immediately, just as you would in the editor. (The preview doesn't reflect 100% of the available options, some have limitations that cause them to update correctly only after you close the modal.)

**2. Saving Your Changes**
There are two kinds of changes:
*   **Temporary:** 
Settings are stored locally during your session. They remain active as long as you continue reviewing.
*   **Permanent:** 
To apply your changes permanently, click **"Save to Anki"**.
    *  This immediately writes the updated values to the card model.
    *  After saving, temporary storage is cleared to ensure that future manual edits to your card CSS in Anki’s editor are not overridden by outdated settings.
    
Some previous options may persist after you save and close the Preferences, so it is recommended to leave and re-enter the deck reviewer.
 
###  Preset System
*  Presets are stored in a dedicated file: (`_senren_presets.json`) located in your Anki `collection.media` folder.
*  The presets file is user-managed. Updating the card template in future versions will not overwrite your presets. They remain untouched unless you explicitly create, rename, or delete a preset via the settings menu.
*  Because the presets file is stored in the media folder, presets sync across devices. (They can only be edited on PC.)

!!! note "Requirements"
    As with Kanji Hover, the **AnkiConnect** add-on is required for the  **"Save to Anki"** functionality and for saving presets.
    On mobile, the settings menu still works, but any changes are temporary and only persist for the current session.

To avoid errors on Mobile devices, reviewing at least one card on PC with **AnkiConnect** enabled is required. This allows the `_senren_presets.json` file to generate correctly.
If access to a PC with AnkiConnect is not possible, the file can be manually downloaded [here](https://github.com/BrenoAqua/Senren/blob/main/Template/Presets%20File/_senren_presets.json).

!!! WARNING
> **Do not download this file if you already have it.**
> Overwriting it will **delete your saved presets**. Only download this file if errors are occurring on AnkiMobile or AnkiDroid specifically because this file is missing.
