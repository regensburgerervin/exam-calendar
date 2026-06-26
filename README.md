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

## Current Phase
Current status: Phase 1 completed
Phase 1: backend–frontend connection.

The goal of Phase 1 is to prove that the React frontend can communicate with the Spring Boot backend through a simple REST API.

## Run
Backend runs on: http://localhost:8080
Frontend runs on: http://localhost:5173
Phase 1 API target: GET /api/health

## Project Structure
 - `frontend/` - React TypeScript frontend
 - `backend/` - Java Spring Boot backend
 - `docs/` - project notes and planning documents
