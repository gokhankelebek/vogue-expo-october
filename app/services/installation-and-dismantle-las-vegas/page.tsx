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

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">On the Show Floor</h2>
        <p className="text-slate-600 mb-4">
          Our crew mid-install at Caesars Forum — floor protection down, panels
          set, and graphics going up before doors open.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <img
            src="/images/970e55dd-d6af-40c0-80eb-96f8eaa67755.webp"
            alt="Vegas Vogue Expo crew installing a booth at Caesars Forum, with ladders, floor protection, and panels going up"
            className="rounded-xl w-full aspect-[4/3] object-cover"
          />
          <img
            src="/images/IMG_9182.webp"
            alt="Technician on a ladder mounting the curved archway header of the kore.ai booth during install"
            className="rounded-xl w-full aspect-[4/3] object-cover"
          />
          <img
            src="/images/IMG_9149.webp"
            alt="Completed island booth installed on the show floor at Caesars Forum, ready before doors open"
            className="rounded-xl w-full aspect-[4/3] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
