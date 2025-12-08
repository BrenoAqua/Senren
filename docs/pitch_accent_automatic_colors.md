# Automatic Colors for Pitch Accent

The pitch accent markers (lines and number) are automatically colored according to the pitch accent pattern type.

| Pattern  |  Word   | Reading |  Drop Position  |
|: ------- |: ---- :|: ----- :|:-------------- :|
| heiban (平板) |  承認  | <span style="display:inline;"><span style="display:inline-block;position:relative;"><span style="display:inline;">し</span><span style="display:inline;">ょ</span><span style="border-color:currentColor;"></span></span><span style="display:inline-block;position:relative;"><span style="display:inline;">う</span><span style="border-color:currentColor;display:block;user-select:none;pointer-events:none;position:absolute;top:0.1em;left:0;right:0;height:0;border-top-width:0.1em;border-top-style:solid;"></span></span><span style="display:inline-block;position:relative;"><span style="display:inline;">に</span><span style="border-color:currentColor;display:block;user-select:none;pointer-events:none;position:absolute;top:0.1em;left:0;right:0;height:0;border-top-width:0.1em;border-top-style:solid;"></span></span><span style="display:inline-block;position:relative;"><span style="display:inline;">ん</span><span style="border-color:currentColor;display:block;user-select:none;pointer-events:none;position:absolute;top:0.1em;left:0;right:0;height:0;border-top-width:0.1em;border-top-style:solid;"><br></span></span></span> {.heiban}    |  0 {.t-heiban} |
| atamadaka (頭高) |  運命  | <span style="display:inline;"><span style="display:inline-block;position:relative;padding-right:0.1em;margin-right:0.1em;"><span style="display:inline;">う</span><span style="border-color:currentColor;display:block;user-select:none;pointer-events:none;position:absolute;top:0.1em;left:0;right:0;height:0;border-top-width:0.1em;border-top-style:solid;right:-0.1em;height:0.4em;border-right-width:0.1em;border-right-style:solid;"></span></span><span style="display:inline-block;position:relative;"><span style="display:inline;">ん</span><span style="border-color:currentColor;"></span></span><span style="display:inline-block;position:relative;"><span style="display:inline;">め</span><span style="border-color:currentColor;"></span></span><span style="display:inline-block;position:relative;"><span style="display:inline;">い</span></span></span> {.atamadaka}   |  1 {.t-atamadaka}  |
| nakadaka (中高)  |  喜んで  | <span style="display:inline;"><span style="display:inline-block;position:relative;"><span style="display:inline;">よ</span><span style="border-color:currentColor;"></span></span><span style="display:inline-block;position:relative;"><span style="display:inline;">ろ</span><span style="border-color:currentColor;display:block;user-select:none;pointer-events:none;position:absolute;top:0.1em;left:0;right:0;height:0;border-top-width:0.1em;border-top-style:solid;"></span></span><span style="display:inline-block;position:relative;padding-right:0.1em;margin-right:0.1em;"><span style="display:inline;">こ</span><span style="border-color:currentColor;display:block;user-select:none;pointer-events:none;position:absolute;top:0.1em;left:0;right:0;height:0;border-top-width:0.1em;border-top-style:solid;right:-0.1em;height:0.4em;border-right-width:0.1em;border-right-style:solid;"></span></span><span style="display:inline-block;position:relative;"><span style="display:inline;">ん</span><span style="border-color:currentColor;"></span></span><span style="display:inline-block;position:relative;"><span style="display:inline;">で</span><span style="border-color:currentColor;"></span></span></span> {.nakadaka}  | 3 {.t-nakadaka} |
| odaka (尾高)  |  役目   | <span style="display:inline;"><span style="display:inline-block;position:relative;"><span style="display:inline;">や</span><span style="border-color:currentColor;"></span></span><span style="display:inline-block;position:relative;"><span style="display:inline;">く</span><span style="border-color:currentColor;display:block;user-select:none;pointer-events:none;position:absolute;top:0.1em;left:0;right:0;height:0;border-top-width:0.1em;border-top-style:solid;"></span></span><span style="display:inline-block;position:relative;padding-right:0.1em;margin-right:0.1em;"><span style="display:inline;">め</span><span style="border-color:currentColor;display:block;user-select:none;pointer-events:none;position:absolute;top:0.1em;left:0;right:0;height:0;border-top-width:0.1em;border-top-style:solid;right:-0.1em;height:0.4em;border-right-width:0.1em;border-right-style:solid;"><br></span></span></span> {.odaka}     | 3 {.t-odaka} |
| kifuku (起伏)   |  可笑しい | <span style="display:inline;"><span style="display:inline-block;position:relative;"><span style="display:inline;">お</span><span style="border-color:currentColor;"></span></span><span style="display:inline-block;position:relative;"><span style="display:inline;">か</span><span style="border-color:currentColor;display:block;user-select:none;pointer-events:none;position:absolute;top:0.1em;left:0;right:0;height:0;border-top-width:0.1em;border-top-style:solid;"></span></span><span style="display:inline-block;position:relative;padding-right:0.1em;margin-right:0.1em;"><span style="display:inline;">し</span><span style="border-color:currentColor;display:block;user-select:none;pointer-events:none;position:absolute;top:0.1em;left:0;right:0;height:0;border-top-width:0.1em;border-top-style:solid;right:-0.1em;height:0.4em;border-right-width:0.1em;border-right-style:solid;"></span></span><span style="display:inline-block;position:relative;"><span style="display:inline;">い</span><span style="border-color:currentColor;"></span></span></span> {.kifuku}   |  3 {.t-kifuku}  |

<div style="display: flex; justify-content: space-around;">
    <div style="flex: 1; min-width: 45%;">
        **Word Pitch Coloring**
        
        === "Enabled"
            ![Enabled](assets/images/pitch_on_preview.png)
        
        === "Alt Style"
            ![Alt Style](assets/images/pitch_alt_preview.png)
        
        === "Disabled"
            ![Disabled](assets/images/pitch_off_preview.png)
    </div>
    
    <div style="flex: 1; min-width: 45%;">
        **Sentence Highlight Pitch Coloring**
        
        === "Enabled"
            ![Enabled](assets/images/pitch_sentence_highlight_on_preview.png)
        
        === "Disabled"
            ![Disabled](assets/images/pitch_sentence_highlight_off_preview.png)
    </div>
</div>

### Customization

You can change how the pitch downstep, word, and sentence highlight are colored via the variables in the `/* PITCH ACCENT SETTINGS */` section of the CSS:
```css
--pitch-style:              default; /* "alt" to color the entire word + reading instead of only the downstep */
--pitch-colors:             true;    /* "false" to disable pitch downstep coloring */
--sentence-pitch-highlight: false;   /* "true" to make pitch colors overwrite sentence highlights */
```

- Pitch downstep coloring is enabled by default. To completely disable pitch colors, set `-pitch-colors` to `false`
- With the pitch style set to `default`. only the downstep is colored. To apply the pitch color to the entire word and its reading, set `--pitch-style` to `Alt`.
- By default, the target word in sentences uses the theme’s standard highlight color. To instead highlight it using the word’s pitch color, set `--sentence-pitch-highlight` to `true`.
