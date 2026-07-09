from rest_framework import serializers
from .models import Page, PageSection, Testimonial


class PageSectionSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = PageSection
        fields = ['id', 'title', 'content', 'image_url', 'order']

    def get_image_url(self, obj):
        if obj.image:
            request = self.context.get('request')
            return request.build_absolute_uri(obj.image.url) if request else obj.image.url
        return None


class PageSerializer(serializers.ModelSerializer):
    sections = PageSectionSerializer(many=True, read_only=True)
    hero_image_src = serializers.SerializerMethodField()

    class Meta:
        model = Page
        fields = [
            'id', 'title', 'slug', 'meta_description', 'content',
            'hero_title', 'hero_subtitle', 'hero_image_src', 'sections', 'updated_at',
        ]

    def get_hero_image_src(self, obj):
        if obj.hero_image:
            request = self.context.get('request')
            return request.build_absolute_uri(obj.hero_image.url) if request else obj.hero_image.url
        return obj.hero_image_url


class TestimonialSerializer(serializers.ModelSerializer):
    photo_url = serializers.SerializerMethodField()

    class Meta:
        model = Testimonial
        fields = ['id', 'name', 'role', 'quote', 'photo_url', 'order']

    def get_photo_url(self, obj):
        if obj.photo:
            request = self.context.get('request')
            return request.build_absolute_uri(obj.photo.url) if request else obj.photo.url
        return None
