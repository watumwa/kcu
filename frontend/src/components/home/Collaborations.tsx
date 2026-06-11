"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  { name: "University of Fort Hare", country: "South Africa", logo: "/images/partners/ufh.svg" },
  { name: "Aleksandër Moisiu University Durrës", country: "Albania", logo: "/images/partners/uamd.png" },
  { name: "Universidad de Montevideo", country: "Uruguay", logo: "/images/partners/montevideo.png" },
  { name: "Arab Academy for Science, Technology & Maritime Transport", country: "Egypt", logo: "/images/partners/aast.png" },
  { name: "Superior University", country: "Pakistan", logo: "/images/partners/superior.svg" },
  { name: "Rosebank International University College", country: "Ghana", logo: "/images/partners/riuc.png" },
  { name: "Mulago National Referral Hospital", country: "Uganda", logo: "/images/partners/mulago.jpg" },
  { name: "Kiruddu National Referral Hospital", country: "Uganda", logo: "/images/partners/kiruddu.gif" },
  { name: "Erasmus+ Programme", country: "European Union", logo: "/images/partners/erasmus.svg" },
  { name: "Makerere University", country: "Uganda", logo: "/images/partners/makerere.svg" },
  { name: "RENU", country: "Uganda", logo: "/images/partners/renu.png" },
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
              <div
                key={i}
                className="flex w-60 shrink-0 flex-col justify-between rounded-2xl border border-slate-200 bg-[#F7F9FC] px-5 py-4"
              >
                <div className="mb-3 flex h-14 items-center rounded-xl border border-slate-100 bg-white px-3 py-2">
                  <div className="relative h-full w-full">
                    <Image
                      src={p.logo}
                      alt={`${p.name} logo`}
                      fill
                      sizes="192px"
                      className="object-contain object-left"
                    />
                  </div>
                </div>
                <p className="text-sm font-bold text-slate-900 leading-snug line-clamp-2">
                  {p.name}
                </p>
                <p className="text-[11px] text-slate-400 mt-1">{p.country}</p>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
