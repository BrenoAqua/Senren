# Kanji Hover

Hover over any kanji within a word to display up to five other words in your collection that use the same kanji. If more matching cards exist, a “**Show More**” option appears. Clicking a related word in the tooltip opens the corresponding card in Anki’s Card Browser.

=== "With Pitch Colors"
     ![With Pitch Colors](assets/images/kanji_hover_pitch_preview.gif){ width="400" }

=== "Without Pitch Colors"
    ![Without Pitch Colors](assets/images/kanji_hover_no_pitch_preview.gif){ width="400" }

* Unreviewed cards appear greyed out.

  ![Kanji Hover Unreviewed Preview](assets/images/kanji_hover_unreviewed_preview.png)

### Customization

You can control how the kanji, pitch downstep, and related words are highlighted inside the tooltip via the variables in the `/* PITCH ACCENT SETTINGS */` section of the CSS:
```css
--kanji-hover-pitch-colors:    true; /* "false" to disable pitch downstep coloring in Kanji Hover */
--kanji-hover-pitch-highlight: true; /* "false" to make pitch colors stop overwriting word + sentence highlights in Kanji Hover */
```

Both options are enabled by default. To completely disable pitch coloring, set both variables to `false`.

!!! note "PC Only"
    This feature currently only works on the desktop version of Anki.
