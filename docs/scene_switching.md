# Scene Switching

![type:video](assets/Scene_Switching_Preview.mp4)

Switch between immersive "Scenes" where the Sentences, Audio, Images and Misc Info are synchronized.

- **Grouped Navigation:** Supports splitting sentences into segments using `<span class="group">...</span>` tags in the Anki field.
- To use this feature, update the `sentence` and `sentenceFurigana` fields in Yomitan’s "**Configure Anki flashcards…**" settings:

    <img width="627" height="161" alt="image" src="https://github.com/user-attachments/assets/12506bd0-d03a-456a-90de-b86c4118d61f" />

  - Set `sentence` to: `<span class="group">{cloze-prefix}<span class="highlight">{cloze-body}</span>{cloze-suffix}</span>`
  - Set `sentenceFurigana` to: `<span class="group">{sentence-furigana}</span>`
    
    Make sure **Append** is enabled so you can add new sentences instead of overwriting the first one.
    To do this, turn on “**Allow Overwriting**”:

    <img width="671" height="204" alt="image" src="https://github.com/user-attachments/assets/2f7a705f-ab9d-4f0d-a9b2-ad3a1e0a49e2" />
    
- `sentenceEng` and `miscInfo` are also supported. However, you'll need to manually edit the field to group it correctly with each scene using `<span class="group">...</span>`.
  - You can choose which scene it belongs to by numbering the group, e.g., `<span class="group2">...</span>`. This skips the first scene and groups it with the second.
  - If you have multiple scenes but only one `sentenceEng`, it will appear only in the first scene unless you assign it to a specific group as shown above.
  > It’s not necessary to number the groups if the number of translations is the same as the number of sentences.

  - This is how it would look inside the field’s HTML:
  ```html
  <span class="group2">The future seems bleak...</span><span class="group3">Looks like I have a hard path ahead.</span>
  ```
  ![type:video](https://github.com/user-attachments/assets/ccc24115-a1f8-4c67-a8d1-cb7985887a8f)

  - Other Example format:
  ```html
  <span class="group">Something you wanna try?</span><span class="group">Why don't we test it out?</span><span class="group">Don't you want to try it out?</span>
  ```
  ```html
  <span class="group">My Dress-Up Darling • Season 2, Episode 5 • 0:17:53</span><span class="group">16bit Sensation: Another Layer • Season 1, Episode 13 • 0:16:21</span><span class="group">The Irregular at Magic High School • Season 1, Episode 11 • 0:21:58</span>
  ```
  ![Scene Switching](assets/images/scene_switching_preview.gif)

- **Auto-Detection:** Automatically detects if a card has multiple audio files. If found, it enables the Scene Navigation mode; otherwise, it defaults to standard behavior. Multiple sentences are not split if the card doesn’t contain at least 2 audio files.
- **Custom Audio Replay Shortcut:** By default, Anki plays every audio file when you press **R**. This custom shortcut plays only the audio for the active scene. The default key is **W**, amd you can change this in the `/* CUSTOM SHORTCUTS */` section of the CSS:
  ```css
    --scene-replay-shortcut-key:        w;       /* Set the key to replay active scene */
  ```

- **Scene Navigation Shortcuts**
  *   **Front:** Use **Left / Right Arrow** keys.
  *   **Back:** Use **Ctrl + Left / Right Arrow** keys (Ctrl is required here to prevent conflicts with Dictionary navigation).
