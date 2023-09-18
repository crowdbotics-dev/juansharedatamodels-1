from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import AnimalViewSet,CatViewSet,DogViewSet,AnimalViewSet,CatViewSet,DogViewSet,AnimalViewSet,CatViewSet,DogViewSet,AnimalViewSet,CatViewSet,DogViewSet

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register('animal', AnimalViewSet )
router.register('cat', CatViewSet )
router.register('dog', DogViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
