import { incidents } from "./registerIncidents.js";

export function listIncidents(): void {
    if (incidents.length === 0) {
        console.log("No hay incidentes registrados");
        return;
    }

    for (const incident of incidents) {
        console.log(`
ID:          ${incident.id}
Titulo:      ${incident.title}
Descripcion: ${incident.description}
Reportado:   ${incident.reported_By}
Prioridad:   ${incident.priority}
Estado:      ${incident.state}
Fecha:       ${incident.creation.toLocaleString()}
        `);
    }
}