import { ArrowRight, Building2, Globe2, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section className="bg-[#F7F8F4] px-6 py-20">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#275D38]">About King Ceasor University</p>
          <h2 className="mt-4 font-serif text-4xl font-black leading-tight text-slate-950 md:text-5xl">
            A university environment shaped by excellence, innovation and global outlook.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            King Ceasor University brings together career-focused teaching, research ambition and student support in a modern academic community. The university experience is designed around strong programmes, trusted guidance and meaningful opportunities for learners from Uganda, Africa and beyond.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild className="h-12 rounded-xl bg-[#275D38] px-6 font-black text-white hover:bg-[#17351f]">
              <Link href="/about">Learn About KCU</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-xl border-2 border-[#275D38] px-6 font-black text-[#275D38] hover:bg-[#275D38] hover:text-white">
              <Link href="/admissions">Contact Admissions <ArrowRight className="ml-2 size-4" /></Link>
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[1.75rem] bg-[#111827] shadow-2xl shadow-slate-950/15">
          <Image
            src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=85"
            alt="University students walking on campus"
            width={1200}
            height={780}
            className="h-[520px] w-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b2113]/90 via-[#0b2113]/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 grid gap-4 p-5 sm:grid-cols-3 md:p-7">
            {[
              { icon: Building2, title: "Academic Schools", text: "Clear routes into faculties and programmes." },
              { icon: ShieldCheck, title: "Trusted Admissions", text: "Guided steps for applicants and families." },
              { icon: Globe2, title: "Global Outlook", text: "International students, partners and research." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl border border-white/15 bg-white/92 p-4 shadow-xl backdrop-blur">
                  <Icon className="size-7 text-[#275D38]" />
                  <h3 className="mt-3 font-black text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
