import Image from "next/image";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const galleryItems = [
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

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-16 sm:pt-20 lg:pt-[8.5rem]">
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-[1440px] lg:pr-40">
            <div className="mb-8 sm:mb-10">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#0B6232]">Gallery</p>
              <h3 className="mt-2 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">Review Special Moments</h3>
            </div>

            <div className="grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {galleryItems.map((item) => (
                <article key={item.title} className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm shadow-slate-900/5">
                  <div className={`relative overflow-hidden bg-slate-100 ${item.frameClassName}`}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className={item.imageClassName}
                    />
                  </div>
                  <div className="p-4 sm:p-5">
                    <h2 className="text-[15px] font-black leading-snug text-slate-950 sm:text-base">{item.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
