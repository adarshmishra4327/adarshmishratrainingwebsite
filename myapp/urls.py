from django.urls import path

from . import views

urlpatterns = [
    path('loginuser/', views.login),
    path('registeruser/', views.register),
    path('contactuser/', views.contactnew),
    path('reactstudent/', views.reactnew),
    path('djangostudent/', views.djangonew),
    path('studentlist/', views.studentnew),
]
