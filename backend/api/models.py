# api/models.py

from django.db import models

class Item(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    img = models.URLField(max_length=200, blank=True, null=True)  # Añade el campo de imagen

    def __str__(self):
        return self.name
