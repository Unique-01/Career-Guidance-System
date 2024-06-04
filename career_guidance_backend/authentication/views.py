from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth import get_user_model


User = get_user_model()

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def example_view(request):
    return Response(data={"message": "This is a protected view"})
