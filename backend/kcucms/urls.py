from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView, SpectacularRedocView
from django_ckeditor_5.views import upload_file

# Customise admin branding
admin.site.site_header = settings.ADMIN_SITE_HEADER
admin.site.site_title = settings.ADMIN_SITE_TITLE
admin.site.index_title = settings.ADMIN_INDEX_TITLE

urlpatterns = [
    path('admin/', admin.site.urls),

    # API v1 routes
    path('api/v1/', include('core.urls')),
    path('api/v1/', include('pages.urls')),
    path('api/v1/', include('academics.urls')),
    path('api/v1/', include('admissions.urls')),
    path('api/v1/', include('news.urls')),
    path('api/v1/', include('gallery.urls')),
    path('api/v1/', include('careers.urls')),
    path('api/v1/', include('alumni.urls')),

    # API docs
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/docs/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('api/redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),

    # CKEditor 5 image upload — name must match what the package internally reverses
    path('ckeditor5/image_upload/', upload_file, name='ck_editor_5_upload_file'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
