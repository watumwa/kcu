import UnderConstruction from "@/components/common/UnderConstruction";
import GraduationPage from "@/components/academics/GraduationPage";
import StudentGuildPage from "@/components/student/StudentGuildPage";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  CalendarDays,
  ChevronRight,
  Clock,
  HeartHandshake,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  UserRound,
  UsersRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type AboutPageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  heroImage?: string;
  sections: {
    title: string;
    text?: string;
    items?: string[];
  }[];
  cta?: {
    label: string;
    href: string;
    heading?: string;
  };
  qualityAssurance?: {
    director: {
      name: string;
      title: string;
      image: string;
      message: string;
    };
    staff: {
      name: string;
      role: string;
      image?: string;
    }[];
    whatWeDo: {
      area: string;
      details: string;
    }[];
  };
  counselling?: {
    counselor: {
      name: string;
      title: string;
      image: string;
      message: string;
    };
    vision: string;
    mission: string;
    values: string[];
    supportChannels: string[];
    concernAreas: {
      title: string;
      summary: string;
      items: string[];
    }[];
    access: {
      label: string;
      value: string;
    }[];
    closing: string;
  };
  deanOfStudents?: {
    dean: {
      name: string;
      title: string;
      image: string;
      message: string[];
    };
    commitments: {
      title: string;
      text: string;
    }[];
    studentActions: string[];
    officeAreas: string[];
    closing: string;
  };
  libraryPage?: {
    librarian: {
      name: string;
      title: string;
      image: string;
      message: string[];
    };
    theme: string;
    mission: string;
    vision: string;
    gallery?: {
      title: string;
      image: string;
    }[];
    values: {
      name: string;
      text: string;
    }[];
    eResourcesSteps: string[];
    hours: {
      label: string;
      value: string;
    }[];
  };
};

const aboutPages: Record<string, AboutPageContent> = {
  "about/governance": {
    eyebrow: "Governance",
    title: "University Governance",
    intro:
      "King Ceasor University is guided by governance and administration structures that uphold academic excellence, accountability, sustainable development, innovation, and service to society.",
    sections: [
      {
        title: "University Council",
        text:
          "The University Council is the supreme governing body of King Ceasor University, responsible for strategic leadership, policy oversight and institutional governance. It safeguards the University's vision, mission and long-term growth while supporting quality education, innovation and service to society.",
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
          "The University Administration serves as the executive arm of King Ceasor University, coordinating academic, administrative and operational activities. Guided by the University's vision and strategic objectives, it promotes quality education, efficient resource management, institutional growth and a supportive learning environment.",
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
        title: "Higher Education Certificate (HEC)",
        items: [
          "Applicants should have UCE or equivalent with at least five passes.",
          "HEC provides a bridging pathway for applicants who do not meet direct entry requirements for degree programmes.",
          "Applicants with foreign qualifications may use HEC pathways where their credentials require academic bridging or equivalence support.",
        ],
      },
      {
        title: "Mature Entry",
        items: [
          "Applicants should normally be at least 25 years old at the time of application.",
          "Applicants may be required to sit and pass a mature age entry examination or interview approved by the University.",
          "Relevant work experience, prior learning, and professional background may be considered during assessment.",
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
      label: "Apply Now",
      href: "https://apply.kcu.ac.ug/",
      heading: "Ready to Apply",
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
    heroImage: "/University Management/Fr. Dr. Lumala Aloysius Gonzagga.jpeg",
    intro:
      "The Office of the Dean of Students supports a university community shaped by academic excellence, integrity, holistic development, welfare, guidance, and responsible service to society.",
    sections: [],
    deanOfStudents: {
      dean: {
        name: "Fr. Dr. Aloysius Gonzaga Lumala",
        title: "Dean of Students",
        image: "/University Management/Fr. Dr. Lumala Aloysius Gonzagga.jpeg",
        message: [
          "Welcome to our university community, where academic excellence, integrity, and holistic development are at the heart of everything we do. As Dean of Students, I encourage every student to embrace the opportunities available for learning, leadership, innovation, and personal growth.",
          "University life is a unique journey that shapes not only your career but also your character. I urge you to uphold discipline, respect for others, and commitment to the values of our institution. Participate actively in academic, spiritual, social, and co-curricular activities, and work closely with your student leaders and staff to create a vibrant and supportive campus environment.",
          "My office remains committed to your welfare, guidance, and success. Together, let us build a community that inspires excellence and prepares responsible citizens for service to society.",
        ],
      },
      commitments: [
        {
          title: "Academic Excellence",
          text:
            "Students are encouraged to pursue learning with focus and commitment while using the opportunities available across the University.",
        },
        {
          title: "Integrity",
          text:
            "University life calls for discipline, respect for others, and commitment to the values of the institution.",
        },
        {
          title: "Holistic Development",
          text:
            "Growth at KCU includes leadership, innovation, spirituality, social engagement, co-curricular participation, and personal development.",
        },
      ],
      studentActions: [
        "Embrace learning, leadership, innovation, and personal growth opportunities.",
        "Uphold discipline, respect for others, and institutional values.",
        "Participate actively in academic, spiritual, social, and co-curricular activities.",
        "Work closely with student leaders and staff to strengthen a supportive campus environment.",
      ],
      officeAreas: [
        "Student welfare",
        "Guidance",
        "Success",
        "Supportive campus life",
        "Responsible citizenship",
        "Service to society",
      ],
      closing:
        "Together, let us build a community that inspires excellence and prepares responsible citizens for service to society.",
    },
    cta: {
      label: "Student Guild",
      href: "/student/guild",
      heading: "Work With Student Leaders",
    },
  },
  services: {
    eyebrow: "Services",
    title: "University Services",
    intro:
      "King Ceasor University provides academic and student support services that strengthen learning, wellbeing, institutional quality, and campus life.",
    sections: [
      {
        title: "Service Areas",
        items: [
          "Library services for learning, research, digital resources, and study support.",
          "Quality assurance coordination for academic standards, continuous improvement, and institutional accountability.",
          "Counselling and guidance support for student wellbeing, personal development, and university life.",
        ],
      },
      {
        title: "Student Support",
        text:
          "These services work together with academic departments, administration, and student welfare teams to support a productive, inclusive, and student-centered university experience.",
      },
    ],
    cta: {
      label: "Visit the Library",
      href: "/library",
    },
  },
  "services/quality-assurance": {
    eyebrow: "Services",
    title: "Quality Assurance",
    intro:
      "The Quality Assurance function supports King Ceasor University's commitment to academic excellence, accountability, and continuous institutional improvement.",
    sections: [],
    qualityAssurance: {
      director: {
        name: "Assoc. Prof. Annabella Habinka Ejiri",
        title: "Director Quality Assurance",
        image: "/qa.jpeg",
        message:
          "Welcome to the Directorate of Quality Assurance and Control (DQA&C) at King Ceasor University. We are dedicated to promoting excellence in teaching, learning, research, and service through effective quality assurance practices. As the University's focal point for quality reviews and continuous improvement initiatives, we work closely with staff, students, and stakeholders to uphold high academic and operational standards. We invite you to explore our services and quality initiatives, and encourage you to contact us for any additional information or support.",
      },
      staff: [
        { name: "Dr. Annabella Habinka Ejiri", role: "Director Quality Assurance", image:"/qa.jpeg"},
        { name: "Ms. Atuhwera Joanita", role: "Quality Assurance Monitoring Officer", image:"/Joanita.jpeg" },
        { name: "Mr. Ayebale John Justice", role: "Clinical Monitoring Officer", image:"/" },
        { name: "Ms. Grace Asingwire", role: "Quality Assurance Officer", image:"/Grace.jpg" },
        { name: "Ms. Sayuuni Mercy", role: "Quality Assurance Monitoring Assistant", image:"/Mercy.jpeg" },
        { name: "Ms. Viola Kintu", role: "Quality Assurance Officer", image:"/Viola.jpg" },
      ],
      whatWeDo: [
        {
          area: "Policy Compliance",
          details:
            "DQA&C ensures that the departments follow the policies and various guideline in execution of their operational and strategic levels.",
        },
        {
          area: "Mandate",
          details:
            "Supports continuous improvement in teaching, learning, assessment, programme delivery, institutional planning, and service quality.",
        },
        {
          area: "Activities",
          details:
            "Facilitates audits, stakeholder feedback, programme reviews, documentation, reporting, staff sensitization, and follow-up on improvement plans.",
        },
        {
          area: "Membership",
          details:
            "King Ceasor University is a registered member of Uganda University Quality Assurance Forum (UUQAF)",
        },
      ],
    },
  },
  "services/counselling": {
    eyebrow: "Services",
    title: "Counselling and Guidance",
    heroImage: "/Counsellor/DSC09887.jpeg",
    intro:
      "The KCU Counselling and Guidance Programme supports students and staff through academic pressure, psychosocial wellbeing, university transition, and personal development.",
    sections: [],
    counselling: {
      counselor: {
        name: "University Counselor",
        title: "Counselling and Guidance Programme",
        image: "/Counsellor/DSC09882.jpeg",
        message:
          "University campus life can be exciting and challenging at the same time. It is all part of the journey into the future we all aspire to have. The Counselling and Guidance Programme exists to ensure a smooth transition for every student and staff member, helping them achieve the prime purpose of being here: academic success, professional growth, and personal development. You are not alone, and it is human to feel this way. A problem shared is a problem halved. Break the silence and engage your Counselor through individual counselling, group counselling, and referrals.",
      },
      vision:
        "To become a Centre of Excellence in providing comprehensive, proactive, and timely counselling services that empower staff and students to thrive in their personal, academic, and professional lives.",
      mission:
        "To promote the holistic wellbeing of staff and students by offering accessible, confidential, non-discriminatory, and culturally sensitive counselling services that foster psychosocial wellness, academic success, and professional growth.",
      values: [
        "Confidentiality",
        "Non-discrimination",
        "Empathy",
        "Strict adherence to professional ethics",
      ],
      supportChannels: ["Individual counselling", "Group counselling", "Referrals"],
      concernAreas: [
        {
          title: "Academic Pressures",
          summary:
            "Support for students managing academic expectations, performance demands, deadlines, and future career uncertainty.",
          items: [
            "Career choice conflicts.",
            "Performance and assessment demands, including fear of failure.",
            "Anxiety around exams and oral presentations.",
            "Concern about meeting personal goals.",
            "Course workload and time management worries.",
            "Inadequate sleep due to coursework deadlines.",
            "Competition with students in other universities.",
            "Critique from supervisors, mentors, and lecturers.",
            "Fear of failure to graduate.",
            "Work and employment uncertainties.",
          ],
        },
        {
          title: "Psychosocial Pressures",
          summary:
            "Care for personal, social, emotional, family, identity, grief, and relationship concerns that affect wellbeing.",
          items: [
            "Relationship and family hurdles, including betrayal, domestic violence, emotional neglect, physical neglect, sexual harassment, and violence.",
            "Peer pressure.",
            "Identity dilemmas, low self-esteem, poor interpersonal relationships, and lack of confidence.",
            "Transition from parental supervision to independent adult decision making.",
            "Navigating new social environments and finding support networks.",
            "Dress code and multiple value systems.",
            "Emotional drain due to terminal ailments.",
            "Loss of loved ones and management of grieving processes.",
            "Guilty feelings after poor relational or financial decisions and feeling overwhelmed.",
          ],
        },
      ],
      access: [
        { label: "Location", value: "Wellness Centre" },
        { label: "Days", value: "Monday to Friday" },
        { label: "Time", value: "10:00am - 5:00pm" },
      ],
      closing: "# Your Mental Health Is Your Wealth",
    },
  },
  library: {
    eyebrow: "Library",
    title: "KCU Library",
    heroImage: "/University%20Management/Mr.%20Eric%20Keziron%20Oloo.jpeg",
    intro:
      "King Ceasor University Library is a knowledge hub, a home to excellent study spaces, and a catalyst for academic excellence, research, and innovation.",
    sections: [],
    libraryPage: {
      librarian: {
        name: "Mr. Eric Keziron Oloo",
        title: "University Librarian",
        image: "/University%20Management/Mr.%20Eric%20Keziron%20Oloo.jpeg",
        message: [
          "Welcome to King Ceasor University (KCU) Library, a knowledge hub and home to some of the best study spots on campus. Our theme is automated and user-centered academic library services: a catalyst to academic excellence, research, and innovation.",
          "The library offers multifaceted resources and services accessible both physically and remotely in support of the academic mission of the University.",
          "The library also fosters collaboration with different KCU schools and departments in building strong and relevant collections. KCU Library subscribes to the Consortium of Uganda University Libraries (CUUL) for effective collaboration and resource sharing among university and institutional libraries in Uganda, ensuring access to state-of-the-art library resources and services.",
          "Please do not hesitate to seek support from our librarians at all times. We shall always offer you professional library and information services with a smile.",
        ],
      },
      theme:
        "Automated and user-centered academic library services: a catalyst to academic excellence, research, and innovation.",
      mission:
        "To embrace emerging technologies and best practices in the provision of exceptional library and information services.",
      vision:
        "An indispensable research, innovation, and knowledge hub.",
      gallery: [
        {
          title: "Library study spaces",
          image: "/library/WhatsApp Image 2026-06-11 at 13.55.22.jpeg",
        },
        {
          title: "Library reading area",
          image: "/library/WhatsApp Image 2026-06-11 at 13.55.22 (1).jpeg",
        },
        {
          title: "Library resources and support",
          image: "/library/WhatsApp Image 2026-06-11 at 13.55.23.jpeg",
        },
      ],
      values: [
        {
          name: "Equity",
          text:
            "We recognize and address the unique needs of our users to ensure they have an equal opportunity for academic excellence.",
        },
        {
          name: "Integrity",
          text:
            "We ensure moral soundness and uphold intellectual honesty and ethical use of information.",
        },
        {
          name: "Innovation",
          text:
            "We continuously seek new and creative ways to enhance library services and resources.",
        },
        {
          name: "Learning",
          text:
            "We provide relevant resources to support teaching, learning, and research.",
        },
        {
          name: "Accountability",
          text:
            "We ensure that all resources entrusted to the library are used efficiently, effectively, and responsibly to achieve their purpose.",
        },
      ],
      eResourcesSteps: [
        "Download the MyLoft app from Play Store for Android users or App Store for iOS.",
        "For computers, install the MyLoft extension in Google Chrome.",
        "Under institutions, select Consortium of Uganda University Libraries, Uganda.",
        "Log in using the credentials received from the library.",
      ],
      hours: [
        { label: "Monday to Friday", value: "7:30 AM - 9:00 PM" },
        { label: "Saturday", value: "8:00 AM - 1:00 PM" },
        { label: "Public Holidays", value: "Closed except on special arrangements" },
      ],
    },
    cta: {
      label: "Library Catalogue",
      href: "https://catalogue.kcu.ac.ug/",
      heading: "Search Library Resources",
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


const feeProgrammes = [
  {
    category: "Undergraduate / Degree Programs",
    group: "School of Medicine, Health and Life Sciences",
    summary: "Undergraduate, diploma, and higher education certificate programmes in medicine and life sciences.",
    feeLabel: "Fees Per Semester",
    courses: [
      { code: "01", course: "Bachelor of Medicine and Bachelor of Surgery", duration: "5 Years", uganda: "$3,000", international: "$3,000" },
      { code: "02", course: "Bachelor of Nursing Science - Direct", duration: "4 Years", uganda: "$1,100", international: "$1,300" },
      { code: "03", course: "Bachelor of Nursing Science - Completion", duration: "3 Years", uganda: "$1,100", international: "$1,300" },
      { code: "04", course: "Diploma in Clinical Medicine and Community Health", duration: "3 Years", uganda: "$1,000", international: "$1,150" },
      { code: "05", course: "Diploma in Medical Laboratory Technology", duration: "3 Years", uganda: "$1,000", international: "$1,150" },
      { code: "06", course: "Higher Education Certificate - Biological Sciences", duration: "1 Year", uganda: "$550", international: "$750" },
      { code: "07", course: "Higher Education Certificate - Physical Sciences", duration: "1 Year", uganda: "$550", international: "$750" },
    ],
  },
  {
    category: "Undergraduate / Degree Programs",
    group: "School of Law and Management Sciences",
    summary: "Degree, diploma, and higher education certificate programmes in law, business, and management.",
    feeLabel: "Fees Per Semester",
    courses: [
      { code: "08", course: "Bachelor of Laws", duration: "4 Years", uganda: "$1,150", international: "$1,300" },
      { code: "09", course: "Bachelor of Business Administration", duration: "3 Years", uganda: "$1,100", international: "$1,225" },
      { code: "10", course: "Bachelor of Oil, Gas, and Energy Management", duration: "3 Years", uganda: "$1,100", international: "$1,225" },
      { code: "11", course: "Bachelor of Applied Economics", duration: "3 Years", uganda: "$1,100", international: "$1,225" },
      { code: "12", course: "Diploma in Global Business", duration: "2 Years", uganda: "$1,000", international: "$1,200" },
      { code: "13", course: "Higher Education Certificate - Humanities", duration: "1 Year", uganda: "$550", international: "$750" },
    ],
  },
  {
    category: "Undergraduate / Degree Programs",
    group: "School of Science, Computing and Engineering",
    summary: "Degree programmes in petroleum geoscience, computing, and criminal investigations.",
    feeLabel: "Fees Per Semester",
    courses: [
      { code: "14", course: "Bachelor of Science in Petroleum Geoscience", duration: "4 Years", uganda: "$1,150", international: "$1,300" },
      { code: "15", course: "Bachelor of Computer Forensics and Criminal Investigations", duration: "3 Years", uganda: "$1,100", international: "$1,225" },
    ],
  },
  {
    category: "Certificate Programs",
    group: "School of Medicine, Health and Life Sciences",
    summary: "Professional health and life sciences certificate programmes.",
    feeLabel: "Course Fees",
    courses: [
      { code: "16", course: "Certificate in Rest ECG Reading", duration: "4 Weeks", uganda: "$500", international: "$670" },
      { code: "17", course: "Certificate in Holter ECG Reading/Interpretation", duration: "2 Weeks", uganda: "$250", international: "$400" },
      { code: "18", course: "Certificate in Stress ECH Reading/Interpretation", duration: "2 Weeks", uganda: "$250", international: "$400" },
      { code: "19", course: "Certificate in Production of Herbal Based creams,gels,Lotions", duration: "4 Weeks", uganda: "$115", international: "$195" },
      { code: "20", course: "Certificate in Production of Herbal Based medicated soap,shampoo", duration: "4 Weeks", uganda: "$115", international: "$195" },
      { code: "21", course: "Certificate in 24-Hour BP Monitoring Reporting", duration: "2 Weeks", uganda: "$250", international: "$390" },
      { code: "22", course: "Certificate in Advanced Cardiac Life Support", duration: "2 Weeks", uganda: "$300", international: "$450" },
    ],
  },
  {
    category: "Certificate Programs",
    group: "School of Law and Management Sciences",
    summary: "Professional certificate programmes in communication, management, safety, and enterprise.",
    feeLabel: "Course Fees",
    courses: [
      { code: "23", course: "Certificate in English Proficiency Course", duration: "3 Months", uganda: "$160", international: "$300" },
      { code: "24", course: "Certificate in Occupational Health and Safety", duration: "1 month", uganda: "$125", international: "$240" },
      { code: "25", course: "Certificate in book keeping for small and medium enterprises", duration: "1 month", uganda: "$100", international: "$165" },
      { code: "26", course: "Certificate in Strategic Management", duration: "1 month", uganda: "$100", international: "$165" },
      { code: "27", course: "Certificate in Sacco Management", duration: "1 month", uganda: "$100", international: "$165" },
      { code: "28", course: "Certificate in Digital Marketing", duration: "2 Months", uganda: "$120", international: "$230" },
      { code: "29", course: "Certificate in Tax and Credit Management", duration: "1 month", uganda: "$115", international: "$225" },
    ],
  },
  {
    category: "Certificate Programs",
    group: "School of Science, Computing and Engineering",
    summary: "Certificate programmes in computing, cyber security, digital forensics, and organic farming.",
    feeLabel: "Course Fees",
    courses: [
      { code: "30", course: "Certificate in Computer Applications", duration: "2 Months", uganda: "$120", international: "$250" },
      { code: "31", course: "Certificate in Web design,Dev't & Administration", duration: "2 Months", uganda: "$160", international: "$265" },
      { code: "32", course: "Certificate in Computer Graphics", duration: "2 Months", uganda: "$120", international: "$180" },
      { code: "33", course: "Certificate in AI with Internet of Things using Arduino", duration: "2 Months", uganda: "$200", international: "$315" },
      { code: "34", course: "Cyber Security for Beginners", duration: "2 Months", uganda: "$120", international: "$200" },
      { code: "35", course: "Digital Forensic Investigations for beginners", duration: "2 Months", uganda: "$120", international: "$200" },
      { code: "36", course: "Certificate in Organic farming", duration: "2 Months", uganda: "$115", international: "$175" },
    ],
  },
];

type FeeProgrammeGroup = (typeof feeProgrammes)[number];
type FeeProgrammeCourse = FeeProgrammeGroup["courses"][number];
type AcademicProgrammeVariant = "schools" | "courses" | "undergraduate" | "diploma" | "certificates";

type AcademicCourse = {
  code: string;
  course: string;
  duration: string;
  category: string;
  school: string;
};

type AcademicProgrammeGroup = {
  category: string;
  group: string;
  summary: string;
  courses: AcademicCourse[];
};

const academicRouteVariants: Record<string, AcademicProgrammeVariant> = {
  "academics/schools": "schools",
  "academics/courses": "courses",
  "academics/courses/undergraduate": "undergraduate",
  "academics/courses/diploma": "diploma",
  "academics/courses/short-courses": "certificates",
};

const academicPageCopy: Record<
  AcademicProgrammeVariant,
  {
    crumb: string;
    title: string;
    intro: string;
    statLabel: string;
    groupStatLabel: string;
  }
> = {
  schools: {
    crumb: "Schools",
    title: "Schools and Programmes",
    intro:
      "Browse King Ceasor University programmes by their respective schools, with the official duration for each course.",
    statLabel: "Programmes",
    groupStatLabel: "Schools",
  },
  courses: {
    crumb: "Courses",
    title: "Courses and Programmes",
    intro:
      "Review KCU degree, diploma, higher education certificate, and professional certificate programmes by school and duration.",
    statLabel: "Programmes",
    groupStatLabel: "Tables",
  },
  undergraduate: {
    crumb: "Undergraduate",
    title: "Undergraduate Degree Programmes",
    intro:
      "Explore bachelor's degree programmes offered across KCU schools, with the expected duration for each programme.",
    statLabel: "Degree Programmes",
    groupStatLabel: "Schools",
  },
  diploma: {
    crumb: "Diploma",
    title: "Diploma Programmes",
    intro:
      "Explore diploma programmes offered at KCU and compare their durations by school.",
    statLabel: "Diploma Programmes",
    groupStatLabel: "Schools",
  },
  certificates: {
    crumb: "Certificates",
    title: "Certificates and Short Courses",
    intro:
      "Explore KCU professional certificate and short-course options by school, with the duration for each course.",
    statLabel: "Certificates",
    groupStatLabel: "Schools",
  },
};

const academicSchoolSummaries: Record<string, string> = {
  "School of Medicine, Health and Life Sciences":
    "Medicine, nursing, clinical medicine, laboratory technology, higher education certificate, and health-focused professional certificate programmes.",
  "School of Law and Management Sciences":
    "Law, business administration, energy management, applied economics, global business, humanities, and professional management certificate programmes.",
  "School of Science, Computing and Engineering":
    "Petroleum geoscience, computer forensics, computing, cyber security, digital forensics, artificial intelligence, and organic farming programmes.",
};

function toAcademicCourse(course: FeeProgrammeCourse, group: FeeProgrammeGroup): AcademicCourse {
  return {
    code: course.code,
    course: course.course,
    duration: course.duration,
    category: group.category,
    school: group.group,
  };
}

function getFilteredAcademicGroups(
  predicate: (course: FeeProgrammeCourse, group: FeeProgrammeGroup) => boolean,
) {
  return feeProgrammes
    .map((group) => ({
      category: group.category,
      group: group.group,
      summary: group.summary,
      courses: group.courses
        .filter((course) => predicate(course, group))
        .map((course) => toAcademicCourse(course, group)),
    }))
    .filter((group) => group.courses.length > 0);
}

function getSchoolAcademicGroups() {
  const schoolNames = Array.from(new Set(feeProgrammes.map((group) => group.group)));

  return schoolNames.map((school) => {
    const schoolGroups = feeProgrammes.filter((group) => group.group === school);

    return {
      category: "Academic Schools",
      group: school,
      summary: academicSchoolSummaries[school],
      courses: schoolGroups.flatMap((group) =>
        group.courses.map((course) => toAcademicCourse(course, group)),
      ),
    };
  });
}

function getAcademicProgrammeGroups(variant: AcademicProgrammeVariant): AcademicProgrammeGroup[] {
  if (variant === "schools") {
    return getSchoolAcademicGroups();
  }

  if (variant === "undergraduate") {
    return getFilteredAcademicGroups((course) => course.course.startsWith("Bachelor"));
  }

  if (variant === "diploma") {
    return getFilteredAcademicGroups((course) => course.course.startsWith("Diploma"));
  }

  if (variant === "certificates") {
    return getFilteredAcademicGroups((_, group) => group.category === "Certificate Programs");
  }

  return getFilteredAcademicGroups(() => true);
}

function AcademicProgrammesPage({ variant }: { variant: AcademicProgrammeVariant }) {
  const copy = academicPageCopy[variant];
  const groups = getAcademicProgrammeGroups(variant);
  const totalCourses = groups.reduce((total, group) => total + group.courses.length, 0);
  const showCategoryColumn = variant === "schools";

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-16 sm:pt-20 lg:pt-[8.5rem]">
        <div className="border-b border-slate-100 bg-[#FFFFFF]">
          <div className="mx-auto flex max-w-[1440px] items-center gap-2 overflow-x-auto px-4 py-3 text-xs text-slate-500 sm:px-6 lg:px-8">
            <Link href="/" className="shrink-0 hover:text-[#0B6232]">Home</Link>
            <ChevronRight className="size-3.5 shrink-0" />
            <Link href="/academics/schools" className="shrink-0 hover:text-[#0B6232]">Academics</Link>
            <ChevronRight className="size-3.5 shrink-0" />
            <span className="shrink-0 font-semibold text-[#0B6232]">{copy.crumb}</span>
          </div>
        </div>

        <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1800&q=80')" }} />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
          <div className="absolute -bottom-20 right-12 hidden size-72 rounded-full border border-white/10 lg:block" />
          <div className="relative z-10 mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[1fr_380px] lg:items-end">
            <div>
              <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-[#FFC66B] backdrop-blur">Academics</p>
              <h1 className="mt-5 max-w-4xl font-serif text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">{copy.title}</h1>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
                {copy.intro}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild className="h-11 rounded-xl bg-[#FFC66B] px-5 font-black text-[#0B6232] hover:bg-[#FFC66B]">
                  <Link href="https://apply.kcu.ac.ug/">Apply Online <ArrowRight className="ml-2 size-4" /></Link>
                </Button>
                <Button asChild variant="outline" className="h-11 rounded-xl border-2 border-white bg-transparent px-5 font-black text-white hover:bg-white hover:text-[#0B6232]">
                  <Link href="/admissions/fees-structure">Fees Structure</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/10 p-5 text-white shadow-2xl backdrop-blur">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FFC66B]">At a glance</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-3xl font-black">{totalCourses}</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white/70">{copy.statLabel}</p>
                </div>
                <div className="rounded-2xl bg-[#FFC66B] p-4 text-[#0B6232]">
                  <p className="text-3xl font-black">{groups.length}</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em]">{copy.groupStatLabel}</p>
                </div>
              </div>
              <p className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4 text-xs leading-6 text-white/75">
                This academics view lists programme names and durations only. Fee amounts remain on the admissions fee structure page.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50/70 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-6 lg:grid-cols-[1fr_340px] lg:items-start">
              <div className="space-y-8">
                {groups.map((group) => (
                  <section key={`${group.category}-${group.group}`} className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-900/5">
                    <div className="flex flex-col gap-4 border-b border-slate-100 bg-[#0B6232] p-6 text-white sm:flex-row sm:items-end sm:justify-between lg:p-8">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#FFC66B]">{group.category}</p>
                        <h2 className="mt-2 text-2xl font-black leading-tight sm:text-3xl">{group.group}</h2>
                        <p className="mt-2 max-w-3xl text-sm leading-7 text-white/75">{group.summary}</p>
                      </div>
                      <div className="w-fit rounded-2xl bg-white/10 px-4 py-3 text-center">
                        <p className="text-2xl font-black text-[#FFC66B]">{group.courses.length}</p>
                        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/70">Programmes</p>
                      </div>
                    </div>

                    <div className="grid gap-3 p-3 md:hidden">
                      {group.courses.map((course) => (
                        <article key={`${group.group}-${course.code}-${course.course}`} className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4 shadow-sm">
                          <div className="flex items-start justify-between gap-3">
                            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#0B6232] text-sm font-black text-[#FFC66B]">
                              {course.code}
                            </span>
                            <span className="rounded-full bg-[#0B6232]/10 px-3 py-1 text-right text-[11px] font-black leading-4 text-[#0B6232]">
                              {showCategoryColumn ? course.category : group.category}
                            </span>
                          </div>
                          <h3 className="mt-4 text-base font-black leading-snug text-slate-950">{course.course}</h3>
                          <dl className="mt-4 grid gap-3 text-sm">
                            {showCategoryColumn && (
                              <div className="rounded-xl bg-white p-3">
                                <dt className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">Programme Type</dt>
                                <dd className="mt-1 font-semibold leading-5 text-slate-700">{course.category}</dd>
                              </div>
                            )}
                            <div className="rounded-xl bg-white p-3">
                              <dt className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">Duration</dt>
                              <dd className="mt-1 font-black leading-5 text-[#0B6232]">{course.duration}</dd>
                            </div>
                          </dl>
                        </article>
                      ))}
                    </div>

                    <div className="hidden overflow-x-auto md:block">
                      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                        <thead>
                          <tr className="border-b border-slate-100 bg-slate-50 text-[11px] uppercase tracking-[0.14em] text-slate-500">
                            <th className="px-5 py-4 font-black">No.</th>
                            <th className="px-5 py-4 font-black">Course / Programme</th>
                            {showCategoryColumn && <th className="px-5 py-4 font-black">Programme Type</th>}
                            <th className="px-5 py-4 font-black">Duration</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {group.courses.map((course) => (
                            <tr key={`${group.group}-${course.code}-${course.course}`} className="align-top transition hover:bg-[#FFC66B]/10">
                              <td className="px-5 py-4 font-black text-[#0B6232]">{course.code}</td>
                              <td className="px-5 py-4">
                                <p className="font-black text-slate-950">{course.course}</p>
                                {!showCategoryColumn && <p className="mt-1 text-xs font-semibold text-slate-500">{course.school}</p>}
                              </td>
                              {showCategoryColumn && <td className="px-5 py-4 text-slate-700">{course.category}</td>}
                              <td className="px-5 py-4 font-black text-[#0B6232]">{course.duration}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>
                ))}
              </div>

              <aside className="space-y-6 lg:sticky lg:top-28">
                <section className="rounded-3xl border border-[#FFC66B]/40 bg-[#FFC66B]/15 p-6 shadow-xl shadow-slate-900/5">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0B6232]">Programme Guide</p>
                  <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950">Courses by duration</h2>
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                    <li className="flex gap-3"><span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-[#0B6232] text-[10px] font-black text-[#FFC66B]">✓</span>Programmes are grouped by the school responsible for delivery.</li>
                    <li className="flex gap-3"><span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-[#0B6232] text-[10px] font-black text-[#FFC66B]">✓</span>Academic pages show course names and durations only.</li>
                    <li className="flex gap-3"><span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-[#0B6232] text-[10px] font-black text-[#FFC66B]">✓</span>Use the fees structure page for Uganda and international fee amounts.</li>
                  </ul>
                </section>

                <section className="rounded-3xl bg-[#0B6232] p-6 text-white shadow-2xl shadow-[#0B6232]/20">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FFC66B]">Ready to apply?</p>
                  <h2 className="mt-2 text-2xl font-black leading-tight">Start your application online</h2>
                  <p className="mt-3 text-sm leading-7 text-white/75">Use the applicant portal to begin your admission process and receive course-specific guidance.</p>
                  <Button asChild className="mt-6 h-11 w-full rounded-xl bg-[#FFC66B] px-5 font-black text-[#0B6232] hover:bg-[#FFC66B]">
                    <Link href="https://apply.kcu.ac.ug/">Apply Online <ArrowRight className="ml-2 size-4" /></Link>
                  </Button>
                </section>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

const applicationRequirements = [
  "Photocopies of academic documents.",
  "Photocopy of National ID.",
  "Photocopy of Birth certificate.",
  "Application fee of UGX 100,000.",
];

function getValidImageSrc(image?: string) {
  const src = image?.trim();
  return src && src !== "/" ? src : undefined;
}

function ProfilePhoto({ alt, className, sizes, src }: { alt: string; className: string; sizes: string; src?: string }) {
  const validSrc = getValidImageSrc(src);

  if (!validSrc) {
    return (
      <div className="absolute inset-0 grid place-items-center bg-slate-100 text-[#0B6232]">
        <UserRound className="size-16" />
      </div>
    );
  }

  return <Image src={validSrc} alt={alt} fill sizes={sizes} className={className} />;
}

function DeanOfStudentsProgramme({ deanOfStudents }: { deanOfStudents: NonNullable<AboutPageContent["deanOfStudents"]> }) {
  return (
    <>
      <section className="grid gap-6 lg:grid-cols-[380px_1fr] lg:items-stretch">
        <article className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-900/5">
          <div className="relative min-h-[440px] bg-slate-200">
            <ProfilePhoto
              src={deanOfStudents.dean.image}
              alt={deanOfStudents.dean.name}
              sizes="(min-width: 1024px) 380px, 100vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h2 className="text-2xl font-black leading-tight">{deanOfStudents.dean.name}</h2>
              <p className="mt-1 text-sm font-bold text-white/80">{deanOfStudents.dean.title}</p>
            </div>
          </div>
        </article>

        <article className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8 lg:p-10">
          <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-[#0B6232] text-[#FFC66B]">
            <MessageCircle className="size-6" />
          </div>
          <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#0B6232]">Message from the Dean of Students</p>
          <div className="mt-5 space-y-5">
            {deanOfStudents.dean.message.map((paragraph) => (
              <p key={paragraph} className="max-w-4xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {deanOfStudents.commitments.map((commitment, index) => {
          const Icon = index === 0 ? BookOpenCheck : index === 1 ? ShieldCheck : Sparkles;

          return (
            <article key={commitment.title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8">
              <span className="grid size-12 place-items-center rounded-2xl bg-[#FFC66B]/25 text-[#0B6232]">
                <Icon className="size-6" />
              </span>
              <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#0B6232]">Student Development</p>
              <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950">{commitment.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{commitment.text}</p>
            </article>
          );
        })}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <article className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8 lg:p-10">
          <div className="flex items-start gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#0B6232] text-[#FFC66B]">
              <UsersRound className="size-6" />
            </span>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0B6232]">Student Life</p>
              <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">What Students Are Encouraged To Do</h2>
            </div>
          </div>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {deanOfStudents.studentActions.map((action, index) => (
              <li key={action} className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-4 text-sm leading-6 text-slate-700 sm:text-base">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-[#FFC66B]/30 text-[10px] font-black text-[#0B6232]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{action}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8">
          <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-[#0B6232]/10 text-[#0B6232]">
            <HeartHandshake className="size-6" />
          </div>
          <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#0B6232]">Office Commitment</p>
          <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950">Welfare, Guidance, Success</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {deanOfStudents.officeAreas.map((area) => (
              <span key={area} className="rounded-full border border-[#0B6232]/15 bg-[#0B6232]/5 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#0B6232]">
                {area}
              </span>
            ))}
          </div>
        </article>
      </section>

      <section className="overflow-hidden rounded-3xl bg-[#0B6232] p-7 text-white shadow-2xl shadow-[#0B6232]/20 sm:p-10">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FFC66B]">Responsible Citizens</p>
        <h2 className="mt-3 max-w-5xl text-3xl font-black leading-tight sm:text-4xl">{deanOfStudents.closing}</h2>
      </section>
    </>
  );
}

function LibraryProgramme({ libraryPage }: { libraryPage: NonNullable<AboutPageContent["libraryPage"]> }) {
  return (
    <>
      <section className="grid gap-6 lg:grid-cols-[380px_1fr] lg:items-stretch">
        <article className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-900/5">
          <div className="relative min-h-[440px] bg-slate-200">
            <Image
              src={libraryPage.librarian.image}
              alt={libraryPage.librarian.name}
              fill
              sizes="(min-width: 1024px) 380px, 100vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h2 className="text-2xl font-black leading-tight">{libraryPage.librarian.name}</h2>
              <p className="mt-1 text-sm font-bold text-white/80">{libraryPage.librarian.title}</p>
            </div>
          </div>
        </article>

        <article className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8 lg:p-10">
          <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#0B6232]">University Librarian&apos;s Message</p>
          <div className="mt-3 space-y-5">
            {libraryPage.librarian.message.map((paragraph) => (
              <p key={paragraph} className="max-w-4xl text-[13px] leading-6 text-slate-600 sm:text-sm sm:leading-7">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </section>

      {libraryPage.gallery && (
        <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0B6232]">Library Photos</p>
              <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">Inside the KCU Library</h2>
            </div>
            <BookOpenCheck className="hidden size-9 text-[#FFC66B] sm:block" />
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {libraryPage.gallery.map((photo) => (
              <figure key={photo.image} className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-50">
                <div className="relative aspect-[4/3] bg-slate-100">
                  <Image
                    src={photo.image}
                    alt={photo.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="px-4 py-3 text-sm font-bold text-slate-700">{photo.title}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <section className="overflow-hidden rounded-3xl bg-[#0B6232] text-white shadow-2xl shadow-[#0B6232]/20">
        <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[260px_1fr] lg:p-10 lg:items-center">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FFC66B]">Library Theme</p>
            <h2 className="mt-2 text-2xl font-black leading-tight">Academic Excellence, Research, Innovation</h2>
          </div>
          <p className="text-base leading-8 text-white/80 sm:text-lg sm:leading-9">{libraryPage.theme}</p>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#FFC66B]/25 text-[#0B6232]">
              <ShieldCheck className="size-6" />
            </span>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0B6232]">Mission</p>
              <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950">Exceptional Library Services</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{libraryPage.mission}</p>
            </div>
          </div>
        </article>

        <article className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#0B6232]/10 text-[#0B6232]">
              <Sparkles className="size-6" />
            </span>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0B6232]">Vision</p>
              <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950">Knowledge Hub</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{libraryPage.vision}</p>
            </div>
          </div>
        </article>
      </section>

      <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8 lg:p-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0B6232]">Core Values</p>
            <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">How the Library Serves Users</h2>
          </div>
          <BookOpenCheck className="hidden size-9 text-[#FFC66B] sm:block" />
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {libraryPage.values.map((value) => (
            <article key={value.name} className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5">
              <div className="grid size-9 place-items-center rounded-xl bg-[#0B6232] text-sm font-black text-[#FFC66B]">
                {value.name.slice(0, 1)}
              </div>
              <h3 className="mt-4 text-base font-black leading-tight text-slate-950">{value.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <article className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8 lg:p-10">
          <div className="flex items-start gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#0B6232] text-[#FFC66B]">
              <BookOpenCheck className="size-6" />
            </span>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0B6232]">Remote Access</p>
              <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">How to Access E-resources</h2>
            </div>
          </div>
          <ol className="mt-8 grid gap-3">
            {libraryPage.eResourcesSteps.map((step, index) => (
              <li key={step} className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-4 text-sm leading-6 text-slate-700 sm:text-base">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-[#FFC66B]/30 text-[10px] font-black text-[#0B6232]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </article>

        <aside className="grid gap-6">
          <article className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8">
            <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-[#FFC66B]/25 text-[#0B6232]">
              <Clock className="size-6" />
            </div>
            <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#0B6232]">Library Hours</p>
            <div className="mt-5 grid gap-3">
              {libraryPage.hours.map((hour) => (
                <div key={hour.label} className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#0B6232]">{hour.label}</p>
                  <p className="mt-1 text-base font-black leading-tight text-slate-950">{hour.value}</p>
                </div>
              ))}
            </div>
          </article>
        </aside>
      </section>
    </>
  );
}

function CounsellingProgramme({ counselling }: { counselling: NonNullable<AboutPageContent["counselling"]> }) {
  return (
    <>
      <section className="grid gap-6 lg:grid-cols-[380px_1fr] lg:items-stretch">
        <article className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-900/5">
          <div className="relative min-h-[440px] bg-slate-200">
            <ProfilePhoto
              src={counselling.counselor.image}
              alt={counselling.counselor.name}
              sizes="(min-width: 1024px) 380px, 100vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h2 className="text-2xl font-black leading-tight">{counselling.counselor.name}</h2>
              <p className="mt-1 text-sm font-bold text-white/80">{counselling.counselor.title}</p>
            </div>
          </div>
        </article>

        <article className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8 lg:p-10">
          <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-[#0B6232] text-[#FFC66B]">
            <MessageCircle className="size-6" />
          </div>
          <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#0B6232]">Message from the Counselor</p>
          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
            {counselling.counselor.message}
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {counselling.supportChannels.map((channel) => (
              <span key={channel} className="rounded-full border border-[#0B6232]/15 bg-[#0B6232]/5 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#0B6232]">
                {channel}
              </span>
            ))}
          </div>
        </article>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#FFC66B]/25 text-[#0B6232]">
              <ShieldCheck className="size-6" />
            </span>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0B6232]">Vision</p>
              <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950">Centre of Excellence</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{counselling.vision}</p>
            </div>
          </div>
        </article>

        <article className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#0B6232]/10 text-[#0B6232]">
              <HeartHandshake className="size-6" />
            </span>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0B6232]">Mission</p>
              <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950">Holistic Wellbeing</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{counselling.mission}</p>
            </div>
          </div>
        </article>
      </section>

      <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8 lg:p-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0B6232]">Our Core Values</p>
            <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">How Support Is Offered</h2>
          </div>
          <Sparkles className="hidden size-9 text-[#FFC66B] sm:block" />
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {counselling.values.map((value) => (
            <div key={value} className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5">
              <div className="grid size-9 place-items-center rounded-xl bg-[#0B6232] text-sm font-black text-[#FFC66B]">
                {value.slice(0, 1)}
              </div>
              <p className="mt-4 text-sm font-black leading-6 text-slate-900">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-900/5">
        <div className="border-b border-slate-100 p-6 sm:p-8 lg:p-10">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0B6232]">Are You Grappling With?</p>
          <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">Academic and Psychosocial Support Areas</h2>
        </div>
        <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-2 lg:p-10">
          {counselling.concernAreas.map((area, areaIndex) => {
            const Icon = areaIndex === 0 ? BookOpenCheck : HeartHandshake;

            return (
              <article key={area.title} className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[#0B6232] text-[#FFC66B]">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-xl font-black leading-tight text-slate-950">{area.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{area.summary}</p>
                  </div>
                </div>
                <ul className="mt-6 grid gap-3">
                  {area.items.map((item, itemIndex) => (
                    <li key={item} className="flex gap-3 rounded-2xl border border-white bg-white p-4 text-sm leading-6 text-slate-700 shadow-sm shadow-slate-900/5">
                      <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-[#FFC66B]/30 text-[10px] font-black text-[#0B6232]">
                        {String(itemIndex + 1).padStart(2, "0")}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="overflow-hidden rounded-3xl bg-[#0B6232] text-white shadow-2xl shadow-[#0B6232]/20">
        <div className="grid gap-7 p-6 sm:p-8 lg:grid-cols-[1fr_420px] lg:p-10">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FFC66B]">Break the Silence</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">{counselling.closing}</h2>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
              Find the Counselling and Guidance Programme at the Wellness Centre during weekday service hours.
            </p>
          </div>
          <div className="grid gap-3">
            {counselling.access.map((detail, index) => {
              const Icon = index === 0 ? MapPin : index === 1 ? CalendarDays : Clock;

              return (
                <div key={detail.label} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[#FFC66B] text-[#0B6232]">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#FFC66B]">{detail.label}</p>
                    <p className="mt-1 text-base font-black leading-tight">{detail.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function FeesStructurePage() {
  const totalCourses = feeProgrammes.reduce((total, group) => total + group.courses.length, 0);
  const totalTables = feeProgrammes.length;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-16 sm:pt-20 lg:pt-[8.5rem]">
        <div className="border-b border-slate-100 bg-[#FFFFFF]">
          <div className="mx-auto flex max-w-[1440px] items-center gap-2 overflow-x-auto px-4 py-3 text-xs text-slate-500 sm:px-6 lg:px-8">
            <Link href="/" className="shrink-0 hover:text-[#0B6232]">Home</Link>
            <ChevronRight className="size-3.5 shrink-0" />
            <Link href="/admissions" className="shrink-0 hover:text-[#0B6232]">Admissions</Link>
            <ChevronRight className="size-3.5 shrink-0" />
            <span className="shrink-0 font-semibold text-[#0B6232]">Fees Structure</span>
          </div>
        </div>

        <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1800&q=80')" }} />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
          <div className="absolute -bottom-20 right-12 hidden size-72 rounded-full border border-white/10 lg:block" />
          <div className="relative z-10 mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[1fr_380px] lg:items-end">
            <div>
              <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-[#FFC66B] backdrop-blur">Admissions</p>
              <h1 className="mt-5 max-w-4xl font-serif text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">Fees Structure by Course</h1>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
                Review the official programme fee structure by school, duration, Uganda student fees, and international student fees.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild className="h-11 rounded-xl bg-[#FFC66B] px-5 font-black text-[#0B6232] hover:bg-[#FFC66B]">
                  <Link href="https://apply.kcu.ac.ug/">Apply Online <ArrowRight className="ml-2 size-4" /></Link>
                </Button>
                <Button asChild variant="outline" className="h-11 rounded-xl border-2 border-white bg-transparent px-5 font-black text-white hover:bg-white hover:text-[#0B6232]">
                  <Link href="/admissions/admission-requirements">Admission Requirements</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/10 p-5 text-white shadow-2xl backdrop-blur">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FFC66B]">At a glance</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-3xl font-black">{totalCourses}</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white/70">Programmes</p>
                </div>
                <div className="rounded-2xl bg-[#FFC66B] p-4 text-[#0B6232]">
                  <p className="text-3xl font-black">{totalTables}</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em]">Fee Tables</p>
                </div>
              </div>
              <p className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4 text-xs leading-6 text-white/75">
                Undergraduate and degree programme figures are listed per semester. Certificate programme figures are listed by the course duration shown.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50/70 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-6 lg:grid-cols-[1fr_340px] lg:items-start">
              <div className="space-y-8">
                {feeProgrammes.map((group) => (
                  <section key={`${group.category}-${group.group}`} className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-900/5">
                    <div className="flex flex-col gap-4 border-b border-slate-100 bg-[#0B6232] p-6 text-white sm:flex-row sm:items-end sm:justify-between lg:p-8">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#FFC66B]">{group.category}</p>
                        <h2 className="mt-2 text-2xl font-black leading-tight sm:text-3xl">{group.group}</h2>
                        <p className="mt-2 max-w-3xl text-sm leading-7 text-white/75">{group.summary}</p>
                      </div>
                      <div className="w-fit rounded-2xl bg-white/10 px-4 py-3 text-center">
                        <p className="text-2xl font-black text-[#FFC66B]">{group.courses.length}</p>
                        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/70">{group.feeLabel}</p>
                      </div>
                    </div>

                    <div className="grid gap-3 p-3 md:hidden">
                      {group.courses.map((course) => (
                        <article key={course.course} className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4 shadow-sm">
                          <div className="flex items-start justify-between gap-3">
                            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#0B6232] text-sm font-black text-[#FFC66B]">
                              {course.code}
                            </span>
                            <span className="rounded-full bg-[#0B6232]/10 px-3 py-1 text-right text-[11px] font-black leading-4 text-[#0B6232]">
                              {group.feeLabel}
                            </span>
                          </div>
                          <h3 className="mt-4 text-base font-black leading-snug text-slate-950">{course.course}</h3>
                          <dl className="mt-4 grid gap-3 text-sm">
                            <div className="rounded-xl bg-white p-3">
                              <dt className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">Duration</dt>
                              <dd className="mt-1 font-semibold leading-5 text-slate-700">{course.duration}</dd>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                              <div className="rounded-xl bg-white p-3">
                                <dt className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">Uganda</dt>
                                <dd className="mt-1 font-black leading-5 text-[#0B6232]">{course.uganda}</dd>
                              </div>
                              <div className="rounded-xl bg-white p-3">
                                <dt className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">Int&apos;l</dt>
                                <dd className="mt-1 font-black leading-5 text-[#0B6232]">{course.international}</dd>
                              </div>
                            </div>
                          </dl>
                        </article>
                      ))}
                    </div>

                    <div className="hidden overflow-x-auto md:block">
                      <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                        <thead>
                          <tr className="border-b border-slate-100 bg-slate-50 text-[11px] uppercase tracking-[0.14em] text-slate-500">
                            <th className="px-5 py-4 font-black">No.</th>
                            <th className="px-5 py-4 font-black">Course / Programme</th>
                            <th className="px-5 py-4 font-black">Duration</th>
                            <th className="px-5 py-4 font-black">Uganda</th>
                            <th className="px-5 py-4 font-black">Int&apos;l</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {group.courses.map((course) => (
                            <tr key={course.course} className="align-top transition hover:bg-[#FFC66B]/10">
                              <td className="px-5 py-4 font-black text-[#0B6232]">{course.code}</td>
                              <td className="px-5 py-4">
                                <p className="font-black text-slate-950">{course.course}</p>
                              </td>
                              <td className="px-5 py-4 text-slate-700">{course.duration}</td>
                              <td className="px-5 py-4 font-black text-[#0B6232]">{course.uganda}</td>
                              <td className="px-5 py-4 font-black text-[#0B6232]">{course.international}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>
                ))}
              </div>

              <aside className="space-y-6 lg:sticky lg:top-28">
                <section className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-900/5">
                  <div className="bg-[#0B6232] p-6 text-white">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FFC66B]">Application Requirements</p>
                    <h2 className="mt-2 text-2xl font-black leading-tight">Documents to submit</h2>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {applicationRequirements.map((requirement, index) => (
                      <div key={requirement} className="flex gap-4 p-5">
                        <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-[#FFC66B]/25 text-xs font-black text-[#0B6232]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className="pt-1 text-sm font-black leading-6 text-slate-950">{requirement}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-3xl border border-[#FFC66B]/40 bg-[#FFC66B]/15 p-6 shadow-xl shadow-slate-900/5">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0B6232]">Payment Note</p>
                  <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950">Important fee guidance</h2>
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
                    <li className="flex gap-3"><span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-[#0B6232] text-[10px] font-black text-[#FFC66B]">✓</span>Students must enroll within the required registration period.</li>
                    <li className="flex gap-3"><span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-[#0B6232] text-[10px] font-black text-[#FFC66B]">✓</span>Tuition may differ by programme depending on study requirements.</li>
                    <li className="flex gap-3"><span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-[#0B6232] text-[10px] font-black text-[#FFC66B]">✓</span>Official figures should be confirmed through Admissions before payment.</li>
                  </ul>
                </section>

                <section className="rounded-3xl bg-[#0B6232] p-6 text-white shadow-2xl shadow-[#0B6232]/20">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FFC66B]">Ready to apply?</p>
                  <h2 className="mt-2 text-2xl font-black leading-tight">Start your application online</h2>
                  <p className="mt-3 text-sm leading-7 text-white/75">Use the applicant portal to begin your admission process and receive course-specific guidance.</p>
                  <Button asChild className="mt-6 h-11 w-full rounded-xl bg-[#FFC66B] px-5 font-black text-[#0B6232] hover:bg-[#FFC66B]">
                    <Link href="https://apply.kcu.ac.ug/">Apply Online <ArrowRight className="ml-2 size-4" /></Link>
                  </Button>
                </section>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

const visitingProfessors = [
  {
    name: "Visiting Professor 01",
    focus: "Medicine, Health and Life Sciences",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85",
    description:
      "Placeholder profile for an international academic contributing lectures, mentorship, and specialist seminars.",
  },
  {
    name: "Visiting Professor 02",
    focus: "Law and Management Sciences",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=85",
    description:
      "Placeholder profile for a visiting scholar supporting professional learning, research supervision, and public lectures.",
  },
  {
    name: "Visiting Professor 03",
    focus: "Science, Computing and Engineering",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=85",
    description:
      "Placeholder profile for a research collaborator strengthening innovation, digital skills, and technical exchange.",
  },
];

const mouHighlights = [
  {
    title: "Student Financing MOU",
    partner: "Higher Education Students' Financing Scheme",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=85",
    description:
      "KCU works with student financing partners to improve access to higher education and support eligible learners through formal funding pathways.",
  },
  {
    title: "International Exchange MOU",
    partner: "Global academic partners",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=85",
    description:
      "Exchange partnerships create opportunities for academic mobility, shared seminars, visiting scholars, and student exposure to wider learning environments.",
  },
  {
    title: "Digital Infrastructure MOU",
    partner: "Research and education networks",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85",
    description:
      "Technology-focused collaborations strengthen digital learning, research connectivity, institutional systems, and knowledge sharing.",
  },
];

const researchCollaborations = [
  {
    area: "Health Sciences Research",
    description:
      "Collaborative research in clinical medicine, nursing, laboratory sciences, public health, and community health priorities.",
  },
  {
    area: "Law, Governance and Management",
    description:
      "Joint inquiry into legal systems, enterprise development, leadership, public policy, governance, and institutional accountability.",
  },
  {
    area: "Computing, Energy and Innovation",
    description:
      "Research partnerships in digital forensics, cyber security, petroleum geoscience, artificial intelligence, and applied technology.",
  },
];

function CollaborationsPartnershipsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-16 sm:pt-20 lg:pt-[8.5rem]">
        <div className="border-b border-slate-100 bg-[#FFFFFF]">
          <div className="mx-auto flex max-w-[1440px] items-center gap-2 overflow-x-auto px-4 py-3 text-xs text-slate-500 sm:px-6 lg:px-8">
            <Link href="/" className="shrink-0 hover:text-[#0B6232]">Home</Link>
            <ChevronRight className="size-3.5 shrink-0" />
            <Link href="/about" className="shrink-0 hover:text-[#0B6232]">About Us</Link>
            <ChevronRight className="size-3.5 shrink-0" />
            <span className="shrink-0 font-semibold text-[#0B6232]">Collaborations &amp; Partnerships</span>
          </div>
        </div>

        <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=1800&q=85')" }} />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-transparent" />
          <div className="relative z-10 mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[1fr_380px] lg:items-end">
            <div>
              <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-[#FFC66B] backdrop-blur">Global Network</p>
              <h1 className="mt-5 max-w-4xl font-serif text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">Collaborations &amp; Partnerships</h1>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
                KCU builds academic partnerships through visiting professors, formal MOUs, research collaboration, exchange opportunities, and shared institutional development.
              </p>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/10 p-5 text-white shadow-2xl backdrop-blur">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FFC66B]">Partnership Focus</p>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  { value: "3", label: "Visiting Professors" },
                  { value: "3", label: "MOU Areas" },
                  { value: "3", label: "Research Themes" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl bg-white/10 p-3 text-center">
                    <p className="text-2xl font-black">{item.value}</p>
                    <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.12em] text-white/70">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50/70 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-[1440px] space-y-14">
            <section>
              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0B6232]">Academic Exchange</p>
                  <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">Visiting Professors</h2>
                </div>
                <p className="max-w-2xl text-sm leading-7 text-slate-600">
                  Placeholder profiles for visiting academics who support teaching, research mentorship, seminars, and knowledge exchange.
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-3">
                {visitingProfessors.map((professor) => (
                  <article key={professor.name} className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-900/5">
                    <div className="relative aspect-[4/3] bg-slate-200">
                      <Image src={professor.image} alt={professor.name} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                    </div>
                    <div className="p-6">
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#0B6232]">{professor.focus}</p>
                      <h3 className="mt-2 text-xl font-black leading-tight text-slate-950">{professor.name}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{professor.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <div className="mb-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0B6232]">Formal Partnerships</p>
                <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">Memoranda of Understanding</h2>
              </div>
              <div className="grid gap-5 lg:grid-cols-3">
                {mouHighlights.map((mou) => (
                  <article key={mou.title} className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-900/5">
                    <div className="relative h-48 bg-slate-200">
                      <Image src={mou.image} alt={mou.title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
                    </div>
                    <div className="p-6">
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#0B6232]">{mou.partner}</p>
                      <h3 className="mt-2 text-xl font-black leading-tight text-slate-950">{mou.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{mou.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-900/5">
              <div className="grid gap-0 lg:grid-cols-[360px_1fr]">
                <div className="bg-[#0B6232] p-7 text-white sm:p-8">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FFC66B]">Research</p>
                  <h2 className="mt-2 text-2xl font-black leading-tight sm:text-3xl">Research Collaborations</h2>
                  <p className="mt-4 text-sm leading-7 text-white/75">
                    KCU supports collaborative inquiry that connects faculty, students, visiting scholars, and partner institutions around practical societal needs.
                  </p>
                </div>
                <div className="grid gap-0 divide-y divide-slate-100">
                  {researchCollaborations.map((item, index) => (
                    <article key={item.area} className="grid gap-4 p-6 sm:grid-cols-[70px_1fr] sm:p-8">
                      <div className="grid size-14 place-items-center rounded-2xl bg-[#FFC66B]/25 text-sm font-black text-[#0B6232]">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-slate-950">{item.area}</h3>
                        <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="rounded-3xl bg-[#0B6232] p-7 text-white shadow-2xl shadow-[#0B6232]/20 sm:p-10">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FFC66B]">Partner with KCU</p>
                  <h2 className="mt-2 text-2xl font-black leading-tight">Build academic, research, and exchange partnerships.</h2>
                </div>
                <Button asChild className="h-12 rounded-xl bg-[#FFC66B] px-6 font-black text-[#0B6232] hover:bg-[#FFC66B]">
                  <Link href="/about">Back to About Us <ArrowRight className="ml-2 size-4" /></Link>
                </Button>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

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
  const featuredArticle = newsletterArticles[0];
  const remainingArticles = newsletterArticles.slice(1);

  return (
    <>
      <Navbar />
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
                  <Link href={featuredArticle.href} className="mt-7 inline-flex items-center rounded-xl bg-[#FFC66B] px-5 py-3 text-sm font-black text-[#0B6232] transition hover:translate-x-1">
                    Read Article <ArrowRight className="ml-2 size-4" />
                  </Link>
                </div>
                <div className="p-8 sm:p-10">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-[#FFC66B]/25 px-3 py-1 text-xs font-black text-[#0B6232]">{featuredArticle.category}</span>
                    <span className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">{featuredArticle.date}</span>
                  </div>
                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {newsletterArticles.slice(0, 3).map((article, index) => (
                      <div key={`${article.date}-${article.title}`} className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                        <p className="text-3xl font-black text-[#0B6232]">{String(index + 1).padStart(2, "0")}</p>
                        <p className="mt-2 text-xs font-black uppercase tracking-wide text-slate-500">{article.category}</p>
                      </div>
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
                  <Link href={article.href} className="mx-6 mb-6 inline-flex items-center text-sm font-black text-[#0B6232] transition group-hover:text-slate-950">
                    Read Article <ArrowRight className="ml-2 size-4 transition group-hover:translate-x-1" />
                  </Link>
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
      </main>
      <Footer />
    </>
  );
}

const studentLinks = [
  { label: "Students", href: "/student" },
  { label: "Student Guild", href: "/student/guild" },
  { label: "Life at KCU", href: "/student/campus-life" },
  { label: "Dean of Students", href: "/student/dean-of-students" },
];

function CampusLifePage() {
  const socialActivities = [
    "Student associations",
    "Co-curricular activities",
    "Cultural activities",
    "Community service projects",
    "Academic seminars",
    "Social gatherings",
    "Student Guild initiatives",
    "Leadership and volunteering",
  ];
  const recreation = [
    "University sports",
    "Recreation and wellness",
    "Student support groups",
    "Counselling and guidance",
    "Mentorship sessions",
    "Personal development activities",
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-16 sm:pt-20 lg:pt-[8.5rem]">
        <div className="border-b border-slate-100 bg-[#FFFFFF]">
          <div className="mx-auto flex max-w-[1440px] items-center gap-2 px-4 py-3 text-xs text-slate-500 sm:px-6 lg:px-8">
            <Link href="/" className="hover:text-[#0B6232]">Home</Link>
            <ChevronRight className="size-3.5" />
            <Link href="/student" className="hover:text-[#0B6232]">Students</Link>
            <ChevronRight className="size-3.5" />
            <span className="font-semibold text-[#0B6232]">Life at KCU</span>
          </div>
        </div>

        <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=85')" }} />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
          <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#FFC66B]">Campus Life</p>
              <h1 className="mt-3 max-w-4xl font-serif text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
                Life at <span className="block text-[#FFC66B]">King Ceasor University</span>
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
                A vibrant blend of academic excellence, social engagement, personal growth, leadership, culture, recreation, and wellbeing.
              </p>
              <Button asChild className="mt-7 h-11 rounded-xl bg-[#FFC66B] px-5 font-black text-[#0B6232] hover:bg-[#FFC66B]">
                <Link href="/student">Back to Students</Link>
              </Button>
            </div>
            <div className="inline-flex w-fit items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white">
              Scroll
              <span className="block h-8 w-px bg-[#FFC66B]" />
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[260px_1fr] lg:gap-14">
            <aside className="hidden lg:block">
              <nav className="sticky top-24 rounded-2xl border border-slate-100 bg-[#FFFFFF] p-5 shadow-sm">
                <p className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Students</p>
                <ul className="space-y-1">
                  {studentLinks.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold transition ${
                          item.href === "/student/campus-life"
                            ? "bg-[#0B6232] text-white"
                            : "text-slate-700 hover:bg-white hover:text-[#0B6232]"
                        }`}
                      >
                        {item.href === "/student/campus-life" && <ChevronRight className="size-3.5 shrink-0" />}
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            <div className="space-y-14">
              <div className="lg:hidden -mx-4 overflow-x-auto px-4 sm:-mx-6 sm:px-6">
                <div className="flex gap-2 border-b border-slate-200 pb-0">
                  {studentLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`shrink-0 border-b-2 px-3 pb-3 pt-1 text-xs font-bold transition ${
                        item.href === "/student/campus-life"
                          ? "border-[#0B6232] text-[#0B6232]"
                          : "border-transparent text-slate-500 hover:text-slate-800"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <section>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0B6232]">Students</p>
                <h2 className="mt-2 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">A Vibrant Student Community</h2>
                <div className="mt-5 grid gap-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                  <p>
                    Life at King Ceasor University is shaped by academic excellence, student leadership, social connection, and a commitment to helping each student fulfill their potential.
                  </p>
                  <p>
                    At KCU, students are supported by a thriving community and a Student Guild that links students with university management, advocates for student interests, and creates opportunities for personal and professional growth.
                  </p>
                  <p>
                    Students can participate in associations, campus initiatives, sports, cultural activities, community service, academic seminars, and support programmes that make university life active and meaningful.
                  </p>
                </div>
              </section>

              <section className="grid gap-6 lg:grid-cols-2">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0B6232]">Activities</p>
                  <h2 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">Social Activities</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    KCU brings students together through activities that encourage friendship, leadership, service, and a sense of belonging across the campus community.
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {socialActivities.map((activity) => (
                      <div key={activity} className="rounded-2xl border border-slate-100 bg-white p-4 text-sm font-bold text-slate-700 shadow-sm">
                        {activity}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0B6232]">Wellbeing</p>
                  <h2 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">Sports &amp; Recreation</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    Students are encouraged to join university sports and wellbeing activities that support talent development, relaxation, and personal balance.
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {recreation.map((item) => (
                      <div key={item} className="rounded-2xl border border-slate-100 bg-white p-4 text-sm font-bold text-slate-700 shadow-sm">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="rounded-3xl bg-[#0B6232] p-7 text-white sm:p-10">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#FFC66B]">Need More Information?</p>
                <h2 className="mt-2 text-2xl font-black leading-tight sm:text-3xl">Have questions or need guidance?</h2>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/75 sm:text-base">
                  The Dean of Students, Student Guild, and support teams are available to help students navigate academic issues, wellbeing, housing, guidance, and campus life.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button asChild className="h-11 rounded-xl bg-[#FFC66B] px-5 font-black text-[#0B6232] hover:bg-[#FFC66B]">
                    <Link href="/student/dean-of-students">Dean of Students</Link>
                  </Button>
                  <Button asChild variant="outline" className="h-11 rounded-xl border-2 border-white bg-transparent px-5 font-black text-white hover:bg-white hover:text-[#0B6232]">
                    <Link href="/student/guild">Student Guild</Link>
                  </Button>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function AboutContentPage({ page }: { page: AboutPageContent }) {
  const isServicesPage = page.eyebrow === "Services" || page.eyebrow === "Library";
  const hasPageSections = page.sections.length > 0;
  const parentLabel = page.eyebrow === "Admissions" ? "Admissions" : page.eyebrow === "Academics" || page.eyebrow === "Courses" ? "Academics" : isServicesPage ? "Services" : page.eyebrow === "Student Life" || page.eyebrow === "Student Welfare" || page.eyebrow === "Student Leadership" ? "Student" : "About Us";
  const parentHref = page.eyebrow === "Admissions" ? "/admissions" : page.eyebrow === "Academics" || page.eyebrow === "Courses" ? "/academics" : isServicesPage ? "/services" : page.eyebrow === "Student Life" || page.eyebrow === "Student Welfare" || page.eyebrow === "Student Leadership" ? "/student" : "/about";
  const heroImage = page.heroImage ?? "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1800&q=80";

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-16 sm:pt-20 lg:pt-[8.5rem]">
        <div className="border-b border-slate-100 bg-[#FFFFFF]">
          <div className="mx-auto flex max-w-[1440px] items-center gap-2 overflow-x-auto px-4 py-3 text-xs text-slate-500 sm:px-6 lg:px-8">
            <Link href="/" className="shrink-0 hover:text-[#0B6232]">Home</Link>
            <ChevronRight className="size-3.5 shrink-0" />
            <Link href={parentHref} className="shrink-0 hover:text-[#0B6232]">{parentLabel}</Link>
            <ChevronRight className="size-3.5 shrink-0" />
            <span className="shrink-0 font-semibold text-[#0B6232]">{page.title}</span>
          </div>
        </div>

        <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${heroImage}')` }} />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/10" />
          <div className="absolute -bottom-24 right-10 hidden size-72 rounded-full border border-white/10 lg:block" />
          <div className="absolute -right-10 top-10 hidden size-40 rounded-full bg-[#FFC66B]/10 blur-2xl lg:block" />
          <div className="relative z-10 mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <p className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-[#FFC66B] backdrop-blur">
                {page.eyebrow}
              </p>
              <h1 className="mt-5 max-w-4xl font-serif text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">{page.title}</h1>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">{page.intro}</p>
              {page.cta && (
                <Button asChild className="mt-6 h-11 rounded-xl bg-[#FFC66B] px-6 font-black text-[#0B6232] hover:bg-[#FFC66B]">
                  <Link href={page.cta.href}>{page.cta.label} <ArrowRight className="ml-2 size-4" /></Link>
                </Button>
              )}
            </div>
          </div>
        </section>

        <section className="bg-slate-50/70 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className={`mx-auto grid max-w-[1440px] gap-8 lg:items-start ${hasPageSections ? "lg:grid-cols-[300px_1fr]" : "lg:grid-cols-1"}`}>
            {hasPageSections && (
              <aside className="hidden lg:block">
                <div className="sticky top-28 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-900/5">
                  <div className="border-b border-slate-100 bg-[#0B6232] p-5 text-white">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FFC66B]">On this page</p>
                    <h2 className="mt-1 text-lg font-black leading-tight">{page.title}</h2>
                  </div>
                  <nav className="p-3">
                    {page.sections.map((section, index) => (
                      <a
                        key={section.title}
                        href={`#section-${index}`}
                        className="group flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-bold text-slate-600 transition hover:bg-slate-50 hover:text-[#0B6232]"
                      >
                        <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-[#FFC66B]/20 text-xs font-black text-[#0B6232] transition group-hover:bg-[#0B6232] group-hover:text-white">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="leading-snug">{section.title}</span>
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>
            )}

            <div className="space-y-6">
              {hasPageSections && (
                <div className="lg:hidden -mx-4 overflow-x-auto px-4 sm:-mx-6 sm:px-6">
                  <div className="flex gap-2 pb-2">
                    {page.sections.map((section, index) => (
                      <a
                        key={section.title}
                        href={`#section-${index}`}
                        className="shrink-0 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-black text-slate-600 shadow-sm hover:border-[#0B6232]/30 hover:text-[#0B6232]"
                      >
                        {section.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {page.qualityAssurance && (
                <>
                  <section className="grid min-w-0 gap-5 lg:grid-cols-[380px_1fr] lg:items-stretch">
                    <article className="min-w-0 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl shadow-slate-900/5 sm:rounded-3xl">
                      <div className="relative aspect-[4/5] bg-slate-200 sm:min-h-[420px] sm:aspect-auto">
                        <ProfilePhoto
                          src={page.qualityAssurance.director.image}
                          alt={page.qualityAssurance.director.name}
                          sizes="(min-width: 1024px) 380px, 100vw"
                          className="object-cover object-[center_18%]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white sm:p-6">
                          <h2 className="mt-2 text-xl font-black leading-tight sm:text-2xl">{page.qualityAssurance.director.name}</h2>
                          <p className="mt-1 text-sm font-bold text-white/80">{page.qualityAssurance.director.title}</p>
                        </div>
                      </div>
                    </article>

                    <article className="min-w-0 rounded-2xl border border-slate-100 bg-white p-5 shadow-xl shadow-slate-900/5 sm:rounded-3xl sm:p-8 lg:p-10">
                     
                      <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#0B6232] sm:mt-6 sm:tracking-[0.2em]">Message from the Director Quality Assurance</p>
                      <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-9">
                        {page.qualityAssurance.director.message}
                      </p>
                    </article>
                  </section>

                  <section className="min-w-0 rounded-2xl border border-slate-100 bg-white p-5 shadow-xl shadow-slate-900/5 sm:rounded-3xl sm:p-8 lg:p-10">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0B6232]">Quality Assurance Team</p>
                        <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">Staff Team</h2>
                      </div>
                      <div className="inline-flex items-center gap-2 text-sm font-bold text-slate-500">
                        <UsersRound className="size-4 text-[#0B6232]" />
                        <span>Team Members</span>
                      </div>
                    </div>
                    <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
                      {page.qualityAssurance.staff.map((member) => (
                        <article key={member.name} className="rounded-xl border border-slate-100 bg-white p-3 text-center shadow-xl shadow-slate-900/10 sm:p-4">
                          <div className="relative mx-auto aspect-[4/5] w-full max-w-[220px] overflow-hidden rounded-lg bg-slate-100 sm:aspect-[3/4] sm:w-3/4">
                            <ProfilePhoto
                              src={member.image}
                              alt={member.name}
                              sizes="(min-width: 1280px) 210px, (min-width: 640px) 34vw, 75vw"
                              className="object-cover object-top"
                            />
                          </div>
                          <div className="mx-auto px-2 py-4 sm:px-3 sm:py-5">
                            <h3 className="text-base font-black leading-tight text-slate-950">{member.name}</h3>
                            <p className="mt-2 text-sm leading-5 text-slate-500">{member.role}</p>
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>

                  <section className="min-w-0 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl shadow-slate-900/5 sm:rounded-3xl">
                    <div className="border-b border-slate-100 p-5 sm:p-8 lg:p-10">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0B6232]">What We Do</p>
                      <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">Quality Assurance Responsibilities</h2>
                    </div>
                    <div className="grid gap-3 p-5 md:hidden">
                      {page.qualityAssurance.whatWeDo.map((item) => (
                        <article key={item.area} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                          <h3 className="text-sm font-black text-slate-950">{item.area}</h3>
                          <p className="mt-2 text-sm leading-7 text-slate-600">{item.details}</p>
                        </article>
                      ))}
                    </div>
                    <div className="hidden overflow-x-auto md:block">
                      <table className="w-full min-w-[720px] border-collapse text-left">
                        <thead className="bg-[#0B6232] text-white">
                          <tr>
                            <th className="w-56 px-6 py-4 text-xs font-black uppercase tracking-[0.16em] text-[#FFC66B]">Area</th>
                            <th className="px-6 py-4 text-xs font-black uppercase tracking-[0.16em] text-[#FFC66B]">Description</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {page.qualityAssurance.whatWeDo.map((item) => (
                            <tr key={item.area} className="bg-white align-top">
                              <th className="px-6 py-5 text-sm font-black text-slate-950 sm:text-base">{item.area}</th>
                              <td className="px-6 py-5 text-sm leading-7 text-slate-600 sm:text-base">{item.details}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>
                </>
              )}

              {page.deanOfStudents && <DeanOfStudentsProgramme deanOfStudents={page.deanOfStudents} />}

              {page.libraryPage && <LibraryProgramme libraryPage={page.libraryPage} />}

              {page.counselling && <CounsellingProgramme counselling={page.counselling} />}

              {page.sections.map((section, index) => (
                <article
                  id={`section-${index}`}
                  key={section.title}
                  className="group scroll-mt-28 overflow-hidden rounded-3xl border border-slate-100 bg-[#FFFFFF] shadow-xl shadow-slate-900/5 transition hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-slate-900/10"
                >
                  <div className="h-1.5 bg-gradient-to-r from-[#0B6232] via-[#FFC66B] to-[#0B6232]" />
                  <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[90px_1fr] lg:p-10">
                    <div className="flex lg:block">
                      <div className="grid size-16 place-items-center rounded-2xl bg-[#0B6232] text-lg font-black text-[#FFC66B] shadow-lg shadow-[#0B6232]/20">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#0B6232]">King Ceasor University</p>
                      <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">{section.title}</h2>
                      {section.text && (
                        <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{section.text}</p>
                      )}
                      {section.items && (
                        <ul className="mt-6 grid gap-3 md:grid-cols-2">
                          {section.items.map((item) => (
                            <li key={item} className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-4 text-sm leading-6 text-slate-700 sm:text-base">
                              <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-[#FFC66B] text-[10px] font-black text-[#0B6232]">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      <div className="mt-6">
                        <Link
                          href="https://apply.kcu.ac.ug/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl bg-[#0B6232] px-5 py-2.5 text-sm font-black text-white hover:bg-[#0B6232]/90 transition-colors"
                        >
                          Apply for a Programme <ArrowRight className="size-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}

              {page.cta && (
                <section className="overflow-hidden rounded-3xl bg-[#0B6232] p-7 text-white shadow-2xl shadow-[#0B6232]/20 sm:p-10">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FFC66B]">Next Step</p>
                      <h2 className="mt-2 text-2xl font-black leading-tight">{page.cta.heading ?? page.title}</h2>
                    </div>
                    <Button asChild className="h-12 rounded-xl bg-[#FFC66B] px-6 font-black text-[#0B6232] hover:bg-[#FFC66B]">
                      <Link href={page.cta.href}>{page.cta.label} <ArrowRight className="ml-2 size-4" /></Link>
                    </Button>
                  </div>
                </section>
              )}
            </div>
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
  const academicVariant = academicRouteVariants[currentPath];

  if (academicVariant) {
    return <AcademicProgrammesPage variant={academicVariant} />;
  }

  if (currentPath === "admissions/fees-structure") {
    return <FeesStructurePage />;
  }

  if (currentPath === "about/collaborations-partnerships") {
    return <CollaborationsPartnershipsPage />;
  }

  if (currentPath === "about/newsletter" || currentPath === "news") {
    return <NewsletterPage />;
  }

  if (currentPath === "student/campus-life") {
    return <CampusLifePage />;
  }

  if (currentPath === "student/guild") {
    return <StudentGuildPage />;
  }

  if (currentPath === "academics/graduation") {
    return <GraduationPage />;
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
