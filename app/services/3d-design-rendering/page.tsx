import { serviceJsonLd } from "@/lib/structuredData";

export const metadata = {
  title: "3D Booth Design & Rendering Las Vegas | Exhibit Visualization",
  description:
    "Professional 3D trade show booth design and rendering services in Las Vegas. Photo-realistic visualizations for exhibit planning. Expert booth design for Las Vegas conventions.",
  keywords: [
    "3D booth design Las Vegas",
    "trade show rendering Las Vegas",
    "exhibit visualization Las Vegas",
    "booth design services Las Vegas",
  ],
};

export default function ServicePage() {
  const json = serviceJsonLd(
    "3D Design & Rendering",
    "Photo‑real visuals to align stakeholders and accelerate approvals."
  );
  return (
    <section className="container py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
      />
      <h1 className="text-3xl font-bold text-brand">3D Design & Rendering</h1>
      <p className="mt-3 text-slate-700">
        Photo‑real visuals to align stakeholders and accelerate approvals.
      </p>
      <ul className="mt-6 list-disc pl-6 text-slate-700 space-y-2">
        <li>Timeline guidance and venue-specific considerations</li>
        <li>Materials: aluminum extrusion, laminate, fabric SEG, lightboxes</li>
        <li>Add‑ons: AV packages, furniture, storage, meeting rooms</li>
        <li>Logistics: crating, warehouse, on‑site supervision</li>
      </ul>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Design Showcase</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <img
            src="/images/PHOTO-2025-03-01-23-42-53 2.jpg"
            alt="3D design example"
            className="rounded-xl w-full aspect-[4/3] object-cover"
          />
          <img
            src="/images/PHOTO-2025-03-01-23-42-53 6.jpg"
            alt="3D design example"
            className="rounded-xl w-full aspect-[4/3] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
