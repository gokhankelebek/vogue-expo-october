"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import CTAButton from "./CTAButton";

const nav = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "Shows", href: "/shows" },
  { name: "Venues", href: "/venues" },
  { name: "Pricing", href: "/pricing" },
  { name: "FAQ", href: "/faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll and close on Escape while open
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    // z-[60] keeps the open menu overlay above the floating StickyCTA (z-50)
    <header className="sticky top-0 z-[60]">
      {/* The blur lives on this inner bar: backdrop-filter on an ancestor
          would turn the fixed overlay's containing block into the header bar. */}
      <div className="bg-white/85 backdrop-blur border-b border-slate-200/80">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo-vv.webp"
            alt="Vegas Vogue Expo"
            width={256}
            height={256}
            priority
            className="h-10 w-10 rounded-lg"
          />
          <span className="leading-tight">
            <span className="block font-semibold tracking-wide text-slate-900">
              VEGAS VOGUE
            </span>
            <span className="block text-[0.65rem] tracking-[0.35em] text-slate-500">
              EXPO
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-sm">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-brand-accentDark">
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+17023431078"
            className="hidden lg:inline text-sm font-medium transition hover:text-brand-accentDark"
          >
            (702) 343-1078
          </a>
          <div className="hidden sm:block">
            <CTAButton />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white transition hover:border-brand-accent"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <span className="relative block h-3.5 w-5">
              <span className="absolute left-0 top-0 h-0.5 w-full rounded bg-slate-900" />
              <span className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rounded bg-slate-900" />
              <span className="absolute left-0 bottom-0 h-0.5 w-full rounded bg-slate-900" />
            </span>
          </button>
        </div>
      </div>
      </div>

      {/* Mobile Menu — full-screen ink overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-[60] flex flex-col bg-brand-ink text-white transition-all duration-300 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!open}
      >
        {/* Crimson glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 right-[-20%] h-96 w-96 rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(circle, rgba(224,52,47,0.55) 0%, rgba(224,52,47,0) 70%)",
          }}
        />

        {/* Top bar inside overlay */}
        <div className="container flex h-16 shrink-0 items-center justify-between">
          <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
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
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition hover:border-brand-bright hover:text-brand-bright"
            aria-label="Close menu"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="container relative flex-1 overflow-y-auto pt-6 pb-8">
          <ul className="space-y-1">
            {nav.map((item, i) => {
              const active = pathname === item.href;
              return (
                <li
                  key={item.href}
                  className={`transition-all duration-300 ${
                    open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: open ? `${80 + i * 40}ms` : "0ms" }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`group flex items-baseline gap-4 rounded-xl px-2 py-2.5 font-display text-3xl transition ${
                      active ? "text-brand-bright" : "text-white hover:text-brand-bright"
                    }`}
                  >
                    <span className="text-xs font-sans tracking-[0.2em] text-slate-500 group-hover:text-brand-bright transition">
                      0{i + 1}
                    </span>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom actions */}
        <div
          className={`container relative shrink-0 border-t border-white/10 py-6 space-y-4 transition-all duration-300 ${
            open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: open ? "400ms" : "0ms" }}
        >
          <CTAButton href="/contact" className="w-full" />
          <div className="flex items-center justify-between text-sm text-slate-400">
            <a href="tel:+17023431078" className="font-medium text-white hover:text-brand-bright transition">
              (702) 343-1078
            </a>
            <span className="uppercase tracking-[0.2em] text-xs">
              Las Vegas Locals
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
