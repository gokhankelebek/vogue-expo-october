import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200">
      <div className="container py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <Image
            src="/Logo-expo.png"
            alt="Vegas Vogue Expo"
            width={400}
            height={120}
            quality={95}
            className="h-10 w-auto mb-4"
            style={{ objectFit: "contain" }}
          />
          <p className="text-base text-slate-600 leading-relaxed">
            Custom trade show booths in Las Vegas. Turnkey design, build, and
            I&D across LVCC, Mandalay Bay, Venetian Expo, Caesars Forum & more.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-3 text-lg">Company</h3>
          <ul className="space-y-2 text-base">
            <li>
              <Link href="/about" className="hover:underline hover:text-brand">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="hover:underline hover:text-brand"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:underline hover:text-brand"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3 text-lg">Services</h3>
          <ul className="space-y-2 text-base">
            <li>
              <Link
                href="/services/custom-trade-show-booths"
                className="hover:underline hover:text-brand"
              >
                Custom Booths
              </Link>
            </li>
            <li>
              <Link
                href="/services/trade-show-booth-rental"
                className="hover:underline hover:text-brand"
              >
                Booth Rentals
              </Link>
            </li>
            <li>
              <Link
                href="/services/installation-and-dismantle-las-vegas"
                className="hover:underline hover:text-brand"
              >
                I&amp;D Las Vegas
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3 text-lg">Contact</h3>
          <p className="text-base text-slate-600 leading-relaxed">
            2915 Losee Rd #107, North Las Vegas, NV 89030
          </p>
          <p className="text-base mt-2">
            <a
              href="tel:+17023431078"
              className="hover:underline hover:text-brand"
            >
              (702) 343-1078
            </a>
          </p>
          <p className="text-base mt-1">
            <a
              href="mailto:info@vegasvogueexpo.com"
              className="hover:underline hover:text-brand"
            >
              info@vegasvogueexpo.com
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-slate-200 text-sm text-center py-5 text-slate-500">
        © {new Date().getFullYear()} Vegas Vogue Expo. All rights reserved.
      </div>
    </footer>
  );
}
