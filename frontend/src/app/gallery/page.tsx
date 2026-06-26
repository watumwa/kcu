import Image from "next/image";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const galleryItems = [
  {
    title: "Health Sciences Field Learning in Mukono",
    description: "KCU health sciences students and their hosts gather at Nakifuma Health Centre III during a practical field learning visit.",
    image: "/images/health-sciences/mukono-field-learning-2026/nakifuma-health-centre-team.webp",
    frameClassName: "aspect-[4/3]",
    imageClassName: "object-cover object-center",
  },
  {
    title: "Community Health Engagement",
    description: "Students engage with health facility staff and community representatives as part of their learning experience in Mukono District.",
    image: "/images/health-sciences/mukono-field-learning-2026/health-facility-community-engagement.webp",
    frameClassName: "aspect-[4/3]",
    imageClassName: "object-cover object-center",
  },
  {
    title: "Health Records Learning Session",
    description: "Health sciences students review facility records and documentation with staff during the field visit.",
    image: "/images/health-sciences/mukono-field-learning-2026/health-records-learning-session.webp",
    frameClassName: "aspect-[4/3]",
    imageClassName: "object-cover object-center",
  },
  {
    title: "Mukono Health Infrastructure Visit",
    description: "The KCU team visits the Government of Uganda project for the renovation of Mukono District health offices.",
    image: "/images/health-sciences/mukono-field-learning-2026/mukono-health-infrastructure-visit.webp",
    frameClassName: "aspect-[4/3]",
    imageClassName: "object-cover object-center",
  },
  {
    title: "Practical Community Health Learning",
    description: "A student takes part in a supervised practical activity during the community health field experience.",
    image: "/images/health-sciences/mukono-field-learning-2026/community-health-practical-learning.webp",
    frameClassName: "aspect-[4/3]",
    imageClassName: "object-cover object-center",
  },
  {
    title: "AUUS Sports Leadership Forum",
    description: "University sports leaders gather at MUST for the AUUS engagement on sports leadership and excellence.",
    image: "/images/student-activity/auus-sports-leadership-2026/auus-sports-leadership-forum-group.jpeg",
    frameClassName: "aspect-[4/3]",
    imageClassName: "object-cover object-center",
  },
  {
    title: "KCU Representatives at MUST",
    description: "KCU was represented by Sports Tutor Mr. Katabazi Aziz and Guild Minister of Sports Muhoozi Nasseem.",
    image: "/images/student-activity/auus-sports-leadership-2026/kcu-representatives-auus-forum.jpeg",
    frameClassName: "aspect-[4/3]",
    imageClassName: "object-cover object-center",
  },
  {
    title: "Career Guidance at St. Dennis",
    description: "KCU representatives guide Advanced Level students during the Day of the African Child outreach in Ggaba.",
    image: "/images/outreach/st-denis-2026/career-guidance-speaker.webp",
    frameClassName: "aspect-[4/3]",
    imageClassName: "object-cover object-center",
  },
  {
    title: "Day of the African Child Outreach",
    description: "Students gather for a career guidance session focused on higher education choices and future planning.",
    image: "/images/outreach/st-denis-2026/classroom-career-session.webp",
    frameClassName: "aspect-[4/3]",
    imageClassName: "object-cover object-center",
  },
  {
    title: "Student Participation",
    description: "A learner participates during the interactive question-and-answer session with the university team.",
    image: "/images/outreach/st-denis-2026/student-participation.webp",
    frameClassName: "aspect-[4/3]",
    imageClassName: "object-cover object-center",
  },
  {
    title: "Donation Drive Support",
    description: "KCU supports school wellbeing through hygiene and sanitation supplies for learners.",
    image: "/images/outreach/st-denis-2026/donation-drive-supplies.webp",
    frameClassName: "aspect-[4/3]",
    imageClassName: "object-cover object-center",
  },
  {
    title: "Community Outreach Team",
    description: "King Ceasor University and St. Dennis representatives mark a successful school outreach engagement.",
    image: "/images/outreach/st-denis-2026/outreach-team-st-dennis.webp",
    frameClassName: "aspect-[4/3]",
    imageClassName: "object-cover object-center",
  },
  {
    title: "KCU Graduates at Campus",
    description: "Graduates gathered outside King Ceasor University, celebrating academic achievement and campus pride.",
    image: "/images/kcu-2026/graduates-welcome-group.webp",
    frameClassName: "aspect-[4/3]",
    imageClassName: "object-cover object-center",
  },
  {
    title: "Best of the Best",
    description: "KCU graduates marking a milestone moment in front of the university welcome signage.",
    image: "/images/kcu-2026/graduates-best-of-best.webp",
    frameClassName: "aspect-[4/3]",
    imageClassName: "object-cover object-center",
  },
  {
    title: "Graduation Celebration",
    description: "Graduands share a joyful moment outside the King Ceasor University library.",
    image: "/images/kcu-2026/graduates-library-celebration.webp",
    frameClassName: "aspect-[4/3]",
    imageClassName: "object-cover object-center",
  },
  {
    title: "Library Graduation Moment",
    description: "Graduates celebrate together outside the KCU library after a major academic milestone.",
    image: "/images/kcu-2026/graduates-library-awards.webp",
    frameClassName: "aspect-[4/3]",
    imageClassName: "object-cover object-center",
  },
  {
    title: "Graduation Portrait Group",
    description: "KCU graduands captured in a polished campus portrait with university signage.",
    image: "/images/kcu-2026/graduates-library-portrait.webp",
    frameClassName: "aspect-[4/3]",
    imageClassName: "object-cover object-center",
  },
  {
    title: "Graduate Portrait",
    description: "A confident KCU graduate captured in ceremonial regalia on campus.",
    image: "/images/kcu-2026/graduate-diploma-portrait.webp",
    frameClassName: "aspect-[4/3]",
    imageClassName: "object-cover object-top",
  },
  {
    title: "Graduates in Focus",
    description: "KCU graduates posed together in a bright, professional campus portrait.",
    image: "/images/kcu-2026/graduates-close-portrait.webp",
    frameClassName: "aspect-[4/3]",
    imageClassName: "object-cover object-top",
  },
  {
    title: "Science Laboratory Learning",
    description: "Students take part in a practical science session with modern laboratory equipment.",
    image: "/images/kcu-2026/lab-chemistry-students.webp",
    frameClassName: "aspect-[4/3]",
    imageClassName: "object-cover object-center",
  },
  {
    title: "Practical Demonstration",
    description: "KCU students learn through guided, hands-on laboratory demonstration.",
    image: "/images/kcu-2026/lab-chemistry-demonstration.webp",
    frameClassName: "aspect-[4/3]",
    imageClassName: "object-cover object-center",
  },
  {
    title: "Clinical Skills Training",
    description: "Health sciences students practice clinical care in a structured learning environment.",
    image: "/images/kcu-2026/clinical-skills-patient.webp",
    frameClassName: "aspect-[4/3]",
    imageClassName: "object-cover object-center",
  },
  {
    title: "Anatomy Learning Session",
    description: "Students build professional confidence through applied anatomy and health sciences training.",
    image: "/images/kcu-2026/anatomy-learning-group.webp",
    frameClassName: "aspect-[4/3]",
    imageClassName: "object-cover object-center",
  },
  {
    title: "Skills Practice",
    description: "A focused clinical skills moment from KCU's practical learning spaces.",
    image: "/images/kcu-2026/clinical-skills-practice.webp",
    frameClassName: "aspect-[4/3]",
    imageClassName: "object-cover object-center",
  },
  {
    title: "Library Collaboration",
    description: "Students collaborate on digital coursework in a supportive campus setting.",
    image: "/images/kcu-2026/student-laptop-collaboration.webp",
    frameClassName: "aspect-[4/3]",
    imageClassName: "object-cover object-center",
  },
  {
    title: "Group Study",
    description: "KCU students work together around shared study materials and digital resources.",
    image: "/images/kcu-2026/library-group-study.webp",
    frameClassName: "aspect-[4/3]",
    imageClassName: "object-cover object-center",
  },
  {
    title: "Library Support",
    description: "A collaborative library moment showing students receiving academic support.",
    image: "/images/kcu-2026/library-collaboration.webp",
    frameClassName: "aspect-[4/3]",
    imageClassName: "object-cover object-center",
  },
  {
    title: "Library Learning Circle",
    description: "Students collaborate on academic work in a focused library learning session.",
    image: "/images/kcu-2026/library-collaboration-portrait.webp",
    frameClassName: "aspect-[4/3]",
    imageClassName: "object-cover object-top",
  },
  {
    title: "Library Resources",
    description: "Students engage with library resources and reference material for their coursework.",
    image: "/images/kcu-2026/library-books-consultation.webp",
    frameClassName: "aspect-[4/3]",
    imageClassName: "object-cover object-center",
  },
  {
    title: "Research Shelves",
    description: "A student browses the KCU library shelves for learning and research material.",
    image: "/images/kcu-2026/library-shelves-student.webp",
    frameClassName: "aspect-[4/3]",
    imageClassName: "object-cover object-top",
  },
  {
    title: "Reading Together",
    description: "Students review learning material together in a quiet academic setting.",
    image: "/images/kcu-2026/library-student-reading.webp",
    frameClassName: "aspect-[4/3]",
    imageClassName: "object-cover object-center",
  },
  {
    title: "Campus Graduates",
    description: "Graduates pose proudly with diplomas and university regalia.",
    image: "/images/kcu-2026/graduates-campus-trio.webp",
    frameClassName: "aspect-[4/3]",
    imageClassName: "object-cover object-center",
  },
  {
    title: "Graduation Joy",
    description: "Graduands celebrate together at King Ceasor University.",
    image: "/images/kcu-2026/graduates-celebrating.webp",
    frameClassName: "aspect-[4/3]",
    imageClassName: "object-cover object-center",
  },
];

const galleryPageItems = galleryItems.slice(0, 16);

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-16 sm:pt-20 lg:pt-[8.5rem]">
        <section className="px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
          <div className="mx-auto max-w-[1180px]">
            <div className="mb-5 flex items-center justify-between gap-4">
              <h1 className="text-base font-black leading-none text-[#0B6232]">Latest Photos</h1>
              <p className="text-[10px] font-bold text-slate-400">
                Page <span className="mx-1 rounded-sm bg-[#0B6232] px-1.5 py-0.5 text-[#FFC66B]">1</span> of 4
              </p>
            </div>

            <div className="grid gap-x-5 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
              {galleryPageItems.map((item) => (
                <article key={item.title} className="min-w-0">
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className={item.imageClassName}
                    />
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-16 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
              <button className="h-8 w-fit bg-[#0B6232] px-7 text-[10px] font-bold text-[#FFC66B] shadow-sm transition hover:bg-[#094f2a]">
                Previous
              </button>
              <div className="flex items-center justify-center gap-3">
                {[1, 2, 3, 4].map((page) => (
                  <button
                    key={page}
                    className={`grid size-8 place-items-center text-[10px] font-bold transition ${
                      page === 1 ? "bg-[#0B6232] text-[#FFC66B]" : "bg-slate-100 text-slate-300 hover:bg-[#FFC66B]/25 hover:text-[#0B6232]"
                    }`}
                    aria-current={page === 1 ? "page" : undefined}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button className="ml-auto h-8 w-fit bg-[#0B6232] px-7 text-[10px] font-bold text-[#FFC66B] shadow-sm transition hover:bg-[#094f2a]">
                Next Page
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
