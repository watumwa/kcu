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
      { label: "Apply Now", href: "https://apply.kcu.ac.ug/" },
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
      { label: "ERP Portal", href: "https://academia.kcu.ac.ug/?_gl=1*1fzvqwx*_ga*NDE4NjYyNDA1LjE3NzkyMjYzOTY.*_ga_5SQ5XXJWGB*czE3NzkzNDUxMjkkbzMkZzAkdDE3NzkzNDUxMjkkajYwJGwwJGgw" },
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
  {
    badge: "Health Sciences",
    school: "School of Medicine and Health Sciences",
    title: "Learn with Purpose",
    subtitle: "Prepare for service through practical training, guided study and a strong health sciences foundation.",
    cta: "View Programmes",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1800&q=85",
    programmes: [
      "Health sciences programmes",
      "Clinical learning pathways",
      "Student support and mentoring",
      "Community-focused training",
    ],
  },
  {
    badge: "Business and Leadership",
    school: "School of Business and Management",
    title: "Build Professional Confidence",
    subtitle: "Develop the management, enterprise and leadership skills needed for modern organisations.",
    cta: "Explore Business",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=85",
    programmes: [
      "Business and management studies",
      "Leadership development",
      "Enterprise and innovation",
      "Career-focused learning",
    ],
  },
  {
    badge: "Computing and Innovation",
    school: "School of Computing and Applied Sciences",
    title: "Shape Tomorrow with Technology",
    subtitle: "Study computing, applied sciences and digital skills for a fast-changing professional world.",
    cta: "Discover Computing",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=85",
    programmes: [
      "Computing and applied sciences",
      "Digital systems and innovation",
      "Technology-driven learning",
      "Practical project experience",
    ],
  },
  {
    badge: "Student Experience",
    school: "Campus Life at KCU",
    title: "A Supportive University Community",
    subtitle: "Find guidance, friendships, activities and learning resources that help students thrive.",
    cta: "Explore Student Life",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=85",
    programmes: [
      "Student leadership",
      "Clubs and campus activities",
      "Learning resources",
      "Student support services",
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
