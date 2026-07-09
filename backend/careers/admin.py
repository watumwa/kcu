from unfold.admin import ModelAdmin as UnfoldModelAdmin, TabularInline as UnfoldTabularInline, StackedInline as UnfoldStackedInline
from django.contrib import admin
from .models import JobPosting


@admin.register(JobPosting)
class JobPostingAdmin(UnfoldModelAdmin):
    list_display = ('title', 'department', 'job_type', 'application_deadline', 'is_active', 'posted_date')
    list_editable = ('is_active',)
    list_filter = ('department', 'job_type', 'is_active')
    search_fields = ('title', 'description', 'requirements')
    date_hierarchy = 'posted_date'
    prepopulated_fields = {'slug': ('title',)}
    fieldsets = (
        ('Position', {'fields': ('title', 'slug', 'department', 'job_type', 'location')}),
        ('Details', {'fields': ('description', 'requirements', 'responsibilities', 'salary_range')}),
        ('Application', {'fields': ('application_deadline', 'application_url', 'application_email', 'pdf_details')}),
        ('Settings', {'fields': ('is_active',)}),
    )
