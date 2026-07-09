from rest_framework import serializers
from .models import GalleryAlbum, GalleryImage


class GalleryImageSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = GalleryImage
        fields = ['id', 'image_url', 'caption', 'alt_text', 'order']

    def get_image_url(self, obj):
        request = self.context.get('request')
        return request.build_absolute_uri(obj.image.url) if request else obj.image.url


class GalleryAlbumSerializer(serializers.ModelSerializer):
    images = GalleryImageSerializer(many=True, read_only=True)
    cover_image_url = serializers.SerializerMethodField()

    class Meta:
        model = GalleryAlbum
        fields = ['id', 'title', 'slug', 'description', 'cover_image_url', 'date', 'category', 'order', 'images']

    def get_cover_image_url(self, obj):
        if obj.cover_image:
            request = self.context.get('request')
            return request.build_absolute_uri(obj.cover_image.url) if request else obj.cover_image.url
        # Fall back to first image in album
        first = obj.images.filter(is_active=True).first()
        if first:
            request = self.context.get('request')
            return request.build_absolute_uri(first.image.url) if request else first.image.url
        return None


class GalleryAlbumListSerializer(serializers.ModelSerializer):
    """Lightweight serializer for listing (no nested images)."""
    cover_image_url = serializers.SerializerMethodField()
    photo_count = serializers.SerializerMethodField()

    class Meta:
        model = GalleryAlbum
        fields = ['id', 'title', 'slug', 'description', 'cover_image_url', 'date', 'category', 'order', 'photo_count']

    def get_cover_image_url(self, obj):
        if obj.cover_image:
            request = self.context.get('request')
            return request.build_absolute_uri(obj.cover_image.url) if request else obj.cover_image.url
        first = obj.images.filter(is_active=True).first()
        if first:
            request = self.context.get('request')
            return request.build_absolute_uri(first.image.url) if request else first.image.url
        return None

    def get_photo_count(self, obj):
        return obj.images.filter(is_active=True).count()
