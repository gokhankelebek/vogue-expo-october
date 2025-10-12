"use client";
import CTAButton from "./CTAButton";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Don't show on contact page since user is already there
  if (pathname === "/contact") return null;
  if (!visible) return null;

  return (
    <div className="fixed bottom-4 inset-x-0 z-50 flex justify-center">
      <div className="bg-white border border-slate-200 shadow-soft rounded-2xl px-4 py-3 flex items-center gap-4">
        <span className="text-sm hidden sm:inline">
          Ready to plan your booth?
        </span>
        <CTAButton href="/contact">Get a Fast Quote</CTAButton>
      </div>
    </div>
  );
}
