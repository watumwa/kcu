from rest_framework import viewsets
from .models import NewsItem, Newsletter
from .serializers import NewsItemSerializer, NewsletterSerializer


class NewsItemViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = NewsItem.objects.filter(is_active=True)
    serializer_class = NewsItemSerializer
    lookup_field = 'slug'
    filterset_fields = ['category', 'featured']
    search_fields = ['title', 'text', 'category']
    ordering_fields = ['date', 'created_at']


class NewsletterViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Newsletter.objects.filter(is_active=True)
    serializer_class = NewsletterSerializer
    lookup_field = 'slug'
