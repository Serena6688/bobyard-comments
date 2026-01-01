# Bobyard Comments Challenge

A simple full-stack comments application (similar to YouTube / Reddit comments) built as part of the Bobyard take-home challenge.

The app supports listing, adding, editing, and deleting comments, with data persisted in a database and rendered via a React frontend.

---

## Demo / Screenshots

<img width="936" height="1594" alt="Comments list" src="https://github.com/user-attachments/assets/ccf4e2cc-833a-4810-b141-6c83a1ef033c" />

<img width="928" height="1682" alt="Add comment" src="https://github.com/user-attachments/assets/d8851f2d-781d-4adc-b21d-9f1f689148be" />

<img width="932" height="1708" alt="Edit comment" src="https://github.com/user-attachments/assets/edaa62a3-7746-4dc6-9489-c2ad5536369d" />

<img width="926" height="378" alt="Delete comment" src="https://github.com/user-attachments/assets/4bb6f8f6-03d2-40d7-8e26-22bda7753480" />

---

## Tech Stack

### Backend
- Python
- Django + Django REST Framework
- PostgreSQL

### Frontend
- React
- Vite

### Infrastructure
- Docker & Docker Compose

---

## Features
- List all comments
- Add a new comment (as Admin)
- Edit existing comments
- Delete comments
- Display author, date, likes, and optional image
- Backend seeded from a provided JSON file

---

## Project Structure

bobyard-comments/
├── docker-compose.yml
├── sample_comments.json
├── backend/
│   ├── Dockerfile
│   ├── manage.py
│   ├── config/
│   └── comments/
└── frontend/
├── index.html
├── package.json
└── src/

---

## How to Run (Recommended)

### Prerequisites
- Docker Desktop installed and running

### Start the app

From the project root:

```bash
docker compose up --build

This will:
	•	Start PostgreSQL
	•	Run Django migrations
	•	Seed comments from sample_comments.json
	•	Start the Django API server
	•	Start the React frontend

⸻

Access the App
	•	Frontend: http://localhost:5173
	•	Backend API: http://localhost:8001/api/comments/

⸻

Notes
	•	The backend automatically seeds the database on startup using sample_comments.json
	•	The frontend communicates with the backend via REST APIs
	•	Docker is used to simplify setup and ensure a consistent environment

⸻

Stopping the App

docker compose down


- 或 `## Design Decisions`

这在 follow-up interview 时非常好用。
