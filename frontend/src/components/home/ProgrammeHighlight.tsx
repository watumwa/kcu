import { BarChart3, BookOpenCheck, Calculator, LineChart, MoveUpRight } from "lucide-react";
import Link from "next/link";

const programmes = [
  {
    icon: BarChart3,
    title: "Data Science and Analytics",
    text: "Master of Science in Data Science and Analytics",
  },
  {
    icon: Calculator,
    title: "Statistical Science",
    text: "Master of Science in Statistical Science",
  },
  {
    icon: BookOpenCheck,
    title: "Biomathematics",
    text: "Master of Science in Biomathematics",
  },
  {
    icon: LineChart,
    title: "Finance and Risk",
    text: "Master of Science in Mathematical Finance and Risk Analytics",
  },
];

export default function ProgrammeHighlight() {
  return (
    <section className="relative z-30 px-4 py-10 sm:-mt-14 sm:px-6 sm:pb-12 sm:pt-0">
      <div className="mx-auto max-w-[1440px] rounded-2xl border border-[#E5E7EB] bg-white p-4 shadow-xl shadow-slate-950/10 sm:p-5 md:rounded-[1.75rem] md:p-7 md:shadow-2xl md:shadow-slate-950/12">
        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div className="border-b border-[#E5E7EB] pb-5 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#275D38] sm:text-sm sm:tracking-[0.2em]">
              Institute of Mathematical Sciences
            </p>
            <h2 className="mt-3 max-w-xl text-2xl font-black leading-tight text-[#111827] sm:text-3xl md:text-4xl">
              Masters Programmes - May Intake
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              Advanced programmes for analytics, modelling, risk, research and modern decision-making careers.
            </p>
            <Link
              href="/academics/courses/undergraduate"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#FECB00] px-4 py-3 text-sm font-black text-[#17351f] shadow-lg shadow-[#FECB00]/25 transition hover:-translate-y-0.5 hover:bg-[#e8bb00] sm:px-5 sm:text-base"
            >
              Explore intake <MoveUpRight className="size-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {programmes.map((programme) => {
              const Icon = programme.icon;
              return (
                <Link
                  href="/academics/courses"
                  key={programme.title}
                  className="group relative overflow-hidden rounded-xl border border-[#E5E7EB] bg-[#F7F8F4] p-4 transition hover:-translate-y-1 hover:border-[#FECB00] hover:bg-white hover:shadow-xl hover:shadow-slate-950/10 sm:rounded-2xl sm:p-5"
                >
                  <span className="absolute inset-x-0 top-0 h-1 bg-[#FECB00]" />
                  <div className="mb-4 grid size-10 place-items-center rounded-xl bg-[#275D38] text-[#FECB00] transition group-hover:bg-[#FECB00] group-hover:text-[#275D38] sm:size-12">
                    <Icon className="size-5 sm:size-6" />
                  </div>
                  <h3 className="font-black text-[#111827]">{programme.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">{programme.text}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
