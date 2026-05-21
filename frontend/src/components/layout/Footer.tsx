import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b2113] px-6 pt-16 text-white">
      <div className="mx-auto grid max-w-[1440px] gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.15fr_0.85fr_0.85fr_0.85fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="grid size-14 shrink-0 place-items-center overflow-hidden rounded-full border-2 border-[#FECB00] bg-white shadow-sm shadow-black/20">
              <Image
                src="/logo.png"
                alt="King Ceasor University logo"
                width={56}
                height={56}
                className="h-full w-full scale-125 object-contain p-0.5"
              />
            </div>
            <div>
              <p className="font-serif text-2xl font-black">KING CEASOR</p>
              <p className="font-serif text-sm font-semibold tracking-[0.28em] text-[#FECB00]">UNIVERSITY</p>
            </div>
          </div>
          <p className="mt-5 max-w-md leading-7 text-white/70">
            Advancing knowledge, leadership and professional excellence through career-focused teaching, research and a supportive student experience.
          </p>
        </div>

        {[
          {
            title: "Admissions",
            links: [
              { label: "Apply Now", href: "https://apply.kcu.ac.ug/" },
              { label: "Fees Structure", href: "/admissions/fees-structure" },
              { label: "Admission Requirements", href: "/admissions/admission-requirements" },
            ],
          },
          {
            title: "Academics",
            links: [
              { label: "Schools", href: "/academics/schools" },
              { label: "Courses", href: "/academics/courses" },
              { label: "Academic ERP", href: "/academics/academic-erp" },
              { label: "E-Learning", href: "/academics/elearning" },
            ],
          },
          {
            title: "Student & Library",
            links: [
              { label: "Guild", href: "/student/guild" },
              { label: "Campus Life", href: "/student/campus-life" },
              { label: "Library Catalogue", href: "/library/catalogue" },
              { label: "Opening Hours", href: "/library/opening-hours" },
            ],
          },
        ].map((group) => (
          <div key={group.title}>
            <h3 className="text-lg font-black text-[#FECB00]">{group.title}</h3>
            <div className="mt-5 grid gap-3">
              {group.links.map((link) => (
                <Link key={link.label} href={link.href} className="text-white/70 transition hover:text-[#FECB00]">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 py-8 text-sm text-white/65 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-5">
          <span className="inline-flex items-center gap-2"><Phone className="size-4 text-[#FECB00]" /> +256 000 000 000</span>
          <span className="inline-flex items-center gap-2"><Mail className="size-4 text-[#FECB00]" /> admissions@kcu.ac.ug</span>
          <span className="inline-flex items-center gap-2"><MapPin className="size-4 text-[#FECB00]" /> Kampala, Uganda</span>
        </div>
        <p>© 2026 King Ceasor University. All rights reserved.</p>
      </div>
    </footer>
  );
}
