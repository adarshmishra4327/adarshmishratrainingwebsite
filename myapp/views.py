
from django.http import HttpResponse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from myapp.models import Contact, Loginuser, Reactstudent, Djangostudent, Studentlist
import json


@csrf_exempt
def login(request):
    if request.method == "POST":
        email = request.POST.get('email')
        password = request.POST.get('password')

        try:
            result = Loginuser.objects.filter(email=email, password=password)[0]

            return JsonResponse({"status": "succes", "auth": True})
        except:
            return JsonResponse({"status": "failed", "auth": False})

    if request.method == 'GET':
        return HttpResponse("Make Post Request for geting live status for Slot")

@csrf_exempt
def register(request):
    if request.method == "POST":
        # return JsonResponse({"status":"success","auth":True})
        name = request.POST.get('name')
        email = request.POST.get('email')
        mobileno = request.POST.get('mobileno')
        password = request.POST.get('password')

        registerdata = Loginuser(
            name=name, email=email, mobileno=mobileno, password=password)

        try:
            registerdata.save()
            return JsonResponse({"status": "success", "auth": True})
        except:
            return JsonResponse({"status": "failed", "auth": False})

    if request.method == 'GET':
        return HttpResponse("Make Post Request for geting live status for Slot")


@csrf_exempt
def contactnew(request):

    if request.method == 'GET':
        return HttpResponse("Make Post Request for geting live status for Plot")

    if request.method == 'POST':

        return JsonResponse({'status': "Not accepted"})


@csrf_exempt
def reactnew(request):
    if request.method == "POST":

        return JsonResponse({'status': "Not confirmed"})

    if request.method == 'GET':
        return HttpResponse("Make Post Request for geting live status for Slot")


@csrf_exempt
def djangonew(request):
    if request.method == "POST":
        return HttpResponse("Make Post Request for geting live status for Slot")

    if request.method == 'GET':
        return HttpResponse("Make Post Request for geting live status for Slot")


@csrf_exempt
def studentnew(request):
    if request.method == "POST":
        # return JsonResponse({"status":"success","auth":True})
        name = request.POST.get('name')
        email = request.POST.get('email')
        mobileno = request.POST.get('mobileno')
        coursename = request.POST.get('coursename')

        registerstudent = Studentlist(
            name=name, email=email, mobileno=mobileno, coursename=coursename)

        try:
            registerstudent.save()
            return JsonResponse({"status": "success", "auth": True})
        except:
            return JsonResponse({"status": "failed", "auth": False})

    if request.method == 'GET':
        return HttpResponse("Make Post Request for geting live status for Slot")
