# Setting Up mpvacious

Use mpvacious to create cards directly from the [mpv media player](https://mpv.io/).

1.  Ensure you have [mpvacious](https://github.com/Ajatt-Tools/mpvacious) installed correctly for mpv.
2.  Download the Senren configuration file: [subs2srs.conf](https://raw.githubusercontent.com/BrenoAqua/Senren/main/resources/subs2srs.conf) (Right-click -> Save Link As...)
3.  Place the `subs2srs.conf` file in mpv's `script-opts` directory.
    *   Default AppData: `%AppData%\mpv\script-opts\`
    *   Create the script-opts folder if it doesn't exist.
4. Download the custom [subs2srs.lua](https://github.com/BrenoAqua/Senren/blob/main/resources/subs2srs.lua) (Right-click -> Save Link As...)
5. Place the `subs2srs.lua` file in `%AppData%\mpv\scripts\subs2srs\` and select "replace the file in destination" when asked.

This configuration maps mpvacious fields to the Senren note type fields.
