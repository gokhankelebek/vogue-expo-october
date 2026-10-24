/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // Same fallback as lib/seo.ts. Never a *.vercel.app address: preview deployments
  // send "noindex", so Google would be pointed at pages it may not index.
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.vegasvogueexpo.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  outDir: "public",
  exclude: ["/api/*"],
};
