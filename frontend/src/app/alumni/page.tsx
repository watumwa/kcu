"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Building2,
  CalendarDays,
  CheckCircle2,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  Landmark,
  Mail,
  MapPin,
  Megaphone,
  Network,
  Send,
  Stethoscope,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Network,
    title: "Professional Network",
    desc: "Meet KCU graduates across law, health sciences, business, technology, public service, and entrepreneurship.",
  },
  {
    icon: Briefcase,
    title: "Career Access",
    desc: "Receive career updates, internship leads, graduate trainee opportunities, and employer introductions.",
  },
  {
    icon: BookOpen,
    title: "Lifelong Learning",
    desc: "Join workshops, short courses, research forums, and professional development sessions hosted by KCU.",
  },
  {
    icon: Award,
    title: "Alumni Recognition",
    desc: "Share your achievements and help KCU celebrate graduates who are shaping communities and industries.",
  },
];

const sectors = [
  { title: "Government", count: "420+", icon: Landmark },
  { title: "Healthcare", count: "680+", icon: Stethoscope },
  { title: "Banking", count: "260+", icon: Building2 },
  { title: "Technology", count: "190+", icon: Network },
  { title: "NGOs", count: "300+", icon: HandHeart },
  { title: "Business Owners", count: "150+", icon: Briefcase },
];

const notableAlumni = [
  {
    name: "Dr. Mujawimana Alphonsina",
    programme: "",
    role: "Paediatrician",
    organization: "",
    story: "King Ceasor University gave me more than a medical education—it gave me a home where I learned discipline, compassion, and the joy of teaching. Returning as a lecturer has been one of my greatest privileges.",
    image: "/alumni/Dr. Mujawimana Alphonsina.jpeg",
  },
  {
    name: "Dr. Hashaka Gerald",
    programme: "",
    role: "Gynaecologist",
    organization: "",
    story: "Dear Students: hold onto your curiosity and never underestimate the impact of kindness in medicine. The small things you do for a patients today will stay with them forever.",
    image: "/alumni/Dr. Hashaka Gerald.jpeg",
  },
  {
    name: "Mugisha Brian",
    programme: "",
    role: "Business Administrator",
    organization: "",
    story: "Today, I actively drive impactful growth strategies within my organization, applying the agile mindset I developed on campus. KCU did not just give me a degree; it transformed me into a catalyst for regional economic development.",
    image: "/alumni/Mugisha Brian.jpeg",
    imageClassName: "h-full w-full object-cover object-[center_35%]",
  },
  {
    name: "Kwizera Thomas",
    programme: "",
    role: "Oil Mining Expert",
    organization: "",
    story: "Today, am working in the gold mining industry, making me one of the beneficiaries of the course. My academic background has helped me understand geological formations, mineral deposits and mining processes, contributing to my professional success",
    image: "/alumni/Kwizera Thomas.jpeg",
  },
];

const movingAlumni = [...notableAlumni, ...notableAlumni];

const events = [
  {
    date: "Jul 18",
    title: "Alumni Homecoming 2026",
    location: "KCU Main Campus, Bunga",
    detail: "Campus reunion, faculty meetups, awards, and networking.",
  },
  {
    date: "Aug 09",
    title: "Career Networking Dinner",
    location: "Kampala",
    detail: "Employers, alumni leaders, and final-year students in one room.",
  },
  {
    date: "Sep 21",
    title: "Entrepreneurship Summit",
    location: "KCU Auditorium",
    detail: "Alumni founders share practical lessons on building resilient ventures.",
  },
];

const countries = ["Uganda", "Kenya", "Rwanda", "South Sudan", "UAE", "United Kingdom", "United States"];

const giveBack = [
  "Sponsor scholarships",
  "Offer internships",
  "Host workplace visits",
  "Donate learning equipment",
  "Support research projects",
  "Give guest lectures",
];

const formFields = [
  { label: "Full Name", name: "fullName", type: "text", placeholder: "Your full name" },
  { label: "Student Number", name: "studentNumber", type: "text", placeholder: "KCU student number" },
  { label: "Program", name: "program", type: "text", placeholder: "e.g. Bachelor of Laws" },
  { label: "Graduation Year", name: "graduationYear", type: "number", placeholder: "e.g. 2022" },
  { label: "Current Employer", name: "employer", type: "text", placeholder: "Organization or self-employed" },
  { label: "Position", name: "position", type: "text", placeholder: "Current role" },
  { label: "Country", name: "country", type: "text", placeholder: "Where you are based" },
  { label: "LinkedIn Profile", name: "linkedin", type: "url", placeholder: "https://linkedin.com/in/..." },
];

export default function AlumniPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Navbar />

      <main className="pt-[calc(2.5rem+6rem)] lg:pt-[calc(2.5rem+9.5rem)]">
        <section className="relative min-h-[720px] overflow-hidden bg-[#062f1c] text-white">
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/alumni/hero-graduation.jpg" alt="King Ceasor University graduation ceremony" className="h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#062f1c]/92 via-[#062f1c]/68 to-[#062f1c]/34" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#062f1c]/70 via-transparent to-black/25" />
          </div>

          <div className="relative mx-auto flex min-h-[720px] max-w-[1440px] items-center px-6 py-16 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/14 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-[#FFC66B] backdrop-blur">
                <GraduationCap className="size-4" /> KCU Alumni
              </p>
              <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Once KCU,<br />Always KCU.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/82">
                Welcome back to the King Ceasor University family. Our alumni are ambassadors of excellence, shaping communities, industries, and lives across Uganda and the world.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild className="h-12 rounded-lg bg-[#FFC66B] px-6 font-black text-[#0B6232] hover:bg-[#f4b850]">
                  <a href="#register">
                    <Send className="mr-2 size-4" /> Register as Alumni
                  </a>
                </Button>
                <Button asChild variant="outline" className="h-12 rounded-lg border-2 border-white/45 bg-white/5 px-6 font-bold text-white hover:bg-white/12 hover:text-white">
                  <a href="#mentor">
                    Become a Mentor <ArrowRight className="ml-2 size-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-100 bg-white py-14">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-lg border border-slate-100 bg-white p-6 shadow-sm">
                  <span className="mb-5 grid size-11 place-items-center rounded-lg bg-[#0B6232]/10">
                    <Icon className="size-5 text-[#0B6232]" />
                  </span>
                  <h2 className="text-lg font-black text-slate-900">{title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="register" className="bg-slate-50 py-16">
          <div className="mx-auto grid max-w-[1440px] gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0B6232]">Join the Network</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Update your alumni profile</h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Register your details so the alumni office can share events, mentorship opportunities, career leads, and community updates with you.
              </p>
              <div className="mt-8 rounded-lg border border-[#0B6232]/15 bg-white p-5">
                <h3 className="font-black text-slate-900">What happens next?</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  The current form confirms your details on the page. It is ready to connect to a database or email workflow when the submission endpoint is added.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-lg border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
              {submitted ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <CheckCircle2 className="size-14 text-[#0B6232]" />
                  <h3 className="mt-5 text-2xl font-black text-slate-950">Profile received</h3>
                  <p className="mt-3 max-w-md text-slate-500">
                    Thank you for reconnecting with KCU. The page is ready for a backend submission endpoint when available.
                  </p>
                  <Button type="button" onClick={() => setSubmitted(false)} className="mt-7 h-11 rounded-lg bg-[#0B6232] px-5 font-bold text-white hover:bg-[#094f2a]">
                    Add another profile
                  </Button>
                </div>
              ) : (
                <>
                  <div className="grid gap-4 md:grid-cols-2">
                    {formFields.map((field) => (
                      <label key={field.name} className="text-sm font-bold text-slate-700">
                        {field.label}
                        <input
                          name={field.name}
                          type={field.type}
                          placeholder={field.placeholder}
                          required={field.name !== "linkedin"}
                          className="mt-2 h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm font-normal text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0B6232] focus:ring-3 focus:ring-[#0B6232]/10"
                        />
                      </label>
                    ))}
                  </div>
                  <label className="mt-4 block text-sm font-bold text-slate-700">
                    How would you like to engage with KCU?
                    <textarea
                      name="engagement"
                      placeholder="Mentorship, internships, speaking, donations, events..."
                      className="mt-2 min-h-28 w-full resize-y rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm font-normal text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0B6232] focus:ring-3 focus:ring-[#0B6232]/10"
                    />
                  </label>
                  <Button type="submit" className="mt-6 h-12 rounded-lg bg-[#0B6232] px-6 font-black text-white hover:bg-[#094f2a]">
                    <Send className="mr-2 size-4" /> Submit Alumni Profile
                  </Button>
                </>
              )}
            </form>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0B6232]">Where They Are Now</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">KCU graduates across key sectors</h2>
              <p className="mt-3 text-slate-500">A living alumni platform should show the impact of graduates beyond campus.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {sectors.map(({ title, count, icon: Icon }) => (
                <div key={title} className="flex items-center gap-4 rounded-lg border border-slate-100 bg-slate-50 p-5">
                  <span className="grid size-12 place-items-center rounded-lg bg-white text-[#0B6232] shadow-sm">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-2xl font-black text-slate-950">{count}</p>
                    <h3 className="text-sm font-bold text-slate-500">{title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0B6232]">Notable Alumni</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">Stories worth sharing</h2>
                <p className="mt-3 text-slate-500">Profiles become more powerful when they include role, organization, and a personal reflection.</p>
              </div>
              <Button asChild variant="outline" className="h-11 rounded-lg border-[#0B6232]/20 text-[#0B6232] hover:bg-[#0B6232]/5">
                <a href="mailto:alumni@kcu.ac.ug">
                  Share Your Story <Mail className="ml-2 size-4" />
                </a>
              </Button>
            </div>
            <div className="relative overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-slate-50 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-slate-50 to-transparent" />
              <div className="flex w-max gap-6 py-1 alumni-marquee hover:[animation-play-state:paused]">
                {movingAlumni.map(({ name, programme, role, organization, story, image, imageClassName }, index) => (
                  <article key={`${name}-${index}`} className="w-[min(86vw,380px)] overflow-hidden rounded-lg border border-slate-100 bg-white shadow-sm">
                    <div className="flex h-72 w-full items-center justify-center overflow-hidden bg-slate-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={image} alt={`${name} alumni profile`} className={imageClassName ?? "h-full w-full object-cover object-center"} />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-black text-slate-900">{name}</h3>
                      <p className="mt-1 text-xs font-black uppercase tracking-wide text-[#0B6232]">{programme}</p>
                      <p className="mt-3 text-sm font-bold text-slate-800">{role}</p>
                      <p className="text-sm text-slate-500">{organization}</p>
                      <p className="mt-4 text-sm leading-relaxed text-slate-500">&quot;{story}&quot;</p>
                      
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="mentor" className="bg-white py-16">
          <div className="mx-auto grid max-w-[1440px] gap-10 px-6 lg:grid-cols-2 lg:px-8">
            <div className="rounded-lg bg-[#0B6232] p-8 text-white">
              <HeartHandshake className="size-10 text-[#FFC66B]" />
              <h2 className="mt-5 text-3xl font-black tracking-tight">Mentor a KCU student</h2>
              <p className="mt-4 leading-relaxed text-white/78">
                Alumni can guide final-year students, review career plans, support internships, and host workplace visits.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild className="h-11 rounded-lg bg-[#FFC66B] px-5 font-black text-[#0B6232] hover:bg-[#f4b850]">
                  <a href="#register">Become a Mentor</a>
                </Button>
                <Button asChild variant="outline" className="h-11 rounded-lg border-white/35 bg-transparent px-5 font-bold text-white hover:bg-white/10 hover:text-white">
                  <a href="mailto:alumni@kcu.ac.ug">Request a Mentor</a>
                </Button>
              </div>
            </div>

            <div className="rounded-lg border border-slate-100 bg-slate-50 p-8">
              <CalendarDays className="size-10 text-[#0B6232]" />
              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950">Upcoming alumni events</h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Reconnect with KCU through reunions, networking sessions, and alumni-led learning events.
              </p>
              <div className="mt-6 grid gap-4">
                {events.slice(0, 1).map((event) => (
                  <article key={event.title} className="grid gap-4 rounded-lg border border-slate-100 bg-white p-4 shadow-sm sm:grid-cols-[78px_1fr]">
                    <div className="rounded-lg bg-[#FFC66B]/25 p-3 text-center">
                      <p className="text-sm font-black text-[#0B6232]">{event.date}</p>
                    </div>
                    <div>
                      <h3 className="font-black text-slate-900">{event.title}</h3>
                      <p className="mt-1 text-sm font-bold text-slate-500">{event.location}</p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-500">{event.detail}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto grid max-w-[1440px] gap-8 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div className="rounded-lg border border-slate-100 bg-slate-50 p-8">
              <MapPin className="size-10 text-[#0B6232]" />
              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950">Global alumni map</h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                KCU graduates are building careers and communities across Uganda, East Africa, and the wider world.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {countries.map((country) => (
                  <span key={country} className="rounded-full border border-[#0B6232]/15 bg-white px-4 py-2 text-sm font-bold text-slate-700">
                    {country}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-slate-100 bg-white p-8 shadow-sm">
              <Megaphone className="size-10 text-[#0B6232]" />
              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950">Give back to KCU</h2>
              <p className="mt-4 leading-relaxed text-slate-600">Alumni contribution can directly improve student opportunity and institutional growth.</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {giveBack.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                    <CheckCircle2 className="size-4 text-[#0B6232]" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0B6232] py-16 text-white">
          <div className="mx-auto max-w-[1440px] px-6 text-center lg:px-8">
            <GraduationCap className="mx-auto mb-4 size-10 text-[#FFC66B]" />
            <h2 className="text-3xl font-black tracking-tight">Stay connected with the KCU alumni office</h2>
            <p className="mx-auto mt-3 max-w-2xl text-white/75">
              Update your details, share your story, volunteer as a mentor, or contribute an opportunity for students and graduates.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild className="h-12 rounded-lg bg-[#FFC66B] px-6 font-black text-[#0B6232] hover:bg-[#f4b850]">
                <a href="mailto:alumni@kcu.ac.ug">
                  <Mail className="mr-2 size-4" /> alumni@kcu.ac.ug
                </a>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-lg border-2 border-white/40 bg-transparent px-6 font-bold text-white hover:bg-white/10 hover:text-white">
                <Link href="/about">
                  About KCU <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
