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
    <section className="relative z-30 -mt-16 px-4 pb-12 sm:px-6">
      <div className="mx-auto max-w-[1440px] rounded-[1.75rem] border border-[#E5E7EB] bg-white p-5 shadow-2xl shadow-slate-950/12 md:p-7">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div className="border-b border-[#E5E7EB] pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#275D38]">
              Institute of Mathematical Sciences
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-black leading-tight text-[#111827] md:text-4xl">
              Masters Programmes - May Intake
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Advanced programmes for analytics, modelling, risk, research and modern decision-making careers.
            </p>
            <Link
              href="/academics/courses/undergraduate"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#FECB00] px-5 py-3 font-black text-[#17351f] shadow-lg shadow-[#FECB00]/25 transition hover:-translate-y-0.5 hover:bg-[#e8bb00]"
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
                  className="group relative overflow-hidden rounded-2xl border border-[#E5E7EB] bg-[#F7F8F4] p-5 transition hover:-translate-y-1 hover:border-[#FECB00] hover:bg-white hover:shadow-xl hover:shadow-slate-950/10"
                >
                  <span className="absolute inset-x-0 top-0 h-1 bg-[#FECB00]" />
                  <div className="mb-5 grid size-12 place-items-center rounded-xl bg-[#275D38] text-[#FECB00] transition group-hover:bg-[#FECB00] group-hover:text-[#275D38]">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="font-black text-[#111827]">{programme.title}</h3>
                  <p className="mt-2 leading-6 text-slate-600">{programme.text}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
