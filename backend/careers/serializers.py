from rest_framework import serializers
from .models import JobPosting


class JobPostingSerializer(serializers.ModelSerializer):
    department_display = serializers.CharField(source='get_department_display', read_only=True)
    job_type_display = serializers.CharField(source='get_job_type_display', read_only=True)
    pdf_url = serializers.SerializerMethodField()

    class Meta:
        model = JobPosting
        fields = [
            'id', 'title', 'slug', 'department', 'department_display',
            'job_type', 'job_type_display', 'location', 'description',
            'requirements', 'responsibilities', 'salary_range',
            'application_deadline', 'application_url', 'application_email',
            'pdf_url', 'posted_date',
        ]

    def get_pdf_url(self, obj):
        if obj.pdf_details:
            request = self.context.get('request')
            return request.build_absolute_uri(obj.pdf_details.url) if request else obj.pdf_details.url
        return None
