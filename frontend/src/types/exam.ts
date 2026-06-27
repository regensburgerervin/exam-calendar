export interface ExamResponse {
    id: number,
    courseCode: string,
    courseName: string,
    examDateTime: string,
    location: string,
    faculty: string,
    sourceUrl?: string | null
}

export interface CreateExamRequest {
    courseCode: string,
    courseName: string,
    examDateTime: string,
    location: string,
    faculty: string,
    sourceUrl?: string | null
}

export interface ExamFormValues {
    courseCode: string,
    courseName: string,
    examDateTime: string,
    location: string,
    faculty: string,
    sourceUrl: string
}