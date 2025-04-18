# Setting Up ShareX

Use ShareX to quickly capture screenshots and audio snippets for your Anki cards.

1.  Download and install [ShareX](https://getsharex.com/).
2.  Download the Senren ShareX settings file: [Senren-ShareX-Settings.sxb](https://raw.githubusercontent.com/BrenoAqua/Senren/main/ShareX/Senren-ShareX-Settings.sxb) (Right-click -> Save Link As...)
3.  Import the settings: In ShareX -> Application Settings -> Settings (Tab) -> Import -> select the downloaded `.sxb` file.
4.  **Update Hotkey Paths:** You MUST update the save paths to point to *your* Anki media folder.
    *   Go to ShareX -> Hotkey settings...
    *   For each of the **Screenshot**, **Screenshot-NSFW**, and **Audio** hotkeys:
        *   Click the task to highlight it, then click **Edit**.
        *   Under "Actions", select the "Save image to file" (for screenshots) or "Save file" (for audio) action.
        *   Check **Override screenshots folder**.
        *   Change the path to *your* profile's `collection.media` folder (e.g., `C:\Users\Administrator\AppData\Roaming\Anki2\YourAnkiProfileName\collection.media`).
        *   Click **Ok**.

## Audio Recording Settings

To enable audio recording:

1.  In ShareX -> Hotkey settings... -> Edit the **Audio** hotkey.
2.  Under "Actions", select the "Start/Stop screen recording using active window region".
3.  Click **Screen recording options...**.
4.  Click **Install recorder devices** (if you haven't already). Wait for installation.
5.  Set **Video source** to `none`.
6.  Set **Audio source** to `virtual-audio-capturer` (or your desired system audio capture device).
7.  Click the `X` to close the options window. Click **Ok** on the hotkey task window.

## Default Hotkeys

*   `Alt + C`: Take screenshot -> Save to Anki media -> Add `<img>` tag to last card's `picture` field.
*   `Alt + N`: Take screenshot -> Save to Anki media -> Add `<img>` tag to last card's `picture` field -> Add `NSFW` tag to last card.
*   `Alt + V`: Record audio -> Save to Anki media -> Add `[sound:]` tag to last card's `sentenceAudio` field.
*   `PrtSc`: Standard screenshot -> Save to default ShareX folder -> Copy image to clipboard.

!!! warning "Usage Order"
    Use these hotkeys **AFTER** creating the card in Anki. ShareX targets the *last modified* card.
