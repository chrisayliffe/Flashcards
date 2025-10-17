# 📊 Google Sheets Integration Guide

## 🎯 Overview

Your flashcard app can now pull ALL content from a Google Sheet! No more editing code - just update the spreadsheet and refresh the page.

---

## 📋 Step 1: Prepare Your Google Sheet

### Required Sheet Structure

Each **tab** (sheet) in your Google Spreadsheet = **one lesson**

### For FLASHCARDS (Sheet columns):

| Column A | Column B | Column C | Column D | Column E |
|----------|----------|----------|----------|----------|
| **Type** | **Icelandic** | **English** | **Hint** | **Audio URL** |
| flashcard | Hvað heitir þú? | What's your name? | Common greeting | https://yourdomain.com/audio1.mp3 |
| flashcard | Góða nótt | Good night | Nighttime farewell | |

### For MULTIPLE CHOICE (Sheet columns):

| Column A | Column B | Column C | Column D | Column E | Column F | Column G |
|----------|----------|----------|----------|----------|----------|----------|
| **Type** | **Question** | **Option 1** | **Option 2** | **Option 3** | **Option 4** | **Correct Answer** | **Hint** |
| mcq | Translate: My name is Sandra | Ég heiti Sandra | Þú heitir Sandra | Hann heitir Sandra | Við heitum Sandra | 1 | 'Ég heiti' means 'I am called' |

**Note:** Correct Answer is 1-4 (not 0-3)

### For FILL IN THE BLANK:

| Column A | Column B | Column C | Column D |
|----------|----------|----------|----------|
| **Type** | **Question** | **Answer** | **Hint** |
| fill-blank | Fill in: Góðan _____ | daginn | Means 'Good morning' |

### For IMAGE SELECTION:

| Column A | Column B | Column C | Column D | Column E | Column F | Column G |
|----------|----------|----------|----------|----------|----------|----------|
| **Type** | **Question** | **Image 1 URL** | **Image 2 URL** | **Image 3 URL** | **Image 4 URL** | **Correct Answer** | **Hint** |
| image | Select image for: Góða nótt | https://... | https://... | https://... | https://... | 1 | 'Góða nótt' means good night |

---

## 🔧 Step 2: Make Your Sheet Public

1. Open your Google Sheet
2. Click **Share** (top right)
3. Click **Change to anyone with the link**
4. Set permission to **Viewer** (read-only)
5. Click **Done**

---

## 🆔 Step 3: Get Your Spreadsheet ID

Your spreadsheet URL looks like:
```
https://docs.google.com/spreadsheets/d/1meQLVv9Un4CvIYWwq5lFZZx1wvnp0APh_m8dAyl0rGk/edit
```

The Spreadsheet ID is the long string between `/d/` and `/edit`:
```
1meQLVv9Un4CvIYWwq5lFZZx1wvnp0APh_m8dAyl0rGk
```

---

## 💻 Step 4: Update Your HTML File

Add this configuration at the top of the `<script>` section in your HTML file:

```javascript
// ==================== GOOGLE SHEETS CONFIGURATION ====================
const GOOGLE_SHEETS_CONFIG = {
  enabled: true,  // Set to false to use hardcoded cards instead
  spreadsheetId: '1meQLVv9Un4CvIYWwq5lFZZx1wvnp0APh_m8dAyl0rGk',
  defaultSheet: 'Lesson 1',  // Default tab/lesson name
  apiKey: 'YOUR_API_KEY_HERE'  // Optional: For rate limit increases
};
```

---

## 🎓 Step 5: How It Works

### Lesson Selection
- The app reads the `defaultSheet` tab from your Google Sheet
- To create a new lesson: Just add a new tab in your spreadsheet!
- To switch lessons: Change the `defaultSheet` value or add a lesson selector UI

### Data Format Examples

#### Example 1: Flashcard Row
```
flashcard | Hvað heitir þú? | What's your name? | Common greeting | audio/greeting.mp3
```

#### Example 2: Multiple Choice Row
```
mcq | What does 'Takk' mean? | Thank you | Goodbye | Hello | Please | 1 | Common polite phrase
```

#### Example 3: Fill-in-Blank Row
```
fill-blank | Complete: Góðan _____ | daginn | Means 'Good morning'
```

#### Example 4: Image Selection Row
```
image | Select image for sunset | url1.jpg | url2.jpg | url3.jpg | url4.jpg | 2 | The sun is setting
```

---

## 📝 Column Headers (First Row)

Your first row should have headers (they're ignored by the app, but helpful for you):

**For Flashcards:**
```
Type | Icelandic | English | Hint | Audio URL
```

**For Multiple Choice:**
```
Type | Question | Option 1 | Option 2 | Option 3 | Option 4 | Correct | Hint
```

---

## ⚡ Quick Start Template

I've created a template in your sheet. Just:
1. Copy the structure
2. Fill in your content
3. Save
4. Refresh your flashcard app!

---

## 🔄 Switching Lessons

### Option 1: Manual (in code)
Change `defaultSheet` in the config:
```javascript
defaultSheet: 'Lesson 2'  // Switch to "Lesson 2" tab
```

### Option 2: URL Parameter (advanced)
Add this to allow URL-based lesson selection:
```
https://yourdomain.com/flashcards.html?lesson=Lesson%202
```

### Option 3: Dropdown Selector (I can add this!)
I can add a lesson selector dropdown that lists all tabs from your spreadsheet.

---

## 🛡️ Fallback

If the Google Sheet fails to load:
- The app will use the hardcoded CARDS array as backup
- You'll see a message: "Using offline cards"
- This ensures the app always works!

---

## 🎨 Benefits

✅ **No Code Changes** - Just edit the spreadsheet
✅ **Multiple Lessons** - One tab per lesson
✅ **Easy Collaboration** - Share the sheet with teachers/content creators
✅ **Version History** - Google Sheets tracks all changes
✅ **Quick Updates** - Change content and refresh instantly
✅ **No GitHub Needed** - No more commits for content updates

---

## 📊 Your Sheet Structure Recommendation

```
Tab 1: Lesson 1 - Greetings
Tab 2: Lesson 2 - Numbers  
Tab 3: Lesson 3 - Food
Tab 4: Lesson 4 - Directions
```

Each tab should follow the same column structure!

---

## 🐛 Troubleshooting

**Problem:** Cards not loading from sheet
- ✅ Check sheet is public (anyone with link)
- ✅ Verify spreadsheet ID is correct
- ✅ Check first row has headers (or is skipped)
- ✅ Open browser console (F12) to see errors

**Problem:** Wrong data appearing
- ✅ Check column order matches template
- ✅ Verify "Type" column has correct values
- ✅ For MCQ: Correct answer is 1-4 (not 0-3)

---

## 🚀 Next Steps

Would you like me to:
1. ✅ Create the updated HTML file with Google Sheets integration?
2. ✅ Add a lesson selector dropdown?
3. ✅ Create a template for your Google Sheet?
4. ✅ Add caching to reduce API calls?

Let me know and I'll implement it right away!
