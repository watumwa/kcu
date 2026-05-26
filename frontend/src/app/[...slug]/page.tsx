import UnderConstruction from "@/components/common/UnderConstruction";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type AboutPageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: {
    title: string;
    text?: string;
    items?: string[];
  }[];
  cta?: {
    label: string;
    href: string;
  };
};

const aboutPages: Record<string, AboutPageContent> = {
  "about/governance": {
    eyebrow: "Governance",
    title: "University Governance",
    intro:
      "King Ceasor University is guided by governance and administration structures that support academic quality, effective management, student welfare, and institutional development.",
    sections: [
      {
        title: "University Council",
        text:
          "The University Council provides oversight for the governance, administration, and strategic direction of the University. The Council is chaired by Hon Dr. Chris Baryomunsi, with Assoc. Prof. Mary Muhenda serving as Vice Chairperson.",
        items: [
          "Finance, Planning & Development Committee: Mrs. Grace N. Gwaku",
          "Quality Assurance & Gender Committee: Prof. Josephat Byamugisha",
          "Audit & Risk Management Committee: Mr. Donald Nyakairu",
          "Student Welfare & Disciplinary Committee: Mr. Cyriaco Kabagambe",
          "Appointments Board: Dr. Kamba Fadhiru Pakoyo",
        ],
      },
      {
        title: "University Administration",
        text:
          "The University Administration manages day-to-day operations and service delivery across the institution, led by Dr. Charity Basaza Mulenga as Vice Chancellor and Dr. Byarugaba Bonaventura as Deputy Vice Chancellor.",
        items: [
          "Mrs. Pape Matama Bagonza: University Secretary",
          "Alfred Namoah Masikye: Academic Registrar",
          "Assoc. Prof. Annabella Habinka Ejiri: Director Quality Assurance",
          "Mrs. Sylivia Okwi Christine: Director Finance",
          "Fr. Dr. Lumala Aloysius Gonzagga: Dean of Students",
        ],
      },
      {
        title: "Institutional Direction",
        text:
          "KCU's governance supports its mission to provide holistic education through inventive teaching, learning, and research aimed at fostering socio-economic transformation.",
      },
    ],
    cta: {
      label: "Read About KCU",
      href: "/about",
    },
  },
  "about/collaborations-partnerships": {
    eyebrow: "Partnerships",
    title: "Collaborations & Partnerships",
    intro:
      "KCU strengthens learning, research, student support, and international exposure through collaborations with local, regional, and global partners.",
    sections: [
      {
        title: "Research Collaboration",
        text:
          "The University positions research as a driver of innovation and societal impact, encouraging partnerships that connect students and faculty with wider knowledge networks.",
        items: [
          "Interdisciplinary research across Medicine, Health & Life Sciences; Law & Management Sciences; and Science, Computing & Engineering.",
          "Collaborative work aimed at addressing local and global challenges.",
          "Research priorities aligned with innovation, discovery, and socio-economic transformation.",
        ],
      },
      {
        title: "Student Financing Partnerships",
        text:
          "KCU has signed an MOU with the Higher Education Students' Financing Scheme to expand access to government-backed higher education loans for eligible students.",
      },
      {
        title: "Exchange Opportunities",
        text:
          "KCU participates in exchange initiatives, including Erasmus-related opportunities, to broaden academic experience and connect the University community with international learning environments.",
      },
    ],
    cta: {
      label: "Apply Now",
      href: "https://apply.kcu.ac.ug/",
    },
  },
  "about/newsletter": {
    eyebrow: "Campus Updates",
    title: "News Letter",
    intro:
      "Follow recent highlights from King Ceasor University, including admissions notices, partnerships, student opportunities, events, and institutional milestones.",
    sections: [
      {
        title: "Latest News",
        items: [
          "Call for Students' Loan Applications for the Academic Year 2026/27.",
          "KCU participates in the Erasmus Exchange Programme.",
          "King Ceasor University signs an MOU with HESFB to expand access to student financing.",
          "King Ceasor University has been officially listed among approved institutions under the Government Students' Loan Scheme for the Academic Year 2026/2027.",
        ],
      },
      {
        title: "Events",
        items: [
          "PAU Career Guidance Session: May 6, 2026.",
          "Unmasking cyber threats: Revealing digital truth: April 24, 2026.",
          "Entrepreneurship Skills Public Lecture: March 11, 2026.",
        ],
      },
      {
        title: "KCU Community",
        text:
          "KCU shares announcements, opportunities, and campus stories through its news channels and social platforms to keep students, staff, alumni, and partners connected.",
      },
    ],
    cta: {
      label: "Visit KCU News",
      href: "https://kcu.ac.ug/",
    },
  },
};

const contentPages: Record<string, AboutPageContent> = {
  ...aboutPages,
  admissions: {
    eyebrow: "Admissions",
    title: "Admissions at KCU",
    intro:
      "King Ceasor University welcomes applicants from diverse academic, cultural, and professional backgrounds into programmes designed to prepare students for meaningful careers and service.",
    sections: [
      {
        title: "Applying to KCU",
        text:
          "KCU considers each applicant's academic achievements together with their personal experiences, with the goal of building a diverse and inclusive university community.",
        items: [
          "Applications are submitted through the online applicant portal.",
          "Prospective students can apply for undergraduate, diploma, certificate, and short course pathways.",
          "The University offers programmes across Medicine, Health & Life Sciences; Law & Management Sciences; and Science, Computing & Engineering.",
        ],
      },
      {
        title: "Scholarship Support",
        text:
          "Scholarships at KCU are provided through the King Ceasor Development Kingdom program for eligible undergraduate students who meet the minimum admission requirements.",
        items: [
          "Scholarships target students from underprivileged backgrounds.",
          "Awards are based on merit, personal achievement, and academic ability.",
          "The programme includes volunteering, outreach, mentoring, and personal development activities.",
        ],
      },
    ],
    cta: {
      label: "Apply Online",
      href: "https://apply.kcu.ac.ug/",
    },
  },
  "admissions/fees-structure": {
    eyebrow: "Admissions",
    title: "Fees Structure",
    intro:
      "KCU is committed to fair, transparent fee information, with detailed payment arrangements shared with admitted students through their admission documentation.",
    sections: [
      {
        title: "Fee Information",
        text:
          "Fees are approved by the University Council and may be reviewed from time to time. Tuition fees may differ by programme, reflecting the resources required to deliver each course of study.",
      },
      {
        title: "Student Responsibilities",
        items: [
          "Students must enroll for each successive semester or relevant part of the course within the required registration period.",
          "Students remain legally responsible for payment of tuition fees, whether or not they have a sponsor.",
          "Students who do not complete enrollment by the deadline may be withdrawn from their course.",
        ],
      },
      {
        title: "Common Fee Categories",
        items: [
          "Tuition fees",
          "Registration fees",
          "Examination fees",
          "Library fees",
          "ICT and identity card fees",
        ],
      },
    ],
    cta: {
      label: "Apply Online",
      href: "https://apply.kcu.ac.ug/",
    },
  },
  "admissions/admission-requirements": {
    eyebrow: "Admissions",
    title: "Admission Requirements",
    intro:
      "Admission requirements vary by programme, but KCU follows recognized university entry standards for undergraduate, diploma, certificate, and international applicants.",
    sections: [
      {
        title: "Undergraduate Entry",
        items: [
          "Uganda Certificate of Education (UCE) or equivalent with at least five passes.",
          "Uganda Advanced Certificate of Education (UACE) or equivalent with at least two principal passes.",
          "Diploma holders should normally have passed with at least a credit.",
        ],
      },
      {
        title: "Diploma Entry",
        items: [
          "UCE or equivalent with at least five passes.",
          "UACE or equivalent with at least one principal pass and two subsidiary passes.",
          "Programme-specific requirements may apply depending on the school and course.",
        ],
      },
      {
        title: "International Applicants",
        items: [
          "Applicants whose first language or medium of instruction is not English may be required to provide evidence of English language competence.",
          "UCE and UACE documents should be equated by UNEB where required.",
          "Diploma and certificate documents should be equated by the Uganda National Council for Higher Education where required.",
        ],
      },
    ],
    cta: {
      label: "Start Application",
      href: "https://apply.kcu.ac.ug/",
    },
  },
  academics: {
    eyebrow: "Academics",
    title: "Academics at KCU",
    intro:
      "KCU offers academic programmes designed to inspire creativity, innovation, critical thinking, and career readiness across health sciences, law, management, computing, engineering, and related fields.",
    sections: [
      {
        title: "Academic Schools",
        text:
          "The University offers programmes through three schools, each focused on training students for professional excellence and social impact.",
        items: [
          "School of Medicine, Health & Life Sciences",
          "School of Law & Management Sciences",
          "School of Science, Computing & Engineering",
        ],
      },
      {
        title: "Teaching and Learning",
        text:
          "KCU combines classroom learning, practical training, research, and professional exposure to help students develop the knowledge and skills required in a changing world.",
      },
      {
        title: "Online Learning",
        text:
          "KClass, the KCU e-learning platform, supports flexible online learning with student-centred lessons, resources, and opportunities to learn at your own pace.",
      },
    ],
    cta: {
      label: "Explore Courses",
      href: "/academics/courses",
    },
  },
  "academics/schools": {
    eyebrow: "Academics",
    title: "Schools at KCU",
    intro:
      "King Ceasor University's schools provide focused academic homes for students pursuing health, law, business, science, computing, engineering, agriculture, and energy-related pathways.",
    sections: [
      {
        title: "School of Medicine, Health & Life Sciences",
        text:
          "Founded in 2011, the school provides medical and healthcare education designed to prepare future healthcare professionals for an evolving health landscape.",
        items: [
          "Bachelor of Medicine and Bachelor of Surgery",
          "Bachelor of Nursing Sciences",
          "Bachelor of Medical Records & Health Informatics",
          "Diploma in Clinical Medicine & Community Health",
          "Diploma in Medical Laboratory Technology",
        ],
      },
      {
        title: "School of Law & Management Sciences",
        text:
          "The school trains students for legal, business, leadership, and management careers, combining professional knowledge with practical and enterprise-oriented skills.",
        items: [
          "Bachelor of Laws",
          "Bachelor of Business Administration",
          "Business specialisations including Accounting and Finance, Marketing Management, Banking and Insurance",
        ],
      },
      {
        title: "School of Science, Computing & Engineering",
        text:
          "The school comprises computing, Artificial Intelligence and Data Science, Agriculture, and Petroleum Geoscience departments, with training linked to technology, investigation, agriculture, and energy needs.",
        items: [
          "Bachelor of Computer Forensics & Criminal Investigation",
          "Bachelor of Oil, Gas & Energy Management",
          "Bachelor of Agriculture",
          "Higher Education Certificate pathways",
        ],
      },
    ],
    cta: {
      label: "View Courses",
      href: "/academics/courses",
    },
  },
  "academics/courses": {
    eyebrow: "Academics",
    title: "Courses and Programmes",
    intro:
      "KCU programmes are designed to ignite innovation, fuel student ambition, and build the skills needed to lead and excel in a rapidly changing world.",
    sections: [
      {
        title: "Accredited Programmes",
        items: [
          "Bachelor of Medicine & Bachelor of Surgery",
          "Bachelor of Nursing Sciences",
          "Bachelor of Medical Records & Health Informatics",
          "Bachelor of Agriculture",
          "Bachelor of Laws",
          "Bachelor of Business Administration",
          "Bachelor of Computer Forensics & Criminal Investigation",
          "Bachelor of Oil, Gas & Energy Management",
          "Diploma in Clinical Medicine & Community Health",
          "Diploma in Medical Laboratory Technology",
          "Higher Education Certificate pathways in Biological Sciences, Physical Sciences, and Humanities",
        ],
      },
      {
        title: "Programme Experience",
        text:
          "Students learn through a mix of lectures, practical sessions, guided discovery, research opportunities, and professional preparation aligned with the needs of society and industry.",
      },
    ],
    cta: {
      label: "Apply for a Programme",
      href: "https://apply.kcu.ac.ug/",
    },
  },
  "academics/courses/undergraduate": {
    eyebrow: "Courses",
    title: "Undergraduate Programmes",
    intro:
      "KCU undergraduate programmes build strong professional foundations across health, law, business, science, computing, agriculture, and energy-related disciplines.",
    sections: [
      {
        title: "Undergraduate Pathways",
        items: [
          "Bachelor of Medicine & Bachelor of Surgery",
          "Bachelor of Nursing Sciences",
          "Bachelor of Medical Records & Health Informatics",
          "Bachelor of Agriculture",
          "Bachelor of Laws",
          "Bachelor of Business Administration",
          "Bachelor of Computer Forensics & Criminal Investigation",
          "Bachelor of Oil, Gas & Energy Management",
        ],
      },
      {
        title: "Career-Focused Learning",
        text:
          "KCU undergraduate training emphasizes practical skill, professional conduct, innovation, and the ability to respond to local and global demands.",
      },
    ],
    cta: {
      label: "Apply Now",
      href: "https://apply.kcu.ac.ug/",
    },
  },
  "academics/courses/diploma": {
    eyebrow: "Courses",
    title: "Diploma Programmes",
    intro:
      "KCU diploma programmes offer practical professional preparation for students entering health and related service fields.",
    sections: [
      {
        title: "Available Diploma Pathways",
        items: [
          "Diploma in Clinical Medicine & Community Health",
          "Diploma in Medical Laboratory Technology",
        ],
      },
      {
        title: "Medical Laboratory Technology",
        text:
          "Medical Laboratory Technology prepares students to collect, process, and analyze medical specimens, supporting diagnosis and community health needs.",
      },
      {
        title: "Diploma Entry Requirements",
        items: [
          "UCE or equivalent with at least five passes.",
          "UACE or equivalent with at least one principal pass and two subsidiary passes.",
          "Programme-specific entry requirements may apply.",
        ],
      },
    ],
    cta: {
      label: "Apply Now",
      href: "https://apply.kcu.ac.ug/",
    },
  },
  "academics/courses/short-courses": {
    eyebrow: "Courses",
    title: "Certificates and Short Courses",
    intro:
      "KCU short courses and certificate pathways support learners who want focused skills, flexible study options, and progression into further academic or professional opportunities.",
    sections: [
      {
        title: "Short Course Areas",
        items: [
          "Language proficiency",
          "Digital marketing",
          "Computer applications",
          "Online learning through KClass",
        ],
      },
      {
        title: "Higher Education Certificate",
        text:
          "Higher Education Certificate pathways provide an opportunity for students who do not yet meet direct admission criteria, including students with foreign qualifications that require a bridging route into higher education.",
        items: [
          "Higher Education Certificate in Biological Sciences",
          "Higher Education Certificate in Physical Sciences",
          "Higher Education Certificate in Humanities",
        ],
      },
    ],
    cta: {
      label: "Explore KClass",
      href: "https://vclass.kcu.ac.ug/",
    },
  },
  student: {
    eyebrow: "Student Life",
    title: "Student Experience",
    intro:
      "Life at King Ceasor University is a vibrant blend of academic excellence, social engagement, personal growth, leadership, culture, recreation, and wellbeing.",
    sections: [
      {
        title: "Campus Life",
        text:
          "KCU provides academic and personal development opportunities through excellent facilities, faculty engagement, student organizations, and support services.",
        items: [
          "Student leadership and representation",
          "Clubs, associations, and co-curricular activities",
          "Arts, culture, recreation, and wellness",
          "Counselling, guidance, and student welfare support",
        ],
      },
      {
        title: "Student Support",
        text:
          "Students are encouraged to seek help when navigating academic, housing, wellbeing, and campus life matters. Support structures are available through the Dean of Students and the Student Guild.",
      },
    ],
    cta: {
      label: "Explore Campus Life",
      href: "/student/campus-life",
    },
  },
  "student/guild": {
    eyebrow: "Student Leadership",
    title: "Student Guild",
    intro:
      "The King Ceasor University Students Guild is the representative body of the student community, working to enhance the university experience for all students.",
    sections: [
      {
        title: "Who We Are",
        text:
          "The Guild is a vibrant and proactive organization whose student leaders advocate for student rights, organize engaging activities, and foster unity and inclusivity across the student body.",
      },
      {
        title: "Guild Mission",
        text:
          "The Guild serves as the voice of the student community, championing student interests and promoting academic excellence, personal growth, and wellbeing.",
      },
      {
        title: "Key Areas of Work",
        items: [
          "Advocacy and student representation",
          "Events, activities, and campus initiatives",
          "Student support and welfare",
          "Collaboration, engagement, leadership, and volunteering opportunities",
        ],
      },
    ],
    cta: {
      label: "View About KCU",
      href: "/about",
    },
  },
  "student/campus-life": {
    eyebrow: "Student Life",
    title: "Campus Life",
    intro:
      "KCU campus life combines academic focus with social engagement, culture, recreation, wellness, and opportunities for students to grow beyond the classroom.",
    sections: [
      {
        title: "Student Life",
        text:
          "Life at KCU is shaped by academic excellence, student leadership, social connection, and a commitment to helping each student fulfill their potential.",
      },
      {
        title: "Arts and Culture",
        text:
          "King Ceasor University places emphasis on art and culture as important parts of a comprehensive education and a vibrant campus community.",
      },
      {
        title: "Recreation and Wellness",
        text:
          "The University supports activities and services that promote physical, mental, and emotional wellbeing.",
      },
    ],
    cta: {
      label: "Apply to KCU",
      href: "https://apply.kcu.ac.ug/",
    },
  },
  "student/dean-of-students": {
    eyebrow: "Student Welfare",
    title: "Dean of Students",
    intro:
      "The Office of the Dean of Students supports student welfare, discipline, accommodation guidance, recreation, spirituality, counselling, and holistic development.",
    sections: [
      {
        title: "Office Leadership",
        text:
          "Fr. Dr. Lumala Aloysius Gonzagga serves as Dean of Students, leading a department entrusted with the welfare of all students.",
      },
      {
        title: "Student Welfare",
        items: [
          "Accommodation guidance and student welfare support",
          "Recreation and avenues for student engagement",
          "Spiritual nourishment and holistic development",
          "Psychosocial support through counselling and guidance",
          "Coordination and guidance of Student Guild activities",
          "Maintenance of student discipline and a secure campus environment",
        ],
      },
      {
        title: "Working With Students",
        text:
          "The department collaborates with medical services, security, and student leadership to create an environment that supports health, safety, and student success.",
      },
    ],
    cta: {
      label: "Student Guild",
      href: "/student/guild",
    },
  },
  library: {
    eyebrow: "Library",
    title: "KCU Library",
    intro:
      "King Ceasor University Library is a knowledge hub and one of the best study spaces on campus, supporting learning, research, and innovation.",
    sections: [
      {
        title: "Library Mission",
        text:
          "The Library embraces emerging technologies and best practices in the provision of exceptional library and information services.",
      },
      {
        title: "Library Vision",
        text:
          "An indispensable research, innovation and knowledge hub.",
      },
      {
        title: "Resources and Services",
        items: [
          "Physical and remote access to library resources and services",
          "E-resources lab with technology, internet access, and digital resources",
          "Expansive book collections for students, researchers, and faculty",
          "Research support, information literacy, circulation, and catalogue access",
        ],
      },
    ],
    cta: {
      label: "Library Catalogue",
      href: "https://catalogue.kcu.ac.ug/",
    },
  },
  "library/catalogue": {
    eyebrow: "Library",
    title: "Library Catalogue",
    intro:
      "The KCU Library catalogue helps students and staff discover books, research materials, and other learning resources available through the University Library.",
    sections: [
      {
        title: "Access the Catalogue",
        text:
          "Students can search the University Library catalogue online to locate resources that support coursework, research, and independent study.",
      },
      {
        title: "Using Library Resources",
        items: [
          "Create a library account at the library reception to access resources.",
          "Use the online catalogue to find available materials.",
          "Ask library staff for support with collections, research projects, and digital resources.",
        ],
      },
    ],
    cta: {
      label: "Open Catalogue",
      href: "https://catalogue.kcu.ac.ug/",
    },
  },
  "library/faqs": {
    eyebrow: "Library",
    title: "Library FAQs",
    intro:
      "Frequently asked questions about KCU Library access, e-resources, catalogue use, and online application support.",
    sections: [
      {
        title: "How do I enroll for library services?",
        text:
          "Visit the library reception to create an account and access library resources both on and off campus.",
      },
      {
        title: "How do I access e-resources?",
        items: [
          "Download the MyLoft app from Play Store or App Store.",
          "For computers, install the MyLoft extension in Google Chrome.",
          "Select Consortium of Uganda University Libraries, Uganda.",
          "Log in using credentials received from the library.",
        ],
      },
      {
        title: "How do I access the library catalogue?",
        text:
          "Visit the online Library Catalogue and search for the resources you need. Library staff can help if you need support.",
      },
    ],
    cta: {
      label: "Open Catalogue",
      href: "https://catalogue.kcu.ac.ug/",
    },
  },
  "library/opening-hours": {
    eyebrow: "Library",
    title: "Library Opening Hours",
    intro:
      "KCU Library provides extended weekday hours and Saturday access to support study, research, and academic preparation.",
    sections: [
      {
        title: "Opening Hours",
        items: [
          "Monday to Friday: 7:30 AM - 9:00 PM",
          "Saturday: 8:00 AM - 1:00 PM",
        ],
      },
      {
        title: "Library Conduct",
        items: [
          "Maximum silence should be observed in the library.",
          "Food, drinks, smoking, and disruptive phone use are not allowed.",
          "Reference books should be used within the library.",
          "Library furniture and resources should be handled responsibly.",
        ],
      },
    ],
    cta: {
      label: "Library Catalogue",
      href: "https://catalogue.kcu.ac.ug/",
    },
  },
};

const newsletterArticles = [
  {
    date: "25 May 2026",
    category: "Student Financing",
    title: "KCU Listed Under the Government Students' Loan Scheme",
    excerpt:
      "Eligible Ugandan students can apply for financial support through the Higher Education Students Financing Scheme for the Academic Year 2026/2027.",
    href: "https://kcu.ac.ug/",
  },
  {
    date: "20 May 2026",
    category: "Partnerships",
    title: "King Ceasor University Signs MOU with HESFB",
    excerpt:
      "KCU has signed an MOU with the Higher Education Students' Financing Scheme to expand access to government-backed higher education loans.",
    href: "https://kcu.ac.ug/",
  },
  {
    date: "May 2026",
    category: "International",
    title: "KCU Participates in the Erasmus Exchange Programme",
    excerpt:
      "The University continues to broaden academic exposure through exchange opportunities and international learning partnerships.",
    href: "https://kcu.ac.ug/",
  },
  {
    date: "06 May 2026",
    category: "Events",
    title: "PAU Career Guidance Session",
    excerpt:
      "A campus career guidance session connecting students with professional pathways, industry insight, and academic direction.",
    href: "https://kcu.ac.ug/",
  },
  {
    date: "24 Apr 2026",
    category: "Events",
    title: "Unmasking Cyber Threats: Revealing Digital Truth",
    excerpt:
      "A focused session on cyber threats, digital investigation, and the practical realities of safety in a connected world.",
    href: "https://kcu.ac.ug/",
  },
  {
    date: "11 Mar 2026",
    category: "Public Lecture",
    title: "Entrepreneurship Skills Public Lecture",
    excerpt:
      "A public lecture designed to strengthen entrepreneurial thinking, practical skills, and innovation among the KCU community.",
    href: "https://kcu.ac.ug/",
  },
  {
    date: "2026",
    category: "Admissions",
    title: "August Intake Now Open",
    excerpt:
      "Prospective students can apply for undergraduate, diploma, certificate, and short course programmes at King Ceasor University.",
    href: "https://apply.kcu.ac.ug/",
  },
  {
    date: "2026",
    category: "University News",
    title: "King Ceasor University Fully Chartered",
    excerpt:
      "KCU marks a major institutional milestone, opening a new chapter of academic autonomy, innovation, and global opportunity.",
    href: "https://kcu.ac.ug/",
  },
  {
    date: "2026",
    category: "Research",
    title: "Redefining the Limits of Research",
    excerpt:
      "KCU continues empowering innovation through teaching, learning, research, and partnerships with leading researchers.",
    href: "https://kcu.ac.ug/",
  },
];

function NewsletterPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
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
          <div className="absolute inset-0 bg-[#0B6232]/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B6232]/95 via-[#0B6232]/70 to-transparent" />
          <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#FFC66B]">News &amp; Updates</p>
              <h1 className="mt-3 max-w-3xl font-serif text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
                All KCU <span className="block text-[#FFC66B]">News</span>
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
                Stay informed. Stay inspired. The latest from King Ceasor University.
              </p>
            </div>
            <div className="inline-flex w-fit items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white">
              Scroll
              <span className="block h-8 w-px bg-[#FFC66B]" />
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {newsletterArticles.map((article) => (
                <article key={`${article.date}-${article.title}`} className="group flex min-h-[260px] flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:border-[#0B6232]/25 hover:shadow-lg">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div className="rounded-xl bg-[#0B6232] px-4 py-3 text-white">
                        <p className="text-xs font-black leading-tight text-[#FFC66B]">{article.date}</p>
                      </div>
                      <span className="rounded-full bg-[#FFC66B]/20 px-3 py-1 text-[10px] font-black uppercase tracking-wide text-[#0B6232]">
                        {article.category}
                      </span>
                    </div>
                    <h2 className="mt-6 text-xl font-black leading-tight text-slate-950">{article.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{article.excerpt}</p>
                  </div>
                  <Link href={article.href} className="mt-6 inline-flex items-center text-sm font-black text-[#0B6232] transition group-hover:text-slate-950">
                    Read Article <ArrowRight className="ml-2 size-4" />
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-12 flex items-center justify-center gap-3 text-sm font-black text-slate-500">
              <span className="rounded-full border border-slate-200 px-4 py-2">Previous</span>
              <span className="grid size-10 place-items-center rounded-full bg-[#0B6232] text-white">1</span>
              <span className="rounded-full border border-slate-200 px-4 py-2">Next</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function AboutContentPage({ page }: { page: AboutPageContent }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <div className="border-b border-slate-100 bg-[#FFFFFF]">
          <div className="mx-auto flex max-w-[1440px] items-center gap-2 px-4 py-3 text-xs text-slate-500 sm:px-6 lg:px-8">
            <Link href="/" className="hover:text-[#0B6232]">Home</Link>
            <ChevronRight className="size-3.5" />
            <Link href="/about" className="hover:text-[#0B6232]">About Us</Link>
            <ChevronRight className="size-3.5" />
            <span className="font-semibold text-[#0B6232]">{page.title}</span>
          </div>
        </div>

        <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1800&q=80')" }} />
          <div className="absolute inset-0 bg-[#0B6232]/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B6232]/90 via-[#0B6232]/60 to-transparent" />
          <div className="relative z-10 mx-auto max-w-[1440px]">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#FFC66B]">{page.eyebrow}</p>
            <h1 className="mt-3 max-w-3xl font-serif text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">{page.title}</h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">{page.intro}</p>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-[1120px] space-y-8">
            {page.sections.map((section) => (
              <article key={section.title} className="rounded-2xl border border-slate-100 bg-[#FFFFFF] p-6 shadow-sm sm:p-8">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0B6232]">King Ceasor University</p>
                <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">{section.title}</h2>
                {section.text && (
                  <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{section.text}</p>
                )}
                {section.items && (
                  <ul className="mt-5 grid gap-3">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600 sm:text-base">
                        <span className="mt-2 size-2 shrink-0 rounded-full bg-[#FFC66B]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}

            {page.cta && (
              <Button asChild className="h-12 rounded-xl bg-[#0B6232] px-6 font-black text-white hover:bg-[#0B6232]">
                <Link href={page.cta.href}>{page.cta.label} <ArrowRight className="ml-2 size-4" /></Link>
              </Button>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default async function CatchAllPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const currentPath = slug.join("/");
  const page = contentPages[currentPath];

  if (currentPath === "about/newsletter" || currentPath === "news") {
    return <NewsletterPage />;
  }

  if (page) {
    return <AboutContentPage page={page} />;
  }

  return (
    <>
      <Navbar />
      <UnderConstruction title="Page Under Construction" path="This page" />
      <Footer />
    </>
  );
}
