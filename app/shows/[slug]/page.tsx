import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { shows, getShow, relatedShows } from "@/content/shows";
import {
  serviceJsonLd,
  eventJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
} from "@/lib/structuredData";

export function generateStaticParams() {
  return shows.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const show = getShow(params.slug);
  if (!show) return {};
  return {
    title: show.seoTitle,
    description: show.seoDescription,
    keywords: show.keywords,
    alternates: { canonical: `/shows/${show.slug}` },
    openGraph: {
      title: show.seoTitle,
      description: show.seoDescription,
      url: `/shows/${show.slug}`,
      images: [{ url: show.image, alt: `${show.name} trade show booth` }],
    },
  };
}

export default function ShowPage({ params }: { params: { slug: string } }) {
  const show = getShow(params.slug);
  if (!show) notFound();

  const related = relatedShows(show);

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Shows", url: "/shows" },
    { name: show.name, url: `/shows/${show.slug}` },
  ]);
  const service = serviceJsonLd(
    `${show.name} Trade Show Booth Builder`,
    show.seoDescription
  );
  const faq = faqJsonLd(show.faqs);
  const event =
    show.nextEditionISO &&
    eventJsonLd({
      name: show.fullName,
      description: show.seoDescription,
      startDate: show.nextEditionISO,
      endDate: show.nextEditionEndISO,
      venueName: show.venueName,
      url: `/shows/${show.slug}`,
    });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
      {event && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(event) }}
        />
      )}

      {/* Hero */}
      <section className="bg-slate-50 py-12">
        <div className="container">
          <nav className="text-sm text-slate-500 mb-4">
            <Link href="/" className="hover:text-brand">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/shows" className="hover:text-brand">
              Shows
            </Link>{" "}
            / <span className="text-slate-700">{show.name}</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-brand">
                {show.name} Trade Show Booth Builder
              </h1>
              <p className="mt-4 text-xl text-slate-700 leading-relaxed">
                {show.tagline}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-xl bg-brand-accent text-black px-5 py-3 font-medium hover:opacity-90"
                >
                  Get a {show.name} Booth Quote
                </Link>
                <a
                  href="tel:+17023431078"
                  className="rounded-xl border border-slate-300 px-5 py-3 font-medium hover:border-brand"
                >
                  (702) 343-1078
                </a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-soft">
              <img
                src={show.image}
                alt={`${show.fullName} trade show booth in Las Vegas`}
                className="w-full aspect-[4/3] object-cover bg-slate-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Facts bar */}
      <section className="border-b border-slate-200">
        <div className="container grid grid-cols-2 lg:grid-cols-4 gap-6 py-8 text-sm">
          <div>
            <div className="text-slate-500">Venue</div>
            <Link
              href={`/venues/${show.venueSlug}`}
              className="font-semibold text-brand hover:underline"
            >
              {show.venueName}
            </Link>
          </div>
          <div>
            <div className="text-slate-500">Industry</div>
            <div className="font-semibold">{show.industry}</div>
          </div>
          <div>
            <div className="text-slate-500">When</div>
            <div className="font-semibold">{show.timing}</div>
          </div>
          <div>
            <div className="text-slate-500">
              {show.nextEdition ? "Next edition" : "Scale"}
            </div>
            <div className="font-semibold">
              {show.nextEdition ?? show.scale}
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="container py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-brand mb-3">
                Exhibiting at {show.fullName}
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                {show.intro}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand mb-4">
                What&apos;s hard about exhibiting at {show.name}
              </h2>
              <div className="space-y-4">
                {show.challenges.map((c) => (
                  <div
                    key={c.title}
                    className="rounded-2xl border border-slate-200 p-6"
                  >
                    <h3 className="font-semibold text-lg mb-2">{c.title}</h3>
                    <p className="text-base text-slate-600 leading-relaxed">
                      {c.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand mb-3">
                What wins on the {show.name} floor
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                {show.boothAdvice}
              </p>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-2xl font-bold text-brand mb-4">
                {show.name} booth FAQs
              </h2>
              <div className="space-y-4">
                {show.faqs.map((f) => (
                  <div
                    key={f.q}
                    className="rounded-2xl border border-slate-200 p-6"
                  >
                    <h3 className="font-semibold text-lg mb-2">{f.q}</h3>
                    <p className="text-base text-slate-600 leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-brand/5 rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-3">
                Need a {show.name} booth?
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Local Las Vegas team. Design, build, rental and full install &
                dismantle at {show.venueName}.
              </p>
              <Link
                href="/contact"
                className="block text-center rounded-xl bg-brand-accent text-black px-4 py-3 font-medium hover:opacity-90"
              >
                Request a Quote
              </Link>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h3 className="font-semibold text-lg mb-3">
                Recommended for {show.name}
              </h3>
              <ul className="space-y-2 text-sm">
                {show.recommendedServices.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="text-brand hover:underline"
                    >
                      → {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {related.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <h3 className="font-semibold text-lg mb-3">
                  Other shows at {show.venueName}
                </h3>
                <ul className="space-y-2 text-sm">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={`/shows/${r.slug}`}
                        className="text-brand hover:underline"
                      >
                        → {r.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
