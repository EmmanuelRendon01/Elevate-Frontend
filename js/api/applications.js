import { fetchData, createData, updateData, deleteData } from "./api.js";

const ENDPOINT = "applications";

// Get all applications
export function getApplications() {
    return fetchData(ENDPOINT);
}

// Create new application
export function createApplication(application) {
    return createData(ENDPOINT, application);
}

// Update existing application
export function updateApplication(id, application) {
    return updateData(ENDPOINT, id, application);
}

// Delete application by ID
export function deleteApplication(id) {
    return deleteData(ENDPOINT, id);
}

// Get all vacancies with application count
export async function getAllApplicationsColumn() {
    const res = await fetch(`https://elevate-backend-kappa.vercel.app/api/applications/column`);
    if (!res.ok) throw new Error(`Error fetching data: ${res.status}`);
    return res.json();
}