package hu.regensburger.examcalendar.exam;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/exams")
public class ExamController {
    private final ExamService service;

    public ExamController(ExamService service) {
        this.service = service;
    }

    @GetMapping
    public List<ExamResponse> getAllExams() {
        return service.getAllExams();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ExamResponse createExam(@RequestBody CreateExamRequest request) {
        return service.createExam(request);
    }
}
