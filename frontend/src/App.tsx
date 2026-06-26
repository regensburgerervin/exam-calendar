import { useEffect, useState } from "react";

import { getBackendHealth } from "./api/healthApi";
import type { HealthResponse } from "./types/health";

import "./App.css";

function App() {
    const [health, setHealth] = useState<HealthResponse | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadBackendHealth() {
            try {
                setIsLoading(true);
                setError(null);

                const response = await getBackendHealth();

                setHealth(response);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError("Unknown error while connecting to backend.");
                }
            } finally {
                setIsLoading(false);
            }
        }

        loadBackendHealth();
    }, [])

    if (isLoading) {
        return (
            <main>
                <h1>Exam Calendar</h1>
                <p className="status-message loading">Checking backend connection...</p>
            </main>
        );
    }

    if (error !== null) {
        return (
            <main>
                <h1>Exam Calendar</h1>
                <p className="status-message error">Could not connect to backend.</p>
                <p className="error-details">{error}</p>
            </main>
        );
    }

    if (health === null) {
        return (
            <main>
                <h1>Exam Calendar</h1>
                <p>No backend health data available.</p>
            </main>
        );
    }

    return (
    <main>
        <h1>Exam Calendar</h1>

        <section>
        <h2>Backend connection status</h2>

        <p className="status-message success">Backend connected.</p>

        <dl>
            <dt>Status</dt>
            <dd>{health.status}</dd>

            <dt>Application</dt>
            <dd>{health.application}</dd>

            <dt>Phase</dt>
            <dd>{health.phase}</dd>
        </dl>
        </section>
    </main>
    );
}

export default App;