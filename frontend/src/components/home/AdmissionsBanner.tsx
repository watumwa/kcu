import Link from "next/link";
import { ArrowRight, CalendarDays, FileCheck2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdmissionsBanner() {
  return (
    <section className="bg-[#275D38] px-4 py-12 text-white sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-[1440px] gap-6 rounded-2xl border border-white/15 bg-white/8 p-4 shadow-xl shadow-black/15 backdrop-blur sm:p-6 md:rounded-[2rem] md:p-10 md:shadow-2xl md:shadow-black/20 lg:grid-cols-[1fr_0.75fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-[#FECB00] sm:text-sm sm:tracking-[0.2em]">Admissions are open</p>
          <h2 className="mt-3 font-serif text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
            Make applications, fees and intake information easy to find.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            This section gives the client a clear place for application deadlines, entry requirements, fees structure and admission support contacts.
          </p>
          <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap sm:gap-4">
            <Button asChild className="h-12 rounded-xl bg-[#FECB00] px-5 text-sm font-black text-[#17351f] hover:bg-[#e8bb00] sm:px-6 sm:text-base">
              <Link href="/admissions/apply-now">Apply Now <ArrowRight className="ml-2 size-4" /></Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-xl border-2 border-white/70 bg-white/10 px-5 text-sm font-black text-white hover:bg-white hover:text-[#275D38] sm:px-6 sm:text-base">
              <Link href="/admissions/fees-structure">View Fees</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-3 sm:gap-4">
          {[
            { icon: CalendarDays, title: "Next intake", text: "May 2026 application window" },
            { icon: FileCheck2, title: "Required documents", text: "Academic documents, identity details and programme choice" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/10 p-4 sm:rounded-3xl sm:p-6">
                <Icon className="size-6 text-[#FECB00] sm:size-8" />
                <h3 className="mt-3 text-lg font-black sm:mt-4 sm:text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/75 sm:text-base sm:leading-7">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
