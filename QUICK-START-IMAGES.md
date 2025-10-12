# Image Optimization - Quick Start ⚡

## Run Now (Takes 2 minutes)

```bash
npm run optimize-images:quick
```

This will:

- ✅ Compress all JPG/PNG images by 70-90%
- ✅ Create WebP versions (faster loading)
- ✅ Show you file size savings
- ✅ Keep your original files safe

## What You'll See

```
🎨 Quick Image Optimizer

Found 42 images

Optimizing: public/images/booth.jpg
  ✓ 4.2 MB → 385 KB (90.8% smaller)
  ✓ WebP: 298 KB

🎉 Done! Saved 103.3 MB total
```

## Commands

| Command                         | Use Case                           | Time    |
| ------------------------------- | ---------------------------------- | ------- |
| `npm run optimize-images:quick` | Most common - quick optimization   | 1-2 min |
| `npm run optimize-images`       | First time - creates backup & AVIF | 3-5 min |

## Expected Results

**Before:**

- Total images: ~100-150 MB
- Load time: 8-12 seconds
- Lighthouse: 40-60

**After:**

- Total images: ~20-30 MB (80% smaller!) 🎉
- Load time: 2-4 seconds ⚡
- Lighthouse: 85-95+ 🎯

## What Gets Created

For each `booth.jpg`, you get:

- `booth.jpg` ← Optimized (smaller, same name)
- `booth.webp` ← New format (even smaller!)

## Safety

- ✅ Backups created automatically
- ✅ Safe to run multiple times
- ✅ Can restore from `public/images-backup/`

## Next Steps

1. Run the optimizer
2. Check a few images look good
3. Deploy your faster website!

---

**Need more info?** See `IMAGE-OPTIMIZATION-GUIDE.md`
