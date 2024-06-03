from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class MyUser(AbstractUser):
    role = models.CharField(max_length=10,choices=[('student', 'Student'), ('counselor', 'Counselor'), ('admin', 'Admin')],default='student')
    career_interests = models.TextField(blank=True,null=True)

 
