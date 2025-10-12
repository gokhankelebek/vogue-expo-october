const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.vegasvogueexpo.com";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}#organization`,
    name: "Vegas Vogue Expo",
    alternateName: "Vegas Vogue Expo - Trade Show Booth Builder",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/logo-expo.svg`,
      width: "250",
      height: "60",
    },
    image: `${siteUrl}/og-image.jpg`,
    description:
      "Professional trade show booth design, fabrication, and rental services in Las Vegas. Custom exhibition stands for LVCC, Mandalay Bay, Venetian Expo, and all major Las Vegas convention centers.",
    priceRange: "$$",
    telephone: "+1-702-343-1078",
    email: "info@vegasvogueexpo.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2915 Losee Road #107",
      addressLocality: "North Las Vegas",
      addressRegion: "NV",
      postalCode: "89030",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 36.2486,
      longitude: -115.1189,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Las Vegas",
        "@id": "https://en.wikipedia.org/wiki/Las_Vegas",
      },
      {
        "@type": "City",
        name: "North Las Vegas",
      },
      {
        "@type": "City",
        name: "Henderson",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "16:00",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-702-343-1078",
        contactType: "sales",
        email: "info@vegasvogueexpo.com",
        areaServed: "US",
        availableLanguage: ["English"],
      },
    ],
    sameAs: [siteUrl],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Trade Show Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Trade Show Booth Design",
            description:
              "Custom designed exhibition stands for Las Vegas trade shows",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Trade Show Booth Rental",
            description: "Rental exhibition displays for Las Vegas conventions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Installation & Dismantle Services",
            description: "Professional I&D services for Las Vegas trade shows",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Graphics & Printing Services",
            description:
              "Trade show graphics and printing for Las Vegas exhibitions",
          },
        },
      ],
    },
  };
}

export function serviceJsonLd(serviceName: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    serviceType: "Trade Show Services",
    areaServed: {
      "@type": "City",
      name: "Las Vegas",
      "@id": "https://en.wikipedia.org/wiki/Las_Vegas",
    },
    provider: {
      "@type": "LocalBusiness",
      name: "Vegas Vogue Expo",
      telephone: "+1-702-343-1078",
      address: {
        "@type": "PostalAddress",
        addressLocality: "North Las Vegas",
        addressRegion: "NV",
        addressCountry: "US",
      },
    },
    description,
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: siteUrl,
      servicePhone: {
        "@type": "ContactPoint",
        telephone: "+1-702-343-1078",
      },
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  };
}
