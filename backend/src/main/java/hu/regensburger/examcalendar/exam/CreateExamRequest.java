package hu.regensburger.examcalendar.exam;

public record CreateExamRequest(
        String courseCode,
        String courseName,
        String examDateTime,
        String location,
        String faculty,
        String sourceUrl
) {
}
