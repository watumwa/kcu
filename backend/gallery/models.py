from django.db import models
from django.utils.text import slugify


class GalleryAlbum(models.Model):
    """Photo album / collection."""
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, blank=True)
    description = models.TextField(blank=True)
    cover_image = models.ImageField(upload_to='gallery/covers/', blank=True, null=True)
    date = models.DateField(blank=True, null=True)
    category = models.CharField(max_length=100, blank=True,
                                 help_text='e.g. Graduation, Blood Donation, CNOOC')
    is_active = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-date', 'order']
        verbose_name = 'Gallery Album'
        verbose_name_plural = 'Gallery Albums'

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)


class GalleryImage(models.Model):
    """Individual photo within an album."""
    album = models.ForeignKey(GalleryAlbum, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='gallery/photos/')
    caption = models.CharField(max_length=300, blank=True)
    alt_text = models.CharField(max_length=200, blank=True)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['album', 'order']
        verbose_name = 'Gallery Image'
        verbose_name_plural = 'Gallery Images'

    def __str__(self):
        return f'{self.album.title} — {self.caption or self.image.name}'
