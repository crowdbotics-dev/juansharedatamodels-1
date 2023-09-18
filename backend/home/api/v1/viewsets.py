from rest_framework import viewsets
from home.models import Animal,Cat,Dog,Crossbow,Animal,Cat,Crossbow,Dog,Animal,Cat,Crossbow,Dog
from .serializers import AnimalSerializer,CatSerializer,DogSerializer,CrossbowSerializer,AnimalSerializer,CatSerializer,CrossbowSerializer,DogSerializer,AnimalSerializer,CatSerializer,CrossbowSerializer,DogSerializer
from rest_framework import authentication
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

from home.api.v1.serializers import (
    SignupSerializer,
    UserSerializer,
)


class SignupViewSet(ModelViewSet):
    serializer_class = SignupSerializer
    http_method_names = ["post"]


class LoginViewSet(ViewSet):
    """Based on rest_framework.authtoken.views.ObtainAuthToken"""

    serializer_class = AuthTokenSerializer

    def create(self, request):
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        token, created = Token.objects.get_or_create(user=user)
        user_serializer = UserSerializer(user)
        return Response({"token": token.key, "user": user_serializer.data})

class AnimalViewSet(viewsets.ModelViewSet):
    serializer_class = AnimalSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Animal.objects.all()

class CatViewSet(viewsets.ModelViewSet):
    serializer_class = CatSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Cat.objects.all()

class DogViewSet(viewsets.ModelViewSet):
    serializer_class = DogSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Dog.objects.all()

class CrossbowViewSet(viewsets.ModelViewSet):
    serializer_class = CrossbowSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Crossbow.objects.all()
