import { Interface } from 'readline/promises';
import type { incident } from "../interface/incident.js";
import { sampleIncidents } from "../data/incidentSample.js";

export const incidents: incident[] = [...sampleIncidents];
let nextId = incidents.length + 1;

export async function registerIncident(rl: Interface) {

    const reported_By = await rl.question("Ingrese su nombre: ");
    const title       = await rl.question("Titulo del incidente: ");
    const description = await rl.question("Descripcion: ");

    let priority = (await rl.question("Prioridad (HIGH / MEDIUM / LOW): ")).toUpperCase();
    while (priority !== "HIGH" && priority !== "MEDIUM" && priority !== "LOW") {
        console.log("Debe ingresar una prioridad valida | HIGH | MEDIUM | LOW");
        priority = (await rl.question("Prioridad (HIGH / MEDIUM / LOW): ")).toUpperCase();
    }

    let state = (await rl.question("Estado (OPEN / IN PROGRESS / DONE): ")).toUpperCase();
    while (state !== "OPEN" && state !== "IN PROGRESS" && state !== "DONE") {
        console.log("Debe ingresar un estado valido | OPEN | IN PROGRESS | DONE");
        state = (await rl.question("Estado (OPEN / IN PROGRESS / DONE): ")).toUpperCase();
    }

    const id = nextId++;

    incidents.push({
        id,
        reported_By,
        title,
        description,
        priority,
        state,
        creation: new Date()
    });

    console.log(`Incidente #${id} registrado.`);
}