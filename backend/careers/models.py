from django.db import models
from django.utils.text import slugify
from django_ckeditor_5.fields import CKEditor5Field


class JobPosting(models.Model):
    """Job and career vacancies at KCU."""

    class JobType(models.TextChoices):
        FULL_TIME = 'full-time', 'Full Time'
        PART_TIME = 'part-time', 'Part Time'
        CONTRACT = 'contract', 'Contract'
        INTERNSHIP = 'internship', 'Internship'

    class Department(models.TextChoices):
        ACADEMIC = 'academic', 'Academic Staff'
        ADMINISTRATIVE = 'administrative', 'Administrative Staff'
        SUPPORT = 'support', 'Support Staff'
        MANAGEMENT = 'management', 'Management'
        OTHER = 'other', 'Other'

    title = models.CharField(max_length=300)
    slug = models.SlugField(unique=True, blank=True)
    department = models.CharField(max_length=30, choices=Department.choices, default=Department.ACADEMIC)
    job_type = models.CharField(max_length=20, choices=JobType.choices, default=JobType.FULL_TIME)
    location = models.CharField(max_length=200, blank=True, default='Bunga Hill Campus, Kampala')
    description = CKEditor5Field(config_name='default')
    requirements = CKEditor5Field(blank=True, config_name='default')
    responsibilities = CKEditor5Field(blank=True, config_name='default')
    salary_range = models.CharField(max_length=100, blank=True)
    application_deadline = models.DateField(blank=True, null=True)
    application_url = models.URLField(blank=True)
    application_email = models.EmailField(blank=True)
    pdf_details = models.FileField(upload_to='careers/', blank=True, null=True)
    is_active = models.BooleanField(default=True)
    posted_date = models.DateField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-posted_date']
        verbose_name = 'Job Posting'
        verbose_name_plural = 'Job Postings'

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)
