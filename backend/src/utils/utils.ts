




















import { PatientEntry } from '../types/patientTypes';



// string tester 
const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};


// func that tests if name eggsists and is string
const parseName = (name: unknown): string => {
  if (!name || !isString(name)) {
    throw new Error('Incorrect or missing name');
  }

  return name;
};


// main function
const toNewPatientEntry = (object: unknown): PatientEntry => {


    console.log('inside toNewPatientEntry', object);





  // interface
  interface RequestBody {
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: string;
    occupation: string;
  }




 // body     
 const { name, dateOfBirth, ssn, gender, occupation } = object.body as RequestBody;
   
    parseName(name);
    parseName(dateOfBirth);
    parseName(ssn);
    parseName(gender);
    parseName(occupation);



    const newEntry: PatientEntry = {
        name: name,
        dateOfBirth: dateOfBirth,
        ssn: ssn,
        gender: gender,
        occupation: occupation

    };

    return newEntry;
};

export default toNewPatientEntry;


