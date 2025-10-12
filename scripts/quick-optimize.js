#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

// Simple optimization script - just optimizes in place
const imagesDir = path.join(__dirname, "../public/images");

// Get all image files recursively
function getImageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getImageFiles(filePath, fileList);
    } else {
      const ext = path.extname(file).toLowerCase();
      if ([".jpg", ".jpeg", ".png"].includes(ext)) {
        fileList.push(filePath);
      }
    }
  });

  return fileList;
}

function formatBytes(bytes) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
}

async function optimizeImage(imagePath) {
  try {
    const originalSize = fs.statSync(imagePath).size;
    const ext = path.extname(imagePath).toLowerCase();
    const tempPath = imagePath + ".tmp";
    const webpPath = imagePath.replace(/\.(jpg|jpeg|png)$/i, ".webp");

    console.log(`Optimizing: ${path.relative(process.cwd(), imagePath)}`);

    // Optimize original
    if (ext === ".jpg" || ext === ".jpeg") {
      await sharp(imagePath)
        .jpeg({ quality: 85, progressive: true, mozjpeg: true })
        .toFile(tempPath);
    } else if (ext === ".png") {
      await sharp(imagePath)
        .png({ quality: 90, compressionLevel: 9 })
        .toFile(tempPath);
    }

    const optimizedSize = fs.statSync(tempPath).size;
    fs.renameSync(tempPath, imagePath);

    // Create WebP version
    await sharp(imagePath).webp({ quality: 85 }).toFile(webpPath);

    const webpSize = fs.statSync(webpPath).size;
    const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(1);

    console.log(
      `  ✓ ${formatBytes(originalSize)} → ${formatBytes(
        optimizedSize
      )} (${savings}% smaller)`
    );
    console.log(`  ✓ WebP: ${formatBytes(webpSize)}`);

    return { original: originalSize, optimized: optimizedSize };
  } catch (error) {
    console.error(`  ❌ Error: ${error.message}`);
    return { original: 0, optimized: 0 };
  }
}

async function main() {
  console.log("🎨 Quick Image Optimizer\n");

  const images = getImageFiles(imagesDir);
  console.log(`Found ${images.length} images\n`);

  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const img of images) {
    const result = await optimizeImage(img);
    totalOriginal += result.original;
    totalOptimized += result.optimized;
  }

  console.log(
    `\n🎉 Done! Saved ${formatBytes(totalOriginal - totalOptimized)} total\n`
  );
}

main().catch(console.error);
