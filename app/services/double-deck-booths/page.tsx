import { serviceJsonLd } from "@/lib/structuredData";

export const metadata = {
  title: "Double-Deck Trade Show Booths Las Vegas | Two-Story Exhibits",
  description:
    "Double-deck trade show booth design and construction in Las Vegas. Maximize exhibit space with engineered two-story structures. Compliant double-deck booths for LVCC and major Las Vegas venues.",
  keywords: [
    "double-deck booths Las Vegas",
    "two-story exhibits Las Vegas",
    "double-deck trade show booth",
    "multi-level booth Las Vegas",
  ],
};

export default function ServicePage() {
  const json = serviceJsonLd(
    "Double‑Deck Booths",
    "Maximize footprint with compliant, engineered structures and on‑site supervision."
  );
  return (
    <section className="container py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
      />
      <h1 className="text-3xl font-bold text-brand">Double‑Deck Booths</h1>
      <p className="mt-3 text-slate-700">
        Maximize footprint with compliant, engineered structures and on‑site
        supervision.
      </p>
      <ul className="mt-6 list-disc pl-6 text-slate-700 space-y-2">
        <li>Timeline guidance and venue-specific considerations</li>
        <li>Materials: aluminum extrusion, laminate, fabric SEG, lightboxes</li>
        <li>Add‑ons: AV packages, furniture, storage, meeting rooms</li>
        <li>Logistics: crating, warehouse, on‑site supervision</li>
      </ul>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Recent Large-Format Builds</h2>
        <p className="text-slate-600 mb-4">
          The same engineering and finishes we bring to multi-level exhibits —
          shown here on large custom islands we built at Caesars Forum.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <img
            src="/images/IMG_9212.webp"
            alt="Large 20x40 custom island booth with a wall-spanning LED video wall at Caesars Forum"
            className="rounded-xl w-full aspect-[4/3] object-cover"
          />
          <img
            src="/images/IMG_9211.webp"
            alt="Wide custom island exhibit with lounge seating and a backlit reception counter"
            className="rounded-xl w-full aspect-[4/3] object-cover"
          />
          <img
            src="/images/IMG_9210.webp"
            alt="Full-width video wall and conversation lounge on a large Las Vegas trade show island"
            className="rounded-xl w-full aspect-[4/3] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
