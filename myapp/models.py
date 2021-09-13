from django.db import models

# Create your models here.

class Contact(models.Model):
    name = models.CharField(max_length=122)
    email =  models.CharField(max_length=122)
    mobileno =  models.CharField(max_length=122)
    

    def __str__(self):
        return self.name


class Loginuser(models.Model):
    name = models.CharField(max_length=122)
    email =  models.CharField(max_length=122)
    mobileno =  models.CharField(max_length=122)
    password =   models.CharField(max_length=122)


    def __str__(self):
        return self.name


class Reactstudent(models.Model):
    name = models.CharField(max_length=122)
    email =  models.CharField(max_length=122)
    mobileno =  models.CharField(max_length=122)


    def __str__(self):
        return self.name


class Djangostudent(models.Model):
    name = models.CharField(max_length=122)
    email =  models.CharField(max_length=122)
    mobileno =  models.CharField(max_length=122)


    def __str__(self):
        return self.name


class Studentlist(models.Model):
    name = models.CharField(max_length=122)
    email =  models.CharField(max_length=122)
    mobileno =  models.CharField(max_length=122)
    coursename =  models.CharField(max_length=122)
    

    
    def __str__(self):
        return self.name
    
