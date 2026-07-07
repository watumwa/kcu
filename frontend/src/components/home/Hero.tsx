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
    <section className="relative min-h-[560px] overflow-hidden bg-[#0B6232] text-white sm:min-h-[680px] lg:min-h-[780px]">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={`hero-slide-${active}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <motion.div
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${current.image})`, backgroundPosition: current.imagePosition ?? "center" }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

          <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[1440px] items-center px-4 pb-16 pt-28 sm:min-h-[680px] sm:px-6 lg:min-h-[780px] lg:px-8">
              <motion.div
                initial={{ opacity: 0, x: -28, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-[11.5cm] flex flex-col justify-between rounded-lg border border-white/30 bg-white/60 p-3 text-[#000000] shadow-xl shadow-black/20 backdrop-blur-md sm:p-4"
              >
                <div>
                  <div className="mb-2 inline-flex max-w-full items-center gap-1.5 rounded-full bg-[#0B6232] px-2.5 py-1 text-[8px] font-black uppercase tracking-[0.08em] text-[#FFC66B] shadow-sm sm:text-[9px]">
                    <GraduationCap className="size-3" /> <span className="truncate">{current.badge}</span>
                  </div>
                  <h1 className="line-clamp-2 text-base font-black leading-[1.12] text-[#000000] sm:text-lg">
                    {current.school}
                  </h1>
                  <p className="mt-1.5 line-clamp-2 text-xs font-black leading-tight text-[#0B6232] sm:text-sm">{current.title}</p>
                  <p className="mt-2 line-clamp-2 text-[11px] leading-4 text-slate-700 sm:text-xs">{current.subtitle}</p>
                </div>
                <div className="mt-3 grid gap-2 sm:flex sm:flex-wrap">
                  <Button asChild className="h-8 rounded-md bg-[#FFC66B] px-3 text-xs font-black text-[#0B6232] shadow-xl shadow-black/20 hover:bg-[#FFC66B]">
                    <Link href={current.link ?? "https://apply.kcu.ac.ug/"}>{current.cta}</Link>
                  </Button>
                  <Button asChild variant="outline" className="h-8 rounded-md border-2 border-[#0B6232] bg-white/70 px-3 text-xs font-bold text-[#0B6232] backdrop-blur-sm hover:bg-[#0B6232] hover:text-white">
                    <Link href="/academics/courses">View Programmes</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={previous}
        className="absolute left-4 top-1/2 z-20 hidden size-12 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-[#0B6232] shadow-xl transition hover:bg-[#FFC66B] md:grid xl:left-8"
        aria-label="Previous hero slide"
      >
        <ArrowLeft className="size-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 z-20 hidden size-12 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-[#0B6232] shadow-xl transition hover:bg-[#FFC66B] md:grid xl:right-8"
        aria-label="Next hero slide"
      >
        <ArrowRight className="size-5" />
      </button>

      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 sm:bottom-24">
        {heroSlides.map((slide, index) => {
          const slideLabel = slide.school || slide.title || slide.badge;

          return (
            <button
              key={`${slide.image}-${index}`}
              onClick={() => setActive(index)}
              className={`h-2.5 rounded-full transition-all ${index === active ? "w-12 bg-[#FFC66B]" : "w-3 bg-white/60 hover:bg-white"}`}
              aria-label={`Go to ${slideLabel} slide`}
            />
          );
        })}
      </div>
    </section>
  );
}
