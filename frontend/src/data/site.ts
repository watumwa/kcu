export type NavItem = {
  label: string;
  href: string;
  description: string;
  children: {
    label: string;
    href: string;
    children?: { label: string; href: string }[];
  }[];
};

export type HeroSlide = {
  badge: string;
  school: string;
  title: string;
  subtitle: string;
  cta: string;
  image: string;
  programmes: string[];
};

export const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    description: "Return to the King Ceasor University homepage.",
    children: [],
  },
  {
    label: "About Us",
    href: "/about",
    description: "Learn about King Ceasor University's identity, mission, values and partnerships.",
    children: [
      { label: "About KCU", href: "/about" },
      { label: "Mission", href: "/about/mission" },
      { label: "Core Values", href: "/about/core-values" },
      { label: "Governance", href: "/about/governance" },
      { label: "Collaborations & Partnerships", href: "/about/collaborations-partnerships" },
      { label: "News Letter", href: "/about/newsletter" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    description: "Application guidance, fees structure and admission requirements.",
    children: [
      { label: "Apply Now", href: "/admissions/apply-now" },
      { label: "Fees Structure", href: "/admissions/fees-structure" },
      { label: "Admission Requirements", href: "/admissions/admission-requirements" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    description: "Explore schools, courses, academic systems and online learning.",
    children: [
      { label: "Schools", href: "/academics/schools" },
      {
        label: "Courses",
        href: "/academics/courses",
        children: [
          { label: "Undergraduate", href: "/academics/courses/undergraduate" },
          { label: "Diploma", href: "/academics/courses/diploma" },
          { label: "Short Courses", href: "/academics/courses/short-courses" },
        ],
      },
      { label: "Academic ERP", href: "/academics/academic-erp" },
      { label: "E-Learning", href: "/academics/elearning" },
    ],
  },
  {
    label: "Student",
    href: "/student",
    description: "Student leadership, campus life and dean of students services.",
    children: [
      { label: "Guild", href: "/student/guild" },
      { label: "Campus Life", href: "/student/campus-life" },
      { label: "Dean of Students", href: "/student/dean-of-students" },
    ],
  },
  {
    label: "Library",
    href: "/library",
    description: "Library catalogue, frequently asked questions and opening hours.",
    children: [
      { label: "Catalogue", href: "/library/catalogue" },
      { label: "FAQs", href: "/library/faqs" },
      { label: "Opening Hours", href: "/library/opening-hours" },
    ],
  },
];

export const heroSlides: HeroSlide[] = [
  {
    badge: "May Intake Now Open",
    school: "School of Tourism and Hospitality",
    title: "Masters Programmes – May Intake",
    subtitle: "Build a career-ready future through industry-focused teaching, practical learning and professional mentorship.",
    cta: "Register Here",
    image:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1800&q=85",
    programmes: [
      "Master in Hospitality Business Management",
      "Bachelor of Tourism and Hospitality Management",
      "Diploma in Hotel and Restaurant Management",
      "Professional short courses in hospitality operations",
    ],
  },
  {
    badge: "Featured Postgraduate Programmes",
    school: "Institute of Mathematical Sciences",
    title: "Data, Finance and Applied Sciences",
    subtitle: "Study programmes designed for analytics, research, risk, technology and modern decision-making careers.",
    cta: "Explore Programmes",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1800&q=85",
    programmes: [
      "Master of Science in Data Science and Analytics",
      "Master of Science in Statistical Science",
      "Master of Science in Biomathematics",
      "Master of Science in Mathematical Finance and Risk Analytics",
    ],
  },
  {
    badge: "Admissions Office",
    school: "King Ceasor University",
    title: "Apply for the Next Academic Intake",
    subtitle: "Join a university environment shaped around innovation, excellence, student support and global outlook.",
    cta: "Apply Online",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1800&q=85",
    programmes: [
      "Undergraduate programmes across schools and faculties",
      "Postgraduate studies for professionals and researchers",
      "Flexible learning pathways for working students",
      "International student support and guidance",
    ],
  },
];

export const quickLinks = [
  {
    title: "Admissions",
    text: "Start your application and follow clear admissions steps for the next intake.",
    href: "/admissions",
  },
  {
    title: "Programmes",
    text: "Browse undergraduate, postgraduate, diploma and professional courses.",
    href: "/academics/courses",
  },
  {
    title: "Student Life",
    text: "Explore support services, clubs, leadership, learning resources and campus life.",
    href: "/student/campus-life",
  },
  {
    title: "News & Events",
    text: "Follow university announcements, events, research highlights and student stories.",
    href: "/news",
  },
];

export const schools = [
  "School of Medicine and Health Sciences",
  "School of Business and Management",
  "School of Computing and Applied Sciences",
  "School of Law and Governance",
  "School of Tourism and Hospitality",
  "Institute of Mathematical Sciences",
];

export const newsItems = [
  {
    category: "Admissions",
    title: "Applications open for the next academic intake",
    date: "May 2026",
    text: "Prospective students can now begin the online application process for available programmes.",
  },
  {
    category: "Research",
    title: "Innovation and research partnerships expanded",
    date: "May 2026",
    text: "The university continues strengthening collaboration with local and international partners.",
  },
  {
    category: "Student Life",
    title: "Campus activities and student leadership programmes",
    date: "May 2026",
    text: "Students are encouraged to participate in clubs, leadership, career and support activities.",
  },
];
