Bobyard Comments Challenge

A simple full-stack comments application (similar to YouTube / Reddit comments) built as part of the Bobyard take-home challenge.

The app supports listing, adding, editing, and deleting comments, with data persisted in a database and rendered via a React frontend.

⸻

Tech Stack

Backend
	•	Python
	•	Django + Django REST Framework
	•	PostgreSQL

Frontend
	•	React
	•	Vite

Infra
	•	Docker & Docker Compose

⸻

Features
	•	List all comments
	•	Add a new comment (as Admin)
	•	Edit existing comments
	•	Delete comments
	•	Displays author, date, likes, and optional image
	•	Backend seeded from a provided JSON file

⸻

Project Structure

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


⸻

How to Run (Recommended)

Prerequisites
	•	Docker Desktop installed and running

Start the app

From the project root:

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
	•	Backend API: http://localhost:8000/api/comments/

⸻

Notes
	•	The backend automatically seeds the database on startup using sample_comments.json
	•	The frontend communicates with the backend via REST APIs
	•	Docker is used to simplify setup and ensure a consistent environment

⸻

Stopping the App

docker compose down

