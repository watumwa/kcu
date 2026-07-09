from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('alumni', views.AlumniProfileViewSet, basename='alumni')
router.register('alumni-testimonials', views.AlumniTestimonialViewSet, basename='alumni-testimonial')

urlpatterns = [path('', include(router.urls))]
