# Collect Glossary Images

Displays images from glossary dictionaries in the picture container. You can use the left and right buttons on the image to browse through them without needing to search the dictionaries directly. If the card has no image but a glossary dictionary does, that image will be shown automatically in the picture container.

=== "Enabled"
    ![light](assets/images/collect_glossary_images_enabled.png)

=== "Disabled"
    ![dark](assets/images/collect_glossary_images_disabled.png)

This feature may cause issues with dictionaries that require additional CSS in Anki. If you run into problems, it’s recommended to disable it via the variables in the `/* Default States (true/false) */` section of the CSS:
```css
--collect-glossary-images: true; /* Enable glossary images to be collected into the picture container */
```

It’s enabled by default. Change to `false` to disable.
