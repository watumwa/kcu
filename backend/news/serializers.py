from rest_framework import serializers
from .models import NewsItem, Newsletter


class NewsItemSerializer(serializers.ModelSerializer):
    image_src = serializers.SerializerMethodField()

    class Meta:
        model = NewsItem
        fields = [
            'id', 'category', 'title', 'slug', 'text', 'body',
            'date', 'image_src', 'href', 'featured',
        ]

    def get_image_src(self, obj):
        if obj.image:
            request = self.context.get('request')
            return request.build_absolute_uri(obj.image.url) if request else obj.image.url
        return obj.image_url


class NewsletterSerializer(serializers.ModelSerializer):
    cover_image_url = serializers.SerializerMethodField()
    pdf_url_resolved = serializers.SerializerMethodField()

    class Meta:
        model = Newsletter
        fields = [
            'id', 'title', 'slug', 'issue_number',
            'cover_image_url', 'pdf_url_resolved', 'description', 'published_date',
        ]

    def get_cover_image_url(self, obj):
        if obj.cover_image:
            request = self.context.get('request')
            return request.build_absolute_uri(obj.cover_image.url) if request else obj.cover_image.url
        return None

    def get_pdf_url_resolved(self, obj):
        if obj.pdf_file:
            request = self.context.get('request')
            return request.build_absolute_uri(obj.pdf_file.url) if request else obj.pdf_file.url
        return obj.pdf_url
