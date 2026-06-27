package hu.regensburger.examcalendar.exam;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public record CreateExamRequest(
        @NotBlank(message = "Course code is required")
        String courseCode,

        @NotBlank(message = "Course name is required")
        String courseName,

        @NotBlank(message = "Exam date and time is required")
        @Pattern(
                regexp = "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}(:\\d{2})?$",
                message = "Exam date and time must use format yyyy-MM-ddTHH:mm"
        )
        String examDateTime,

        @NotBlank(message = "Location is required")
        String location,

        @NotBlank(message = "Faculty is required")
        String faculty,

        String sourceUrl
) {
}
