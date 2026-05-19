import { ArrowRight, Building2, Globe2, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section className="bg-[#F7F8F4] px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-center lg:gap-12">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-[#275D38] sm:text-sm sm:tracking-[0.2em]">About King Ceasor University</p>
          <h2 className="mt-3 font-serif text-3xl font-black leading-tight text-slate-950 sm:text-4xl md:text-5xl">
            A university environment shaped by excellence, innovation and global outlook.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            King Ceasor University brings together career-focused teaching, research ambition and student support in a modern academic community. The university experience is designed around strong programmes, trusted guidance and meaningful opportunities for learners from Uganda, Africa and beyond.
          </p>
          <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap sm:gap-4">
            <Button asChild className="h-12 rounded-xl bg-[#275D38] px-5 text-sm font-black text-white hover:bg-[#17351f] sm:px-6 sm:text-base">
              <Link href="/about">Learn About KCU</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-xl border-2 border-[#275D38] px-5 text-sm font-black text-[#275D38] hover:bg-[#275D38] hover:text-white sm:px-6 sm:text-base">
              <Link href="/admissions">Contact Admissions <ArrowRight className="ml-2 size-4" /></Link>
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-[#111827] shadow-xl shadow-slate-950/10 md:rounded-[1.75rem] md:shadow-2xl md:shadow-slate-950/15">
          <Image
            src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=85"
            alt="University students walking on campus"
            width={1200}
            height={780}
            className="h-80 w-full object-cover opacity-85 sm:h-[420px] lg:h-[520px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b2113]/90 via-[#0b2113]/20 to-transparent" />
          <div className="grid gap-3 bg-[#0b2113] p-4 sm:absolute sm:inset-x-0 sm:bottom-0 sm:grid-cols-3 sm:bg-transparent sm:p-5 md:p-7">
            {[
              { icon: Building2, title: "Academic Schools", text: "Clear routes into faculties and programmes." },
              { icon: ShieldCheck, title: "Trusted Admissions", text: "Guided steps for applicants and families." },
              { icon: Globe2, title: "Global Outlook", text: "International students, partners and research." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-xl border border-white/15 bg-white/92 p-3 shadow-lg backdrop-blur sm:rounded-2xl sm:p-4 sm:shadow-xl">
                  <Icon className="size-6 text-[#275D38] sm:size-7" />
                  <h3 className="mt-2 text-sm font-black text-slate-950 sm:mt-3 sm:text-base">{item.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-slate-600 sm:mt-2 sm:text-sm sm:leading-6">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
