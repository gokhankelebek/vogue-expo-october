import VenueImage from "@/components/VenueImage";

export const metadata = {
  title: "Venetian Expo Trade Show Booths | Sands Expo Exhibits",
  description:
    "Professional trade show booth services for Venetian Expo (Sands Expo). Custom booth design and rental for MAGIC, G2E, and all Venetian Expo shows. Expert exhibit builder for Venetian Convention Center.",
  keywords: [
    "Venetian Expo booths",
    "Sands Expo trade show",
    "Venetian booth rental",
    "MAGIC booth builder",
    "Venetian Expo exhibits",
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
                Venetian Expo (Sands Expo)
              </h1>
              <p className="mt-4 text-lg text-slate-700">
                Part of The Venetian and Palazzo resorts, this sophisticated
                venue offers 1.2 million square feet of flexible exhibit space
                with direct access to luxury accommodations.
              </p>
              <div className="mt-6 space-y-2 text-slate-700">
                <div className="flex items-start gap-2">
                  <span className="text-brand-accent">✓</span>
                  <span>1.2 million sq ft flexible space</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-brand-accent">✓</span>
                  <span>Connected to luxury resort amenities</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-brand-accent">✓</span>
                  <span>550 meeting rooms & 3 ballrooms</span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-soft">
              <VenueImage
                src="/images/venues/venetian-expo-exterior.jpg"
                fallbackSrc="/images/PHOTO-2025-10-11-14-00-45 4.jpg"
                alt="Venetian Expo"
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
                    <h3 className="font-semibold mb-2">Exhibit Space</h3>
                    <p className="text-slate-600">1.2 million sq ft</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Total Complex</h3>
                    <p className="text-slate-600">7 million sq ft</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Meeting Rooms</h3>
                    <p className="text-slate-600">550 rooms available</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Labor</h3>
                    <p className="text-slate-600">
                      Union coordination required
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Our Venetian Expo Services
              </h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent text-xl">•</span>
                  <div>
                    <strong>Elegant Design:</strong> Premium booth aesthetics to
                    match the upscale Venetian atmosphere
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent text-xl">•</span>
                  <div>
                    <strong>Meeting Space Integration:</strong> Coordinate
                    private meeting rooms within the complex
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent text-xl">•</span>
                  <div>
                    <strong>Hospitality Suites:</strong> Design VIP areas and
                    client entertainment spaces
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent text-xl">•</span>
                  <div>
                    <strong>Turnkey Service:</strong> Complete installation,
                    supervision, and dismantle
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <VenueImage
                src="/images/venues/venetian-expo-interior.jpg"
                fallbackSrc="/images/PHOTO-2025-10-11-14-00-45 7.jpg"
                alt="Venetian Expo show floor"
                className="rounded-2xl w-full aspect-video object-cover bg-slate-200"
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-brand/5 rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-3">Quick Facts</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>📍 201 Sands Ave, Las Vegas</li>
                <li>🏨 Connected to Venetian & Palazzo</li>
                <li>🍽️ World-class dining on-site</li>
                <li>⚡ Advanced technology infrastructure</li>
                <li>🚇 Monorail access nearby</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h3 className="font-semibold text-lg mb-3">Popular Shows</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• MAGIC Fashion Trade Show</li>
                <li>• ASD Market Week</li>
                <li>• G2E (Global Gaming Expo)</li>
                <li>• IMX (Impact Marketing Expo)</li>
                <li>• Corporate Conferences</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h3 className="font-semibold text-lg mb-3">Need a Booth?</h3>
              <p className="text-sm text-slate-600 mb-4">
                Get a custom quote for Venetian Expo
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
