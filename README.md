# Vegas Vogue Expo — Next.js Starter

A fast, SEO‑ready, mobile‑first site for a trade show exhibit builder.

## Quick start
```bash
pnpm i   # or npm i / yarn
cp .env.example .env.local
pnpm dev
```
Then open http://localhost:3000

## Production build
```bash
pnpm build
pnpm start
```

## What’s inside
- Next.js App Router (SSR/SSG)
- Tailwind CSS + minimal brand tokens
- Strong defaults for SEO (Open Graph, Twitter, canonical)
- JSON‑LD (Organization + Service)
- Sitemap & robots via `next-sitemap`
- Portfolio + Case Study pages (sample JSON)
- Services, Venues, Pricing, FAQ
- Sticky CTA + mobile‑first header/footer
- Contact form (API stub)

## Customize
- Update `lib/seo.ts` + `lib/structuredData.ts`
- Replace `/public/og-image.jpg` and `/public/logo.svg`
- Edit pages in `/app/` and components in `/components/`
- Add real projects to `/content/portfolio.json`
- Wire email in `/app/api/quote/route.ts`

## SEO checklist
- Unique title + meta per page
- Descriptive H1/H2s and internal links
- WebP/AVIF images with alt text
- Submit sitemap in GSC; set canonical base in `.env.local`
- Add Google Business Profile and ensure NAP consistency
