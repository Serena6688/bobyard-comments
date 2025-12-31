# Bobyard Comments Challenge

A simple full-stack comments application (similar to YouTube / Reddit comments) built as part of the Bobyard take-home challenge.

The app supports listing, adding, editing, and deleting comments, with data persisted in a database and rendered via a React frontend.
<img width="936" height="1594" alt="670d518a-99e4-4d1d-9a61-4d1cfd7b80c5" src="https://github.com/user-attachments/assets/ccf4e2cc-833a-4810-b141-6c83a1ef033c" />
<img width="928" height="1682" alt="489b9e3c-3016-4068-b18f-3b637d946c82" src="https://github.com/user-attachments/assets/d8851f2d-781d-4adc-b21d-9f1f689148be" />
<img width="932" height="1708" alt="885d0343-c3f8-43a1-ab15-3cf82410dca2" src="https://github.com/user-attachments/assets/edaa62a3-7746-4dc6-9489-c2ad5536369d" />


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
