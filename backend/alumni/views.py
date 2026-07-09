from rest_framework import viewsets
from .models import AlumniProfile, AlumniTestimonial
from .serializers import AlumniProfileSerializer, AlumniTestimonialSerializer


class AlumniProfileViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = AlumniProfile.objects.filter(is_active=True).prefetch_related('testimonials')
    serializer_class = AlumniProfileSerializer
    filterset_fields = ['is_featured', 'graduation_year']
    search_fields = ['name', 'programme', 'current_position']


class AlumniTestimonialViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = AlumniTestimonial.objects.filter(is_active=True)
    serializer_class = AlumniTestimonialSerializer
