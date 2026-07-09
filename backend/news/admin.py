from unfold.admin import ModelAdmin as UnfoldModelAdmin, TabularInline as UnfoldTabularInline, StackedInline as UnfoldStackedInline
from django.contrib import admin
from .models import NewsItem, Newsletter


@admin.register(NewsItem)
class NewsItemAdmin(UnfoldModelAdmin):
    list_display = ('title', 'category', 'date', 'featured', 'is_active')
    list_editable = ('featured', 'is_active')
    list_filter = ('category', 'featured', 'is_active')
    search_fields = ('title', 'text', 'body')
    date_hierarchy = 'date'
    prepopulated_fields = {'slug': ('title',)}
    fieldsets = (
        ('Content', {'fields': ('category', 'title', 'slug', 'text', 'body', 'date')}),
        ('Image', {'fields': ('image', 'image_url')}),
        ('Link', {'fields': ('href',), 'description': 'If set, readers are sent to this external URL instead of the detail page.'}),
        ('Settings', {'fields': ('featured', 'is_active')}),
    )


@admin.register(Newsletter)
class NewsletterAdmin(UnfoldModelAdmin):
    list_display = ('title', 'issue_number', 'published_date', 'is_active')
    list_editable = ('is_active',)
    list_filter = ('is_active',)
    search_fields = ('title',)
    prepopulated_fields = {'slug': ('title',)}
    date_hierarchy = 'published_date'
