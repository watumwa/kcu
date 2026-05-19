import Link from "next/link";
import { ArrowRight, CalendarDays, GraduationCap, LibraryBig, UsersRound } from "lucide-react";
import { quickLinks } from "@/data/site";

const icons = [GraduationCap, LibraryBig, UsersRound, CalendarDays];

export default function QuickLinks() {
  return (
    <section className="bg-[#F7F8F4] px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto grid max-w-[1440px] gap-4 md:grid-cols-2 xl:grid-cols-4">
        {quickLinks.map((item, index) => {
          const Icon = icons[index];
          return (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-2xl border border-slate-100 bg-white p-4 shadow-lg shadow-slate-900/5 transition hover:-translate-y-1 hover:border-[#FECB00] sm:p-5 md:rounded-[1.75rem] md:p-6 md:shadow-2xl md:shadow-slate-900/10"
            >
              <div className="mb-4 grid size-11 place-items-center rounded-xl bg-[#275D38] text-[#FECB00] transition group-hover:bg-[#FECB00] group-hover:text-[#275D38] sm:size-14 sm:rounded-2xl">
                <Icon className="size-5 sm:size-7" />
              </div>
              <h3 className="text-lg font-black text-slate-950 sm:text-xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 sm:mt-3 sm:min-h-20 sm:text-base sm:leading-7">{item.text}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-[#275D38] sm:mt-5 sm:text-base">
                Open section <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
