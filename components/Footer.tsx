import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-16 bg-brand-ink text-slate-300">
      <div className="container py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <Image
              src="/logo-vv.webp"
              alt="Vegas Vogue Expo"
              width={256}
              height={256}
              className="h-10 w-10 rounded-lg ring-1 ring-white/20"
            />
            <span className="leading-tight">
              <span className="block font-semibold tracking-wide text-white">
                VEGAS VOGUE
              </span>
              <span className="block text-[0.65rem] tracking-[0.35em] text-brand-bright">
                EXPO
              </span>
            </span>
          </div>
          <p className="text-base leading-relaxed">
            A locally owned and operated Las Vegas company. Custom trade show
            booths — turnkey design, build, and I&D across LVCC, Mandalay Bay,
            Venetian Expo, Caesars Forum & more.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-3 text-lg text-white">Company</h3>
          <ul className="space-y-2 text-base">
            <li>
              <Link href="/about" className="transition hover:text-brand-bright">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="transition hover:text-brand-bright"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/shows" className="transition hover:text-brand-bright">
                Shows
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="transition hover:text-brand-bright"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3 text-lg text-white">Services</h3>
          <ul className="space-y-2 text-base">
            <li>
              <Link
                href="/services/custom-trade-show-booths"
                className="transition hover:text-brand-bright"
              >
                Custom Booths
              </Link>
            </li>
            <li>
              <Link
                href="/services/trade-show-booth-rental"
                className="transition hover:text-brand-bright"
              >
                Booth Rentals
              </Link>
            </li>
            <li>
              <Link
                href="/services/installation-and-dismantle-las-vegas"
                className="transition hover:text-brand-bright"
              >
                I&amp;D Las Vegas
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3 text-lg text-white">Contact</h3>
          <p className="text-base leading-relaxed">
            2915 Losee Rd #107, North Las Vegas, NV 89030
          </p>
          <p className="text-base mt-2">
            <a
              href="tel:+17023431078"
              className="transition hover:text-brand-bright"
            >
              (702) 343-1078
            </a>
          </p>
          <p className="text-base mt-1">
            <a
              href="mailto:info@vegasvogueexpo.com"
              className="transition hover:text-brand-bright"
            >
              info@vegasvogueexpo.com
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 text-sm text-center py-5 text-slate-500">
        © {new Date().getFullYear()} Vegas Vogue Expo. All rights reserved.
      </div>
    </footer>
  );
}
