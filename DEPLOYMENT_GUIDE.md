# 🚀 Vercel Deployment Guide

## ✅ Images are Fixed!

All image paths have been updated to work on Vercel. Images are now in the `public/images/` folder.

## 🎵 To Add Music:

### Option 1: Add to Public Folder (Recommended)

1. Place your music file in the **`public`** folder
2. Rename it to: **`Edd_Sheeran_-_Perfect_(mp3.pm).mp3`**
3. The path is already configured in the code

### Option 2: Use a Different Music File

If you want to use a different file name:

1. Place your MP3 in the `public` folder (e.g., `song.mp3`)
2. Update `src/components/MusicPlayer.tsx` line 29:
   ```typescript
   <source src="/song.mp3" type="audio/mpeg" />
   ```

## 📦 Before Deploying to Vercel:

1. **Make sure music file is in `public` folder**
2. **Run build locally to test:**
   ```bash
   npm run build
   npm run preview
   ```
3. **If everything works, deploy:**
   ```bash
   vercel
   ```

## 🔧 Vercel Configuration:

Vercel should auto-detect your Vite project. If needed, use these settings:

- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

## ✨ What's Already Fixed:

✅ All timeline images → `/images/randomimages/`
✅ All rose gallery images → `/images/flowers/`
✅ All pre-wedding images → `/images/prewedding/`
✅ Music path → `/Edd_Sheeran_-_Perfect_(mp3.pm).mp3`

## 📁 Current Structure:

```
public/
├── images/
│   ├── flowers/          (10 images)
│   ├── randomimages/     (25 images)
│   └── prewedding/
│       ├── traditional/  (27 images)
│       └── bikephotos/   (10 images)
└── Edd_Sheeran_-_Perfect_(mp3.pm).mp3  ← ADD THIS FILE
```

## 🐛 Troubleshooting:

**Images not showing:**
- Check browser console (F12) for 404 errors
- Verify images are in `public/images/` folder
- Clear browser cache (Ctrl + Shift + R)

**Music not playing:**
- Verify music file is in `public` folder
- Check file name matches exactly
- Try opening `https://your-site.vercel.app/Edd_Sheeran_-_Perfect_(mp3.pm).mp3` directly

**Build fails:**
- Run `npm run build` locally first
- Check for TypeScript errors
- Ensure all dependencies are installed

## 🎉 After Deployment:

Your site will be live at: `https://your-project-name.vercel.app`

All images and music will work perfectly! 💕
