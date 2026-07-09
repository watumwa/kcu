from unfold.admin import ModelAdmin as UnfoldModelAdmin, TabularInline as UnfoldTabularInline, StackedInline as UnfoldStackedInline
from django.contrib import admin
from .models import (
    SiteSettings, NavItem, NavChild, NavGrandChild,
    HeroSlide, QuickLink, Collaboration, StaffMember
)


@admin.register(SiteSettings)
class SiteSettingsAdmin(UnfoldModelAdmin):
    fieldsets = (
        ('Branding', {'fields': ('university_name', 'short_name', 'tagline', 'logo', 'footer_logo')}),
        ('Contact', {'fields': ('address', 'phone', 'email', 'website')}),
        ('External Links', {'fields': ('apply_url', 'academia_url', 'kclass_url')}),
        ('Social Media', {'fields': ('facebook_url', 'twitter_url', 'instagram_url', 'linkedin_url', 'youtube_url')}),
    )

    def has_add_permission(self, request):
        return not SiteSettings.objects.exists()

    def has_delete_permission(self, request, obj=None):
        return False


class NavGrandChildInline(UnfoldTabularInline):
    model = NavGrandChild
    extra = 1
    fields = ('label', 'href', 'order', 'is_active')


class NavChildInline(UnfoldStackedInline):
    model = NavChild
    extra = 1
    fields = ('label', 'href', 'order', 'is_active')
    show_change_link = True


@admin.register(NavItem)
class NavItemAdmin(UnfoldModelAdmin):
    list_display = ('label', 'href', 'order', 'is_active', 'disable_link')
    list_editable = ('order', 'is_active')
    list_filter = ('is_active',)
    inlines = [NavChildInline]


@admin.register(NavChild)
class NavChildAdmin(UnfoldModelAdmin):
    list_display = ('label', 'parent', 'href', 'order', 'is_active')
    list_editable = ('order', 'is_active')
    list_filter = ('parent', 'is_active')
    inlines = [NavGrandChildInline]


@admin.register(HeroSlide)
class HeroSlideAdmin(UnfoldModelAdmin):
    list_display = ('title', 'badge', 'order', 'is_active')
    list_editable = ('order', 'is_active')
    list_filter = ('is_active',)
    fieldsets = (
        ('Content', {'fields': ('badge', 'school', 'title', 'subtitle', 'cta', 'cta_href')}),
        ('Image', {'fields': ('image', 'image_url', 'image_position')}),
        ('Programmes', {'fields': ('programme_1', 'programme_2', 'programme_3', 'programme_4')}),
        ('Settings', {'fields': ('order', 'is_active')}),
    )


@admin.register(QuickLink)
class QuickLinkAdmin(UnfoldModelAdmin):
    list_display = ('title', 'href', 'order', 'is_active')
    list_editable = ('order', 'is_active')


@admin.register(Collaboration)
class CollaborationAdmin(UnfoldModelAdmin):
    list_display = ('name', 'website', 'order', 'is_active')
    list_editable = ('order', 'is_active')
    search_fields = ('name',)


@admin.register(StaffMember)
class StaffMemberAdmin(UnfoldModelAdmin):
    list_display = ('name', 'title', 'position', 'category', 'department', 'order', 'is_active')
    list_editable = ('order', 'is_active')
    list_filter = ('category', 'department', 'is_active')
    search_fields = ('name', 'position', 'department')
    fieldsets = (
        ('Personal', {'fields': ('name', 'title', 'photo', 'bio')}),
        ('Role', {'fields': ('position', 'category', 'department')}),
        ('Contact', {'fields': ('email', 'phone')}),
        ('Settings', {'fields': ('order', 'is_active')}),
    )
