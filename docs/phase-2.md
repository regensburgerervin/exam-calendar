# Phase 2 - Persistent exam storage
# Status: Completed

## Goal
Replace temporary in-memory exam storage with persistent database storage

## Scope

Phase 2 included:

- Adding PostgreSQL as the local development database
- Running PostgreSQL with Docker Compose
- Connecting the Spring Boot backend to PostgreSQL
- Adding Spring Data JPA
- Creating an `Exam` JPA entity
- Creating an `ExamRepository`
- Refactoring `ExamService` to use the database instead of an in-memory list
- Adding backend validation for exam creation requests
- Adding Flyway for database schema migrations
- Creating the first migration for the `exams` table

## Definition of Done
 - A created exam remains available after backend restart.
 - GET /api/exams reads from the database.
 - POST /api/exams writes to the database.
 - The frontend still works without major changes.
 - The database choice is recorded in architecture decisions.
 - Local setup instructions are updated.

 