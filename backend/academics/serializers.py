from rest_framework import serializers
from .models import School, Course, UpcomingEvent, GraduationCeremony


class CourseSerializer(serializers.ModelSerializer):
    level_display = serializers.CharField(source='get_level_display', read_only=True)
    school_name = serializers.CharField(source='school.name', read_only=True)

    class Meta:
        model = Course
        fields = [
            'id', 'school', 'school_name', 'name', 'slug', 'level', 'level_display',
            'duration', 'duration_custom', 'description', 'entry_requirements',
            'career_prospects', 'is_featured', 'order',
        ]


class SchoolSerializer(serializers.ModelSerializer):
    courses = CourseSerializer(many=True, read_only=True)
    image_src = serializers.SerializerMethodField()

    class Meta:
        model = School
        fields = [
            'id', 'name', 'slug', 'short_name', 'description',
            'image_src', 'dean_name', 'dean_title', 'order', 'courses',
        ]

    def get_image_src(self, obj):
        if obj.image:
            request = self.context.get('request')
            return request.build_absolute_uri(obj.image.url) if request else obj.image.url
        return obj.image_url


class UpcomingEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = UpcomingEvent
        fields = ['id', 'title', 'date', 'location', 'description', 'status', 'registration_url']


class GraduationCeremonySerializer(serializers.ModelSerializer):
    notice_pdf_url = serializers.SerializerMethodField()
    clearance_pdf_url = serializers.SerializerMethodField()

    class Meta:
        model = GraduationCeremony
        fields = ['id', 'title', 'year', 'date', 'venue', 'description', 'notice_pdf_url', 'clearance_pdf_url']

    def get_notice_pdf_url(self, obj):
        if obj.notice_pdf:
            request = self.context.get('request')
            return request.build_absolute_uri(obj.notice_pdf.url) if request else obj.notice_pdf.url
        return None

    def get_clearance_pdf_url(self, obj):
        if obj.clearance_pdf:
            request = self.context.get('request')
            return request.build_absolute_uri(obj.clearance_pdf.url) if request else obj.clearance_pdf.url
        return None
