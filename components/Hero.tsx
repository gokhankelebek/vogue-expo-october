import { getImageProps } from "next/image";
import Link from "next/link";
import CTAButton from "./CTAButton";

const proofPoints = [
  "Turnkey design & fabrication",
  "Local Las Vegas I&D crew",
  "Same-day quote response",
];

const heroAlt =
  "Custom kore.ai exhibit with a curved white canopy, wood slat wall, cafe seating and a backlit reception counter, built by Vegas Vogue Expo in Las Vegas";

/**
 * Art-directed hero photo: phones get the angled shot (whole canopy reads at
 * 390px), desktops get the straight-on shot. One <picture>, so only the image
 * for the current screen is downloaded.
 */
function HeroPhoto() {
  const common = { alt: heroAlt, quality: 80 };
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({
    ...common,
    src: "/images/hero-booth-desktop.webp",
    width: 1440,
    height: 1080,
    sizes: "(min-width: 1280px) 640px, 50vw",
  });
  const {
    props: { srcSet: mobileSrcSet, ...img },
  } = getImageProps({
    ...common,
    src: "/images/hero-booth-mobile.webp",
    width: 1200,
    height: 750,
    sizes: "100vw",
    loading: "eager",
    fetchPriority: "high",
  });

  return (
    <picture>
      <source media="(min-width: 1024px)" srcSet={desktopSrcSet} />
      <source srcSet={mobileSrcSet} />
      <img
        {...img}
        alt={heroAlt}
        className="block h-full w-full object-cover"
      />
    </picture>
  );
}

export default function Hero() {
  return (
    <section className="border-b border-[var(--line)] bg-[var(--bg)] text-brand">
      <div className="container lg:grid lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-14 lg:py-16 xl:py-20">
        {/* Photo: full-width first thing on phones, right-hand column on desktop */}
        <div className="-mx-4 aspect-[16/10] overflow-hidden sm:-mx-6 lg:order-2 lg:mx-0 lg:aspect-[4/3] lg:rounded-2xl lg:shadow-[0_30px_60px_-24px_rgba(20,22,18,0.35)]">
          <HeroPhoto />
        </div>

        <div className="py-7 sm:py-10 lg:py-0">
          <p className="flex items-center gap-2 text-sm font-semibold text-[var(--muted)]">
            <span aria-hidden className="h-2 w-2 rounded-full bg-brand-accent" />
            Locally owned &amp; operated · Las Vegas
          </p>
          <h1 className="mt-3 text-[2.125rem] leading-[1.04] sm:text-5xl lg:text-[3.5rem]">
            Las Vegas trade show booths that command the floor
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg lg:text-xl">
            We&apos;re a Las Vegas local company. Custom exhibits and rental
            displays — designed, fabricated, and installed by our own team at
            LVCC, Mandalay Bay, Venetian Expo, Caesars Forum, and every major
            Las Vegas venue.
          </p>

          <div id="hero-ctas" className="mt-6 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="/contact" className="h-14 text-lg sm:px-8">
              Get a Fast Quote
            </CTAButton>
            <a
              href="tel:+17023431078"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-white px-7 text-lg font-semibold text-brand transition hover:border-brand-accent hover:text-brand-accent"
            >
              <svg aria-hidden className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call (702) 343-1078
            </a>
          </div>

          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-[var(--muted)] sm:text-base">
            {proofPoints.map((point) => (
              <li key={point} className="flex items-center gap-1.5">
                <span aria-hidden className="font-extrabold text-brand-accent">
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="mt-5 flex items-center gap-4 rounded-2xl border border-[var(--line)] bg-white px-5 py-4 text-sm text-[var(--muted)] transition hover:border-brand-accent sm:text-base"
          >
            <span>
              <strong className="font-semibold text-brand">60-second specs form</strong>{" "}
              — event, venue, dates, booth size, budget. Quote back in hours.
            </span>
            <span className="ml-auto whitespace-nowrap font-bold text-brand-accent">
              Start →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
