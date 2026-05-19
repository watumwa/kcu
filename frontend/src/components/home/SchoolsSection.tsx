import Link from "next/link";
import { ArrowRight, BookMarked } from "lucide-react";
import { schools } from "@/data/site";

export default function SchoolsSection() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#275D38]">Academics</p>
            <h2 className="mt-4 font-serif text-4xl font-black text-slate-950 md:text-5xl">Schools, faculties and institutes</h2>
          </div>
          <Link href="/academics" className="inline-flex items-center gap-2 font-black text-[#275D38]">
            View all academic units <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {schools.map((school, index) => (
            <Link
              href="/academics"
              key={school}
              className="group relative overflow-hidden rounded-[1.75rem] border border-slate-100 bg-slate-50 p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#FECB00] hover:shadow-xl hover:shadow-slate-900/10"
            >
              <div className="absolute right-0 top-0 size-28 rounded-bl-full bg-[#FECB00]/20 transition group-hover:bg-[#FECB00]/35" />
              <div className="relative z-10 grid size-14 place-items-center rounded-2xl bg-[#275D38] text-[#FECB00]">
                <BookMarked className="size-7" />
              </div>
              <p className="relative z-10 mt-8 text-sm font-black uppercase tracking-[0.18em] text-slate-400">0{index + 1}</p>
              <h3 className="relative z-10 mt-2 text-2xl font-black leading-tight text-slate-950">{school}</h3>
              <span className="relative z-10 mt-6 inline-flex items-center gap-2 font-black text-[#275D38]">
                Explore school <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
