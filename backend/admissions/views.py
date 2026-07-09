from rest_framework import viewsets
from .models import FeeStructure, AdmissionRequirement, AdmissionProcess
from .serializers import FeeStructureSerializer, AdmissionRequirementSerializer, AdmissionProcessSerializer


class FeeStructureViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = FeeStructure.objects.filter(is_active=True)
    serializer_class = FeeStructureSerializer
    filterset_fields = ['academic_year', 'student_type', 'level']
    search_fields = ['programme']


class AdmissionRequirementViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = AdmissionRequirement.objects.filter(is_active=True)
    serializer_class = AdmissionRequirementSerializer
    filterset_fields = ['level']


class AdmissionProcessViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = AdmissionProcess.objects.filter(is_active=True)
    serializer_class = AdmissionProcessSerializer
