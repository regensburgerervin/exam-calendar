# Phase 2 - Persistent exam storage

## Goal
Replace temporary in-memory exam storage with persistent database storage

## Scope
 - Add database support to the Spring Boot backend.
 - Store created exams permanently.
 - Load exams from the database on backend startup.
 - Keep the existing frontend API contract stable.
 - Add basic validation for exam creation.

## Definition of Done
 - A created exam remains available after backend restart.
 - GET /api/exams reads from the database.
 - POST /api/exams writes to the database.
 - The frontend still works without major changes.
 - The database choice is recorded in architecture decisions.
 - Local setup instructions are updated.

 