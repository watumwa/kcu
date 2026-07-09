from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('pages', views.PageViewSet, basename='page')
router.register('testimonials', views.TestimonialViewSet, basename='testimonial')

urlpatterns = [path('', include(router.urls))]
