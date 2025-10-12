import { serviceJsonLd } from "@/lib/structuredData";

export const metadata = {
  title: "Trade Show I&D Services Las Vegas | Installation & Dismantle",
  description:
    "Professional trade show installation and dismantle services in Las Vegas. Expert I&D for LVCC, Mandalay Bay, Venetian Expo. Union coordination, rigging, on-site supervision. Local Las Vegas I&D crew.",
  keywords: [
    "trade show I&D Las Vegas",
    "installation dismantle Las Vegas",
    "LVCC I&D services",
    "trade show setup Las Vegas",
    "exhibition installation Las Vegas",
  ],
};

export default function ServicePage() {
  const json = serviceJsonLd(
    "Install & Dismantle (I&D) — Las Vegas",
    "Local crew, union coordination, rigging support, and on‑site management for smooth installs."
  );
  return (
    <section className="container py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
      />
      <h1 className="text-3xl font-bold text-brand">
        Install & Dismantle (I&D) — Las Vegas
      </h1>
      <p className="mt-3 text-slate-700">
        Local crew, union coordination, rigging support, and on‑site management
        for smooth installs.
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
