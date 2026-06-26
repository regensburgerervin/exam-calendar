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