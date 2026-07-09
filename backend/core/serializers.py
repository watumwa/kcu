from rest_framework import serializers
from .models import (
    SiteSettings, NavItem, NavChild, NavGrandChild,
    HeroSlide, QuickLink, Collaboration, StaffMember
)


class SiteSettingsSerializer(serializers.ModelSerializer):
    logo_url = serializers.SerializerMethodField()
    footer_logo_url = serializers.SerializerMethodField()

    class Meta:
        model = SiteSettings
        exclude = ['logo', 'footer_logo']

    def get_logo_url(self, obj):
        if obj.logo:
            request = self.context.get('request')
            return request.build_absolute_uri(obj.logo.url) if request else obj.logo.url
        return None

    def get_footer_logo_url(self, obj):
        if obj.footer_logo:
            request = self.context.get('request')
            return request.build_absolute_uri(obj.footer_logo.url) if request else obj.footer_logo.url
        return None


class NavGrandChildSerializer(serializers.ModelSerializer):
    class Meta:
        model = NavGrandChild
        fields = ['id', 'label', 'href', 'order']


class NavChildSerializer(serializers.ModelSerializer):
    children = NavGrandChildSerializer(many=True, read_only=True)

    class Meta:
        model = NavChild
        fields = ['id', 'label', 'href', 'order', 'children']


class NavItemSerializer(serializers.ModelSerializer):
    children = NavChildSerializer(many=True, read_only=True)

    class Meta:
        model = NavItem
        fields = ['id', 'label', 'href', 'description', 'disable_link', 'order', 'children']


class HeroSlideSerializer(serializers.ModelSerializer):
    programmes = serializers.ReadOnlyField()
    image_src = serializers.SerializerMethodField()

    class Meta:
        model = HeroSlide
        fields = [
            'id', 'badge', 'school', 'title', 'subtitle',
            'cta', 'cta_href', 'image_src', 'image_position',
            'programmes', 'order',
        ]

    def get_image_src(self, obj):
        if obj.image:
            request = self.context.get('request')
            return request.build_absolute_uri(obj.image.url) if request else obj.image.url
        return obj.image_url


class QuickLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuickLink
        fields = ['id', 'title', 'text', 'href', 'icon', 'order']


class CollaborationSerializer(serializers.ModelSerializer):
    logo_src = serializers.SerializerMethodField()

    class Meta:
        model = Collaboration
        fields = ['id', 'name', 'logo_src', 'website', 'description', 'order']

    def get_logo_src(self, obj):
        if obj.logo:
            request = self.context.get('request')
            return request.build_absolute_uri(obj.logo.url) if request else obj.logo.url
        return obj.logo_url


class StaffMemberSerializer(serializers.ModelSerializer):
    photo_url = serializers.SerializerMethodField()
    category_display = serializers.CharField(source='get_category_display', read_only=True)

    class Meta:
        model = StaffMember
        fields = [
            'id', 'name', 'title', 'position', 'category', 'category_display',
            'department', 'bio', 'photo_url', 'email', 'phone', 'order',
        ]

    def get_photo_url(self, obj):
        if obj.photo:
            request = self.context.get('request')
            return request.build_absolute_uri(obj.photo.url) if request else obj.photo.url
        return None
