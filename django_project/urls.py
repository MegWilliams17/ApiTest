"""
URL configuration for django_project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index),
    path('search/', views.search, name='search'),
    #path('unsplash/', views.unsplash_images, name='unsplash'),
    path('unsplash/', views.get_unsplash_images, name='unsplash'),
    path('get_random_fact/', views.get_random_fact, name='get_random_fact'),
    path('get_random_user/', views.get_random_user, name='get_random_user'),
    path('get_random_dog/', views.get_random_dog, name='get_random_dog'),
    path('get_random_activity/', views.get_random_activity, name='get_random_activity'),
    path('get_random_cat/', views.get_random_cat, name='get_random_cat'),
    path('beach-gallery/', views.beach_gallery, name='beach_gallery'),
    path('food-gallery/', views.food_gallery, name='food_gallery'),

   
  
]
