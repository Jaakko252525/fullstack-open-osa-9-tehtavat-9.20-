









// importing diagnoseData
import diagnoseData from '../data/diagnoses';

// importing diagnoseEntry
import { DiagnoseEntry } from '../types/diagnoseTypes';


const diagnoses: DiagnoseEntry[] = diagnoseData;



const getEntries = () => {
    return diagnoses;
};


const addDiagnose = () => {
    return null;
};




export default {
    getEntries,
    addDiagnose
};




