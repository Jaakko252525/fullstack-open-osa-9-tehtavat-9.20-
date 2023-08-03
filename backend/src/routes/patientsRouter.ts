






/* eslint-disable @typescript-eslint/no-unsafe-assignment */






//import toNewPatientEntry from '../utils/utils';

import patientService from '../services/patientService';
// importing utility
//import toNewPatientEntry from '../utils/utils';

// using express
import express from 'express';

// express router
const router = express.Router();

// get reguest and router. For all diagnoses
router.get('', (_req, res) => {

    console.log('inside patients get', patientService.getNonSensitiveEntries());
    
    // data from module diagnoses
    res.send(patientService.getNonSensitiveEntries());
  
  });

// get reguest and router. For all diagnoses
router.get('/api/:id', (_req, res) => {

  // data from module diagnoses
  res.send(patientService.getOnePatient('d2773336-f723-11e9-8f0b-362b9e155667'));

});



// POST endpoint
router.post('/', (req, res) => {

  console.log('inside POST');

  try {

  // this commented code should check if correct datatype but it dont work
  /*
  // checks if solid input
  const newPatientEntry = toNewPatientEntry(req.body);

  // logging newPatientEntry
  console.log('logging newPatientEntry', newPatientEntry);

  console.log('object values', newPatientEntry.name, 'typeof', typeof newPatientEntry.name);
    
  */
 

  // interface
  interface RequestBody {
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: string;
    occupation: string;
  }

  // body     
  const { name, dateOfBirth, ssn, gender, occupation } = req.body as RequestBody;
   /* const object = {
      name: req.body.name,
      dateOfBirth: req.body.dateOfBirth,
      ssn: req.body.ssn,
      gender: req.body.gender,
      occupation_ 

    }*/

  // using patientService addPatient  
  const addedEntry = patientService.addPatients(
     name,
     dateOfBirth,
     ssn,
     gender,
     occupation 
    );

    console.log('Adding this:', addedEntry);
    
    
  res.json(addedEntry);

} catch (error: unknown) {
  let errorMessage = 'Something went wrong in POST.';
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  res.status(400).send(errorMessage);
}
});



export default router;



  