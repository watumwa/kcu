"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, GraduationCap } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { heroSlides } from "@/data/site";

export default function Hero() {
  const [active, setActive] = useState(0);
  const current = heroSlides[active];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((currentIndex) => (currentIndex + 1) % heroSlides.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, []);

  const next = () => setActive((active + 1) % heroSlides.length);
  const previous = () => setActive((active - 1 + heroSlides.length) % heroSlides.length);

  return (
    <section className="relative min-h-[560px] overflow-hidden bg-[#17351f] text-white sm:min-h-[680px] lg:min-h-[780px]">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={current.image}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${current.image})` }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-[#0b2113]/95 via-[#17351f]/70 to-[#17351f]/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <button
        onClick={previous}
        className="absolute left-4 top-1/2 z-20 hidden size-12 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-[#275D38] shadow-xl transition hover:bg-[#FECB00] md:grid xl:left-8"
        aria-label="Previous hero slide"
      >
        <ArrowLeft className="size-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 z-20 hidden size-12 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-[#275D38] shadow-xl transition hover:bg-[#FECB00] md:grid xl:right-8"
        aria-label="Next hero slide"
      >
        <ArrowRight className="size-5" />
      </button>

      <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[1440px] items-start px-4 pb-20 pt-24 sm:min-h-[680px] sm:items-center sm:px-6 lg:min-h-[780px] lg:px-8">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`hero-text-${active}`}
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 28, y: -10 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-[23rem] rounded-lg border border-white/35 bg-white/90 p-3 text-[#111827] shadow-2xl shadow-black/25 backdrop-blur-xl sm:p-3.5 md:p-4"
          >
            <div className="mb-2 inline-flex max-w-full items-center gap-1.5 rounded-full bg-[#275D38] px-2.5 py-1 text-[8px] font-black uppercase tracking-[0.08em] text-[#FECB00] shadow-sm sm:text-[9px]">
              <GraduationCap className="size-3" /> {current.badge}
            </div>
            <h1 className="text-lg font-black leading-[1.12] text-[#111827] sm:text-xl md:text-2xl">
              {current.school}
            </h1>
            <p className="mt-1.5 text-sm font-black leading-tight text-[#A22A23] sm:text-base">{current.title}</p>
            <p className="mt-2.5 max-w-sm text-xs leading-5 text-slate-700">{current.subtitle}</p>
            <div className="mt-3 grid gap-2 sm:flex sm:flex-wrap">
              <Button asChild className="h-9 rounded-md bg-[#FECB00] px-3 text-xs font-black text-[#17351f] shadow-xl shadow-black/20 hover:bg-[#e8bb00]">
                <Link href="/admissions/apply-now">{current.cta}</Link>
              </Button>
              <Button asChild variant="outline" className="h-9 rounded-md border-2 border-[#275D38] bg-white px-3 text-xs font-bold text-[#275D38] hover:bg-[#275D38] hover:text-white">
                <Link href="/academics/courses">View Programmes</Link>
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 sm:bottom-24">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.school}
            onClick={() => setActive(index)}
            className={`h-2.5 rounded-full transition-all ${index === active ? "w-12 bg-[#FECB00]" : "w-3 bg-white/60 hover:bg-white"}`}
            aria-label={`Go to ${slide.school} slide`}
          />
        ))}
      </div>
    </section>
  );
}
