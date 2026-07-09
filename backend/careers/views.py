from rest_framework import viewsets
from .models import JobPosting
from .serializers import JobPostingSerializer


class JobPostingViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = JobPosting.objects.filter(is_active=True)
    serializer_class = JobPostingSerializer
    lookup_field = 'slug'
    filterset_fields = ['department', 'job_type']
    search_fields = ['title', 'description', 'requirements']
    ordering_fields = ['posted_date', 'application_deadline']
