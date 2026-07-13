"""
Django settings for kcucms project.
King Ceasor University Content Management System
"""

from pathlib import Path
from decouple import config

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = config('SECRET_KEY', default='django-insecure-dev-key-change-in-production')
DEBUG = config('DEBUG', default=True, cast=bool)
ALLOWED_HOSTS = config('ALLOWED_HOSTS', default='localhost,127.0.0.1').split(',')

CONTENT_SECURITY_POLICY = "; ".join([
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "frame-ancestors 'self'",
    "img-src 'self' data: blob: https:",
    "font-src 'self' data: https:",
    "media-src 'self' blob: data: https:",
    "connect-src 'self' https: ws: wss:",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https:",
    "style-src 'self' 'unsafe-inline' https:",
    "frame-src 'self' https:",
])

PERMISSIONS_POLICY = ", ".join([
    "accelerometer=()",
    "autoplay=(self)",
    "camera=()",
    "display-capture=()",
    "fullscreen=(self)",
    "geolocation=()",
    "gyroscope=()",
    "microphone=()",
    "payment=()",
    "usb=()",
])

INSTALLED_APPS = [
    'unfold',
    'unfold.contrib.filters',
    'unfold.contrib.forms',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    # Third-party
    'rest_framework',
    'rest_framework.authtoken',
    'corsheaders',
    'django_filters',
    'drf_spectacular',
    'django_ckeditor_5',
    # KCU apps
    'core',
    'pages',
    'academics',
    'admissions',
    'news',
    'gallery',
    'careers',
    'alumni',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'core.middleware.SecurityHeadersMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'kcucms.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'kcucms.wsgi.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]

LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'Africa/Kampala'
USE_I18N = True
USE_TZ = True

STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# Security headers
SECURE_CONTENT_TYPE_NOSNIFF = True
SECURE_REFERRER_POLICY = 'strict-origin-when-cross-origin'
X_FRAME_OPTIONS = 'SAMEORIGIN'
SECURE_HSTS_SECONDS = 0 if DEBUG else 31536000
SECURE_HSTS_INCLUDE_SUBDOMAINS = not DEBUG
SECURE_HSTS_PRELOAD = not DEBUG

# CORS
CORS_ALLOWED_ORIGINS = config(
    'CORS_ALLOWED_ORIGINS',
    default='http://localhost:3000,http://127.0.0.1:3000'
).split(',')
CORS_ALLOW_ALL_ORIGINS = DEBUG  # allow all in dev

# DRF
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.TokenAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticatedOrReadOnly',
    ],
    'DEFAULT_FILTER_BACKENDS': [
        'django_filters.rest_framework.DjangoFilterBackend',
        'rest_framework.filters.SearchFilter',
        'rest_framework.filters.OrderingFilter',
    ],
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 20,
    'DEFAULT_SCHEMA_CLASS': 'drf_spectacular.openapi.AutoSchema',
}

# API Documentation
SPECTACULAR_SETTINGS = {
    'TITLE': 'King Ceasor University CMS API',
    'DESCRIPTION': 'REST API for the KCU website content management system',
    'VERSION': '1.0.0',
    'SERVE_INCLUDE_SCHEMA': False,
}

# Admin customisation
ADMIN_SITE_HEADER = 'King Ceasor University CMS'
ADMIN_SITE_TITLE = 'KCU Admin'
ADMIN_INDEX_TITLE = 'Content Management'

# ──────────────────────────────────────────────
# Unfold Admin Theme
# ──────────────────────────────────────────────
from django.templatetags.static import static
from django.urls import reverse_lazy

UNFOLD = {
    "SITE_TITLE": "KCU Admin",
    "SITE_HEADER": "King Ceasor University",
    "SITE_SUBHEADER": "Content Management System",
    "SITE_URL": "/",
    "SITE_ICON": lambda request: static("images/logo.png"),
    "SITE_LOGO": lambda request: static("images/logo.png"),
    "SITE_SYMBOL": "school",
    "SHOW_HISTORY": True,
    "SHOW_VIEW_ON_SITE": True,
    "COLORS": {
        "font": {
            "subtle-light": "107 114 128",
            "subtle-dark": "156 163 175",
            "default-light": "17 24 39",
            "default-dark": "243 244 246",
            "important-light": "3 7 18",
            "important-dark": "255 255 255",
        },
        "primary": {
            "50": "240 249 255",
            "100": "224 242 254",
            "200": "186 230 253",
            "300": "125 211 252",
            "400": "56 189 248",
            "500": "14 165 233",
            "600": "2 132 199",
            "700": "3 105 161",
            "800": "7 89 133",
            "900": "12 74 110",
            "950": "8 47 73",
        },
    },
    "SIDEBAR": {
        "show_search": True,
        "show_all_applications": False,
        "navigation": [
            {
                "title": "Site",
                "separator": False,
                "items": [
                    {"title": "Site Settings", "icon": "settings", "link": reverse_lazy("admin:core_sitesettings_changelist")},
                    {"title": "Navigation", "icon": "menu", "link": reverse_lazy("admin:core_navitem_changelist")},
                    {"title": "Hero Slides", "icon": "slideshow", "link": reverse_lazy("admin:core_heroslide_changelist")},
                    {"title": "Quick Links", "icon": "link", "link": reverse_lazy("admin:core_quicklink_changelist")},
                    {"title": "Collaborations", "icon": "handshake", "link": reverse_lazy("admin:core_collaboration_changelist")},
                    {"title": "Staff Members", "icon": "group", "link": reverse_lazy("admin:core_staffmember_changelist")},
                ],
            },
            {
                "title": "Academics",
                "separator": True,
                "items": [
                    {"title": "Schools", "icon": "account_balance", "link": reverse_lazy("admin:academics_school_changelist")},
                    {"title": "Courses", "icon": "book", "link": reverse_lazy("admin:academics_course_changelist")},
                    {"title": "Events", "icon": "event", "link": reverse_lazy("admin:academics_upcomingevent_changelist")},
                    {"title": "Graduation", "icon": "school", "link": reverse_lazy("admin:academics_graduationceremony_changelist")},
                ],
            },
            {
                "title": "Admissions",
                "separator": True,
                "items": [
                    {"title": "Fee Structures", "icon": "payments", "link": reverse_lazy("admin:admissions_feestructure_changelist")},
                    {"title": "Requirements", "icon": "checklist", "link": reverse_lazy("admin:admissions_admissionrequirement_changelist")},
                    {"title": "Process Steps", "icon": "format_list_numbered", "link": reverse_lazy("admin:admissions_admissionprocess_changelist")},
                ],
            },
            {
                "title": "Content",
                "separator": True,
                "items": [
                    {"title": "News", "icon": "newspaper", "link": reverse_lazy("admin:news_newsitem_changelist")},
                    {"title": "Newsletters", "icon": "mail", "link": reverse_lazy("admin:news_newsletter_changelist")},
                    {"title": "Gallery Albums", "icon": "photo_library", "link": reverse_lazy("admin:gallery_galleryalbum_changelist")},
                    {"title": "Pages", "icon": "article", "link": reverse_lazy("admin:pages_page_changelist")},
                    {"title": "Testimonials", "icon": "format_quote", "link": reverse_lazy("admin:pages_testimonial_changelist")},
                ],
            },
            {
                "title": "People",
                "separator": True,
                "items": [
                    {"title": "Careers / Jobs", "icon": "work", "link": reverse_lazy("admin:careers_jobposting_changelist")},
                    {"title": "Alumni Profiles", "icon": "emoji_events", "link": reverse_lazy("admin:alumni_alumniprofile_changelist")},
                    {"title": "Alumni Testimonials", "icon": "chat", "link": reverse_lazy("admin:alumni_alumnitestimonial_changelist")},
                ],
            },
            {
                "title": "Users",
                "separator": True,
                "items": [
                    {"title": "Users", "icon": "manage_accounts", "link": reverse_lazy("admin:auth_user_changelist")},
                    {"title": "Groups", "icon": "group_work", "link": reverse_lazy("admin:auth_group_changelist")},
                ],
            },
        ],
    },
}

# ──────────────────────────────────────────────
# CKEditor 5
# ──────────────────────────────────────────────
CKEDITOR_5_FILE_UPLOAD_PERMISSION = "staff"  # only staff users can upload images
CKEDITOR_5_UPLOAD_FILE_VIEW_NAME = "ck_editor_5_upload_file"

CKEDITOR_5_CONFIGS = {
    "default": {
        "toolbar": [
            "heading", "|",
            "bold", "italic", "underline", "strikethrough", "|",
            "link", "blockQuote", "|",
            "bulletedList", "numberedList", "|",
            "insertImage", "mediaEmbed", "|",
            "insertTable", "|",
            "undo", "redo",
        ],
        "image": {
            "toolbar": [
                "imageTextAlternative", "toggleImageCaption",
                "imageStyle:inline", "imageStyle:block", "imageStyle:side",
            ],
        },
        "table": {
            "contentToolbar": ["tableColumn", "tableRow", "mergeTableCells"],
        },
        "height": 400,
        "width": "100%",
    },
    "minimal": {
        "toolbar": ["bold", "italic", "link", "bulletedList", "numberedList"],
        "height": 200,
        "width": "100%",
    },
}
