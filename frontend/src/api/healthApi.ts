import type { HealthResponse } from "../types/health";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

export async function getBackendHealth() : Promise<HealthResponse> {
    const url = `${apiBaseUrl}/api/health`;
    
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Backend health check failed");
    }

    const data = await response.json();

    return data as HealthResponse;
}