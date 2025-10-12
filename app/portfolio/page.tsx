import items from "@/content/portfolio.json";
import Link from "next/link";

export const metadata = {
  title: "Trade Show Booth Portfolio | Las Vegas Exhibit Gallery",
  description:
    "View our Las Vegas trade show booth portfolio. Custom and rental exhibit case studies from LVCC, Mandalay Bay, Venetian Expo, Caesars Forum. Real booth designs by Vegas Vogue Expo.",
  keywords: [
    "trade show booth portfolio",
    "Las Vegas booth gallery",
    "exhibit case studies Las Vegas",
    "booth design examples",
  ],
};

export default function PortfolioPage() {
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold text-brand">Portfolio</h1>
      <p className="mt-3 text-slate-700">
        Filter by size and venue (sample data).
      </p>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it) => (
          <Link
            key={it.slug}
            href={`/portfolio/${it.slug}`}
            className="group block rounded-2xl border border-slate-200 overflow-hidden"
          >
            <img
              src={it.cover}
              alt={it.title}
              className="aspect-[4/3] w-full object-cover group-hover:scale-[1.02] transition"
            />
            <div className="p-4">
              <div className="font-medium">{it.title}</div>
              <div className="text-xs text-slate-500 mt-1">
                {it.size} • {it.venue}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
