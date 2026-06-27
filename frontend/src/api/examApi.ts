import type { ExamResponse, CreateExamRequest } from "../types/exam";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

export async function getExams() : Promise<ExamResponse[]>{
    const url = `${apiBaseUrl}/api/exams`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch exams. Backend responded with status: ${response.status}`);
    }

    const data = await response.json();
    
    return data as ExamResponse[];
}

export async function createExam(request: CreateExamRequest) : Promise<ExamResponse> {
    const url = `${apiBaseUrl}/api/exams`;
    
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
    });

    if (!response.ok) {
        throw new Error(`Failed to create exam. Backend responded with status: ${response.status}`);
    }

    return response.json();
}