import Link from "next/link";
import { shows } from "@/content/shows";

/**
 * Lists the shows we cover at a given venue, linked to their /shows/[slug]
 * pages. Pulls from content/shows.ts so it stays in sync as shows are added.
 * Renders nothing if the venue has no shows yet.
 */
export default function ShowsAtVenue({ venueSlug }: { venueSlug: string }) {
  const venueShows = shows.filter((s) => s.venueSlug === venueSlug);
  if (venueShows.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6">
      <h3 className="font-semibold text-lg mb-3">Shows We Build For Here</h3>
      <ul className="space-y-2 text-sm text-slate-700">
        {venueShows.map((s) => (
          <li key={s.slug}>
            <Link
              href={`/shows/${s.slug}`}
              className="text-brand hover:underline"
            >
              → {s.name} booths
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
