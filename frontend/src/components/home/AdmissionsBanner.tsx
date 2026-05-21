import Link from "next/link";
import { ArrowRight, CalendarDays, FileCheck2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdmissionsBanner() {
  return (
    <section className="bg-[#275D38] px-4 py-10 text-white sm:px-6 sm:py-12 lg:py-14">
      <div className="mx-auto grid max-w-[1440px] gap-5 rounded-xl border border-white/15 bg-white/8 p-3 shadow-xl shadow-black/15 backdrop-blur sm:p-4 md:p-6 md:shadow-2xl md:shadow-black/20 lg:grid-cols-[1fr_0.75fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-[#FECB00] sm:text-sm sm:tracking-[0.2em]">Admissions are open</p>
          <h2 className="mt-2 font-serif text-2xl font-black leading-tight sm:text-3xl md:text-4xl">
            Make applications, fees and intake information easy to find.
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
            This section gives the client a clear place for application deadlines, entry requirements, fees structure and admission support contacts.
          </p>
          <div className="mt-5 grid gap-3 sm:flex sm:flex-wrap">
            <Button asChild className="h-10 rounded-lg bg-[#FECB00] px-4 text-sm font-black text-[#17351f] hover:bg-[#e8bb00]">
              <Link href="/admissions/apply-now">Apply Now <ArrowRight className="ml-2 size-4" /></Link>
            </Button>
            <Button asChild variant="outline" className="h-10 rounded-lg border-2 border-white/70 bg-white/10 px-4 text-sm font-black text-white hover:bg-white hover:text-[#275D38]">
              <Link href="/admissions/fees-structure">View Fees</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-3">
          {[
            { icon: CalendarDays, title: "Next intake", text: "May 2026 application window" },
            { icon: FileCheck2, title: "Required documents", text: "Academic documents, identity details and programme choice" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-lg border border-white/10 bg-white/10 p-3 sm:p-4">
                <Icon className="size-5 text-[#FECB00] sm:size-6" />
                <h3 className="mt-2 text-base font-black sm:text-lg">{item.title}</h3>
                <p className="mt-1.5 text-xs leading-5 text-white/75 sm:text-sm sm:leading-6">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
