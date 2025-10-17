# 📝 EXACT Google Sheet Setup - Step by Step

## 🎯 Your Sheet is Currently Empty - Here's How to Fill It!

Your Google Sheet: https://docs.google.com/spreadsheets/d/1meQLVv9Un4CvIYWwq5lFZZx1wvnp0APh_m8dAyl0rGk/edit

---

## Step 1: Rename the Tab

1. At the bottom, you'll see a tab called "Sheet1"
2. **Right-click** on "Sheet1"
3. **Select "Rename"**
4. Type: **"Lesson 1"** (exactly like this)
5. Press Enter

---

## Step 2: Set Up Column Headers (Row 1)

Click on each cell in Row 1 and type these headers:

### For Flashcards and Questions Together:

| Cell | What to Type |
|------|-------------|
| **A1** | Type |
| **B1** | Column2 |
| **C1** | Column3 |
| **D1** | Column4 |
| **E1** | Column5 |
| **F1** | Column6 |
| **G1** | Column7 |
| **H1** | Column8 |

**Why generic names?** Because different card types use different column meanings. The app knows what each column means based on the "Type" in column A.

---

## Step 3: Add Your First Flashcard

Now start in Row 2:

| Cell | Type This | What It Means |
|------|-----------|---------------|
| **A2** | flashcard | This tells the app it's a flashcard |
| **B2** | Hvað heitir þú? | The Icelandic text |
| **C2** | What's your name? | The English translation |
| **D2** | Common greeting question | The hint (optional) |
| **E2** | https://yourdomain.com/audio.mp3 | Audio file URL (optional) |

**Leave F2, G2, H2 empty** - flashcards only use columns A-E.

---

## Step 4: Add More Flashcards

Continue in Row 3, 4, 5, etc.:

**Row 3:**
- A3: `flashcard`
- B3: `Góða nótt`
- C3: `Good night`
- D3: `Nighttime farewell`
- E3: (leave empty if no audio)

**Row 4:**
- A4: `flashcard`
- B4: `Takk fyrir`
- C4: `Thank you`
- D4: `Essential polite phrase`
- E4: (leave empty)

---

## Step 5: Add a Multiple Choice Question

Let's say Row 5:

| Cell | Type This | What It Means |
|------|-----------|---------------|
| **A5** | mcq | Multiple choice question |
| **B5** | Translate to Icelandic: My name is Sandra | The question |
| **C5** | Ég heiti Sandra | Option 1 (correct answer) |
| **D5** | Þú heitir Sandra | Option 2 |
| **E5** | Hann heitir Sandra | Option 3 |
| **F5** | Við heitum Sandra | Option 4 |
| **G5** | 1 | Which option is correct (1 = first option) |
| **H5** | 'Ég heiti' means 'I am called' | Hint (optional) |

---

## Step 6: Add a Fill-in-the-Blank Question

Row 6:

| Cell | Type This | What It Means |
|------|-----------|---------------|
| **A6** | fill-blank | Fill-in-the-blank type |
| **B6** | Fill in the blank: Góðan _____ | The question |
| **C6** | daginn | The correct answer |
| **D6** | This means 'Good morning' | Hint (optional) |

**Leave E6-H6 empty** - fill-in-blank only uses columns A-D.

---

## Step 7: Add an Image Selection Question

Row 7:

| Cell | Type This | What It Means |
|------|-----------|---------------|
| **A7** | image | Image selection type |
| **B7** | Select the image that represents: Góða nótt | The question |
| **C7** | https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400 | Image 1 URL (moon) |
| **D7** | https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=400 | Image 2 URL (sun) |
| **E7** | https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400 | Image 3 URL (mountain) |
| **F7** | https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400 | Image 4 URL (forest) |
| **G7** | 1 | Which image is correct (1 = first image) |
| **H7** | 'Góða nótt' means good night | Hint (optional) |

---

## 📊 Visual Example - What Your Sheet Should Look Like:

```
Row 1:  Type          | Column2              | Column3              | Column4         | Column5        | Column6        | Column7  | Column8
Row 2:  flashcard     | Hvað heitir þú?      | What's your name?    | Greeting hint   | audio.mp3      |                |          |
Row 3:  flashcard     | Góða nótt            | Good night           | Nighttime       |                |                |          |
Row 4:  flashcard     | Takk fyrir           | Thank you            | Polite phrase   |                |                |          |
Row 5:  mcq           | Translate: Takk      | Thank you            | Goodbye         | Hello          | Please         | 1        | Hint text
Row 6:  fill-blank    | Complete: Góðan ____ | daginn               | Good morning    |                |                |          |
Row 7:  image         | Select for: Night    | moon.jpg             | sun.jpg         | tree.jpg       | car.jpg        | 1        | Nighttime
```

---

## 🎨 Quick Reference Card

### FLASHCARD (uses 5 columns):
```
A: flashcard
B: Icelandic text
C: English text
D: Hint (optional)
E: Audio URL (optional)
```

### MULTIPLE CHOICE (uses 8 columns):
```
A: mcq
B: Question
C: Option 1
D: Option 2
E: Option 3
F: Option 4
G: Correct answer number (1-4)
H: Hint (optional)
```

### FILL-IN-BLANK (uses 4 columns):
```
A: fill-blank
B: Question with _____
C: Answer
D: Hint (optional)
```

### IMAGE SELECTION (uses 8 columns):
```
A: image
B: Question
C: Image 1 URL
D: Image 2 URL
E: Image 3 URL
F: Image 4 URL
G: Correct image number (1-4)
H: Hint (optional)
```

---

## ⚠️ IMPORTANT RULES:

1. **Column A must always have the type:** flashcard, mcq, fill-blank, or image
2. **Row 1 is headers** - the app skips it
3. **Start your data in Row 2**
4. **For MCQ and Image: Answer is 1-4, NOT 0-3**
   - If Option 1 is correct, put "1" in column G
   - If Option 2 is correct, put "2" in column G
5. **Empty cells are OK** - leave optional fields blank
6. **No extra spaces** - "flashcard" not " flashcard "

---

## 🚀 After You Fill It In:

1. **Save** (it saves automatically)
2. **Make it public:**
   - Click "Share" (top right)
   - Click "Change to anyone with the link"
   - Set to "Viewer"
   - Click "Done"
3. **Open your flashcard app** - it will load automatically!

---

## 🎓 Adding More Lessons:

1. Click the **"+"** at the bottom left (next to "Lesson 1" tab)
2. Rename the new tab to **"Lesson 2"**
3. Copy the same column structure (Row 1 headers)
4. Add your new lesson content

---

## 💾 Copy-Paste Template:

Want to start quickly? Copy this into cells A1-H7:

```
Type	Column2	Column3	Column4	Column5	Column6	Column7	Column8
flashcard	Hvað heitir þú?	What's your name?	Common greeting	
flashcard	Góða nótt	Good night	Nighttime farewell	
flashcard	Takk fyrir	Thank you	Polite phrase	
mcq	Translate: My name is Sandra	Ég heiti Sandra	Þú heitir Sandra	Hann heitir Sandra	Við heitum Sandra	1	I am called
fill-blank	Fill in: Góðan _____	daginn	Good morning	
image	Select for: Góða nótt	https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400	https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=400	https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400	https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400	1	Good night
```

**Note:** Make sure to paste this as tab-separated values (it should auto-detect)

---

## ✅ Checklist:

- [ ] Renamed tab to "Lesson 1"
- [ ] Added column headers in Row 1
- [ ] Added at least 3 flashcards
- [ ] Added at least 1 multiple choice question
- [ ] Made the sheet public (Share → Anyone with link)
- [ ] Tested by opening the flashcard app

---

Need help? The app will show a message if it can't load the sheet, and will use backup cards instead.
