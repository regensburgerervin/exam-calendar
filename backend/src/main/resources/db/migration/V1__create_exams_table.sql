CREATE TABLE exams (
    id BIGSERIAL PRIMARY KEY,
    course_code VARCHAR(255) NOT NULL,
    course_name VARCHAR(255) NOT NULL,
    exam_date_time TIMESTAMP NOT NULL,
    location VARCHAR(255) NOT NULL,
    faculty VARCHAR(255) NOT NULL,
    source_url VARCHAR(2048)
);