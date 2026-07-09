from unfold.admin import ModelAdmin as UnfoldModelAdmin, TabularInline as UnfoldTabularInline, StackedInline as UnfoldStackedInline
from django.contrib import admin
from .models import AlumniProfile, AlumniTestimonial


class AlumniTestimonialInline(UnfoldTabularInline):
    model = AlumniTestimonial
    extra = 1
    fields = ('testimonial', 'order', 'is_active')


@admin.register(AlumniProfile)
class AlumniProfileAdmin(UnfoldModelAdmin):
    list_display = ('name', 'graduation_year', 'programme', 'current_position', 'is_featured', 'is_active')
    list_editable = ('is_featured', 'is_active')
    list_filter = ('graduation_year', 'is_featured', 'is_active')
    search_fields = ('name', 'programme', 'current_position', 'current_organisation')
    inlines = [AlumniTestimonialInline]
    fieldsets = (
        ('Profile', {'fields': ('name', 'photo', 'graduation_year', 'programme')}),
        ('Career', {'fields': ('current_position', 'current_organisation', 'linkedin_url')}),
        ('Story', {'fields': ('bio', 'quote')}),
        ('Settings', {'fields': ('is_featured', 'is_active', 'order')}),
    )


@admin.register(AlumniTestimonial)
class AlumniTestimonialAdmin(UnfoldModelAdmin):
    list_display = ('name', 'programme', 'graduation_year', 'order', 'is_active')
    list_editable = ('order', 'is_active')
    list_filter = ('graduation_year', 'is_active')
    search_fields = ('name', 'testimonial')
