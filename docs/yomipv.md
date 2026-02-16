# Setting Up Yomipv

Use Yomipv to create cards without leaving mpv and losing immersion.

![type:video](assets/yomipv_demo.mp4)

1. **Clone the repository** to your MPV directory and install dependencies:
   - Windows: `%APPDATA%/mpv/`
     ```
     git clone https://github.com/BrenoAqua/Yomipv && xcopy /e /i /y Yomipv . && rd /s /q Yomipv && cd scripts\yomipv\lookup-app && npm install
     ```
   
   - Linux: `~/.config/mpv/`
     ```
     git clone https://github.com/BrenoAqua/Yomipv && cp -rn Yomipv/* . && rm -rf Yomipv && cd scripts/yomipv/lookup-app && npm install
     ```
3. **Configure Settings**:
   - Open `script-opts/yomipv.conf` and update your Anki deck/note type names and field mappings.

4. **External Services**:
   - Ensure Anki is running with AnkiConnect enabled.
   - Ensure Yomitan Api is running and the browser where the Yomitan extension is installed is open, and you have dictionaries installed.

## Requirements

- **[MPV](https://mpv.io/)** (0.33.0 or higher)
- **[FFmpeg](https://ffmpeg.org/)** (Required for media extraction, but fallbacks to mpv's internal encoder if not found)
- **[Anki](https://apps.ankiweb.net/)** with **[AnkiConnect](https://ankiweb.net/shared/info/2055492159)**
- **[Yomitan](https://yomitan.wiki/)** and **[Yomitan Api](https://github.com/yomidevs/yomitan-api)**
- **[Node.js](https://nodejs.org/)** (Required for the lookup app)
- **curl** (Usually pre-installed on Windows, used for API requests)

## Usage

### Basic Workflow

1. Open a video with Japanese subtitles in MPV.
2. Press **`c`** to activate the word selector.
3. Navigate with **arrow keys** or **mouse hover** to select a word.
4. Press **`Enter`**, **`c`**, or **left-click** to create an Anki card.

### Advanced Features

- **Append Mode (`Shift+C`)**: Select multiple subtitle lines before exporting.
  - Press `Shift+C` to enter append mode, `c` to start the word selector, or `Shift+C` again to cancel.

- **Selection Expansion**:
  - **`Ctrl+Left`** / **`Ctrl+Right`**: Expand selection to adjacent words.
  - **`Shift+Left`** / **`Shift+Right`**: Expand to previous/next subtitle line.

- **Word Splitting (`s` or right-click)**: Split compound words into smaller segments.

- **Dictionary Lookup (`Ctrl+c`)**: Open real-time dictionary definitions window that uses your yomitan glossary.

- **History Panel (`a`)**: Toggle subtitle history panel
  - Click on previous/next lines to select them to expand the subtitle lines (when selector is open) or seek to that timestamp (when selector is closed).

There are demos for all features [here](https://github.com/BrenoAqua/Yomipv/tree/main/features).
