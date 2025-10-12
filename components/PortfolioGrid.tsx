import Link from "next/link";
import items from "../content/portfolio.json";

export default function PortfolioGrid() {
  return (
    <section className="container py-12">
      <h2 className="text-3xl font-bold text-brand mb-2">Recent work</h2>
      <p className="text-lg text-slate-600 mb-6">
        Custom trade show booths we've built for Las Vegas exhibitions
      </p>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.slice(0, 6).map((it) => (
          <Link
            key={it.slug}
            href={`/portfolio/${it.slug}`}
            className="group block rounded-2xl border border-slate-200 overflow-hidden hover:border-brand/50 hover:shadow-lg transition"
          >
            <img
              src={it.cover}
              alt={it.title}
              className="aspect-[4/3] w-full object-cover group-hover:scale-[1.02] transition"
            />
            <div className="p-5">
              <div className="font-semibold text-lg">{it.title}</div>
              <div className="text-sm text-slate-600 mt-1">
                {it.size} • {it.venue}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/portfolio"
          className="inline-flex items-center text-lg font-medium text-brand hover:underline underline-offset-4"
        >
          View all projects →
        </Link>
      </div>
    </section>
  );
}
