import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookMarked } from "lucide-react";
import { schools } from "@/data/site";

const schoolImages = [
  "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85",
];

export default function SchoolsSection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8 flex flex-col justify-between gap-4 md:mb-10 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#0B6232] sm:text-sm sm:tracking-[0.2em]">Academics</p>
            <h2 className="mt-3 font-serif text-2xl font-black leading-tight text-slate-950 sm:text-3xl md:text-4xl">Schools, faculties and institutes</h2>
          </div>
          <Link href="/academics" className="inline-flex items-center gap-2 text-sm font-black text-[#0B6232] sm:text-base">
            View all academic units <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {schools.map((school, index) => (
            <Link
              href="/academics"
              key={school}
              className="group overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:border-[#FFC66B] hover:shadow-xl hover:shadow-slate-900/10"
            >
              <div className="relative h-36 overflow-hidden bg-[#0B6232] sm:h-40">
                <Image
                  src={schoolImages[index]}
                  alt={`${school} students and learning environment`}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B6232]/80 via-[#0B6232]/20 to-transparent" />
                <div className="absolute left-3 top-3 grid size-10 place-items-center rounded-lg bg-white/95 text-[#0B6232] shadow-lg shadow-black/15">
                  <BookMarked className="size-5" />
                </div>
                <span className="absolute bottom-3 right-3 rounded-full bg-[#FFC66B] px-3 py-1 text-[11px] font-black text-[#0B6232]">
                  0{index + 1}
                </span>
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="text-lg font-black leading-tight text-slate-950 sm:text-xl">{school}</h3>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-black text-[#0B6232] sm:text-sm">
                  Explore school <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
