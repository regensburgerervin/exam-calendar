import { useEffect, useState } from "react";

import { createExam, getExams } from "./api/examApi";
import ExamForm from "./components/ExamForm";
import ExamList from "./components/ExamList";
import type { CreateExamRequest, ExamResponse, ExamFormValues } from "./types/exam";

import "./App.css";

function App() {
    const [exams, setExams] = useState<ExamResponse[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadExams() {
            try {
                setIsLoading(true);
                setError(null);

                const examsFromBackend = await getExams();

                setExams(examsFromBackend);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError("Unknown error while loading exams.");
                }
            } finally {
                setIsLoading(false);
            }
        }

        loadExams();
    }, []);

    async function handleCreateExam(formValues: ExamFormValues) {
        try {
            const request: CreateExamRequest = {
                courseCode: formValues.courseCode,
                courseName: formValues.courseName,
                examDateTime: formValues.examDateTime,
                location: formValues.location,
                faculty: formValues.faculty,
                sourceUrl: formValues.sourceUrl.trim() === "" ? null : formValues.sourceUrl,
            };

            const createdExam = await createExam(request);

            setExams((previousExams) => [...previousExams, createdExam]);   
        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("Unknown error while creating exam.");
            }
        }
    }

    if (isLoading) {
        return <p className="app-loading">Loading exams...</p>;
    }

    if (error !== null) {
        return <p className="app-error">{error}</p>;
    }

    return (
        <main className="app">
            <section className="app-header">
                <h1>Exam Calendar</h1>
                <p>Manage and view university exam dates.</p>
            </section>

            <ExamForm onCreateExam={handleCreateExam} />

            <ExamList exams={exams} />
        </main>
    )
}

export default App;