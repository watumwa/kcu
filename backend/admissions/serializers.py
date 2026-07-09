from rest_framework import serializers
from .models import FeeStructure, AdmissionRequirement, AdmissionProcess


class FeeStructureSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeeStructure
        fields = [
            'id', 'programme', 'level', 'academic_year', 'student_type',
            'intake', 'tuition_per_year', 'tuition_per_semester', 'functional_fees', 'notes',
        ]


class AdmissionRequirementSerializer(serializers.ModelSerializer):
    level_display = serializers.CharField(source='get_level_display', read_only=True)

    class Meta:
        model = AdmissionRequirement
        fields = ['id', 'level', 'level_display', 'title', 'content', 'order']


class AdmissionProcessSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdmissionProcess
        fields = ['id', 'step_number', 'title', 'description', 'icon']
