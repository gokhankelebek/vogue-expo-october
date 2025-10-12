import { serviceJsonLd } from "@/lib/structuredData";

export const metadata = {
  title: "Trade Show Storage & Logistics Las Vegas | Exhibit Warehousing",
  description:
    "Trade show storage and logistics services in Las Vegas. Exhibit crating, warehousing, advance warehouse, direct-to-show freight. Complete logistics management for Las Vegas trade shows.",
  keywords: [
    "trade show storage Las Vegas",
    "exhibit warehousing Las Vegas",
    "booth logistics Las Vegas",
    "trade show freight Las Vegas",
  ],
};

export default function ServicePage() {
  const json = serviceJsonLd(
    "Storage & Logistics",
    "Crating, warehousing, advance warehouse vs direct-to-show — we handle logistics end‑to‑end."
  );
  return (
    <section className="container py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
      />
      <h1 className="text-3xl font-bold text-brand">Storage & Logistics</h1>
      <p className="mt-3 text-slate-700">
        Crating, warehousing, advance warehouse vs direct-to-show — we handle
        logistics end‑to‑end.
      </p>
      <ul className="mt-6 list-disc pl-6 text-slate-700 space-y-2">
        <li>Timeline guidance and venue-specific considerations</li>
        <li>Materials: aluminum extrusion, laminate, fabric SEG, lightboxes</li>
        <li>Add‑ons: AV packages, furniture, storage, meeting rooms</li>
        <li>Logistics: crating, warehouse, on‑site supervision</li>
      </ul>
    </section>
  );
}
