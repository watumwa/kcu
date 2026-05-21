"use client";

import {
  ArrowRight,
  BookOpen,
  ChevronRight,
  GraduationCap,
  Heart,
  Scale,
  Shield,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

// ── Tab content ────────────────────────────────────────────────────────────

function TabAboutUs() {
  const stats = [
    { label: "Started In", value: "2011", suffix: "" },
    { label: "Teaching Staff", value: "210", suffix: "+" },
    { label: "Student Community", value: "2,000", suffix: "+" },
    { label: "Alumni Community", value: "4,000", suffix: "+" },
  ];
  const coreValues = [
    { icon: TrendingUp, title: "Progression", desc: "We recognize that learning never ends." },
    { icon: Scale, title: "Accountability", desc: "We hold ourselves accountable for our actions and conduct our affairs in ways that promote mutual trust and public confidence." },
    { icon: Shield, title: "Integrity", desc: "We hold ourselves, collectively and individually, liable to do what is right." },
    { icon: Heart, title: "Respect", desc: "We treat all people with dignity, respect and impartiality." },
    { icon: Users, title: "Synergy", desc: "We are stronger and more effective as a team than as individuals." },
  ];

  return (
    <div className="space-y-14">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#275D38]">Who We Are</p>
        <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">About King Ceasor University</h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          King Ceasor University (KCU) is a chartered private university widely regarded as one of Uganda&apos;s most exceptional private universities, attracting a cosmopolitan and diverse student population from various countries such as Tanzania, Nigeria, Palestine, India, Rwanda, Malawi, Ethiopia, and South Sudan, among others. KCU offers a vast array of programs that provide students with an advantageous head start in their career paths.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-slate-100 bg-[#F7F8F4] p-5 text-center shadow-sm">
            <p className="text-3xl font-black text-[#275D38] sm:text-4xl">{s.value}<span className="text-[#FECB00]">{s.suffix}</span></p>
            <p className="mt-1.5 text-xs font-semibold text-slate-500">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-[#275D38] p-6 text-white">
          <Star className="size-7 text-[#FECB00]" />
          <p className="mt-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#FECB00]">Our Vision</p>
          <p className="mt-2 text-lg font-black leading-snug">An innovation driven University</p>
        </div>
        <div className="rounded-2xl bg-[#17351f] p-6 text-white">
          <BookOpen className="size-7 text-[#FECB00]" />
          <p className="mt-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#FECB00]">Our Mission</p>
          <p className="mt-2 text-sm font-semibold leading-6 text-white/90">To provide a holistic education through inventive teaching, learning, and research aimed at fostering socio-economic transformation.</p>
        </div>
        <div className="rounded-2xl border-2 border-[#FECB00] bg-[#FECB00]/10 p-6">
          <GraduationCap className="size-7 text-[#275D38]" />
          <p className="mt-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#275D38]">The Motto</p>
          <p className="mt-2 text-2xl font-black text-[#17351f]">Ignite the Future</p>
        </div>
      </div>

      <div>
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#275D38]">What We Stand For</p>
        <h2 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">Core Values</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="rounded-2xl border border-slate-100 bg-[#F7F8F4] p-5 shadow-sm transition hover:border-[#275D38]/30 hover:shadow-md">
                <div className="grid size-10 place-items-center rounded-xl bg-[#275D38]/10">
                  <Icon className="size-5 text-[#275D38]" />
                </div>
                <h3 className="mt-3 text-base font-black text-slate-950">{v.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-slate-600">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="rounded-2xl bg-[#F7F8F4] p-6 sm:p-8">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#275D38]">Our Approach</p>
        <h2 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">KCU Comprehensive Education</h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          Our educational philosophy combines physical, social, emotional, and spiritual growth with traditional academic learning, in keeping with our motto of{" "}
          <em className="font-semibold text-slate-800">&lsquo;Moral Re-armament and Wealth Creation.&rsquo;</em>{" "}
          KCU alumni are well-rounded individuals who can reason and evaluate problems, work well in groups, and are trustworthy.
        </p>
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          Every year, KCU hosts a graduation ceremony and issues transcripts on graduation day, allowing our graduates to enter the job market faster. Our students receive their certifications as soon as they complete their studies.
        </p>
        <Button asChild className="mt-6 h-11 rounded-xl bg-[#275D38] px-6 text-sm font-black text-white hover:bg-[#17351f]">
          <Link href="https://apply.kcu.ac.ug/">Apply Now <ArrowRight className="ml-2 size-4" /></Link>
        </Button>
      </div>

      <div>
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#275D38]">Our Journey</p>
        <h2 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">The History of KCU</h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          King Ceasor Augustus Mulenga conceived the idea of establishing the university in 2009 and obtained an interim letter of authority. On 26th September 2011 the University obtained a Provisional License from NCHE and was granted Charter on the 03rd July, 2025.
        </p>
        <ol className="mt-8 space-y-0">
          {[
            { year: "2009", event: "Montessori University", detail: "King Ceasor Augustus Mulenga conceives the idea and obtains an interim letter of authority." },
            { year: "2010–2019", event: "St. Augustine International University", detail: "The institution grows its academic programmes and student community." },
            { year: "2011", event: "Provisional License", detail: "On 26th September 2011, the University obtains a Provisional License from NCHE." },
            { year: "2020", event: "King Ceasor University", detail: "The university is rebranded to King Ceasor University, reflecting its evolving identity." },
            { year: "2025", event: "Charter Granted", detail: "On 03rd July 2025, KCU is granted a full Charter — a landmark achievement." },
          ].map((item, i, arr) => (
            <li key={item.year} className="relative flex gap-5">
              {i < arr.length - 1 && <span className="absolute left-[19px] top-10 h-full w-0.5 bg-slate-200" />}
              <div className="relative z-10 mt-1 grid size-10 shrink-0 place-items-center rounded-full border-2 border-[#275D38] bg-white text-[10px] font-black text-[#275D38]">{i + 1}</div>
              <div className="pb-8">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#275D38]">{item.year}</p>
                <h3 className="mt-0.5 text-base font-black text-slate-950">{item.event}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function CouncilCard({ name, role, tier }: { name: string; role: string; tier: "top" | "mid" | "base" }) {
  const initials = name
    .replace(/^(Hon\.?|Dr\.?|Prof\.?|Mr\.?|Mrs\.?|Assoc\.?)\s*/gi, "")
    .trim()
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  const avatarBg = tier === "top" ? "bg-[#FECB00]" : tier === "mid" ? "bg-[#275D38]" : "bg-slate-200";
  const avatarText = tier === "top" ? "text-[#275D38]" : tier === "mid" ? "text-white" : "text-slate-600";
  const cardBorder = tier === "top" ? "border-[#FECB00]" : tier === "mid" ? "border-[#275D38]/30" : "border-slate-100";

  return (
    <div className={`flex flex-col items-center rounded-2xl border-2 ${cardBorder} bg-white p-5 shadow-md text-center w-44 shrink-0`}>
      <div className={`grid size-20 place-items-center rounded-full ${avatarBg} ${avatarText} text-2xl font-black shadow-inner`}>
        {initials}
      </div>
      <p className="mt-3 text-sm font-black leading-snug text-slate-950">{name}</p>
      <p className="mt-1 text-[11px] leading-4 text-slate-500">{role}</p>
    </div>
  );
}

function TabUniversityCouncil() {
  const committeeChairs = [
    { name: "Mrs. Grace N. Gwaku", role: "Chair: Finance, Planning & Development" },
    { name: "Prof. Josephat Byamugisha", role: "Chair: Quality Assurance, ICT & Gender" },
    { name: "Mr. Donald Nyakairu", role: "Chair: Audit & Risk Management" },
    { name: "Mr. Cyriaco Kabagambe", role: "Chair: Student Welfare & Disciplinary" },
    { name: "Dr. Kamba Fadhiru Pakoyo", role: "Chair: Appointments Board" },
  ];

  const members = [
    { name: "Mr. Adonia Ainebyona", role: "Guild President" },
    { name: "Dr. Sabiiti Mulema", role: "Staff Representative" },
    { name: "Mrs. Rukundo Anita", role: "Member" },
    { name: "Assoc. Prof. Margaret Nabasirye", role: "Member" },
    { name: "Mrs. Joyce Okello", role: "Member" },
    { name: "Prof. Winston Ireeta Tumps", role: "Member" },
    { name: "Mr. Timothy Musoke Ssejjoba", role: "Member" },
  ];

  return (
    <div className="space-y-10">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#275D38]">Governance</p>
        <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">University Council</h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          The University Council is entrusted with the responsibility for overseeing the governance, administration and strategic direction of the University to ensure effective management, academic quality and institutional development.
        </p>
      </div>

      {/* Tree */}
      <div className="overflow-x-auto pb-4">
        <div className="flex min-w-max flex-col items-center gap-0">

          {/* Tier 1 — Chairperson */}
          <CouncilCard name="HON DR. Chris Baryomunsi" role="Chairperson University Council" tier="top" />

          {/* connector down */}
          <div className="h-8 w-0.5 bg-slate-300" />

          {/* Tier 2 — Vice Chairperson */}
          <CouncilCard name="Assoc. Prof. Mary Muhenda" role="Vice Chairperson University Council" tier="mid" />

          {/* connector down + horizontal spread */}
          <div className="h-8 w-0.5 bg-slate-300" />
          <div className="relative flex items-start">
            {/* horizontal bar */}
            <div className="absolute top-0 left-[calc(50%-1px)] h-0.5 w-full bg-slate-300" style={{ left: 0, width: "100%" }} />
            {/* vertical drops + cards */}
            <div className="flex gap-6">
              {committeeChairs.map((p) => (
                <div key={p.name} className="flex flex-col items-center">
                  <div className="h-8 w-0.5 bg-slate-300" />
                  <CouncilCard name={p.name} role={p.role} tier="mid" />
                </div>
              ))}
            </div>
          </div>

          {/* connector down */}
          <div className="h-8 w-0.5 bg-slate-300" />

          {/* Tier 4 — Members label */}
          <div className="mb-2 rounded-full bg-[#F7F8F4] px-4 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 border border-slate-200">
            Committee Members
          </div>

          {/* horizontal spread for members */}
          <div className="flex gap-6">
            {members.map((p) => (
              <div key={p.name} className="flex flex-col items-center">
                <div className="h-6 w-0.5 bg-slate-300" />
                <CouncilCard name={p.name} role={p.role} tier="base" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ComingSoon({ title }: { title: string }) {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center rounded-2xl border border-slate-100 bg-[#F7F8F4] p-10 text-center">
      <div className="grid size-16 place-items-center rounded-full bg-[#275D38]/10">
        <GraduationCap className="size-8 text-[#275D38]" />
      </div>
      <h2 className="mt-5 text-2xl font-black text-slate-950">{title}</h2>
      <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">This section is being prepared. Check back soon.</p>
    </div>
  );
}

// ── Tabs config ────────────────────────────────────────────────────────────

const tabs = [
  { id: "about", label: "About Us", content: <TabAboutUs /> },
  { id: "council", label: "University Council", content: <TabUniversityCouncil /> },
  { id: "administration", label: "University Administration", content: <ComingSoon title="University Administration" /> },
  { id: "guild", label: "Student Guild", content: <ComingSoon title="Student Guild" /> },
  { id: "glance", label: "KCU at a Glance", content: <ComingSoon title="KCU at a Glance" /> },
];

// ── Page ───────────────────────────────────────────────────────────────────

export default function AboutPage() {
  const [active, setActive] = useState("about");
  const current = tabs.find((t) => t.id === active)!;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="border-b border-slate-100 bg-[#F7F8F4]">
          <div className="mx-auto flex max-w-[1440px] items-center gap-2 px-4 py-3 text-xs text-slate-500 sm:px-6 lg:px-8">
            <Link href="/" className="hover:text-[#275D38]">Home</Link>
            <ChevronRight className="size-3.5" />
            <span className="font-semibold text-[#275D38]">About Us</span>
          </div>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1800&q=80')" }} />
          <div className="absolute inset-0 bg-[#0b2113]/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b2113]/90 via-[#17351f]/60 to-transparent" />
          <div className="relative z-10 mx-auto max-w-[1440px]">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#FECB00]">About King Ceasor University</p>
            <h1 className="mt-3 max-w-3xl font-serif text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">Shaping Leaders. Igniting the Future.</h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
              A chartered private university widely regarded as one of Uganda&apos;s most exceptional institutions — attracting a cosmopolitan student community from across Africa and beyond.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[260px_1fr] lg:gap-14">

            {/* Sidebar — desktop */}
            <aside className="hidden lg:block">
              <nav className="sticky top-24 rounded-2xl border border-slate-100 bg-[#F7F8F4] p-5 shadow-sm">
                <p className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">About Us</p>
                <ul className="space-y-1">
                  {tabs.map((tab) => (
                    <li key={tab.id}>
                      <button
                        onClick={() => setActive(tab.id)}
                        className={`flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-sm font-semibold transition ${
                          active === tab.id
                            ? "bg-[#275D38] text-white"
                            : "text-slate-700 hover:bg-white hover:text-[#275D38]"
                        }`}
                      >
                        {active === tab.id && <ChevronRight className="size-3.5 shrink-0" />}
                        {tab.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Mobile tab strip */}
            <div className="lg:hidden -mx-4 overflow-x-auto px-4 sm:-mx-6 sm:px-6">
              <div className="flex gap-2 border-b border-slate-200 pb-0">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActive(tab.id)}
                    className={`shrink-0 border-b-2 px-3 pb-3 pt-1 text-xs font-bold transition ${
                      active === tab.id
                        ? "border-[#275D38] text-[#275D38]"
                        : "border-transparent text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab body */}
            <div>{current.content}</div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
