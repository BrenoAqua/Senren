# Overview

This guide covers setting up Yomitan and Anki to work optimally with the Senren note type.

## First-time Installation
1.  Download the [Latest Version](https://github.com/BrenoAqua/Senren/releases/latest).
2.  Open Anki.
3.  Click on **File -> Import** (or press **Ctrl + Shift + I**) and select the `.apkg` file you downloaded.

!!! warning "Updates"
    If you're updating from a previous version, make sure to enable the Merge note types option during import.

## Updating Without Downloading the APKG
1. Go to **Browse** in Anki.
2. Select the **Senren** Note Type.
3. Click on **Cards**.
4. Replace the contents of the **Front Template**, **Back Template**, and **Styling** sections with the provided files:
    - [`front.html`](https://github.com/BrenoAqua/Senren/raw/refs/heads/main/Template/front.html)
    - [`back.html`](https://github.com/BrenoAqua/Senren/raw/refs/heads/main/Template/back.html)
    - [`styling.css`](https://github.com/BrenoAqua/Senren/raw/refs/heads/main/Template/styling.css)
5. **Save** after making the changes.

