package hu.regensburger.examcalendar.exam;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class ExamService {
    private final List<ExamResponse> exams = new ArrayList<>(
        List.of(
                new ExamResponse(
                        1L,
                        "BMEVIAUAC03",
                        "Software Engineering",
                        "2026-01-10T10:00:00",
                        "IB028",
                        "VIK",
                        null
                ),
                new ExamResponse(
                        2L,
                        "BMEVISZAA00",
                        "Databases",
                        "2026-01-15T14:00:00",
                        "QBF13",
                        "VIK",
                        null
                )
        )
);

    private final AtomicLong nextId = new AtomicLong(3L);

    public List<ExamResponse> getAllExams() {
        return exams;
    }

    public ExamResponse createExam(CreateExamRequest request) {
        ExamResponse examFromRequest = new ExamResponse(
                nextId.getAndIncrement(),
                request.courseCode(),
                request.courseName(),
                request.examDateTime(),
                request.location(),
                request.faculty(),
                request.sourceUrl()
        );

        exams.add(examFromRequest);

        return examFromRequest;
    }
}
