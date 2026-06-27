package hu.regensburger.examcalendar.exam;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class ExamService {
    private final ExamRepository examRepository;

    public ExamService(ExamRepository examRepository) {
        this.examRepository = examRepository;
    }

    private Exam toEntity(CreateExamRequest request) {
        return new Exam(
                request.courseCode(),
                request.courseName(),
                LocalDateTime.parse(request.examDateTime()),
                request.location(),
                request.faculty(),
                request.sourceUrl()
        );
    }

    private ExamResponse toResponse(Exam exam) {
        return new ExamResponse(
                exam.getId(),
                exam.getCourseCode(),
                exam.getCourseName(),
                exam.getExamDateTime().toString(),
                exam.getLocation(),
                exam.getFaculty(),
                exam.getSourceUrl()
        );
    }

    public List<ExamResponse> getAllExams() {
        return examRepository.findAll()
                .stream()
                .map(this::toResponse)
                .toList();
    }

    public ExamResponse createExam(CreateExamRequest request) {
        Exam exam = toEntity(request);
        Exam savedExam = examRepository.save(exam);
        return toResponse(savedExam);
    }
}
