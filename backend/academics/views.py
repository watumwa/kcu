from rest_framework import viewsets
from .models import School, Course, UpcomingEvent, GraduationCeremony
from .serializers import (
    SchoolSerializer, CourseSerializer,
    UpcomingEventSerializer, GraduationCeremonySerializer
)


class SchoolViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = School.objects.filter(is_active=True).prefetch_related('courses')
    serializer_class = SchoolSerializer
    lookup_field = 'slug'


class CourseViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Course.objects.filter(is_active=True).select_related('school')
    serializer_class = CourseSerializer
    lookup_field = 'slug'
    filterset_fields = ['school', 'level', 'is_featured']
    search_fields = ['name', 'description']


class UpcomingEventViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = UpcomingEvent.objects.filter(is_active=True)
    serializer_class = UpcomingEventSerializer
    filterset_fields = ['status']


class GraduationCeremonyViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = GraduationCeremony.objects.filter(is_active=True)
    serializer_class = GraduationCeremonySerializer
