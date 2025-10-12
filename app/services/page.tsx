import Link from "next/link";

const services = [
  {
    href: "/services/custom-trade-show-booths",
    name: "Custom Trade Show Booths",
    desc: "From concept to crate — unique builds aligned to brand and budget.",
  },
  {
    href: "/services/trade-show-booth-rental",
    name: "Trade Show Booth Rental",
    desc: "Fast, flexible, and cost‑effective rental packages with custom graphics.",
  },
  {
    href: "/services/modular-booths",
    name: "Modular Booths",
    desc: "Reconfigurable systems for 10×10 up to 20×20 and beyond.",
  },
  {
    href: "/services/double-deck-booths",
    name: "Double‑Deck Booths",
    desc: "Maximize footprint with compliant, engineered structures.",
  },
  {
    href: "/services/installation-and-dismantle-las-vegas",
    name: "Install & Dismantle (I&D) — Las Vegas",
    desc: "Local crew, union coordination, and on‑site support.",
  },
  {
    href: "/services/graphics-printing",
    name: "Graphics & Printing",
    desc: "Backlit SEG, fabric, rigid panels, floor + hanging signs.",
  },
  {
    href: "/services/storage-logistics",
    name: "Storage & Logistics",
    desc: "Crating, warehousing, advance warehouse vs direct-to-show.",
  },
  {
    href: "/services/3d-design-rendering",
    name: "3D Design & Rendering",
    desc: "Photo‑real visuals to align stakeholders and accelerate approvals.",
  },
];

export const metadata = {
  title: "Trade Show Booth Services Las Vegas | Design, Rental & I&D",
  description:
    "Complete trade show booth services in Las Vegas: custom exhibit design, booth rentals, installation & dismantle, graphics, and logistics for LVCC, Mandalay Bay, Venetian Expo. Local Las Vegas booth builder.",
  keywords: [
    "trade show booth services Las Vegas",
    "exhibition booth design Las Vegas",
    "booth rental Las Vegas",
    "I&D services Las Vegas",
    "trade show graphics Las Vegas",
  ],
};

export default function ServicesPage() {
  return (
    <>
      <section className="container py-12">
        <h1 className="text-3xl font-bold text-brand">Services</h1>
        <p className="mt-3 text-lg text-slate-700">
          End-to-end exhibit solutions for Las Vegas trade shows — from initial
          design to final dismantle.
        </p>

        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          <img
            src="/images/PHOTO-2025-10-11-14-00-45 2.jpg"
            alt="Custom booth service"
            className="rounded-xl w-full aspect-[4/3] object-cover"
          />
          <img
            src="/images/PHOTO-2025-10-11-14-00-45 11.jpg"
            alt="Rental booth service"
            className="rounded-xl w-full aspect-[4/3] object-cover"
          />
          <img
            src="/images/PHOTO-2025-03-01-23-42-54.jpg"
            alt="Installation service"
            className="rounded-xl w-full aspect-[4/3] object-cover"
          />
        </div>
      </section>

      <section className="container pb-12">
        <h2 className="text-2xl font-semibold mb-6">Our Service Offerings</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="rounded-2xl border border-slate-200 p-5 hover:shadow-soft transition"
            >
              <div className="font-semibold">{s.name}</div>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
