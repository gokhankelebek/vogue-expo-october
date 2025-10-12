# Image Optimization Scripts

Two powerful scripts to optimize your website images automatically.

## 🚀 Quick Start

```bash
# Quick optimization (recommended for most cases)
npm run optimize-images:quick

# Full optimization with backup and multiple formats
npm run optimize-images
```

## 📁 Scripts

### `quick-optimize.js` ⚡

**Best for:** Day-to-day use, new images

**What it does:**

- Compresses JPG/PNG files in place
- Creates WebP versions
- Fast execution (1-2 minutes)
- Shows file size savings

**Example output:**

```
🎨 Quick Image Optimizer

Found 42 images

Optimizing: public/images/booth.jpg
  ✓ 4.2 MB → 385 KB (90.8% smaller)
  ✓ WebP: 298 KB

🎉 Done! Saved 103.3 MB total
```

### `optimize-images.js` 🎯

**Best for:** First-time optimization, major updates

**What it does:**

- Creates backup folder first (`public/images-backup/`)
- Optimizes JPG/PNG files
- Generates WebP versions
- Generates AVIF versions (next-gen format)
- Detailed statistics and reporting

**Example output:**

```
🎨 Image Optimization Script
================================

📦 Creating backup of original images...
   ✓ Backed up 42 images to public/images-backup

📸 Processing: booth.jpg
   Original: 4.2 MB
   ✓ Optimized JPG: 385 KB (90.8% smaller)
   ✓ WebP: 298 KB (92.9% smaller)
   ✓ AVIF: 245 KB (94.2% smaller)

📊 Optimization Complete!
✓ Processed: 42 images
💾 Total savings: 103.3 MB (82.4% reduction)
```

## ⚙️ Configuration

Edit settings in `optimize-images.js`:

```javascript
const CONFIG = {
  // Quality settings (0-100)
  jpeg: {
    quality: 85, // Recommended: 85
    progressive: true,
    mozjpeg: true,
  },
  webp: {
    quality: 85, // Recommended: 85
  },
  avif: {
    quality: 80, // Recommended: 80
  },
};
```

## 🎯 When to Use Each

### Use `quick-optimize.js` when:

- Adding a few new images
- Need quick results
- Already have backups
- Regular maintenance

### Use `optimize-images.js` when:

- First time optimizing
- Need backup of originals
- Want AVIF format
- Major image updates

## 📊 Expected Results

| Format | Original | Optimized | Savings |
| ------ | -------- | --------- | ------- |
| JPG    | 4.2 MB   | 385 KB    | 90.8%   |
| WebP   | -        | 298 KB    | 92.9%   |
| AVIF   | -        | 245 KB    | 94.2%   |

**Total project savings: 70-85% size reduction**

## 🔧 Supported Formats

### Input (will be optimized):

- `.jpg` / `.jpeg`
- `.png`

### Output (generated):

- Optimized JPG/PNG (replaces original)
- `.webp` (modern format, 25-35% smaller)
- `.avif` (newest format, 40-50% smaller) _full script only_

## 💡 Pro Tips

1. **First time?** → Use full script
2. **Regular updates?** → Use quick script
3. **Always test** → Check a few images first
4. **Keep backups** → Until you verify quality

## 📝 Directory Structure

```
scripts/
├── optimize-images.js      # Full optimization with backup
├── quick-optimize.js       # Quick optimization
└── README.md              # This file

public/
├── images/                # Your images (will be optimized)
└── images-backup/         # Backup folder (created by full script)
```

## 🚨 Important

- ✅ **Backups created automatically** (full script)
- ✅ **Safe to run multiple times** on new images
- ⚠️ **Don't optimize twice** - diminishing returns
- ⚠️ **Check quality** before deleting backups

## 🆘 Troubleshooting

**Script won't run?**

```bash
npm install sharp --save-dev
chmod +x scripts/*.js
```

**Images look blurry?**
Increase quality in config: `quality: 90`

**Need originals?**
Check `public/images-backup/` folder

## 📚 More Info

See `IMAGE-OPTIMIZATION-GUIDE.md` for:

- Detailed usage instructions
- Browser compatibility info
- Code examples for using optimized images
- Performance benchmarks
- SEO benefits

---

**Quick Reference:**

```bash
npm run optimize-images:quick    # Fast optimization
npm run optimize-images          # Full optimization with backup
```
