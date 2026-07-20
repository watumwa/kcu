"use client";

import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Download,
  FileText,
  HeartHandshake,
  Mail,
  MapPin,
  Search,
} from "lucide-react";
import { useMemo, useState } from "react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";

const vacancies = [
  {
    title: "Deputy Vice-Chancellor, Academic Affairs",
    department: "Office of the Deputy Vice-Chancellor",
    type: "Full-time",
    location: "KCU Main Campus - Bunga",
    deadline: "Deadline: 31-Jul-2026 5:00pm",
    summary: "Provide executive academic leadership, oversight of teaching, learning, quality assurance and academic planning across the University.",
    requirements: ["Professor or senior academic rank", "Extensive university academic leadership experience", "Strong record in teaching, research and administration"],
    pdfHref: "/careers/DEPUTY VICE-CHANCELLOR, ACADEMIC AFFAIRS.pdf",
  },
  {
    title: "Director of Postgraduate Studies and Research",
    department: "Postgraduate Studies and Research",
    type: "Full-time",
    location: "KCU Main Campus - Bunga",
    deadline: "Deadline: 31-Jul-2026 5:00pm",
    summary: "Provide strategic leadership for postgraduate studies, research agenda, graduate supervision and institutional research output.",
    requirements: ["Senior academic qualifications", "Proven research and postgraduate leadership experience", "Record of funded research or supervision"],
    pdfHref: "/careers/DIRECTOR OF POSTGRADUATE STUDIES AND RESEARCH.pdf",
  },
  {
    title: "Professor – Nursing",
    department: "School of Medicine, Health & Life Sciences",
    type: "Full-time",
    location: "KCU Main Campus - Bunga",
    deadline: "Deadline: 31-Jul-2026 5:00pm",
    summary: "Provide academic leadership in nursing, lead high-impact research and mentor faculty and postgraduate students.",
    requirements: ["Professorial standing or equivalent in Nursing", "Distinguished teaching and research record", "Leadership in nursing education"],
    pdfHref: "/careers/POSITION OF PROFESSOR – NURSING.pdf",
  },
  {
    title: "Professor – Artificial Intelligence",
    department: "School of Science, Computing & Engineering",
    type: "Full-time",
    location: "KCU Main Campus - Bunga",
    deadline: "Deadline: 31-Jul-2026 5:00pm",
    summary: "Provide academic leadership in artificial intelligence, lead research and mentor faculty and postgraduate students.",
    requirements: ["Professorial standing or equivalent in AI or related field", "Distinguished research and teaching record", "Leadership in AI research and innovation"],
    pdfHref: "/careers/PROFESSOR – ARTIFICIAL INTELLIGENCE.pdf",
  },
  {
    title: "Professor – Computer Science",
    department: "School of Science, Computing & Engineering",
    type: "Full-time",
    location: "KCU Main Campus - Bunga",
    deadline: "Deadline: 31-Jul-2026 5:00pm",
    summary: "Lead computer science research and teaching, supervise postgraduate students and advance the academic programme.",
    requirements: ["Professorial standing or equivalent in Computer Science", "Distinguished research and teaching record", "Leadership in computing education and research"],
    pdfHref: "/careers/PROFESSOR – COMPUTER SCIENCE FINAL.pdf",
  },
  {
    title: "Professor – Data Science",
    department: "School of Science, Computing & Engineering",
    type: "Full-time",
    location: "KCU Main Campus - Bunga",
    deadline: "Deadline: 31-Jul-2026 5:00pm",
    summary: "Provide academic leadership in data science, lead research and mentor faculty and postgraduate students.",
    requirements: ["Professorial standing or equivalent in Data Science", "Distinguished research and teaching record", "Leadership in data science research and innovation"],
    pdfHref: "/careers/PROFESSOR – DATA SCIENCE.pdf",
  },
  {
    title: "Position of Professor – Law",
    department: "School of Law & Management Sciences",
    type: "Full-time",
    location: "KCU Main Campus - Bunga",
    deadline: "Deadline: 31-Jul-2026 5:00pm",
    summary: "Provide academic leadership in law, lead legal research and mentor faculty and postgraduate students.",
    requirements: ["Professorial standing or equivalent in Law", "Distinguished research and teaching record", "Leadership in legal scholarship"],
    pdfHref: "/careers/POSITION OF PROFESSOR – LAW.pdf",
  },
  {
    title: "Professor – Pharmacy",
    department: "School of Medicine, Health & Life Sciences",
    type: "Full-time",
    location: "KCU Main Campus - Bunga",
    deadline: "Deadline: 31-Jul-2026 5:00pm",
    summary: "Provide academic leadership in pharmacy, lead pharmaceutical research and mentor faculty and postgraduate students.",
    requirements: ["Professorial standing or equivalent in Pharmacy", "Distinguished research and teaching record", "Pharmacy council registration where applicable"],
    pdfHref: "/careers/THE POSITION OF PROFESSOR – PHARMACY.pdf",
  },
  {
    title: "Professor of Medicine",
    department: "School of Medicine, Health & Life Sciences",
    type: "Full-time",
    location: "KCU Main Campus - Bunga",
    deadline: "Deadline: 31-Jul-2026 5:00pm",
    summary: "Provide academic leadership in medicine, lead clinical and biomedical research and mentor faculty and postgraduate students.",
    requirements: ["Professorial standing or equivalent in Medicine", "Distinguished teaching and research record", "Clinical or academic leadership experience"],
    pdfHref: "/careers/THE POSITION OF PROFESSOR OF MEDICINE.pdf",
  },
  {
    title: "Associate Professor - LAW",
    department: "School of Law & Management Sciences",
    type: "Full-time",
    location: "KCU Main Campus - Bunga",
    deadline: "Deadline: 31-Jul-2026 5:00pm",
    summary: "Deliver law instruction, supervise research, contribute to curriculum development and mentor students within the School of Law.",
    requirements: ["PhD or equivalent in Law", "Strong teaching and research record", "Publications in peer-reviewed journals"],
    pdfHref: "/careers/Associate Professor - LAW.pdf",
  },
  {
    title: "Associate Professor – Medicine",
    department: "School of Medicine, Health & Life Sciences",
    type: "Full-time",
    location: "KCU Main Campus - Bunga",
    deadline: "Deadline: 31-Jul-2026 5:00pm",
    summary: "Teach and supervise medical students, lead clinical and biomedical research, and contribute to curriculum development in medicine.",
    requirements: ["PhD/MD or equivalent in Medicine", "Strong teaching and research record", "Clinical or academic publications"],
    pdfHref: "/careers/POSITION OF ASSOCIATE PROFESSOR – MEDICINE.pdf",
  },
  {
    title: "Associate Professor – Nursing",
    department: "School of Medicine, Health & Life Sciences",
    type: "Full-time",
    location: "KCU Main Campus - Bunga",
    deadline: "Deadline: 31-Jul-2026 5:00pm",
    summary: "Lead nursing instruction, supervise student research and strengthen clinical education and practice within the nursing programme.",
    requirements: ["PhD or equivalent in Nursing", "Strong teaching and research record", "Registered nursing credentials"],
    pdfHref: "/careers/POSITION OF ASSOCIATE PROFESSOR – NURSING.pdf",
  },
  {
    title: "Associate Professor – Pharmacy",
    department: "School of Medicine, Health & Life Sciences",
    type: "Full-time",
    location: "KCU Main Campus - Bunga",
    deadline: "Deadline: 31-Jul-2026 5:00pm",
    summary: "Deliver pharmacy instruction, supervise research and support curriculum development across pharmaceutical sciences.",
    requirements: ["PhD or equivalent in Pharmacy", "Strong teaching and research record", "Pharmacy council registration where applicable"],
    pdfHref: "/careers/POSITION OF ASSOCIATE PROFESSOR – PHARMACY.pdf",
  },
  {
    title: "Associate Professor – Computer Science",
    department: "School of Science, Computing & Engineering",
    type: "Full-time",
    location: "KCU Main Campus - Bunga",
    deadline: "Deadline: 31-Jul-2026 5:00pm",
    summary: "Deliver computing instruction, supervise research and support curriculum development in computer science.",
    requirements: ["PhD or equivalent in Computer Science", "Strong teaching and research record", "Publications in peer-reviewed journals"],
    pdfHref: "/careers/ASSOCIATE PROFESSOR – COMPUTER SCIENCE.pdf",
  },
  {
    title: "Associate Professor – Data Science",
    department: "School of Science, Computing & Engineering",
    type: "Full-time",
    location: "KCU Main Campus - Bunga",
    deadline: "Deadline: 31-Jul-2026 5:00pm",
    summary: "Teach and supervise data science, lead research and support curriculum development across data science programmes.",
    requirements: ["PhD or equivalent in Data Science", "Strong teaching and research record", "Publications in peer-reviewed journals"],
    pdfHref: "/careers/ASSOCIATE PROFESSOR – DATA SCIENCE.pdf",
  },
  {
    title: "Associate Professor – Artificial Intelligence",
    department: "School of Science, Computing & Engineering",
    type: "Full-time",
    location: "KCU Main Campus - Bunga",
    deadline: "Deadline: 31-Jul-2026 5:00pm",
    summary: "Deliver AI instruction, supervise research and support curriculum development across artificial intelligence programmes.",
    requirements: ["PhD or equivalent in AI or related field", "Strong teaching and research record", "Publications in peer-reviewed journals"],
    pdfHref: "/careers/ASSOCIATE PROFESSOR – ARTIFICIAL INTELLIGENCE.pdf",
  },
  {
    title: "Senior Lecturer – Medicine",
    department: "School of Medicine, Health & Life Sciences",
    type: "Full-time",
    location: "KCU Main Campus - Bunga",
    deadline: "Deadline: 31-Jul-2026 5:00pm",
    summary: "Deliver advanced medical instruction, supervise research and contribute to curriculum and clinical education in medicine.",
    requirements: ["PhD/MD or equivalent in Medicine", "Significant teaching and research experience", "Publications and supervision record"],
    pdfHref: "/careers/POSITION OF SENIOR LECTURER – MEDICINE.pdf",
  },
  {
    title: "Senior Lecturer – Nursing",
    department: "School of Medicine, Health & Life Sciences",
    type: "Full-time",
    location: "KCU Main Campus - Bunga",
    deadline: "Deadline: 31-Jul-2026 5:00pm",
    summary: "Teach and supervise at senior level, lead nursing research and support curriculum development in the nursing programme.",
    requirements: ["PhD or equivalent in Nursing", "Significant teaching and research experience", "Registered nursing credentials"],
    pdfHref: "/careers/POSITION OF SENIOR LECTURER – NURSING.pdf",
  },
  {
    title: "Senior Lecturer – Artificial Intelligence",
    department: "School of Science, Computing & Engineering",
    type: "Full-time",
    location: "KCU Main Campus - Bunga",
    deadline: "Deadline: 31-Jul-2026 5:00pm",
    summary: "Teach and supervise at senior level, lead AI research and support curriculum development in artificial intelligence.",
    requirements: ["PhD or equivalent in AI or related field", "Significant teaching and research experience", "Publications and supervision record"],
    pdfHref: "/careers/SENIOR LECTURER – ARTIFICIAL INTELLIGENCE FINAL.pdf",
  },
  {
    title: "Senior Lecturer – Computer Science",
    department: "School of Science, Computing & Engineering",
    type: "Full-time",
    location: "KCU Main Campus - Bunga",
    deadline: "Deadline: 31-Jul-2026 5:00pm",
    summary: "Deliver advanced computing instruction, supervise research and contribute to curriculum development in computer science.",
    requirements: ["PhD or equivalent in Computer Science", "Significant teaching and research experience", "Publications and supervision record"],
    pdfHref: "/careers/SENIOR LECTURER – COMPUTER SCIENCE.pdf",
  },
  {
    title: "Senior Lecturer – Data Science",
    department: "School of Science, Computing & Engineering",
    type: "Full-time",
    location: "KCU Main Campus - Bunga",
    deadline: "Deadline: 31-Jul-2026 5:00pm",
    summary: "Teach and supervise at senior level, lead data science research and support curriculum development.",
    requirements: ["PhD or equivalent in Data Science", "Significant teaching and research experience", "Publications and supervision record"],
    pdfHref: "/careers/SENIOR LECTURER – DATA SCIENCE -FINAL.pdf",
  },
  {
    title: "Senior Lecturer – Pharmacy",
    department: "School of Medicine, Health & Life Sciences",
    type: "Full-time",
    location: "KCU Main Campus - Bunga",
    deadline: "Deadline: 31-Jul-2026 5:00pm",
    summary: "Deliver advanced pharmacy instruction, supervise research and contribute to curriculum development in pharmaceutical sciences.",
    requirements: ["PhD or equivalent in Pharmacy", "Significant teaching and research experience", "Pharmacy council registration where applicable"],
    pdfHref: "/careers/SENIOR LECTURER – PHARMACY.pdf",
  },
  {
    title: "Senior Lecturer – Law",
    department: "School of Law & Management Sciences",
    type: "Full-time",
    location: "KCU Main Campus - Bunga",
    deadline: "Deadline: 31-Jul-2026 5:00pm",
    summary: "Teach and supervise at senior level, lead legal research and support curriculum development in the law programme.",
    requirements: ["PhD or equivalent in Law", "Significant teaching and research experience", "Publications and supervision record"],
    pdfHref: "/careers/SENIOR LECTURER – LAW.pdf",
  },
  {
    title: "Accounts Assistant",
    department: "Finance Office",
    type: "Full-time",
    location: "KCU Main Campus - Bunga",
    deadline: "Deadline: 31-Jul-2026 5:00pm",
    summary: "Support day-to-day finance operations including record keeping, reconciliations and processing of financial transactions.",
    requirements: ["Diploma or degree in accounting or finance", "Accuracy and attention to detail", "Working knowledge of accounting systems"],
    pdfHref: "/careers/Accounts_Assistant.pdf",
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
      <main className="min-h-screen bg-white pt-16 sm:pt-20 lg:pt-24 xl:pt-[8.5rem]">
        <section className="px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-10 lg:px-8" id="vacancies">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0B6232]">Opportunities</p>
                <h2 className="mt-2 text-3xl font-black leading-tight text-slate-950">Explore Job Opportunities</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  Email your application to: careers@kcu.ac.ug
                  <br />
                  Application Deadline: 31/07/2026
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
                <article key={job.title} className="flex min-h-[500px] flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[#0B6232]/30 hover:shadow-lg">
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
                  <div className="mt-auto grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    <Button asChild className="h-11 rounded-xl bg-[#0B6232] px-5 font-black text-white hover:bg-[#0B6232]">
                      <a href={`mailto:careers@kcu.ac.ug?subject=Career%20Application%20-%20${encodeURIComponent(job.title)}`}>
                        Apply Here <ArrowRight className="ml-2 size-4" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="h-11 rounded-xl border-[#0B6232]/20 px-5 font-black text-[#0B6232] hover:bg-[#0B6232]/5">
                      <a href={job.pdfHref} download>
                        Download Details <Download className="ml-2 size-4" />
                      </a>
                    </Button>
                  </div>
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
                  <span>Send applications and supporting documents to <a className="font-bold text-[#FFC66B]" href="mailto:careers@kcu.ac.ug">careers@kcu.ac.ug</a>.</span>
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
                <a href="mailto:careers@kcu.ac.ug?subject=Career%20Application%20-%20King%20Ceasor%20University">
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
