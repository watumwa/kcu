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
    date: "20 August 2026",
    category: "Student Life",
    title: "Freshers' Orientation Underway at King Ceasor University",
    excerpt:
      "King Ceasor University is holding its Freshers' Orientation Programme, welcoming new students and preparing them for a successful university experience.",
    image: "/news-images/1W0A1839.JPG",
    imageAlt: "Freshers' Orientation Programme at King Ceasor University",
    gallery: [],
    story: [
      "Kampala - 20 August 2026",
      "King Ceasor University is holding its Freshers' Orientation Programme, welcoming new students and preparing them for a successful university experience.",
      "Throughout the programme, students are learning about academic expectations, campus facilities, student-support services and opportunities beyond the classroom. They are also meeting University leaders, faculty, staff and fellow students as they settle into the KCU community.",
      "The orientation provides an important foundation for students to confidently begin their academic journey, build new connections and make the most of university life.",
      "Welcome to King Ceasor University, where we ignite the future!",
    ],
  },
  {
    date: "11 August 2026",
    category: "Partnerships",
    title: "King Ceasor University Participates in Uganda's Inaugural National Cybersecurity Conference",
    excerpt:
      "King Ceasor University participated in Uganda's inaugural National Cybersecurity Conference at the Sheraton Kampala Hotel, represented by Vice Chancellor Dr Charity Basaza Mulenga, Dr. Habiba N. Ngugi and Assoc. Prof. Annabella H. Ejiri.",
    image: "/news-images/cyber-training.jpeg",
    imageAlt: "King Ceasor University representatives at Uganda's inaugural National Cybersecurity Conference at the Sheraton Kampala Hotel",
    highlights: [
      { label: "Dates", value: "11-12 August 2026" },
      { label: "Venue", value: "Sheraton Kampala Hotel" },
      { label: "Organisers", value: "Uganda Communications Commission & Uganda National CERT" },
    ],
    gallery: [],
    story: [
      "Kampala - 11 August 2026",
      "King Ceasor University participated in Uganda's inaugural National Cybersecurity Conference, held from 11 to 12 August 2026 at the Sheraton Kampala Hotel. The University was represented by Vice Chancellor Dr Charity Basaza Mulenga, Dr. Habiba N. Ngugi, Head of the Department of Computing, AI and Data Science, and Assoc. Prof. Annabella H. Ejiri, Director of Quality Assurance.",
      "Organised by the Uganda Communications Commission in partnership with the Uganda National Computer Emergency Response Team, the conference brought together representatives from government ministries, financial institutions, telecommunications companies and the technology sector under the theme, 'Securing Uganda's Digital Future: Collaboration, Resilience and Trust.'",
      "The conference explored ways of moving from isolated institutional responses to a coordinated national cybersecurity strategy. Discussions focused on cross-sector collaboration, financial and mobile-money security, mandatory information sharing, joint cybersecurity drills and the protection of critical infrastructure.",
      "The University's participation provided an important opportunity to engage with industry leaders, regulators and technology innovators on Uganda's evolving cybersecurity needs. It also reaffirmed King Ceasor University's commitment to advancing cybersecurity education, research and strategic partnerships that contribute to a secure and resilient digital Uganda.",
    ],
  },
  {
    date: "14 August 2026",
    category: "Student Life",
    title: "KCU Law Students Shine at Inaugural Digital Health Inter-University Moot Court Competition",
    excerpt:
      "KCU law students delivered an impressive performance at the inaugural Digital Health Inter-University Moot Court Competition at Makerere University, ranking third overall among six participating universities.",
    image: "/news-images/moot.jpeg",
    imageAlt: "KCU law students at the Digital Health Inter-University Moot Court Competition at Makerere University",
    gallery: [],
    story: [
      "Kampala - 14 August 2026",
      "King Ceasor University (KCU) law students delivered an impressive performance at the inaugural Digital Health Inter-University Moot Court Competition, held on 12-13th August 2026 at Makerere University.",
      "Organised by Makerere University School of Law in partnership with the University of Warwick School of Law, with support from the Wellcome Trust, the competition brought together law students from King Ceasor University, Makerere University, Islamic University in Uganda (IUIU), Kampala International University (KIU), Metropolitan University and Gulu University.",
      "KCU was represented by Arinda Lord and Kayaga Monica Catherine, under the guidance of their coach, Keith Busingye. The competition provided students with an opportunity to demonstrate their legal research, critical thinking and advocacy skills while engaging with emerging legal and ethical issues surrounding digital health.",
      "Following the competition, KCU was ranked third overall among the six participating universities. Arinda Lord, Kayaga Monica Catherine and their coach, Keith Busingye, were also awarded certificates of participation in recognition of their contribution to the competition.",
      "The achievement reflects King Ceasor University's commitment to experiential learning and providing students with opportunities to apply classroom knowledge, strengthen practical legal skills and engage with contemporary issues at the intersection of law, health and digital technology.",
    ],
  },
  {
    date: "12 August 2026",
    category: "Student Life",
    title: "King Ceasor University Student Represents Uganda at the 2026 ICMDA World Congress in South Korea",
    excerpt:
      "MBChB student Abasira Trinity Mungufeni represented King Ceasor University at the 2026 International Christian Medical and Dental Association World Congress in Jeju, South Korea, joining more than 1,300 Christian healthcare professionals from approximately 136 countries.",
    image: "/news-images/Photo8.jpg",
    imageAlt: "King Ceasor University student Abasira Trinity Mungufeni at the 2026 ICMDA World Congress in Jeju, South Korea",
    gallery: [],
    story: [
      "Jeju, South Korea - 12 August 2026",
      "King Ceasor University (KCU) was represented at the 2026 International Christian Medical and Dental Association (ICMDA) World Congress in Jeju, South Korea, by Abasira Trinity Mungufeni, a fourth-year Bachelor of Medicine and Bachelor of Surgery (MBChB) student.",
      "The week-long Congress brought together more than 1,300 Christian healthcare professionals, students and leaders from approximately 136 countries for learning, leadership development, networking, worship and the exchange of experiences in healthcare.",
      "Held under the theme \"Building God's Kingdom Amongst the Broken,\" inspired by Isaiah 58:12, the Congress featured plenary and breakout sessions focused on compassionate service, professional excellence and strengthening faith-based healthcare. Participants also interacted with doctors, dentists, students and healthcare leaders serving in different parts of the world.",
      "Reflecting on the experience, Abasira said: \"It was such a great privilege to represent Uganda and King Ceasor University; to worship together, open God's Word, pray, learn and enjoy great fellowship with Christian healthcare professionals from across the world.\"",
      "ICMDA brings together Christian medical and dental practitioners and students globally, with its World Congress held every four years. The previous Congress was held in Arusha, Tanzania, in 2022, while the next gathering is scheduled for 2030 in Surabaya, Indonesia. In Uganda, the Uganda Christian Medical Fellowship (UCMF) brings together Christian medical professionals and students from different medical schools. Its 14th Annual National Students' Conference and AGM is scheduled for 2–4 October 2026 at Scripture Union Campsite, Kawuku-Bugiri, under the theme \"Pursuit of Excellence.\"",
      "Abasira's participation reflects the growing opportunities for KCU students to engage with international professional communities, broaden their perspectives and represent the University and Uganda on global platforms.",
    ],
  },
  {
    date: "05 August 2026",
    category: "Leadership",
    title: "Dr. Byarugaba Baterena Hands Over Office as Deputy Vice Chancellor, Academic Affairs",
    excerpt:
      "King Ceasor University witnessed a significant leadership transition on 5 August 2026 as Dr. Byarugaba Baterena handed over the office of Deputy Vice Chancellor, Academic Affairs to Prof. Charles Kiiza Mondo, following three years of dedicated service.",
    image: "/news-images/IMG_7294.JPG",
    imageAlt: "King Ceasor University leadership handover ceremony for the Deputy Vice Chancellor, Academic Affairs",
    gallery: [],
    story: [
      "Kampala - 05 August 2026",
      "King Ceasor University on 5th August 2026 witnessed a significant transition in its academic leadership as Dr. Byarugaba Baterena officially handed over the office of Deputy Vice Chancellor, Academic Affairs to Prof. Charles Kiiza Mondo, following three years of dedicated service in the role.",
      "The handover ceremony marked the end of a distinguished chapter in Dr. Baterena's leadership journey at the University. During his tenure, he provided strategic direction in strengthening academic quality, promoting Competency-Based Education and Training (CBET), supporting curriculum development, enhancing quality assurance systems and advancing teaching, learning and research.",
      "His leadership also coincided with one of the University's most historic milestones — the attainment of the King Ceasor University Charter in 2025. This landmark achievement reaffirmed the University's commitment to academic excellence, institutional governance and quality higher education, further strengthening its position within Uganda's higher education sector. Dr. Baterena's contribution to this transformative journey formed an important part of the collective effort that culminated in the award of the Charter.",
      "Speaking during the handover, members of the University community acknowledged Dr. Baterena's unwavering commitment to institutional development and his invaluable contribution to strengthening King Ceasor University's academic programmes and governance.",
      "As he embarks on a new chapter in his professional career as Associate Professor of Internal Medicine, the University extends its heartfelt appreciation for his dedicated service, visionary leadership and lasting contribution to higher education.",
      "The University also warmly welcomes Prof. Mondo as he assumes the office as Acting Deputy Vice Chancellor, Academic Affairs. His appointment marks the beginning of a new phase of academic leadership as King Ceasor University continues to strengthen its commitment to innovation, quality education, research and institutional excellence.",
      "King Ceasor University congratulates Dr. Byarugaba Baterena on his well-deserved appointment and wishes him every success in his new role. The University likewise wishes Prof. Charles Kiiza Mondo every success as he leads the Academic Affairs Division in advancing the institution's mission of delivering transformative, globally competitive higher education.",
    ],
  },
  {
    date: "03 August 2026",
    category: "Partnerships",
    title: "King Ceasor University Signs Memorandum of Understanding with Victoria Hoa Binh University",
    excerpt:
      "King Ceasor University has officially signed a Memorandum of Understanding with Victoria Hoa Binh University of Viet Nam, marking the beginning of a strategic partnership for joint degree programmes, collaborative research, faculty exchange, student mobility and knowledge sharing.",
    image: "/news-images/mou-victoriahoa.jpeg",
    imageAlt: "King Ceasor University and Victoria Hoa Binh University signing ceremony for their Memorandum of Understanding",
    gallery: [],
    story: [
      "Kampala - 03 August 2026",
      "King Ceasor University (KCU) has officially signed a Memorandum of Understanding (MoU) with Victoria Hoa Binh University (VHB) of Viet Nam, marking the beginning of a strategic partnership that will strengthen academic cooperation and international engagement between the two institutions.",
      "The partnership establishes a framework for collaboration across a range of academic and research activities, including joint degree programmes, collaborative research projects, faculty exchange, student mobility and the sharing of academic expertise. Through this agreement, both universities aim to promote innovation, enhance teaching and learning, and contribute to addressing shared regional and global development challenges.",
      "The Memorandum of Understanding reflects the shared vision of both institutions to build internationally connected universities that prepare graduates for leadership in an increasingly globalised world. By fostering collaboration across disciplines, the partnership is expected to create new opportunities for students, researchers and academic staff while strengthening institutional capacity through knowledge exchange.",
      "The agreement represents another important milestone in King Ceasor University's internationalisation agenda, reinforcing its commitment to developing strategic global partnerships that expand academic opportunities, promote research excellence and enhance the University's contribution to society.",
      "King Ceasor University looks forward to a productive and enduring partnership with Victoria Hoa Binh University as both institutions work together to advance higher education, research and innovation across Uganda, Viet Nam and beyond.",
    ],
  },
  {
    date: "30 July 2026",
    category: "Community",
    title: "King Ceasor University Participates in Greenhill Academy Careers Day",
    excerpt:
      "On 30th July 2026, King Ceasor University participated in Greenhill Academy's Careers Day, engaging students through an exhibition and career guidance sessions covering academic programmes, admission opportunities, and career prospects.",
    image: "/news-images/out-reach.jpeg",
    imageAlt: "King Ceasor University representatives at Greenhill Academy Careers Day",
    gallery: [],
    story: [
      "Kampala - 30 July 2026",
      "King Ceasor University participated in Greenhill Academy's Careers Day on 30th July 2026, an event designed to help students explore academic opportunities and make informed career decisions. The programme featured keynote presentations, mental health and well-being discussions, career panel sessions, and interactive career guidance clinics involving professionals from various disciplines.",
      "During the event, the University's team engaged students through the exhibition and career guidance sessions, providing information about academic programmes, admission opportunities, and career prospects across different fields of study. Students had the opportunity to interact with the University's representatives, ask questions about their preferred courses, and gain valuable insights into university life and the skills required to succeed in their chosen careers.",
      "The Careers Day also provided an excellent platform for King Ceasor University to showcase its diverse academic programmes and student-centred learning environment while strengthening relationships with prospective students, parents, and educators. The University's participation reaffirmed its commitment to supporting secondary school learners through mentorship, career guidance, and community engagement, while fostering partnerships with schools that inspire learners to pursue higher education with confidence and purpose.",
    ],
  },
  {
    date: "31 July 2026",
    category: "Partnerships",
    title: "KCU Represented at the 17th IUCEA Annual Meeting and Conference in Nairobi",
    excerpt:
      "King Ceasor University participated in the 17th Inter-University Council for East Africa (IUCEA) Annual Meeting and Conference in Nairobi, Kenya, from 29th to 31st July 2026, represented by Prof. Peter Turyakira on behalf of the Vice Chancellor.",
    image: "/news-images/iucea.jpeg",
    imageAlt: "King Ceasor University representatives at the 17th IUCEA Annual Meeting and Conference in Nairobi, Kenya",
    gallery: [],
    story: [
      "Nairobi, Kenya - 31 July 2026",
      "King Ceasor University participated in the 17th Inter-University Council for East Africa (IUCEA) Annual Meeting and Conference, held from 29th to 31st July 2026 in Nairobi, Kenya. The University was represented by Prof. Peter Turyakira on behalf of the Vice Chancellor.",
      "Held under the theme, \"Powering the Future of Higher Education in East Africa through Strategic Partnerships and Collaborations,\" the conference brought together higher education leaders, policymakers, researchers and development partners from across the East African region to discuss innovative approaches to strengthening universities through collaboration.",
      "Representing King Ceasor University, Prof. Turyakira used the conference as an opportunity to establish and strengthen professional networks that will support the University's strategic priorities. The engagements created opportunities for partnerships in academic collaboration, research, staff and student mobility, institutional capacity building, and knowledge exchange.",
      "The University's participation reaffirmed King Ceasor University's commitment to expanding its regional and international partnerships as part of its vision to deliver quality education, promote innovation, and contribute to the sustainable development of higher education across East Africa.",
    ],
  },
  {
    date: "29 July 2026",
    category: "Student Life",
    title: "KCU Year 3.1 Medical Students Participate in Community Medical Camp in Ggaba",
    excerpt:
      "Year 3.1 medical students joined a community medical camp at St. Karoli Catholic Church, Ggaba, supporting cancer screening, laboratory tests, patient clerking and pharmacy services.",
    image: "/news-images/image1.jpeg",
    imageAlt: "King Ceasor University Year 3.1 medical students at a community medical camp in Ggaba",
    gallery: [],
    story: [
      "Ggaba, Kampala - 27 July 2026",
      "King Ceasor University Year 3.1 medical students participated in a community medical camp held on 27th July 2026 at St. Karoli Catholic Church, Ggaba. The outreach, sponsored by Nsambya Hospital Ggaba Branch, brought together healthcare professionals and students to provide essential medical services to members of the community while promoting preventive healthcare and early disease detection.",
      "During the medical camp, the students actively supported the delivery of a range of healthcare services, including breast and cervical cancer screening, laboratory tests, patient clerking and pharmacy services. Working alongside experienced healthcare professionals, the students gained valuable hands-on clinical experience, strengthened their patient interaction skills and enhanced their understanding of community-based healthcare.",
      "The outreach forms part of King Ceasor University’s commitment to experiential learning by providing students with opportunities to apply classroom knowledge in real-life healthcare settings. Such engagements not only build clinical competence but also nurture professionalism, compassion and a strong sense of service among future healthcare practitioners.",
      "King Ceasor University remains dedicated to producing competent and socially responsible medical professionals through quality education, practical training and active community engagement that contributes to improved health outcomes across Uganda.",
    ],
  },
  {
    date: "24 July 2026",
    category: "Student Life",
    title: "KCU Student Leaders Participate in the 3rd Annual East Africa Guild Leaders’ Summit",
    excerpt:
      "KCU’s Guild leadership joined the 3rd Annual East Africa Guild Leaders’ Summit at Makerere University, engaging with student leaders from across East Africa on governance, leadership and regional integration.",
    image: "/news-images/image0.jpeg",
    imageAlt: "King Ceasor University guild leaders at the 3rd Annual East Africa Guild Leaders’ Summit at Makerere University",
    gallery: [],
    story: [
      "Kampala - 24 July 2026",
      "King Ceasor University’s Guild leadership participated in the 3rd Annual East Africa Guild Leaders’ Summit held on 23rd and 24th July 2026 at Makerere University’s Freedom Square in Kampala. Organised by the Guild Presidents Leadership Academy, the regional summit brought together University Guild Presidents and senior student leaders from institutions across East Africa.",
      "The two-day summit provided a platform for participants to engage in meaningful discussions on governance, leadership, regional integration and youth participation in public affairs. Student leaders shared experiences, exchanged ideas and explored ways through which young people can contribute to institutional development and the social, economic and political transformation of the East African region.",
      "Through its participation, King Ceasor University reaffirmed its commitment to developing responsible, confident and visionary student leaders. The engagement also offered the University’s representatives an opportunity to expand their leadership networks, learn from their counterparts and strengthen collaboration with student leadership structures across the region.",
      "Participation in such regional platforms complements the University’s efforts to provide students with learning and leadership opportunities beyond the classroom, while preparing them to take an active role in addressing issues affecting their institutions, communities and the wider East African region.",
    ],
  },
  {
    date: "20 July 2026",
    category: "Announcements",
    title: "NOTICE OF EXTENSION OF THE STUDENTS' LOAN APPLICATION DEADLINE FOR ACADEMIC YEAR 2026/2027",
    excerpt:
      "The Ministry of Education and Sports has extended the Higher Education Students' Financing Scheme loan application deadline for AY 2026/2027 from 17 July 2026 to 31 July 2026, to allow institutions time to conclude admissions.",
    image: "/news-images/News-Advert.png",
    imageAlt: "Notice of extension of the student loan application deadline for Academic Year 2026/2027",
    highlights: [
      { label: "Previous Deadline", value: "17 July 2026" },
      { label: "New Deadline", value: "31 July 2026" },
      { label: "Academic Year", value: "2026/2027" },
    ],
    gallery: [],
    story: [
      "Kampala - 20 July 2026",
      "The Higher Education Students Financing Scheme is established by the Higher Education Students' Financing (Amendment) Act, 2024 as a Department under the Ministry of Education and Sports (The Ministry) to administer the Students Loan Scheme. The Law mandates the Ministry to provide Loans and Scholarships to Students who wish to pursue Higher Education in Uganda.",
      "The objectives of the Higher Education Students' Financing Scheme are to: increase equitable access to Higher Education in Uganda; support highly qualified students who may not afford Higher Education; support programmes critical for national development; ensure regional balance in Higher Education services in Uganda with emphasis to the District Quota distribution of loans; and create a revolving fund.",
      "The Ministry has noted that the majority of Other Tertiary Institutions (OTIs), Other Degree Awarding Institutions, and some Universities have not yet concluded the admission process for the Academic Year 2026/2027 due to institution-specific challenges.",
      "The Ministry takes cognizance of the fact that many prospective applicants have not yet received admission letters and therefore have incomplete applications, while others are yet to commence the application process.",
      "In view of the above, the Ministry hereby informs the general public that the student loan application deadline for the Academic Year 2026/2027, which was previously 17 July 2026, has been extended to 31 July 2026.",
    ],
  },
  {
    date: "15 July 2026",
    category: "Events",
    title: "King Ceasor University Conducts Competency-Based Education and Training (CBET) Practical Training Workshop for Lecturers",
    excerpt:
      "KCU conducted a CBET Practical Training Workshop for lecturers, shifting teaching from content-based instruction to learner-centred, competency-driven education that prioritizes workplace readiness.",
    image: "/news-images/cbet-traininig.jpeg",
    imageAlt: "King Ceasor University lecturers during the Competency-Based Education and Training (CBET) Practical Training Workshop",
    highlights: [
      { label: "Date", value: "15 July 2026" },
      { label: "Facilitator", value: "Mr. John Bosco Kwesiga" },
      { label: "Taskforce Chair", value: "Dr. Byarugaba Baterena" },
    ],
    gallery: [],
    story: [
      "Bunga, Kampala - 15 July 2026",
      "On Wednesday, 15 July 2026, King Ceasor University conducted a Competency-Based Education and Training (CBET) Practical Training Workshop for lecturers as part of its ongoing commitment to enhancing teaching quality and producing graduates equipped with practical, industry-relevant skills. The workshop was attended by lecturers from the School of Medicine, Health and Life Sciences, including the Departments of Nursing, Public Health and Laboratory (Physiology) as well as the School of Science, Computing and Engineering, including the Departments of Petroleum Geoscience, Computer Forensics and the Higher Education Certificate programme.",
      "The training was facilitated by Mr. John Bosco Kwesiga under the leadership of the Chairperson of the CBET Taskforce, Dr. Byarugaba Baterena, who guided participants through the principles and practical application of competency-based education. The workshop emphasized shifting from traditional content-based instruction to learner-centred teaching that prioritizes measurable competencies, practical demonstrations, problem-solving, and workplace readiness.",
      "In his opening remarks, the Deputy Vice Chancellor highlighted that today's employers seek graduates who can not only demonstrate knowledge but also apply it effectively in real-world situations. He noted that CBET encourages educators to ask not merely what has been taught, but what learners are able to competently perform after the learning experience. Through examples drawn from nursing, computer science and business administration, he underscored the importance of aligning teaching methods and assessment with practical competencies.",
      "Participants also explored competency development models such as Miller's Pyramid of Competence and the Four Stages of Competence, reinforcing the importance of guided practice, authentic assessment and continuous improvement. The workshop reaffirmed King Ceasor University's commitment to educational excellence by equipping lecturers with approaches that foster innovation, ethical practice and graduate employability while responding to the evolving needs of society.",
    ],
  },
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
  const [latestPage, setLatestPage] = useState(1);
  const [newsletterPage, setNewsletterPage] = useState(1);
  const [eventsPage, setEventsPage] = useState(1);
  const PER_PAGE = 6;

  const latestGridAll = newsletterArticles.slice(1).slice(0, latestPage * PER_PAGE);
  const latestGridVisible = latestGridAll.slice(-PER_PAGE);
  const latestHasMore = latestGridAll.length < newsletterArticles.slice(1).length;
  const latestHasPrev = latestPage > 1;

  const digestAll = newsletterArticles.slice(4);
  const digestVisible = digestAll.slice(0, newsletterPage * PER_PAGE).slice(-PER_PAGE);
  const digestHasMore = digestAll.length > PER_PAGE && digestAll.length > newsletterPage * PER_PAGE;
  const digestHasPrev = newsletterPage > 1;

  const eventsAll = newsletterArticles
    .filter((article) => ["Community Outreach", "Student Life", "Events", "Community"].includes(article.category));
  const eventsVisible = eventsAll.slice(0, eventsPage * PER_PAGE).slice(-PER_PAGE);
  const eventsHasMore = eventsAll.length > PER_PAGE && eventsAll.length > eventsPage * PER_PAGE;
  const eventsHasPrev = eventsPage > 1;

  return (
    <main className="min-h-screen bg-white pt-12 sm:pt-14 lg:pt-24">
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
                {newsletterArticles[0].image && (
                  <Image
                    src={newsletterArticles[0].image}
                    alt={newsletterArticles[0].imageAlt ?? newsletterArticles[0].title}
                    fill
                    sizes="(min-width: 1024px) 52vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#FFC66B]/30 px-3 py-1 text-xs font-black text-[#0B6232]">{newsletterArticles[0].category}</span>
                  <span className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">{newsletterArticles[0].date}</span>
                </div>
                <h3 className="mt-5 text-2xl font-black leading-tight text-slate-950 sm:text-3xl">{newsletterArticles[0].title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">{newsletterArticles[0].excerpt}</p>
                <button
                  type="button"
                  onClick={() => setSelectedArticle(newsletterArticles[0])}
                  className="mt-7 inline-flex w-fit items-center rounded-xl bg-[#0B6232] px-5 py-3 text-sm font-black text-white transition hover:bg-[#084a26]"
                >
                  Read More <ArrowRight className="ml-2 size-4" />
                </button>
              </div>
            </div>
          </article>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {latestGridVisible.map((article) => (
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

          {(latestHasMore || latestHasPrev) && (
            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setLatestPage((page) => Math.max(1, page - 1))}
                disabled={!latestHasPrev}
                className="inline-flex items-center rounded-xl bg-[#0B6232] px-5 py-3 text-sm font-black text-white transition hover:bg-[#084a26] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ArrowRight className="mr-2 size-4 rotate-180" /> View latest
              </button>
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-black text-slate-600">
                Page {latestPage}
              </span>
              <button
                type="button"
                onClick={() => setLatestPage((page) => page + 1)}
                disabled={!latestHasMore}
                className="inline-flex items-center rounded-xl bg-[#0B6232] px-5 py-3 text-sm font-black text-white transition hover:bg-[#084a26] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                View older <ArrowRight className="ml-2 size-4" />
              </button>
            </div>
          )}
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
                href="/newsletter/JULY Journal 4 v-2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center rounded-xl bg-[#FFC66B] px-5 py-3 text-sm font-black text-[#0B6232] transition hover:bg-[#f4b850]"
              >
                <FileText className="mr-2 size-4" /> Download News Journal
              </Link>
              <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {digestVisible.slice(0, 3).map((article, index) => (
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
              {digestVisible.map((article) => (
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

            {(digestHasMore || digestHasPrev) && (
              <div className="mt-8 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setNewsletterPage((page) => Math.max(1, page - 1))}
                  disabled={!digestHasPrev}
                  className="inline-flex items-center rounded-xl bg-[#0B6232] px-5 py-3 text-sm font-black text-white transition hover:bg-[#084a26] disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ArrowRight className="mr-2 size-4 rotate-180" /> View latest
                </button>
                <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-black text-slate-600">
                  Page {newsletterPage}
                </span>
                <button
                  type="button"
                  onClick={() => setNewsletterPage((page) => page + 1)}
                  disabled={!digestHasMore}
                  className="inline-flex items-center rounded-xl bg-[#0B6232] px-5 py-3 text-sm font-black text-white transition hover:bg-[#084a26] disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  View older <ArrowRight className="ml-2 size-4" />
                </button>
              </div>
            )}
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
            {eventsVisible.map((article, index) => (
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

          {(eventsHasMore || eventsHasPrev) && (
            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setEventsPage((page) => Math.max(1, page - 1))}
                disabled={!eventsHasPrev}
                className="inline-flex items-center rounded-xl bg-[#0B6232] px-5 py-3 text-sm font-black text-white transition hover:bg-[#084a26] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ArrowRight className="mr-2 size-4 rotate-180" /> View latest
              </button>
              <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-black text-slate-600">
                Page {eventsPage}
              </span>
              <button
                type="button"
                onClick={() => setEventsPage((page) => page + 1)}
                disabled={!eventsHasMore}
                className="inline-flex items-center rounded-xl bg-[#0B6232] px-5 py-3 text-sm font-black text-white transition hover:bg-[#084a26] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                View older <ArrowRight className="ml-2 size-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      <NewsletterStoryModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
    </main>
  );
}
