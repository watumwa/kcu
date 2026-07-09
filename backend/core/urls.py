from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('hero-slides', views.HeroSlideViewSet, basename='hero-slide')
router.register('quick-links', views.QuickLinkViewSet, basename='quick-link')
router.register('collaborations', views.CollaborationViewSet, basename='collaboration')
router.register('staff', views.StaffMemberViewSet, basename='staff')

urlpatterns = [
    path('site-settings/', views.site_settings, name='site-settings'),
    path('navigation/', views.navigation, name='navigation'),
    path('', include(router.urls)),
]
