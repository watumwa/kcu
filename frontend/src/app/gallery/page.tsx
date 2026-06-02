"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight, Play, Images, ArrowRight, Search,
  GraduationCap, Users, Globe, FlaskConical, X, ChevronLeft,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

// ── Data ──────────────────────────────────────────────────────────────────

const CATEGORIES = ["All", "Campus", "Graduation", "Academics", "Sports", "Events", "Student Life", "Research", "Clubs & Culture", "Labs"];

const albums = [
  { id: 1, title: "Graduation Ceremony 2024", category: "Graduation", date: "Nov 2024", count: 84, featured: true, image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80" },
  { id: 2, title: "August Intake Orientation 2025", category: "Events", date: "Aug 2025", count: 32, featured: true, image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80" },
  { id: 3, title: "Sports Gala", category: "Sports", date: "Mar 2025", count: 56, featured: true, image: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=900&q=80" },
  { id: 4, title: "Guild Leadership Swearing-In", category: "Events", date: "Feb 2025", count: 15, featured: false, image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80" },
  { id: 5, title: "Public Lecture: Universal Jurisdiction", category: "Academics", date: "May 2026", count: 12, featured: false, image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80" },
  { id: 6, title: "Campus Life & Student Activities", category: "Student Life", date: "2025", count: 120, featured: false, image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=900&q=80" },
  { id: 7, title: "NCHE Inspection 2025", category: "Academics", date: "Jun 2025", count: 20, featured: false, image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80" },
  { id: 8, title: "Arts & Culture Week", category: "Clubs & Culture", date: "Oct 2025", count: 28, featured: false, image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80" },
  { id: 9, title: "MOU Signing with HESFS", category: "Events", date: "Apr 2026", count: 10, featured: false, image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80" },
  { id: 10, title: "Inter-Faculty Games", category: "Sports", date: "Nov 2025", count: 22, featured: false, image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=900&q=80" },
  { id: 11, title: "Petroleum Geoscience Field Trip", category: "Research", date: "Mar 2026", count: 17, featured: false, image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80" },
  { id: 12, title: "Rotaract Club Installation 2026", category: "Clubs & Culture", date: "May 2026", count: 14, featured: false, image: "https://images.unsplash.com/photo-1560523159-4a9692d222ef?auto=format&fit=crop&w=900&q=80" },
  { id: 13, title: "Bunga Hill Campus", category: "Campus", date: "2025", count: 45, featured: false, image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=80" },
  { id: 14, title: "Science & Computing Labs", category: "Labs", date: "2025", count: 30, featured: false, image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80" },
  { id: 15, title: "International Students Community", category: "Student Life", date: "2025", count: 38, featured: false, image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80" },
  { id: 16, title: "Moot Court Competition", category: "Academics", date: "Apr 2026", count: 19, featured: false, image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80" },
];

const videos = [
  { id: 1, title: "KCU Campus Virtual Tour", thumbnail: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80", duration: "3:24" },
  { id: 2, title: "Student Testimonials 2025", thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80", duration: "5:10" },
  { id: 3, title: "Graduation Highlights 2024", thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80", duration: "4:47" },
];

const stats = [
  { icon: Users, value: "8,000+", label: "Students" },
  { icon: Images, value: "120+", label: "Events Captured" },
  { icon: GraduationCap, value: "5,000+", label: "Graduates" },
  { icon: Globe, value: "15+", label: "Nationalities" },
  { icon: FlaskConical, value: "30+", label: "Labs & Facilities" },
];

const stories = [
  { title: "Campus Experience", desc: "Explore the vibrant Bunga Hill campus — modern classrooms, green spaces, and facilities built for excellence.", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80" },
  { title: "Innovation & Research", desc: "From petroleum geoscience to computing, KCU students push boundaries across disciplines.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" },
  { title: "Global Community", desc: "Students from Uganda, Nigeria, Tanzania, India and beyond — one vibrant KCU family.", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80" },
];

// ── Lightbox ──────────────────────────────────────────────────────────────

function Lightbox({ album, total, index, onClose, onPrev, onNext }: {
  album: typeof albums[0]; total: number; index: number;
  onClose: () => void; onPrev: () => void; onNext: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute -top-10 right-0 text-white/70 hover:text-white">
          <X className="w-6 h-6" />
        </button>
        <img src={album.image} alt={album.title} className="w-full max-h-[75vh] object-cover rounded-2xl" />
        <div className="mt-3 flex items-center justify-between text-white">
          <div>
            <p className="font-semibold">{album.title}</p>
            <p className="text-sm text-white/60">{album.date} · {album.count} photos</p>
          </div>
          <p className="text-sm text-white/50">Image {index + 1} of {total}</p>
        </div>
        <button onClick={onPrev} className="absolute left-3 top-1/2 -translate-y-1/2 size-10 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 text-white">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={onNext} className="absolute right-3 top-1/2 -translate-y-1/2 size-10 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 text-white">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = albums.filter((a) => {
    const matchCat = activeCategory === "All" || a.category === activeCategory;
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = albums.filter((a) => a.featured);

  const lbIndex = lightbox !== null ? filtered.findIndex((a) => a.id === lightbox) : -1;
  const lbAlbum = lbIndex >= 0 ? filtered[lbIndex] : null;

  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-slate-950">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1800&q=80)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto max-w-[1440px] w-full px-6 lg:px-12 pt-32 pb-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs text-white/50 mb-6">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#FFC66B]">Gallery</span>
          </div>

          <p className="text-[#FFC66B] text-xs font-black tracking-[0.25em] uppercase mb-4">MEDIA</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] max-w-2xl mb-6">
            Campus Life<br />& Memories
          </h1>
          <p className="text-white/65 text-lg max-w-xl leading-relaxed mb-10">
            Discover academic excellence, innovation, culture and student experiences at King Ceasor University.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button className="h-12 px-6 rounded-full bg-[#FFC66B] text-[#0B1A0B] font-black hover:bg-[#FFC66B]/90 shadow-lg shadow-[#FFC66B]/20">
              Explore Campus
            </Button>
            <Button variant="outline" className="h-12 px-6 rounded-full border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 font-semibold">
              Student Life
            </Button>
            <Button variant="outline" className="h-12 px-6 rounded-full border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 font-semibold gap-2">
              <Play className="w-4 h-4 fill-white" /> Watch Video Tour
            </Button>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs">
          <span>Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8 bg-white/30" />
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-[#0B6232]">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center text-center text-white gap-1">
              <Icon className="w-5 h-5 text-[#FFC66B] mb-1" />
              <p className="text-2xl font-black">{value}</p>
              <p className="text-white/65 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured Albums ── */}
      <section className="bg-[#F7F9FC] py-20 px-6 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-xs font-black tracking-[0.2em] uppercase text-[#0B6232] mb-2">Highlights</p>
          <h2 className="text-3xl font-black text-slate-900 mb-10">Featured Albums</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((album) => (
              <button
                key={album.id}
                onClick={() => setLightbox(album.id)}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer text-left"
              >
                <img src={album.image} alt={album.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="inline-block text-[10px] font-black tracking-widest uppercase text-[#FFC66B] mb-1">{album.category}</span>
                  <p className="text-white font-bold text-lg leading-tight">{album.title}</p>
                  <p className="text-white/60 text-sm mt-1 flex items-center gap-1">
                    <Images className="w-3.5 h-3.5" /> {album.count} photos · {album.date}
                  </p>
                </div>
                <div className="absolute top-4 right-4 size-10 grid place-items-center rounded-full bg-white/0 group-hover:bg-white/20 transition-all">
                  <ArrowRight className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Category Filter + Search + Masonry Grid ── */}
      <section className="bg-white py-20 px-6 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-xs font-black tracking-[0.2em] uppercase text-[#0B6232] mb-2">Browse</p>
          <h2 className="text-3xl font-black text-slate-900 mb-8">All Albums</h2>

          {/* Search */}
          <div className="relative max-w-sm mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search photos... "graduation", "sports"'
              className="w-full h-11 pl-11 pr-4 rounded-full border border-slate-200 bg-slate-50 text-sm outline-none focus:border-[#0B6232] focus:bg-white transition-colors"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-[#0B6232] text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + search}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
            >
              {filtered.map((album, i) => (
                <button
                  key={album.id}
                  onClick={() => setLightbox(album.id)}
                  className="group break-inside-avoid w-full rounded-2xl overflow-hidden relative cursor-pointer block"
                  style={{ aspectRatio: i % 5 === 0 ? "3/4" : i % 3 === 0 ? "1/1" : "4/3" }}
                >
                  <img
                    src={album.image}
                    alt={album.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300" />
                  <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[10px] font-black tracking-widest uppercase text-[#FFC66B]">{album.category}</span>
                    <p className="text-white font-bold text-sm leading-snug mt-0.5">{album.title}</p>
                    <p className="text-white/60 text-xs mt-1">{album.date} · {album.count} photos</p>
                    <span className="mt-2 inline-flex items-center gap-1 text-xs text-white font-semibold">
                      View Album <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </button>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <p className="text-center text-slate-400 py-16">No albums found for &quot;{search}&quot;</p>
          )}
        </div>
      </section>

      {/* ── Storytelling Sections ── */}
      <section className="bg-[#F7F9FC] py-20 px-6 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-xs font-black tracking-[0.2em] uppercase text-[#0B6232] mb-2">Stories</p>
          <h2 className="text-3xl font-black text-slate-900 mb-10">Life at KCU</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stories.map((s) => (
              <div key={s.title} className="group rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-52 overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <p className="font-black text-slate-900 mb-2">{s.title}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Video Gallery ── */}
      <section className="bg-slate-950 py-20 px-6 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-xs font-black tracking-[0.2em] uppercase text-[#FFC66B] mb-2">Video</p>
          <h2 className="text-3xl font-black text-white mb-10">Watch & Experience</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {videos.map((v) => (
              <div key={v.id} className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-video">
                <img src={v.thumbnail} alt={v.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="size-14 grid place-items-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 group-hover:bg-[#FFC66B]/80 transition-all">
                    <Play className="w-5 h-5 fill-white text-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold text-sm">{v.title}</p>
                  <p className="text-white/50 text-xs mt-0.5">{v.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0B6232] py-16 px-6 text-center">
        <p className="text-[#FFC66B] text-xs font-black tracking-widest uppercase mb-3">Join Us</p>
        <h2 className="text-3xl font-black text-white mb-3">Ready to be part of the story?</h2>
        <p className="text-white/65 mb-8 max-w-lg mx-auto">Take the next step in your academic journey at King Ceasor University.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild className="h-12 px-8 rounded-full bg-[#FFC66B] text-[#0B1A0B] font-black hover:bg-[#FFC66B]/90">
            <Link href="https://apply.kcu.ac.ug/">Apply Now</Link>
          </Button>
          <Button asChild variant="outline" className="h-12 px-8 rounded-full border-white/30 text-white bg-white/10 hover:bg-white/20 font-semibold">
            <Link href="/about">About KCU</Link>
          </Button>
        </div>
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lbAlbum && (
          <Lightbox
            album={lbAlbum}
            total={filtered.length}
            index={lbIndex}
            onClose={() => setLightbox(null)}
            onPrev={() => setLightbox(filtered[(lbIndex - 1 + filtered.length) % filtered.length].id)}
            onNext={() => setLightbox(filtered[(lbIndex + 1) % filtered.length].id)}
          />
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
