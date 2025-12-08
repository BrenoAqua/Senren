# NSFW Cards

Add the `NSFW` tag to any card, and its associated image will be automatically blurred on display. Clicking the image reveals it.

![Image Blurring](assets/images/Image_Blurring.gif)

Additionally, cards tagged as `NSFW` can have their sentence audio muted initially (you can still play it using the replay button or the shortcut).
> Disabled by default.

These options can be configured via the variables in the `/* Default States (true/false) */` section of the CSS:
```css
--blur-nsfw-picture: true;  /* Blur picture on NSFW cards */
--mute-nsfw-audio:   false; /* Mute sentence audio on NSFW cards */
```

Set each option to `true` to enable it or `false` to disable it.
