# 💝 Surprise Valentine Proposal Website

A beautiful, romantic single-page React website built with Vite for a special Valentine's Day proposal.

## ✨ Features

- **SurpriseBox Component**: Interactive gift box landing screen with smooth open animation
- **JourneyTimeline Component**: Vertical timeline showcasing your relationship milestones
- **CountdownTimer Component**: Live countdown to Valentine's Day 2026
- **FinalQuestion Component**: The big question with confetti celebration
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Fade-ins, scroll reveals, floating hearts, and confetti effects
- **Clean Architecture**: Component-based structure for easy customization

## 🚀 Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**: Navigate to `http://localhost:5173`

## 🎨 Customization Guide

### Update Timeline Data

Edit `src/components/JourneyTimeline.tsx` and modify the `timelineData` array:

```typescript
const timelineData: TimelineItem[] = [
  {
    date: "12 Jan 2024",
    title: "The Day We First Met",
    text: "Your romantic caption here",
    image: "your-image-url-or-path"
  },
  // Add more timeline items...
];
```

### Change Countdown Date

Edit `src/components/CountdownTimer.tsx` and update the target date:

```typescript
const targetDate = new Date('2026-02-14T00:00:00').getTime();
```

### Customize Colors

The color palette uses soft romantic pastels:
- Primary Pink: `#ff6b9d`
- Light Pink: `#ffc0cb`
- Accent Pink: `#ff8fab`
- Background: `#ffe4e9`

Update these in the respective CSS files to match your preference.

### Add Custom Images

1. Place your images in `src/assets/images/`
2. Update the image paths in `JourneyTimeline.tsx`
3. Or use your own URLs (currently using Unsplash placeholders)

### Add Background Music (Optional)

1. Place your music file in `src/assets/music/`
2. Add audio controls in `App.tsx`:

```typescript
const audioRef = useRef<HTMLAudioElement>(null);

// In JSX:
<audio ref={audioRef} loop>
  <source src="/src/assets/music/romantic-song.mp3" type="audio/mpeg" />
</audio>
```

## 📁 Project Structure

```
src/
├── assets/
│   ├── images/          # Custom images
│   └── music/           # Background music (optional)
├── components/
│   ├── SurpriseBox.tsx
│   ├── SurpriseBox.css
│   ├── JourneyTimeline.tsx
│   ├── JourneyTimeline.css
│   ├── CountdownTimer.tsx
│   ├── CountdownTimer.css
│   ├── FinalQuestion.tsx
│   └── FinalQuestion.css
├── App.tsx
├── App.css
├── main.tsx
└── index.css
```

## 🎯 Component Flow

1. **SurpriseBox** → User clicks gift box
2. **JourneyTimeline** → Scrolls to show relationship timeline
3. **CountdownTimer** → Shows countdown to Valentine's Day
4. **FinalQuestion** → Reveals when countdown completes (or immediately for testing)

## 💡 Tips

- **Test the countdown**: To see the final question immediately, set the countdown date to a past date
- **Customize text**: All romantic messages are easily editable in each component
- **Add more timeline items**: Simply add objects to the `timelineData` array
- **Change animations**: Modify CSS keyframes in respective `.css` files

## 🌟 Technologies Used

- React 19
- TypeScript
- Vite
- CSS3 (with animations)
- No heavy external dependencies

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile phones (320px+)
- Tablets (768px+)
- Laptops and desktops (1024px+)

## 🎉 Deployment

Build for production:

```bash
npm run build
```

The `dist` folder will contain your production-ready files.

Deploy to:
- Vercel: `vercel deploy`
- Netlify: Drag and drop the `dist` folder
- GitHub Pages: Use `gh-pages` package

## ❤️ Made with Love

This website is designed to create a memorable Valentine's Day proposal experience. Customize it to tell your unique love story!

---

**Good luck with your proposal! 💕**
