import Link from "next/link";
import { ArrowLeft, Construction, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

type UnderConstructionProps = {
  title: string;
  path: string;
};

export default function UnderConstruction({ title, path }: UnderConstructionProps) {
  return (
    <main className="min-h-[68vh] bg-[#FFFFFF] px-4 py-20 sm:px-6">
      <section className="mx-auto grid max-w-[1120px] gap-10 rounded-[1.75rem] border border-[#000000] bg-white p-6 shadow-2xl shadow-slate-950/10 md:grid-cols-[0.85fr_1.15fr] md:p-10">
        <div className="grid min-h-72 place-items-center rounded-[1.25rem] bg-[#0B6232] p-8 text-center text-white">
          <div>
            <div className="mx-auto grid size-20 place-items-center rounded-full bg-[#FFC66B] text-[#0B6232] shadow-xl">
              <Construction className="size-10" />
            </div>
            <p className="mt-6 text-sm font-black uppercase tracking-[0.22em] text-[#FFC66B]">
              Page in progress
            </p>
            <h1 className="mt-4 text-3xl font-black leading-tight md:text-4xl">{title}</h1>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#0B6232]">King Ceasor University</p>
          <h2 className="mt-4 text-3xl font-black leading-tight text-[#000000] md:text-5xl">
            This section is under construction.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            The content for <span className="font-bold text-[#000000]">{path}</span> is being prepared.Please use the homepage or contact admissions for immediate support.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild className="h-12 rounded-xl bg-[#FFC66B] px-6 font-black text-[#0B6232] hover:bg-[#FFC66B]">
              <Link href="/">
                <ArrowLeft className="mr-2 size-4" /> Back  Home
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-xl border-2 border-[#0B6232] px-6 font-black text-[#0B6232] hover:bg-[#0B6232] hover:text-white">
              <Link href="https://apply.kcu.ac.ug/">Apply Now</Link>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-5 text-sm font-semibold text-slate-600">
            <span className="inline-flex items-center gap-2">
              <Phone className="size-4 text-[#0B6232]" /> +256 000  000 000
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail className="size-4 text-[#0B6232]" /> admissions@kcu.ac.ug
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
