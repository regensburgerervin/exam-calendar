# Architecture Decisions
This document records important technical decisions made during the project.

## Decision 001: Use a single repository
The project will use one GitHub repository with separate `frontend/` and `backend/` folders.

### Reason
The frontend and backend belong to the same product. A single repository makes the project easier to manage, especially during the early phases.

### Alternatives Considered
 - Separate frontend and backend repositories
 - More complex monorepo setup

### Decision
Use one simple repository structure:
 - `frontend/`
 - `backend/`
 - `docs/`

## Decisions 002: Use React and TypeScript for the frontend

The frontend will use React with TypeScript.

### Reason

React is widely used in web development, and TypeScript helps catch mistakes earlier. Decision was mostly based on internship opportunity requirements in Hungary.

## Decision 003: Use Java Spring Boot for the backend

The backend will use Java with Spring Boot.

### Reason

Java and Spring Boot are common in backend development and are useful technologies for internship opportunities, especially in enterprise environments.

## Decision 004: Use a REST JSON API between frontend and backend

The frontend and backend will communicate over HTTP using JSON responses.

### Reason
This keeps the first integration simple and matches how many real web applications separate frontend and backend development.

## Decision 005: Store frontend API base URL in environment configuration

The frontend should not hardcode the backend URL directly inside UI components.

## Decision 006: Use PostgreSQL as the main application database
It is a widely used relational database in professional backend development, so using it makes the project more realistic and valuable from a learning and portfolio perspective. A relational database also fits the current exam data model well, because exams have clear structured fields such as course code, course name, date, location, faculty, and source URL.

## Decision 007: Use Spring Data JPA for Database access
Spring Data JPA was chosen because it integrates naturally with Spring Boot and reduces the amount of manual database access code needed for basic CRUD operations. It allows the backend to work with Java objects while still storing the data in a relational database. This keeps the service layer focused on application logic instead of low-level SQL handling, which is appropriate for the current stage of the project.

## Decision 008: Use database migrations
Database migrations were chosen to make database changes explicit, repeatable, and version-controlled. As the project grows, the database schema will likely change, for example when new fields or tables are added. Using migrations helps avoid undocumented manual database changes and makes it easier to recreate the same database structure on another machine or in a future deployment environment.