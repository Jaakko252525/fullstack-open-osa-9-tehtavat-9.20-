












// importing diagnosesService
import diagnoseServices from '../services/diagnoseService';


// using express
import express from 'express';

// express router
const router = express.Router();

// get reguest and router. For all diagnoses
router.get('', (_req, res) => {

    console.log('inside diagnoses get', 'putting getEntries..');
    
    // data from module diagnoses
    res.send(diagnoseServices.getEntries());
  
  });
  
//post req
router.post('', (req, res) => {

  console.log('inside post!')



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
      name: string,
      code: string,
      latin: string
    }
  
    // body     
    const { name, code, latin } = req.body as RequestBody;

  
    // using patientService addPatient  
    const addedEntry = diagnoseServices.addDiagnose(
       name,
       code,
       latin
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









  