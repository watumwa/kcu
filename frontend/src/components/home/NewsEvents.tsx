import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { newsItems } from "@/data/site";

export default function NewsEvents() {
  return (
    <section className="bg-[#F7F8F4] px-6 py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#275D38]">News and events</p>
            <h2 className="mt-4 font-serif text-4xl font-black text-slate-950 md:text-5xl">Latest from the university</h2>
          </div>
          <Link href="/news" className="inline-flex items-center gap-2 font-black text-[#275D38]">
            View all news <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {newsItems.map((item) => (
            <article key={item.title} className="rounded-[1.75rem] bg-white p-6 shadow-xl shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10">
              <div className="mb-8 flex items-center justify-between">
                <span className="rounded-full bg-[#FECB00]/25 px-4 py-2 text-sm font-black text-[#275D38]">{item.category}</span>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-slate-500">
                  <CalendarDays className="size-4" /> {item.date}
                </span>
              </div>
              <h3 className="text-2xl font-black leading-tight text-slate-950">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
              <Link href="/news" className="mt-6 inline-flex items-center gap-2 font-black text-[#275D38]">
                Read more <ArrowRight className="size-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
