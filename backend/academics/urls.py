from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('schools', views.SchoolViewSet, basename='school')
router.register('courses', views.CourseViewSet, basename='course')
router.register('events', views.UpcomingEventViewSet, basename='event')
router.register('graduation', views.GraduationCeremonyViewSet, basename='graduation')

urlpatterns = [path('', include(router.urls))]
