import BoothImage from "./BoothImage";
import Link from "next/link";
import items from "../content/portfolio.json";

export default function PortfolioGrid() {
  return (
    <section className="container py-14 sm:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-accentDark mb-3">
        Portfolio
      </p>
      <h2 className="text-3xl sm:text-4xl font-semibold text-brand mb-2">
        Recent work
      </h2>
      <p className="text-lg text-slate-600 mb-6">
        Custom trade show booths we've built for Las Vegas exhibitions
      </p>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.slice(0, 6).map((it) => (
          <Link
            key={it.slug}
            href={`/portfolio/${it.slug}`}
            className="group block rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-soft transition duration-200 hover:-translate-y-1 hover:border-brand-accent/60 hover:shadow-lg"
          >
            <BoothImage
              src={it.cover}
              alt={it.title}
              className="aspect-[4/3] w-full object-cover group-hover:scale-[1.03] transition duration-300"
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
          className="inline-flex items-center gap-2 rounded-full border border-brand/20 px-6 py-3 text-lg font-medium text-brand transition hover:border-brand-accent hover:text-brand-accentDark"
        >
          View all projects <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
