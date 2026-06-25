import { serviceJsonLd } from "@/lib/structuredData";

export const metadata = {
  title: "Custom Trade Show Booth Las Vegas | Exhibition Stand Builder",
  description:
    "Professional custom trade show booth design and fabrication in Las Vegas. Expert exhibition stand builder for LVCC, Mandalay Bay, Venetian Expo. From 10×10 to double-deck exhibits. Local Las Vegas booth builder.",
  keywords: [
    "custom trade show booth Las Vegas",
    "exhibition stand builder Las Vegas",
    "trade show booth design Las Vegas",
    "custom exhibit booths Las Vegas",
    "Las Vegas booth fabrication",
  ],
};

export default function ServicePage() {
  const json = serviceJsonLd(
    "Custom Trade Show Booths",
    "From concept to crate — unique builds aligned to brand and budget for Las Vegas venues."
  );
  return (
    <section className="container py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
      />
      <h1 className="text-3xl font-bold text-brand">
        Custom Trade Show Booths
      </h1>
      <p className="mt-3 text-slate-700">
        From concept to crate — unique builds aligned to brand and budget for
        Las Vegas venues.
      </p>
      <ul className="mt-6 list-disc pl-6 text-slate-700 space-y-2">
        <li>Timeline guidance and venue-specific considerations</li>
        <li>Materials: aluminum extrusion, laminate, fabric SEG, lightboxes</li>
        <li>Add‑ons: AV packages, furniture, storage, meeting rooms</li>
        <li>Logistics: crating, warehouse, on‑site supervision</li>
      </ul>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">
          Our Custom Booth Gallery
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <img
            src="/images/IMG_0733.webp"
            alt="Custom 20x40 island booth for Blue Machines with a seamless LED video wall and lounge at Caesars Forum"
            className="rounded-xl w-full aspect-[4/3] object-cover"
          />
          <img
            src="/images/IMG_9264.webp"
            alt="Custom inline booth for kore.ai with a curved archway header on the Caesars Forum show floor"
            className="rounded-xl w-full aspect-[4/3] object-cover"
          />
          <img
            src="/images/IMG_0753.webp"
            alt="Booth lounge area with sculpted chairs and an illuminated reception counter, custom built in Las Vegas"
            className="rounded-xl w-full aspect-[4/3] object-cover"
          />
          <img
            src="/images/IMG_0788.webp"
            alt="Backlit reception desk and private meeting nook inside a custom kore.ai exhibit"
            className="rounded-xl w-full aspect-[4/3] object-cover"
          />
          <img
            src="/images/IMG_9212.webp"
            alt="Wide view of the Blue Machines island booth with large-format partner-logo graphics on the video wall"
            className="rounded-xl w-full aspect-[4/3] object-cover"
          />
          <img
            src="/images/IMG_0782.webp"
            alt="Light-toned custom booth with a backlit kore.ai reception desk and demo screen at Caesars Forum"
            className="rounded-xl w-full aspect-[4/3] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
