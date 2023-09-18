from django.conf import settings
from django.db import models
class Animal(models.Model):
    'Generated Model'
    name = models.CharField(max_length=255,)
    age = models.BigIntegerField()
    owner = models.ForeignKey("users.User",null=True,blank=True,on_delete=models.CASCADE,related_name="animal_owner",)
    enemy = models.ForeignKey("home.Cat",null=True,blank=True,on_delete=models.CASCADE,related_name="animal_enemy",)
class Cat(models.Model):
    'Generated Model'
    paws = models.BooleanField()
    nemesis = models.ForeignKey("home.Dog",null=True,blank=True,on_delete=models.CASCADE,related_name="cat_nemesis",)
    weapon = models.ForeignKey("home.Crossbow",on_delete=models.CASCADE,null=True,blank=True,related_name="cat_weapon",)
class Dog(models.Model):
    'Generated Model'
    age = models.BigIntegerField()
class Crossbow(models.Model):
    'Generated Model'
    damage = models.BigIntegerField()
