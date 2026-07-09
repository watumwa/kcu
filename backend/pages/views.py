from rest_framework import viewsets
from .models import Page, Testimonial
from .serializers import PageSerializer, TestimonialSerializer


class PageViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Page.objects.filter(is_published=True).prefetch_related('sections')
    serializer_class = PageSerializer
    lookup_field = 'slug'
    search_fields = ['title', 'content']


class TestimonialViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Testimonial.objects.filter(is_active=True)
    serializer_class = TestimonialSerializer
