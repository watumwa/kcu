import { BarChart3, BookOpenCheck, Calculator, LineChart, MoveUpRight } from "lucide-react";
import Link from "next/link";

const programmes = [
  {
    icon: BarChart3,
    title: "Undergraduate Programs",
    text: "Medicine & Surgery | Nursing | Law | Business Administration | Applied Economics | Petroluem Geoscience | Computer Forensincs | Oil, Gas & Energy Management",
  },
  {
    icon: Calculator,
    title: "Diploma Programmes",
    text: "Clinical Medicine | Medical Lab Technology | Global Business",
  },
  {
    icon: BookOpenCheck,
    title: "Short Courses",
    text: "Explore our wide range of Short Courses: Instructor Guided or Self-Paced ",
  },
  {
    icon: LineChart,
    title: "Higher Education Certificates (HEC)",
    text: "Biological Sciences | Physical Sciences | Humanities",
  },
];

export default function ProgrammeHighlight() {
  return (
    <section className="relative z-30 px-4 py-10 sm:-mt-14 sm:px-6 sm:pb-12 sm:pt-0">
      <div className="mx-auto max-w-[1440px] rounded-xl border border-[#000000] bg-white p-3 shadow-xl shadow-slate-950/10 sm:p-4 md:p-5 md:shadow-2xl md:shadow-slate-950/12">
        <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div className="border-b border-[#000000] pb-4 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#0B6232] sm:text-sm sm:tracking-[0.2em]">
              King Ceasor University
            </p>
            <h2 className="mt-2 max-w-xl text-xl font-black leading-tight text-[#000000] sm:text-2xl md:text-3xl">
              August Intake - OPEN
            </h2>
            <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
              Explore Courses 
            </p>
            <Link
              href="https://apply.kcu.ac.ug"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#FFC66B] px-3 py-2.5 text-xs font-black text-[#0B6232] shadow-lg shadow-[#FFC66B]/25 transition hover:-translate-y-0.5 hover:bg-[#FFC66B] sm:px-4 sm:text-sm"
            >
              Apply Here <MoveUpRight className="size-4" />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {programmes.map((programme) => {
              const Icon = programme.icon;
              return (
                <Link
                  href="/academics/courses"
                  key={programme.title}
                  className="group relative overflow-hidden rounded-lg border border-[#000000] bg-[#FFFFFF] p-3 transition hover:-translate-y-1 hover:border-[#FFC66B] hover:bg-white hover:shadow-xl hover:shadow-slate-950/10 sm:p-4"
                >
                  <span className="absolute inset-x-0 top-0 h-1 bg-[#FFC66B]" />
                  <div className="mb-3 grid size-9 place-items-center rounded-lg bg-[#0B6232] text-[#FFC66B] transition group-hover:bg-[#FFC66B] group-hover:text-[#0B6232] sm:size-10">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-sm font-black text-[#000000] sm:text-base">{programme.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">{programme.text}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
