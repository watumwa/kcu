import json
import subprocess
from pathlib import Path

from django.core.management.base import BaseCommand, CommandError

from pages.models import Page


class Command(BaseCommand):
    help = 'Import the existing structured frontend page content into Django Pages.'

    def handle(self, *args, **options):
        repository = Path(__file__).resolve().parents[4]
        exporter = repository / 'frontend' / 'scripts' / 'export-cms-pages.mjs'
        if not exporter.exists():
            raise CommandError(f'Frontend page exporter not found: {exporter}')

        try:
            result = subprocess.run(
                ['node', str(exporter)],
                cwd=repository / 'frontend',
                check=True,
                capture_output=True,
                text=True,
            )
            pages = json.loads(result.stdout)
        except (subprocess.CalledProcessError, json.JSONDecodeError) as exc:
            raise CommandError(f'Could not export frontend content: {exc}') from exc

        created = updated = 0
        for route, data in pages.items():
            _, was_created = Page.objects.update_or_create(
                slug=route,
                defaults={
                    'title': data.get('title', route.replace('/', ' ').title()),
                    'meta_description': data.get('intro', ''),
                    'hero_title': data.get('title', ''),
                    'hero_subtitle': data.get('intro', ''),
                    'hero_image_url': data.get('heroImage', ''),
                    'layout_data': data,
                    'is_published': True,
                },
            )
            created += int(was_created)
            updated += int(not was_created)

        self.stdout.write(self.style.SUCCESS(f'Imported {created} new and updated {updated} CMS pages.'))
