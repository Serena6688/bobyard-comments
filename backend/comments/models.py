from django.db import models

class Comment(models.Model):
    # 题目给的是字符串 id（"1"..."16"），我们用 CharField 保持一致
    id = models.CharField(primary_key=True, max_length=64)
    author = models.CharField(max_length=120)
    text = models.TextField()
    date = models.DateTimeField()
    likes = models.IntegerField(default=0)
    image = models.URLField(blank=True, default="")

    class Meta:
        ordering = ["-date"]

    def __str__(self):
        return f"{self.id} - {self.author}"