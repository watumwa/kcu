from rest_framework import viewsets, permissions
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import (
    SiteSettings, NavItem, HeroSlide, QuickLink, Collaboration, StaffMember
)
from .serializers import (
    SiteSettingsSerializer, NavItemSerializer, HeroSlideSerializer,
    QuickLinkSerializer, CollaborationSerializer, StaffMemberSerializer
)


@api_view(['GET'])
def site_settings(request):
    """Retrieve the singleton site settings."""
    obj = SiteSettings.load()
    serializer = SiteSettingsSerializer(obj, context={'request': request})
    return Response(serializer.data)


@api_view(['GET'])
def navigation(request):
    """Full navigation tree including children and grand-children."""
    items = NavItem.objects.filter(is_active=True).prefetch_related(
        'children', 'children__children'
    )
    serializer = NavItemSerializer(items, many=True, context={'request': request})
    return Response(serializer.data)


class HeroSlideViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = HeroSlide.objects.filter(is_active=True)
    serializer_class = HeroSlideSerializer


class QuickLinkViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = QuickLink.objects.filter(is_active=True)
    serializer_class = QuickLinkSerializer


class CollaborationViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Collaboration.objects.filter(is_active=True)
    serializer_class = CollaborationSerializer


class StaffMemberViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = StaffMember.objects.filter(is_active=True)
    serializer_class = StaffMemberSerializer
    filterset_fields = ['category', 'department']
    search_fields = ['name', 'position', 'department']
