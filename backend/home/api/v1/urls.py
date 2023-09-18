from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import AnimalViewSet,CatViewSet,DogViewSet,CrossbowViewSet,AnimalViewSet,CatViewSet,CrossbowViewSet,DogViewSet,AnimalViewSet,CatViewSet,CrossbowViewSet,DogViewSet,AnimalViewSet,CatViewSet,CrossbowViewSet,DogViewSet

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
router.register('crossbow', CrossbowViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
