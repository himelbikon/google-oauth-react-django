from django.shortcuts import render
from google.oauth2 import id_token
from google.auth.transport import requests as google_requests
from rest_framework.response import Response
from rest_framework.views import APIView


class Index(APIView):
    def post(self, request):
        client_id = ''
        try:
            idinfo = id_token.verify_oauth2_token(
                request.data['token_id'],
                google_requests.Request(),
                client_id
            )

            # userid = idinfo['sub']

            return Response({'profile': idinfo})
        except ValueError:

            return Response({'error': ValueError})
