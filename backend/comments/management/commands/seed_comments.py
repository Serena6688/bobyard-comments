import json
from pathlib import Path
from dateutil import parser
from django.core.management.base import BaseCommand
from comments.models import Comment

class Command(BaseCommand):
    help = "Seed comments from a JSON file"

    def add_arguments(self, parser_):
        parser_.add_argument("--path", type=str, required=True)

    def handle(self, *args, **options):
        path = Path(options["path"])
        if not path.exists():
            self.stdout.write(self.style.WARNING(f"Seed file not found: {path}"))
            return

        data = json.loads(path.read_text(encoding="utf-8"))
        comments = data.get("comments", [])

        created = 0
        updated = 0

        for c in comments:
            cid = str(c.get("id"))
            obj, is_created = Comment.objects.update_or_create(
                id=cid,
                defaults={
                    "author": c.get("author", ""),
                    "text": c.get("text", ""),
                    "date": parser.isoparse(c.get("date")),
                    "likes": int(c.get("likes", 0)),
                    "image": c.get("image", "") or "",
                },
            )
            created += 1 if is_created else 0
            updated += 0 if is_created else 1

        self.stdout.write(self.style.SUCCESS(f"Seed done. created={created}, updated={updated}"))