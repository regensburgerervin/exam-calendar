import { useEffect, useState } from "react";

import { getExams } from "./api/examApi";
import type { ExamResponse } from "./types/exam";
import ExamList from "./components/ExamList";

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

            <ExamList exams={exams} />
        </main>
    )
}

export default App;