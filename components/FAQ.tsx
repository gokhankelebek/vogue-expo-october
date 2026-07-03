type QA = { q: string; a: string };
const faqs: QA[] = [
  {
    q: "Do you offer trade show booth rentals and custom builds in Las Vegas?",
    a: "Yes — we provide both rental and custom trade show booths in Las Vegas. Rental booths are fast, cost-effective solutions perfect for single shows. Custom exhibition stands maximize brand impact and are ideal for companies exhibiting frequently. We guide you to the best fit for your Las Vegas trade show.",
  },
  {
    q: "Which Las Vegas convention centers and venues do you service?",
    a: "We service all major Las Vegas trade show venues including Las Vegas Convention Center (LVCC), Mandalay Bay Convention Center, Venetian Expo (Sands Expo), Caesars Forum, World Market Center, and all other Las Vegas exhibition facilities. Our local team has extensive experience with each venue's specific requirements.",
  },
  {
    q: "Do you provide installation and dismantle (I&D) services in Las Vegas?",
    a: "Yes. Our local Las Vegas I&D crew handles complete installation and dismantle services, including union coordination, rigging support, and on-site supervision. We manage all logistics for smooth setup and teardown at Las Vegas trade shows.",
  },
  {
    q: "How quickly can I get a quote for a Las Vegas trade show booth?",
    a: "Very fast! Submit our 60-second quote request form and we typically respond the same business day with a detailed quote. For urgent Las Vegas trade show needs, call us at (702) 343-1078 for immediate assistance.",
  },
  {
    q: "What booth sizes do you offer for Las Vegas trade shows?",
    a: "We design and build trade show booths in all sizes: from compact 10×10 inline booths to large 40×40+ island exhibits and double-deck structures. Every booth is optimized for your specific Las Vegas venue requirements including ceiling heights, power access, and union regulations.",
  },
  {
    q: "How far in advance should I book my Las Vegas trade show booth?",
    a: "For custom booth design, we recommend 8-12 weeks before your Las Vegas show. For rental booths, we can accommodate shorter timelines — sometimes as little as 2-3 weeks. Contact us early to ensure availability, especially for major Las Vegas conventions like CES or CONEXPO.",
  },
  {
    q: "Do you provide graphics and printing for trade show displays?",
    a: "Yes! We offer complete trade show graphics services including backlit SEG fabric, rigid panels, floor graphics, hanging signs, and all display printing. All graphics are produced in-house with color-accurate printing for professional Las Vegas exhibitions.",
  },
  {
    q: "Can you handle storage and logistics for my exhibit?",
    a: "Absolutely. We provide exhibit storage, crating, warehousing, and complete logistics management. Whether you need advance warehouse services or direct-to-show shipping, we handle all freight and logistics for Las Vegas trade shows.",
  },
  {
    q: "Do you offer 3D booth design renderings?",
    a: "Yes! Every custom booth proposal includes professional 3D renderings so you can visualize your Las Vegas trade show exhibit before construction begins. This helps align stakeholders and accelerate approvals.",
  },
  {
    q: "Are you familiar with LVCC and Las Vegas venue union requirements?",
    a: "Completely. As a local Las Vegas booth builder, we have extensive experience with IATSE union requirements, venue regulations, power specifications, and rigging rules for every major Las Vegas convention center. We handle all coordination to ensure compliance.",
  },
];

export default function FAQ() {
  return (
    <section className="container py-12">
      <h1 className="text-4xl font-bold text-brand mb-3">
        Frequently Asked Questions
      </h1>
      <p className="text-xl text-slate-700 mb-8">
        Common questions about trade show booth rentals, custom exhibits, and
        services in Las Vegas
      </p>
      <div className="mt-6 divide-y rounded-2xl border border-slate-200">
        {faqs.map((item, idx) => (
          <details key={idx} className="p-6 group">
            <summary className="cursor-pointer font-semibold text-lg sm:text-xl text-slate-900 group-open:text-brand list-none">
              ▸ {item.q}
            </summary>
            <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
              {item.a}
            </p>
          </details>
        ))}
      </div>

      <div className="mt-12 relative overflow-hidden bg-brand-ink rounded-2xl p-8 sm:p-12 text-center text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 right-[-10%] h-72 w-72 rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(circle, rgba(224,52,47,0.55) 0%, rgba(224,52,47,0) 70%)",
          }}
        />
        <h2 className="relative text-3xl sm:text-4xl font-semibold mb-3">
          Still have questions?
        </h2>
        <p className="relative text-lg text-slate-300 mb-6">
          Our Las Vegas team is here to help with your trade show booth needs
        </p>
        <div className="relative flex flex-wrap justify-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-[#F25048] to-[#D42B24] text-white px-6 py-3 font-semibold shadow-accent transition hover:-translate-y-0.5 hover:shadow-accentLg"
          >
            Get a Free Quote <span aria-hidden>→</span>
          </a>
          <a
            href="tel:+17023431078"
            className="inline-flex items-center rounded-full border border-white/25 px-6 py-3 font-medium text-white transition hover:border-brand-bright hover:text-brand-bright"
          >
            Call (702) 343-1078
          </a>
        </div>
      </div>
    </section>
  );
}
