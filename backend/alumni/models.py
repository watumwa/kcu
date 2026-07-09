from django.db import models


class AlumniProfile(models.Model):
    """Notable alumni profiles."""
    name = models.CharField(max_length=200)
    graduation_year = models.PositiveIntegerField(blank=True, null=True)
    programme = models.CharField(max_length=300, blank=True)
    current_position = models.CharField(max_length=300, blank=True)
    current_organisation = models.CharField(max_length=300, blank=True)
    bio = models.TextField(blank=True)
    quote = models.TextField(blank=True)
    photo = models.ImageField(upload_to='alumni/', blank=True, null=True)
    linkedin_url = models.URLField(blank=True)
    is_featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order', '-graduation_year', 'name']
        verbose_name = 'Alumni Profile'
        verbose_name_plural = 'Alumni Profiles'

    def __str__(self):
        return f'{self.name} ({self.graduation_year or "N/A"})'


class AlumniTestimonial(models.Model):
    """Short testimonials from alumni."""
    alumni = models.ForeignKey(
        AlumniProfile, on_delete=models.CASCADE,
        related_name='testimonials', blank=True, null=True
    )
    name = models.CharField(max_length=200, help_text='Display name (can differ from profile)')
    programme = models.CharField(max_length=200, blank=True)
    graduation_year = models.PositiveIntegerField(blank=True, null=True)
    testimonial = models.TextField()
    photo = models.ImageField(upload_to='alumni/testimonials/', blank=True, null=True)
    is_active = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']
        verbose_name = 'Alumni Testimonial'
        verbose_name_plural = 'Alumni Testimonials'

    def __str__(self):
        return f'{self.name} — "{self.testimonial[:60]}..."'
