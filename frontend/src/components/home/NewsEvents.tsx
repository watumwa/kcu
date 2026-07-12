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
    <section className="bg-[#F7F9FC] px-4 py-16 sm:px-6 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0B6232]">Latest News & Events</p>
            <h2 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl">Stay Updated</h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-500">
              Campus achievements, research breakthroughs, student life, academic events and university announcements.
            </p>
          </div>
          <form action="/search" className="relative w-full max-w-xs shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
            <input
              name="q"
              placeholder="Search news and events…"
              className="h-10 w-full rounded-full border border-slate-200 bg-white pl-10 pr-4 text-sm outline-none focus:border-[#0B6232] transition-colors"
            />
          </form>
        </div>

        <Link
          href="/news"
          className="group mt-10 grid overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl shadow-slate-900/5 lg:grid-cols-[minmax(360px,0.8fr)_minmax(0,1.2fr)]"
        >
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <div className="flex flex-wrap items-center gap-3">
              <span className={badge(featured.category)}>{featured.category}</span>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400">
                <CalendarDays className="size-3.5" /> {featured.date}
              </span>
            </div>
            <h3 className="mt-5 max-w-xl text-2xl font-black leading-tight text-slate-950 sm:text-3xl lg:text-[2rem]">
              {featured.title}
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">{featured.text}</p>
            <span className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-[#0B6232] px-5 py-2.5 text-xs font-black text-white transition-colors group-hover:bg-[#084b27]">
              More News <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </div>

          <div className="relative min-h-[280px] overflow-hidden bg-[#073F24] sm:min-h-[390px] lg:order-last lg:min-h-[440px]">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>
        </Link>
      </div>
    </section>
  );
}
