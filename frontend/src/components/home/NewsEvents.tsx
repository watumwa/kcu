import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { newsItems } from "@/data/site";

export default function NewsEvents() {
  return (
    <section className="bg-[#F7F8F4] px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8 flex flex-col justify-between gap-4 md:mb-10 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#275D38] sm:text-sm sm:tracking-[0.2em]">News and events</p>
            <h2 className="mt-3 font-serif text-3xl font-black leading-tight text-slate-950 sm:text-4xl md:text-5xl">Latest from the university</h2>
          </div>
          <Link href="/news" className="inline-flex items-center gap-2 text-sm font-black text-[#275D38] sm:text-base">
            View all news <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {newsItems.map((item) => (
            <article key={item.title} className="rounded-2xl bg-white p-4 shadow-lg shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10 sm:p-5 md:rounded-[1.75rem] md:p-6">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3 sm:mb-8">
                <span className="rounded-full bg-[#FECB00]/25 px-3 py-1.5 text-xs font-black text-[#275D38] sm:px-4 sm:py-2 sm:text-sm">{item.category}</span>
                <span className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 sm:text-sm">
                  <CalendarDays className="size-4" /> {item.date}
                </span>
              </div>
              <h3 className="text-xl font-black leading-tight text-slate-950 sm:text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">{item.text}</p>
              <Link href="/news" className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#275D38] sm:mt-6 sm:text-base">
                Read more <ArrowRight className="size-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
