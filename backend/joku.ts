









// diagnoses data
import diagnosesData from './src/data/diagnoses';


// type
import { DiagnoseEntry } from './src/types/diagnoseTypes';


const diagnoses: DiagnoseEntry[] = diagnosesData;


const getEntries = (): DiagnoseEntry[] => {
  return diagnoses;
};

const addDiagnose = () => {
  return null;
};

export default {
  getEntries,
  addDiagnose
};







