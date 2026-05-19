import Link from "next/link";
import { ArrowRight, CalendarDays, GraduationCap, LibraryBig, UsersRound } from "lucide-react";
import { quickLinks } from "@/data/site";

const icons = [GraduationCap, LibraryBig, UsersRound, CalendarDays];

export default function QuickLinks() {
  return (
    <section className="bg-[#F7F8F4] px-4 py-14 sm:px-6">
      <div className="mx-auto grid max-w-[1440px] gap-5 md:grid-cols-2 xl:grid-cols-4">
        {quickLinks.map((item, index) => {
          const Icon = icons[index];
          return (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-[1.75rem] border border-slate-100 bg-white p-6 shadow-2xl shadow-slate-900/10 transition hover:-translate-y-2 hover:border-[#FECB00]"
            >
              <div className="mb-5 grid size-14 place-items-center rounded-2xl bg-[#275D38] text-[#FECB00] transition group-hover:bg-[#FECB00] group-hover:text-[#275D38]">
                <Icon className="size-7" />
              </div>
              <h3 className="text-xl font-black text-slate-950">{item.title}</h3>
              <p className="mt-3 min-h-20 leading-7 text-slate-600">{item.text}</p>
              <span className="mt-5 inline-flex items-center gap-2 font-black text-[#275D38]">
                Open section <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
