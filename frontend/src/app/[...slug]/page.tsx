import UnderConstruction from "@/components/common/UnderConstruction";
import GraduationPage from "@/components/academics/GraduationPage";
import StudentGuildPage from "@/components/student/StudentGuildPage";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, ClipboardCheck, UserRound, UsersRound } from "lucide-react";
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
        image: "",
        message:
          "Welcome to the Directorate of Quality Assurance and Control (DQA&C) at King Ceasor University. We are dedicated to promoting excellence in teaching, learning, research, and service through effective quality assurance practices. As the University's focal point for quality reviews and continuous improvement initiatives, we work closely with staff, students, and stakeholders to uphold high academic and operational standards. We invite you to explore our services and quality initiatives, and encourage you to contact us for any additional information or support.",
      },
      staff: [
        { name: "Dr. Annabella Habinka Ejiri", role: "Director Quality Assurance", image:"/"},
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
    title: "Counselling",
    intro:
      "KCU counselling and guidance support helps students navigate academic pressure, personal wellbeing, adjustment to university life, and holistic development.",
    sections: [
      {
        title: "Student Wellbeing",
        text:
          "Counselling support is part of the University's wider student welfare environment, helping learners access guidance, care, and referral support when needed.",
      },
      {
        title: "Areas of Support",
        items: [
          "Personal, social, and emotional wellbeing guidance.",
          "Support with adjustment to campus life and academic expectations.",
          "Collaboration with the Dean of Students and other support teams.",
        ],
      },
    ],
    cta: {
      label: "Dean of Students",
      href: "/student/dean-of-students",
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


const feeProgrammes = [
  {
    group: "Undergraduate Programmes",
    summary: "Degree programmes across health sciences, law, business, computing, agriculture, and energy.",
    courses: [
      { code: "01", course: "Bachelor of Medicine & Bachelor of Surgery", school: "Medicine, Health & Life Sciences", level: "Bachelor", duration: "5 years", billing: "Per semester", feeStatus: "Professional medical programme" },
      { code: "02", course: "Bachelor of Nursing Sciences", school: "Medicine, Health & Life Sciences", level: "Bachelor", duration: "4 years", billing: "Per semester", feeStatus: "Clinical training programme" },
      { code: "03", course: "Bachelor of Medical Records & Health Informatics", school: "Medicine, Health & Life Sciences", level: "Bachelor", duration: "3 years", billing: "Per semester", feeStatus: "Health informatics programme" },
      { code: "04", course: "Bachelor of Agriculture", school: "Science, Computing & Engineering", level: "Bachelor", duration: "3 years", billing: "Per semester", feeStatus: "Practical science programme" },
      { code: "05", course: "Bachelor of Laws", school: "Law & Management Sciences", level: "Bachelor", duration: "4 years", billing: "Per semester", feeStatus: "Professional law programme" },
      { code: "06", course: "Bachelor of Business Administration", school: "Law & Management Sciences", level: "Bachelor", duration: "3 years", billing: "Per semester", feeStatus: "Business and management programme" },
      { code: "07", course: "Bachelor of Computer Forensics & Criminal Investigation", school: "Science, Computing & Engineering", level: "Bachelor", duration: "3 years", billing: "Per semester", feeStatus: "Computing and investigation programme" },
      { code: "08", course: "Bachelor of Oil, Gas & Energy Management", school: "Science, Computing & Engineering", level: "Bachelor", duration: "3 years", billing: "Per semester", feeStatus: "Energy management programme" },
    ],
  },
  {
    group: "Diploma Programmes",
    summary: "Practical diploma pathways for students pursuing health and community service careers.",
    courses: [
      { code: "09", course: "Diploma in Clinical Medicine & Community Health", school: "Medicine, Health & Life Sciences", level: "Diploma", duration: "3 years", billing: "Per semester", feeStatus: "Clinical diploma programme" },
      { code: "10", course: "Diploma in Medical Laboratory Technology", school: "Medicine, Health & Life Sciences", level: "Diploma", duration: "3 years", billing: "Per semester", feeStatus: "Laboratory training programme" },
    ],
  },
  {
    group: "Certificate and Bridging Pathways",
    summary: "Certificate and short-course pathways for academic progression and practical skill development.",
    courses: [
      { code: "11", course: "Higher Education Certificate in Biological Sciences", school: "Science, Computing & Engineering", level: "Certificate", duration: "1 year", billing: "Per semester", feeStatus: "Bridging pathway" },
      { code: "12", course: "Higher Education Certificate in Physical Sciences", school: "Science, Computing & Engineering", level: "Certificate", duration: "1 year", billing: "Per semester", feeStatus: "Bridging pathway" },
      { code: "13", course: "Higher Education Certificate in Humanities", school: "Law & Management Sciences", level: "Certificate", duration: "1 year", billing: "Per semester", feeStatus: "Bridging pathway" },
      { code: "14", course: "Language Proficiency", school: "Short Courses", level: "Short Course", duration: "Short course", billing: "As communicated", feeStatus: "Short-course fee" },
      { code: "15", course: "Digital Marketing", school: "Short Courses", level: "Short Course", duration: "Short course", billing: "As communicated", feeStatus: "Short-course fee" },
      { code: "16", course: "Computer Applications", school: "Short Courses", level: "Short Course", duration: "Short course", billing: "As communicated", feeStatus: "Short-course fee" },
    ],
  },
];

const feeBreakdown = [
  { item: "Tuition fees", description: "The main academic charge for each programme and semester of study." },
  { item: "Registration fees", description: "Paid during enrollment or registration for the relevant semester or study period." },
  { item: "Examination fees", description: "Supports assessment, examination administration, and related academic processes." },
  { item: "Library fees", description: "Supports access to library resources, study support, and learning materials." },
  { item: "ICT and identity card fees", description: "Supports student identification, digital services, and ICT-related access." },
];

function getValidImageSrc(image?: string) {
  const src = image?.trim();
  return src && src !== "/" ? src : undefined;
}

function QualityAssurancePhoto({ alt, className, sizes, src }: { alt: string; className: string; sizes: string; src?: string }) {
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

function FeesStructurePage() {
  const totalCourses = feeProgrammes.reduce((total, group) => total + group.courses.length, 0);

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
                Review the programme fee structure in a clean course-by-course format.
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
                  <p className="text-3xl font-black">5</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em]">Fee Items</p>
                </div>
              </div>
              <p className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4 text-xs leading-6 text-white/75">
                Fees are approved by the University Council and may be reviewed from time to time. Students remain responsible for payment whether or not they have a sponsor.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50/70 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-6 lg:grid-cols-[1fr_340px] lg:items-start">
              <div className="space-y-8">
                {feeProgrammes.map((group) => (
                  <section key={group.group} className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-900/5">
                    <div className="flex flex-col gap-4 border-b border-slate-100 bg-[#0B6232] p-6 text-white sm:flex-row sm:items-end sm:justify-between lg:p-8">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#FFC66B]">Fees Table</p>
                        <h2 className="mt-2 text-2xl font-black leading-tight sm:text-3xl">{group.group}</h2>
                        <p className="mt-2 max-w-3xl text-sm leading-7 text-white/75">{group.summary}</p>
                      </div>
                      <div className="w-fit rounded-2xl bg-white/10 px-4 py-3 text-center">
                        <p className="text-2xl font-black text-[#FFC66B]">{group.courses.length}</p>
                        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/70">Courses</p>
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
                              {course.feeStatus}
                            </span>
                          </div>
                          <h3 className="mt-4 text-base font-black leading-snug text-slate-950">{course.course}</h3>
                          <p className="mt-2 text-xs leading-5 text-slate-500">
                            Official tuition amount to be inserted after Admissions confirmation.
                          </p>
                          <dl className="mt-4 grid gap-3 text-sm">
                            <div className="rounded-xl bg-white p-3">
                              <dt className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">School</dt>
                              <dd className="mt-1 font-semibold leading-5 text-slate-700">{course.school}</dd>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                              <div className="rounded-xl bg-white p-3">
                                <dt className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">Level</dt>
                                <dd className="mt-1 font-semibold leading-5 text-slate-700">{course.level}</dd>
                              </div>
                              <div className="rounded-xl bg-white p-3">
                                <dt className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">Duration</dt>
                                <dd className="mt-1 font-semibold leading-5 text-slate-700">{course.duration}</dd>
                              </div>
                            </div>
                            <div className="rounded-xl bg-white p-3">
                              <dt className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">Payment</dt>
                              <dd className="mt-1 font-semibold leading-5 text-slate-700">{course.billing}</dd>
                            </div>
                          </dl>
                        </article>
                      ))}
                    </div>

                    <div className="hidden overflow-x-auto md:block">
                      <table className="w-full min-w-[920px] border-collapse text-left text-sm">
                        <thead>
                          <tr className="border-b border-slate-100 bg-slate-50 text-[11px] uppercase tracking-[0.14em] text-slate-500">
                            <th className="px-5 py-4 font-black">No.</th>
                            <th className="px-5 py-4 font-black">Course / Programme</th>
                            <th className="px-5 py-4 font-black">School</th>
                            <th className="px-5 py-4 font-black">Level</th>
                            <th className="px-5 py-4 font-black">Duration</th>
                            <th className="px-5 py-4 font-black">Payment</th>
                            <th className="px-5 py-4 font-black">Fee Category</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {group.courses.map((course) => (
                            <tr key={course.course} className="align-top transition hover:bg-[#FFC66B]/10">
                              <td className="px-5 py-4 font-black text-[#0B6232]">{course.code}</td>
                              <td className="px-5 py-4">
                                <p className="font-black text-slate-950">{course.course}</p>
                                <p className="mt-1 text-xs leading-5 text-slate-500">Official tuition amount to be inserted after Admissions confirmation.</p>
                              </td>
                              <td className="px-5 py-4 text-slate-700">{course.school}</td>
                              <td className="px-5 py-4">
                                <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-black text-slate-700">{course.level}</span>
                              </td>
                              <td className="px-5 py-4 text-slate-700">{course.duration}</td>
                              <td className="px-5 py-4 text-slate-700">{course.billing}</td>
                              <td className="px-5 py-4">
                                <span className="rounded-full bg-[#0B6232]/10 px-3 py-1 text-xs font-black text-[#0B6232]">{course.feeStatus}</span>
                              </td>
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
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FFC66B]">Fee Breakdown</p>
                    <h2 className="mt-2 text-2xl font-black leading-tight">What students normally pay for</h2>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {feeBreakdown.map((fee) => (
                      <div key={fee.item} className="p-5">
                        <p className="font-black text-slate-950">{fee.item}</p>
                        <p className="mt-1 text-sm leading-6 text-slate-600">{fee.description}</p>
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
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1800&q=80')" }} />
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
                  <section className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-900/5">
                    <div className="grid gap-0 lg:grid-cols-[380px_1fr]">
                      <div className="relative min-h-[360px] bg-slate-200">
                        <QualityAssurancePhoto
                          src={page.qualityAssurance.director.image}
                          alt={page.qualityAssurance.director.name}
                          sizes="(min-width: 1024px) 380px, 100vw"
                          className="object-contain p-6"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FFC66B]">Director</p>
                          <h2 className="mt-2 text-2xl font-black leading-tight">{page.qualityAssurance.director.name}</h2>
                          <p className="mt-1 text-sm font-bold text-white/80">{page.qualityAssurance.director.title}</p>
                        </div>
                      </div>
                      <div className="p-6 sm:p-8 lg:p-10">
                        <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-[#0B6232] text-[#FFC66B] shadow-lg shadow-[#0B6232]/20">
                          <ClipboardCheck className="size-6" />
                        </div>
                        <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#0B6232]">Message from the Director Quality Assurance</p>
                        <p className="mt-5 max-w-4xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                          {page.qualityAssurance.director.message}
                        </p>
                      </div>
                    </div>
                  </section>

                  <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8 lg:p-10">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0B6232]">Quality Assurance Team</p>
                        <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">Staff Team</h2>
                      </div>
                      <div className="inline-flex items-center gap-2 text-sm font-bold text-slate-500">
                        <UsersRound className="size-4 text-[#0B6232]" />
                        <span>6 team positions</span>
                      </div>
                    </div>
                    <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      {page.qualityAssurance.staff.map((member) => (
                        <article key={member.name} className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/70">
                          <div className="relative aspect-[4/3] bg-white">
                            <QualityAssurancePhoto
                              src={member.image}
                              alt={member.name}
                              sizes="(min-width: 1280px) 320px, (min-width: 640px) 50vw, 100vw"
                              className="object-contain p-3"
                            />
                          </div>
                          <div className="p-5">
                            <div>
                              <h3 className="text-base font-black leading-snug text-slate-950">{member.name}</h3>
                              <p className="mt-1 text-sm leading-5 text-slate-500">{member.role}</p>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>

                  <section className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-900/5">
                    <div className="border-b border-slate-100 p-6 sm:p-8 lg:p-10">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0B6232]">What We Do</p>
                      <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">Quality Assurance Responsibilities</h2>
                    </div>
                    <div className="overflow-x-auto">
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
                      <h2 className="mt-2 text-2xl font-black leading-tight">{page.title}</h2>
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

  if (currentPath === "admissions/fees-structure") {
    return <FeesStructurePage />;
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
