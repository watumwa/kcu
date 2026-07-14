"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ExternalLink, FileText, X } from "lucide-react";

type NewsletterArticle = {
  date: string;
  category: string;
  title: string;
  excerpt: string;
  href?: string;
  image?: string;
  imageAlt?: string;
  highlights?: { label: string; value: string }[];
  gallery?: { src: string; alt: string }[];
  story: string[];
};

const newsletterArticles: NewsletterArticle[] = [
  {
    date: "10 July 2026",
    category: "Partnerships",
    title: "King Ceasor University Staff Participate in Uganda Council for Foreign Affairs Strategic Plan Launch",
    excerpt:
      "KCU staff from the School of Law and Management Sciences and the Department of Computing, AI and Data Science joined the Uganda Council for Foreign Affairs’ Strategic Plan Launch, engaging stakeholders on Uganda’s foreign policy priorities.",
    image: "/news-images/forensics-visit.jpeg",
    imageAlt: "King Ceasor University representatives at the Uganda Council for Foreign Affairs Strategic Plan Launch",
    highlights: [
      { label: "Date", value: "10 July 2026" },
      { label: "Host", value: "Uganda Council for Foreign Affairs" },
      { label: "Guest of Honour", value: "Hon. Sam Kutesa" },
    ],
    gallery: [],
    story: [
      "Kampala - 10 July 2026",
      "On 10 July 2026, King Ceasor University staff from the School of Law and Management Sciences and the Department of Computing, AI and Data Science participated in the Uganda Council for Foreign Affairs’ Strategic Plan Launch. The event marked the unveiling of the Council’s five-year strategic plan and featured remarks from the organisation’s leadership, an address by the Guest of Honour, Hon. Sam Kutesa and stakeholder engagements on Uganda’s foreign policy priorities.",
      "The University was represented by Prof. Peter Turyakira from the School of Law and Management Sciences, Dr. Habiba Njeri Ngugi, Head of the Department of Computing, AI & Data Science and Madam Zoe Richard Mauki from the School of Law and Management Sciences. Their participation reflects King Ceasor University’s commitment to engaging with national policy institutions, strengthening strategic partnerships and fostering interdisciplinary dialogue across law, technology, governance and public policy.",
      "The engagement also provided an opportunity for the University’s representatives to interact with policymakers, diplomats, academics and other stakeholders on issues shaping Uganda’s foreign relations and strategic development. Such participation reinforces King Ceasor University’s vision of producing graduates and scholars who contribute meaningfully to national development through academic excellence, innovation, research and active engagement with public policy and global affairs.",
    ],
  },
  {
    date: "08 July 2026",
    category: "Events",
    title: "King Ceasor University Hosts Public Lecture on Law-Making and Academic Collaboration",
    excerpt:
      "KCU welcomed Prof. Jamil Mujuzi from the University of the Western Cape, South Africa, for a public lecture on public participation in Uganda’s law-making processes, followed by discussions on future academic collaboration.",
    image: "/public-lecture-law.jpeg",
    imageAlt: "Prof. Jamil Mujuzi delivers a public lecture at the King Ceasor University Moot Court Room",
    highlights: [
      { label: "Guest Speaker", value: "Prof. Jamil Mujuzi, University of the Western Cape" },
      { label: "Venue", value: "KCU Moot Court Room" },
      { label: "Date", value: "8 July 2026" },
    ],
    gallery: [],
    story: [
      "Bunga, Kampala - 8 July 2026",
      "On Wednesday, 8 July 2026, King Ceasor University welcomed Prof. Jamil Mujuzi from the University of the Western Cape, South Africa, for a public lecture on “Public Participation in Law-Making Processes in Uganda.” Held in the University’s Moot Court Room, the lecture attracted students and lecturers from the School of Law, providing an opportunity to examine the critical role of citizen participation in legislative processes, democratic governance and the development of inclusive public policy.",
      "Prof. Mujuzi encouraged students to appreciate the significance of public engagement in law-making and highlighted how meaningful participation contributes to transparency, accountability and stronger legal institutions. The interactive session allowed participants to exchange ideas and deepen their understanding of constitutional and legislative processes within Uganda’s legal framework.",
      "Following the lecture, Prof. Mujuzi held a meeting with members of the School of Law to discuss avenues for future collaboration between King Ceasor University and the University of the Western Cape. The discussions explored opportunities for joint research, academic exchanges and other collaborative initiatives that will strengthen legal education and expand international partnerships.",
      "The visit reflects King Ceasor University’s continued commitment to providing students with exposure to distinguished international scholars while fostering strategic partnerships that enhance teaching, research and professional development in legal education.",
    ],
  },
  {
    date: "08 July 2026",
    category: "Community Outreach",
    title: "King Ceasor University Launches Staff Cooperative Society",
    excerpt:
      "King Ceasor University officially launched the King Ceasor University Staff Cooperative Society during its 1st General Meeting held at the university rooftop, following the cooperative’s attainment of its Certificate of Registration last month.",
    image: "/KCU Staff SACCO Launch.jpeg",
    imageAlt: "King Ceasor University Staff Cooperative Society launch during the 1st General Meeting at the university rooftop",
    story: [
      "Kampala - 08 July 2026",
      "On 8th July 2026, King Ceasor University officially launched the King Ceasor University Staff Cooperative Society during its 1st General Meeting held at the university rooftop.",
      "The launch followed the cooperative’s attainment of its Certificate of Registration last month, marking the official commencement of its operations as a legally registered staff cooperative society. The milestone reflects the University’s continued commitment to enhancing staff welfare through sustainable financial empowerment initiatives.",
      "The cooperative is expected to provide teaching, management, and non-teaching staff with opportunities for collective savings, investment and access to affordable financial services. During the launch, members were introduced to the Society’s vision, objectives and governance structure, while reaffirming their commitment to supporting its growth and long-term success.",
      "The establishment of the King Ceasor University Staff Cooperative Society represents an important step towards strengthening financial inclusion and promoting a culture of collaboration, shared responsibility and economic resilience within the University community.",
    ],
  },
  {
    date: "10 July 2026",
    category: "Events",
    title: "King Ceasor University Proudly Hosts the Uganda National Code Fest 2026",
    excerpt:
      "KCU hosted the Uganda National Code Fest 2026, organized by Skills Masters Global, bringing together young students from across Uganda to showcase innovative solutions in AI, Robotics, Software Development, IoT, Renewable Energy, Smart Agriculture and Engineering.",
    image: "/IMG_0055.jpeg",
    imageAlt: "Students showcasing innovative projects at the Uganda National Code Fest 2026 hosted at King Ceasor University",
    highlights: [
      { label: "Date", value: "10 July 2026" },
      { label: "Organizer", value: "Skills Masters Global" },
      { label: "Focus Areas", value: "AI, Robotics, IoT, Renewable Energy, Smart Agriculture, Engineering" },
    ],
    gallery: [],
    story: [
      "Kampala - 10 July 2026",
      "King Ceasor University proudly hosted the Uganda National Code Fest 2026 on Friday, 10 July 2026, an exciting innovation event organized by Skills Masters Global that brought together young students from schools across Uganda.",
      "The event celebrated creativity, technology and problem-solving, providing participants with a platform to showcase innovative solutions in Artificial Intelligence (AI), Robotics, Software Development, Internet of Things (IoT), Renewable Energy, Smart Agriculture and Engineering.",
      "Throughout the day, students demonstrated their ingenuity through interactive exhibitions and project presentations while engaging with fellow innovators, educators and industry leaders. The festival fostered collaboration, knowledge sharing and inspiration, reinforcing the importance of equipping young people with practical skills to address real-world challenges.",
      "Hosting the Uganda National Code Fest 2026 reflects King Ceasor University's commitment to promoting innovation, advancing STEM education and supporting the next generation of technology leaders.",
    ],
  },
  {
    date: "03 July 2026",
    category: "Graduation",
    title: "King Ceasor University Celebrates 6th Graduation Ceremony",
    excerpt:
      "KCU awarded 396 degrees at its Bunga, Kampala campus, including 175 medical doctors, with graduates from across Africa and beyond.",
    image: "/graduation-2.jpeg",
    imageAlt: "King Ceasor University 6th Graduation Ceremony at the Bunga, Kampala campus",
    highlights: [
      { label: "Graduates", value: "396 degrees awarded" },
      { label: "Medical Doctors", value: "175 graduates" },
      { label: "Date", value: "3 July 2026" },
    ],
    gallery: [],
    story: [
      "Bunga, Kampala - 3 July 2026",
      "King Ceasor University held its 6th Graduation Ceremony on 3rd July at its campus in Bunga, Kampala, marking a major milestone in its academic journey.",
      "A total of 396 graduates were awarded degrees from the School of Medicine, Health and Life Sciences, School of Law and Management Sciences, and the School of Science, Computing, AI and Engineering. The cohort included 175 medical doctors, underscoring the university's growing contribution to the health sector. Students from countries including Cameroon, Pakistan, Nigeria, Somalia, India and Sudan reflected its expanding international footprint.",
      "Representing the Chief Guest, Rt. Hon. Robinah Nabbanja, the Second Deputy Prime Minister, Hon. Dr. Crispus Walter Kiyonga, congratulated graduates and urged them to apply their knowledge and skills to drive community transformation and national development.",
      "The Chairperson of the University Council, Hon. Dr. Chris Baryomunsi, also Minister of Health, emphasized the importance of curriculum transformation, innovation and quality assurance. Speaking on the theme \"Unlocking Quantum Technology for Economic Sovereignty,\" he highlighted the role of emerging technologies in advancing healthcare, research and national development.",
      "The Vice Chancellor, Dr. Charity Basaza Mulenga, noted that the ceremony coincided with the first anniversary of the university's Charter, thanking H.E. President Yoweri Kaguta Museveni and the First Lady and Minister of Education and Sports, Maama Janet Museveni, for their support. She urged graduates to uphold the values of Truth and Integrity and embrace lifelong learning.",
      "The Chancellor, King Ceasor Augustus Mulenga, congratulated graduates and encouraged them to become innovators in a rapidly evolving world shaped by artificial intelligence, quantum technologies and scientific advancement, emphasizing that the future must be actively created.",
      "The ceremony was attended by ambassadors, government officials, and religious leaders, including a Mass led by Archbishop Paul Ssemogerere, reflecting the university's commitment to excellence, faith and global engagement.",
      "King Ceasor University continues to strengthen its position as a center of academic excellence, producing globally competitive graduates ready to transform society.",
    ],
  },
  {
    date: "16 June 2026",
    category: "Community Outreach",
    title: "King Ceasor University Marks Day of the African Child with Career Guidance and Donation Drive at St. Dennis Ssebugwawo Secondary School",
    excerpt:
      "KCU commemorated the Day of the African Child with a career guidance session and donation drive for approximately 300 Advanced Level students in Ggaba.",
    image: "/images/outreach/st-denis-2026/career-guidance-speaker.webp",
    imageAlt: "King Ceasor University representative speaking to St. Dennis Ssebugwawo Secondary School students during career guidance",
    highlights: [
      { label: "Location", value: "Ggaba, Kampala" },
      { label: "Learners Engaged", value: "About 300 A-Level students" },
      { label: "Focus", value: "Career guidance and hygiene support" },
    ],
    gallery: [
      {
        src: "/images/outreach/st-denis-2026/classroom-career-session.webp",
        alt: "Advanced Level students gathered for the King Ceasor University career guidance session",
      },
      {
        src: "/images/outreach/st-denis-2026/student-participation.webp",
        alt: "A student participates during the outreach session at St. Dennis Ssebugwawo Secondary School",
      },
      {
        src: "/images/outreach/st-denis-2026/donation-drive-supplies.webp",
        alt: "Hygiene and sanitation supplies being distributed during the King Ceasor University outreach",
      },
    ],
    story: [
      "Ggaba, Kampala - 16 June 2026",
      "As part of activities to commemorate the Day of the African Child, King Ceasor University conducted a career guidance and community outreach programme at St. Dennis Ssebugwawo Secondary School in Ggaba, reaffirming its commitment to education, youth empowerment and social responsibility.",
      "The university team engaged approximately 300 Advanced Level students in an interactive career guidance session designed to help learners make informed decisions about their academic and professional futures. Students were introduced to the various academic programmes offered at King Ceasor University, opportunities available in higher education and practical approaches to career planning and goal setting. The session also featured a question-and-answer segment that allowed students to seek guidance on university education and career development.",
      "Speaking during the engagement, university representatives encouraged students to align their academic choices with their interests, strengths and long-term aspirations. The learners actively participated in the discussions and expressed appreciation for the valuable insights shared.",
      "In addition to the career guidance session, King Ceasor University donated essential hygiene and sanitation supplies to support the school's health and wellbeing initiatives.",
      "The outreach programme contributed to increased awareness among students about higher education opportunities, strengthened the university's community engagement efforts and supported the school's commitment to maintaining proper hygiene and sanitation standards.",
      "Through such initiatives, King Ceasor University continues to play an active role in empowering young people, supporting communities and building partnerships that promote education and sustainable development.",
      "The university remains committed to extending similar outreach programmes to schools and communities across Uganda as part of its mission to transform lives through education and service.",
    ],
  },
  {
    date: "12 June 2026",
    category: "Student Life",
    title: "King Ceasor University Represented at AUUS Sports Leadership Engagement at MUST",
    excerpt:
      "KCU joined university sports leaders, Deans of Students, Sports Tutors and student sports leaders at MUST for a strategic AUUS engagement on advancing university sports.",
    image: "/images/student-activity/auus-sports-leadership-2026/auus-sports-leadership-forum-group.jpeg",
    imageAlt: "University sports leaders gathered at MUST during the AUUS Sports Leadership Engagement",
    highlights: [
      { label: "Dates", value: "11-12 June 2026" },
      { label: "Venue", value: "MUST Kihumuro Campus, Mbarara" },
      { label: "Theme", value: "Reimagining Sports: From Participation to Excellence" },
    ],
    gallery: [
      {
        src: "/images/student-activity/auus-sports-leadership-2026/kcu-representatives-auus-forum.jpeg",
        alt: "KCU representatives and university sports leaders at the AUUS engagement at MUST",
      },
    ],
    story: [
      "Mbarara, Uganda - 12 June 2026",
      "On 11th and 12th June, sports leaders from universities across Uganda, alongside Deans of Students, Sports Tutors and student sports leaders, gathered at Mbarara University of Science and Technology (MUST), Kihumuro Campus in Mbarara District for a strategic engagement focused on the advancement of university sports.",
      "King Ceasor University was represented by the University Sports Tutor, Mr. Katabazi Aziz, and the Guild Minister of Sports, Muhoozi Nasseem, who participated in discussions aimed at strengthening sports leadership and promoting excellence in university sports.",
      "Held under the theme \"Reimagining Sports: From Participation to Excellence,\" the engagement provided an opportunity for participants to share experiences, explore innovative approaches to sports development and discuss strategies for enhancing student-athlete performance and institutional sports programs.",
      "The discussions emphasized the importance of effective leadership, collaboration, talent development and institutional support in building a strong and sustainable sports culture within universities. Participants reaffirmed their commitment to creating pathways that enable student-athletes to excel both on and off the field.",
      "King Ceasor University extends its appreciation to the organizers and all stakeholders who made the engagement successful. The University remains committed to supporting sports development and empowering student leaders to contribute positively to the growth of university sports in Uganda.",
    ],
  },
  {
    date: "10 June 2026",
    category: "Partnerships",
    title: "KCU Signs Strategic Partnership with Tecnovia to Enhance Student Skills and Employment Opportunities",
    excerpt:
      "KCU and Tecnovia Uganda Branch signed an MoU to expand industrial training, internships, site-based learning and employment pathways for students.",
    href: "https://kcu.ac.ug/kcu-signs-strategic-partnership-with-tecnovia-to-enhance-student-skills-and-employment-opportunities/",
    story: [
      "King Ceasor University has entered a strategic partnership with Tecnovia Sociedade de Empreitadas, S.A., Uganda Branch through a new Memorandum of Understanding.",
      "The collaboration is designed to strengthen skills development, industry exposure and career readiness for KCU students, especially through industrial training, internships, workshops, seminars and site-based learning experiences.",
      "The partnership will also support curriculum development so that engineering and related academic programmes stay aligned with industry needs, emerging technologies and professional standards.",
      "Tecnovia committed to considering qualified KCU graduates for employment opportunities, including possible international deployment within the Tecnovia Group, subject to performance and regulatory requirements.",
      "The MoU was signed by Dr. Charity Basaza Mulenga, Vice Chancellor of King Ceasor University, and Mr. Jose Guilherme Costa, International Markets Director of Tecnovia Uganda Branch. KCU described the partnership as another step toward connecting classroom learning with industry practice.",
    ],
  },
  {
    date: "10 June 2026",
    category: "Partnerships",
    title: "Department of Law Signs Memorandum of Understanding with Praxis Conflict Centre",
    excerpt:
      "The Department of Law partnered with Praxis Conflict Centre to strengthen ADR education, mentorship, internships, professional training and research.",
    href: "https://kcu.ac.ug/department-of-law-signs-memorandum-of-understanding-with-praxis-conflict-centre/",
    story: [
      "The KCU Department of Law signed a Memorandum of Understanding with Praxis Conflict Centre, a specialist institution in Alternative Dispute Resolution.",
      "The partnership creates a framework for collaboration in ADR education, curriculum development, research, professional training, internships, mentorship, guest lectures and capacity-building for students and staff.",
      "Through the agreement, the Department of Law aims to deepen the place of ADR in legal education while giving students practical exposure to contemporary dispute resolution practice.",
      "The MoU also opens space for joint research, knowledge exchange, career development and direct engagement with ADR practitioners.",
      "Representatives from both institutions reaffirmed a shared commitment to legal education, peaceful dispute resolution and professional development for the benefit of students, staff and the wider community.",
    ],
  },
  {
    date: "01 June 2026",
    category: "Student Life",
    title: "Law Students Honoured for Outstanding Performance in Regional Moot & Debate Competitions",
    excerpt:
      "KCU Law students and their coach presented awards, certificates and books won at regional moot court and legal debate competitions.",
    href: "https://kcu.ac.ug/law-students-honoured-for-outstanding-performance-in-regional-moot-and-debate-competitions/",
    story: [
      "KCU Law students and their coach paid a courtesy visit to the Vice Chancellor to present awards, certificates and books earned from regional legal competitions.",
      "Ahura Precious and Ayebazibwe Hillary represented Uganda at the 2025 Great Lakes Moot Competition in International Humanitarian Law, hosted at Strathmore University in Nairobi from 25 to 30 August 2025. The team emerged as Best Female Team.",
      "The university debate team, comprising Kyoshabire Macklean, Nuwamanya Ignatius and Nyamwija Connie, also excelled at the 3rd Edition of the Centre for African Justice, Peace and Human Rights Legal Debate held on 13 September 2025. Nyamwija Connie was recognised as Best Debater in Africa.",
      "The Vice Chancellor commended the students for representing the university with distinction and reaffirmed KCU's commitment to practical legal training and academic excellence.",
      "Speaking for the students, Ahura thanked the university administration for its support and said the recognition would motivate the team to keep pursuing excellence in future competitions.",
    ],
  },
  {
    date: "26 May 2026",
    category: "Events",
    title: "KCU Hosts Public Lecture on Universal Jurisdiction and Transnational Litigation",
    excerpt:
      "The university hosted an international law public lecture for law students, practitioners and human rights advocates.",
    href: "https://kcu.ac.ug/king-ceasor-university-hosts-public-lecture-on-universal-jurisdiction-and-transnational-litigation/",
    story: [
      "King Ceasor University hosted a public lecture on Universal Jurisdiction and Transnational Litigation, bringing together law students, legal practitioners and human rights advocates.",
      "The lecture was delivered by Drusilla Bret Robertson, an international lawyer based in Paris whose work spans international law, criminal law and human rights advocacy.",
      "Her presentation explored how universal jurisdiction is shaping accountability for international crimes across borders, with practical examples from Uganda and neighbouring countries.",
      "The session highlighted the role of transnational litigation in advancing justice, protecting human rights and strengthening international legal cooperation.",
      "Students and participants engaged with contemporary international criminal justice questions, reinforcing KCU's commitment to academic excellence and exposure to global legal conversations.",
    ],
  },
  {
    date: "25 May 2026",
    category: "Student Financing",
    title: "Call for Student Loan Applications for the Academic Year 2026/27",
    excerpt:
      "Prospective and continuing students were invited to apply for higher education student loans through the Ministry of Education and Sports and HESFB.",
    href: "https://kcu.ac.ug/call-for-students-loan-applications-for-the-academic-year-2026-27/",
    story: [
      "King Ceasor University informed prospective and continuing students that the Ministry of Education and Sports, through the Higher Education Students Financing Board, announced applications for the Students' Loan Scheme for the 2026/2027 academic year.",
      "KCU is among the approved higher education institutions participating in the scheme, giving eligible Ugandan students an opportunity to seek financial support for accredited programmes.",
      "The university encouraged interested applicants to prepare their requirements early and submit applications through the official HESFB application portal.",
      "Applications close on 17 July 2026 at 11:59 PM, so students are advised to complete the process ahead of the deadline.",
      "Students who need more information about KCU programmes and admissions can contact the university through its official admissions channels.",
    ],
  },
  {
    date: "25 May 2026",
    category: "International",
    title: "KCU Participates in the Erasmus Exchange Programme",
    excerpt:
      "Staff from the School of Law and Management Sciences took part in an Erasmus teaching mobility exchange at Powislanski University in Poland.",
    href: "https://kcu.ac.ug/kcu-participates-in-the-erasmus-exchange-programme/",
    story: [
      "Staff from the School of Law and Management Sciences, Department of Management Sciences, participated in the Erasmus Teaching Staff Mobility Exchange Programme at Powislanski University from 20 to 24 May 2026.",
      "Dr. Richard Wemesa and Mr. Ivan Bakaki taught undergraduate students from different countries, presented research papers and engaged with international scholars.",
      "Dr. Wemesa presented research on innovation and prosperity in Uganda's business sector, while Mr. Bakaki presented work on the impact of ICT on environmental performance in Kampala City.",
      "The exchange strengthened KCU's international academic collaboration, research visibility and knowledge-sharing networks.",
      "The programme reflects KCU's wider commitment to building global academic partnerships that benefit both staff and students.",
    ],
  },
  {
    date: "20 May 2026",
    category: "Student Financing",
    title: "King Ceasor University Signs MOU with HESFB to Expand Access to Student Financing",
    excerpt:
      "KCU signed an MoU with the Higher Education Students' Financing Board to improve access to affordable education financing.",
    href: "https://kcu.ac.ug/king-ceasor-university-signs-mou-with-hesfs-to-expand-access-to-student-financing/",
    story: [
      "King Ceasor University signed a Memorandum of Understanding with the Higher Education Students' Financing Board to expand access to affordable higher education financing.",
      "The signing ceremony was held on 20 May 2026 at the HESFB offices in Lourdel Towers, Kampala.",
      "CPA Michael O. Wanyama, Commissioner, signed on behalf of the Ministry, representing the Permanent Secretary. Dr. Charity Basaza Mulenga, Vice Chancellor, signed on behalf of King Ceasor University.",
      "Through the partnership, eligible students will be able to access government-supported loans that cover tuition and functional fees in accredited programmes aligned with national development priorities.",
      "The arrangement also includes a post-graduation grace period before repayment begins, supporting graduates as they transition into employment.",
    ],
  },
  {
    date: "20 May 2026",
    category: "Student Life",
    title: "Guild Leadership Swearing-In Ceremony Held at King Ceasor University",
    excerpt:
      "The university held the swearing-in ceremony for newly elected guild leaders and launched the Guild Chronicles Magazine.",
    href: "https://kcu.ac.ug/guild-leadership-swearing-in-ceremony-held-at-king-ceasor-university/",
    story: [
      "King Ceasor University held the swearing-in ceremony for newly elected guild leaders on 15 May 2026 at the KCU Rooftop.",
      "The ceremony brought together students, university management, staff and outgoing student leaders to mark a new chapter in student leadership.",
      "The Chairperson of the Electoral Commission, Mr. Ariho, congratulated the newly elected leaders and urged them to represent students with diligence, responsibility and integrity.",
      "Outgoing Guild President Mr. Ainebyona Adonia reflected on his administration's achievements and challenges, encouraged the incoming leaders to remain resilient, and called for stronger communication, student associations, clubs, research and innovation.",
      "The event also launched the Guild Chronicles Magazine. Guild President-Elect Mr. Muhoozi Daniel pledged humble and committed leadership, while Vice Chancellor Dr. Charity Basaza Mulenga encouraged student leaders to listen to students and work constructively with university management.",
    ],
  },
  {
    category: "Research",
    date: "14 May 2026",
    title: "KCU Showcases \"Aqua Clean\" Innovation at the 3rd Oil & Gas Skills Expo 2026",
    excerpt:
      "The Department of Petroleum Geoscience showcased Aqua Clean at Makerere University during the 3rd Oil & Gas Skills Expo 2026.",
    href: "https://kcu.ac.ug/kcu-department-of-petroleum-geoscience-showcases-aqua-clean-innovation-at-the-3rd-oil-gas-skills-expo-2026/",
    story: [
      "The Department of Petroleum Geoscience at King Ceasor University participated in Day One of the 3rd Oil & Gas Skills Expo 2026 at Makerere University.",
      "The expo was held under the theme, \"From Oil and Gas to the Wider Economy: Transferable Skills Driving Sustainable Growth.\"",
      "KCU showcased Aqua Clean, an innovation that reflects the university's commitment to research, sustainability and practical solutions for Uganda's evolving energy sector.",
      "The event gathered government leaders, academia, industry experts and private sector stakeholders to discuss workforce readiness, strategic research, innovation, accreditation and employment opportunities in the petroleum industry.",
      "Speakers emphasized the need for transferable skills, structured training and certification. KCU's participation highlighted its role in preparing students and professionals for the future of Uganda's energy sector.",
    ],
  },
  {
    date: "10 May 2026",
    category: "Community",
    title: "KCU Conducts Community Outreach at Kigo Prisons",
    excerpt:
      "The School of Law and Management Sciences carried out outreach at Kigo Prisons, supporting inmate welfare, legal awareness and community partnership.",
    href: "https://kcu.ac.ug/king-ceasor-university-conducts-community-outreach-at-kigo-prisons/",
    story: [
      "The KCU School of Law and Management Sciences carried out a community outreach initiative at Kigo Prisons to support inmate welfare, promote legal awareness and strengthen community partnerships.",
      "During the outreach, the university donated essential items to both the male and female prison sections, reflecting KCU's commitment to service and social responsibility.",
      "The team also conducted an interactive legal question-and-answer session with inmates, many of whom sought legal advice and assistance related to their case files.",
      "A tree-planting ceremony was held to mark the occasion and symbolize the growing partnership between King Ceasor University and Kigo Prisons.",
      "The outreach drew attention to the challenges faced by women and children in prison environments and reaffirmed the university's commitment to using education, leadership and community engagement for positive social impact.",
    ],
  },
  {
    date: "05 May 2026",
    category: "Energy",
    title: "Minister of Energy Hosts KCU Geoscience Department",
    excerpt:
      "The Petroleum Geoscience Department met the Minister of Energy and Mineral Development to discuss Uganda's oil, gas and mining sectors.",
    href: "https://kcu.ac.ug/petroleum-geoscience-department-pays-courtesy-call-to-minister-of-energy-and-mineral-development/",
    story: [
      "The Petroleum Geoscience Department paid a courtesy call to the Minister of Energy and Mineral Development, Ruth Nankabirwa, to discuss Uganda's oil, gas and mining sectors.",
      "The meeting provided a forum to share updates on current activities, review sector progress and identify challenges and emerging opportunities.",
      "Discussions emphasized the importance of geoscience in informed decision-making, sustainable resource management and value addition within the extractives industry.",
      "Both sides highlighted the value of continued collaboration between government institutions and technical departments.",
      "The engagement reflected a shared commitment to responsible natural resource development that supports Uganda's socio-economic growth.",
    ],
  },
  {
    date: "28 April 2026",
    category: "Student Life",
    title: "KCU-CMF Chapter Hosts Inter-University Worship Experience",
    excerpt:
      "The KCU-CMF Chapter brought together students from several universities for a worship experience at the university rooftop.",
    href: "https://kcu.ac.ug/kcu-cmf-chapter-hosts-inter-university-worship-experience/",
    story: [
      "The KCU-CMF Chapter hosted an Inter-University Worship Experience on Saturday, 25 April 2026, at the university rooftop.",
      "Held under the theme Psalms 145:18, the gathering brought together students from several higher education institutions for worship, fellowship and spiritual reflection.",
      "Participating institutions included IUIU, Makerere University, Kampala International University, TEAM University, JEPH International University, Uganda Christian University, UICT, Mengo Health Training College and King Ceasor University.",
      "Dr. Mugaba Proscovia, a pediatric and fetal cardiologist, served as guest preacher and encouraged students to deepen their spiritual lives while pursuing academic and personal excellence.",
      "The event created space for worship, prayer, reflection and inter-university connection, reflecting the KCU-CMF Chapter's commitment to spiritual growth and holistic student development.",
    ],
  },
];

function NewsletterStoryModal({ article, onClose }: { article: NewsletterArticle | null; onClose: () => void }) {
  useEffect(() => {
    if (!article) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [article, onClose]);

  return (
    <AnimatePresence>
      {article && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/65 px-4 py-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.article
            role="dialog"
            aria-modal="true"
            aria-labelledby="newsletter-story-title"
            className="relative max-h-[calc(100vh-3rem)] w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl shadow-slate-950/30"
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 18 }}
            transition={{ duration: 0.2 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="max-h-[calc(100vh-3rem)] overflow-y-auto">
              <div className="sticky top-0 z-10 border-b border-slate-100 bg-white/95 px-5 py-4 backdrop-blur sm:px-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-[#FFC66B]/25 px-3 py-1 text-[10px] font-black uppercase tracking-wide text-[#0B6232]">
                        {article.category}
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">{article.date}</span>
                    </div>
                    <h2 id="newsletter-story-title" className="mt-3 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">
                      {article.title}
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={onClose}
                    className="grid size-10 shrink-0 place-items-center rounded-xl border border-slate-200 text-slate-500 transition hover:border-[#0B6232]/30 hover:bg-[#0B6232]/5 hover:text-[#0B6232]"
                    aria-label="Close story"
                  >
                    <X className="size-4" />
                  </button>
                </div>
              </div>

              <div className="px-5 py-6 sm:px-7 sm:py-8">
                {article.image && (
                  <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-2xl bg-slate-100">
                    <Image
                      src={article.image}
                      alt={article.imageAlt ?? article.title}
                      fill
                      sizes="(min-width: 768px) 720px, calc(100vw - 40px)"
                      className="object-cover"
                    />
                  </div>
                )}
                {article.highlights?.length ? (
                  <div className="mb-6 grid gap-3 sm:grid-cols-3">
                    {article.highlights.map((highlight) => (
                      <div key={`${highlight.label}-${highlight.value}`} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#0B6232]">{highlight.label}</p>
                        <p className="mt-2 text-sm font-black leading-5 text-slate-900">{highlight.value}</p>
                      </div>
                    ))}
                  </div>
                ) : null}
                <p className="border-l-4 border-[#FFC66B] bg-slate-50 py-3 pl-4 pr-3 text-sm font-semibold leading-7 text-slate-700 sm:text-base">
                  {article.excerpt}
                </p>
                <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                  {article.story.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {article.gallery?.length ? (
                  <div className="mt-7 grid gap-3 sm:grid-cols-3">
                    {article.gallery.map((item) => (
                      <div key={item.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          sizes="(min-width: 768px) 220px, calc(100vw - 40px)"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                ) : null}
                <div className="mt-8 flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-end">
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-black text-slate-600 transition hover:border-[#0B6232]/30 hover:bg-slate-50 hover:text-[#0B6232]"
                  >
                    Close Story
                  </button>
                </div>
              </div>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function NewsletterPage() {
  const [selectedArticle, setSelectedArticle] = useState<NewsletterArticle | null>(null);
  const latestNewsArticles = newsletterArticles.slice(0, 4);
  const newsletterDigestArticles = newsletterArticles.slice(4, 10);
  const eventArticles = newsletterArticles
    .filter((article) => ["Community Outreach", "Student Life", "Events", "Community"].includes(article.category))
    .slice(0, 6);

  return (
    <main className="min-h-screen bg-white pt-16 sm:pt-20 lg:pt-[8.5rem]">
      <section className="relative overflow-hidden bg-[#0B6232] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="absolute -bottom-20 right-8 hidden size-72 rounded-full border border-white/10 lg:block" />
        <div className="relative z-10 mx-auto max-w-[1440px]">
          <div>
            <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-[#FFC66B] backdrop-blur">News &amp; Updates</p>
            <h1 className="mt-5 max-w-3xl font-serif text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
              <span className="block text-[#FFC66B]">News</span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
              Stay informed. Stay inspired. The latest from King Ceasor University.
            </p>
          </div>
        </div>
      </section>

      <section id="latest-news" className="bg-slate-50/70 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#0B6232]">Latest News</p>
              <h2 className="mt-2 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">Current updates from KCU</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                Follow recent university announcements, partnerships, student milestones, and community stories.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-black">
              <a href="#latest-news" className="rounded-full bg-[#0B6232] px-4 py-2 text-white">Latest News</a>
              <a href="#newsletter" className="rounded-full border border-[#0B6232]/15 bg-white px-4 py-2 text-[#0B6232]">News Letter</a>
              <a href="#events" className="rounded-full border border-[#0B6232]/15 bg-white px-4 py-2 text-[#0B6232]">Events</a>
            </div>
          </div>

          <article className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl shadow-slate-900/5">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[320px] bg-slate-100">
                {latestNewsArticles[0].image && (
                  <Image
                    src={latestNewsArticles[0].image}
                    alt={latestNewsArticles[0].imageAlt ?? latestNewsArticles[0].title}
                    fill
                    sizes="(min-width: 1024px) 52vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#FFC66B]/30 px-3 py-1 text-xs font-black text-[#0B6232]">{latestNewsArticles[0].category}</span>
                  <span className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">{latestNewsArticles[0].date}</span>
                </div>
                <h3 className="mt-5 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">{latestNewsArticles[0].title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">{latestNewsArticles[0].excerpt}</p>
                <button
                  type="button"
                  onClick={() => setSelectedArticle(latestNewsArticles[0])}
                  className="mt-7 inline-flex w-fit items-center rounded-xl bg-[#0B6232] px-5 py-3 text-sm font-black text-white transition hover:bg-[#084a26]"
                >
                  Read More <ArrowRight className="ml-2 size-4" />
                </button>
              </div>
            </div>
          </article>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {latestNewsArticles.slice(1).map((article) => (
              <article key={`${article.date}-${article.title}`} className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:border-[#0B6232]/25 hover:shadow-xl hover:shadow-slate-900/10">
                {article.image && (
                  <div className="relative aspect-[16/9] bg-slate-100">
                    <Image
                      src={article.image}
                      alt={article.imageAlt ?? article.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[#FFC66B]/25 px-3 py-1 text-[10px] font-black text-[#0B6232]">{article.category}</span>
                    <span className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">{article.date}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-black leading-tight text-slate-950">{article.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{article.excerpt}</p>
                  <button
                    type="button"
                    onClick={() => setSelectedArticle(article)}
                    className="mt-5 inline-flex w-fit items-center rounded-xl bg-[#0B6232] px-5 py-3 text-sm font-black text-white transition hover:bg-[#084a26]"
                  >
                    Read More <ArrowRight className="ml-2 size-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="newsletter" className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div className="rounded-2xl bg-[#0B6232] p-7 text-white shadow-xl shadow-[#0B6232]/15 sm:p-8">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#FFC66B]">News Letter</p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">KCU News Letter Digest</h2>
              <p className="mt-4 text-sm leading-7 text-white/78 sm:text-base">
                A curated round-up of university stories, partnerships, student opportunities, and institutional milestones.
              </p>
              <Link
                href="/newsletter/JUNE Journal 4 v-6.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center rounded-xl bg-[#FFC66B] px-5 py-3 text-sm font-black text-[#0B6232] transition hover:bg-[#f4b850]"
              >
                <FileText className="mr-2 size-4" /> Download News Journal
              </Link>
              <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {newsletterDigestArticles.slice(0, 3).map((article, index) => (
                  <button
                    key={`${article.date}-${article.title}`}
                    type="button"
                    onClick={() => setSelectedArticle(article)}
                    className="rounded-xl border border-white/10 bg-white/10 p-4 text-left transition hover:bg-white/15"
                  >
                    <p className="text-2xl font-black text-[#FFC66B]">{String(index + 1).padStart(2, "0")}</p>
                    <p className="mt-1 text-xs font-black uppercase tracking-wide text-white/60">{article.category}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {newsletterDigestArticles.map((article) => (
                <article key={`${article.date}-${article.title}`} className="rounded-2xl border border-slate-100 bg-slate-50 p-5 transition hover:border-[#0B6232]/25 hover:bg-white hover:shadow-lg hover:shadow-slate-900/5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[#0B6232]/10 px-3 py-1 text-[10px] font-black uppercase tracking-wide text-[#0B6232]">{article.category}</span>
                    <span className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">{article.date}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-black leading-tight text-slate-950">{article.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{article.excerpt}</p>
                  <button
                    type="button"
                    onClick={() => setSelectedArticle(article)}
                    className="mt-5 inline-flex w-fit items-center rounded-xl bg-[#0B6232] px-5 py-3 text-sm font-black text-white transition hover:bg-[#084a26]"
                  >
                    Read Story <ArrowRight className="ml-2 size-4" />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="bg-slate-50/70 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-8 max-w-2xl">
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#0B6232]">Events</p>
            <h2 className="mt-2 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">Campus events and community moments</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              See event highlights from student life, public lectures, outreach programmes, and community engagements.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {eventArticles.map((article, index) => (
              <article key={`${article.date}-${article.title}`} className="flex min-h-[260px] flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:border-[#0B6232]/25 hover:shadow-xl hover:shadow-slate-900/10">
                <div className="flex items-start justify-between gap-4">
                  <div className="grid size-12 place-items-center rounded-xl bg-[#FFC66B] text-sm font-black text-[#0B6232]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <span className="rounded-full bg-[#0B6232] px-3 py-1 text-[10px] font-black uppercase tracking-wide text-white">
                    {article.category}
                  </span>
                </div>
                <p className="mt-5 text-xs font-black uppercase tracking-[0.16em] text-slate-500">{article.date}</p>
                <h3 className="mt-2 text-xl font-black leading-tight text-slate-950">{article.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{article.excerpt}</p>
                  <button
                    type="button"
                    onClick={() => setSelectedArticle(article)}
                    className="mt-auto inline-flex w-fit items-center rounded-xl bg-[#0B6232] px-5 py-3 text-sm font-black text-white transition hover:bg-[#084a26]"
                  >
                    Read More <ArrowRight className="ml-2 size-4" />
                  </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <NewsletterStoryModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
    </main>
  );
}
