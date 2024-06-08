from django.urls import path,include
from rest_framework import routers
from .views import CareerViewSet

router = routers.DefaultRouter()
router.register('',CareerViewSet)

urlpatterns = [
    path('',include(router.urls))
]
