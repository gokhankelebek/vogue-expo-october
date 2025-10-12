/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://vogue-expo-october.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  outDir: 'public',
  exclude: ['/api/*']
}
