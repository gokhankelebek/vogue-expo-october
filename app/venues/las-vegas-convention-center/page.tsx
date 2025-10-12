import VenueImage from "@/components/VenueImage";

export const metadata = {
  title: "LVCC Trade Show Booths | Las Vegas Convention Center Exhibits",
  description:
    "Professional trade show booth design, rental, and I&D services for Las Vegas Convention Center (LVCC). Expert booth builder for CES, CONEXPO, SEMA, and all LVCC trade shows. Union-coordinated installation.",
  keywords: [
    "LVCC trade show booths",
    "Las Vegas Convention Center exhibits",
    "LVCC booth rental",
    "CES booth builder",
    "LVCC I&D services",
  ],
};

export default function VenuePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-slate-50 py-12">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-brand">
                Las Vegas Convention Center (LVCC)
              </h1>
              <p className="mt-4 text-xl text-slate-700 leading-relaxed">
                The largest and most iconic venue in Las Vegas. With over 2.5
                million square feet of exhibit space, LVCC hosts the world's
                biggest trade shows including CES, CONEXPO, and more.
              </p>
              <div className="mt-6 space-y-2 text-base text-slate-700">
                <div className="flex items-start gap-2">
                  <span className="text-brand-accent">✓</span>
                  <span>Over 2.5 million sq ft of exhibit space</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-brand-accent">✓</span>
                  <span>Multiple halls: North, Central, South, West</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-brand-accent">✓</span>
                  <span>Expert in LVCC union rules and power requirements</span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-soft">
              <VenueImage
                src="/images/venues/lvcc-exterior.jpg"
                fallbackSrc="/images/PHOTO-2025-10-11-14-00-45.jpg"
                alt="Las Vegas Convention Center"
                className="w-full aspect-[4/3] object-cover bg-slate-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="container py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-brand mb-4">
                Venue Specifications
              </h2>
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Total Space</h3>
                    <p className="text-base text-slate-600">
                      2.5 million sq ft exhibit space
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Ceiling Height</h3>
                    <p className="text-base text-slate-600">
                      20-40 feet depending on hall
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Load-In</h3>
                    <p className="text-base text-slate-600">
                      Advance warehouse available
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Labor</h3>
                    <p className="text-base text-slate-600">Union required (IATSE)</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-brand mb-4">Our LVCC Services</h2>
              <ul className="space-y-3 text-base text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent text-xl">•</span>
                  <div>
                    <strong>Venue-Aware Design:</strong> Optimized for LVCC
                    ceiling heights, power locations, and rigging points
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent text-xl">•</span>
                  <div>
                    <strong>Union Coordination:</strong> Handle all IATSE labor
                    requirements and paperwork
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent text-xl">•</span>
                  <div>
                    <strong>Advance Warehouse:</strong> Storage and prep before
                    show dates to save costs
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent text-xl">•</span>
                  <div>
                    <strong>On-Site Supervision:</strong> Local team manages
                    install and dismantle
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <VenueImage
                src="/images/venues/lvcc-interior.jpg"
                fallbackSrc="/images/PHOTO-2025-10-11-14-00-45 6.jpg"
                alt="LVCC exhibition hall"
                className="rounded-2xl w-full aspect-video object-cover bg-slate-200"
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-brand/5 rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-3">Quick Facts</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>📍 3150 Paradise Rd, Las Vegas</li>
                <li>🎪 Hosts CES, CONEXPO, SEMA</li>
                <li>🚚 Multiple loading docks</li>
                <li>⚡ 3-phase power available</li>
                <li>📶 WiFi throughout facility</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h3 className="font-semibold text-lg mb-3">Popular Shows</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• CES (Consumer Electronics Show)</li>
                <li>• CONEXPO-CON/AGG</li>
                <li>• World of Concrete</li>
                <li>• SEMA Show</li>
                <li>• NAB Show</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h3 className="font-semibold text-lg mb-3">Need a Booth?</h3>
              <p className="text-sm text-slate-600 mb-4">
                Get a custom quote for your next LVCC show
              </p>
              <a
                href="/contact"
                className="block text-center rounded-xl bg-brand-accent text-black px-4 py-3 font-medium hover:opacity-90"
              >
                Request Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
