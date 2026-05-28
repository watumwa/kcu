"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  FileText,
  GraduationCap,
  Images,
  ShieldCheck,
} from "lucide-react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";

const countdownTarget = new Date("2026-07-03T09:00:00+03:00");

const fees = [
  { label: "Graduation fee", value: "USD 300", covers: "Ceremony Glown, Graduation Booklet, Venue Arrangements, and Academic Procession Support." },
  // { label: "Graduation gown", value: "UGX 100,000", covers: "Gown hire, hood, cap, and regalia handling." },
  // { label: "Certificate processing", value: "UGX 50,000", covers: "Certificate preparation, verification, and records processing." },
];

const checklist = [
  "Confirm that all tuition and functional fees are fully paid.",
  "Complete academic, library, finance, ICT, and student affairs clearance.",
  "Submit the completed clearance form to the Academic Registrar's office.",
  "Verify spelling and order of names for the graduation booklet and certificate.",
  "Pay graduation-related fees and keep proof of payment.",
  "Pick up graduation regalia during the official collection window.",
];

const guidelines = [
  "Graduands should arrive early enough for registration, robing, and procession formation.",
  "Only cleared graduands will be included in the final graduation list.",
  "Graduation gowns must be returned in good condition within the communicated deadline.",
  "Guests should follow campus security, seating, photography, and procession instructions.",
  "Graduands should dress formally and observe the ceremony programme throughout the event.",
];

const gallery = [
  {
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=85",
    title: "Academic procession",
  },
  {
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85",
    title: "Graduands and families",
  },
  {
    image: "https://images.unsplash.com/photo-1567168544646-208fa5d408fb?auto=format&fit=crop&w=1200&q=85",
    title: "Ceremony moments",
  },
];

function getCountdownParts() {
  const difference = Math.max(countdownTarget.getTime() - Date.now(), 0);
  const day = 1000 * 60 * 60 * 24;
  const hour = 1000 * 60 * 60;
  const minute = 1000 * 60;

  return [
    { label: "Days", value: Math.floor(difference / day) },
    { label: "Hours", value: Math.floor((difference % day) / hour) },
    { label: "Minutes", value: Math.floor((difference % hour) / minute) },
    { label: "Seconds", value: Math.floor((difference % minute) / 1000) },
  ];
}

export default function GraduationPage() {
  const [countdown, setCountdown] = useState(getCountdownParts);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setCountdown(getCountdownParts()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const activeGalleryItem = useMemo(() => gallery[activeSlide], [activeSlide]);

  const moveSlide = (direction: -1 | 1) => {
    setActiveSlide((current) => (current + direction + gallery.length) % gallery.length);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1800&q=85')" }} />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent" />
          <div className="relative z-10 mx-auto max-w-[1440px]">
            <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#FFC66B]">
              <GraduationCap className="size-4" /> Academics
            </p>
            <h1 className="mt-3 max-w-4xl font-serif text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
              Graduation <span className="block text-[#FFC66B]">Ceremonies</span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
              Notices, clearance guidance, fees, ceremony preparation, and graduation day information for KCU graduands.
            </p>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-lg bg-[#0B6232] p-6 text-white sm:p-8">
              <div className="flex items-center gap-3">
                <CalendarDays className="size-7 text-[#FFC66B]" />
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#FFC66B]">Graduation Notice</p>
              </div>
              <h2 className="mt-4 text-2xl font-black leading-tight sm:text-3xl">Clearance is required before inclusion on the final graduation list.</h2>
              <p className="mt-4 text-sm leading-7 text-white/80 sm:text-base">
                Prospective graduands should confirm academic eligibility, complete all clearance stages, settle outstanding balances, and verify their details with the Academic Registrar before the published deadline.
              </p>
              <Button asChild className="mt-6 h-11 rounded-lg bg-[#FFC66B] px-5 font-black text-[#0B6232] hover:bg-[#FFC66B]">
                <Link href="#clearance-form">View Clearance Form <ArrowRight className="ml-2 size-4" /></Link>
              </Button>
            </div>

            <div className="rounded-lg border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
              <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#0B6232]">
                <CalendarDays className="size-4" /> Graduation Countdown
              </p>
              <h2 className="mt-3 text-2xl font-black text-slate-950">03 July 2026</h2>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {countdown.map((item) => (
                  <div key={item.label} className="rounded-lg bg-slate-50 p-4 text-center">
                    <p className="text-3xl font-black text-[#0B6232]">{String(item.value).padStart(2, "0")}</p>
                    <p className="mt-1 text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="clearance-form" className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0B6232]">Clearance Form</p>
              <h2 className="mt-2 text-3xl font-black leading-tight text-slate-950">Graduation clearance stages</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                Use the clearance form to confirm that every responsible office has cleared you for graduation. Submit the completed form with proof of payment where required.
              </p>
              <Button asChild className="mt-6 h-11 rounded-lg bg-[#0B6232] px-5 font-black text-white hover:bg-[#0B6232]">
                <Link href="/academics/graduation#checklist">Open Checklist <ClipboardCheck className="ml-2 size-4" /></Link>
              </Button>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {["Academic Department", "Library", "Finance Office", "ICT Office", "Dean of Students", "Academic Registrar"].map((office) => (
                <div key={office} className="rounded-lg border border-slate-100 bg-white p-4 shadow-sm">
                  <FileText className="size-6 text-[#0B6232]" />
                  <p className="mt-3 text-sm font-black text-slate-950">{office}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">Signature, stamp, date, and remarks.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-[1440px]">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0B6232]">Graduation Fees</p>
            <h2 className="mt-2 text-3xl font-black text-slate-950">Fees and what they cover</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {fees.map((fee) => (
                <div key={fee.label} className="rounded-lg border border-slate-100 bg-white p-6 shadow-sm">
                  <Banknote className="size-7 text-[#0B6232]" />
                  <h3 className="mt-4 text-lg font-black text-slate-950">{fee.label}</h3>
                  <p className="mt-2 text-2xl font-black text-[#0B6232]">{fee.value}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{fee.covers}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0B6232] px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#FFC66B]">
                <Images className="size-4" /> Gallery
              </p>
              <h2 className="mt-2 text-3xl font-black leading-tight">Graduation moments</h2>
              <p className="mt-4 text-sm leading-7 text-white/75 sm:text-base">
                Slide through sample ceremony highlights and moments from campus life.
              </p>
              <div className="mt-6 flex gap-3">
                <button type="button" onClick={() => moveSlide(-1)} className="grid size-11 place-items-center rounded-lg border border-white/20 bg-white/10 transition hover:bg-white hover:text-[#0B6232]" aria-label="Previous gallery image">
                  <ChevronLeft className="size-5" />
                </button>
                <button type="button" onClick={() => moveSlide(1)} className="grid size-11 place-items-center rounded-lg border border-white/20 bg-white/10 transition hover:bg-white hover:text-[#0B6232]" aria-label="Next gallery image">
                  <ChevronRight className="size-5" />
                </button>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-black">
              <Image
                src={activeGalleryItem.image}
                alt={activeGalleryItem.title}
                width={1200}
                height={760}
                className="h-[320px] w-full object-cover sm:h-[430px]"
              />
              <div className="flex items-center justify-between bg-white px-4 py-3 text-slate-950">
                <p className="text-sm font-black">{activeGalleryItem.title}</p>
                <p className="text-xs font-black text-[#0B6232]">{activeSlide + 1} / {gallery.length}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="checklist" className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-2">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0B6232]">Checklist</p>
              <h2 className="mt-2 text-3xl font-black text-slate-950">Before graduation day</h2>
              <div className="mt-6 grid gap-3">
                {checklist.map((item) => (
                  <div key={item} className="flex gap-3 rounded-lg border border-slate-100 bg-white p-4 shadow-sm">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#0B6232]" />
                    <p className="text-sm leading-6 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0B6232]">Guidelines</p>
              <h2 className="mt-2 text-3xl font-black text-slate-950">Ceremony conduct</h2>
              <div className="mt-6 grid gap-3">
                {guidelines.map((item) => (
                  <div key={item} className="flex gap-3 rounded-lg bg-slate-50 p-4">
                    <ShieldCheck className="mt-0.5 size-5 shrink-0 text-[#0B6232]" />
                    <p className="text-sm leading-6 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
