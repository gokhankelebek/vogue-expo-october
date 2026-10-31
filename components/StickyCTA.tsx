"use client";
import CTAButton from "./CTAButton";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // On the home page, wait until the hero's own Quote/Call buttons have
    // scrolled away so the same button never shows twice.
    const heroCtas = document.getElementById("hero-ctas");
    if (heroCtas && "IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        ([entry]) =>
          setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0),
      );
      io.observe(heroCtas);
      return () => io.disconnect();
    }
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  // Don't show on contact page since user is already there
  if (pathname === "/contact") return null;
  if (!visible) return null;

  return (
    <div className="fixed bottom-4 inset-x-0 z-50 flex justify-center">
      <div className="bg-white/95 backdrop-blur border border-slate-200 shadow-2xl rounded-full pl-6 pr-2 py-2 flex items-center gap-4">
        <span className="text-sm text-slate-700 hidden sm:inline">
          Ready to plan your booth?
        </span>
        <CTAButton href="/contact">Get a Fast Quote</CTAButton>
      </div>
    </div>
  );
}
