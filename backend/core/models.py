from django.db import models


class SiteSettings(models.Model):
    """Global site configuration — singleton."""
    university_name = models.CharField(max_length=200, default='King Ceasor University')
    tagline = models.CharField(max_length=300, blank=True)
    short_name = models.CharField(max_length=50, default='KCU')
    logo = models.ImageField(upload_to='site/', blank=True, null=True)
    footer_logo = models.ImageField(upload_to='site/', blank=True, null=True)
    address = models.TextField(blank=True)
    phone = models.CharField(max_length=100, blank=True)
    email = models.EmailField(blank=True)
    website = models.URLField(blank=True, default='https://kcu.ac.ug')
    apply_url = models.URLField(blank=True, default='https://apply.kcu.ac.ug/')
    academia_url = models.URLField(blank=True, default='https://academia.kcu.ac.ug/')
    kclass_url = models.URLField(blank=True, default='https://vclass.kcu.ac.ug/')
    facebook_url = models.URLField(blank=True)
    twitter_url = models.URLField(blank=True)
    instagram_url = models.URLField(blank=True)
    linkedin_url = models.URLField(blank=True)
    youtube_url = models.URLField(blank=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Site Settings'
        verbose_name_plural = 'Site Settings'

    def __str__(self):
        return self.university_name

    def save(self, *args, **kwargs):
        self.pk = 1
        super().save(*args, **kwargs)

    @classmethod
    def load(cls):
        obj, _ = cls.objects.get_or_create(pk=1)
        return obj


class NavItem(models.Model):
    """Top-level navigation items."""
    label = models.CharField(max_length=100)
    href = models.CharField(max_length=200, blank=True)
    description = models.TextField(blank=True)
    disable_link = models.BooleanField(default=False)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['order', 'label']
        verbose_name = 'Navigation Item'
        verbose_name_plural = 'Navigation Items'

    def __str__(self):
        return self.label


class NavChild(models.Model):
    """Second-level navigation links."""
    parent = models.ForeignKey(NavItem, on_delete=models.CASCADE, related_name='children')
    label = models.CharField(max_length=100)
    href = models.CharField(max_length=300)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['order', 'label']
        verbose_name = 'Nav Child'
        verbose_name_plural = 'Nav Children'

    def __str__(self):
        return f'{self.parent.label} → {self.label}'


class NavGrandChild(models.Model):
    """Third-level navigation links."""
    parent = models.ForeignKey(NavChild, on_delete=models.CASCADE, related_name='children')
    label = models.CharField(max_length=100)
    href = models.CharField(max_length=300)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['order', 'label']
        verbose_name = 'Nav Grand Child'
        verbose_name_plural = 'Nav Grand Children'

    def __str__(self):
        return f'{self.parent.label} → {self.label}'


class HeroSlide(models.Model):
    """Homepage hero carousel slides."""
    badge = models.CharField(max_length=200, blank=True)
    school = models.CharField(max_length=200, blank=True)
    title = models.CharField(max_length=300)
    subtitle = models.TextField(blank=True)
    cta = models.CharField(max_length=100, default='Learn More')
    cta_href = models.CharField(max_length=300, blank=True, default='/admissions')
    image = models.ImageField(upload_to='hero/', blank=True, null=True)
    image_url = models.CharField(max_length=500, blank=True, help_text='Relative or external URL if not uploading')
    image_position = models.CharField(max_length=100, blank=True, default='center center')
    programme_1 = models.CharField(max_length=200, blank=True)
    programme_2 = models.CharField(max_length=200, blank=True)
    programme_3 = models.CharField(max_length=200, blank=True)
    programme_4 = models.CharField(max_length=200, blank=True)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['order']
        verbose_name = 'Hero Slide'
        verbose_name_plural = 'Hero Slides'

    def __str__(self):
        return self.title

    @property
    def programmes(self):
        return [p for p in [self.programme_1, self.programme_2, self.programme_3, self.programme_4] if p]


class QuickLink(models.Model):
    """Homepage quick-links panel."""
    title = models.CharField(max_length=100)
    text = models.TextField()
    href = models.CharField(max_length=300)
    icon = models.CharField(max_length=50, blank=True)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['order']
        verbose_name = 'Quick Link'
        verbose_name_plural = 'Quick Links'

    def __str__(self):
        return self.title


class Collaboration(models.Model):
    """Partners & collaborating organisations."""
    name = models.CharField(max_length=200)
    logo = models.ImageField(upload_to='collaborations/', blank=True, null=True)
    logo_url = models.CharField(max_length=500, blank=True)
    website = models.URLField(blank=True)
    description = models.TextField(blank=True)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['order', 'name']
        verbose_name = 'Collaboration / Partner'
        verbose_name_plural = 'Collaborations & Partners'

    def __str__(self):
        return self.name


class StaffMember(models.Model):
    """University management and staff."""

    class Category(models.TextChoices):
        MANAGEMENT = 'management', 'University Management'
        ACADEMIC = 'academic', 'Academic Staff'
        SUPPORT = 'support', 'Support Staff'
        GUILD = 'guild', 'Guild Leadership'

    name = models.CharField(max_length=200)
    title = models.CharField(max_length=100, blank=True, help_text='e.g. Dr, Prof, Mr')
    position = models.CharField(max_length=200)
    category = models.CharField(max_length=30, choices=Category.choices, default=Category.MANAGEMENT)
    department = models.CharField(max_length=200, blank=True)
    bio = models.TextField(blank=True)
    photo = models.ImageField(upload_to='staff/', blank=True, null=True)
    email = models.EmailField(blank=True)
    phone = models.CharField(max_length=100, blank=True)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['category', 'order', 'name']
        verbose_name = 'Staff Member'
        verbose_name_plural = 'Staff Members'

    def __str__(self):
        prefix = f'{self.title} ' if self.title else ''
        return f'{prefix}{self.name} — {self.position}'
