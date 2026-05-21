"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  X,
} from "lucide-react";
import { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { navItems } from "@/data/site";

const socialLinks = [
  { label: "X", href: "https://x.com/KingCeasorUni", icon: FaXTwitter },
  { label: "Facebook", href: "https://www.facebook.com/kcu.ac.ug", icon: FaFacebookF },
  { label: "LinkedIn", href: "https://ug.linkedin.com/company/king-ceasor-university", icon: FaLinkedinIn },
  { label: "YouTube", href: "https://www.youtube.com/@kingceasoruniversitytv", icon: FaYoutube },
];

function UniversityMark() {
  return (
    <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3" aria-label="King Ceasor University home">
      <div className="relative grid size-11 shrink-0 place-items-center overflow-hidden rounded-full border-2 border-[#275D38] bg-white shadow-sm sm:size-14 lg:size-16">
        <Image
          src="/logo.png"
          alt="King Ceasor University logo"
          width={64}
          height={64}
          priority
          className="h-full w-full scale-125 object-contain p-0.5"
        />
      </div>
      <div className="min-w-0 leading-none">
        <p className="truncate font-serif text-lg font-black tracking-tight text-[#275D38] drop-shadow-[0_0_10px_rgba(254,203,0,0.5)] sm:text-xl lg:text-2xl">
          KING CEASOR
        </p>
        <p className="mt-1 truncate font-serif text-xs font-semibold tracking-[0.2em] text-[#275D38] drop-shadow-[0_0_8px_rgba(254,203,0,0.45)] sm:text-sm sm:tracking-[0.28em] lg:text-base">
          UNIVERSITY
        </p>
      </div>
    </Link>
  );
}

function TopBar() {
  return (
    <div className="hidden bg-[#17351f] text-white xl:block">
      <div className="mx-auto flex h-10 max-w-[1440px] items-center justify-between px-8">
        <div className="flex items-center gap-6 text-sm text-white/90">
          <span className="inline-flex items-center gap-2">
            <Phone className="size-4 text-[#FECB00]" /> +256 000 000 000
          </span>
          <span className="inline-flex items-center gap-2">
            <Mail className="size-4 text-[#FECB00]" /> admissions@kcu.ac.ug
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="size-4 text-[#FECB00]" /> Kampala, Uganda
          </span>
        </div>

        <div className="flex items-center gap-4">
          <label className="relative block w-64">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-white/70" />
            <input
              aria-label="Search website"
              placeholder="Search website..."
              className="h-8 w-full rounded-full border border-white/15 bg-white/10 pl-9 pr-4 text-sm text-white outline-none placeholder:text-white/65 transition focus:border-[#FECB00] focus:bg-white/15"
            />
          </label>
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="grid size-7 place-items-center rounded-full bg-white/10 text-white transition hover:bg-[#FECB00] hover:text-[#17351f]"
                >
                  <Icon className="size-3.5" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function DesktopNav() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="hidden border-b border-white/45 bg-white/85 shadow-sm shadow-black/5 backdrop-blur-md lg:block">
      <div className="mx-auto flex h-24 max-w-[1440px] items-center gap-8 px-8">
        <div className="min-w-[270px]">
          <UniversityMark />
        </div>

        <nav className="flex flex-1 items-center justify-center gap-1" aria-label="Main navigation">
          {navItems.map((item, index) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenIndex(item.children.length ? index : null)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 rounded-full px-3 py-2.5 text-[15px] font-semibold text-slate-800 transition hover:bg-[#FECB00]/25 hover:text-[#275D38]"
              >
                {item.label}
                {item.children.length > 0 && <ChevronDown className="size-4" />}
              </Link>

              <AnimatePresence>
                {openIndex === index && item.children.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-0 top-full z-50 mt-4 w-[340px] overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-2xl shadow-slate-900/15"
                  >
                    <div className="p-3">
                      {item.children.map((child) => (
                        <div key={child.label}>
                          <Link
                            href={child.href}
                            className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-[#FECB00]/20 hover:text-[#275D38]"
                          >
                            {child.label}
                            {child.children ? (
                              <ChevronDown className="size-3" />
                            ) : (
                              <ChevronDown className="size-3 -rotate-90" />
                            )}
                          </Link>
                          {child.children && (
                            <div className="ml-4 border-l border-[#E5E7EB] py-1 pl-3">
                              {child.children.map((grandchild) => (
                                <Link
                                  key={grandchild.label}
                                  href={grandchild.href}
                                  className="block rounded-xl px-4 py-2 text-sm font-semibold text-slate-500 transition hover:bg-[#FECB00]/20 hover:text-[#275D38]"
                                >
                                  {grandchild.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild className="h-12 rounded-xl bg-[#FECB00] px-5 font-black text-[#17351f] shadow-lg shadow-[#FECB00]/25 hover:bg-[#e8bb00]">
            <Link href="https://apply.kcu.ac.ug/">
              <GraduationCap className="mr-2 size-4" /> Apply Now
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-12 rounded-xl border-2 border-[#275D38] px-5 font-bold text-[#275D38] hover:bg-[#275D38] hover:text-white">
            <Link href="/academics/academic-erp">
              Academic ERP <ChevronDown className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="border-b border-white/45 bg-white/85 shadow-sm shadow-black/5 backdrop-blur-md lg:hidden">
      <div className="flex h-16 items-center justify-between gap-3 px-4 sm:h-20">
        <UniversityMark />
        <button
          onClick={() => setIsOpen((current) => !current)}
          className="grid size-11 shrink-0 place-items-center rounded-xl border border-slate-200 text-[#275D38] shadow-sm sm:size-12 sm:rounded-2xl"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-slate-100 bg-white"
          >
            <div className="space-y-2 px-4 py-5">
              <label className="relative mb-4 block">
                <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                <input
                  aria-label="Search website"
                  placeholder="Search website..."
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none focus:border-[#275D38]"
                />
              </label>

              {navItems.map((item, index) => (
                <div key={item.label} className="rounded-2xl border border-slate-100 bg-slate-50">
                  {item.children.length > 0 ? (
                    <button
                      onClick={() => setExpanded(expanded === index ? null : index)}
                      className="flex w-full items-center justify-between px-4 py-3 font-bold text-slate-800"
                    >
                      {item.label}
                      <ChevronDown className={`size-4 transition ${expanded === index ? "rotate-180" : ""}`} />
                    </button>
                  ) : (
                    <Link href={item.href} className="block px-4 py-3 font-bold text-slate-800">
                      {item.label}
                    </Link>
                  )}
                  <AnimatePresence>
                    {expanded === index && item.children.length > 0 && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-1 border-t border-slate-100 bg-white p-2">
                          {item.children.map((child) => (
                            <div key={child.label}>
                              <Link
                                href={child.href}
                                className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-[#FECB00]/20"
                              >
                                {child.label}
                              </Link>
                              {child.children && (
                                <div className="ml-4 border-l border-slate-100 pl-3">
                                  {child.children.map((grandchild) => (
                                    <Link
                                      key={grandchild.label}
                                      href={grandchild.href}
                                      className="block rounded-xl px-4 py-2 text-sm font-semibold text-slate-500 hover:bg-[#FECB00]/20"
                                    >
                                      {grandchild.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <div className="grid gap-3 pt-4">
                <Button asChild className="h-12 rounded-xl bg-[#FECB00] font-black text-[#17351f] hover:bg-[#e8bb00]">
                  <Link href="https://apply.kcu.ac.ug/">Apply Now</Link>
                </Button>
                <Button asChild variant="outline" className="h-12 rounded-xl border-2 border-[#275D38] font-bold text-[#275D38]">
                  <Link href="/academics/academic-erp">Academic ERP</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <TopBar />
      <DesktopNav />
      <MobileNav />
    </header>
  );
}
