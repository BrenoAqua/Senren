# Setting Up Yomipv

Use Yomipv to create cards without leaving MPV or breaking immersion.

![type:video](assets/yomipv_demo.mp4)

## Requirements

- **[MPV](https://mpv.io/)** (0.33.0 or higher)
- **[FFmpeg](https://ffmpeg.org/)** (Required for media extraction, falls back to MPV's internal encoder if not found)
- **[Anki](https://apps.ankiweb.net/)** with **[AnkiConnect](https://ankiweb.net/shared/info/2055492159)**
- **[Yomitan](https://yomitan.wiki/)** and **[Yomitan Api](https://github.com/yomidevs/yomitan-api)**
- **curl** (Pre-installed on most systems, used for API requests)
- **[Node.js](https://nodejs.org/)** (Only required if installing from source or contributing)

## Installation

### Recommended
1. Download the [Latest version for your OS](https://github.com/BrenoAqua/Yomipv/releases/latest)
2. Extract the contents directly into your MPV directory:
    - Windows: `%APPDATA%/mpv/`
    - Linux/macOS: `~/.config/mpv/`

### Alternative (Requires Node.js)
1. **Clone the repository** to your MPV directory and install dependencies **(make sure you have Node.js installed)**:
   - Windows: `%APPDATA%/mpv/`
     ```
     git clone https://github.com/BrenoAqua/Yomipv && xcopy /e /i /y Yomipv . && rd /s /q Yomipv && cd scripts\yomipv\lookup-app && npm install
     ```
   
   - Linux/macOS: `~/.config/mpv/`
     ```
     git clone https://github.com/BrenoAqua/Yomipv && cp -rn Yomipv/* . && rm -rf Yomipv && cd scripts/yomipv/lookup-app && npm install
     ```

## Usage

**Configure Settings**:
   - Open `script-opts/yomipv.conf` and update your Anki deck/note type names and field mappings

**External Services**:
   - Ensure Anki is running with AnkiConnect enabled
   - Ensure Yomitan Api is running and the browser where the Yomitan extension is installed is open, and you have dictionaries installed

### Basic Workflow

1. Open a video with Japanese subtitles in MPV
2. Press **`c`** or **move your mouse after an idle period** (if `selector_trigger_on_mouse_move` is enabled) to activate the word selector
3. Navigate with **mouse hover** or **arrow keys** to select a word
4. Press **`Enter`**, **`c`**, or **left-click** to create an Anki card

### Advanced Features

- **Append Mode (`Shift+C`)**: Select multiple subtitle lines before exporting
  - Press `Shift+C` to enter append mode, `c` to start the word selector, or `Shift+C` again to cancel

- **Subtitle Substitution & Colorization (`S`)**: 
  - Press **`S`** to toggle between native MPV subtitles and Yomipv's colorized tokens
  - Enable `substitute_mpv_subtitles` in `yomipv.conf` to start with it enabled
  - Words are colorized based on their Anki card metadata:
    - **Status**: New, Learning, Review, Suspended
    - **Intervals**: Reflects how well a word is known (affects color shades)
    - **Requirement**: Press **`B`** to build/sync the local Anki database first before these statuses can be displayed for your existing collection
  - **Instant Feedback**: When you create a card, the word is immediately added to the local database and highlighted (red) in the current subtitle

- **Secondary Subtitle**:
  - Automatically select secondary subtitles based on preferred languages
  - Configure `secondary_sub_lang` in `yomipv.conf`

- **Mora-level Navigation**:
  - When `selector_mora_hover` is enabled, hovering over a word narrows the lookup to start from mora under your cursor instead of the full word
  - **`s`**: Toggle mora-level keyboard navigation (left/right moves by mora instead of word)

- **Lookup App (`Ctrl+c`)**: Opens a popup window powered by your Yomitan dictionaries, showing definitions, pitch accents, and frequencies
  - **Right-click** on the word in the selector to lock the lookup
  - **Click any mora** in the header to narrow the lookup to a sub-word
  - **Right-click the header** to go back to the previous word
  - **Pitch Accents**: Toggle `lookup_show_pitch_accents` in `yomipv.conf`
  - **Frequencies**: Toggle `lookup_show_frequencies` in `yomipv.conf`
  - See [docs/lookup-app.md](docs/lookup-app.md) for full details

- **Persistent Mode (`v`)**: 
  - Toggle persistent mode to export multiple words from a single subtitle selection without closing the selector
  - Press **`v`** to toggle; the selection color changes to indicate it's active
  - Confirming a selection exports the card but keeps the selector open for the next pick

- **Auto-Trigger Selector (`z`)**:
  - Automatically open the selector by moving the mouse after it has been idle.
  - Enable `selector_trigger_on_mouse_move` and customize `selector_trigger_mouse_idle_time` in `yomipv.conf`

- **Manual Timing**:
  - **`q`** / **`w`**: Set a custom start/end time for audio and picture extraction
  - Unset start or end times default to the subtitle boundaries when opening the selector
  - **`e`**: Clear manual timings

- **History Panel (`a`)**: Toggle subtitle history panel
  - Click on previous/next lines to expand the subtitle lines (when selector is open)
  - Seek to a specific subtitle's timestamp by clicking on it (when selector is closed)
  - **`Alt+LEFT`** / **`Alt+RIGHT`**: Seek to the previous/next subtitle

- **AniList Tracking (`Ctrl+A`)**: Integrates AniList with Yomipv, enabling automatic episode progress updates.
  - See [docs/anilist_tracking.md](docs/anilist_tracking.md) for setup and full details.

- **Auto-Updater (`U`)**: Keeps Yomipv updated to the latest version
  - Press **`U`** in MPV to trigger the update, or:
    - On Windows: Run **`yomipv-updater.bat`** directly
    - On Linux / macOS: Run **`yomipv-updater.sh`** directly
  - Choose between latest official releases or latest source (main branch)
  - Automatically preserves user configuration in `script-opts/yomipv.conf`
  - Downloads platform-specific binaries for the Lookup App
  - (Source mode only) Updates dependencies for the Lookup App (requires Node.js)
  - Requires administrator privileges to run the PowerShell script on Windows

## Troubleshooting

### Windows
- Ensure PowerShell execution policy allows scripts
- Check that curl is available at `C:\Windows\System32\curl.exe`

### Linux
- Ensure `curl`, `unzip`, `grep`, and `sed` are installed
- Ensure the updater script has execute permissions: `chmod +x yomipv-updater.sh`
- For the lookup app, ensure the binary in `scripts/yomipv/` has execution permissions

### macOS
- Ensure `curl`, `unzip`, `grep`, and `sed` are installed
- Ensure the updater script has execute permissions: `chmod +x yomipv-updater.sh`
- If macOS blocks the Lookup App with a Gatekeeper warning, run: `xattr -cr scripts/yomipv/YomipvLookup.app`
- MPV config directory: `~/.config/mpv/` (create it if it does not exist)
