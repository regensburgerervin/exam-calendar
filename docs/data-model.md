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
- Creating the first migration for the `exams` # Data Model

## Exam

The first persistent domain model is `Exam`.

The database table is named:

```text
exams
```

Current fields:

| Field | Database Column | Type | Required | Description |
|---|---|---|---|---|
| `id` | `id` | `BIGSERIAL` / `Long` | yes | Database-generated primary key |
| `courseCode` | `course_code` | text | yes | University course code |
| `courseName` | `course_name` | text | yes | Human-readable course name |
| `examDateTime` | `exam_date_time` | timestamp | yes | Date and time of the exam |
| `location` | `location` | text | yes | Exam location |
| `faculty` | `faculty` | text | yes | Faculty or source group |
| `sourceUrl` | `source_url` | text | no | Optional URL where the exam information came from |

## Date and Time Assumption

For the MVP, exam date and time values are treated as local university time.

Since the project currently targets Hungarian university exams, this means the application assumes Europe/Budapest local time. Full timezone handling can be improved later when `.ics` export or Google Calendar integration is implemented.

## Schema Management

The `exams` table is created by the first Flyway migration:

```text
V1__create_exams_table.sql
```

Future database changes should be added as new migration files, for example:

```text
V2__add_exam_type_to_exams.sql
V3__create_faculties_table.sql
```

Existing committed migrations should not be edited after they have been applied and shared. New schema changes should be introduced through new migration files.