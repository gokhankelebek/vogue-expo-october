import CTAButton from "./CTAButton";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="container py-10 sm:py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand">
            Las Vegas Trade Show Booth Builder
          </h1>
          <p className="mt-4 text-xl text-slate-700 leading-relaxed">
            Professional exhibition stand builder specializing in custom trade
            show booths and rental displays for Las Vegas conventions. Expert
            design, fabrication, and I&amp;D services for LVCC, Mandalay Bay,
            Venetian Expo, Caesars Forum, and all major Las Vegas venues.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <CTAButton href="/contact">Get a Fast Quote</CTAButton>
            <Link
              href="/portfolio"
              className="underline underline-offset-4 hover:text-brand"
            >
              See Portfolio
            </Link>
          </div>
          <div className="mt-6 flex items-center gap-6 text-base text-slate-600">
            <div>✅ Turnkey fabrication</div>
            <div>✅ Local Vegas team</div>
            <div>✅ Install &amp; Dismantle</div>
          </div>
        </div>
        <div className="relative">
          <img
            src="/images/PHOTO-2025-03-01-23-42-53.jpg"
            alt="SAKI Coffee Equipment trade show booth - Las Vegas"
            className="rounded-2xl shadow-soft w-full aspect-[4/3] object-cover bg-slate-100"
          />
          <div className="absolute inset-x-6 -bottom-6 bg-white rounded-xl shadow-soft p-5 text-base sm:text-lg">
            <strong className="text-brand">Quick specs form</strong> — event,
            venue, dates, booth size, budget. Get a quote in hours.
          </div>
        </div>
      </div>
    </section>
  );
}
