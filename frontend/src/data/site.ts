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
      { label: "Governance", href: "/about" },
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

export const upcomingEvents = [
  { date: "Jun 12", month: "Jun", day: "12", title: "Research & Innovation Conference 2026", location: "KCU Main Auditorium", status: "Upcoming" },
  { date: "Jun 18", month: "Jun", day: "18", title: "Graduation Ceremony 2026", location: "Kampala Serena Hotel", status: "Upcoming" },
  { date: "Jun 22", month: "Jun", day: "22", title: "Open Day for Prospective Students", location: "Bunga Hill Campus", status: "Upcoming" },
  { date: "Jul 05", month: "Jul", day: "05", title: "August Intake Registration Opens", location: "Registry Office / Online", status: "Upcoming" },
];

export const newsItems = [
  {
    category: "Partnerships",
    title: "KCU Signs MOU with HESFS to Expand Access to Student Financing",
    date: "10 May 2026",
    href: "https://kcu.ac.ug/king-ceasor-university-signs-mou-with-hesfs-to-expand-access-to-student-financing/",
    text: "KCU and HESFS formalised a landmark partnership to expand access to student financing, making university education more accessible to Ugandans.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",
    featured: true,
  },
  {
    category: "Student Life",
    title: "Law Students Honoured for Outstanding Performance in Regional Moot & Debate Competitions",
    date: "30 May 2026",
    href: "https://kcu.ac.ug/law-students-honoured-for-outstanding-performance-in-regional-moot-and-debate-competitions/",
    text: "The Vice Chancellor honoured outstanding Law students and coaches following their success in regional moot court and legal debate competitions.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80",
    featured: false,
  },
  {
    category: "Events",
    title: "KCU Hosts Public Lecture on Universal Jurisdiction and Transnational Litigation",
    date: "26 May 2026",
    href: "https://kcu.ac.ug/king-ceasor-university-hosts-public-lecture-on-universal-jurisdiction-and-transnational-litigation/",
    text: "KCU hosted a landmark public lecture drawing legal scholars and practitioners from across East Africa.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80",
    featured: false,
  },
  {
    category: "Admissions",
    title: "August 2026 Intake Now Open — Apply Online Today",
    date: "02 June 2026",
    href: "https://apply.kcu.ac.ug/",
    text: "Applications for the August 2026 intake are now open across all undergraduate, diploma and certificate programmes.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
    featured: false,
  },
  {
    category: "Finance",
    title: "Call for Student Loan Applications for the Academic Year 2026/27",
    date: "20 May 2026",
    href: "https://kcu.ac.ug/call-for-students-loan-applications-for-the-academic-year-2026-27/",
    text: "Eligible students can now apply for HESFS student loans for the 2026/27 academic year. Deadline applies — apply early.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    featured: false,
  },
  {
    category: "Student Life",
    title: "Guild Leadership Handover and Swearing-In Ceremony Held at KCU",
    date: "28 Apr 2026",
    href: "https://kcu.ac.ug/guild-leadership-swearing-in-ceremony-held-at-king-ceasor-university/",
    text: "A new era of student leadership begins as KCU's Guild Executive was sworn in at an official handover and inauguration ceremony.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80",
    featured: false,
  },
];
