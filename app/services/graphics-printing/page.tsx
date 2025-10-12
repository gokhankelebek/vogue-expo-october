import { serviceJsonLd } from "@/lib/structuredData";

export const metadata = {
  title: "Trade Show Graphics & Printing Las Vegas | Display Graphics",
  description:
    "Trade show graphics and printing services in Las Vegas. Backlit SEG, fabric displays, rigid panels, floor graphics, hanging signs. Color-accurate production for Las Vegas exhibitions.",
  keywords: [
    "trade show graphics Las Vegas",
    "display printing Las Vegas",
    "SEG fabric graphics Las Vegas",
    "trade show signage Las Vegas",
  ],
};

export default function ServicePage() {
  const json = serviceJsonLd(
    "Graphics & Printing",
    "Backlit SEG, fabric, rigid panels, floors, and hanging signs with color‑accurate production."
  );
  return (
    <section className="container py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
      />
      <h1 className="text-3xl font-bold text-brand">Graphics & Printing</h1>
      <p className="mt-3 text-slate-700">
        Backlit SEG, fabric, rigid panels, floors, and hanging signs with
        color‑accurate production.
      </p>
      <ul className="mt-6 list-disc pl-6 text-slate-700 space-y-2">
        <li>Timeline guidance and venue-specific considerations</li>
        <li>Materials: aluminum extrusion, laminate, fabric SEG, lightboxes</li>
        <li>Add‑ons: AV packages, furniture, storage, meeting rooms</li>
        <li>Logistics: crating, warehouse, on‑site supervision</li>
      </ul>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Graphics Examples</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <img
            src="/images/PHOTO-2025-10-11-14-00-45 2.jpg"
            alt="Graphics and printing example"
            className="rounded-xl w-full aspect-[4/3] object-cover"
          />
          <img
            src="/images/PHOTO-2025-10-11-14-00-45 4.jpg"
            alt="Graphics and printing example"
            className="rounded-xl w-full aspect-[4/3] object-cover"
          />
          <img
            src="/images/PHOTO-2025-03-01-23-42-54 3.jpg"
            alt="Graphics and printing example"
            className="rounded-xl w-full aspect-[4/3] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
