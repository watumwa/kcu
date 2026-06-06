import {
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  CircleDollarSign,
  HeartPulse,
  Landmark,
  Megaphone,
  MonitorCog,
  Scale,
  ShieldCheck,
  Trophy,
  Users,
  Vote,
} from "lucide-react";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";

const leadership = [
  { ministry: "Guild President", name: "HE. Muhoozi Daniel Noah", image: "/Guild/Guild President.jpeg", tier: "top" as const },
  { ministry: "Vice President", name: "Hon. Nagirinya Amina", image: "/Guild/Vice President.jpeg", tier: "mid" as const },
  { ministry: "Prime Minister", name: "Hon. Uzamukunda Prossy", image: "/Guild/Prime Minister.jpeg", tier: "mid" as const },
  { ministry: "Deputy Prime Minister & Minister of Social Affairs", name: "Hon. Nkurunziza Moses", image: "/Guild/Deputy Prime Minister.jpeg", tier: "mid" as const },
];

const cabinet = [
  { ministry: "Guild Secretary", name: "Hon. Tuyumvire Racheal", icon: Megaphone },
  { ministry: "Academic Affairs", name: "Hon. Mwongyera Gilbert", icon: BookOpenCheck },
  { ministry: "Culture & Mobilization", name: "Hon. Mfitumukiza Ivan", icon: Users },
  { ministry: "Estates & Environment", name: "Hon. Gumisiriza Brian", icon: Building2 },
  { ministry: "External Affairs", name: "Hon. Muhammed Jibril Amir", icon: Landmark },
  { ministry: "Finance", name: "Hon. Agaba Rinah", icon: CircleDollarSign },
  { ministry: "Gender, Ethics & Integrity", name: "Hon. Akatwijuka Tracy", icon: Scale },
  { ministry: "Health", name: "Hon. Nkurunziza Derrick", icon: HeartPulse },
  { ministry: "Research & ICT", name: "Hon. Umutoni Denize", icon: MonitorCog },
  { ministry: "Justice & Constitutional Affairs", name: "Hon. Kemigisha Daisy", icon: Scale },
  { ministry: "Off-Campus Affairs", name: "Hon. Kemigisha Racheal", icon: Building2 },
  { ministry: "Students' Affairs", name: "Hon. Ingabire Agnes", icon: Vote },
  { ministry: "Security", name: "Hon. Ampurire Darlious", icon: ShieldCheck },
  { ministry: "Sports & Games", name: "Hon. Muhoozi Nassem", icon: Trophy },
  { ministry: "Students with Disabilities", name: "Hon. Kirabo Miriam", icon: BriefcaseBusiness },
];

export default function StudentGuildPage() {
  const guildPresident = leadership[0];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-16 sm:pt-20 lg:pt-[8.5rem]">
        <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1800&q=85')" }} />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
          <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#FFC66B]">
                <Vote className="size-4" /> Student Governance
              </p>
              <h1 className="mt-3 max-w-4xl font-serif text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
                Student <span className="block text-[#FFC66B]">Guild</span>
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
                The King Ceasor University Students Guild is the representative body of the student community, working to enhance the university experience for all students.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-[1440px]">
            <div className="relative overflow-hidden rounded-lg bg-[#0B6232] p-6 text-white sm:p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full border border-white/10" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 size-72 rounded-full bg-[#FFC66B]/5" />
              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
                <div className="relative shrink-0">
                  <div className="relative size-28 overflow-hidden rounded-full bg-[#FFC66B] shadow-2xl ring-4 ring-white/20">
                    <Image
                      src={guildPresident.image}
                      alt={guildPresident.name}
                      fill
                      sizes="112px"
                      className="object-cover object-top"
                    />
                  </div>
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-3 py-0.5 text-[10px] font-black text-[#0B6232] shadow">
                    Guild President
                  </span>
                </div>

                <div className="flex-1">
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#FFC66B]">Communication from the Guild Office</p>
                  <h2 className="mt-1 text-2xl font-black text-white">{guildPresident.name}</h2>
                  <div className="mt-2 h-0.5 w-12 rounded-full bg-[#FFC66B]" />
                  <p className="mt-4 text-sm leading-7 text-white/80">
                    Dear Ceasorians,
                  </p>
                  <p className="mt-4 text-sm leading-7 text-white/80">
                    Welcome to the 2026/2027 Guild term. It is an honor to serve as your Guild President and to represent your interests. Together with the Guild Cabinet, I am committed to promoting academic excellence, student welfare and meaningful opportunities for personal and professional growth.
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/80">
                    Our focus is simple: Students First. We will work closely with University Management to address student concerns, strengthen academic support and create an inclusive campus environment where every voice matters.
                  </p>
                  <p className="mt-4 text-sm leading-7 text-white/80">
                    I invite you to engage with your Guild, share your ideas and hold us accountable as we work together to build a stronger King Ceasor University.
                  </p>
                  <p className="mt-5 text-xs font-black italic text-[#FFC66B]">
                    Yours in service, Muhoozi Daniel Noah.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-[1440px]">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0B6232]">Guild Leadership</p>
            <h2 className="mt-2 text-3xl font-black text-slate-950">Executive leadership</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {leadership.map((leader, index) => {
                const isPresident = index === 0;
                return (
                  <div key={leader.name} className={`relative overflow-hidden rounded-lg p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${isPresident ? "bg-[#0B6232] text-white" : "border border-slate-100 bg-white"}`}>
                    <div className={`relative mx-auto size-28 overflow-hidden rounded-full shadow-inner ring-4 ${isPresident ? "bg-[#FFC66B] ring-[#FFC66B]/30" : "bg-[#0B6232]/10 ring-[#0B6232]/10"}`}>
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        sizes="112px"
                        className="object-cover object-top"
                      />
                    </div>
                    <p className={`mt-4 text-sm font-black leading-snug ${isPresident ? "text-white" : "text-slate-950"}`}>{leader.name}</p>
                    <span className={`mt-2 inline-block rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wide ${isPresident ? "bg-[#FFC66B] text-[#0B6232]" : "bg-[#0B6232]/10 text-[#0B6232]"}`}>
                      {leader.ministry}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0B6232]">Cabinet Ministers</p>
                <h2 className="mt-2 text-3xl font-black text-slate-950">Guild cabinet</h2>
              </div>
              <span className="w-fit rounded-full bg-white px-3 py-1 text-xs font-black text-slate-500 shadow-sm">
                {cabinet.length} Ministries
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cabinet.map((minister) => {
                const Icon = minister.icon;
                return (
                  <div key={minister.ministry} className="flex items-start gap-4 rounded-lg border border-slate-100 bg-white p-4 shadow-sm transition hover:border-[#0B6232]/20 hover:shadow-md">
                    <div className="grid size-11 shrink-0 place-items-center rounded-lg bg-[#0B6232]/10 text-[#0B6232]">
                      <Icon className="size-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-black uppercase tracking-wide text-[#0B6232]">{minister.ministry}</p>
                      {minister.name.split("\n").map((name) => (
                        <p key={name} className="mt-1 text-sm font-semibold leading-5 text-slate-700">{name}</p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
