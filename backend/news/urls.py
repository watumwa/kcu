from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('news', views.NewsItemViewSet, basename='news')
router.register('newsletters', views.NewsletterViewSet, basename='newsletter')

urlpatterns = [path('', include(router.urls))]
