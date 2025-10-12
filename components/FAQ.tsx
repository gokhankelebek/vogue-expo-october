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

      <div className="mt-10 bg-brand/5 rounded-2xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-3">Still Have Questions?</h2>
        <p className="text-lg text-slate-700 mb-5">
          Our Las Vegas team is here to help with your trade show booth needs
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center rounded-2xl bg-brand-accent text-black px-6 py-3 font-medium shadow-soft hover:opacity-90"
          >
            Get a Free Quote
          </a>
          <a
            href="tel:+17023431078"
            className="inline-flex items-center rounded-2xl border-2 border-brand text-brand px-6 py-3 font-medium hover:bg-brand hover:text-white transition"
          >
            Call (702) 343-1078
          </a>
        </div>
      </div>
    </section>
  );
}
