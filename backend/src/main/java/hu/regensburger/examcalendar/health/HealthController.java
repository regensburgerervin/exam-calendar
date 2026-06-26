package hu.regensburger.examcalendar.health;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HealthController {

    @GetMapping("/health")
    public HealthResponse healthResponse(String status, String application, String phase) {
        return new HealthResponse("UP", "Exam Calendar API", "Phase 1");
    }
}
