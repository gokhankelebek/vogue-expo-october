import VenueImage from "@/components/VenueImage";

export const metadata = {
  title: "World Market Center Trade Show Booths | Las Vegas Market",
  description:
    "Trade show booth design and rental for World Market Center Las Vegas. Expert exhibit services for Las Vegas Market, furniture shows, and gift exhibitions. Professional booth solutions for WMC downtown Las Vegas.",
  keywords: [
    "World Market Center booths",
    "Las Vegas Market exhibits",
    "WMC booth rental",
    "World Market Center trade shows",
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
              <h1 className="text-3xl sm:text-4xl font-bold text-brand">
                World Market Center Las Vegas
              </h1>
              <p className="mt-4 text-lg text-slate-700">
                The premier trade show destination for home décor, furniture,
                and gift industries. This massive complex in downtown Las Vegas
                spans 5 million square feet across multiple buildings.
              </p>
              <div className="mt-6 space-y-2 text-slate-700">
                <div className="flex items-start gap-2">
                  <span className="text-brand-accent">✓</span>
                  <span>5 million sq ft total campus</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-brand-accent">✓</span>
                  <span>Multiple buildings & showroom floors</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-brand-accent">✓</span>
                  <span>Downtown Las Vegas location</span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-soft">
              <VenueImage
                src="/images/venues/world-market-center-exterior.jpg"
                fallbackSrc="/images/PHOTO-2025-10-11-14-00-45 5.jpg"
                alt="World Market Center"
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
              <h2 className="text-2xl font-semibold mb-4">
                Venue Specifications
              </h2>
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Total Campus</h3>
                    <p className="text-slate-600">5 million sq ft</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Buildings</h3>
                    <p className="text-slate-600">Multiple complexes</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Focus</h3>
                    <p className="text-slate-600">
                      Home décor, furniture, gifts
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Location</h3>
                    <p className="text-slate-600">Downtown Las Vegas</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Our World Market Center Services
              </h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent text-xl">•</span>
                  <div>
                    <strong>Industry-Specific Design:</strong> Booths tailored
                    for home décor, furniture, and gift markets
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent text-xl">•</span>
                  <div>
                    <strong>Product Display Optimization:</strong> Showcase your
                    products with sophisticated lighting and layouts
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent text-xl">•</span>
                  <div>
                    <strong>Multi-Floor Coordination:</strong> Experience with
                    the complex's unique multi-building setup
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent text-xl">•</span>
                  <div>
                    <strong>Full Logistics:</strong> Handle freight, storage,
                    and installation across the campus
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <VenueImage
                src="/images/venues/world-market-center-interior.jpg"
                fallbackSrc="/images/PHOTO-2025-03-01-23-42-53 3.jpg"
                alt="World Market Center showroom"
                className="rounded-2xl w-full aspect-video object-cover bg-slate-200"
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-brand/5 rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-3">Quick Facts</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>📍 495 Grand Central Pkwy</li>
                <li>🏢 5 million sq ft campus</li>
                <li>🛋️ Home & gift industry focus</li>
                <li>🚚 Extensive loading facilities</li>
                <li>🍽️ On-site dining options</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h3 className="font-semibold text-lg mb-3">Popular Shows</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Las Vegas Market</li>
                <li>• Winter/Summer Market Weeks</li>
                <li>• Furniture Market</li>
                <li>• Gift & Home Shows</li>
                <li>• Permanent Showrooms</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h3 className="font-semibold text-lg mb-3">Need a Booth?</h3>
              <p className="text-sm text-slate-600 mb-4">
                Get a custom quote for World Market Center
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
