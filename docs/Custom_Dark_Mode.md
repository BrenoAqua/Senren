# Custom Dark Mode

Easily toggle between the default theme (light or original dark mode) and a high-contrast dark mode with a pure black background using a dedicated button.

![Custom Dark Mode](assets/custom_dark_mode.gif)

*   **Default Shortcut:** 
    * **S**: Toggle custom dark mode 

    You can change this in the `/* CUSTOM SHORTCUTS */` section of the CSS:

    ```css
    --toggle-custom-dark-mode-key: s; /* Set the key to toggle custom dark mode */
    ```

*   **Visibility**
    You can hide the custom dark mode toggle in the `/* Component Visibility */` section of the CSS:
    ```css
    --custom-dark-mode-visibility: 1; /* "0" to hide custom dark mode toggle */
    ```

    Set this value to `0` to remove it entirely.
