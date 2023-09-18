from django.conf import settings
from django.db import models
class Animal(models.Model):
    'Generated Model'
    name = models.CharField(max_length=255,)
    age = models.BigIntegerField()
    owner = models.ForeignKey("users.User",on_delete=models.CASCADE,null=True,blank=True,related_name="animal_owner",)
    enemy = models.ForeignKey("home.Cat",on_delete=models.CASCADE,null=True,blank=True,related_name="animal_enemy",)
class Cat(models.Model):
    'Generated Model'
    paws = models.BooleanField()
    nemesis = models.ForeignKey("home.Dog",on_delete=models.CASCADE,null=True,blank=True,related_name="cat_nemesis",)
class Dog(models.Model):
    'Generated Model'
    age = models.BigIntegerField()
