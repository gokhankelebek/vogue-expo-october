import type { Metadata } from "next";

export const site = {
  name: "Vegas Vogue Expo",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.vegasvogueexpo.com",
  description:
    "Custom trade show booths in Las Vegas — design, build, rental & I&D for LVCC, Mandalay Bay, Venetian Expo, Caesars Forum and more.",
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Las Vegas Trade Show Booth Builder | Custom Exhibits & Rentals",
    template: "%s | Vegas Vogue Expo",
  },
  description:
    "Professional trade show booth design, fabrication & rental in Las Vegas. Custom exhibition stands for LVCC, Mandalay Bay, Venetian Expo. Local Las Vegas booth builder with full I&D services.",
  keywords: [
    "Las Vegas trade show booth rental",
    "custom trade show booth Las Vegas",
    "exhibition stand builder Las Vegas",
    "Las Vegas exhibit design company",
    "trade show displays Las Vegas",
    "LVCC booth design",
    "Las Vegas convention booth",
    "exhibit booth Las Vegas",
    "trade show booth design Las Vegas",
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: site.url,
    title: "Las Vegas Trade Show Booth Builder | Custom Exhibits & Rentals",
    description:
      "Professional trade show booth design, fabrication & rental in Las Vegas. Custom exhibition stands for LVCC, Mandalay Bay, Venetian Expo.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vegas Vogue Expo - Las Vegas Trade Show Booths",
      },
    ],
    siteName: "Vegas Vogue Expo",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Las Vegas Trade Show Booth Builder | Custom Exhibits & Rentals",
    description:
      "Professional trade show booth design, fabrication & rental in Las Vegas.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  authors: [{ name: "Vegas Vogue Expo" }],
  creator: "Vegas Vogue Expo",
  publisher: "Vegas Vogue Expo",
  category: "Trade Show Services",
  verification: {
    google: "iTLMFuZ6AiY3K1k8Sc6HHq5xue-VRG1dCOlTYjdfFNE",
  },
};
