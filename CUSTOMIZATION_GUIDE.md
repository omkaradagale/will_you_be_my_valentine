# 🎨 Quick Customization Guide

## 5-Minute Setup

### 1. Update Your Timeline Story

Open `src/components/JourneyTimeline.tsx` and edit lines 8-42:

```typescript
const timelineData: TimelineItem[] = [
  {
    date: "Your Date",
    title: "Your Title",
    text: "Your romantic message",
    image: "your-image-url"
  },
  // Add as many moments as you want!
];
```

**Image Options:**
- Use Unsplash URLs (already included as placeholders)
- Upload your own images to `src/assets/images/` and use: `"/src/assets/images/photo.jpg"`
- Use any online image URL

### 2. Change the Countdown Date

Open `src/components/CountdownTimer.tsx` and edit line 18:

```typescript
const targetDate = new Date('2026-02-14T00:00:00').getTime();
```

Change to your special date!

**To test immediately:** Set a past date like `'2024-01-01T00:00:00'`

### 3. Customize the Final Question

Open `src/components/FinalQuestion.tsx` and edit:

**Line 42-44** - The lead-up text:
```typescript
<h1 className="question-title">
  From the first day to every day I hope for...
</h1>
```

**Line 46-48** - The main question:
```typescript
<h2 className="main-question">
  Will you be my Valentine? ❤️
</h2>
```

**Line 52-58** - Button text:
```typescript
<button className="answer-button yes-button" onClick={handleAnswer}>
  YES 💘
</button>
<button className="answer-button always-button" onClick={handleAnswer}>
  ALWAYS YOU ❤️
</button>
```

**Line 66-71** - Success message:
```typescript
<h1 className="confirmation-title">
  You've made me the happiest person alive!
</h1>
<p className="confirmation-message">
  Every day with you is a gift. Thank you for being mine. ❤️
</p>
```

### 4. Change the Opening Message

Open `src/components/SurpriseBox.tsx` and edit line 28:

```typescript
<p className="surprise-text">I made something just for you...</p>
```

### 5. Adjust Colors (Optional)

All components use these main colors:
- `#ff6b9d` - Primary pink
- `#ffc0cb` - Light pink
- `#ff8fab` - Accent pink
- `#ffe4e9` - Background pink

Find and replace these hex codes in the CSS files to change the entire color scheme!

## 🎵 Add Background Music (Optional)

1. Get a romantic song (MP3 format)
2. Place it in `src/assets/music/romantic-song.mp3`
3. Open `src/App.tsx` and add after line 1:

```typescript
import { useState, useRef, useEffect } from 'react';
```

4. Add after line 9:

```typescript
const audioRef = useRef<HTMLAudioElement>(null);
const [isPlaying, setIsPlaying] = useState(false);

const toggleMusic = () => {
  if (audioRef.current) {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }
};
```

5. Add before the closing `</div>` tag at the end:

```typescript
<audio ref={audioRef} loop>
  <source src="/src/assets/music/romantic-song.mp3" type="audio/mpeg" />
</audio>
<button 
  onClick={toggleMusic}
  style={{
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    padding: '15px',
    borderRadius: '50%',
    border: 'none',
    background: '#ff6b9d',
    color: 'white',
    fontSize: '1.5rem',
    cursor: 'pointer',
    zIndex: 1000
  }}
>
  {isPlaying ? '🔊' : '🔇'}
</button>
```

## 🚀 Testing Your Changes

After making changes:
1. Save all files
2. The browser will auto-refresh (hot reload)
3. Check your changes instantly!

## 📱 Mobile Testing

Open the dev server URL on your phone:
1. Find your computer's local IP (run `ipconfig` in terminal)
2. Start dev server with: `npm run dev -- --host`
3. Visit `http://YOUR-IP:5173` on your phone

## 🎉 Ready to Deploy?

When everything looks perfect:

```bash
npm run build
```

Then deploy the `dist` folder to:
- **Vercel** (easiest): Install Vercel CLI and run `vercel`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use the `gh-pages` package

---

**Need help?** Check `VALENTINE_README.md` for more details!
