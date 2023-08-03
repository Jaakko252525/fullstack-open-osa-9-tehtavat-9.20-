










// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Entry {
}



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

