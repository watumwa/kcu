"use client";

import { ArrowRight, GraduationCap } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const applyUrl = "https://apply.kcu.ac.ug/";
const hiddenRoutes = new Set(["/about/collaborations-partnerships"]);

export default function FloatingApplyButton() {
  const pathname = usePathname();
  const [isHidden, setIsHidden] = useState(false);

  const shouldHideOnRoute = hiddenRoutes.has(pathname);

  useEffect(() => {
    const updateVisibility = () => {
      setIsHidden(window.scrollY > 12);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  if (shouldHideOnRoute) {
    return null;
  }

  return (
    <Link
      href={applyUrl}
      aria-label="Apply now to King Ceasor University"
      className={`fixed bottom-24 right-4 z-[65] inline-flex items-center gap-2 rounded-full border border-[#FFC66B]/80 bg-[#0B6232] px-4 py-3 text-sm font-black text-white shadow-2xl shadow-slate-950/30 transition duration-300 hover:-translate-y-1 hover:bg-[#0B6232] focus:outline-none focus:ring-4 focus:ring-[#FFC66B]/35 sm:bottom-28 sm:right-6 sm:px-5 lg:bottom-auto lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:rounded-l-2xl lg:rounded-r-none lg:px-4 lg:py-5 lg:hover:-translate-x-1 lg:hover:-translate-y-1/2 ${
        isHidden
          ? "pointer-events-none translate-y-4 opacity-0 lg:translate-x-full lg:-translate-y-1/2"
          : "opacity-100"
      }`}
    >
      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#FFC66B] text-[#0B6232] shadow-sm">
        <GraduationCap className="size-5" />
      </span>
      <span className="leading-tight">
        <span className="block text-[10px] uppercase tracking-[0.14em] text-[#FFC66B]">Admissions</span>
        <span className="inline-flex items-center gap-1">
          Apply Now <ArrowRight className="size-4" />
        </span>
      </span>
    </Link>
  );
}
