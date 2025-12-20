# Preference Settings

A menu that allows you to customize the note type directly inside the reviewer, no CSS knowledge required!

![type:video]([https://github.com/user-attachments/assets/c833977b-381d-4722-bc7b-7c84984c6775])

### How it Works

**1. Real-Time Preview**
All adjustments made in the settings menu are applied instantly to the current card. You can modify font sizes, colors, spacing, layout options, and more, and see the results immediately, just as you would in the editor.

**2. Saving Your Changes**
There are two kinds of changes:
*   **Temporary:** 
Settings are stored locally during your session. They remain active as long as you continue reviewing
*   **Permanent:** 
To apply your changes permanently, click **"Save to Anki"**.
    *  This immediately writes the updated values to the card model.
    *  After saving, temporary storage is cleared to ensure that future manual edits to your card CSS in Anki’s editor are not overridden by outdated settings.

###  Preset System
*  Presets are stored in a dedicated file: (`_senren_presets.json`) located in your Anki `collection.media` folder.
*  The presets file is user-managed. Updating the card template in future versions will not overwrite your presets. They remain untouched unless you explicitly create, rename, or delete a preset via the settings menu.
*  Because the presets file is stored in the media folder, presets sync across devices. (They can only be edited on PC.)

!!! note "Requirements"
    As with Kanji Hover, the **AnkiConnect** add-on is required for the  **"Save to Anki"** functionality and for saving presets.
    On mobile, the settings menu still works, but any changes are temporary and only persist for the current session.
