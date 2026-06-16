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
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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
    { icon: Shield, title: "Integrity", desc: "We uphold honesty, ethics and professionalism, fostering transparency, trust and responsibility." },
    { icon: TrendingUp, title: "Progression", desc: "We embrace innovation, continuous improvement and lifelong learning in an ever-changing world." },
    { icon: Scale, title: "Accountability", desc: "We take responsibility for our actions and outcomes while promoting good governance and public confidence." },
    { icon: Heart, title: "Respect", desc: "We value the dignity, worth and uniqueness of every individual in an inclusive community." },
    { icon: Users, title: "Synergy", desc: "We work together, drawing on diverse talents, experiences and perspectives to achieve greater impact." },
  ];

  return (
    <div className="space-y-14">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0B6232]">Who We Are</p>
        <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">About King Ceasor University</h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          King Ceasor University (KCU) is a premier chartered private university in Uganda dedicated to academic excellence, innovation and transformative education. Since its establishment in 2011, the University has grown into a vibrant center of learning that attracts students from across Africa and beyond, fostering a diverse and multicultural academic community.
        </p>
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          With modern learning facilities, experienced faculty, strong industry partnerships and a student-centered approach, KCU nurtures intellectual growth, creativity and professional development. Guided by our motto, &quot;Ignite the Future,&quot; we empower learners to become innovators, problem-solvers and leaders who contribute meaningfully to society.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-slate-100 bg-[#FFFFFF] p-5 text-center shadow-sm">
            <p className="text-3xl font-black text-[#0B6232] sm:text-4xl">{s.value}<span className="text-[#FFC66B]">{s.suffix}</span></p>
            <p className="mt-1.5 text-xs font-semibold text-slate-500">{s.label}</p>
          </div>
        ))}
      </div>
      <section id="mission-vision" className="scroll-mt-32">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-[#0B6232] p-6 text-white">
            <Star className="size-7 text-[#FFC66B]" />
            <p className="mt-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#FFC66B]">Our Vision</p>
            <p className="mt-2 text-lg font-black leading-snug">An innovation driven University</p>
          </div>
          <div className="rounded-2xl bg-[#0B6232] p-6 text-white">
            <BookOpen className="size-7 text-[#FFC66B]" />
            <p className="mt-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#FFC66B]">Our Mission</p>
            <p className="mt-2 text-sm font-semibold leading-6 text-white/90">To provide a holistic education through inventive teaching, learning, and research aimed at fostering socio-economic transformation.</p>
          </div>
          <div className="rounded-2xl border-2 border-[#FFC66B] bg-[#FFC66B]/10 p-6">
            <GraduationCap className="size-7 text-[#0B6232]" />
            <p className="mt-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#0B6232]">The Motto</p>
            <p className="mt-2 text-2xl font-black text-[#0B6232]">Ignite the Future</p>
          </div>
        </div>
      </section>
      <div>
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0B6232]">What We Stand For</p>
        <h2 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">Core Values</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          Our values define who we are and guide every aspect of teaching, learning, research and community engagement. They shape our culture and inspire our commitment to excellence.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="rounded-2xl border border-slate-100 bg-[#FFFFFF] p-5 shadow-sm transition hover:border-[#0B6232]/30 hover:shadow-md">
                <div className="grid size-10 place-items-center rounded-xl bg-[#0B6232]/10">
                  <Icon className="size-5 text-[#0B6232]" />
                </div>
                <h3 className="mt-3 text-base font-black text-slate-950">{v.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-slate-600">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <section className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm shadow-slate-900/5">
        <div className="relative aspect-[5/4] min-h-[280px] overflow-hidden sm:aspect-[16/8] sm:min-h-[340px] lg:min-h-[420px]">
          <Image
            src="/images/community-outreach/medical-outreach-consultation.jpeg"
            alt="KCU health professionals and students engaging with community members during outreach"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/88 via-slate-950/35 to-slate-950/10 sm:bg-gradient-to-r sm:from-slate-950/85 sm:via-slate-950/55 sm:to-slate-950/10" />
          <div className="absolute inset-x-0 bottom-0 hidden p-6 sm:block sm:p-8 lg:p-10">
            <div className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#FFC66B]">Community Impact</p>
              <h2 className="mt-2 text-2xl font-black leading-tight text-white sm:text-3xl lg:text-4xl">Learning that serves beyond campus</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
                KCU&apos;s commitment to service reaches into the wider community through health-focused engagement, practical training, and outreach that connects academic learning with real human needs.
              </p>
            </div>
          </div>
        </div>

        <div className="border-b border-slate-100 p-6 sm:hidden">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0B6232]">Community Impact</p>
          <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950">Learning that serves beyond campus</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            KCU&apos;s commitment to service reaches into the wider community through health-focused engagement, practical training, and outreach that connects academic learning with real human needs.
          </p>
        </div>

        <div className="grid gap-6 p-6 sm:gap-8 sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
          <div>
            <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              These outreach moments reflect the University&apos;s wider mission: preparing graduates who combine professional competence, compassion, and responsibility in service to society.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Community health engagement",
                "Hands-on clinical support",
                "Service-driven learning",
                "Positive social impact",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 sm:aspect-[16/10]">
            <Image
              src="/images/community-outreach/medical-outreach-screening.jpeg"
              alt="KCU outreach team providing health screening and support in the community"
              fill
              sizes="(min-width: 1024px) 36vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>
      
      <div className="rounded-2xl bg-[#FFFFFF] p-6 sm:p-8">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0B6232]">Our Approach</p>
        <h2 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">KCU Comprehensive Education</h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          At King Ceasor University, education extends beyond the classroom. Our comprehensive educational approach nurtures the intellectual, physical, social, emotional and spiritual development of every student, creating well-rounded graduates prepared to thrive in a dynamic global society.
        </p>
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          Guided by our philosophy of{" "}
          <em className="font-semibold text-slate-800">&quot;Moral Re-armament and Wealth Creation,&quot;</em>{" "}
          we combine academic excellence with character formation, leadership development and practical skills training. KCU graduates are equipped with critical thinking skills, ethical values, teamwork abilities and a strong sense of responsibility.
        </p>
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          To support student success and career readiness, the University maintains efficient academic processes, including timely graduation ceremonies and prompt issuance of academic transcripts and certificates. This enables graduates to transition smoothly into the workforce, entrepreneurship, further studies and other professional opportunities.
        </p>
        <Button asChild className="mt-6 h-11 rounded-xl bg-[#0B6232] px-6 text-sm font-black text-white hover:bg-[#0B6232]">
          <Link href="https://apply.kcu.ac.ug/">Apply Now <ArrowRight className="ml-2 size-4" /></Link>
        </Button>
      </div>

      <div>
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0B6232]">Our Journey</p>
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
              <div className="relative z-10 mt-1 grid size-10 shrink-0 place-items-center rounded-full border-2 border-[#0B6232] bg-white text-[10px] font-black text-[#0B6232]">{i + 1}</div>
              <div className="pb-8">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#0B6232]">{item.year}</p>
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

type PersonTier = "top" | "mid" | "base";

type PersonProfile = {
  name: string;
  role: string;
  tier: PersonTier;
  image?: string;
  bio?: string;
};

function getInitials(name: string) {
  return name
    .replace(/^(Hon\.?|Dr\.?|Prof\.?|Mr\.?|Mrs\.?|Assoc\.?|Fr\.?)\s*/gi, "")
    .trim()
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function getProfileBio(person: PersonProfile) {
  if (person.bio) return person.bio;

  if (/to be confirmed/i.test(person.name)) {
    return "This office is part of King Ceasor University's leadership structure. The full profile will be updated once the appointment is confirmed.";
  }

  return `${person.name} serves as ${person.role} at King Ceasor University, contributing to institutional leadership, governance and the University's commitment to academic excellence, accountability and service.`;
}

function getValidProfileImage(image?: string) {
  const src = image?.trim();
  return src && src !== "/" ? src : undefined;
}

function BioModal({ person, onClose }: { person: PersonProfile | null; onClose: () => void }) {
  useEffect(() => {
    if (!person) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [person, onClose]);

  if (!person) return null;

  const initials = getInitials(person.name);
  const image = getValidProfileImage(person.image);
  const portraitBg = person.tier === "top" ? "bg-[#FFC66B]" : person.tier === "mid" ? "bg-[#0B6232]" : "bg-slate-100";
  const portraitText = person.tier === "top" ? "text-[#0B6232]" : person.tier === "mid" ? "text-white" : "text-slate-600";

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/60 px-4 py-6 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="bio-modal-title">
      <button type="button" className="absolute inset-0 cursor-default" aria-label="Close biography" onClick={onClose} />
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl shadow-slate-950/25">
        <div className="flex items-start gap-5 border-b border-slate-100 p-5 sm:p-6">
          <div className={`relative grid h-[168px] w-28 shrink-0 place-items-center overflow-hidden rounded-xl ${portraitBg} ${portraitText} text-3xl font-black shadow-inner`}>
            {image ? (
              <Image src={image} alt={person.name} fill sizes="112px" className="object-cover object-top" />
            ) : (
              initials || "KCU"
            )}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0B6232]">Biography</p>
            <h3 id="bio-modal-title" className="mt-2 text-xl font-black leading-tight text-slate-950">{person.name}</h3>
            <p className="mt-1 text-sm font-semibold leading-5 text-slate-500">{person.role}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid size-9 shrink-0 place-items-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-[#0B6232]/30 hover:bg-[#0B6232]/5 hover:text-[#0B6232]"
            aria-label="Close biography"
          >
            <X className="size-4" />
          </button>
        </div>
        <div className="p-5 sm:p-6">
          <p className="text-sm leading-7 text-slate-600">{getProfileBio(person)}</p>
        </div>
      </div>
    </div>
  );
}

function CouncilCard({ person, onSelect }: { person: PersonProfile; onSelect: (person: PersonProfile) => void }) {
  const { name, role, tier } = person;
  const image = getValidProfileImage(person.image);
  const initials = name
    ? getInitials(name)
    : "";

  const avatarBg = tier === "top" ? "bg-[#FFC66B]" : tier === "mid" ? "bg-[#0B6232]" : "bg-slate-200";
  const avatarText = tier === "top" ? "text-[#0B6232]" : tier === "mid" ? "text-white" : "text-slate-600";
  const cardBorder = tier === "top" ? "border-[#FFC66B]" : tier === "mid" ? "border-[#0B6232]/30" : "border-slate-100";

  return (
    <button type="button" onClick={() => onSelect(person)} className={`flex w-44 shrink-0 flex-col items-center rounded-2xl border-2 ${cardBorder} bg-white p-4 text-center shadow-md transition hover:-translate-y-0.5 hover:border-[#0B6232] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#FFC66B] focus:ring-offset-2`}>
      <div className={`relative grid h-[168px] w-28 place-items-center overflow-hidden rounded-xl ${avatarBg} ${avatarText} text-2xl font-black shadow-inner`}>
        {image ? (
          <Image src={image} alt={name} fill sizes="112px" className="object-cover object-top" />
        ) : (
          initials || "KCU"
        )}
      </div>
      <p className="mt-3 text-sm font-black leading-snug text-slate-950">{name}</p>
      <p className="mt-1 text-[11px] leading-4 text-slate-500">{role}</p>
    </button>
  );
}

function CouncilCardMobile({ person, onSelect }: { person: PersonProfile; onSelect: (person: PersonProfile) => void }) {
  const { name, role, tier } = person;
  const image = getValidProfileImage(person.image);
  const initials = getInitials(name);

  const avatarBg = tier === "top" ? "bg-[#FFC66B]" : tier === "mid" ? "bg-[#0B6232]" : "bg-slate-200";
  const avatarText = tier === "top" ? "text-[#0B6232]" : tier === "mid" ? "text-white" : "text-slate-600";
  const cardBorder = tier === "top" ? "border-[#FFC66B]" : tier === "mid" ? "border-[#0B6232]/30" : "border-slate-100";

  return (
    <button type="button" onClick={() => onSelect(person)} className={`flex w-full items-center gap-4 rounded-2xl border-2 ${cardBorder} bg-white p-4 text-left shadow-sm transition hover:border-[#0B6232] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#FFC66B] focus:ring-offset-2`}>
      <div className={`relative grid h-[126px] w-[84px] shrink-0 place-items-center overflow-hidden rounded-lg ${avatarBg} ${avatarText} text-xl font-black`}>
        {image ? (
          <Image src={image} alt={name} fill sizes="84px" className="object-cover object-top" />
        ) : (
          initials || "KCU"
        )}
      </div>
      <div>
        <p className="text-sm font-black leading-snug text-slate-950">{name}</p>
        <p className="mt-0.5 text-[11px] leading-4 text-slate-500">{role}</p>
      </div>
    </button>
  );
}

function TabUniversityCouncil() {
  const [selectedPerson, setSelectedPerson] = useState<PersonProfile | null>(null);
  const chair: PersonProfile = { name: "HON DR. Chris Baryomunsi", role: "Chairperson University Council", tier: "top" };
  const viceChair: PersonProfile = { name: "Assoc. Prof. Mary Muhenda", role: "Vice Chairperson University Council", tier: "mid" };
  const committeeChairs: PersonProfile[] = [
    { name: "Ms. Grace N. Gwaku", role: "Chair: Finance, Planning & Development", tier: "mid" },
    { name: "Prof. Josephat Byamugisha", role: "Chair: Quality Assurance, ICT & Gender", tier: "mid" },
    { name: "Mr. Donald Nyakairu", role: "Chair: Audit & Risk Management", tier: "mid" },
    { name: "Mr. Cyriaco Kabagambe", role: "Chair: Student Welfare & Disciplinary", tier: "mid" },
    { name: "Dr. Kamba Fadhiru Pakoyo", role: "Chair: Appointments Board", tier: "mid" },
  ];

  const members: PersonProfile[] = [
    { name: "Mr. Muhooz Daniel", role: "Guild President", tier: "base", image:"/" },
    { name: "Dr. Sabiiti Mulema", role: "Staff Representative", tier: "base" },
    { name: "Ms. Rukundo Anita", role: "Member", tier: "base" },
    { name: "Assoc. Prof. Margaret Nabasirye", role: "Member", tier: "base" },
    { name: "Ms. Joyce Okello", role: "Member", tier: "base" },
    { name: "Prof. Winston Ireeta Tumps", role: "Member", tier: "base" },
    { name: "Mr. Timothy Musoke Ssejjoba", role: "Member", tier: "base" },
  ];

  return (
    <div className="space-y-10">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0B6232]">Governance</p>
        <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">University Council</h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          The University Council is the supreme governing body of King Ceasor University, responsible for providing strategic leadership, policy oversight and institutional governance. The Council ensures the University maintains high standards of academic excellence, accountability and sustainable development.
        </p>
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          Through effective supervision of the University&apos;s administration and operations, the Council safeguards the institution&apos;s vision, mission and long-term growth while fostering an environment that supports quality education, innovation and service to society.
        </p>
      </div>

      {/* ── Desktop tree (md+) ── */}
      <div className="hidden pb-4 md:block">
        <div className="flex w-full flex-col items-center gap-8">
          <CouncilCard person={chair} onSelect={setSelectedPerson} />
          <CouncilCard person={viceChair} onSelect={setSelectedPerson} />
          <div className="flex w-full flex-wrap justify-center gap-6">
            {committeeChairs.map((p) => (
              <CouncilCard key={p.name} person={p} onSelect={setSelectedPerson} />
            ))}
          </div>
          <div className="mb-2 rounded-full border border-slate-200 bg-[#FFFFFF] px-4 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            Committee Members
          </div>
          <div className="flex w-full flex-wrap justify-center gap-6">
            {members.map((p) => (
              <CouncilCard key={p.name} person={p} onSelect={setSelectedPerson} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Mobile stacked (< md) ── */}
      <div className="space-y-8 md:hidden">
        {/* Leadership */}
        <div className="space-y-3">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0B6232]">Leadership</p>
          <CouncilCardMobile person={chair} onSelect={setSelectedPerson} />
          <CouncilCardMobile person={viceChair} onSelect={setSelectedPerson} />
        </div>
        {/* Committee Chairs */}
        <div className="space-y-3">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0B6232]">Committee Chairpersons</p>
          {committeeChairs.map((p) => (
            <CouncilCardMobile key={p.name} person={p} onSelect={setSelectedPerson} />
          ))}
        </div>
        {/* Members */}
        <div className="space-y-3">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0B6232]">Committee Members</p>
          {members.map((p) => (
            <CouncilCardMobile key={p.name} person={p} onSelect={setSelectedPerson} />
          ))}
        </div>
      </div>
      <BioModal person={selectedPerson} onClose={() => setSelectedPerson(null)} />
    </div>
  );
}

function TabBoardOfTrustees() {
  const [selectedPerson, setSelectedPerson] = useState<PersonProfile | null>(null);
  const chair: PersonProfile = { name: "Hon. Thomas Tayebwa", role: "Chairperson", tier: "top" };
  const members: PersonProfile[] = [
    { name: "Ms. Agnes Selina Mfite", role: "Member", tier: "base", image:"/" },
    { name: "Hon. Okello Oryem", role: "Member", tier: "base" },
    { name: "Mr. Donald Nyakairu", role: "Member", tier: "base" },
    { name: "King Ceasor Mulenga", role: "Member", tier: "base",},
  ];

  return (
    <section id="governance">
    <div className="space-y-10">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0B6232]">Governance</p>
        <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">Board of Trustees</h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          The Board of Trustees supports King Ceasor University&apos;s long-term institutional stewardship, helping safeguard the University&apos;s mission, resources and strategic direction.
        </p>
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          Working within the University&apos;s governance framework, the trustees provide oversight that strengthens accountability, continuity and responsible growth for the benefit of students, staff and the wider community.
        </p>
      </div>

      <div className="hidden pb-4 md:block">
        <div className="flex w-full flex-col items-center gap-8">
          <CouncilCard person={chair} onSelect={setSelectedPerson} />
          <div className="mb-2 rounded-full border border-slate-200 bg-[#FFFFFF] px-4 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            Trustee Members
          </div>
          <div className="flex w-full flex-wrap justify-center gap-6">
            {members.map((p) => (
              <CouncilCard key={p.role} person={p} onSelect={setSelectedPerson} />
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-8 md:hidden">
        <div className="space-y-3">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0B6232]">Leadership</p>
          <CouncilCardMobile person={chair} onSelect={setSelectedPerson} />
        </div>
        <div className="space-y-3">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0B6232]">Trustee Members</p>
          {members.map((p) => (
            <CouncilCardMobile key={p.role} person={p} onSelect={setSelectedPerson} />
          ))}
        </div>
      </div>
      <BioModal person={selectedPerson} onClose={() => setSelectedPerson(null)} />
    </div>
  </section>
  );
}

function TabAdministration() {
  const [selectedPerson, setSelectedPerson] = useState<PersonProfile | null>(null);
  const officers: PersonProfile[] = [
    { name: "Dr. Charity Basaza Mulenga", role: "Vice Chancellor", tier: "top", image: "/University Management/Dr. Charity Basaza Mulenga.jpg" },
    { name: "Dr. Byarugaba Bonaventura", role: "Deputy Vice Chancellor", tier: "mid", image: "/University Management/Dr. Byarugaba Bonaventura.jpeg" },
    { name: "Mrs. Pape Matama Bagonza", role: "University Secretary", tier: "mid", image: "/University Management/Mrs. Pape Matama Bagonza.jpeg" },
    { name: "Mr. Alfred Namoah Masikye", role: "Academic Registrar", tier: "mid", image: "/University Management/Alfred Namoah Masikye.jpeg" },
    { name: "Assoc. Prof. Annabella Habinka Ejiri", role: "Director Quality Assurance", tier: "mid", image:"/qa.jpeg"},
    { name: "Mrs. Sylivia Okwi Christine", role: "Director Finance", tier: "mid", image: "/University Management/Mrs. Sylivia Okwi Christine.jpeg" },
    { name: "Fr. Dr. Lumala Aloysius Gonzagga", role: "Dean of Students", tier: "mid", image: "/University Management/Fr. Dr. Lumala Aloysius Gonzagga.jpeg" },
    { name: "Mr. Mwima Abdallah", role: "Manager ICT", tier: "base", image: "/University Management/Mr. Mwima Abdallah.jpeg" },
    { name: "Mr. Eric Keziron Oloo", role: "University Librarian", tier: "base", image: "/University Management/Mr. Eric Keziron Oloo.jpeg" },
    { name: "Mr. Wilberforce Mfitundinda", role: "Registrar Academics", tier: "base", image: "/University Management/Mr. Wilberforce Mfitundinda.jpeg" },
    { name: "Mr. John Acire", role: "Manager Human Resource", tier: "base", image: "/University Management/Mr. John Acire.jpeg" },
    { name: "Ms. Betty Uwiringiyimana", role: "PRO", tier: "base", image: "/University Management/Betty Uwiringiyimana - PRO.jpeg" },
    { name: "Ms. Rosset Gaali", role: "Marketing Manager", tier: "base", image: "/University Management/Ms. Rosset Gaali - Marketing Manager.jpeg" },
  ];
  const [vc, dvc, ...rest] = officers;
  const seniorOfficers = rest.filter((officer) => officer.tier === "mid");
  const managers = rest.filter((officer) => officer.tier === "base");

  return (
    <div className="space-y-10">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0B6232]">Management</p>
        <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">University Management</h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          The University Management team serves as the executive arm of King Ceasor University, responsible for the effective management and coordination of the institution&apos;s academic, administrative and operational activities.
        </p>
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          Guided by the University&apos;s vision and strategic objectives, management promotes academic excellence, efficient resource use, institutional growth and a supportive learning environment for students, staff and stakeholders.
        </p>
      </div>

      {/* ── Desktop tree (md+) ── */}
      <div className="hidden pb-4 md:block">
        <div className="flex w-full flex-col items-center gap-8">
          <CouncilCard person={vc} onSelect={setSelectedPerson} />
          <CouncilCard person={dvc} onSelect={setSelectedPerson} />

          
          <div className="flex w-full flex-wrap justify-center gap-6">
            {seniorOfficers.map((person) => (
              <CouncilCard key={`${person.role}-${person.name}`} person={person} onSelect={setSelectedPerson} />
            ))}
          </div>

          
          <div className="flex w-full flex-wrap justify-center gap-6">
            {managers.map((person) => (
              <CouncilCard key={`${person.role}-${person.name}`} person={person} onSelect={setSelectedPerson} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Mobile stacked (< md) ── */}
      <div className="space-y-8 md:hidden">
        <div className="space-y-3">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0B6232]">Executive Leadership</p>
          <CouncilCardMobile person={vc} onSelect={setSelectedPerson} />
          <CouncilCardMobile person={dvc} onSelect={setSelectedPerson} />
        </div>
        <div className="space-y-3">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0B6232]">Senior University Officers</p>
          {seniorOfficers.map((person) => (
            <CouncilCardMobile key={`${person.role}-${person.name}`} person={person} onSelect={setSelectedPerson} />
          ))}
        </div>
        <div className="space-y-3">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0B6232]">Managers &amp; Service Leads</p>
          {managers.map((person) => (
            <CouncilCardMobile key={`${person.role}-${person.name}`} person={person} onSelect={setSelectedPerson} />
          ))}
        </div>
      </div>

      <BioModal person={selectedPerson} onClose={() => setSelectedPerson(null)} />
    </div>
  );
}

const tabs = [
  { id: "about", label: "About Us", content: <TabAboutUs /> },
  { id: "trustees", label: "Board of Trustees", content: <TabBoardOfTrustees /> },
  { id: "council", label: "University Council", content: <TabUniversityCouncil /> },
  { id: "administration", label: "University Management", content: <TabAdministration /> },
];

const hashTabMap: Record<string, string> = {
  "mission-vision": "about",
  governance: "trustees",
};

// ── Page ───────────────────────────────────────────────────────────────────

export default function AboutPage() {
  const [active, setActive] = useState("about");
  const current = tabs.find((t) => t.id === active)!;

  useEffect(() => {
    const setActiveFromHash = () => {
      const tabId = window.location.hash.replace("#", "");
      if (tabs.some((tab) => tab.id === tabId)) {
        setActive(tabId);
        return;
      }

      const mappedTabId = hashTabMap[tabId];
      if (mappedTabId) {
        setActive(mappedTabId);
        window.setTimeout(() => {
          document.getElementById(tabId)?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 0);
      }
    };

    setActiveFromHash();
    window.addEventListener("hashchange", setActiveFromHash);
    return () => window.removeEventListener("hashchange", setActiveFromHash);
  }, []);

  const selectTab = (tabId: string) => {
    setActive(tabId);
    window.history.replaceState(null, "", `#${tabId}`);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="border-b border-slate-100 bg-[#FFFFFF]">
          <div className="mx-auto flex max-w-[1440px] items-center gap-2 px-4 py-3 text-xs text-slate-500 sm:px-6 lg:px-8">
            <Link href="/" className="hover:text-[#0B6232]">Home</Link>
            <ChevronRight className="size-3.5" />
            <span className="font-semibold text-[#0B6232]">About Us</span>
          </div>
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1800&q=80')" }} />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
          <div className="relative z-10 mx-auto max-w-[1440px]">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#FFC66B]">About King Ceasor University</p>
            <h1 className="mt-3 max-w-3xl font-serif text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">Shaping Leaders. Igniting the Future.</h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
              A premier chartered private university in Uganda dedicated to academic excellence, innovation and transformative education for students from across Africa and beyond.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[260px_1fr] lg:gap-14">

            {/* Sidebar — desktop */}
            <aside className="hidden lg:block">
              <nav className="sticky top-24 rounded-2xl border border-slate-100 bg-[#FFFFFF] p-5 shadow-sm">
                <p className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">About Us</p>
                <ul className="space-y-1">
                  {tabs.map((tab) => (
                    <li key={tab.id}>
                      <button
                        onClick={() => selectTab(tab.id)}
                        className={`flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-sm font-semibold transition ${
                          active === tab.id
                            ? "bg-[#0B6232] text-white"
                            : "text-slate-700 hover:bg-white hover:text-[#0B6232]"
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
                    onClick={() => selectTab(tab.id)}
                    className={`shrink-0 border-b-2 px-3 pb-3 pt-1 text-xs font-bold transition ${
                      active === tab.id
                        ? "border-[#0B6232] text-[#0B6232]"
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
