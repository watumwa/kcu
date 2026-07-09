from django.db import models


class School(models.Model):
    """Academic schools / faculties."""
    name = models.CharField(max_length=300)
    slug = models.SlugField(unique=True)
    short_name = models.CharField(max_length=100, blank=True)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='schools/', blank=True, null=True)
    image_url = models.CharField(max_length=500, blank=True)
    dean_name = models.CharField(max_length=200, blank=True)
    dean_title = models.CharField(max_length=100, blank=True)
    dean_photo = models.ImageField(upload_to='schools/deans/', blank=True, null=True)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['order', 'name']
        verbose_name = 'School'
        verbose_name_plural = 'Schools'

    def __str__(self):
        return self.name


class Course(models.Model):
    """Academic programmes / courses."""

    class Level(models.TextChoices):
        UNDERGRADUATE = 'undergraduate', 'Undergraduate'
        DIPLOMA = 'diploma', 'Diploma'
        CERTIFICATE = 'certificate', 'Certificate / Short Course'
        POSTGRADUATE = 'postgraduate', 'Postgraduate'

    class Duration(models.TextChoices):
        ONE_YEAR = '1', '1 Year'
        TWO_YEARS = '2', '2 Years'
        THREE_YEARS = '3', '3 Years'
        FOUR_YEARS = '4', '4 Years'
        FIVE_YEARS = '5', '5 Years'
        SIX_YEARS = '6', '6 Years'
        CUSTOM = 'custom', 'Custom'

    school = models.ForeignKey(School, on_delete=models.CASCADE, related_name='courses')
    name = models.CharField(max_length=300)
    slug = models.SlugField(unique=True)
    level = models.CharField(max_length=20, choices=Level.choices)
    duration = models.CharField(max_length=10, choices=Duration.choices, default=Duration.THREE_YEARS)
    duration_custom = models.CharField(max_length=100, blank=True, help_text='Used when Duration = Custom')
    description = models.TextField(blank=True)
    entry_requirements = models.TextField(blank=True)
    career_prospects = models.TextField(blank=True)
    image = models.ImageField(upload_to='courses/', blank=True, null=True)
    is_featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['school', 'level', 'order', 'name']
        verbose_name = 'Course'
        verbose_name_plural = 'Courses'

    def __str__(self):
        return f'{self.name} ({self.get_level_display()})'


class UpcomingEvent(models.Model):
    """University events listed on the homepage / events page."""

    class Status(models.TextChoices):
        UPCOMING = 'Upcoming', 'Upcoming'
        ONGOING = 'Ongoing', 'Ongoing'
        COMPLETED = 'Completed', 'Completed'
        CANCELLED = 'Cancelled', 'Cancelled'

    title = models.CharField(max_length=300)
    date = models.DateField()
    location = models.CharField(max_length=300, blank=True)
    description = models.TextField(blank=True)
    status = models.CharField(max_length=20, choices=Status.choices, default=Status.UPCOMING)
    registration_url = models.URLField(blank=True)
    image = models.ImageField(upload_to='events/', blank=True, null=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['date']
        verbose_name = 'Event'
        verbose_name_plural = 'Events'

    def __str__(self):
        return f'{self.title} ({self.date})'


class GraduationCeremony(models.Model):
    """Graduation ceremony announcements."""
    title = models.CharField(max_length=300)
    year = models.PositiveIntegerField()
    date = models.DateField(blank=True, null=True)
    venue = models.CharField(max_length=300, blank=True)
    description = models.TextField(blank=True)
    notice_pdf = models.FileField(upload_to='graduation/notices/', blank=True, null=True)
    clearance_pdf = models.FileField(upload_to='graduation/clearance/', blank=True, null=True)
    image = models.ImageField(upload_to='graduation/', blank=True, null=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-year']
        verbose_name = 'Graduation Ceremony'
        verbose_name_plural = 'Graduation Ceremonies'

    def __str__(self):
        return f'{self.title} {self.year}'
