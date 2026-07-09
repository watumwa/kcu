from unfold.admin import ModelAdmin as UnfoldModelAdmin, TabularInline as UnfoldTabularInline, StackedInline as UnfoldStackedInline
from django.contrib import admin
from .models import FeeStructure, AdmissionRequirement, AdmissionProcess


@admin.register(FeeStructure)
class FeeStructureAdmin(UnfoldModelAdmin):
    list_display = ('programme', 'academic_year', 'level', 'student_type', 'tuition_per_year', 'is_active')
    list_editable = ('is_active',)
    list_filter = ('academic_year', 'student_type', 'level', 'is_active')
    search_fields = ('programme', 'academic_year')
    fieldsets = (
        ('Programme', {'fields': ('programme', 'level', 'academic_year', 'student_type', 'intake')}),
        ('Fees (UGX)', {'fields': ('tuition_per_year', 'tuition_per_semester', 'functional_fees')}),
        ('Notes', {'fields': ('notes',)}),
        ('Settings', {'fields': ('order', 'is_active')}),
    )


@admin.register(AdmissionRequirement)
class AdmissionRequirementAdmin(UnfoldModelAdmin):
    list_display = ('title', 'level', 'order', 'is_active')
    list_editable = ('order', 'is_active')
    list_filter = ('level', 'is_active')
    search_fields = ('title', 'content')


@admin.register(AdmissionProcess)
class AdmissionProcessAdmin(UnfoldModelAdmin):
    list_display = ('step_number', 'title', 'is_active')
    list_editable = ('is_active',)
    ordering = ('step_number',)
