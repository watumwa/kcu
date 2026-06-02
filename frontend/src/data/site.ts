export type NavItem = {
  label: string;
  href: string;
  disableLink?: boolean;
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
      { label: "Mission | Vision | Core Values", href: "/about" },
      { label: "Governance", href: "/about/governance" },
      { label: "Collaborations & Partnerships", href: "/about/collaborations-partnerships" },
      { label: "News Letter", href: "/about/newsletter" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    disableLink: true,
    description: "Application guidance, fees structure and admission requirements.",
    children: [
      { label: "Apply Now", href: "https://apply.kcu.ac.ug/" },
      { label: "Fees Structure", href: "/admissions/fees-structure" },
      { label: "Admission Requirements", href: "/admissions/admission-requirements" },
    ],
  },
  {
    label: "Academics",
    href: "",
    disableLink: true,
    description: "Explore schools, courses, academic systems and online learning.",
    children: [
      { label: "Schools", href: "/academics/schools" },
      {
        label: "Courses",
        href: "/academics/courses",
        children: [
          { label: "Undergraduate", href: "/academics/courses/undergraduate" },
          { label: "Diploma", href: "/academics/courses/diploma" },
          { label: "Certificates", href: "/academics/courses/short-courses" },
        ],
      },
      { label: "Academia", href: "https://academia.kcu.ac.ug/" },
      { label: "K-Class", href: "https://vclass.kcu.ac.ug/" },
    ],
  },
  {
    label: "Student",
    href: "/student",
    disableLink: true,
    description: "Student leadership, campus life and dean of students services.",
    children: [
      { label: "Guild", href: "/student/guild" },
      { label: "Campus Life", href: "/student/campus-life" },
      { label: "Graduation Ceremonies", href: "/academics/graduation" },
      { label: "Dean of Students", href: "/student/dean-of-students" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    disableLink: true,
    description: "Library, quality assurance, counselling and student support services.",
    children: [
      { label: "Library", href: "/library" },
      { label: "Quality Assurance", href: "/services/quality-assurance" },
      { label: "Counselling", href: "/services/counselling" },
    ],
  },
  {
    label: "Gallery",
    href: "/gallery",
    description: "Photos and media from King Ceasor University events and campus life.",
    children: [],
  },
];

export const heroSlides: HeroSlide[] = [
  {
    badge: "Join KCU Today",
    school: "August Intake Now Open",
    title: "Undergraduate | Diploma | Certificates",
    subtitle: "",
    cta: "Apply Here",
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
    badge: "School of Law & Management Sciences",
    school: "",
    title: "Bachelors of Law | Bachelors of Business Administration & More",
    subtitle: "",
    cta: "Explore Courses",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1800&q=85",
    programmes: [
      "",
      "",
      "",
      "",
    ],
  },
  {
    badge: "Admissions Office",
    school: "Intakes: April & August",
    title: "King Ceasor University",
    subtitle: "",
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
    badge: "School of Science, Computing & Engineering",
    school: "",
    title: "Bachelors of Computer Forensics | Bachelors of Petroluem and Geoscience",
    subtitle: "",
    cta: "Explore Courses",
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
    badge: "Short Courses",
    school: "Certificates in: ",
    title: "Language Proficiency | Digital Marketing | Computer Applications",
    subtitle: "",
    cta: "Explore Courses",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=85",
    programmes: [
      "",
      "",
      "",
      "",
    ],
  },
  {
    badge: "Student Experience",
    school: "Campus Life at KCU",
    title: "A Supportive University Community",
    subtitle: "",
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
  "School of Medicine, Health & Life Sciences",
  "School of Law & Management Sciences",
  "School of Science, Computing and Engineering",
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
