import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B6232] px-6 pt-16 text-white">
      <div className="mx-auto grid max-w-[1440px] gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.15fr_0.85fr_0.85fr_0.85fr]">
        <div>
          <Image
            src="/footer-logo-transparent.png"
            alt="King Ceasor University"
            width={2048}
            height={768}
            className="h-auto w-full max-w-[360px] object-contain"
            priority={false}
          />
          <p className="mt-5 max-w-md leading-7 text-white/70">
            
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
              { label: "Academia Portal", href: "https://academia.kcu.ac.ug/?_gl=1*1fzvqwx*_ga*NDE4NjYyNDA1LjE3NzkyMjYzOTY.*_ga_5SQ5XXJWGB*czE3NzkzNDUxMjkkbzMkZzAkdDE3NzkzNDUxMjkkajYwJGwwJGgw" },
              { label: "K-Class", href: "https://vclass.kcu.ac.ug" },
              { label: "Graduation", href: "" },
              
            ],
          },
          {
            title: "Quick Links",
            links: [
              { label: "Student Guild", href: "/student/guild" },
              { label: "Careers", href: "" },
              { label: "Library Catalogue", href: "/library/catalogue" },
              { label: "Campus News", href: "/about/newsletter" },
              { label: "Get in Touch", href: "" },
            ],
          },
        ].map((group) => (
          <div key={group.title}>
            <h3 className="text-lg font-black text-[#FFC66B]">{group.title}</h3>
            <div className="mt-5 grid gap-3">
              {group.links.map((link) => (
                <Link key={link.label} href={link.href} className="text-white/70 transition hover:text-[#FFC66B]">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 py-8 text-sm text-white/65 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-5">
          <span className="inline-flex items-center gap-2"><Phone className="size-4 text-[#FFC66B]" /> +256 394 716 326</span>
          <span className="inline-flex items-center gap-2"><Mail className="size-4 text-[#FFC66B]" /> info@kcu.ac.ug</span>
          <span className="inline-flex items-center gap-2"><MapPin className="size-4 text-[#FFC66B]" /> Plot 32 Ggaba Road, Bunga Hill</span>
        </div>
        <p>© 2026 King Ceasor University. All rights reserved.</p>
      </div>
    </footer>
  );
}
