# Generated by Django 4.2.6 on 2023-11-29 18:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shops', '0008_remove_cartitem_user'),
        ('accounts', '0003_appuser_image_url'),
    ]

    operations = [
        migrations.AddField(
            model_name='appuser',
            name='cart',
            field=models.ManyToManyField(blank=True, to='shops.cartitem'),
        ),
    ]
