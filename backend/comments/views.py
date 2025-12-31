from django.utils import timezone
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError

from .models import Comment
from .serializers import CommentSerializer, CommentCreateSerializer

class CommentListCreateView(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def get_serializer_class(self):
        if self.request.method == "POST":
            return CommentCreateSerializer
        return CommentSerializer

    def perform_create(self, serializer):
        # Admin + 当前时间 + 新 id
        # 用 timestamp 做简易唯一 id（可换成 uuid）
        new_id = str(int(timezone.now().timestamp() * 1000))

        text = serializer.validated_data.get("text", "").strip()
        if not text:
            raise ValidationError({"text": "Text cannot be empty."})

        Comment.objects.create(
            id=new_id,
            author="Admin",
            text=text,
            date=timezone.now(),
            likes=0,
            image="",
        )

class CommentRetrieveUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    lookup_field = "id"

    def patch(self, request, *args, **kwargs):
        # 只允许改 text（题目要求）
        comment = self.get_object()
        text = request.data.get("text", "")
        if not isinstance(text, str) or not text.strip():
            raise ValidationError({"text": "Text cannot be empty."})

        comment.text = text.strip()
        comment.save(update_fields=["text"])
        return Response(CommentSerializer(comment).data)

    def put(self, request, *args, **kwargs):
        # put 也按只改 text 处理（更简单）
        return self.patch(request, *args, **kwargs)