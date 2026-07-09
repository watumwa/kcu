import datetime
from django.core.management.base import BaseCommand
from django.utils.text import slugify
from core.models import (
    SiteSettings, NavItem, NavChild, NavGrandChild,
    HeroSlide, QuickLink
)
from academics.models import School, Course, UpcomingEvent
from admissions.models import AdmissionRequirement, AdmissionProcess, FeeStructure
from news.models import NewsItem

NAV_DATA = [
    {"label": "Home", "href": "/", "disable_link": False, "description": "Return to the KCU homepage.", "children": []},
    {"label": "About Us", "href": "/about", "disable_link": False, "description": "Learn about KCU.", "children": [
        {"label": "About KCU", "href": "/about", "children": []},
        {"label": "Mission | Vision | Core Values", "href": "/about#mission-vision", "children": []},
        {"label": "Governance", "href": "/about#trustees", "children": []},
        {"label": "News Letter", "href": "/about/newsletter", "children": []},
    ]},
    {"label": "Admissions", "href": "/admissions", "disable_link": True, "description": "Application guidance and fees.", "children": [
        {"label": "Apply Now", "href": "https://apply.kcu.ac.ug/", "children": []},
        {"label": "Fees Structure", "href": "/admissions/fees-structure", "children": []},
        {"label": "Admission Requirements", "href": "/admissions/admission-requirements", "children": []},
    ]},
    {"label": "Academics", "href": "", "disable_link": True, "description": "Schools, courses and online learning.", "children": [
        {"label": "Schools", "href": "/academics/schools", "children": []},
        {"label": "Courses", "href": "/academics/courses", "children": [
            {"label": "Undergraduate", "href": "/academics/courses/undergraduate"},
            {"label": "Diploma", "href": "/academics/courses/diploma"},
            {"label": "Certificates", "href": "/academics/courses/short-courses"},
        ]},
        {"label": "Academia", "href": "https://academia.kcu.ac.ug/", "children": []},
        {"label": "K-Class", "href": "https://vclass.kcu.ac.ug/", "children": []},
    ]},
    {"label": "Student", "href": "/student", "disable_link": True, "description": "Student life and services.", "children": [
        {"label": "Guild", "href": "/student/guild", "children": []},
        {"label": "Campus Life", "href": "/student/campus-life", "children": []},
        {"label": "Graduation Ceremonies", "href": "/academics/graduation", "children": []},
        {"label": "Dean of Students", "href": "/student/dean-of-students", "children": []},
    ]},
    {"label": "Services", "href": "/services", "disable_link": True, "description": "Library, counselling and quality assurance.", "children": [
        {"label": "Library", "href": "/library", "children": []},
        {"label": "Quality Assurance", "href": "/services/quality-assurance", "children": []},
        {"label": "Counselling", "href": "/services/counselling", "children": []},
    ]},
    {"label": "Gallery", "href": "/gallery", "disable_link": False, "description": "Photos from KCU events.", "children": []},
    {"label": "Alumni", "href": "/alumni", "disable_link": False, "description": "Alumni network.", "children": []},
    {"label": "Careers", "href": "/careers", "disable_link": False, "description": "Jobs at KCU.", "children": []},
]

HERO_DATA = [
    {"badge": "Join KCU Today", "school": "August Intake Now Open", "title": "Undergraduate | Diploma | Certificates", "cta": "Apply Here", "cta_href": "https://apply.kcu.ac.ug/", "image_url": "/graduation-graphic.jpeg", "image_position": "center 0%", "programmes": []},
    {"badge": "School of Law & Management Sciences", "school": "", "title": "Bachelor of Laws | Bachelor of Business Administration & More", "cta": "Explore Courses", "cta_href": "/academics/courses", "image_url": "/images/kcu-2026/library-collaboration.webp", "image_position": "center 0%", "programmes": []},
    {"badge": "Admissions Office", "school": "Intakes: April & August", "title": "King Ceasor University", "cta": "Apply Online", "cta_href": "https://apply.kcu.ac.ug/", "image_url": "/images/kcu-2026/graduates-best-of-best.webp", "image_position": "center 60%", "programmes": ["Undergraduate programmes across schools and faculties", "Postgraduate studies for professionals and researchers", "Flexible learning pathways for working students", "International student support and guidance"]},
    {"badge": "School of Medicine, Health & Life Sciences", "school": "", "title": "Bachelor of Medicine & Bachelor of Surgery | Bachelor of Nursing Science", "cta": "Explore Courses", "cta_href": "/academics/courses", "image_url": "/images/kcu-2026/lab-chemistry-students.webp", "image_position": "center 0%", "programmes": []},
    {"badge": "Short Courses", "school": "Certificates in:", "title": "Language Proficiency | Digital Marketing | Computer Applications", "cta": "Explore Courses", "cta_href": "/academics/courses/short-courses", "image_url": "/images/kcu-2026/library-shelves-student.webp", "image_position": "center 0%", "programmes": []},
    {"badge": "Student Experience", "school": "Campus Life at KCU", "title": "A Supportive University Community", "cta": "Explore Student Life", "cta_href": "/student/campus-life", "image_url": "/images/kcu-2026/student-laptop-collaboration.webp", "image_position": "center 0%", "programmes": ["Student leadership", "Clubs and campus activities", "Learning resources", "Student support services"]},
]

QUICKLINKS_DATA = [
    {"title": "Admissions", "text": "Start your application and follow clear admissions steps for the next intake.", "href": "/admissions/admission-requirements"},
    {"title": "Programmes", "text": "Browse undergraduate, postgraduate, diploma and professional courses.", "href": "/academics/courses"},
    {"title": "Student Life", "text": "Explore support services, clubs, leadership, learning resources and campus life.", "href": "/student/campus-life"},
    {"title": "News & Events", "text": "Follow university announcements, events, research highlights and student stories.", "href": "/news"},
]

SCHOOLS_DATA = [
    {
        "name": "School of Medicine, Health & Life Sciences", "slug": "medicine-health-life-sciences", "short_name": "SMHLS",
        "description": "Training the next generation of health professionals through rigorous academic and clinical education.",
        "courses": [
            {"name": "Bachelor of Medicine and Bachelor of Surgery", "slug": "mbbs", "level": "undergraduate", "duration": "5"},
            {"name": "Bachelor of Nursing Science", "slug": "bachelor-nursing-science", "level": "undergraduate", "duration": "4"},
            {"name": "Bachelor of Pharmacy", "slug": "bachelor-pharmacy", "level": "undergraduate", "duration": "4"},
            {"name": "Bachelor of Medical Laboratory Science", "slug": "bachelor-medical-lab-science", "level": "undergraduate", "duration": "4"},
            {"name": "Bachelor of Environmental Health Science", "slug": "bachelor-environmental-health", "level": "undergraduate", "duration": "4"},
            {"name": "Diploma in Nursing", "slug": "diploma-nursing", "level": "diploma", "duration": "3"},
            {"name": "Diploma in Clinical Medicine", "slug": "diploma-clinical-medicine", "level": "diploma", "duration": "3"},
        ],
    },
    {
        "name": "School of Law & Management Sciences", "slug": "law-management-sciences", "short_name": "SLMS",
        "description": "Developing legal minds and business leaders equipped to navigate modern professional environments.",
        "courses": [
            {"name": "Bachelor of Laws", "slug": "bachelor-of-laws", "level": "undergraduate", "duration": "4"},
            {"name": "Bachelor of Business Administration", "slug": "bachelor-business-administration", "level": "undergraduate", "duration": "3"},
            {"name": "Bachelor of Commerce", "slug": "bachelor-commerce", "level": "undergraduate", "duration": "3"},
            {"name": "Bachelor of Human Resource Management", "slug": "bachelor-human-resource-management", "level": "undergraduate", "duration": "3"},
            {"name": "Diploma in Business Administration", "slug": "diploma-business-administration", "level": "diploma", "duration": "2"},
            {"name": "Diploma in Law", "slug": "diploma-law", "level": "diploma", "duration": "2"},
        ],
    },
    {
        "name": "School of Science, Computing & Engineering", "slug": "science-computing-engineering", "short_name": "SSCE",
        "description": "Building innovators and problem-solvers through science, technology and engineering education.",
        "courses": [
            {"name": "Bachelor of Science in Computer Science", "slug": "bsc-computer-science", "level": "undergraduate", "duration": "3"},
            {"name": "Bachelor of Science in Information Technology", "slug": "bsc-information-technology", "level": "undergraduate", "duration": "3"},
            {"name": "Bachelor of Petroleum Geoscience", "slug": "bachelor-petroleum-geoscience", "level": "undergraduate", "duration": "4"},
            {"name": "Diploma in Information Technology", "slug": "diploma-information-technology", "level": "diploma", "duration": "2"},
            {"name": "Certificate in Computer Applications", "slug": "cert-computer-applications", "level": "certificate", "duration": "1"},
            {"name": "Certificate in Digital Marketing", "slug": "cert-digital-marketing", "level": "certificate", "duration": "1"},
            {"name": "Certificate in Language Proficiency", "slug": "cert-language-proficiency", "level": "certificate", "duration": "1"},
        ],
    },
]

EVENTS_DATA = [
    {"title": "Research & Innovation Conference 2026", "date": datetime.date(2026, 6, 12), "location": "KCU Main Auditorium", "status": "Completed"},
    {"title": "Graduation Ceremony 2026", "date": datetime.date(2026, 6, 18), "location": "Kampala Serena Hotel", "status": "Completed"},
    {"title": "Open Day for Prospective Students", "date": datetime.date(2026, 6, 22), "location": "Bunga Hill Campus", "status": "Completed"},
    {"title": "August Intake Registration Opens", "date": datetime.date(2026, 7, 5), "location": "Registry Office / Online", "status": "Upcoming"},
]

FEES_DATA = [
    {"programme": "Bachelor of Medicine and Bachelor of Surgery", "level": "undergraduate", "academic_year": "2025/2026", "student_type": "local", "tuition_per_year": 4500000, "functional_fees": 500000},
    {"programme": "Bachelor of Nursing Science", "level": "undergraduate", "academic_year": "2025/2026", "student_type": "local", "tuition_per_year": 3500000, "functional_fees": 500000},
    {"programme": "Bachelor of Pharmacy", "level": "undergraduate", "academic_year": "2025/2026", "student_type": "local", "tuition_per_year": 3800000, "functional_fees": 500000},
    {"programme": "Bachelor of Laws", "level": "undergraduate", "academic_year": "2025/2026", "student_type": "local", "tuition_per_year": 2800000, "functional_fees": 500000},
    {"programme": "Bachelor of Business Administration", "level": "undergraduate", "academic_year": "2025/2026", "student_type": "local", "tuition_per_year": 2500000, "functional_fees": 500000},
    {"programme": "Bachelor of Commerce", "level": "undergraduate", "academic_year": "2025/2026", "student_type": "local", "tuition_per_year": 2500000, "functional_fees": 500000},
    {"programme": "Bachelor of Science in Computer Science", "level": "undergraduate", "academic_year": "2025/2026", "student_type": "local", "tuition_per_year": 2800000, "functional_fees": 500000},
    {"programme": "Bachelor of Petroleum Geoscience", "level": "undergraduate", "academic_year": "2025/2026", "student_type": "local", "tuition_per_year": 3200000, "functional_fees": 500000},
    {"programme": "Diploma in Nursing", "level": "diploma", "academic_year": "2025/2026", "student_type": "local", "tuition_per_year": 2000000, "functional_fees": 400000},
    {"programme": "Diploma in Business Administration", "level": "diploma", "academic_year": "2025/2026", "student_type": "local", "tuition_per_year": 1800000, "functional_fees": 400000},
    {"programme": "Certificate in Computer Applications", "level": "certificate", "academic_year": "2025/2026", "student_type": "local", "tuition_per_year": 800000, "functional_fees": 200000},
    {"programme": "Certificate in Digital Marketing", "level": "certificate", "academic_year": "2025/2026", "student_type": "local", "tuition_per_year": 800000, "functional_fees": 200000},
]

NEWS_DATA = [
    {"category": "Community", "title": "KCU Supports Community Blood Donation Activity", "date": datetime.date(2026, 6, 23), "text": "KCU health professionals supported donors through attentive care, clinical assistance and community health engagement.", "image_url": "/images/community-health/blood-donation-2026/kcu-health-team.webp", "href": "/gallery#blood-donation-drive-2026", "featured": True},
    {"category": "Community", "title": "King Ceasor University Marks Day of the African Child", "date": datetime.date(2026, 6, 16), "text": "KCU held a career guidance and donation drive in Ggaba, engaging about 300 Advanced Level students.", "image_url": "/images/outreach/st-denis-2026/career-guidance-speaker.webp", "href": "/about/newsletter", "featured": False},
    {"category": "Student Life", "title": "KCU Represented at AUUS Sports Leadership Engagement at MUST", "date": datetime.date(2026, 6, 12), "text": "KCU Sports Tutor and Guild Minister of Sports joined university sports leaders at MUST for an AUUS engagement.", "image_url": "/images/student-activity/auus-sports-leadership-2026/auus-sports-leadership-forum-group.jpeg", "href": "/about/newsletter", "featured": False},
    {"category": "Partnerships", "title": "KCU Signs Strategic Partnership with Tecnovia", "date": datetime.date(2026, 6, 10), "text": "KCU signed an MoU with Tecnovia Uganda Branch to expand industrial training, internships and employment pathways.", "image_url": "https://kcu.ac.ug/wp-content/uploads/2026/06/partnership-1.webp", "href": "https://kcu.ac.ug/kcu-signs-strategic-partnership-with-tecnovia-to-enhance-student-skills-and-employment-opportunities/", "featured": False},
    {"category": "Partnerships", "title": "Department of Law Signs MOU with Praxis Conflict Centre", "date": datetime.date(2026, 6, 10), "text": "The Department of Law signed an MoU with Praxis Conflict Centre to strengthen Alternative Dispute Resolution education.", "image_url": "https://kcu.ac.ug/wp-content/uploads/2026/06/law-scaled.webp", "href": "https://kcu.ac.ug/department-of-law-signs-memorandum-of-understanding-with-praxis-conflict-centre/", "featured": False},
    {"category": "Student Life", "title": "Law Students Honoured for Outstanding Performance in Moot and Debate", "date": datetime.date(2026, 6, 1), "text": "The Vice Chancellor honoured outstanding Law students following their success in regional moot court and debate competitions.", "image_url": "https://kcu.ac.ug/wp-content/uploads/2026/06/WhatsApp-Image-2026-05-29-at-18.57.36.jpeg", "href": "https://kcu.ac.ug/law-students-honoured-for-outstanding-performance-in-regional-moot-and-debate-competitions/", "featured": False},
    {"category": "Events", "title": "KCU Hosts Public Lecture on Universal Jurisdiction and Transnational Litigation", "date": datetime.date(2026, 5, 26), "text": "KCU hosted a public lecture for law students and practitioners on universal jurisdiction and transnational litigation.", "image_url": "https://kcu.ac.ug/wp-content/uploads/2026/05/DSC09363.jpg-1.jpeg", "href": "https://kcu.ac.ug/king-ceasor-university-hosts-public-lecture-on-universal-jurisdiction-and-transnational-litigation/", "featured": False},
    {"category": "Partnerships", "title": "KCU Signs MOU with HESFB to Expand Access to Student Financing", "date": datetime.date(2026, 5, 20), "text": "KCU signed an MoU with the Higher Education Students Financing Board to expand access to affordable higher education.", "image_url": "https://kcu.ac.ug/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-20-at-17.30.28.jpeg", "href": "https://kcu.ac.ug/king-ceasor-university-signs-mou-with-hesfs-to-expand-access-to-student-financing/", "featured": False},
    {"category": "Student Life", "title": "Guild Leadership Swearing-In Ceremony Held at KCU", "date": datetime.date(2026, 5, 20), "text": "KCU officially held the swearing-in ceremony for the newly elected guild leadership at the university rooftop.", "image_url": "https://kcu.ac.ug/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-15-at-19.45.26-e1779277565886.jpeg", "href": "https://kcu.ac.ug/guild-leadership-swearing-in-ceremony-held-at-king-ceasor-university/", "featured": False},
    {"category": "Research", "title": "KCU Showcases Aqua Clean Innovation at the Oil and Gas Skills Expo 2026", "date": datetime.date(2026, 5, 14), "text": "The Department of Petroleum Geoscience showcased Aqua Clean during the 3rd Oil and Gas Skills Expo at Makerere University.", "image_url": "https://kcu.ac.ug/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-13-at-20.19.46.jpeg", "href": "https://kcu.ac.ug/kcu-department-of-petroleum-geoscience-showcases-aqua-clean-innovation-at-the-3rd-oil-gas-skills-expo-2026/", "featured": False},
]

REQUIREMENTS_DATA = [
    {"level": "undergraduate", "title": "UACE + UCE Requirements", "content": "Applicants must hold a Uganda Certificate of Education (UCE) with at least 5 passes including English and Mathematics, plus a Uganda Advanced Certificate of Education (UACE) with at least 2 principal passes.", "order": 1},
    {"level": "diploma", "title": "UCE Requirements", "content": "Applicants must hold a Uganda Certificate of Education (UCE) with at least 5 passes including English. Relevant work experience may be considered for mature entry.", "order": 2},
    {"level": "certificate", "title": "UCE Requirements", "content": "Applicants must hold a Uganda Certificate of Education (UCE) with at least 4 passes. Some programmes may have specific subject requirements.", "order": 3},
]

PROCESS_DATA = [
    {"step_number": 1, "title": "Choose Your Programme", "description": "Browse available programmes on the KCU website and select the one that matches your goals.", "icon": "search"},
    {"step_number": 2, "title": "Apply Online", "description": "Complete the online application form at apply.kcu.ac.ug. Ensure all fields are filled accurately.", "icon": "edit"},
    {"step_number": 3, "title": "Submit Documents", "description": "Upload your academic certificates, national ID, passport photos and any other required documents.", "icon": "upload"},
    {"step_number": 4, "title": "Admission Decision", "description": "The admissions office will review your application and notify you of the decision via email or phone.", "icon": "mail"},
    {"step_number": 5, "title": "Pay Fees and Register", "description": "Upon acceptance, pay your tuition fees and complete formal registration at the university registry.", "icon": "credit-card"},
]


class Command(BaseCommand):
    help = 'Seed the database with initial KCU data'

    def add_arguments(self, parser):
        parser.add_argument('--clear', action='store_true', help='Clear existing data before seeding')

    def handle(self, *args, **options):
        if options['clear']:
            self.stdout.write(self.style.WARNING('Clearing data...'))
            for model in [NavItem, HeroSlide, QuickLink, School, UpcomingEvent, NewsItem, FeeStructure, AdmissionRequirement, AdmissionProcess]:
                model.objects.all().delete()

        self._site_settings()
        self._navigation()
        self._hero_slides()
        self._quick_links()
        self._schools_and_courses()
        self._events()
        self._fees()
        self._news()
        self._admission_requirements()
        self._admission_process()
        self.stdout.write(self.style.SUCCESS('\n✅  Seeding complete!'))

    def _site_settings(self):
        from core.models import SiteSettings
        s = SiteSettings.load()
        s.university_name = 'King Ceasor University'
        s.short_name = 'KCU'
        s.tagline = 'Transforming Lives Through Quality Education'
        s.website = 'https://kcu.ac.ug'
        s.apply_url = 'https://apply.kcu.ac.ug/'
        s.academia_url = 'https://academia.kcu.ac.ug/'
        s.kclass_url = 'https://vclass.kcu.ac.ug/'
        s.address = 'Bunga Hill, Kampala, Uganda'
        s.email = 'info@kcu.ac.ug'
        s.phone = '+256 (0) 393 217 829'
        s.save()
        self.stdout.write('  ✓ Site settings')

    def _navigation(self):
        for i, item in enumerate(NAV_DATA):
            nav, _ = NavItem.objects.update_or_create(
                label=item['label'],
                defaults={'href': item['href'], 'description': item['description'], 'disable_link': item['disable_link'], 'order': i}
            )
            for j, child in enumerate(item.get('children', [])):
                nc, _ = NavChild.objects.update_or_create(
                    parent=nav, label=child['label'],
                    defaults={'href': child['href'], 'order': j}
                )
                for k, gc in enumerate(child.get('children', [])):
                    NavGrandChild.objects.update_or_create(
                        parent=nc, label=gc['label'],
                        defaults={'href': gc['href'], 'order': k}
                    )
        self.stdout.write('  ✓ Navigation')

    def _hero_slides(self):
        for i, s in enumerate(HERO_DATA):
            p = s.get('programmes', [])
            HeroSlide.objects.update_or_create(
                title=s['title'],
                defaults={
                    'badge': s.get('badge', ''), 'school': s.get('school', ''),
                    'cta': s.get('cta', 'Learn More'), 'cta_href': s.get('cta_href', '/admissions'),
                    'image_url': s.get('image_url', ''), 'image_position': s.get('image_position', 'center center'),
                    'programme_1': p[0] if len(p) > 0 else '',
                    'programme_2': p[1] if len(p) > 1 else '',
                    'programme_3': p[2] if len(p) > 2 else '',
                    'programme_4': p[3] if len(p) > 3 else '',
                    'order': i,
                }
            )
        self.stdout.write('  ✓ Hero slides')

    def _quick_links(self):
        for i, q in enumerate(QUICKLINKS_DATA):
            QuickLink.objects.update_or_create(
                title=q['title'],
                defaults={'text': q['text'], 'href': q['href'], 'order': i}
            )
        self.stdout.write('  ✓ Quick links')

    def _schools_and_courses(self):
        for i, sd in enumerate(SCHOOLS_DATA):
            school, _ = School.objects.update_or_create(
                slug=sd['slug'],
                defaults={'name': sd['name'], 'short_name': sd.get('short_name', ''), 'description': sd.get('description', ''), 'order': i}
            )
            for j, cd in enumerate(sd.get('courses', [])):
                Course.objects.update_or_create(
                    slug=cd['slug'],
                    defaults={'school': school, 'name': cd['name'], 'level': cd['level'], 'duration': cd.get('duration', '3'), 'order': j}
                )
        self.stdout.write('  ✓ Schools and courses')

    def _events(self):
        for e in EVENTS_DATA:
            UpcomingEvent.objects.update_or_create(
                title=e['title'], date=e['date'],
                defaults={'location': e.get('location', ''), 'status': e.get('status', 'Upcoming')}
            )
        self.stdout.write('  ✓ Events')

    def _fees(self):
        for i, f in enumerate(FEES_DATA):
            FeeStructure.objects.update_or_create(
                programme=f['programme'], academic_year=f['academic_year'], student_type=f['student_type'],
                defaults={
                    'level': f.get('level', ''),
                    'tuition_per_year': f.get('tuition_per_year'),
                    'functional_fees': f.get('functional_fees'),
                    'order': i,
                }
            )
        self.stdout.write('  ✓ Fee structures')

    def _news(self):
        for item in NEWS_DATA:
            slug = slugify(item['title'])[:50]
            NewsItem.objects.update_or_create(
                slug=slug,
                defaults={
                    'category': item['category'], 'title': item['title'],
                    'text': item['text'], 'date': item['date'],
                    'image_url': item.get('image_url', ''), 'href': item.get('href', ''),
                    'featured': item.get('featured', False),
                }
            )
        self.stdout.write('  ✓ News items')

    def _admission_requirements(self):
        for r in REQUIREMENTS_DATA:
            AdmissionRequirement.objects.update_or_create(
                level=r['level'], title=r['title'],
                defaults={'content': r['content'], 'order': r['order']}
            )
        self.stdout.write('  ✓ Admission requirements')

    def _admission_process(self):
        for s in PROCESS_DATA:
            AdmissionProcess.objects.update_or_create(
                step_number=s['step_number'],
                defaults={'title': s['title'], 'description': s['description'], 'icon': s.get('icon', '')}
            )
        self.stdout.write('  ✓ Admission process steps')
