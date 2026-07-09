from django.db import models
from django.utils.text import slugify
from django_ckeditor_5.fields import CKEditor5Field


class Page(models.Model):
    """Generic CMS page for static content like About, Policies, etc."""
    title = models.CharField(max_length=300)
    slug = models.SlugField(unique=True)
    meta_description = models.TextField(blank=True)
    content = CKEditor5Field(blank=True, help_text='Main page content', config_name='default')
    hero_title = models.CharField(max_length=300, blank=True)
    hero_subtitle = models.TextField(blank=True)
    hero_image = models.ImageField(upload_to='pages/', blank=True, null=True)
    hero_image_url = models.CharField(max_length=500, blank=True)
    is_published = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['title']
        verbose_name = 'Page'
        verbose_name_plural = 'Pages'

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)


class PageSection(models.Model):
    """Re-usable content sections within a page."""
    page = models.ForeignKey(Page, on_delete=models.CASCADE, related_name='sections')
    title = models.CharField(max_length=200, blank=True)
    content = CKEditor5Field(config_name='default')
    image = models.ImageField(upload_to='pages/sections/', blank=True, null=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['page', 'order']
        verbose_name = 'Page Section'
        verbose_name_plural = 'Page Sections'

    def __str__(self):
        return f'{self.page.title} — {self.title or f"Section {self.order}"}'


class Testimonial(models.Model):
    """Student / stakeholder testimonials used on various pages."""
    name = models.CharField(max_length=200)
    role = models.CharField(max_length=200, blank=True, help_text='e.g. Year 3 Medical Student')
    quote = models.TextField()
    photo = models.ImageField(upload_to='testimonials/', blank=True, null=True)
    is_active = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']
        verbose_name = 'Testimonial'
        verbose_name_plural = 'Testimonials'

    def __str__(self):
        return f'{self.name} — "{self.quote[:60]}..."'
