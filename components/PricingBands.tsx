const bands = [
  { size: "10×10", range: "$8k-$15k" },
  { size: "10×20", range: "$18k-$35k" },
  { size: "20×20", range: "$40k-$85k" },
  { size: "30×30+", range: "Custom" },
];

export default function PricingBands() {
  return (
    <section className="container py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-brand">
          Transparent pricing ranges
        </h2>
        <p className="mt-2 text-slate-600">
          Clear pricing to help you plan your budget
        </p>
      </div>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {bands.map((b) => (
          <div
            key={b.size}
            className="rounded-2xl border border-slate-200 p-6 hover:border-brand/50 hover:shadow-md transition text-center"
          >
            <div className="text-brand font-bold text-2xl">{b.size}</div>
            <div className="mt-3 text-2xl font-semibold text-slate-900">
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
