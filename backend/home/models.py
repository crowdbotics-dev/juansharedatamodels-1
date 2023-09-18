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
    weapon = models.ForeignKey("home.Crossbow",null=True,blank=True,on_delete=models.CASCADE,related_name="cat_weapon",)
class Dog(models.Model):
    'Generated Model'
    age = models.BigIntegerField()
class Crossbow(models.Model):
    'Generated Model'
    damage = models.BigIntegerField()
class Supplier(models.Model):
    'Generated Model'
    name = models.CharField(max_length=255,)
    address = models.CharField(max_length=255,)
class EShop(models.Model):
    'Generated Model'
    name = models.CharField(max_length=255,)
    email = models.EmailField(max_length=254,)
    supplier = models.ForeignKey("home.Supplier",on_delete=models.CASCADE,null=True,blank=True,related_name="eshop_supplier",)
class Card(models.Model):
    'Generated Model'
    limit = models.BigIntegerField()
    is_premium = models.BooleanField()
class Ebank(models.Model):
    'Generated Model'
    address = models.CharField(max_length=255,)
    name = models.CharField(max_length=255,)
    ranking = models.PositiveSmallIntegerField()
    verified_users = models.IntegerField()
    has_saving = models.BooleanField(null=True,blank=True,)
    has_checking = models.BooleanField(null=True,blank=True,)
    card = models.ForeignKey("home.Card",on_delete=models.CASCADE,null=True,blank=True,related_name="ebank_card",)
