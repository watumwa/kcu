from unfold.admin import ModelAdmin as UnfoldModelAdmin, TabularInline as UnfoldTabularInline, StackedInline as UnfoldStackedInline
from django.contrib import admin
from .models import GalleryAlbum, GalleryImage


class GalleryImageInline(UnfoldTabularInline):
    model = GalleryImage
    extra = 3
    fields = ('image', 'caption', 'alt_text', 'order', 'is_active')


@admin.register(GalleryAlbum)
class GalleryAlbumAdmin(UnfoldModelAdmin):
    list_display = ('title', 'category', 'date', 'order', 'is_active', 'image_count')
    list_editable = ('order', 'is_active')
    list_filter = ('category', 'is_active')
    search_fields = ('title', 'description')
    prepopulated_fields = {'slug': ('title',)}
    inlines = [GalleryImageInline]

    @admin.display(description='Photos')
    def image_count(self, obj):
        return obj.images.count()


@admin.register(GalleryImage)
class GalleryImageAdmin(UnfoldModelAdmin):
    list_display = ('album', 'caption', 'order', 'is_active')
    list_editable = ('order', 'is_active')
    list_filter = ('album', 'is_active')
    search_fields = ('caption', 'alt_text')
