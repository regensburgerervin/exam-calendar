# exam-calendar
Exam Calendar is a web application idea for helping university students collect exam dates from faculty websites and export them into calendar formats.

The long-term goal is to make exam planning easier by allowing students to select their university, faculty, and courses, then generate an .ics calendar file or later import the dates directly into Google Calendar.

## Problem
University exam dates are often published on different faculty websites, documents, or pages. Students may need to manually search for dates, copy them into their own calendar, and check for updates.

This project explores how a web application could collect, process, and export this information in a more convenient way.

## Planned Tech Stack
 - Frontend: React, TypeScript, Vite
 - Backend: Java, Spring Boot
 - Version Control: Git, GitHub

## Project Structure
 - `frontend/` - React TypeScript frontend
 - `backend/` - Java Spring Boot backend
 - `docs/` - project notes and planning documents

## Current Status

The project has completed Phase 2.

The application currently supports creating and listing exam records through a React frontend and a Spring Boot backend. Exam data is now stored persistently in a PostgreSQL database instead of temporary backend memory.

The backend uses Spring Data JPA for database access and Flyway for database schema migrations. PostgreSQL runs locally through Docker Compose during development.

## Implemented Features

- Backend health check endpoint
- Exam creation endpoint
- Exam listing endpoint
- React frontend connected to the backend
- Exam creation form
- Exam list display
- Persistent PostgreSQL storage
- Docker Compose setup for local PostgreSQL
- Flyway migration for the initial `exams` table
- Basic backend validation for exam creation requests

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Checks whether the backend is running |
| `GET` | `/api/exams` | Returns all saved exams |
| `POST` | `/api/exams` | Creates a new exam |

## Database

The application uses PostgreSQL as its main relational database.

Database schema changes are managed with Flyway migrations. The first migration creates the `exams` table. Hibernate is configured to validate the database schema instead of creating or changing it automatically.
