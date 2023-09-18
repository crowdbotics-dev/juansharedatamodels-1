from django.conf import settings
from django.db import models
class Animal(models.Model):
    'Generated Model'
    name = models.CharField(max_length=255,)
    age = models.BigIntegerField()
