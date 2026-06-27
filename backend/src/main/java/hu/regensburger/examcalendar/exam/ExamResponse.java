package hu.regensburger.examcalendar.exam;

public record ExamResponse (
        Long id,
        String courseCode,
        String courseName,
        String examDateTime,
        String location,
        String faculty,
        String sourceUrl
) {
}
