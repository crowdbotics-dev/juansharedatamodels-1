from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import AnimalViewSet,CatViewSet,DogViewSet,CrossbowViewSet,SupplierViewSet,EShopViewSet,CardViewSet,EbankViewSet,AnimalViewSet,CardViewSet,CatViewSet,CrossbowViewSet,DogViewSet,EbankViewSet,EShopViewSet,SupplierViewSet,AnimalViewSet,CardViewSet,CatViewSet,CrossbowViewSet,DogViewSet,EbankViewSet,EShopViewSet,SupplierViewSet,AnimalViewSet,CardViewSet,CatViewSet,CrossbowViewSet,DogViewSet,EbankViewSet,EShopViewSet,SupplierViewSet

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
router.register('supplier', SupplierViewSet )
router.register('eshop', EShopViewSet )
router.register('card', CardViewSet )
router.register('ebank', EbankViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
