import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { newsItems } from "@/data/site";

export default function NewsEvents() {
  return (
    <section className="bg-[#FFFFFF] px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8 flex flex-col justify-between gap-4 md:mb-10 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#0B6232] sm:text-sm sm:tracking-[0.2em]">News and events</p>
            <h2 className="mt-3 font-serif text-2xl font-black leading-tight text-slate-950 sm:text-3xl md:text-4xl">Latest from the university</h2>
          </div>
          <Link href="/news" className="inline-flex items-center gap-2 text-sm font-black text-[#0B6232] sm:text-base">
            View all news <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {newsItems.map((item) => (
            <article key={item.title} className="rounded-xl bg-white p-3 shadow-lg shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10 sm:p-4">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full bg-[#FFC66B]/25 px-3 py-1.5 text-xs font-black text-[#0B6232]">{item.category}</span>
                <span className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 sm:text-sm">
                  <CalendarDays className="size-4" /> {item.date}
                </span>
              </div>
              <h3 className="text-lg font-black leading-tight text-slate-950 sm:text-xl">{item.title}</h3>
              <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">{item.text}</p>
              <Link href="/news" className="mt-4 inline-flex items-center gap-2 text-xs font-black text-[#0B6232] sm:text-sm">
                Read more <ArrowRight className="size-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
