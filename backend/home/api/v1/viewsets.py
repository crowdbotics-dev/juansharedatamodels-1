from rest_framework import viewsets
from home.models import Animal,Cat,Dog,Crossbow,Supplier,EShop,Card,Ebank,Animal,Card,Cat,Crossbow,Dog,Ebank,EShop,Supplier,Animal,Card,Cat,Crossbow,Dog,Ebank,EShop,Supplier
from .serializers import AnimalSerializer,CatSerializer,DogSerializer,CrossbowSerializer,SupplierSerializer,EShopSerializer,CardSerializer,EbankSerializer,AnimalSerializer,CardSerializer,CatSerializer,CrossbowSerializer,DogSerializer,EbankSerializer,EShopSerializer,SupplierSerializer,AnimalSerializer,CardSerializer,CatSerializer,CrossbowSerializer,DogSerializer,EbankSerializer,EShopSerializer,SupplierSerializer
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

class SupplierViewSet(viewsets.ModelViewSet):
    serializer_class = SupplierSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Supplier.objects.all()

class EShopViewSet(viewsets.ModelViewSet):
    serializer_class = EShopSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = EShop.objects.all()

class CardViewSet(viewsets.ModelViewSet):
    serializer_class = CardSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Card.objects.all()

class EbankViewSet(viewsets.ModelViewSet):
    serializer_class = EbankSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Ebank.objects.all()
