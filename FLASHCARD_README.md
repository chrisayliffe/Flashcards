# Icelandic Flashcards - LearnWorlds Ready 🎓

A beautiful, self-contained flashcard application designed for language learning that can be embedded directly into LearnWorlds or any LMS platform.

## 📍 File Location

**Main File:** `/app/frontend/public/icelandic-flashcards.html`

This is a **single, standalone HTML file** with all CSS and JavaScript inline - no dependencies required except Google Fonts (Outfit).

## ✨ Features

### Three Learning Modes

1. **Flashcards Mode** 🔄
   - Click or press Space/Enter to flip cards
   - Front shows the Icelandic phrase
   - Back reveals the English translation
   - Smooth 3D flip animation

2. **Practice Mode (MCQ)** ✍️
   - Multiple choice questions with 4 options
   - Immediate visual feedback (green for correct, red for incorrect)
   - Shake animation for wrong answers
   - Keyboard support (press 1-4 to select options)

3. **Learn Mode** 📚
   - Shows both sides of the card simultaneously
   - Self-grading with "I Knew It" and "Review Again" buttons
   - Tracks mastery progress

### Interactive Features

- ✅ **Progress Tracking** - Visual progress bar and card counter
- ✅ **Mastery System** - Tracks which cards you've mastered
- ✅ **Hints** - Collapsible hints for each card
- ✅ **Audio Support** - Play MP4 audio for pronunciation (when configured)
- ✅ **Shuffle** - Randomize card order
- ✅ **Skip** - Skip cards you don't know
- ✅ **Keyboard Navigation** - Full keyboard accessibility
- ✅ **localStorage** - Progress persists across sessions
- ✅ **Responsive Design** - Works on desktop, tablet, and mobile

## 🎨 Design System

### Color Palette
```css
Background: #0e0f12 (Dark canvas)
Card Background: #15171c
Text: #ffffff
Accent (Primary): #f15d4e (Coral red)
Success: #21b767 (Green)
Button Background: #1b1e25
```

### Typography
- **Font:** Outfit (300, 400, 500, 600, 700 weights)
- **Card Text:** 28px, weight 600
- **Buttons:** 14px, weight 500
- **Smooth, modern appearance**

### UI Elements
- **Rounded corners:** 12-16px
- **Smooth animations:** 0.3s cubic-bezier easing
- **Box shadows:** Subtle elevation
- **Hover states:** All interactive elements
- **Focus indicators:** Accessible keyboard navigation

## 🚀 How to Use

### Method 1: Direct Access (Recommended for Testing)

Access the file directly at:
```
http://localhost:8080/icelandic-flashcards.html
```

Or serve it with any web server:
```bash
cd /app/frontend/public
python3 -m http.server 8080
```

### Method 2: Embed in LearnWorlds

**Option A - HTML Embed Block:**
1. Copy the entire `icelandic-flashcards.html` file contents
2. In LearnWorlds, add an "HTML" embed block
3. Paste the HTML code
4. Save and publish

**Option B - iframe Embed:**
1. Upload the file to your web hosting
2. Use this iframe code in LearnWorlds:

```html
<iframe 
  src="https://your-domain.com/icelandic-flashcards.html"
  width="100%"
  height="680"
  style="border:none;border-radius:12px;overflow:hidden"
  allow="autoplay"
></iframe>
```

### Method 3: Standalone Page

Simply open the HTML file in any modern web browser. It works completely offline (except for Google Fonts).

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Space` / `Enter` | Flip flashcard |
| `→` (Right Arrow) | Next card |
| `←` (Left Arrow) | Previous card |
| `1` `2` `3` `4` | Select MCQ option (in Practice mode) |

## 🔧 Customization

### Edit Card Content

Open `icelandic-flashcards.html` and find the `CARDS` array (around line 70):

```javascript
const CARDS = [
  {
    id: "card-001",
    type: "flashcard",           // "flashcard" or "mcq"
    front: { text: "Hvað heitir þú?", image: null },
    back: { text: "What's your name?", image: null },
    hint: "Common greeting question in Icelandic",
    audioMp4: null  // Add URL to MP4 audio file
  },
  {
    id: "card-002",
    type: "mcq",
    prompt: "Translate: Ég heiti Sandra",
    options: [
      "My name is Sandra",
      "How are you, Sandra?",
      "I am from Sandra",
      "I know Sandra"
    ],
    correctIndex: 0,  // Index of correct answer (0-based)
    hint: "'Ég heiti' literally means 'I am called'",
    image: null,      // Add URL to image
    audioMp4: null
  }
  // Add more cards...
];
```

### Configuration Options

Find the `CONFIG` object to customize:

```javascript
const CONFIG = {
  lessonId: "icelandic-basics-01",  // Used for localStorage key
  mode: "flashcards",                // Default mode: "flashcards" | "mcq" | "learn"
  showProgress: true,                // Show progress bar
  allowShuffle: true,                // Enable shuffle button
  allowSkip: true,                   // Enable skip button
  autoplayOnFlip: false,             // Auto-play audio when card flips
  maxHeight: "680px",                // Maximum container height
  theme: {
    // Customize colors (must match CSS variables)
    accent: "#f15d4e",
    success: "#21b767",
    // ... more theme options
  }
};
```

## 🎯 JavaScript API

The app exposes a global `window.LWFlashcards` API for programmatic control:

```javascript
// Initialize with custom config and cards
window.LWFlashcards.init(customConfig, customCards);

// Control the app
window.LWFlashcards.setMode('learn');      // Switch modes
window.LWFlashcards.goTo(2);               // Jump to card 3
window.LWFlashcards.shuffle(true);         // Enable shuffle
window.LWFlashcards.next();                // Next card
window.LWFlashcards.previous();            // Previous card
window.LWFlashcards.flipCard();            // Flip current card
window.LWFlashcards.resetProgress();       // Clear localStorage
```

## 📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

**Requirements:**
- ES6+ JavaScript support
- CSS Grid and Flexbox
- CSS 3D Transforms
- localStorage API

## 🔒 Privacy & Data

- All data stored locally in browser's localStorage
- No external API calls (except Google Fonts)
- No user tracking or analytics (unless you add CONFIG.onEvent)
- Works completely offline after first load

## 📊 Progress Tracking

The app automatically saves:
- Current card index
- Mastered card IDs
- Cards marked for review
- Shuffle state

Progress is stored per `lessonId` so you can have multiple lessons without conflicts.

**Clear progress:**
- Click the "Reset" button in the UI
- Or run: `localStorage.removeItem('lwfc_icelandic-basics-01')`

## 🎓 Example Use Cases

1. **Language Learning** - Vocabulary, phrases, grammar
2. **Test Prep** - Flashcards and practice questions
3. **Training Materials** - Company procedures, product knowledge
4. **Study Guides** - Any subject with Q&A format
5. **Onboarding** - New employee or student orientation

## 🐛 Troubleshooting

**Cards not flipping?**
- Make sure JavaScript is enabled
- Check browser console for errors

**Audio not playing?**
- Browsers block autoplay; user must interact first
- Set `autoplayOnFlip: false` if using autoplay

**Progress not saving?**
- Check if localStorage is enabled
- Private browsing may block localStorage

**Styling looks broken?**
- Ensure Google Fonts can load
- Check if CSS is being overridden by parent page

## 📝 Testing Results

All features tested and verified:
- ✅ Card flip animation
- ✅ Hint functionality  
- ✅ MCQ mode with feedback
- ✅ Learn mode with tracking
- ✅ Mode switching
- ✅ Navigation (buttons and keyboard)
- ✅ Shuffle functionality
- ✅ Progress tracking
- ✅ localStorage persistence
- ✅ Responsive layout
- ✅ Accessibility (ARIA labels, keyboard support)

## 📦 File Size

**Total:** ~45 KB (minified would be ~30 KB)
- HTML: ~2 KB
- CSS: ~8 KB  
- JavaScript: ~35 KB

Extremely lightweight and fast loading!

## 🎨 Design Credits

- Design inspired by modern flashcard apps (Quizlet, Anki)
- Dark theme optimized for extended study sessions
- Accent colors chosen for educational context (red for attention, green for success)
- Outfit font for clean, modern typography

## 📄 License

This is a custom implementation for your use. Modify freely to fit your needs!

---

**Need Help?** The code is extensively commented. Search for `==================` in the HTML file to find major sections.

**Happy Learning! 📚✨**
