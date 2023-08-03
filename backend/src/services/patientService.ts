









import { v1 as uuid } from 'uuid';





// importing patientData
import patients from '../data/patients';

// importing patientEntry
import { NonSensitiveDiaryEntry, PatientEntry } from '../types/patientTypes';




// get request for one patient
// services/patientService.ts
export const getOnePatient = (id: string): PatientEntry | undefined => {
    // Find patient with the given id
    const patient = patients.find(p => p.id === id);
    console.log('entryyyyyy', patient?.entries); // `patient` will be an object or undefined, so accessing `.entries` should work correctly.
    return patient;
};



const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {

    


    let count = 0;
    const newArray = [];

    while (count < patients.length) {

        const object = {
            id: patients[count].id,
            name: patients[count].name,
            dateOfBirth: patients[count].dateOfBirth,
            gender: patients[count].gender,
            occupation: patients[count].occupation,
            entries: patients[count].entries
        };
        count += 1;

        newArray.push(object);
    }

    return newArray;
  };



// adding patiens
export const addPatients = (name: string, dateOfBirth: string, ssn: string, gender: string, occupation: string): PatientEntry => {


    const newPatientEntry = {
        id: uuid(),
        name,
        dateOfBirth,
        ssn,
        gender,
        occupation
    };

    patients.push(newPatientEntry);

    return newPatientEntry;
};




export default {
    getNonSensitiveEntries,
    addPatients,
    getOnePatient
};




