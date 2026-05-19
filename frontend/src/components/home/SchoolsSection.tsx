import Link from "next/link";
import { ArrowRight, BookMarked } from "lucide-react";
import { schools } from "@/data/site";

export default function SchoolsSection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8 flex flex-col justify-between gap-4 md:mb-10 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#275D38] sm:text-sm sm:tracking-[0.2em]">Academics</p>
            <h2 className="mt-3 font-serif text-3xl font-black leading-tight text-slate-950 sm:text-4xl md:text-5xl">Schools, faculties and institutes</h2>
          </div>
          <Link href="/academics" className="inline-flex items-center gap-2 text-sm font-black text-[#275D38] sm:text-base">
            View all academic units <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {schools.map((school, index) => (
            <Link
              href="/academics"
              key={school}
              className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 p-4 shadow-sm transition hover:-translate-y-1 hover:border-[#FECB00] hover:shadow-xl hover:shadow-slate-900/10 sm:p-6 md:rounded-[1.75rem] md:p-7"
            >
              <div className="absolute right-0 top-0 size-20 rounded-bl-full bg-[#FECB00]/20 transition group-hover:bg-[#FECB00]/35 sm:size-28" />
              <div className="relative z-10 grid size-11 place-items-center rounded-xl bg-[#275D38] text-[#FECB00] sm:size-14 sm:rounded-2xl">
                <BookMarked className="size-5 sm:size-7" />
              </div>
              <p className="relative z-10 mt-5 text-xs font-black uppercase tracking-[0.16em] text-slate-400 sm:mt-8 sm:text-sm sm:tracking-[0.18em]">0{index + 1}</p>
              <h3 className="relative z-10 mt-2 text-xl font-black leading-tight text-slate-950 sm:text-2xl">{school}</h3>
              <span className="relative z-10 mt-5 inline-flex items-center gap-2 text-sm font-black text-[#275D38] sm:mt-6 sm:text-base">
                Explore school <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
