import Link from "next/link";
import { ArrowLeft, Construction, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

type UnderConstructionProps = {
  title: string;
  path: string;
};

export default function UnderConstruction({ title, path }: UnderConstructionProps) {
  return (
    <main className="min-h-[68vh] bg-slate-50/70 px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-24 lg:pt-48">
      <section className="mx-auto grid max-w-[1180px] overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-2xl shadow-slate-950/10 md:grid-cols-[0.85fr_1.15fr]">
        <div className="relative grid min-h-80 place-items-center overflow-hidden bg-[#0B6232] p-8 text-center text-white">
          <div className="pointer-events-none absolute -left-16 -top-16 size-56 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 size-72 rounded-full bg-[#FFC66B]/10" />
          <div className="relative z-10">
            <div className="mx-auto grid size-24 place-items-center rounded-full bg-[#FFC66B] text-[#0B6232] shadow-xl ring-8 ring-white/10">
              <Construction className="size-11" />
            </div>
            <p className="mt-7 text-xs font-black uppercase tracking-[0.24em] text-[#FFC66B]">
              Page in progress
            </p>
            <h1 className="mt-4 max-w-sm text-3xl font-black leading-tight md:text-4xl">{title}</h1>
          </div>
        </div>

        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#0B6232]">King Ceasor University</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-black leading-tight text-[#000000] md:text-5xl">
            This section is under construction.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            The content for <span className="font-bold text-[#000000]">{path}</span> is being prepared. Please use the homepage or contact admissions for immediate support.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild className="h-12 rounded-xl bg-[#FFC66B] px-6 font-black text-[#0B6232] hover:bg-[#FFC66B]">
              <Link href="/">
                <ArrowLeft className="mr-2 size-4" /> Back Home
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-xl border-2 border-[#0B6232] px-6 font-black text-[#0B6232] hover:bg-[#0B6232] hover:text-white">
              <Link href="https://apply.kcu.ac.ug/">Apply Now.</Link>
            </Button>
          </div>
          <div className="mt-9 grid gap-3 text-sm font-semibold text-slate-600 sm:grid-cols-2">
            <span className="inline-flex items-center gap-2 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
              <Phone className="size-4 text-[#0B6232]" /> +256 000 000 000
            </span>
            <span className="inline-flex items-center gap-2 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
              <Mail className="size-4 text-[#0B6232]" /> admissions@kcu.ac.ug
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
