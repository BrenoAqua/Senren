# Scene Switching

![type:video](assets/Scene_Switching_Preview.mp4)

Switch between immersive "Scenes" where the Sentence text, Audio, and Images are synchronized.

- **Grouped Navigation:** Supports splitting sentences into segments using `<span class="group">...</span>` tags in the Anki field.
- To use this feature, update the `sentence` and `sentenceFurigana` fields in Yomitan’s "**Configure Anki flashcards…**" settings:

    <img width="627" height="161" alt="image" src="https://github.com/user-attachments/assets/12506bd0-d03a-456a-90de-b86c4118d61f" />

  - Set `sentence` to: `<span class="group">{cloze-prefix}<span class="highlight">{cloze-body}</span>{cloze-suffix}</span>`
  - Set `sentenceFurigana` to: `<span class="group">{sentence-furigana}</span>`
    Make sure **Append** is enabled so you can add new sentences instead of overwriting the first one.
    To do this, turn on “**Allow Overwriting**”:

    <img width="671" height="204" alt="image" src="https://github.com/user-attachments/assets/2f7a705f-ab9d-4f0d-a9b2-ad3a1e0a49e2" />

- **Auto-Detection:** Automatically detects if a card has multiple audio files. If found, it enables the Scene Navigation mode; otherwise, it defaults to standard behavior. Multiple sentences are not split if the card doesn’t contain at least 2 audio files.
