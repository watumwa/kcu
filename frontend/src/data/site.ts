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
  imagePosition?: string;
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
      { label: "Mission | Vision | Core Values", href: "/about#mission-vision" },
      { label: "Governance", href: "/about#trustees" },
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
    image: "/images/kcu-2026/graduates-welcome-group.webp",
    imagePosition: "center 42%",
    
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
    title: "Bachelor of Laws | Bachelor of Business Administration & More",
    subtitle: "",
    cta: "Explore Courses",
    image: "/images/kcu-2026/library-collaboration.webp",
    imagePosition: "center 45%",
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
    image: "/images/kcu-2026/graduates-best-of-best.webp",
    imagePosition: "center 38%",
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
    title: "Bachelor of Computer Forensics | Bachelor of Petroleum Geoscience",
    subtitle: "",
    cta: "Explore Courses",
    image: "/images/kcu-2026/lab-chemistry-students.webp",
    imagePosition: "center 45%",
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
    image: "/images/kcu-2026/library-shelves-student.webp",
    imagePosition: "center 42%",
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
    image: "/images/kcu-2026/student-laptop-collaboration.webp",
    imagePosition: "center 45%",
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
    title: "KCU Signs Strategic Partnership with Tecnovia to Enhance Student Skills and Employment Opportunities",
    date: "10 June 2026",
    href: "https://kcu.ac.ug/kcu-signs-strategic-partnership-with-tecnovia-to-enhance-student-skills-and-employment-opportunities/",
    text: "KCU signed an MoU with Tecnovia Uganda Branch to expand industrial training, internships, curriculum support and employment pathways for students.",
    image: "https://kcu.ac.ug/wp-content/uploads/2026/06/partnership-1.webp",
    featured: true,
  },
  {
    category: "Partnerships",
    title: "Department of Law Signs Memorandum of Understanding with Praxis Conflict Centre",
    date: "10 June 2026",
    href: "https://kcu.ac.ug/department-of-law-signs-memorandum-of-understanding-with-praxis-conflict-centre/",
    text: "The Department of Law signed an MoU with Praxis Conflict Centre to strengthen Alternative Dispute Resolution education, internships, mentorship and research.",
    image: "https://kcu.ac.ug/wp-content/uploads/2026/06/law-scaled.webp",
    featured: false,
  },
  {
    category: "Student Life",
    title: "Law Students Honoured for Outstanding Performance in Regional Moot & Debate Competitions",
    date: "01 June 2026",
    href: "https://kcu.ac.ug/law-students-honoured-for-outstanding-performance-in-regional-moot-and-debate-competitions/",
    text: "The Vice Chancellor honoured outstanding Law students and coaches following their success in regional moot court and legal debate competitions.",
    image: "https://kcu.ac.ug/wp-content/uploads/2026/06/WhatsApp-Image-2026-05-29-at-18.57.36.jpeg",
    featured: false,
  },
  {
    category: "Events",
    title: "KCU Hosts Public Lecture on Universal Jurisdiction and Transnational Litigation",
    date: "26 May 2026",
    href: "https://kcu.ac.ug/king-ceasor-university-hosts-public-lecture-on-universal-jurisdiction-and-transnational-litigation/",
    text: "KCU hosted a public lecture for law students, legal practitioners and human rights advocates on universal jurisdiction and transnational litigation.",
    image: "https://kcu.ac.ug/wp-content/uploads/2026/05/DSC09363.jpg-1.jpeg",
    featured: false,
  },
  {
    category: "Finance",
    title: "Call for Student Loan Applications for the Academic Year 2026/27",
    date: "25 May 2026",
    href: "https://kcu.ac.ug/call-for-students-loan-applications-for-the-academic-year-2026-27/",
    text: "The Ministry of Education and Sports, through HESFB, announced student loan applications for the 2026/27 academic year.",
    image: "https://kcu.ac.ug/wp-content/uploads/2026/05/Ministry-of-Education-and-Sports-Advert-for-loan-application-2026-27-New-Vision-Final-Final-scaled.jpg",
    featured: false,
  },
  {
    category: "Partnerships",
    title: "KCU Participates in the Erasmus Exchange Programme",
    date: "25 May 2026",
    href: "https://kcu.ac.ug/kcu-participates-in-the-erasmus-exchange-programme/",
    text: "Staff from the School of Law and Management Sciences joined the Erasmus Teaching Staff Mobility Exchange Programme in Poland.",
    image: "https://kcu.ac.ug/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-23-at-12.08.06.jpeg",
    featured: false,
  },
  {
    category: "Partnerships",
    title: "King Ceasor University Signs MOU with HESFB to Expand Access to Student Financing",
    date: "20 May 2026",
    href: "https://kcu.ac.ug/king-ceasor-university-signs-mou-with-hesfs-to-expand-access-to-student-financing/",
    text: "KCU signed an MoU with the Higher Education Students' Financing Board to expand access to affordable higher education financing.",
    image: "https://kcu.ac.ug/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-20-at-17.30.28.jpeg",
    featured: false,
  },
  {
    category: "Student Life",
    title: "Guild Leadership Swearing-In Ceremony Held at King Ceasor University",
    date: "20 May 2026",
    href: "https://kcu.ac.ug/guild-leadership-swearing-in-ceremony-held-at-king-ceasor-university/",
    text: "KCU officially held the swearing-in ceremony for the newly elected guild leadership at the university rooftop.",
    image: "https://kcu.ac.ug/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-15-at-19.45.26-e1779277565886.jpeg",
    featured: false,
  },
  {
    category: "Research",
    title: "KCU Showcases \"Aqua Clean\" Innovation at the 3rd Oil & Gas Skills Expo 2026",
    date: "14 May 2026",
    href: "https://kcu.ac.ug/kcu-department-of-petroleum-geoscience-showcases-aqua-clean-innovation-at-the-3rd-oil-gas-skills-expo-2026/",
    text: "The Department of Petroleum Geoscience showcased Aqua Clean during the 3rd Oil & Gas Skills Expo at Makerere University.",
    image: "https://kcu.ac.ug/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-13-at-20.19.46.jpeg",
    featured: false,
  },
  {
    category: "Announcements",
    title: "Minister of Energy Hosts KCU Geoscience Department",
    date: "05 May 2026",
    href: "https://kcu.ac.ug/petroleum-geoscience-department-pays-courtesy-call-to-minister-of-energy-and-mineral-development/",
    text: "The Petroleum Geoscience Department paid a courtesy call to the Minister of Energy and Mineral Development to discuss Uganda's oil, gas and mining sectors.",
    image: "https://kcu.ac.ug/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-05-at-16.44.21.jpeg",
    featured: false,
  },
];
