/**
 * Fetch CC0 / public-domain images for each show via the Openverse API,
 * normalize them to 1200x900 JPEGs in public/images/shows/, and rewrite the
 * `image:` field of each show in content/shows.ts.
 *
 * License filter: cc0,pdm => commercial use OK, NO attribution required.
 * Run: node scripts/fetch-show-images.js
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT = path.join(__dirname, "..");
const OUT_DIR = path.join(ROOT, "public", "images", "shows");
const SHOWS_TS = path.join(ROOT, "content", "shows.ts");

// slug -> search query (industry-themed, brand-safe)
const QUERIES = {
  ces: "technology electronics gadgets",
  "nab-show": "television broadcast camera studio",
  "sema-show": "custom sports car auto",
  "world-of-concrete": "construction site machinery",
  mjbizcon: "cannabis leaf plant",
  "jck-las-vegas": "jewelry diamond rings",
  "asd-market-week": "retail store shopping products",
  "cosmoprof-north-america": "cosmetics makeup beauty products",
  g2e: "casino gaming slot machine",
  "imex-america": "business conference meeting",
  "las-vegas-market": "modern furniture interior",
  "isc-west": "security camera surveillance",
  money2020: "finance technology payment",
  "wswa-access-live": "wine bottles glasses",
  "hd-expo": "hotel lobby interior design",
  "magic-las-vegas": "fashion clothing apparel",
  "bar-and-restaurant-expo": "cocktail bar drinks",
  "black-hat-usa": "cyber security computer code",
  "conexpo-con-agg": "excavator heavy construction equipment",
  "pack-expo-las-vegas": "factory packaging conveyor",
};

const UA = "VegasVogueExpo/1.0 (+https://www.vegasvogueexpo.com)";

async function searchOpenverse(query) {
  const url =
    "https://api.openverse.org/v1/images/?" +
    new URLSearchParams({
      q: query,
      license: "cc0,pdm",
      mature: "false",
      page_size: "20",
    });
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`Openverse ${res.status}`);
  const data = await res.json();
  return data.results || [];
}

function pickBest(results) {
  const usable = results.filter(
    (r) => r.url && /\.(jpe?g|png)(\?|$)/i.test(r.url)
  );
  // prefer large landscape images
  const landscape = usable
    .filter((r) => r.width && r.height && r.width >= 1000 && r.width >= r.height)
    .sort((a, b) => b.width - a.width);
  return landscape[0] || usable[0] || null;
}

async function download(url) {
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`download ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

async function run() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const ok = {};
  const report = [];

  for (const [slug, query] of Object.entries(QUERIES)) {
    try {
      const results = await searchOpenverse(query);
      const pick = pickBest(results);
      if (!pick) throw new Error("no usable result");
      const raw = await download(pick.url);
      const outPath = path.join(OUT_DIR, `${slug}.jpg`);
      await sharp(raw)
        .resize(1200, 900, { fit: "cover", position: "attention" })
        .jpeg({ quality: 80, mozjpeg: true })
        .toFile(outPath);
      ok[slug] = true;
      report.push(
        `OK   ${slug.padEnd(26)} ${pick.license}  ${pick.source || ""}  ${pick.url}`
      );
    } catch (e) {
      report.push(`FAIL ${slug.padEnd(26)} ${e.message}`);
    }
  }

  // Rewrite content/shows.ts image fields for successful slugs.
  const lines = fs.readFileSync(SHOWS_TS, "utf8").split("\n");
  let current = null;
  let rewrites = 0;
  for (let i = 0; i < lines.length; i++) {
    const slugMatch = lines[i].match(/^\s*slug:\s*"([^"]+)"/);
    if (slugMatch) {
      current = slugMatch[1];
      continue;
    }
    if (current && /^\s*image:\s*"/.test(lines[i])) {
      if (ok[current]) {
        lines[i] = lines[i].replace(
          /image:\s*"[^"]*"/,
          `image: "/images/shows/${current}.jpg"`
        );
        rewrites++;
      }
      current = null; // image is the field we target; move on
    }
  }
  fs.writeFileSync(SHOWS_TS, lines.join("\n"));

  console.log(report.join("\n"));
  console.log(
    `\nDownloaded ${Object.keys(ok).length}/${
      Object.keys(QUERIES).length
    }, rewrote ${rewrites} image paths in content/shows.ts`
  );
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
