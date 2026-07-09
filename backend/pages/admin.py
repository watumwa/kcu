from unfold.admin import ModelAdmin as UnfoldModelAdmin, TabularInline as UnfoldTabularInline, StackedInline as UnfoldStackedInline
from django.contrib import admin
from .models import Page, PageSection, Testimonial


class PageSectionInline(UnfoldStackedInline):
    model = PageSection
    extra = 1
    fields = ('title', 'content', 'image', 'order')


@admin.register(Page)
class PageAdmin(UnfoldModelAdmin):
    list_display = ('title', 'slug', 'is_published', 'updated_at')
    list_editable = ('is_published',)
    list_filter = ('is_published',)
    search_fields = ('title', 'content')
    prepopulated_fields = {'slug': ('title',)}
    inlines = [PageSectionInline]
    fieldsets = (
        ('Page', {'fields': ('title', 'slug', 'meta_description', 'is_published')}),
        ('Hero', {'fields': ('hero_title', 'hero_subtitle', 'hero_image', 'hero_image_url')}),
        ('Content', {'fields': ('content',)}),
    )


@admin.register(Testimonial)
class TestimonialAdmin(UnfoldModelAdmin):
    list_display = ('name', 'role', 'order', 'is_active')
    list_editable = ('order', 'is_active')
    search_fields = ('name', 'quote')
