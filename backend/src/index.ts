










// importing routers
import diagnosesRouter from './routes/diagnosesRoute';
//importing patientRouter
import patientRouter from './routes/patientsRouter';



// importing express
import express from 'express';

// cors
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
import cors from 'cors';

// making app
const app = express();
app.use(express.json());

//cors accept all
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors({
    origin: '*'
}));

// port
const PORT = 3003;

// get req for testing ping
app.get('/api/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('', patientRouter);


// using diagnose router
app.use('/api/diagnoses', diagnosesRouter);

// using patient router
//app.use('/api/patient', getEntries);

// using patient POST
//app.use('/api/post', addPatients);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});























