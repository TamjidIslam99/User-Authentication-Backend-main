from django.contrib import admin
from .models import *
# Register your models here.
admin.site.register(CustomUser)
admin.site.register(Semester)
admin.site.register(Course)
admin.site.register(Evaluation)
