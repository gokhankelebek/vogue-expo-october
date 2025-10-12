/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vegasvogueexpo.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  outDir: 'public',
  exclude: ['/api/*']
}
