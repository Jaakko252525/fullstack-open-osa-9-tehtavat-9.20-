












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
  


export default router;









  