# 📸 Venue Images Guide

## Overview

All venue pages are now ready to display real venue images. The pages will use fallback booth images until you add the actual venue photos.

---

## 🎯 Images You Need

Download **10 images total** (2 per venue) and save them in `/public/images/venues/`

### Required Images:

#### 1. Las Vegas Convention Center (LVCC)

- `lvcc-exterior.jpg` - Building exterior, preferably showing signage
- `lvcc-interior.jpg` - Large exhibition hall with booths

#### 2. Mandalay Bay Convention Center

- `mandalay-bay-exterior.jpg` - Convention center entrance/exterior
- `mandalay-bay-interior.jpg` - Show floor or exhibition space

#### 3. Venetian Expo (Sands Expo)

- `venetian-expo-exterior.jpg` - Building exterior
- `venetian-expo-interior.jpg` - Exhibition hall interior

#### 4. Caesars Forum

- `caesars-forum-exterior.jpg` - Modern building exterior
- `caesars-forum-interior.jpg` - Ballroom or event space

#### 5. World Market Center

- `world-market-center-exterior.jpg` - Building complex
- `world-market-center-interior.jpg` - Showroom or exhibition space

---

## 🔍 Where to Find Images

### Option 1: Stock Photo Sites (Best Quality, Paid)

**Shutterstock** - https://www.shutterstock.com/

- Search: "Las Vegas Convention Center exterior"
- Search: "LVCC exhibition hall"
- Search: "Mandalay Bay convention center"
- Search: "Venetian Expo Las Vegas"
- Search: "Caesars Forum Las Vegas"

**Adobe Stock** - https://stock.adobe.com/

- Similar search terms as above
- High resolution commercial license

**iStock** - https://www.istockphoto.com/

- Professional venue photography
- Royalty-free licensing

### Option 2: Free Stock Photos (Limited Selection)

**Unsplash** - https://unsplash.com/

- Search: "Las Vegas convention center"
- Search: "Las Vegas trade show"
- Free high-resolution images

**Pexels** - https://www.pexels.com/

- Search venue names
- Free commercial use

### Option 3: AI Generation (Recommended!)

Use AI image generators with these prompts:

**For Exteriors:**

```
"Professional architectural photograph of [VENUE NAME] exterior in Las Vegas,
modern convention center building, clear blue sky, daytime, wide angle,
commercial real estate photography style, 8K resolution"
```

**For Interiors:**

```
"Professional photograph of [VENUE NAME] exhibition hall interior,
large convention center space, trade show booths setup, bright lighting,
high ceilings, commercial photography style, wide angle"
```

**AI Tools:**

- Midjourney
- DALL-E 3
- Stable Diffusion
- Leonardo AI

### Option 4: Official Venue Press Kits

Contact venues directly for official photos:

- **LVCC**: Las Vegas Convention and Visitors Authority - lvcva.com/press
- **Mandalay Bay**: MGM Resorts - mandalaybay.mgmresorts.com/en/media
- **Venetian Expo**: venetianexpo.com - contact media relations
- **Caesars Forum**: caesarsforum.com - request press materials
- **World Market Center**: wmclv.com - media inquiries

---

## 📋 Step-by-Step Instructions

### Step 1: Download Images

1. Choose your preferred source above
2. Download 10 images (2 per venue)
3. Rename them according to the list above
4. Recommended size: **1920x1280 pixels** (3:2 aspect ratio)
5. Format: JPG or PNG

### Step 2: Add to Project

1. Open your project folder
2. Navigate to `/public/images/venues/`
3. Drop all 10 images into this folder
4. Verify file names match exactly:
   - `lvcc-exterior.jpg`
   - `lvcc-interior.jpg`
   - `mandalay-bay-exterior.jpg`
   - `mandalay-bay-interior.jpg`
   - `venetian-expo-exterior.jpg`
   - `venetian-expo-interior.jpg`
   - `caesars-forum-exterior.jpg`
   - `caesars-forum-interior.jpg`
   - `world-market-center-exterior.jpg`
   - `world-market-center-interior.jpg`

### Step 3: Verify

1. Start your dev server: `npm run dev`
2. Visit: http://localhost:3000/venues
3. Check each venue page

---

## ✅ What's Already Done

All venue pages are **completely set up** with:

- ✅ Hero sections ready for images
- ✅ Detailed venue specifications
- ✅ Service descriptions
- ✅ Quick facts and popular shows
- ✅ Call-to-action buttons
- ✅ Fallback images (uses your booth photos if venue images missing)
- ✅ Error handling (automatically uses fallback if image not found)
- ✅ Responsive design
- ✅ Professional layouts

---

## 🎨 Image Specifications

### Preferred Specs:

- **Resolution**: 1920 x 1280 px minimum
- **Aspect Ratio**: 3:2 for exteriors, 16:9 for interiors
- **Format**: JPG (optimized for web)
- **File Size**: Under 500KB each (optimize for web)
- **Quality**: High-resolution, professional photography
- **Style**: Bright, modern, professional

### What Makes Good Venue Photos:

- ✅ Clear, bright lighting
- ✅ Shows the scale and size
- ✅ Professional/commercial quality
- ✅ Recognizable venue features
- ✅ No visible branding conflicts
- ✅ Clean, uncluttered composition

---

## 🔄 Fallback Behavior

**Don't worry if you don't have venue images yet!**

The pages are smart:

- If venue image is missing → shows booth photo instead
- Site works perfectly with or without venue images
- No broken images or errors
- Smooth user experience

---

## 💡 Quick Tips

1. **Start with AI generation** - Fastest option for all 10 images
2. **Use stock photos** - Best for authentic venue appearance
3. **One venue at a time** - Add images gradually as you find them
4. **Optimize images** - Use https://tinypng.com/ to compress
5. **Test on mobile** - Check how images look on different screens

---

## 📝 Checklist

- [ ] Create `/public/images/venues/` folder
- [ ] Download/generate 10 venue images
- [ ] Rename files correctly
- [ ] Add to venues folder
- [ ] Test in browser
- [ ] Optimize file sizes
- [ ] Verify mobile display

---

## 🆘 Need Help?

If you have issues:

1. Check file names match exactly (case-sensitive)
2. Verify images are in correct folder
3. Clear browser cache
4. Restart dev server
5. Check browser console for errors

The fallback images will display if anything is wrong, so the site always looks good!

---

## 🎯 Ready to Go!

Visit your venue pages now:

- http://localhost:3000/venues/las-vegas-convention-center
- http://localhost:3000/venues/mandalay-bay-convention-center
- http://localhost:3000/venues/venetian-expo-sands
- http://localhost:3000/venues/caesars-forum
- http://localhost:3000/venues/world-market-center

They all have complete content and layouts - just add the images when ready!
