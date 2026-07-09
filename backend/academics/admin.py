from unfold.admin import ModelAdmin as UnfoldModelAdmin, TabularInline as UnfoldTabularInline, StackedInline as UnfoldStackedInline
from django.contrib import admin
from .models import School, Course, UpcomingEvent, GraduationCeremony


class CourseInline(UnfoldTabularInline):
    model = Course
    extra = 0
    fields = ('name', 'level', 'duration', 'is_featured', 'is_active', 'order')
    show_change_link = True


@admin.register(School)
class SchoolAdmin(UnfoldModelAdmin):
    list_display = ('name', 'short_name', 'order', 'is_active')
    list_editable = ('order', 'is_active')
    prepopulated_fields = {'slug': ('name',)}
    search_fields = ('name',)
    inlines = [CourseInline]
    fieldsets = (
        ('Details', {'fields': ('name', 'slug', 'short_name', 'description')}),
        ('Image', {'fields': ('image', 'image_url')}),
        ('Dean', {'fields': ('dean_name', 'dean_title', 'dean_photo')}),
        ('Settings', {'fields': ('order', 'is_active')}),
    )


@admin.register(Course)
class CourseAdmin(UnfoldModelAdmin):
    list_display = ('name', 'school', 'level', 'duration', 'is_featured', 'is_active', 'order')
    list_editable = ('is_featured', 'is_active', 'order')
    list_filter = ('school', 'level', 'is_featured', 'is_active')
    search_fields = ('name', 'school__name')
    prepopulated_fields = {'slug': ('name',)}
    fieldsets = (
        ('Details', {'fields': ('school', 'name', 'slug', 'level', 'duration', 'duration_custom')}),
        ('Content', {'fields': ('description', 'entry_requirements', 'career_prospects')}),
        ('Image', {'fields': ('image',)}),
        ('Settings', {'fields': ('is_featured', 'is_active', 'order')}),
    )


@admin.register(UpcomingEvent)
class UpcomingEventAdmin(UnfoldModelAdmin):
    list_display = ('title', 'date', 'location', 'status', 'is_active')
    list_editable = ('status', 'is_active')
    list_filter = ('status', 'is_active')
    search_fields = ('title', 'location')
    date_hierarchy = 'date'


@admin.register(GraduationCeremony)
class GraduationCeremonyAdmin(UnfoldModelAdmin):
    list_display = ('title', 'year', 'date', 'venue', 'is_active')
    list_editable = ('is_active',)
    list_filter = ('year', 'is_active')
    search_fields = ('title', 'venue')
