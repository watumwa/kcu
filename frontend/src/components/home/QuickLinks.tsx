import Link from "next/link";
import { ArrowRight, CalendarDays, GraduationCap, LibraryBig, UsersRound } from "lucide-react";
import { quickLinks } from "@/data/site";

const icons = [GraduationCap, LibraryBig, UsersRound, CalendarDays];

export default function QuickLinks() {
  return (
    <section className="bg-[#FFFFFF] px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto grid max-w-[1440px] gap-4 md:grid-cols-2 xl:grid-cols-4">
        {quickLinks.map((item, index) => {
          const Icon = icons[index];
          return (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-xl border border-slate-100 bg-white p-3 shadow-lg shadow-slate-900/5 transition hover:-translate-y-1 hover:border-[#FFC66B] sm:p-4 md:shadow-2xl md:shadow-slate-900/10"
            >
              <div className="mb-3 grid size-10 place-items-center rounded-lg bg-[#0B6232] text-[#FFC66B] transition group-hover:bg-[#FFC66B] group-hover:text-[#0B6232] sm:size-11">
                <Icon className="size-5" />
              </div>
              <h3 className="text-base font-black text-slate-950 sm:text-lg">{item.title}</h3>
              <p className="mt-2 text-xs leading-5 text-slate-600 sm:min-h-16 sm:text-sm sm:leading-6">{item.text}</p>
              <span className="mt-3 inline-flex items-center gap-2 text-xs font-black text-[#0B6232] sm:text-sm">
                Access <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
