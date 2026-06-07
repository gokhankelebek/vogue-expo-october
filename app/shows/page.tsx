import type { Metadata } from "next";
import Link from "next/link";
import { shows } from "@/content/shows";

export const metadata: Metadata = {
  title:
    "Las Vegas Trade Show Booth Builder by Show | CES, SEMA, MJBizCon & More",
  description:
    "Show-specific trade show booth design, build and rental in Las Vegas — CES, NAB, SEMA, World of Concrete, MJBizCon, JCK, ASD, Cosmoprof, G2E, IMEX and Las Vegas Market. Local team, full I&D.",
  keywords: [
    "Las Vegas trade show booth builder by show",
    "CES booth builder",
    "SEMA booth builder",
    "MJBizCon booth builder",
    "Las Vegas show exhibits",
  ],
  alternates: { canonical: "/shows" },
};

// Preserve venue grouping order as venues first appear in the show list.
const venueOrder: string[] = [];
for (const s of shows) {
  if (!venueOrder.includes(s.venueName)) venueOrder.push(s.venueName);
}

export default function ShowsIndexPage() {
  return (
    <>
      <section className="bg-slate-50 py-12">
        <div className="container">
          <h1 className="text-3xl sm:text-4xl font-bold text-brand">
            Trade Show Booths for Every Major Las Vegas Show
          </h1>
          <p className="mt-4 text-lg text-slate-700 max-w-3xl">
            We don&apos;t just know the venues — we know the shows. Each event
            has its own deadlines, union rules, drayage quirks and what actually
            wins on the floor. Pick your show for a builder who&apos;s done it
            before.
          </p>
        </div>
      </section>

      <section className="container py-12 space-y-12">
        {venueOrder.map((venue) => {
          const venueShows = shows.filter((s) => s.venueName === venue);
          return (
            <div key={venue}>
              <h2 className="text-2xl font-bold text-brand mb-6">{venue}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {venueShows.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/shows/${s.slug}`}
                    className="group rounded-2xl border border-slate-200 overflow-hidden hover:shadow-soft transition"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-slate-200">
                      <img
                        src={s.image}
                        alt={`${s.name} trade show booth`}
                        className="w-full h-full object-cover group-hover:scale-105 transition"
                      />
                    </div>
                    <div className="p-5">
                      <div className="font-semibold text-lg">{s.name}</div>
                      <div className="mt-1 text-sm text-slate-500">
                        {s.industry}
                      </div>
                      <p className="mt-2 text-sm text-slate-600">
                        {s.nextEdition
                          ? `Next: ${s.nextEdition}`
                          : s.timing}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
