from django.db import models
from django_ckeditor_5.fields import CKEditor5Field


class FeeStructure(models.Model):
    """Tuition & fees for different programmes."""

    class Intake(models.TextChoices):
        APRIL = 'april', 'April Intake'
        AUGUST = 'august', 'August Intake'

    class StudentType(models.TextChoices):
        LOCAL = 'local', 'Local Student'
        INTERNATIONAL = 'international', 'International Student'
        GOVERNMENT = 'government', 'Government Sponsored'

    academic_year = models.CharField(max_length=20, help_text='e.g. 2025/2026')
    programme = models.CharField(max_length=300)
    level = models.CharField(max_length=50, blank=True)
    student_type = models.CharField(max_length=20, choices=StudentType.choices, default=StudentType.LOCAL)
    intake = models.CharField(max_length=20, choices=Intake.choices, blank=True)
    tuition_per_year = models.DecimalField(max_digits=12, decimal_places=2, blank=True, null=True)
    tuition_per_semester = models.DecimalField(max_digits=12, decimal_places=2, blank=True, null=True)
    functional_fees = models.DecimalField(max_digits=12, decimal_places=2, blank=True, null=True)
    notes = models.TextField(blank=True)
    is_active = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order', 'programme']
        verbose_name = 'Fee Structure'
        verbose_name_plural = 'Fee Structures'

    def __str__(self):
        return f'{self.programme} — {self.academic_year}'


class AdmissionRequirement(models.Model):
    """Entry requirements per programme level."""

    class Level(models.TextChoices):
        UNDERGRADUATE = 'undergraduate', 'Undergraduate'
        DIPLOMA = 'diploma', 'Diploma'
        CERTIFICATE = 'certificate', 'Certificate'
        POSTGRADUATE = 'postgraduate', 'Postgraduate'

    level = models.CharField(max_length=20, choices=Level.choices)
    title = models.CharField(max_length=200)
    content = CKEditor5Field(config_name='default')
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['order', 'level']
        verbose_name = 'Admission Requirement'
        verbose_name_plural = 'Admission Requirements'

    def __str__(self):
        return f'{self.get_level_display()} — {self.title}'


class AdmissionProcess(models.Model):
    """Step-by-step application guide."""
    step_number = models.PositiveIntegerField()
    title = models.CharField(max_length=200)
    description = models.TextField()
    icon = models.CharField(max_length=50, blank=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['step_number']
        verbose_name = 'Admission Process Step'
        verbose_name_plural = 'Admission Process Steps'

    def __str__(self):
        return f'Step {self.step_number}: {self.title}'
