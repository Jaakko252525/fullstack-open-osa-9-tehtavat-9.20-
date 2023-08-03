



// enum
export enum HealthCheckRating {
  "Healthy" = 0,
  "LowRisk" = 1,
  "HighRisk" = 2,
  "CriticalRisk" = 3
}

interface HealthCheckEntry extends BaseEntry {
  type: "HealthCheck";
  healthCheckRating: HealthCheckRating;
}

// occu
interface OccupationalHealthcareEvent {
  id?: string;
  date?: string;
  type?: 'OccupationalHealthcare';
  specialist: string;
  employerName: string;
  diagnosisCodes: string[];
  description: string;
  sickLeave: {
    startDate: string;
    endDate: string;
  };
}

interface DiagnosisEvent {
  id?: string;
  date?: string;
  type?: string;
  specialist: string;
  diagnosisCodes: string[];
  description: string;
}





export interface DiagnoseEntry {
    "code"?: string;
    "name"?: string;
    "latin"?: string;

  }





interface BaseEntry {
  id?: string;
  description: string;
  date: string;
  specialist: string;
  diagnosisCodes?: Array<DiagnoseEntry['code']>;
}
// OccupationalHealthcareEntry


// som entry
export type Entry = 
  | BaseEntry
  | OccupationalHealthcareEvent
  | HealthCheckEntry





