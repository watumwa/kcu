"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-[#FFFFFF] px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:gap-12">
        <div className="relative overflow-hidden rounded-2xl bg-slate-100 shadow-xl shadow-slate-950/10 md:rounded-[1.75rem]">
          <Image
            src="/vc.jpg"
            alt="Dr. Charity Basaza Mulenga, Vice Chancellor of King Ceasor University"
            width={768}
            height={745}
            className="mx-auto h-auto w-3/4 object-contain"
          />
        </div>

        <div className="lg:pr-8">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-[#0B6232] sm:text-sm sm:tracking-[0.2em]">Vice Chancellor&apos;s Message</p>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            On behalf of the Management, Staff, and Administration of King Ceasor University, I am delighted to warmly welcome you to explore our university.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            King Ceasor University is a privately owned University licensed by the National Council for Higher Education. Although we are relatively young, having registered our first students in 2013, our journey began in 2009. Today, we offer a diverse range of programs, including Medicine, Nursing, Petroleum Geoscience, Law, Computer Forensics and Criminal Investigations, and various management disciplines.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Our mission is to prepare students to be lifelong learners. Our dedicated faculty contribute significantly by creating a supportive learning environment, delivering quality teaching, and providing thoughtful mentoring, all of which ensure our students’ future success.
          </p>
           <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            At King Ceasor University, we provide an exceptional learning environment for our students and staff. Our state-of-the-art laboratories feature cutting-edge facilities, serving as dynamic spaces for exploration, discovery, and collaboration. These resources are utilized by our students and faculty members to enrich the student’s study experiences.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Research and development initiatives are a key mission at King Ceasor University. We strive to apply our knowledge and skills to promote social economic transformation. We are committed to strengthening our partnerships with academic institutions, government bodies, and industries, while also building new alliances to expand our impact.
          </p>
          <div className="mt-6 border-l-4 border-[#FFC66B] pl-4">
            <p className="text-base font-black text-slate-950">Dr. Charity Basaza Mulenga</p>
            <p className="mt-1 text-sm font-semibold text-[#0B6232]">Vice Chancellor, King Ceasor University</p>
          </div>
        </div>
      </div>
    </section>
  );
}
