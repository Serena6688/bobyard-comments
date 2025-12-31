from django.urls import path
from .views import CommentListCreateView, CommentRetrieveUpdateDeleteView

urlpatterns = [
    path("comments/", CommentListCreateView.as_view(), name="comments-list-create"),
    path("comments/<str:id>/", CommentRetrieveUpdateDeleteView.as_view(), name="comments-rud"),
]