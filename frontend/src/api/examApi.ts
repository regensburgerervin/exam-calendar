import type { ExamResponse } from "../types/exam";

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