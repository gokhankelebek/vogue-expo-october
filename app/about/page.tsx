export const metadata = {
  title: "About Vegas Vogue Expo | Las Vegas Trade Show Booth Builder",
  description:
    "Local Las Vegas trade show booth builder with 25+ years experience. Full-service exhibition stand design, fabrication, rental, and I&D for LVCC, Mandalay Bay, Venetian Expo. Expert Las Vegas booth company.",
  keywords: [
    "about Vegas Vogue Expo",
    "Las Vegas booth builder",
    "trade show company Las Vegas",
    "exhibition stand builder Las Vegas",
  ],
};
export default function AboutPage() {
  return (
    <section className="container py-12">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h1 className="text-3xl font-bold text-brand">
            About Vegas Vogue Expo
          </h1>
          <p className="mt-3 text-slate-700">
            We are a local Las Vegas exhibit house delivering design,
            fabrication, logistics, and I&D for shows of all sizes.
          </p>
          <p className="mt-4 text-slate-700">
            With years of experience serving major Las Vegas venues including
            LVCC, Mandalay Bay, Venetian Expo, and Caesars Forum, we understand
            the unique requirements and tight timelines of trade show
            exhibitors.
          </p>
          <p className="mt-4 text-slate-700">
            From 10×10 rentals to 40×40 double-deck custom builds, our team
            provides end-to-end solutions that help your brand stand out on the
            show floor.
          </p>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-3">Why Choose Us</h2>
            <ul className="space-y-2 text-slate-700">
              <li>✓ Local Las Vegas team with venue expertise</li>
              <li>✓ Full-service: design, build, graphics, I&D</li>
              <li>✓ Fast turnaround and flexible solutions</li>
              <li>✓ Union coordination and rigging support</li>
              <li>✓ Storage and logistics management</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <img
            src="/images/PHOTO-2025-10-11-14-00-45 8.jpg"
            alt="Trade show booth setup"
            className="rounded-xl w-full aspect-[4/3] object-cover"
          />
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/PHOTO-2025-10-11-14-00-45 9.jpg"
              alt="Booth detail"
              className="rounded-xl w-full aspect-square object-cover"
            />
            <img
              src="/images/PHOTO-2025-10-11-14-00-45 5.jpg"
              alt="Booth detail"
              className="rounded-xl w-full aspect-square object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
