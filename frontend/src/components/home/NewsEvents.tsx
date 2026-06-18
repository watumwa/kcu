import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarDays, Search } from "lucide-react";
import { newsItems } from "@/data/site";

const CATEGORY_COLORS: Record<string, string> = {
  Admissions: "bg-blue-50 text-blue-700",
  Events: "bg-purple-50 text-purple-700",
  Research: "bg-emerald-50 text-emerald-700",
  "Student Life": "bg-orange-50 text-orange-700",
  Partnerships: "bg-[#FFC66B]/20 text-[#0B6232]",
  Community: "bg-emerald-50 text-[#0B6232]",
  Finance: "bg-slate-100 text-slate-700",
  Announcements: "bg-red-50 text-red-700",
};

function badge(cat: string) {
  return `inline-block rounded-full px-2.5 py-0.5 text-[10px] font-black uppercase tracking-widest ${CATEGORY_COLORS[cat] ?? "bg-slate-100 text-slate-600"}`;
}

export default function NewsEvents() {
  const featured = newsItems.find((n) => n.featured)!;

  return (
    <section className="bg-[#F7F9FC] py-20 px-4 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-[1440px] space-y-14">
        {/* ── Section Header ── */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0B6232]">Latest News & Events</p>
            <h2 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl">Stay Updated</h2>
            <p className="mt-2 max-w-xl text-slate-500 text-sm leading-relaxed">
              Campus achievements research breakthroughs, student life, academic events and university announcements
            </p>
          </div>
          {/* Search */}
          <form action="/search" className="relative w-full max-w-xs shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
            <input
              name="q"
              placeholder="Search news and events…"
              className="h-10 w-full rounded-full border border-slate-200 bg-white pl-10 pr-4 text-sm outline-none focus:border-[#0B6232] transition-colors"
            />
          </form>
        </div>

        {/* ── Featured Hero Card ── */}
        <Link
          href={featured.href ?? "/news"}
          target={featured.href?.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="group relative flex min-h-[360px] overflow-hidden rounded-2xl shadow-xl"
        >
          <Image
            src={featured.image}
            alt={featured.title}
            fill
            sizes="(min-width: 1024px) 92vw, calc(100vw - 32px)"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
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
      </div>
    </section>
  );
}
