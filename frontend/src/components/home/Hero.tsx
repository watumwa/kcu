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
    <section className="relative min-h-[720px] overflow-hidden bg-[#17351f] text-white lg:min-h-[780px]">
      <AnimatePresence mode="wait">
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

      <div className="relative z-10 mx-auto flex min-h-[720px] max-w-[1440px] items-center px-4 pb-28 pt-16 sm:px-6 lg:min-h-[780px] lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={`hero-text-${active}`}
            initial={{ opacity: 0, x: -28, y: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 28, y: -10 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-2xl rounded-[1.75rem] border border-white/35 bg-white/88 p-6 text-[#111827] shadow-2xl shadow-black/25 backdrop-blur-xl md:p-8 lg:p-10"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#275D38] px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-[#FECB00] shadow-sm">
              <GraduationCap className="size-4" /> {current.badge}
            </div>
            <h1 className="text-4xl font-black leading-[1.05] text-[#111827] md:text-5xl lg:text-6xl">
              {current.school}
            </h1>
            <p className="mt-5 text-2xl font-black text-[#A22A23] md:text-3xl">{current.title}</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">{current.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild className="h-[52px] rounded-xl bg-[#FECB00] px-7 text-base font-black text-[#17351f] shadow-xl shadow-black/20 hover:bg-[#e8bb00]">
                <Link href="/admissions/apply-now">{current.cta}</Link>
              </Button>
              <Button asChild variant="outline" className="h-[52px] rounded-xl border-2 border-[#275D38] bg-white px-7 text-base font-bold text-[#275D38] hover:bg-[#275D38] hover:text-white">
                <Link href="/academics/courses">View Programmes</Link>
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-24 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
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
