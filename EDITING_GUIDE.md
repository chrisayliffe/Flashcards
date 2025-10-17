# 📝 Complete Guide to Editing Your Flashcards

## 📍 Where to Edit

**File:** `icelandic-flashcards.html`  
**Location:** Around **line 691** - look for `const CARDS = [`

All your flashcards and practice questions are in this ONE array. Just scroll down to find it!

---

## 🎴 Card Types

You have **4 types** of cards you can create:

### 1️⃣ **FLASHCARD** (Shows in Flashcards mode)
### 2️⃣ **MULTIPLE CHOICE** (Shows in Practice mode)
### 3️⃣ **FILL IN THE BLANK** (Shows in Practice mode)
### 4️⃣ **IMAGE SELECTION** (Shows in Practice mode)

---

## 📖 How to Edit Each Type

### 1️⃣ FLASHCARD Template

```javascript
{
  id: "card-001",                    // ⚠️ Must be unique! (card-001, card-002, etc.)
  type: "flashcard",                 // ⚠️ Keep this as "flashcard"
  front: { 
    text: "Hvað heitir þú?",         // 🇮🇸 Icelandic text
    image: null                      // 📷 Optional: "path/to/image.jpg" or null
  },
  back: { 
    text: "What's your name?",       // 🇬🇧 English translation
    image: null                      // 📷 Optional: "path/to/image.jpg" or null
  },
  hint: "Common greeting question",  // 💡 Optional hint (or null)
  audioMp4: "audio/hvad-heitir.mp3" // 🔊 Audio file path (or null)
}
```

**✏️ To Edit:**
- Change `front.text` → The Icelandic phrase
- Change `back.text` → The English translation
- Add `audioMp4` → Path to your MP3 audio file
- Add `image` → Path to an image (optional)
- Add `hint` → A helpful hint (optional)

**📂 Where to Put Audio Files:**
Upload your MP3 files to the same folder as the HTML file, then reference them:
- Same folder: `"audio-file.mp3"`
- In subfolder: `"media/audio-file.mp3"`
- External URL: `"https://yourdomain.com/audio.mp3"`

---

### 2️⃣ MULTIPLE CHOICE Template

```javascript
{
  id: "card-002",                    // ⚠️ Must be unique!
  type: "mcq",                       // ⚠️ Keep this as "mcq"
  questionType: "multiple-choice",   // ⚠️ Keep this exact text
  prompt: "Translate to Icelandic: My name is Sandra",  // ❓ Your question
  options: [
    "Ég heiti Sandra",               // Option 1
    "Þú heitir Sandra",              // Option 2
    "Hann heitir Sandra",            // Option 3
    "Við heitum Sandra"              // Option 4
  ],
  correctIndex: 0,                   // ✅ Correct answer (0=first, 1=second, etc.)
  hint: "'Ég heiti' means 'I am called'",  // 💡 Optional hint
  image: null,                       // 📷 Optional image
  audioMp4: null                     // 🔊 Optional audio
}
```

**✏️ To Edit:**
- Change `prompt` → Your question
- Edit all 4 `options` → Your answer choices
- Set `correctIndex`:
  - `0` = First option is correct
  - `1` = Second option is correct
  - `2` = Third option is correct
  - `3` = Fourth option is correct

**⚠️ Common Mistake:**
`correctIndex: 0` means the FIRST option (not option zero!)

---

### 3️⃣ FILL IN THE BLANK Template

```javascript
{
  id: "card-004",                    // ⚠️ Must be unique!
  type: "mcq",                       // ⚠️ Keep this as "mcq"
  questionType: "fill-in-blank",     // ⚠️ Keep this exact text
  prompt: "Fill in the blank: Góðan _____",  // ❓ Your question with blank
  answer: "daginn",                  // ✅ The correct answer
  acceptableAnswers: ["daginn", "Daginn"],  // ✅ All acceptable spellings
  hint: "Think about the word for 'day'",   // 💡 Optional hint
  image: null,                       // 📷 Optional image
  audioMp4: null                     // 🔊 Optional audio
}
```

**✏️ To Edit:**
- Change `prompt` → Your question (use `_____` for the blank)
- Set `answer` → The main correct answer
- Set `acceptableAnswers` → List all variations that should be accepted
  - Example: `["hello", "Hello", "HELLO"]` accepts any capitalization

**💡 Pro Tip:**
Always include capitalization variations in `acceptableAnswers` so students aren't marked wrong for case differences!

---

### 4️⃣ IMAGE SELECTION Template

```javascript
{
  id: "card-006",                    // ⚠️ Must be unique!
  type: "mcq",                       // ⚠️ Keep this as "mcq"
  questionType: "image-selection",   // ⚠️ Keep this exact text
  prompt: "Select the image that represents: Góða nótt",  // ❓ Your question
  options: [
    { 
      image: "images/moon.jpg",      // 📷 Path to image 1
      label: "Moon and stars"        // 🏷️ Alt text/description
    },
    { 
      image: "images/sun.jpg",       // 📷 Path to image 2
      label: "Sunrise" 
    },
    { 
      image: "images/mountain.jpg",  // 📷 Path to image 3
      label: "Mountain" 
    },
    { 
      image: "images/forest.jpg",    // 📷 Path to image 4
      label: "Forest" 
    }
  ],
  correctIndex: 0,                   // ✅ Correct image (0=first, 1=second, etc.)
  hint: "'Góða nótt' means 'Good night'",  // 💡 Optional hint
  audioMp4: null                     // 🔊 Optional audio
}
```

**✏️ To Edit:**
- Change `prompt` → Your question
- Edit all 4 `options`:
  - `image` → Path to your image file
  - `label` → Description of the image (for accessibility)
- Set `correctIndex` → Which image is correct (0-3)

**📂 Image File Recommendations:**
- Size: 400-600px wide (optimal)
- Format: JPG or PNG
- Put in subfolder: `images/filename.jpg`

---

## 🎯 Quick Examples

### Example 1: Add a New Flashcard with Audio

```javascript
{
  id: "card-007",
  type: "flashcard",
  front: { 
    text: "Hæ", 
    image: null 
  },
  back: { 
    text: "Hi / Hello", 
    image: null 
  },
  hint: "Casual greeting",
  audioMp4: "audio/hae.mp3"  // ✅ Add your audio file here!
}
```

### Example 2: Add a New Multiple Choice

```javascript
{
  id: "card-008",
  type: "mcq",
  questionType: "multiple-choice",
  prompt: "What does 'Takk' mean?",
  options: [
    "Thank you",      // Correct answer
    "Goodbye",
    "Hello",
    "Please"
  ],
  correctIndex: 0,   // First option is correct
  hint: "Common polite expression",
  image: null,
  audioMp4: null
}
```

### Example 3: Add Fill-in-the-Blank

```javascript
{
  id: "card-009",
  type: "mcq",
  questionType: "fill-in-blank",
  prompt: "Complete the greeting: Góðan _____",
  answer: "daginn",
  acceptableAnswers: ["daginn", "Daginn", "DAGINN"],
  hint: "Means 'Good morning'",
  image: null,
  audioMp4: null
}
```

---

## 📋 Step-by-Step: Adding a New Card

1. **Open** `icelandic-flashcards.html` in any text editor
2. **Find** the line `const CARDS = [` (around line 691)
3. **Scroll** to the end of the array (look for the last `}` before `];`)
4. **Add a comma** after the last card
5. **Copy** one of the templates above
6. **Paste** it after the comma
7. **Edit** the content
8. **Change** the `id` to be unique (e.g., "card-007", "card-008")
9. **Save** the file

---

## 🎨 Using Your Own Images

### Option 1: Store Images Locally
1. Create a folder called `images` or `media` next to your HTML file
2. Put your images in that folder
3. Reference them: `"images/myimage.jpg"`

### Option 2: Use External URLs
Use image hosting services like:
- Unsplash: `https://images.unsplash.com/photo-xxxxx`
- Your own server: `https://yourdomain.com/images/photo.jpg`
- Image hosting: Imgur, Cloudinary, etc.

---

## 🔊 Adding Audio Files

### Supported Formats:
- ✅ MP3 (recommended - best compatibility)
- ✅ MP4 audio
- ✅ WAV
- ✅ OGG

### Where to Put Audio:
1. **Same folder** as HTML file:
   ```javascript
   audioMp4: "pronunciation.mp3"
   ```

2. **In a subfolder:**
   ```javascript
   audioMp4: "audio/hvad-heitir.mp3"
   ```

3. **External URL:**
   ```javascript
   audioMp4: "https://yourdomain.com/audio/file.mp3"
   ```

### Recording Audio:
You can use:
- Voice recording apps on your phone
- Online tools like Vocaroo (vocaroo.com)
- Audio editing software (Audacity is free)

---

## ⚠️ Common Mistakes to Avoid

### ❌ Mistake 1: Forgetting Commas
```javascript
// WRONG - Missing comma between cards
{
  id: "card-001",
  type: "flashcard",
  ...
}  // ❌ Need comma here!
{
  id: "card-002",
  ...
}
```

```javascript
// CORRECT
{
  id: "card-001",
  ...
},  // ✅ Comma here
{
  id: "card-002",
  ...
}
```

### ❌ Mistake 2: Duplicate IDs
```javascript
// WRONG - Both have same id
{ id: "card-001", ... }
{ id: "card-001", ... }  // ❌ Duplicate!

// CORRECT - Each card has unique id
{ id: "card-001", ... }
{ id: "card-002", ... }  // ✅ Unique!
```

### ❌ Mistake 3: Wrong correctIndex
```javascript
options: [
  "First answer",   // Index 0
  "Second answer",  // Index 1
  "Third answer",   // Index 2
  "Fourth answer"   // Index 3
],
correctIndex: 1     // ✅ This means "Second answer" is correct
```

### ❌ Mistake 4: Quotes in Text
```javascript
// WRONG - Quotes break the string
text: "She said "hello""  // ❌ Breaks!

// CORRECT - Escape quotes or use different quotes
text: "She said \"hello\""  // ✅ Escape with \
text: 'She said "hello"'    // ✅ Use single quotes outside
```

---

## 🧪 Testing Your Changes

After editing:
1. **Save** the HTML file
2. **Open** it in a web browser
3. **Test** each new card:
   - Navigate through all cards
   - Try the audio buttons
   - Check images load correctly
   - Verify correct answers work

---

## 💾 File Structure Example

```
your-folder/
├── icelandic-flashcards.html  (your main file)
├── audio/
│   ├── hvad-heitir.mp3
│   ├── goda-nott.mp3
│   └── takk-fyrir.mp3
└── images/
    ├── moon.jpg
    ├── sun.jpg
    └── greeting.png
```

---

## 🚀 Quick Reference Card

| Card Type | type value | questionType value | Shows In Mode |
|-----------|------------|-------------------|---------------|
| Flashcard | `"flashcard"` | N/A | Flashcards |
| Multiple Choice | `"mcq"` | `"multiple-choice"` | Practice |
| Fill-in-Blank | `"mcq"` | `"fill-in-blank"` | Practice |
| Image Selection | `"mcq"` | `"image-selection"` | Practice |

---

## 📞 Need Help?

If you get stuck:
1. Check for missing commas
2. Verify all quotes are matched
3. Make sure all IDs are unique
4. Check that image/audio paths are correct
5. Use your browser's console (F12) to see error messages

---

**Happy Editing! 🎉**
