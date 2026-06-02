"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const partners = [
  { name: "University of Fort Hare", country: "South Africa", url: "https://www.ufh.ac.za" },
  { name: "Aleksandër Moisiu University Durrës", country: "Albania", url: "https://uamd.edu.al/en/" },
  { name: "Universidad de Montevideo", country: "Uruguay", url: "https://www.um.edu.uy/" },
  { name: "Arab Academy for Science, Technology & Maritime Transport", country: "Egypt", url: "https://aast.edu/en/" },
  { name: "Superior University", country: "Pakistan", url: "https://www.superior.edu.pk/" },
  { name: "Rosebank International University College", country: "Ghana", url: "https://www.riuc.edu.gh/" },
  { name: "Vaal University of Technology", country: "South Africa", url: "https://vut.ac.za/" },
  { name: "Dominican University", country: "Nigeria", url: "https://dui.edu.ng/" },
  { name: "Erasmus+ Programme", country: "European Union", url: "https://erasmus-plus.ec.europa.eu" },
  { name: "Makerere University", country: "Uganda", url: "https://cns.mak.ac.ug" },
  { name: "RENU", country: "Uganda", url: "https://renu.ac.ug/" },
];

// Duplicate for seamless loop
const looped = [...partners, ...partners];

export default function Collaborations() {
  return (
    <section className="bg-white py-14 px-4 sm:px-6 lg:px-12 border-t border-slate-100">
      <div className="mx-auto max-w-[1440px]">

        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0B6232] mb-1">Global Network</p>
            <h2 className="text-2xl font-black text-slate-900">Collaborations & Partnerships</h2>
            <p className="text-slate-500 text-sm mt-1">
              KCU partners with leading institutions across Africa, Europe, Asia and the Americas.
            </p>
          </div>
          <Link
            href="/about/collaborations-partnerships"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-black text-[#0B6232] hover:gap-3 transition-all"
          >
            View All <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* Scrolling ticker */}
        <div className="overflow-hidden relative">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-white to-transparent" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 w-max"
          >
            {looped.map((p, i) => (
              <Link
                key={i}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between shrink-0 w-52 rounded-2xl border border-slate-200 bg-[#F7F9FC] px-5 py-4 hover:border-[#0B6232] hover:bg-white hover:shadow-md transition-all duration-200"
              >
                {/* Initials avatar */}
                <div className="size-10 rounded-xl bg-[#0B6232]/10 flex items-center justify-center mb-3">
                  <span className="text-sm font-black text-[#0B6232]">
                    {p.name.split(" ").slice(0, 2).map(w => w[0]).join("")}
                  </span>
                </div>
                <p className="text-sm font-bold text-slate-900 leading-snug line-clamp-2 group-hover:text-[#0B6232] transition-colors">
                  {p.name}
                </p>
                <p className="text-[11px] text-slate-400 mt-1">{p.country}</p>
              </Link>
            ))}
          </motion.div>
        </div>

        <div className="mt-6 sm:hidden">
          <Link
            href="/about/collaborations-partnerships"
            className="inline-flex items-center gap-1.5 text-sm font-black text-[#0B6232]"
          >
            View All Partnerships <ArrowRight className="size-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
