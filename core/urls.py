from django.urls import path
from .views import index, projects, contact, about

urlpatterns = [
    path('', index, name='index'),
    path('projects', projects, name='projects'),
    path('contact', contact, name='contact'),
    path('about', about, name='about'),
]