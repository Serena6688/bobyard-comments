# Bobyard Comments Challenge

A simple full-stack comments application (similar to YouTube / Reddit comments) built as part of the Bobyard take-home challenge.

The app supports listing, adding, editing, and deleting comments, with data persisted in a database and rendered via a React frontend.

---

## Tech Stack

### Backend
- Python
- Django + Django REST Framework
- PostgreSQL

### Frontend
- React
- Vite

### Infra
- Docker & Docker Compose

---

## Features
- List all comments
- Add a new comment (as Admin)
- Edit existing comments
- Delete comments
- Displays author, date, likes, and optional image
- Backend seeded from a provided JSON file

---

## How to Run (Recommended)

### Prerequisites
- Docker Desktop installed and running

### Start the app

From the project root:

```bash
docker compose up --build
