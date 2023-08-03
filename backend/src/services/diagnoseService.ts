









// importing diagnoseData
import diagnoseData from '../data/diagnoses';

// importing diagnoseEntry
import { DiagnoseEntry } from '../types/diagnoseTypes';

import diagnoseEntries from '../data/diagnoses';

const diagnoses: DiagnoseEntry[] = diagnoseData;

import patients from '../data/patients'

const getEntries = () => {
    return diagnoses;
};




// adding diagnose
export const addDiagnose = (name: string, code: string, latin: string): DiagnoseEntry => {





    const newDiagnoseEntry = {
        code,
        name,
        latin
    }

    diagnoseEntries.push(newDiagnoseEntry);
    
    const patient = patients.find(p => p.name === name)

    console.log('this is the patient', patient)

    return newDiagnoseEntry;
};




export default {
    getEntries,
    addDiagnose
};




