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
           Welcome to King Ceasor University,a Chartered institution committed to excellence in education, research, innovation, and service to society.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            At KCU, we believe education is transformative, empowering learners with the knowledge, skills, values, and leadership qualities needed to thrive in a rapidly changing world. We provide a supportive and intellectually stimulating environment that encourages critical thinking, ethical conduct, innovation, and academic excellence.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            The award of our University Charter reflects our commitment to quality higher education and continuous institutional growth. We are also proud that our Bachelor of Medicine and Bachelor of Surgery (MBChB) programme has achieved recognition through ECFMG pathways, expanding international opportunities for our graduates.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            As we look ahead, we are embracing Competency-Based Education and Training (CBET), advancing research and innovation, strengthening global partnerships, and leveraging technology to enhance learning.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            I invite you to join KCU as we transform lives, advance knowledge, and prepare globally competitive professionals and leaders for the future.
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
