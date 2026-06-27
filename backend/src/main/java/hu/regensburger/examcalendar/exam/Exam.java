package hu.regensburger.examcalendar.exam;

import jakarta.persistence.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.time.LocalDateTime;

@Entity
@Table(name = "exams")
public class Exam {

    private static final Logger log = LoggerFactory.getLogger(Exam.class);
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String courseCode;

    @Column(nullable = false)
    private String courseName;

    @Column(nullable = false)
    private LocalDateTime examDateTime;

    @Column(nullable = false)
    private String location;

    @Column(nullable = false)
    private String faculty;

    private String sourceUrl;

    protected Exam() {

    }

    public Exam(
            String courseCode,
            String courseName,
            LocalDateTime examDateTime,
            String location,
            String faculty,
            String sourceUrl
    ) {
        this.courseCode = courseCode;
        this.courseName = courseName;
        this.examDateTime = examDateTime;
        this.location = location;
        this.faculty = faculty;
        this.sourceUrl = sourceUrl;
    }

    public Long getId() { return id; }

    public String getCourseCode() { return courseCode; }

    public String getCourseName() { return courseName; }

    public LocalDateTime getExamDateTime() { return examDateTime; }

    public String getLocation() { return location; }

    public String getFaculty() { return faculty; }

    public String getSourceUrl() { return sourceUrl; }
}
