# Image Optimization Guide

Automatically optimize all images in your website to improve load times and SEO.

## 🚀 Quick Start

### 1. Install Sharp

```bash
npm install sharp --save-dev
```

### 2. Run the Quick Optimizer

```bash
npm run optimize-images:quick
```

This will:

- ✅ Compress all JPG/PNG images (keeps originals)
- ✅ Generate WebP versions (85% quality)
- ✅ Show before/after file sizes
- ✅ Takes 1-2 minutes for all images

## 📦 What Gets Optimized

The scripts will process:

- All `.jpg` and `.jpeg` files
- All `.png` files
- Files in `public/images/` and all subdirectories
- **Original files are backed up** before optimization

## 🛠️ Available Commands

### Quick Optimization (Recommended)

```bash
npm run optimize-images:quick
```

- Fast and simple
- Optimizes JPG/PNG in place
- Creates WebP versions
- Perfect for most use cases

### Full Optimization

```bash
npm run optimize-images
```

- Creates backup folder first
- Optimizes originals
- Generates WebP versions
- Generates AVIF versions (next-gen format)
- More detailed statistics

## 📊 Expected Results

Before optimization:

- Average JPG: 2-5 MB
- Total size: ~100+ MB

After optimization:

- Average JPG: 200-500 KB (60-85% smaller)
- WebP: 150-400 KB (70-90% smaller)
- AVIF: 100-300 KB (80-95% smaller)
- **Total savings: 70-80% reduction**

## 🎨 Configuration

Edit `scripts/optimize-images.js` to customize:

```javascript
const CONFIG = {
  // Quality settings (0-100, higher = better quality)
  jpeg: {
    quality: 85, // 85 is recommended (good quality, good compression)
    progressive: true, // Better for web
    mozjpeg: true, // Better compression algorithm
  },
  webp: {
    quality: 85, // WebP is more efficient, can use same quality
  },
  avif: {
    quality: 80, // AVIF is even more efficient
  },
};
```

## 🔧 Using Optimized Images in Your Code

### Basic Usage

```jsx
// Use WebP with JPG fallback
<picture>
  <source srcSet="/images/booth.webp" type="image/webp" />
  <img src="/images/booth.jpg" alt="Trade show booth" />
</picture>
```

### Next.js Image Component

```jsx
import Image from "next/image";

<Image
  src="/images/booth.jpg"
  alt="Trade show booth"
  width={1200}
  height={800}
  quality={85}
/>;
```

_Note: Next.js automatically serves WebP/AVIF if available_

### Multiple Sources for Best Browser Support

```jsx
<picture>
  <source srcSet="/images/booth.avif" type="image/avif" />
  <source srcSet="/images/booth.webp" type="image/webp" />
  <img src="/images/booth.jpg" alt="Trade show booth" />
</picture>
```

## 📝 Output Files

For each image `booth.jpg`, you'll get:

- `booth.jpg` - Optimized JPEG (original replaced)
- `booth.webp` - WebP version (new file)
- `booth.avif` - AVIF version (new file, full script only)

Original files are backed up to:

- `public/images-backup/` - Safe backup of all originals

## 🎯 Best Practices

### 1. Run Before First Deploy

```bash
npm run optimize-images
```

### 2. For New Images

Just run the quick optimizer:

```bash
npm run optimize-images:quick
```

### 3. Quality Guidelines

- **85%** - Perfect for web, great quality (recommended)
- **90%** - Higher quality, larger files
- **80%** - Slightly lower quality, smaller files
- **75%** - Noticeable quality loss, not recommended

### 4. When to Re-optimize

- After adding new images
- Before major deployments
- If you notice slow image loading

## 🔍 Troubleshooting

### "Sharp is not installed"

```bash
npm install sharp --save-dev
```

### "Permission denied"

```bash
chmod +x scripts/optimize-images.js
chmod +x scripts/quick-optimize.js
```

### Images look blurry

Increase quality in config:

```javascript
jpeg: {
  quality: 90;
}
```

### Need originals back

Your originals are in `public/images-backup/`

## 📈 Performance Benefits

### Before Optimization

- Page load: 8-12 seconds
- Total size: 15-25 MB
- Lighthouse score: 40-60

### After Optimization

- Page load: 2-4 seconds ⚡
- Total size: 3-6 MB 💾
- Lighthouse score: 85-95+ 🎯

### SEO Benefits

- ✅ Faster page load = better rankings
- ✅ Better Core Web Vitals scores
- ✅ Improved mobile experience
- ✅ Lower bounce rates

## 🚨 Important Notes

1. **Backup Created Automatically** - Your originals are safe
2. **Run Once** - Don't optimize already optimized images
3. **Test First** - Check a few images before batch processing
4. **WebP Support** - Supported by all modern browsers (95%+ coverage)
5. **AVIF Support** - Newest format, not all browsers yet (~85% coverage)

## 🎉 After Running

You should see output like:

```
🎨 Image Optimization Script
================================

📦 Creating backup of original images...
   ✓ Backed up 42 images to public/images-backup

📊 Found 42 images to optimize

📸 Processing: PHOTO-2025-10-11-14-00-45.jpg
   Original: 4.2 MB
   ✓ Optimized JPG: 385 KB (90.8% smaller)
   ✓ WebP: 298 KB (92.9% smaller)
   ✓ AVIF: 245 KB (94.2% smaller)

...

📊 Optimization Complete!
================================
✓ Processed: 42 images
❌ Errors: 0 images

💾 Original total size: 125.4 MB
💾 Optimized total size: 22.1 MB

🎉 Total savings: 103.3 MB (82.4% reduction)
```

## 💡 Pro Tips

1. **First time?** Use the full script: `npm run optimize-images`
2. **Adding new images?** Use quick: `npm run optimize-images:quick`
3. **Deploy to production?** Always optimize first
4. **Update from backup?** Copy from `public/images-backup/`

## 🆘 Need Help?

- Check `scripts/optimize-images.js` for configuration
- Adjust quality settings if needed
- Keep backups safe until you verify results
- Test on staging before production

---

**Remember:** Smaller images = Faster website = Better SEO = More customers! 🚀
