"use client";

import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Globe,
  Mail,
  MapPin,
  Users,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Alumni Worldwide", value: "4,000+", icon: Users },
  { label: "Countries Represented", value: "12+", icon: Globe },
  { label: "Years of Graduates", value: "10+", icon: GraduationCap },
  { label: "Industries Reached", value: "20+", icon: Briefcase },
];

const benefits = [
  {
    icon: BookOpen,
    title: "Lifelong Learning",
    desc: "Access continuing education programmes, workshops and professional development courses at discounted rates.",
  },
  {
    icon: Briefcase,
    title: "Career Network",
    desc: "Connect with a growing professional network of KCU graduates across Uganda and beyond.",
  },
  {
    icon: Award,
    title: "Alumni Recognition",
    desc: "Outstanding alumni are celebrated annually for their contributions to society and professional excellence.",
  },
  {
    icon: Globe,
    title: "Global Community",
    desc: "Join regional chapters and international alumni associations to stay connected wherever you are.",
  },
];

const notableAlumni = [
  {
    name: "Sarah Namukasa",
    programme: "Bachelor of Laws, 2017",
    role: "Senior State Attorney, Ministry of Justice",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "David Okiror",
    programme: "Bachelor of Business Administration, 2016",
    role: "CEO, East Africa Logistics Group",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Grace Atim",
    programme: "Diploma in Hotel Management, 2018",
    role: "Operations Manager, Kampala Serena Hotel",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=80",
  },
];

export default function AlumniPage() {
  return (
    <>
      <Navbar />

      <main className="pt-[calc(2.5rem+6rem)] lg:pt-[calc(2.5rem+9.5rem)]">

        {/* Hero */}
        <section className="relative overflow-hidden bg-[#0B6232] py-20 text-white">
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{ backgroundImage: "radial-gradient(circle at 70% 40%, #FFC66B 0%, transparent 55%)" }}
          />
          <div className="relative mx-auto max-w-[1440px] px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-[#FFC66B]">
                <GraduationCap className="size-4" /> KCU Alumni
              </p>
              <h1 className="mb-5 text-4xl font-black leading-tight tracking-tight lg:text-5xl">
                Once KCU,<br />Always KCU.
              </h1>
              <p className="mb-8 max-w-xl text-lg text-white/80 leading-relaxed">
                Welcome back to the King Ceasor University family. Our alumni are ambassadors of excellence — shaping communities, industries and lives across Uganda and the world.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="h-12 rounded-xl bg-[#FFC66B] px-6 font-black text-[#0B6232] hover:bg-[#FFC66B]/90">
                  <a href="mailto:alumni@kcu.ac.ug">
                    <Mail className="mr-2 size-4" /> Join the Network
                  </a>
                </Button>
                <Button asChild variant="outline" className="h-12 rounded-xl border-2 border-white/40 bg-transparent px-6 font-bold text-white hover:bg-white/10 hover:text-white">
                  <Link href="/about">
                    About KCU <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-slate-100 bg-white py-14">
          <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-6 px-6 lg:grid-cols-4 lg:px-8">
            {stats.map(({ label, value, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-6 text-center shadow-sm">
                <span className="grid size-12 place-items-center rounded-full bg-[#0B6232]/10">
                  <Icon className="size-5 text-[#0B6232]" />
                </span>
                <span className="text-3xl font-black text-[#0B6232]">{value}</span>
                <span className="text-sm font-semibold text-slate-500">{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
            <div className="mb-10 max-w-xl">
              <h2 className="text-3xl font-black tracking-tight text-slate-900">Alumni Benefits</h2>
              <p className="mt-3 text-slate-500">Your KCU degree opens doors — and so does your alumni membership.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <span className="mb-4 grid size-11 place-items-center rounded-xl bg-[#FFC66B]/20">
                    <Icon className="size-5 text-[#0B6232]" />
                  </span>
                  <h3 className="mb-2 font-black text-slate-800">{title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Notable Alumni */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
            <div className="mb-10 max-w-xl">
              <h2 className="text-3xl font-black tracking-tight text-slate-900">Notable Alumni</h2>
              <p className="mt-3 text-slate-500">KCU graduates making a difference in their professions and communities.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {notableAlumni.map(({ name, programme, role, image }) => (
                <div key={name} className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 shadow-sm">
                  <div className="h-52 w-full overflow-hidden bg-slate-200">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={image} alt={name} className="h-full w-full object-cover object-top" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-black text-slate-800">{name}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#0B6232]">{programme}</p>
                    <p className="mt-2 text-sm text-slate-500">{role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0B6232] py-16 text-white">
          <div className="mx-auto max-w-[1440px] px-6 text-center lg:px-8">
            <GraduationCap className="mx-auto mb-4 size-10 text-[#FFC66B]" />
            <h2 className="mb-3 text-3xl font-black tracking-tight">Stay Connected</h2>
            <p className="mx-auto mb-8 max-w-lg text-white/75">
              Update your details, share your story, or reach out to the alumni office to get involved with upcoming events and initiatives.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="h-12 rounded-xl bg-[#FFC66B] px-6 font-black text-[#0B6232] hover:bg-[#FFC66B]/90">
                <a href="mailto:alumni@kcu.ac.ug">
                  <Mail className="mr-2 size-4" /> alumni@kcu.ac.ug
                </a>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-xl border-2 border-white/40 bg-transparent px-6 font-bold text-white hover:bg-white/10 hover:text-white">
                <a href="tel:+256200911450">
                  <MapPin className="mr-2 size-4" /> Bunga Hill Campus
                </a>
              </Button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
