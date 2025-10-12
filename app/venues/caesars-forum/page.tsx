import VenueImage from "@/components/VenueImage";

export const metadata = {
  title: "Caesars Forum Trade Show Booths | Las Vegas Convention Center",
  description:
    "Trade show booth design and rental for Caesars Forum Las Vegas. Professional exhibit services for the newest Las Vegas convention venue. Modern booth solutions with expert I&D services.",
  keywords: [
    "Caesars Forum booths",
    "Caesars Forum trade shows",
    "Caesars Forum exhibits",
    "Caesars Forum booth rental",
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
                Caesars Forum
              </h1>
              <p className="mt-4 text-lg text-slate-700">
                Opened in 2020, Caesars Forum is Las Vegas's newest premier
                convention venue, featuring 550,000 square feet of ultra-modern,
                pillar-free event space.
              </p>
              <div className="mt-6 space-y-2 text-slate-700">
                <div className="flex items-start gap-2">
                  <span className="text-brand-accent">✓</span>
                  <span>550,000 sq ft modern space</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-brand-accent">✓</span>
                  <span>100,000 sq ft pillar-free Forum Ballroom</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-brand-accent">✓</span>
                  <span>State-of-the-art technology throughout</span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-soft">
              <VenueImage
                src="/images/venues/caesars-forum-exterior.jpg"
                fallbackSrc="/images/PHOTO-2025-10-11-14-00-45 9.jpg"
                alt="Caesars Forum"
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
                    <h3 className="font-semibold mb-2">Total Space</h3>
                    <p className="text-slate-600">550,000 sq ft</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Forum Ballroom</h3>
                    <p className="text-slate-600">100,000 sq ft pillar-free</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Additional Ballrooms</h3>
                    <p className="text-slate-600">Four 40,000 sq ft spaces</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Opened</h3>
                    <p className="text-slate-600">2020 - Brand New</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Our Caesars Forum Services
              </h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent text-xl">•</span>
                  <div>
                    <strong>Modern Design:</strong> Contemporary booth designs
                    to complement the new facility's aesthetic
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent text-xl">•</span>
                  <div>
                    <strong>Technology Integration:</strong> Leverage the
                    venue's advanced AV and connectivity
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent text-xl">•</span>
                  <div>
                    <strong>Efficient Load-In:</strong> Expert knowledge of the
                    new facility's logistics and procedures
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent text-xl">•</span>
                  <div>
                    <strong>Premium Finishes:</strong> High-end materials for
                    this upscale venue
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <VenueImage
                src="/images/venues/caesars-forum-interior.jpg"
                fallbackSrc="/images/PHOTO-2025-10-11-14-00-45 10.jpg"
                alt="Caesars Forum ballroom"
                className="rounded-2xl w-full aspect-video object-cover bg-slate-200"
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-brand/5 rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-3">Quick Facts</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>📍 3911 Koval Lane, Las Vegas</li>
                <li>🎪 Newest major Vegas venue</li>
                <li>💡 Advanced LED & digital technology</li>
                <li>⚡ Full power infrastructure</li>
                <li>🏨 Connected to Caesars properties</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h3 className="font-semibold text-lg mb-3">Ideal For</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Corporate Conferences</li>
                <li>• Association Meetings</li>
                <li>• Product Launches</li>
                <li>• Industry Summits</li>
                <li>• Executive Retreats</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h3 className="font-semibold text-lg mb-3">Need a Booth?</h3>
              <p className="text-sm text-slate-600 mb-4">
                Get a custom quote for Caesars Forum
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
