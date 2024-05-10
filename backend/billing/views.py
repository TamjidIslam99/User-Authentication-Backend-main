from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from .models import *
from .serializers import *
from rest_framework import generics
import json
@api_view(['POST'])
def register(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response(UserSerializer(user).data, status=201)
        return Response(serializer.errors, status=400)

@api_view(['POST'])
def login(request):
    if request.method == 'POST':
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data['username']
            password = serializer.validated_data['password']
            user = CustomUser.objects.filter(username=username).first()
            if user and user.check_password(password):
                # Return user's name along with the success message
                return JsonResponse({'message': 'Login successful', 'name': user.name}, status=200)
            else:
                return JsonResponse({'error': 'Invalid username or password'}, status=400)
        else:
            return JsonResponse({'error': 'Invalid input data'}, status=400)







def get_courses_by_semester(request, semester_id):
    try:
        courses = Course.objects.filter(semester_id=semester_id)
        courses_data = [{'id': course.id, 'name': course.name} for course in courses]
        return JsonResponse(courses_data, safe=False)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)


def get_semesters(request):
    semesters = Semester.objects.all().values('id', 'name')
    return JsonResponse(list(semesters), safe=False)

@api_view(['POST'])
def save_evaluation(request):
    if request.method == 'POST':
        serializer = EvaluationSerializer(data=request.data)
        print(request)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Evaluation saved successfully'})
        return Response(serializer.errors, status=400)
    else:
        return Response({'error': 'Invalid request method'}, status=405)