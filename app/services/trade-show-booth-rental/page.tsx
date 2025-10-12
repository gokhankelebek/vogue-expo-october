import { serviceJsonLd } from "@/lib/structuredData";

export const metadata = {
  title: "Las Vegas Trade Show Booth Rental | Exhibit Rentals LVCC",
  description:
    "Trade show booth rental in Las Vegas. Fast, cost-effective rental exhibits for LVCC, Mandalay Bay, Venetian Expo. Custom graphics included. Professional I&D services. Local Las Vegas booth rental company.",
  keywords: [
    "Las Vegas trade show booth rental",
    "exhibit booth rental Las Vegas",
    "LVCC booth rental",
    "trade show display rental Las Vegas",
    "convention booth rental Las Vegas",
  ],
};

export default function ServicePage() {
  const json = serviceJsonLd(
    "Trade Show Booth Rental",
    "Fast, flexible, and cost‑effective rental packages with custom graphics and turnkey I&D."
  );
  return (
    <section className="container py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
      />
      <h1 className="text-3xl font-bold text-brand">Trade Show Booth Rental</h1>
      <p className="mt-3 text-slate-700">
        Fast, flexible, and cost‑effective rental packages with custom graphics
        and turnkey I&D.
      </p>
      <ul className="mt-6 list-disc pl-6 text-slate-700 space-y-2">
        <li>Timeline guidance and venue-specific considerations</li>
        <li>Materials: aluminum extrusion, laminate, fabric SEG, lightboxes</li>
        <li>Add‑ons: AV packages, furniture, storage, meeting rooms</li>
        <li>Logistics: crating, warehouse, on‑site supervision</li>
      </ul>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Rental Booth Examples</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <img
            src="/images/PHOTO-2025-10-11-14-00-45 4.jpg"
            alt="Rental trade show booth"
            className="rounded-xl w-full aspect-[4/3] object-cover"
          />
          <img
            src="/images/PHOTO-2025-10-11-14-00-45 11.jpg"
            alt="Rental trade show booth"
            className="rounded-xl w-full aspect-[4/3] object-cover"
          />
          <img
            src="/images/PHOTO-2025-10-11-14-00-45 12.jpg"
            alt="Rental trade show booth"
            className="rounded-xl w-full aspect-[4/3] object-cover"
          />
          <img
            src="/images/PHOTO-2025-03-01-23-42-54 2.jpg"
            alt="Rental trade show booth"
            className="rounded-xl w-full aspect-[4/3] object-cover"
          />
          <img
            src="/images/PHOTO-2025-03-01-23-42-53 3.jpg"
            alt="Rental trade show booth"
            className="rounded-xl w-full aspect-[4/3] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
