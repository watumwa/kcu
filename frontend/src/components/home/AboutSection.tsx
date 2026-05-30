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
           Welcome to King Ceasor University, a Chartered institution committed to excellence in education, research, innovation, and service to society.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            At King Ceasor University, we believe that education is a transformative journey that goes beyond the acquisition of knowledge. It is about developing character, nurturing leadership, fostering innovation, and equipping learners with the skills and values needed to make a meaningful contribution to society. Our commitment is to provide a supportive and intellectually stimulating environment where students are empowered to think critically, act ethically, and pursue excellence in their chosen fields.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Since our establishment, the University has made significant strides in advancing quality higher education. The award of the University Charter marked an important milestone in our growth and affirmed our commitment to academic excellence and institutional quality. We are also proud that our Bachelor of Medicine and Bachelor of Surgery (MBChB) programme has achieved recognition through ECFMG pathways, creating opportunities for our graduates to pursue postgraduate training and professional advancement internationally.
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
