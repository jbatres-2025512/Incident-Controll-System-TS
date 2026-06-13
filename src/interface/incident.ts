import type { incidentState } from "../types/incidentState.js";
import type { priority } from "../types/priority.js";

export interface incident{

    readonly id:number;
    reported_By:string;
    title:string;
    description: string;
    state:incidentState;
    priority:priority;
    creation:Date;
    
}