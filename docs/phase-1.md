# Phase 1 - Backend and Frontend Connection

## Goal
Connect the React frontend to the Spring Boot backend through a simple REST API.

## Scope
- Add one backend endpoint.
- Return a simple JSON response.
- Call the endpoint from the frontend.
- Display loading, success, and error states in the UI.

## API Contract
GET /api/health

Expected response:
- status
- application name
- phase

## Definition of Done
- Backend starts locally.
- Frontend starts locally.
- Frontend displays data received from the backend.
- Frontend shows an understandable error if the backend is not running.