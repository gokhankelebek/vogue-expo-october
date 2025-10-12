import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact Vegas Vogue Expo | Las Vegas Booth Quote Request",
  description:
    "Get a fast quote for your Las Vegas trade show booth. Contact our local team: (702) 343-1078. Same-day response for LVCC, Mandalay Bay, Venetian Expo booth rentals and custom exhibits.",
  keywords: [
    "contact Vegas Vogue Expo",
    "Las Vegas booth quote",
    "trade show booth inquiry",
    "booth builder contact Las Vegas",
  ],
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-slate-50 py-12">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-brand">
                Get a Fast Quote
              </h1>
              <p className="mt-4 text-lg text-slate-700">
                Tell us about your event and we'll get back to you within hours
                with a detailed quote. No obligation, no pressure.
              </p>
              <div className="mt-6 space-y-3 text-slate-700">
                <div className="flex items-start gap-3">
                  <span className="text-brand-accent text-xl">✓</span>
                  <span>Response within 24 hours (usually same day)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-brand-accent text-xl">✓</span>
                  <span>Free 3D renderings with every quote</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-brand-accent text-xl">✓</span>
                  <span>Transparent pricing, no hidden fees</span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-soft">
              <img
                src="/images/PHOTO-2025-10-11-14-00-45 6.jpg"
                alt="Trade show booth consultation"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="container py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
              <h2 className="text-2xl font-semibold mb-2">
                Quick Quote Request
              </h2>
              <p className="text-slate-600 mb-6">
                Fill out the form below and we'll prepare a custom quote for
                your exhibit.
              </p>
              <ContactForm />
            </div>
          </div>

          {/* Contact Information Sidebar */}
          <div className="space-y-6">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <div className="font-medium text-slate-900">Phone</div>
                  <a
                    href="tel:+17023431078"
                    className="text-brand hover:underline"
                  >
                    (702) 343-1078
                  </a>
                </div>
                <div>
                  <div className="font-medium text-slate-900">Email</div>
                  <a
                    href="mailto:info@vegasvogueexpo.com"
                    className="text-brand hover:underline"
                  >
                    info@vegasvogueexpo.com
                  </a>
                </div>
                <div>
                  <div className="font-medium text-slate-900">Address</div>
                  <p className="text-slate-600">
                    2915 Losee Road #107
                    <br />
                    North Las Vegas, NV 89030
                  </p>
                </div>
                <div>
                  <div className="font-medium text-slate-900">Hours</div>
                  <p className="text-slate-600">
                    Monday - Friday: 8am - 6pm PT
                    <br />
                    Saturday: 9am - 4pm PT
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-brand/5 rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-3">Why Choose Us?</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-brand mt-0.5">•</span>
                  <span>25+ years serving Las Vegas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand mt-0.5">•</span>
                  <span>Local team, fast response</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand mt-0.5">•</span>
                  <span>Full-service: design to dismantle</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand mt-0.5">•</span>
                  <span>Expert venue knowledge</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand mt-0.5">•</span>
                  <span>Union coordination included</span>
                </li>
              </ul>
            </div>

            {/* Recent Work */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h3 className="font-semibold text-lg mb-3">Recent Projects</h3>
              <div className="grid grid-cols-2 gap-2">
                <img
                  src="/images/PHOTO-2025-10-11-14-00-45.jpg"
                  alt="Recent booth project"
                  className="rounded-lg aspect-square object-cover"
                />
                <img
                  src="/images/PHOTO-2025-10-11-14-00-45 3.jpg"
                  alt="Recent booth project"
                  className="rounded-lg aspect-square object-cover"
                />
              </div>
              <a
                href="/portfolio"
                className="mt-3 block text-sm text-brand hover:underline"
              >
                View Full Portfolio →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional placeholder) */}
      <section className="bg-slate-100 py-12">
        <div className="container">
          <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
          <div className="bg-slate-200 rounded-2xl h-64 flex items-center justify-center text-slate-500">
            {/* Placeholder for map - integrate Google Maps or similar */}
            <div className="text-center">
              <p className="font-medium">2915 Losee Road #107</p>
              <p>North Las Vegas, NV 89030</p>
              <p className="mt-2 text-sm">
                Conveniently located near all major Las Vegas convention venues
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
