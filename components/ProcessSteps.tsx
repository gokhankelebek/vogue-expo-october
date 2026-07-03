const steps = [
  { title: "Discover", desc: "Scope, goals, venue, timeline, budget" },
  { title: "Design", desc: "3D renders, materials, graphics" },
  { title: "Fabricate", desc: "Build, crate, logistics" },
  {
    title: "Install & Dismantle",
    desc: "Union rules, rigging, on-site support",
  },
];

export default function ProcessSteps() {
  return (
    <section className="container py-14 sm:py-20">
      <div className="text-center mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-accentDark mb-3">
          How it works
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-brand">
          A turnkey, four-step process
        </h2>
        <p className="mt-3 text-lg text-slate-600">
          From concept to completion, we handle everything
        </p>
      </div>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <div
            key={i}
            className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-brand-accent/60 hover:shadow-md"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-accent/15 text-brand-accentDark font-bold">
                {i + 1}
              </div>
              <div className="text-brand font-semibold text-lg">{s.title}</div>
            </div>
            <p className="text-base text-slate-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
