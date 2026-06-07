"use client";

import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileText,
  HeartHandshake,
  Mail,
  MapPin,
  Search,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";

const vacancies = [
  {
    title: "Academic Staff",
    department: "Schools and Faculties",
    type: "Full-time / Part-time",
    location: "KCU Main Campus - Bunga",
    deadline: "Deadline: 20-May-2025",
    summary: "",
    requirements: ["Relevant academic qualifications", "Teaching, research or professional experience", "Commitment to student-centred learning"],
  },
  {
    title: "Administrative Staff",
    department: "University Administration",
    type: "Full-time",
    location: "KCU Main Campus - Bunga",
    deadline: "Deadline: 20-May-2025",
    summary: "",
    requirements: ["Strong communication skills", "Relevant professional training", "Integrity, discretion and service orientation"],
  },
  {
    title: "Technical and Support Staff",
    department: "Campus Services",
    type: "Full-time / Contract",
    location: "KCU Main Campus - Bunga",
    deadline: "Deadline: 20-May-2025",
    summary: "",
    requirements: ["Role-specific technical competence", "Teamwork and reliability", "Ability to support staff and students professionally"],
  },
];

const steps = [
  "Prepare a cover letter, updated CV, academic documents and relevant professional certificates.",
  "Send your application to the Human Resource office through the official contact email.",
  "Shortlisted candidates are contacted for the next stage of assessment or interview.",
  "Successful candidates complete appointment documentation and onboarding.",
];

export default function CareersPage() {
  const [query, setQuery] = useState("");

  const filteredVacancies = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return vacancies;

    return vacancies.filter((job) =>
      [job.title, job.department, job.type, job.location, job.summary]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery),
    );
  }, [query]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <div className="border-b border-slate-100 bg-white">
          <div className="mx-auto flex max-w-[1440px] items-center gap-2 px-4 py-3 text-xs text-slate-500 sm:px-6 lg:px-8">
            <Link href="/" className="hover:text-[#0B6232]">Home</Link>
            <ChevronRight className="size-3.5" />
            <span className="font-semibold text-[#0B6232]">Careers</span>
          </div>
        </div>

        <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=85')" }}
          />
          <div className="absolute inset-0 bg-slate-950/65" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B6232]/95 via-slate-950/70 to-slate-950/20" />
          <div className="relative z-10 mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1fr_360px] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#FFC66B]">Work With KCU</p>
              <h1 className="mt-3 font-serif text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">Careers at King Ceasor University</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/80">
                Join a growing university community committed to academic excellence, innovation, student success and service to society.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="h-12 rounded-xl bg-[#FFC66B] px-6 font-black text-[#0B6232] hover:bg-[#FFC66B]">
                  <a href="mailto:hr@kcu.ac.ug?subject=Career%20Application%20-%20King%20Ceasor%20University">
                    Apply by Email <ArrowRight className="ml-2 size-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="h-12 rounded-xl border-white/40 bg-white/10 px-6 font-bold text-white backdrop-blur hover:bg-white hover:text-[#0B6232]">
                  <a href="#vacancies">View Openings</a>
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 text-white shadow-2xl shadow-slate-950/25 backdrop-blur-md">
              <div className="grid size-11 place-items-center rounded-xl bg-[#FFC66B] text-[#0B6232]">
                <BriefcaseBusiness className="size-5" />
              </div>
              <p className="mt-4 text-sm font-black uppercase tracking-[0.16em] text-[#FFC66B]">Review Opportunities</p>
              <p className="mt-2 text-2xl font-black"></p>
              <p className="mt-2 text-sm leading-6 text-white/75">
                
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8" id="vacancies">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0B6232]">Opportunities</p>
                <h2 className="mt-2 text-3xl font-black leading-tight text-slate-950">Explore Career Areas</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  Browse common recruitment areas and submit your profile for consideration when suitable roles become available.
                </p>
              </div>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search by role, department, type or location"
                  className="h-13 w-full rounded-xl border border-slate-200 bg-white pl-12 pr-4 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-[#0B6232] focus:ring-4 focus:ring-[#0B6232]/10"
                />
              </div>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {filteredVacancies.map((job) => (
                <article key={job.title} className="flex min-h-[390px] flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[#0B6232]/30 hover:shadow-lg">
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid size-12 place-items-center rounded-xl bg-[#0B6232]/10 text-[#0B6232]">
                      <BriefcaseBusiness className="size-5" />
                    </div>
                    <span className="rounded-full border border-[#FFC66B]/60 bg-[#FFC66B]/20 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-[#0B6232]">
                      {job.deadline}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-black leading-tight text-slate-950">{job.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-[#0B6232]">{job.department}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{job.summary}</p>
                  <div className="mt-5 grid gap-2 text-sm text-slate-500">
                    <span className="inline-flex items-center gap-2"><MapPin className="size-4 text-[#0B6232]" /> {job.location}</span>
                    <span className="inline-flex items-center gap-2"><Clock3 className="size-4 text-[#0B6232]" /> {job.type}</span>
                  </div>
                  <div className="mt-5 space-y-2">
                    {job.requirements.map((item) => (
                      <p key={item} className="flex gap-2 text-sm leading-6 text-slate-600">
                        <CheckCircle2 className="mt-1 size-4 shrink-0 text-[#0B6232]" />
                        <span>{item}</span>
                      </p>
                    ))}
                  </div>
                  <Button asChild className="mt-auto h-11 rounded-xl bg-[#0B6232] px-5 font-black text-white hover:bg-[#0B6232]">
                    <a href={`mailto:hr@kcu.ac.ug?subject=Career%20Application%20-%20${encodeURIComponent(job.title)}`}>
                      Apply Here <ArrowRight className="ml-2 size-4" />
                    </a>
                  </Button>
                </article>
              ))}
            </div>

            {filteredVacancies.length === 0 && (
              <div className="mt-8 rounded-2xl border border-slate-100 bg-slate-50 p-8 text-center">
                <p className="font-black text-slate-950">No matching career areas found.</p>
                <p className="mt-2 text-sm text-slate-500">Search</p>
              </div>
            )}
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[1fr_360px]">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0B6232]">Application Process</p>
              <h2 className="mt-2 text-3xl font-black text-slate-950">How to Apply</h2>
              <ol className="mt-8 space-y-0">
                {steps.map((step, index) => (
                  <li key={step} className="relative flex gap-5">
                    {index < steps.length - 1 && <span className="absolute left-[19px] top-10 h-full w-0.5 bg-slate-200" />}
                    <div className="relative z-10 mt-1 grid size-10 shrink-0 place-items-center rounded-full border-2 border-[#0B6232] bg-white text-sm font-black text-[#0B6232]">
                      {index + 1}
                    </div>
                    <p className="pb-8 text-sm leading-7 text-slate-600 sm:text-base">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            <aside className="rounded-2xl bg-[#0B6232] p-6 text-white shadow-lg shadow-[#0B6232]/20">
              <div className="grid size-12 place-items-center rounded-xl bg-[#FFC66B] text-[#0B6232]">
                <FileText className="size-5" />
              </div>
              <h3 className="mt-5 text-2xl font-black">Submit Your Application</h3>
              <div className="mt-5 space-y-4 text-sm leading-6 text-white/80">
                <p className="flex gap-3">
                  <Mail className="mt-1 size-4 shrink-0 text-[#FFC66B]" />
                  <span>Send applications and supporting documents to <a className="font-bold text-[#FFC66B]" href="mailto:hr@kcu.ac.ug">hr@kcu.ac.ug</a>.</span>
                </p>
                <p className="flex gap-3">
                  <CalendarDays className="mt-1 size-4 shrink-0 text-[#FFC66B]" />
                  <span>Applications are reviewed according to current recruitment needs.</span>
                </p>
                <p className="flex gap-3">
                  <HeartHandshake className="mt-1 size-4 shrink-0 text-[#FFC66B]" />
                  <span>KCU is committed to a respectful, professional and inclusive recruitment process.</span>
                </p>
              </div>
              <Button asChild className="mt-7 h-12 w-full rounded-xl bg-[#FFC66B] font-black text-[#0B6232] hover:bg-[#FFC66B]">
                <a href="mailto:hr@kcu.ac.ug?subject=Career%20Application%20-%20King%20Ceasor%20University">
                  Email HR Office <ArrowRight className="ml-2 size-4" />
                </a>
              </Button>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
