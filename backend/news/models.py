from django.db import models
from django.utils.text import slugify
from django_ckeditor_5.fields import CKEditor5Field


class NewsItem(models.Model):
    """News articles, announcements and press releases."""

    CATEGORY_CHOICES = [
        ('Community', 'Community'),
        ('Student Life', 'Student Life'),
        ('Partnerships', 'Partnerships'),
        ('Research', 'Research'),
        ('Events', 'Events'),
        ('Finance', 'Finance'),
        ('Announcements', 'Announcements'),
        ('Academics', 'Academics'),
        ('Awards', 'Awards'),
    ]

    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    title = models.CharField(max_length=300)
    slug = models.SlugField(unique=True, blank=True)
    text = models.TextField(help_text='Short summary / excerpt')
    body = CKEditor5Field(blank=True, help_text='Full article content', config_name='default')
    date = models.DateField()
    image = models.ImageField(upload_to='news/', blank=True, null=True)
    image_url = models.CharField(max_length=500, blank=True, help_text='External image URL if not uploading')
    href = models.CharField(max_length=500, blank=True, help_text='External link if article is hosted elsewhere')
    featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-date', '-created_at']
        verbose_name = 'News Item'
        verbose_name_plural = 'News Items'

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)


class Newsletter(models.Model):
    """Newsletter issues / digests."""
    title = models.CharField(max_length=300)
    slug = models.SlugField(unique=True, blank=True)
    issue_number = models.PositiveIntegerField(blank=True, null=True)
    cover_image = models.ImageField(upload_to='newsletter/', blank=True, null=True)
    pdf_file = models.FileField(upload_to='newsletter/pdfs/', blank=True, null=True)
    pdf_url = models.URLField(blank=True)
    description = models.TextField(blank=True)
    published_date = models.DateField()
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-published_date']
        verbose_name = 'Newsletter'
        verbose_name_plural = 'Newsletters'

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)
