import Link from "next/link";
import VenueImage from "@/components/VenueImage";

const pages = [
  {
    name: "Las Vegas Convention Center (LVCC)",
    slug: "las-vegas-convention-center",
  },
  {
    name: "Mandalay Bay Convention Center",
    slug: "mandalay-bay-convention-center",
  },
  { name: "Venetian Expo (Sands)", slug: "venetian-expo-sands" },
  { name: "Caesars Forum", slug: "caesars-forum" },
  { name: "World Market Center", slug: "world-market-center" },
];

export const metadata = {
  title: "Las Vegas Trade Show Venues | LVCC, Mandalay Bay, Venetian Expo",
  description:
    "Trade show booth services for all major Las Vegas convention centers: LVCC, Mandalay Bay, Venetian Expo, Caesars Forum, World Market Center. Expert booth design and I&D for every Las Vegas venue.",
  keywords: [
    "Las Vegas convention centers",
    "LVCC trade shows",
    "Mandalay Bay exhibits",
    "Venetian Expo booths",
    "Las Vegas trade show venues",
  ],
};

const venueImages: Record<string, string> = {
  "las-vegas-convention-center": "/images/venues/lvcc-exterior.jpg",
  "mandalay-bay-convention-center": "/images/venues/mandalay-bay-exterior.jpg",
  "venetian-expo-sands": "/images/venues/venetian-expo-exterior.jpg",
  "caesars-forum": "/images/venues/caesars-forum-exterior.jpg",
  "world-market-center": "/images/venues/world-market-center-exterior.jpg",
};

const fallbackImages: Record<string, string> = {
  "las-vegas-convention-center": "/images/PHOTO-2025-10-11-14-00-45.jpg",
  "mandalay-bay-convention-center": "/images/PHOTO-2025-10-11-14-00-45 2.jpg",
  "venetian-expo-sands": "/images/PHOTO-2025-10-11-14-00-45 4.jpg",
  "caesars-forum": "/images/PHOTO-2025-10-11-14-00-45 9.jpg",
  "world-market-center": "/images/PHOTO-2025-10-11-14-00-45 5.jpg",
};

export default function VenuesPage() {
  return (
    <>
      <section className="bg-slate-50 py-12">
        <div className="container">
          <h1 className="text-3xl sm:text-4xl font-bold text-brand">
            Las Vegas Trade Show Venues
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Expert booth design, fabrication, and installation across all major
            Las Vegas convention centers. We know every venue's specs, union
            requirements, and logistics inside and out.
          </p>
        </div>
      </section>

      <section className="container py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pages.map((v) => (
            <Link
              key={v.slug}
              href={`/venues/${v.slug}`}
              className="group rounded-2xl border border-slate-200 overflow-hidden hover:shadow-soft transition"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-200">
                <VenueImage
                  src={venueImages[v.slug]}
                  fallbackSrc={fallbackImages[v.slug]}
                  alt={v.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
              </div>
              <div className="p-5">
                <div className="font-semibold text-lg">{v.name}</div>
                <p className="mt-2 text-sm text-slate-600">
                  Venue specs, logistics, and booth solutions
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
