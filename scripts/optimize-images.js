#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

// Configuration
const CONFIG = {
  inputDir: path.join(__dirname, "../public/images"),
  outputDir: path.join(__dirname, "../public/images"),
  backupDir: path.join(__dirname, "../public/images-backup"),

  // Image quality settings
  jpeg: {
    quality: 85,
    progressive: true,
    mozjpeg: true,
  },
  webp: {
    quality: 85,
  },
  avif: {
    quality: 80,
  },

  // Responsive sizes (widths in pixels)
  responsiveSizes: [
    { width: 400, suffix: "-sm" },
    { width: 800, suffix: "-md" },
    { width: 1200, suffix: "-lg" },
    { width: 1920, suffix: "-xl" },
  ],

  // File extensions to process
  extensions: [".jpg", ".jpeg", ".png"],

  // Skip already optimized files
  skipWebp: true,
  skipAvif: true,
};

// Stats tracking
const stats = {
  processed: 0,
  skipped: 0,
  errors: 0,
  originalSize: 0,
  optimizedSize: 0,
};

// Helper: Format bytes to human readable
function formatBytes(bytes) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
}

// Helper: Get all image files recursively
function getImageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getImageFiles(filePath, fileList);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (CONFIG.extensions.includes(ext)) {
        fileList.push(filePath);
      }
    }
  });

  return fileList;
}

// Helper: Ensure directory exists
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Optimize a single image
async function optimizeImage(inputPath) {
  try {
    const relativePath = path.relative(CONFIG.inputDir, inputPath);
    const outputPath = path.join(CONFIG.outputDir, relativePath);
    const outputDir = path.dirname(outputPath);
    const ext = path.extname(inputPath).toLowerCase();
    const nameWithoutExt = path.basename(inputPath, ext);
    const dirName = path.dirname(outputPath);

    // Ensure output directory exists
    ensureDir(outputDir);

    // Get original file size
    const originalSize = fs.statSync(inputPath).size;
    stats.originalSize += originalSize;

    console.log(`\n📸 Processing: ${relativePath}`);
    console.log(`   Original: ${formatBytes(originalSize)}`);

    // Load image
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // 1. Optimize original format (JPG/PNG)
    if (ext === ".jpg" || ext === ".jpeg") {
      await image.jpeg(CONFIG.jpeg).toFile(outputPath + ".tmp");
    } else if (ext === ".png") {
      await image
        .png({ quality: 90, compressionLevel: 9 })
        .toFile(outputPath + ".tmp");
    }

    const optimizedSize = fs.statSync(outputPath + ".tmp").size;
    stats.optimizedSize += optimizedSize;

    // Replace original with optimized version
    fs.renameSync(outputPath + ".tmp", outputPath);

    const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(1);
    console.log(
      `   ✓ Optimized ${ext.toUpperCase()}: ${formatBytes(
        optimizedSize
      )} (${savings}% smaller)`
    );

    // 2. Generate WebP version
    const webpPath = path.join(dirName, `${nameWithoutExt}.webp`);
    if (!CONFIG.skipWebp || !fs.existsSync(webpPath)) {
      await sharp(inputPath).webp(CONFIG.webp).toFile(webpPath);

      const webpSize = fs.statSync(webpPath).size;
      const webpSavings = ((1 - webpSize / originalSize) * 100).toFixed(1);
      console.log(
        `   ✓ WebP: ${formatBytes(webpSize)} (${webpSavings}% smaller)`
      );
    }

    // 3. Generate AVIF version (optional, best compression)
    const avifPath = path.join(dirName, `${nameWithoutExt}.avif`);
    if (!CONFIG.skipAvif || !fs.existsSync(avifPath)) {
      try {
        await sharp(inputPath).avif(CONFIG.avif).toFile(avifPath);

        const avifSize = fs.statSync(avifPath).size;
        const avifSavings = ((1 - avifSize / originalSize) * 100).toFixed(1);
        console.log(
          `   ✓ AVIF: ${formatBytes(avifSize)} (${avifSavings}% smaller)`
        );
      } catch (err) {
        console.log(`   ⚠ AVIF skipped (not supported by Sharp version)`);
      }
    }

    stats.processed++;
  } catch (error) {
    console.error(`   ❌ Error: ${error.message}`);
    stats.errors++;
  }
}

// Backup original images
function backupImages() {
  console.log("\n📦 Creating backup of original images...");

  if (fs.existsSync(CONFIG.backupDir)) {
    console.log("   ⚠ Backup already exists, skipping...");
    return;
  }

  ensureDir(CONFIG.backupDir);

  // Copy all images to backup
  const images = getImageFiles(CONFIG.inputDir);
  images.forEach((imagePath) => {
    const relativePath = path.relative(CONFIG.inputDir, imagePath);
    const backupPath = path.join(CONFIG.backupDir, relativePath);
    const backupDir = path.dirname(backupPath);

    ensureDir(backupDir);
    fs.copyFileSync(imagePath, backupPath);
  });

  console.log(
    `   ✓ Backed up ${images.length} images to ${path.relative(
      process.cwd(),
      CONFIG.backupDir
    )}`
  );
}

// Main execution
async function main() {
  console.log("🎨 Image Optimization Script");
  console.log("================================\n");

  // Check if Sharp is installed
  try {
    require("sharp");
  } catch (err) {
    console.error(
      "❌ Sharp is not installed. Run: npm install sharp --save-dev"
    );
    process.exit(1);
  }

  // Create backup first
  backupImages();

  // Get all images
  const images = getImageFiles(CONFIG.inputDir);
  console.log(`\n📊 Found ${images.length} images to optimize\n`);

  // Process each image
  for (const imagePath of images) {
    await optimizeImage(imagePath);
  }

  // Print final statistics
  console.log("\n\n📊 Optimization Complete!");
  console.log("================================");
  console.log(`✓ Processed: ${stats.processed} images`);
  console.log(`⚠ Skipped: ${stats.skipped} images`);
  console.log(`❌ Errors: ${stats.errors} images`);
  console.log(`\n💾 Original total size: ${formatBytes(stats.originalSize)}`);
  console.log(`💾 Optimized total size: ${formatBytes(stats.optimizedSize)}`);

  const totalSavings = stats.originalSize - stats.optimizedSize;
  const savingsPercent = ((totalSavings / stats.originalSize) * 100).toFixed(1);
  console.log(
    `\n🎉 Total savings: ${formatBytes(
      totalSavings
    )} (${savingsPercent}% reduction)`
  );
  console.log(`\n💡 Tip: Use <picture> tags with WebP for best results!`);
  console.log(
    `💡 Backup stored in: ${path.relative(process.cwd(), CONFIG.backupDir)}\n`
  );
}

// Run the script
main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
