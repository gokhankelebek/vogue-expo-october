import BoothImage from "./BoothImage";
import CTAButton from "./CTAButton";
import Link from "next/link";

const proofPoints = [
  "Turnkey design & fabrication",
  "Local Las Vegas I&D crew",
  "Same-day quote response",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-white to-[var(--bg)] text-brand">
      {/* Glow accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[32rem] w-[32rem] rounded-full opacity-10 glow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-52 left-[-15%] h-[36rem] w-[36rem] rounded-full opacity-[0.06] glow"
      />

      <div className="container relative py-14 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-brand-accent">
              Locally Owned &amp; Operated · Las Vegas
            </p>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold leading-[1.08] tracking-tight">
              Las Vegas trade show booths that command the floor
            </h1>
            <p className="mt-5 text-xl text-slate-600 leading-relaxed max-w-xl">
              We're a Las Vegas local company. Custom exhibits and rental
              displays — designed, fabricated, and installed by our own team at
              LVCC, Mandalay Bay, Venetian Expo, Caesars Forum, and every major
              Las Vegas venue.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <CTAButton href="/contact">Get a Fast Quote</CTAButton>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 font-medium text-brand bg-white transition hover:border-brand hover:text-brand-accent"
              >
                See Portfolio
              </Link>
            </div>
            <p className="mt-4 text-base text-slate-500">
              Prefer to talk?{" "}
              <a
                href="tel:+17023431078"
                className="font-medium text-brand-accent hover:underline underline-offset-4"
              >
                Call (702) 343-1078
              </a>{" "}
              — same-day response.
            </p>
            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-base text-slate-600">
              {proofPoints.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <span aria-hidden className="text-brand-accent">
                    ✦
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <BoothImage
              src="/images/hero-kore-ai-booth.webp"
              alt="Custom kore.ai exhibit with a curved white canopy, cafe seating and a backlit reception counter, built by Vegas Vogue Expo in Las Vegas"
              className="rounded-2xl w-full aspect-[4/3] object-cover ring-1 ring-black/5 shadow-2xl"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-x-6 -bottom-6 rounded-xl bg-white p-5 text-base sm:text-lg text-slate-700 shadow-soft">
              <strong className="font-semibold text-brand">
                60-second specs form
              </strong>{" "}
              — event, venue, dates, booth size, budget. Quote back in hours.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
