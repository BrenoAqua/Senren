## Setting Up ShareX

1. Download [ShareX](https://getsharex.com/).
2. Import the [Senren-ShareX-settings](https://github.com/BrenoAqua/Senren/blob/main/ShareX/Senren-ShareX-Settings.sxb):
   - Go to **ShareX** > **Application Settings** > **Settings** > **Import** > select **Senren-ShareX-settings**.
3. Update the paths for the Hotkeys:
   - Go to **ShareX** > **Hotkey Settings** > **Screenshot** / **Screenshot-NSFW** / **Audio** > **Edit**.
   - Mark **Override screenshots folder** and change the path to:  
     `C:\Users\Administrator\AppData\Roaming\Anki2\YourAnkiProfileName\collection.media`.

## Audio Settings

If you want ShareX to record audio, follow these steps:

1. Go to **Hotkey Settings** > **Audio** > **Edit** > **Screen Recorder** > **Screen Recorder Options**.
2. Click on **Install Recorder Devices**.
3. Set the following:
   - **Video Source**: `None`
   - **Audio Source**: `Virtual-Audio-Capturer`

## ShareX Hotkeys

### Important: Remember to use the Hotkeys **AFTER** creating the card.
- **Alt + C**: Takes a screenshot, saves it to your Anki media folder, and adds it to your last created card.
- **Alt + N**: Takes a screenshot, saves it to your Anki media folder, adds it to your last created card, and adds the NSFW tag.
- **Alt + V**: Records audio, saves it to your Anki media folder, and adds it to your last created card.
- **PrtSc**: Takes a normal screenshot, saves it to your ShareX Screenshot Folder, and copies it to the clipboard.



