const bands = [
  { size: "10×10", range: "$8k-$15k" },
  { size: "10×20", range: "$18k-$35k" },
  { size: "20×20", range: "$40k-$85k" },
  { size: "30×30+", range: "Custom" },
];

export default function PricingBands() {
  return (
    <section className="container py-14 sm:py-20">
      <div className="text-center mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-accentDark mb-3">
          Pricing
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-brand">
          Transparent pricing ranges
        </h2>
        <p className="mt-3 text-lg text-slate-600">
          Clear pricing to help you plan your budget
        </p>
      </div>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {bands.map((b) => (
          <div
            key={b.size}
            className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-brand-accent/60 hover:shadow-md text-center"
          >
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accentDark">
              {b.size}
            </div>
            <div className="mt-3 text-3xl font-semibold text-brand">
              {b.range}
            </div>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              Ranges vary by materials, rigging, AV, labor, graphics, and
              timeline.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
