# Generated by Django 3.2.20 on 2023-09-18 18:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0005_card_ebank_eshop_supplier'),
    ]

    operations = [
        migrations.CreateModel(
            name='Ebank2',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('aa', models.BigIntegerField()),
            ],
        ),
    ]