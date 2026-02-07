# 🌹 How to Add Your Rose Day Images

## Quick Steps:

### 1. Add Your Images

Place your flower images in the `src/assets/images/` folder with these names:
- `rose1.jpg`
- `rose2.jpg`
- `rose3.jpg`
- `rose4.jpg`
- etc.

**Supported formats:** `.jpg`, `.jpeg`, `.png`, `.webp`

### 2. Update the Gallery

Open `src/components/RoseDayGallery.tsx` and edit the `roseImages` array (lines 8-28):

```typescript
const roseImages: RoseImage[] = [
  {
    src: '/src/assets/images/rose1.jpg',
    caption: 'The first roses I gave you',
    date: 'Rose Day 2024'  // Optional
  },
  {
    src: '/src/assets/images/rose2.jpg',
    caption: 'Every petal holds a memory',
    date: 'February 7, 2024'
  },
  {
    src: '/src/assets/images/rose3.jpg',
    caption: 'Beautiful flowers for my beautiful love',
    date: ''  // Leave empty if no date
  },
  // Add as many as you want!
];
```

### 3. Customize the Text

**Header (line 75-77):**
```typescript
<h2 className="rose-title">Rose Day Memories</h2>
<p className="rose-subtitle">Every flower I gave you, every moment we shared</p>
```

**Footer message (line 109-111):**
```typescript
<p className="rose-message">
  Just like these roses, my love for you blooms more beautiful each day 🌹💕
</p>
```

## Features:

✨ **Responsive grid layout** - Automatically adjusts for mobile/desktop
✨ **Lightbox viewer** - Click any image to view full size
✨ **Navigation** - Use arrows to browse through images in lightbox
✨ **Smooth animations** - Images fade in as you scroll
✨ **Hover effects** - Beautiful zoom effect on hover

## Tips:

- **Image size:** For best results, use images around 800x600px or larger
- **Add more images:** Just add more objects to the `roseImages` array
- **Remove date:** Leave `date: ''` empty if you don't want to show a date
- **Change order:** Rearrange the array items to change display order

## Example with More Images:

```typescript
const roseImages: RoseImage[] = [
  {
    src: '/src/assets/images/rose1.jpg',
    caption: 'Red roses for my love',
    date: 'Rose Day 2024'
  },
  {
    src: '/src/assets/images/rose2.jpg',
    caption: 'Pink roses that remind me of you',
    date: 'February 7, 2024'
  },
  {
    src: '/src/assets/images/rose3.jpg',
    caption: 'A bouquet of memories',
    date: ''
  },
  {
    src: '/src/assets/images/rose4.jpg',
    caption: 'Every rose tells our story',
    date: ''
  },
  {
    src: '/src/assets/images/rose5.jpg',
    caption: 'Forever blooming love',
    date: ''
  },
];
```

---

**The gallery appears between the timeline and the final question!** 🌹💕
