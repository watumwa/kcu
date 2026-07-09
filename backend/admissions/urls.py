from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('fees', views.FeeStructureViewSet, basename='fee')
router.register('requirements', views.AdmissionRequirementViewSet, basename='requirement')
router.register('process', views.AdmissionProcessViewSet, basename='process')

urlpatterns = [path('admissions/', include(router.urls))]
