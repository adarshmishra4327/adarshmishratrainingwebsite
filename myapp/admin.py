from django.contrib import admin
from myapp.models  import Contact,Loginuser,Reactstudent,Djangostudent,Studentlist
# Register your models here.

admin.site.register(Contact)
admin.site.register(Loginuser)
admin.site.register(Reactstudent)
admin.site.register(Djangostudent)
admin.site.register(Studentlist)