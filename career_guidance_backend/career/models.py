from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

# Create your models here.


class Career(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    qualifications = models.TextField()
    job_outlook = models.TextField()
    pathways = models.TextField()
    def __str__(self):
        return self.title