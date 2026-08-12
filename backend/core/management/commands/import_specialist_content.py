import json
import subprocess
from pathlib import Path

from django.core.management.base import BaseCommand, CommandError

from core.models import SiteContent


TITLES = {
    'about': 'Main About Page',
    'alumni': 'Alumni Page',
    'careers': 'Careers Page',
    'gallery': 'Gallery Page',
    'graduation': 'Graduation Page',
    'guild': 'Student Guild Page',
    'newsletter': 'Newsletter Articles',
    'homepage': 'Homepage Programme Highlights',
}


class Command(BaseCommand):
    help = 'Import remaining specialist frontend content into structured Django CMS records.'

    def handle(self, *args, **options):
        repository = Path(__file__).resolve().parents[4]
        exporter = repository / 'frontend' / 'scripts' / 'export-specialist-content.mjs'
        try:
            result = subprocess.run(
                ['node', str(exporter)], cwd=repository / 'frontend', check=True,
                capture_output=True, text=True,
            )
            content = json.loads(result.stdout)
        except (subprocess.CalledProcessError, json.JSONDecodeError) as exc:
            detail = getattr(exc, 'stderr', '')
            raise CommandError(f'Could not export specialist content: {exc} {detail}') from exc

        content['shared-layout'] = {
            'viceChancellor': {
                'eyebrow': "Vice Chancellor's Message",
                'name': 'Dr. Charity Basaza Mulenga',
                'role': 'Vice Chancellor, King Ceasor University',
                'image': '/vc.jpg',
                'paragraphs': [
                    'Welcome to King Ceasor University, a Chartered institution committed to excellence in education, research, innovation, and service to society.',
                    'At KCU, we believe education is transformative, empowering learners with the knowledge, skills, values, and leadership qualities needed to thrive in a rapidly changing world.',
                    'The award of our University Charter reflects our commitment to quality higher education and continuous institutional growth.',
                    'As we look ahead, we are embracing Competency-Based Education and Training, advancing research and innovation, strengthening global partnerships, and leveraging technology to enhance learning.',
                ],
            },
            'admissionsBanner': {
                'eyebrow': 'Admissions are OPEN',
                'title': 'Apply Today & Ignite your Future',
                'text': 'Apply for Undergraduate, Diploma and Certificate courses from a wide range of professional fields.',
            },
        }
        content['about']['main'] = {
            'heroEyebrow': 'About King Ceasor University',
            'heroTitle': 'Shaping Leaders. Igniting the Future.',
            'heroIntro': 'A premier chartered private university in Uganda dedicated to academic excellence, innovation and transformative education for students from across Africa and beyond.',
            'sectionTitle': 'About King Ceasor University',
            'paragraphs': [
                'King Ceasor University (KCU) is a premier chartered private university in Uganda dedicated to academic excellence, innovation and transformative education.',
                'With modern learning facilities, experienced faculty, strong industry partnerships and a student-centered approach, KCU nurtures intellectual growth, creativity and professional development.',
            ],
            'stats': [
                {'label': 'Started In', 'value': '2011', 'suffix': ''},
                {'label': 'Teaching Staff', 'value': '210', 'suffix': '+'},
                {'label': 'Student Community', 'value': '2,000', 'suffix': '+'},
                {'label': 'Alumni Community', 'value': '4,000', 'suffix': '+'},
            ],
            'vision': 'An innovation driven University',
            'mission': 'To provide a holistic education through inventive teaching, learning, and research aimed at fostering socio-economic transformation.',
            'motto': 'Ignite the Future',
            'coreValues': [
                {'icon': 'Shield', 'title': 'Integrity', 'desc': 'We uphold honesty, ethics and professionalism, fostering transparency, trust and responsibility.'},
                {'icon': 'TrendingUp', 'title': 'Progression', 'desc': 'We embrace innovation, continuous improvement and lifelong learning in an ever-changing world.'},
                {'icon': 'Scale', 'title': 'Accountability', 'desc': 'We take responsibility for our actions and outcomes while promoting good governance and public confidence.'},
                {'icon': 'Heart', 'title': 'Respect', 'desc': 'We value the dignity, worth and uniqueness of every individual in an inclusive community.'},
                {'icon': 'Users', 'title': 'Synergy', 'desc': 'We work together, drawing on diverse talents, experiences and perspectives to achieve greater impact.'},
            ],
        }
        TITLES['shared-layout'] = 'Homepage Messages and Admissions Banner'

        for key, data in content.items():
            SiteContent.objects.update_or_create(
                key=key,
                defaults={'title': TITLES[key], 'data': data, 'is_active': True},
            )
        self.stdout.write(self.style.SUCCESS(f'Imported {len(content)} specialist content sections.'))
