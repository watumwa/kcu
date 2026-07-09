from rest_framework import serializers
from .models import AlumniProfile, AlumniTestimonial


class AlumniTestimonialSerializer(serializers.ModelSerializer):
    photo_url = serializers.SerializerMethodField()

    class Meta:
        model = AlumniTestimonial
        fields = ['id', 'name', 'programme', 'graduation_year', 'testimonial', 'photo_url', 'order']

    def get_photo_url(self, obj):
        if obj.photo:
            request = self.context.get('request')
            return request.build_absolute_uri(obj.photo.url) if request else obj.photo.url
        return None


class AlumniProfileSerializer(serializers.ModelSerializer):
    photo_url = serializers.SerializerMethodField()
    testimonials = AlumniTestimonialSerializer(many=True, read_only=True)

    class Meta:
        model = AlumniProfile
        fields = [
            'id', 'name', 'graduation_year', 'programme',
            'current_position', 'current_organisation', 'bio', 'quote',
            'photo_url', 'linkedin_url', 'is_featured', 'order', 'testimonials',
        ]

    def get_photo_url(self, obj):
        if obj.photo:
            request = self.context.get('request')
            return request.build_absolute_uri(obj.photo.url) if request else obj.photo.url
        return None
