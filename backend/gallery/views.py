from rest_framework import viewsets
from .models import GalleryAlbum
from .serializers import GalleryAlbumSerializer, GalleryAlbumListSerializer


class GalleryAlbumViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = GalleryAlbum.objects.filter(is_active=True).prefetch_related('images')
    lookup_field = 'slug'
    filterset_fields = ['category']
    search_fields = ['title', 'description']

    def get_serializer_class(self):
        if self.action == 'list':
            return GalleryAlbumListSerializer
        return GalleryAlbumSerializer
