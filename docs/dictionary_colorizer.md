# Dictionary Colorizer
Automatically applies a unique color to each dictionary entry, making it easier to identify the source of a definition at a glance. Colors are applied to borders, titles, counters, and links.

=== "Dictionary Colorizer"
    ![type:video](assets/dictionary_colorizer_1.mp4) }

=== "Dictionary Colorizer with Full Card Background"
    ![type:video](assets/dictionary_colorizer_2.mp4) }

**How to Use:**

You can customize this feature by editing the **Styling** in your Anki card template. Look for the `/* DICTIONARY & GLOSSARY STYLING */` section.

1.  **Enable the Colorizer**  
    Find `--dictionary-colorizer`. Set it to `1` to turn the feature on.
    ```css
    --dictionary-colorizer: 1;
    ```

2.  **Backgrounds**  
    Find `--dict-bg-enabled`.
    *   Set to `1`: Gives the dictionary definition box a subtle background tint (Default).
    *   Set to `0`: Keeps the background neutral.
    ```css
    --dict-bg-enabled: 1;
    ```

3.  **Full Card Background**  
    Find `--dict-back-bg`.
    *   Set ar `1`: The dictionary color will fill the **entire card background**.
    *   Set to `0`: Keeps the main card background neutral.
    ```css
    --dict-back-bg: 1;
    ```

!!! tip "Customize Your Colors"
    Don't like the default colors? You can change them!
    Scroll down to the `/* Dict Colors */` section in the CSS. You can change the HEX codes for both Light and Dark modes for any specific dictionary.
