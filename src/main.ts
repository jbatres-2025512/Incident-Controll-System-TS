import * as readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
import { registerIncident } from './functions/registerIncidents.js';
import { listIncidents } from './functions/listIncidents.js';

const rl = readline.createInterface({ input, output });

async function mainMenu(): Promise<void> {
    console.log("Bienvenido al sistema de control de incidentes");
    console.log("1. Registrar un nuevo incidente");
    console.log("2. Ver la lista de los incidentes reportados");
    console.log("3. SALIR");

    const opc = await rl.question("Ingrese el numero de la opcion: ");
    const opt = parseInt(opc);

    switch (opt) {
        case 1:
            await registerIncident(rl);
            await mainMenu();
            break;
        case 2:
            listIncidents();
            await mainMenu();
            break;
        case 3:
            console.log("SALIENDO...");
            rl.close();
            break;
        default:
            console.log("Opcion invalida");
            await mainMenu();
    }
}

mainMenu();