"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CalendarDays, MapPin, Search, Megaphone } from "lucide-react";
import { newsItems, upcomingEvents } from "@/data/site";

const FILTERS = ["All", "Admissions", "Events", "Research", "Student Life", "Partnerships", "Finance", "Announcements"];

const TICKER_ITEMS = [
  "KCU signs strategic partnership with Tecnovia to expand student skills and employment opportunities",
  "Department of Law signs MoU with Praxis Conflict Centre for ADR education and practice",
  "KCU Law students honoured for regional moot and debate competition success",
  "Student loan applications for the 2026/27 academic year are open",
  "KCU participates in the Erasmus Teaching Staff Mobility Exchange Programme",
];

const CATEGORY_COLORS: Record<string, string> = {
  Admissions: "bg-blue-50 text-blue-700",
  Events: "bg-purple-50 text-purple-700",
  Research: "bg-emerald-50 text-emerald-700",
  "Student Life": "bg-orange-50 text-orange-700",
  Partnerships: "bg-[#FFC66B]/20 text-[#0B6232]",
  Finance: "bg-slate-100 text-slate-700",
  Announcements: "bg-red-50 text-red-700",
};

function badge(cat: string) {
  return `inline-block rounded-full px-2.5 py-0.5 text-[10px] font-black uppercase tracking-widest ${CATEGORY_COLORS[cat] ?? "bg-slate-100 text-slate-600"}`;
}

export default function NewsEvents() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const featured = newsItems.find((n) => n.featured)!;
  const rest = newsItems.filter((n) => !n.featured);

  const filtered = rest.filter((n) => {
    const matchFilter = activeFilter === "All" || n.category === activeFilter;
    const matchSearch = n.title.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <section className="bg-[#F7F9FC] py-20 px-4 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-[1440px] space-y-14">

        {/* ── Announcement Ticker ── */}
        <div className="flex items-center gap-3 overflow-hidden rounded-xl border border-[#0B6232]/20 bg-white px-4 py-3 shadow-sm">
          <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-[#0B6232] px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#FFC66B]">
            <Megaphone className="size-3" /> Live
          </span>
          <div className="overflow-hidden flex-1">
            <motion.div
              animate={{ x: ["100%", "-100%"] }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="flex gap-12 whitespace-nowrap text-sm font-semibold text-slate-700"
            >
              {[...TICKER_ITEMS, ...TICKER_ITEMS].map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ── Section Header ── */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0B6232]">Latest News & Events</p>
            <h2 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl">Stay Updated</h2>
            <p className="mt-2 max-w-xl text-slate-500 text-sm leading-relaxed">
              Campus achievements research breakthroughs, student life, academic events and university announcements.
            </p>
          </div>
          {/* Search */}
          <div className="relative w-full max-w-xs shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search news and events…"
              className="h-10 w-full rounded-full border border-slate-200 bg-white pl-10 pr-4 text-sm outline-none focus:border-[#0B6232] transition-colors"
            />
          </div>
        </div>

        {/* ── Featured Hero Card ── */}
        <Link
          href={featured.href ?? "/news"}
          target={featured.href?.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="group relative flex min-h-[360px] overflow-hidden rounded-2xl shadow-xl"
        >
          <img
            src={featured.image}
            alt={featured.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
          <div className="relative z-10 flex flex-col justify-end p-7 sm:p-10">
            <span className={`${badge(featured.category)} mb-3 self-start`}>{featured.category}</span>
            <h3 className="max-w-2xl text-2xl font-black leading-snug text-white sm:text-3xl">
              {featured.title}
            </h3>
            <p className="mt-3 max-w-xl text-sm text-white/70 leading-relaxed line-clamp-2">{featured.text}</p>
            <div className="mt-5 flex items-center gap-4">
              <span className="inline-flex items-center gap-1.5 text-xs text-white/50">
                <CalendarDays className="size-3.5" /> {featured.date}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFC66B] px-4 py-1.5 text-xs font-black text-[#0B1A0B] transition group-hover:bg-white">
                Read Story <ArrowRight className="size-3.5" />
              </span>
            </div>
          </div>
        </Link>

        {/* ── Filters ── */}
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-all ${
                activeFilter === f
                  ? "bg-[#0B6232] text-white shadow-md"
                  : "bg-white border border-slate-200 text-slate-600 hover:border-[#0B6232] hover:text-[#0B6232]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* ── News Grid + Events Timeline ── */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">

          {/* News Grid — 2/3 */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter + search}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid gap-5 sm:grid-cols-2"
              >
                {filtered.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href ?? "/news"}
                    target={item.href?.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <span className={`${badge(item.category)} self-start mb-2`}>{item.category}</span>
                      <h3 className="font-black text-slate-900 leading-snug group-hover:text-[#0B6232] transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs text-slate-500 leading-relaxed line-clamp-2 flex-1">{item.text}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 text-[11px] text-slate-400">
                          <CalendarDays className="size-3" /> {item.date}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-black text-[#0B6232] group-hover:gap-2 transition-all">
                          Read More <ArrowRight className="size-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
                {filtered.length === 0 && (
                  <p className="col-span-2 py-10 text-center text-slate-400">No results for &quot;{search}&quot;</p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Events Timeline — 1/3 */}
          <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6 h-fit">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0B6232] mb-1">Calendar</p>
            <h3 className="text-xl font-black text-slate-900 mb-6">Upcoming Events</h3>
            <div className="relative space-y-0">
              {/* Timeline line */}
              <div className="absolute left-6 top-2 bottom-2 w-px bg-slate-100" />
              {upcomingEvents.map((ev, i) => (
                <div key={i} className="group relative flex gap-4 pb-7 last:pb-0">
                  {/* Date block */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xl bg-[#0B6232] text-white shadow-md shadow-[#0B6232]/20">
                    <span className="text-[9px] font-black uppercase tracking-wider text-[#FFC66B]">{ev.month}</span>
                    <span className="text-lg font-black leading-none">{ev.day}</span>
                  </div>
                  <div className="flex-1 pt-1">
                    <span className="inline-block rounded-full bg-[#FFC66B]/20 px-2 py-0.5 text-[9px] font-black uppercase tracking-widest text-[#0B6232] mb-1">
                      {ev.status}
                    </span>
                    <p className="font-bold text-sm text-slate-900 leading-snug group-hover:text-[#0B6232] transition-colors">
                      {ev.title}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 mt-0.5">
                      <MapPin className="size-3" /> {ev.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/news"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-black text-[#0B6232] hover:gap-2.5 transition-all"
            >
              View Full Calendar <ArrowRight className="size-3.5" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
