import VenueImage from "@/components/VenueImage";

export const metadata = {
  title: "Mandalay Bay Trade Show Booths | Convention Center Exhibits",
  description:
    "Trade show booth design and rental for Mandalay Bay Convention Center. Professional exhibit services for Mandalay Bay shows. Expert I&D and booth fabrication for Las Vegas Mandalay Bay venue.",
  keywords: [
    "Mandalay Bay trade show booths",
    "Mandalay Bay exhibit design",
    "Mandalay Bay booth rental",
    "Mandalay Bay I&D",
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
                Mandalay Bay Convention Center
              </h1>
              <p className="mt-4 text-lg text-slate-700">
                Connected to the iconic Mandalay Bay Resort, this center offers
                over 2 million square feet of space, including one of the
                largest pillar-free exhibit halls in the world.
              </p>
              <div className="mt-6 space-y-2 text-slate-700">
                <div className="flex items-start gap-2">
                  <span className="text-brand-accent">✓</span>
                  <span>2+ million sq ft total space</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-brand-accent">✓</span>
                  <span>1.7 million sq ft contiguous pillar-free space</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-brand-accent">✓</span>
                  <span>Resort-connected with hotel amenities</span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-soft">
              <VenueImage
                src="/images/venues/mandalay-bay-exterior.jpg"
                fallbackSrc="/images/PHOTO-2025-10-11-14-00-45 2.jpg"
                alt="Mandalay Bay Convention Center"
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
                    <p className="text-slate-600">2+ million sq ft</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Ceiling Height</h3>
                    <p className="text-slate-600">30 feet standard</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Special Feature</h3>
                    <p className="text-slate-600">Largest pillar-free hall</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Labor</h3>
                    <p className="text-slate-600">Union required</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Our Mandalay Bay Services
              </h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent text-xl">•</span>
                  <div>
                    <strong>Pillar-Free Design:</strong> Take advantage of the
                    unobstructed space for maximum visibility
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent text-xl">•</span>
                  <div>
                    <strong>Resort Integration:</strong> Coordinate with hotel
                    for VIP client meetings and entertainment
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent text-xl">•</span>
                  <div>
                    <strong>Premium Materials:</strong> Luxury booth finishes to
                    match the upscale venue atmosphere
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-accent text-xl">•</span>
                  <div>
                    <strong>Full I&D:</strong> Professional install and
                    dismantle with union coordination
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <VenueImage
                src="/images/venues/mandalay-bay-interior.jpg"
                fallbackSrc="/images/PHOTO-2025-10-11-14-00-45 8.jpg"
                alt="Mandalay Bay exhibition hall"
                className="rounded-2xl w-full aspect-video object-cover bg-slate-200"
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-brand/5 rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-3">Quick Facts</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>📍 3950 S Las Vegas Blvd</li>
                <li>🏨 Connected to Mandalay Bay Resort</li>
                <li>🎰 Casino and dining nearby</li>
                <li>⚡ Full power & rigging capabilities</li>
                <li>🅿️ On-site parking available</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h3 className="font-semibold text-lg mb-3">Popular Shows</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• PACK EXPO Las Vegas</li>
                <li>• JCK Las Vegas (Jewelry)</li>
                <li>• Pizza Expo</li>
                <li>• CEDIA Expo</li>
                <li>• Corporate Events</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h3 className="font-semibold text-lg mb-3">Need a Booth?</h3>
              <p className="text-sm text-slate-600 mb-4">
                Get a custom quote for Mandalay Bay
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
