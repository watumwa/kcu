"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronRight, ExternalLink, X } from "lucide-react";

type NewsletterArticle = {
  date: string;
  category: string;
  title: string;
  excerpt: string;
  href?: string;
  image?: string;
  imageAlt?: string;
  highlights?: { label: string; value: string }[];
  gallery?: { src: string; alt: string }[];
  story: string[];
};

const newsletterArticles: NewsletterArticle[] = [
  {
    date: "16 June 2026",
    category: "Community Outreach",
    title: "King Ceasor University Marks Day of the African Child with Career Guidance and Donation Drive at St. Dennis Ssebugwawo Secondary School",
    excerpt:
      "KCU commemorated the Day of the African Child with a career guidance session and donation drive for approximately 300 Advanced Level students in Ggaba.",
    image: "/images/outreach/st-denis-2026/career-guidance-speaker.webp",
    imageAlt: "King Ceasor University representative speaking to St. Dennis Ssebugwawo Secondary School students during career guidance",
    highlights: [
      { label: "Location", value: "Ggaba, Kampala" },
      { label: "Learners Engaged", value: "About 300 A-Level students" },
      { label: "Focus", value: "Career guidance and hygiene support" },
    ],
    gallery: [
      {
        src: "/images/outreach/st-denis-2026/classroom-career-session.webp",
        alt: "Advanced Level students gathered for the King Ceasor University career guidance session",
      },
      {
        src: "/images/outreach/st-denis-2026/student-participation.webp",
        alt: "A student participates during the outreach session at St. Dennis Ssebugwawo Secondary School",
      },
      {
        src: "/images/outreach/st-denis-2026/donation-drive-supplies.webp",
        alt: "Hygiene and sanitation supplies being distributed during the King Ceasor University outreach",
      },
    ],
    story: [
      "Ggaba, Kampala - 16 June 2026",
      "As part of activities to commemorate the Day of the African Child, King Ceasor University conducted a career guidance and community outreach programme at St. Dennis Ssebugwawo Secondary School in Ggaba, reaffirming its commitment to education, youth empowerment and social responsibility.",
      "The university team engaged approximately 300 Advanced Level students in an interactive career guidance session designed to help learners make informed decisions about their academic and professional futures. Students were introduced to the various academic programmes offered at King Ceasor University, opportunities available in higher education and practical approaches to career planning and goal setting. The session also featured a question-and-answer segment that allowed students to seek guidance on university education and career development.",
      "Speaking during the engagement, university representatives encouraged students to align their academic choices with their interests, strengths and long-term aspirations. The learners actively participated in the discussions and expressed appreciation for the valuable insights shared.",
      "In addition to the career guidance session, King Ceasor University donated essential hygiene and sanitation supplies to support the school's health and wellbeing initiatives.",
      "The outreach programme contributed to increased awareness among students about higher education opportunities, strengthened the university's community engagement efforts and supported the school's commitment to maintaining proper hygiene and sanitation standards.",
      "Through such initiatives, King Ceasor University continues to play an active role in empowering young people, supporting communities and building partnerships that promote education and sustainable development.",
      "The university remains committed to extending similar outreach programmes to schools and communities across Uganda as part of its mission to transform lives through education and service.",
    ],
  },
  {
    date: "10 June 2026",
    category: "Partnerships",
    title: "KCU Signs Strategic Partnership with Tecnovia to Enhance Student Skills and Employment Opportunities",
    excerpt:
      "KCU and Tecnovia Uganda Branch signed an MoU to expand industrial training, internships, site-based learning and employment pathways for students.",
    href: "https://kcu.ac.ug/kcu-signs-strategic-partnership-with-tecnovia-to-enhance-student-skills-and-employment-opportunities/",
    story: [
      "King Ceasor University has entered a strategic partnership with Tecnovia Sociedade de Empreitadas, S.A., Uganda Branch through a new Memorandum of Understanding.",
      "The collaboration is designed to strengthen skills development, industry exposure and career readiness for KCU students, especially through industrial training, internships, workshops, seminars and site-based learning experiences.",
      "The partnership will also support curriculum development so that engineering and related academic programmes stay aligned with industry needs, emerging technologies and professional standards.",
      "Tecnovia committed to considering qualified KCU graduates for employment opportunities, including possible international deployment within the Tecnovia Group, subject to performance and regulatory requirements.",
      "The MoU was signed by Dr. Charity Basaza Mulenga, Vice Chancellor of King Ceasor University, and Mr. Jose Guilherme Costa, International Markets Director of Tecnovia Uganda Branch. KCU described the partnership as another step toward connecting classroom learning with industry practice.",
    ],
  },
  {
    date: "10 June 2026",
    category: "Partnerships",
    title: "Department of Law Signs Memorandum of Understanding with Praxis Conflict Centre",
    excerpt:
      "The Department of Law partnered with Praxis Conflict Centre to strengthen ADR education, mentorship, internships, professional training and research.",
    href: "https://kcu.ac.ug/department-of-law-signs-memorandum-of-understanding-with-praxis-conflict-centre/",
    story: [
      "The KCU Department of Law signed a Memorandum of Understanding with Praxis Conflict Centre, a specialist institution in Alternative Dispute Resolution.",
      "The partnership creates a framework for collaboration in ADR education, curriculum development, research, professional training, internships, mentorship, guest lectures and capacity-building for students and staff.",
      "Through the agreement, the Department of Law aims to deepen the place of ADR in legal education while giving students practical exposure to contemporary dispute resolution practice.",
      "The MoU also opens space for joint research, knowledge exchange, career development and direct engagement with ADR practitioners.",
      "Representatives from both institutions reaffirmed a shared commitment to legal education, peaceful dispute resolution and professional development for the benefit of students, staff and the wider community.",
    ],
  },
  {
    date: "01 June 2026",
    category: "Student Life",
    title: "Law Students Honoured for Outstanding Performance in Regional Moot & Debate Competitions",
    excerpt:
      "KCU Law students and their coach presented awards, certificates and books won at regional moot court and legal debate competitions.",
    href: "https://kcu.ac.ug/law-students-honoured-for-outstanding-performance-in-regional-moot-and-debate-competitions/",
    story: [
      "KCU Law students and their coach paid a courtesy visit to the Vice Chancellor to present awards, certificates and books earned from regional legal competitions.",
      "Ahura Precious and Ayebazibwe Hillary represented Uganda at the 2025 Great Lakes Moot Competition in International Humanitarian Law, hosted at Strathmore University in Nairobi from 25 to 30 August 2025. The team emerged as Best Female Team.",
      "The university debate team, comprising Kyoshabire Macklean, Nuwamanya Ignatius and Nyamwija Connie, also excelled at the 3rd Edition of the Centre for African Justice, Peace and Human Rights Legal Debate held on 13 September 2025. Nyamwija Connie was recognised as Best Debater in Africa.",
      "The Vice Chancellor commended the students for representing the university with distinction and reaffirmed KCU's commitment to practical legal training and academic excellence.",
      "Speaking for the students, Ahura thanked the university administration for its support and said the recognition would motivate the team to keep pursuing excellence in future competitions.",
    ],
  },
  {
    date: "26 May 2026",
    category: "Events",
    title: "KCU Hosts Public Lecture on Universal Jurisdiction and Transnational Litigation",
    excerpt:
      "The university hosted an international law public lecture for law students, practitioners and human rights advocates.",
    href: "https://kcu.ac.ug/king-ceasor-university-hosts-public-lecture-on-universal-jurisdiction-and-transnational-litigation/",
    story: [
      "King Ceasor University hosted a public lecture on Universal Jurisdiction and Transnational Litigation, bringing together law students, legal practitioners and human rights advocates.",
      "The lecture was delivered by Drusilla Bret Robertson, an international lawyer based in Paris whose work spans international law, criminal law and human rights advocacy.",
      "Her presentation explored how universal jurisdiction is shaping accountability for international crimes across borders, with practical examples from Uganda and neighbouring countries.",
      "The session highlighted the role of transnational litigation in advancing justice, protecting human rights and strengthening international legal cooperation.",
      "Students and participants engaged with contemporary international criminal justice questions, reinforcing KCU's commitment to academic excellence and exposure to global legal conversations.",
    ],
  },
  {
    date: "25 May 2026",
    category: "Student Financing",
    title: "Call for Student Loan Applications for the Academic Year 2026/27",
    excerpt:
      "Prospective and continuing students were invited to apply for higher education student loans through the Ministry of Education and Sports and HESFB.",
    href: "https://kcu.ac.ug/call-for-students-loan-applications-for-the-academic-year-2026-27/",
    story: [
      "King Ceasor University informed prospective and continuing students that the Ministry of Education and Sports, through the Higher Education Students Financing Board, announced applications for the Students' Loan Scheme for the 2026/2027 academic year.",
      "KCU is among the approved higher education institutions participating in the scheme, giving eligible Ugandan students an opportunity to seek financial support for accredited programmes.",
      "The university encouraged interested applicants to prepare their requirements early and submit applications through the official HESFB application portal.",
      "Applications close on 17 July 2026 at 11:59 PM, so students are advised to complete the process ahead of the deadline.",
      "Students who need more information about KCU programmes and admissions can contact the university through its official admissions channels.",
    ],
  },
  {
    date: "25 May 2026",
    category: "International",
    title: "KCU Participates in the Erasmus Exchange Programme",
    excerpt:
      "Staff from the School of Law and Management Sciences took part in an Erasmus teaching mobility exchange at Powislanski University in Poland.",
    href: "https://kcu.ac.ug/kcu-participates-in-the-erasmus-exchange-programme/",
    story: [
      "Staff from the School of Law and Management Sciences, Department of Management Sciences, participated in the Erasmus Teaching Staff Mobility Exchange Programme at Powislanski University from 20 to 24 May 2026.",
      "Dr. Richard Wemesa and Mr. Ivan Bakaki taught undergraduate students from different countries, presented research papers and engaged with international scholars.",
      "Dr. Wemesa presented research on innovation and prosperity in Uganda's business sector, while Mr. Bakaki presented work on the impact of ICT on environmental performance in Kampala City.",
      "The exchange strengthened KCU's international academic collaboration, research visibility and knowledge-sharing networks.",
      "The programme reflects KCU's wider commitment to building global academic partnerships that benefit both staff and students.",
    ],
  },
  {
    date: "20 May 2026",
    category: "Student Financing",
    title: "King Ceasor University Signs MOU with HESFB to Expand Access to Student Financing",
    excerpt:
      "KCU signed an MoU with the Higher Education Students' Financing Board to improve access to affordable education financing.",
    href: "https://kcu.ac.ug/king-ceasor-university-signs-mou-with-hesfs-to-expand-access-to-student-financing/",
    story: [
      "King Ceasor University signed a Memorandum of Understanding with the Higher Education Students' Financing Board to expand access to affordable higher education financing.",
      "The signing ceremony was held on 20 May 2026 at the HESFB offices in Lourdel Towers, Kampala.",
      "CPA Michael O. Wanyama, Commissioner, signed on behalf of the Ministry, representing the Permanent Secretary. Dr. Charity Basaza Mulenga, Vice Chancellor, signed on behalf of King Ceasor University.",
      "Through the partnership, eligible students will be able to access government-supported loans that cover tuition and functional fees in accredited programmes aligned with national development priorities.",
      "The arrangement also includes a post-graduation grace period before repayment begins, supporting graduates as they transition into employment.",
    ],
  },
  {
    date: "20 May 2026",
    category: "Student Life",
    title: "Guild Leadership Swearing-In Ceremony Held at King Ceasor University",
    excerpt:
      "The university held the swearing-in ceremony for newly elected guild leaders and launched the Guild Chronicles Magazine.",
    href: "https://kcu.ac.ug/guild-leadership-swearing-in-ceremony-held-at-king-ceasor-university/",
    story: [
      "King Ceasor University held the swearing-in ceremony for newly elected guild leaders on 15 May 2026 at the KCU Rooftop.",
      "The ceremony brought together students, university management, staff and outgoing student leaders to mark a new chapter in student leadership.",
      "The Chairperson of the Electoral Commission, Mr. Ariho, congratulated the newly elected leaders and urged them to represent students with diligence, responsibility and integrity.",
      "Outgoing Guild President Mr. Ainebyona Adonia reflected on his administration's achievements and challenges, encouraged the incoming leaders to remain resilient, and called for stronger communication, student associations, clubs, research and innovation.",
      "The event also launched the Guild Chronicles Magazine. Guild President-Elect Mr. Muhoozi Daniel pledged humble and committed leadership, while Vice Chancellor Dr. Charity Basaza Mulenga encouraged student leaders to listen to students and work constructively with university management.",
    ],
  },
  {
    category: "Research",
    date: "14 May 2026",
    title: "KCU Showcases \"Aqua Clean\" Innovation at the 3rd Oil & Gas Skills Expo 2026",
    excerpt:
      "The Department of Petroleum Geoscience showcased Aqua Clean at Makerere University during the 3rd Oil & Gas Skills Expo 2026.",
    href: "https://kcu.ac.ug/kcu-department-of-petroleum-geoscience-showcases-aqua-clean-innovation-at-the-3rd-oil-gas-skills-expo-2026/",
    story: [
      "The Department of Petroleum Geoscience at King Ceasor University participated in Day One of the 3rd Oil & Gas Skills Expo 2026 at Makerere University.",
      "The expo was held under the theme, \"From Oil and Gas to the Wider Economy: Transferable Skills Driving Sustainable Growth.\"",
      "KCU showcased Aqua Clean, an innovation that reflects the university's commitment to research, sustainability and practical solutions for Uganda's evolving energy sector.",
      "The event gathered government leaders, academia, industry experts and private sector stakeholders to discuss workforce readiness, strategic research, innovation, accreditation and employment opportunities in the petroleum industry.",
      "Speakers emphasized the need for transferable skills, structured training and certification. KCU's participation highlighted its role in preparing students and professionals for the future of Uganda's energy sector.",
    ],
  },
  {
    date: "10 May 2026",
    category: "Community",
    title: "KCU Conducts Community Outreach at Kigo Prisons",
    excerpt:
      "The School of Law and Management Sciences carried out outreach at Kigo Prisons, supporting inmate welfare, legal awareness and community partnership.",
    href: "https://kcu.ac.ug/king-ceasor-university-conducts-community-outreach-at-kigo-prisons/",
    story: [
      "The KCU School of Law and Management Sciences carried out a community outreach initiative at Kigo Prisons to support inmate welfare, promote legal awareness and strengthen community partnerships.",
      "During the outreach, the university donated essential items to both the male and female prison sections, reflecting KCU's commitment to service and social responsibility.",
      "The team also conducted an interactive legal question-and-answer session with inmates, many of whom sought legal advice and assistance related to their case files.",
      "A tree-planting ceremony was held to mark the occasion and symbolize the growing partnership between King Ceasor University and Kigo Prisons.",
      "The outreach drew attention to the challenges faced by women and children in prison environments and reaffirmed the university's commitment to using education, leadership and community engagement for positive social impact.",
    ],
  },
  {
    date: "05 May 2026",
    category: "Energy",
    title: "Minister of Energy Hosts KCU Geoscience Department",
    excerpt:
      "The Petroleum Geoscience Department met the Minister of Energy and Mineral Development to discuss Uganda's oil, gas and mining sectors.",
    href: "https://kcu.ac.ug/petroleum-geoscience-department-pays-courtesy-call-to-minister-of-energy-and-mineral-development/",
    story: [
      "The Petroleum Geoscience Department paid a courtesy call to the Minister of Energy and Mineral Development, Ruth Nankabirwa, to discuss Uganda's oil, gas and mining sectors.",
      "The meeting provided a forum to share updates on current activities, review sector progress and identify challenges and emerging opportunities.",
      "Discussions emphasized the importance of geoscience in informed decision-making, sustainable resource management and value addition within the extractives industry.",
      "Both sides highlighted the value of continued collaboration between government institutions and technical departments.",
      "The engagement reflected a shared commitment to responsible natural resource development that supports Uganda's socio-economic growth.",
    ],
  },
  {
    date: "28 April 2026",
    category: "Student Life",
    title: "KCU-CMF Chapter Hosts Inter-University Worship Experience",
    excerpt:
      "The KCU-CMF Chapter brought together students from several universities for a worship experience at the university rooftop.",
    href: "https://kcu.ac.ug/kcu-cmf-chapter-hosts-inter-university-worship-experience/",
    story: [
      "The KCU-CMF Chapter hosted an Inter-University Worship Experience on Saturday, 25 April 2026, at the university rooftop.",
      "Held under the theme Psalms 145:18, the gathering brought together students from several higher education institutions for worship, fellowship and spiritual reflection.",
      "Participating institutions included IUIU, Makerere University, Kampala International University, TEAM University, JEPH International University, Uganda Christian University, UICT, Mengo Health Training College and King Ceasor University.",
      "Dr. Mugaba Proscovia, a pediatric and fetal cardiologist, served as guest preacher and encouraged students to deepen their spiritual lives while pursuing academic and personal excellence.",
      "The event created space for worship, prayer, reflection and inter-university connection, reflecting the KCU-CMF Chapter's commitment to spiritual growth and holistic student development.",
    ],
  },
];

function NewsletterStoryModal({ article, onClose }: { article: NewsletterArticle | null; onClose: () => void }) {
  useEffect(() => {
    if (!article) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [article, onClose]);

  return (
    <AnimatePresence>
      {article && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/65 px-4 py-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.article
            role="dialog"
            aria-modal="true"
            aria-labelledby="newsletter-story-title"
            className="relative max-h-[calc(100vh-3rem)] w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl shadow-slate-950/30"
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 18 }}
            transition={{ duration: 0.2 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="max-h-[calc(100vh-3rem)] overflow-y-auto">
              <div className="sticky top-0 z-10 border-b border-slate-100 bg-white/95 px-5 py-4 backdrop-blur sm:px-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-[#FFC66B]/25 px-3 py-1 text-[10px] font-black uppercase tracking-wide text-[#0B6232]">
                        {article.category}
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">{article.date}</span>
                    </div>
                    <h2 id="newsletter-story-title" className="mt-3 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">
                      {article.title}
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={onClose}
                    className="grid size-10 shrink-0 place-items-center rounded-xl border border-slate-200 text-slate-500 transition hover:border-[#0B6232]/30 hover:bg-[#0B6232]/5 hover:text-[#0B6232]"
                    aria-label="Close story"
                  >
                    <X className="size-4" />
                  </button>
                </div>
              </div>

              <div className="px-5 py-6 sm:px-7 sm:py-8">
                {article.image && (
                  <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-2xl bg-slate-100">
                    <Image
                      src={article.image}
                      alt={article.imageAlt ?? article.title}
                      fill
                      sizes="(min-width: 768px) 720px, calc(100vw - 40px)"
                      className="object-cover"
                    />
                  </div>
                )}
                {article.highlights?.length ? (
                  <div className="mb-6 grid gap-3 sm:grid-cols-3">
                    {article.highlights.map((highlight) => (
                      <div key={`${highlight.label}-${highlight.value}`} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#0B6232]">{highlight.label}</p>
                        <p className="mt-2 text-sm font-black leading-5 text-slate-900">{highlight.value}</p>
                      </div>
                    ))}
                  </div>
                ) : null}
                <p className="border-l-4 border-[#FFC66B] bg-slate-50 py-3 pl-4 pr-3 text-sm font-semibold leading-7 text-slate-700 sm:text-base">
                  {article.excerpt}
                </p>
                <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                  {article.story.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {article.gallery?.length ? (
                  <div className="mt-7 grid gap-3 sm:grid-cols-3">
                    {article.gallery.map((item) => (
                      <div key={item.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          sizes="(min-width: 768px) 220px, calc(100vw - 40px)"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                ) : null}
                <div className="mt-8 flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-black text-slate-600 transition hover:border-[#0B6232]/30 hover:bg-slate-50 hover:text-[#0B6232]"
                  >
                    Close Story
                  </button>
                  {article.href && (
                    <Link
                      href={article.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-xl bg-[#0B6232] px-5 py-3 text-sm font-black text-white transition hover:bg-[#084a26]"
                    >
                      Open Original <ExternalLink className="ml-2 size-4" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function NewsletterPage() {
  const [selectedArticle, setSelectedArticle] = useState<NewsletterArticle | null>(null);
  const featuredArticle = newsletterArticles[0];
  const remainingArticles = newsletterArticles.slice(1);

  return (
    <main className="min-h-screen bg-white pt-16 sm:pt-20 lg:pt-[8.5rem]">
      <div className="border-b border-slate-100 bg-[#FFFFFF]">
        <div className="mx-auto flex max-w-[1440px] items-center gap-2 px-4 py-3 text-xs text-slate-500 sm:px-6 lg:px-8">
          <Link href="/" className="hover:text-[#0B6232]">Home</Link>
          <ChevronRight className="size-3.5" />
          <Link href="/about" className="hover:text-[#0B6232]">About Us</Link>
          <ChevronRight className="size-3.5" />
          <span className="font-semibold text-[#0B6232]">News Letter</span>
        </div>
      </div>

      <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1800&q=80')" }} />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-transparent" />
        <div className="absolute -bottom-20 right-8 hidden size-72 rounded-full border border-white/10 lg:block" />
        <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-[#FFC66B] backdrop-blur">News &amp; Updates</p>
            <h1 className="mt-5 max-w-3xl font-serif text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
              <span className="block text-[#FFC66B]">News</span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
              Stay informed. Stay inspired. The latest from King Ceasor University.
            </p>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/10 p-5 text-white shadow-2xl backdrop-blur">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FFC66B]">Newsroom</p>
            <p className="mt-2 text-4xl font-black">{newsletterArticles.length}</p>
            <p className="text-xs font-semibold text-white/70">Published updates</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50/70 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1440px]">
          <article className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-2xl shadow-slate-900/5">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
              <div className="bg-[#0B6232] p-8 text-white sm:p-10">
                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#FFC66B]">Featured Update</p>
                <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">{featuredArticle.title}</h2>
                <p className="mt-4 text-sm leading-7 text-white/80 sm:text-base">{featuredArticle.excerpt}</p>
                <button
                  type="button"
                  onClick={() => setSelectedArticle(featuredArticle)}
                  className="mt-7 inline-flex items-center rounded-xl bg-[#FFC66B] px-5 py-3 text-sm font-black text-[#0B6232] transition hover:translate-x-1"
                >
                  Read More <ArrowRight className="ml-2 size-4" />
                </button>
              </div>
              <div className="p-8 sm:p-10">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#FFC66B]/25 px-3 py-1 text-xs font-black text-[#0B6232]">{featuredArticle.category}</span>
                  <span className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">{featuredArticle.date}</span>
                </div>
                {featuredArticle.image && (
                  <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl bg-slate-100">
                    <Image
                      src={featuredArticle.image}
                      alt={featuredArticle.imageAlt ?? featuredArticle.title}
                      fill
                      sizes="(min-width: 1024px) 58vw, calc(100vw - 64px)"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                )}
                {featuredArticle.highlights?.length ? (
                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {featuredArticle.highlights.map((highlight) => (
                      <div key={`${highlight.label}-${highlight.value}`} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#0B6232]">{highlight.label}</p>
                        <p className="mt-2 text-sm font-black leading-5 text-slate-900">{highlight.value}</p>
                      </div>
                    ))}
                  </div>
                ) : null}
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {newsletterArticles.slice(0, 3).map((article, index) => (
                    <button
                      key={`${article.date}-${article.title}`}
                      type="button"
                      onClick={() => setSelectedArticle(article)}
                      className="rounded-2xl border border-slate-100 bg-slate-50 p-5 text-left transition hover:border-[#0B6232]/25 hover:bg-white hover:shadow-sm"
                    >
                      <p className="text-3xl font-black text-[#0B6232]">{String(index + 1).padStart(2, "0")}</p>
                      <p className="mt-2 text-xs font-black uppercase tracking-wide text-slate-500">{article.category}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {remainingArticles.map((article, index) => (
              <article key={`${article.date}-${article.title}`} className="group flex min-h-[280px] flex-col justify-between overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-900/5 transition hover:-translate-y-1 hover:border-[#0B6232]/25 hover:shadow-2xl hover:shadow-slate-900/10">
                <div className="h-1.5 bg-gradient-to-r from-[#0B6232] via-[#FFC66B] to-[#0B6232]" />
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid size-14 place-items-center rounded-2xl bg-[#0B6232] text-sm font-black text-[#FFC66B] shadow-lg shadow-[#0B6232]/20">
                      {String(index + 2).padStart(2, "0")}
                    </div>
                    <span className="rounded-full bg-[#FFC66B]/20 px-3 py-1 text-[10px] font-black uppercase tracking-wide text-[#0B6232]">
                      {article.category}
                    </span>
                  </div>
                  <p className="mt-5 text-xs font-black uppercase tracking-[0.16em] text-slate-500">{article.date}</p>
                  <h2 className="mt-2 text-xl font-black leading-tight text-slate-950">{article.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{article.excerpt}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedArticle(article)}
                  className="mx-6 mb-6 inline-flex w-fit items-center text-sm font-black text-[#0B6232] transition group-hover:text-slate-950"
                >
                  Read More <ArrowRight className="ml-2 size-4 transition group-hover:translate-x-1" />
                </button>
              </article>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-center gap-3 text-sm font-black text-slate-500">
            <span className="rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">Previous</span>
            <span className="grid size-10 place-items-center rounded-full bg-[#0B6232] text-white shadow-lg shadow-[#0B6232]/20">1</span>
            <span className="rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">Next</span>
          </div>
        </div>
      </section>

      <NewsletterStoryModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
    </main>
  );
}
