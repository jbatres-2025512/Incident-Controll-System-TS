import type { incident } from "../interface/incident.js";

export const sampleIncidents: incident[] = [
    {
        id: 1,
        title: "Fallo en servidor principal",
        description: "El servidor dejo de responder a las 8am",
        reported_By: "Carlos Mendez",
        priority: "HIGH",
        state: "OPEN",
        creation: new Date("2025-06-01")
    },
    {
        id: 2,
        title: "Error en modulo de pagos",
        description: "Los pagos con tarjeta no se procesan correctamente",
        reported_By: "Ana Lopez",
        priority: "HIGH",
        state: "IN PROGRESS",
        creation: new Date("2025-06-03")
    },
    {
        id: 3,
        title: "Impresora sin papel",
        description: "La impresora del area de recepcion no tiene papel",
        reported_By: "Luis Garcia",
        priority: "LOW",
        state: "DONE",
        creation: new Date("2025-06-05")
    }
];