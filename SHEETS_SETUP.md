# 🎯 SETUP INSTRUCTIONS

## Quick Setup for Google Sheets Integration

### Step 1: Make Your Google Sheet Public
1. Open: https://docs.google.com/spreadsheets/d/1meQLVv9Un4CvIYWwq5lFZZx1wvnp0APh_m8dAyl0rGk/edit
2. Click "Share" → "Anyone with the link" → "Viewer"

### Step 2: Set Up Your Sheet Structure

**Create tabs for each lesson** (e.g., "Lesson 1", "Lesson 2")

**In each tab, use these columns:**

#### For Flashcards:
```
Row 1 (Headers): Type | Icelandic | English | Hint | Audio URL
Row 2 (Example): flashcard | Hvað heitir þú? | What's your name? | Common greeting | audio/file.mp3
```

#### For Multiple Choice:
```
Row 1: Type | Question | Option1 | Option2 | Option3 | Option4 | Answer | Hint
Row 2: mcq | Translate: Takk | Thank you | Goodbye | Hello | Please | 1 | Polite phrase
```
**Note:** Answer is 1-4 (which option number is correct)

#### For Fill-in-Blank:
```
Row 1: Type | Question | Answer | Hint
Row 2: fill-blank | Complete: Góðan _____ | daginn | Good morning
```

#### For Image Questions:
```
Row 1: Type | Question | Image1 | Image2 | Image3 | Image4 | Answer | Hint  
Row 2: image | Select for: Night | moon.jpg | sun.jpg | tree.jpg | car.jpg | 1 | Nighttime
```

### Step 3: Open the HTML File

Open `icelandic-flashcards-sheets.html` in your browser!

### Step 4: Change Lessons

To switch lessons, the app will show a dropdown menu to select which tab/lesson to display.

---

## ✅ That's It!

Now you can edit content in Google Sheets without touching any code!

---

## 📝 Template Sheet

Copy this structure for each lesson tab:

```
Type          | Icelandic      | English             | Hint                  | Audio URL
flashcard     | Hæ             | Hi                  | Casual greeting       |
flashcard     | Bless          | Goodbye             | Friendly farewell     |
mcq           | Takk means?    | Thank you           | Goodbye | Hello | Welcome | 1 | Polite word
fill-blank    | Góðan _____    | daginn              | Good morning          |
```
