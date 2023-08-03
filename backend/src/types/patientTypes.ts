








//importing shit
import { Entry } from "./diagnoseTypes";

// eslint-disable-next-line @typescript-eslint/no-empty-interface




export interface PatientEntry {
    "id"?: string,
    "name"?: string,
    "dateOfBirth"?: string,
    "ssn"?: string,
    "gender"?: string,
    "occupation"?: string,
    "entries"?: Entry[]

  }
 

export type NonSensitiveDiaryEntry = Omit<PatientEntry, 'ssn'>;

