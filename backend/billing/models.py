from django.db import models
from django.contrib.auth.hashers import make_password, check_password

class CustomUser(models.Model):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=40, unique=True)
    password = models.CharField(max_length=128)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    def set_password(self, raw_password):
        self.password = make_password(raw_password)

    def check_password(self, raw_password):
        return check_password(raw_password, self.password)

    def __str__(self):
        return self.username