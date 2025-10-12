import { serviceJsonLd } from "@/lib/structuredData";

export const metadata = {
  title: "Modular Trade Show Booths Las Vegas | Portable Exhibits",
  description:
    "Modular trade show booth systems in Las Vegas. Reconfigurable exhibits from 10×10 to 20×20+. Portable, reusable displays for Las Vegas conventions. Cost-effective booth solutions.",
  keywords: [
    "modular booths Las Vegas",
    "portable exhibits Las Vegas",
    "reconfigurable booth systems Las Vegas",
    "modular trade show displays",
  ],
};

export default function ServicePage() {
  const json = serviceJsonLd(
    "Modular Booths",
    "Reconfigurable systems for 10×10 up to 20×20 and beyond — scale and reuse across shows."
  );
  return (
    <section className="container py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
      />
      <h1 className="text-3xl font-bold text-brand">Modular Booths</h1>
      <p className="mt-3 text-slate-700">
        Reconfigurable systems for 10×10 up to 20×20 and beyond — scale and
        reuse across shows.
      </p>
      <ul className="mt-6 list-disc pl-6 text-slate-700 space-y-2">
        <li>Timeline guidance and venue-specific considerations</li>
        <li>Materials: aluminum extrusion, laminate, fabric SEG, lightboxes</li>
        <li>Add‑ons: AV packages, furniture, storage, meeting rooms</li>
        <li>Logistics: crating, warehouse, on‑site supervision</li>
      </ul>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Modular Booth Gallery</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <img
            src="/images/PHOTO-2025-10-11-14-00-45 10.jpg"
            alt="Modular booth"
            className="rounded-xl w-full aspect-[4/3] object-cover"
          />
          <img
            src="/images/PHOTO-2025-03-01-23-42-53 4.jpg"
            alt="Modular booth"
            className="rounded-xl w-full aspect-[4/3] object-cover"
          />
          <img
            src="/images/PHOTO-2025-03-01-23-42-53 7.jpg"
            alt="Modular booth"
            className="rounded-xl w-full aspect-[4/3] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
