import Link from "next/link";
import { ArrowRight, CalendarDays, FileCheck2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdmissionsBanner() {
  return (
    <section className="bg-[#275D38] px-6 py-20 text-white">
      <div className="mx-auto grid max-w-[1440px] gap-10 rounded-[2rem] border border-white/15 bg-white/8 p-8 shadow-2xl shadow-black/20 backdrop-blur md:p-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#FECB00]">Admissions are open</p>
          <h2 className="mt-4 font-serif text-4xl font-black leading-tight md:text-5xl">
            Make applications, fees and intake information easy to find.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
            This section gives the client a clear place for application deadlines, entry requirements, fees structure and admission support contacts.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild className="h-12 rounded-xl bg-[#FECB00] px-6 font-black text-[#17351f] hover:bg-[#e8bb00]">
              <Link href="/admissions/apply-now">Apply Now <ArrowRight className="ml-2 size-4" /></Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-xl border-2 border-white/70 bg-white/10 px-6 font-black text-white hover:bg-white hover:text-[#275D38]">
              <Link href="/admissions/fees-structure">View Fees</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-4">
          {[
            { icon: CalendarDays, title: "Next intake", text: "May 2026 application window" },
            { icon: FileCheck2, title: "Required documents", text: "Academic documents, identity details and programme choice" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-white/10 p-6">
                <Icon className="size-8 text-[#FECB00]" />
                <h3 className="mt-4 text-xl font-black">{item.title}</h3>
                <p className="mt-2 leading-7 text-white/75">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
