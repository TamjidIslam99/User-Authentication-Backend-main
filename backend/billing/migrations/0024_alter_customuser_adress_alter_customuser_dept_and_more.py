# Generated by Django 4.2.7 on 2024-05-21 10:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('billing', '0023_customuser_profile_photo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='adress',
            field=models.CharField(max_length=123),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='dept',
            field=models.CharField(max_length=30),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='designation',
            field=models.CharField(max_length=23),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='name',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='phone',
            field=models.CharField(max_length=30),
        ),
    ]
