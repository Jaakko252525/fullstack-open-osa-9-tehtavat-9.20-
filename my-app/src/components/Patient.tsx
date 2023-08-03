





// importinng api
import { getWithId } from '../services/services'

// useEffect and useState
import { useEffect, useState } from 'react'


interface st {
    idProp: string
}

interface PatientInterfface {

    dateOfBirth:string,
    entries:[],
    gender: string,
    id: string,
    name:string,
    occupation: string,
    ssn: string

}
const Patient = ({idProp}: st) => {

    // state
    const [patient, setPatient] = useState<PatientInterfface>({

        dateOfBirth: '2017-11-1',
        entries:[],
        gender: 'male',
        id:"d2773336-f723-11e9-8f0b-362b9sse155667",
        name: 'j',
        occupation: 'SE',
        ssn: '66666'
    }

    )

    // state for every value of the object
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [specialist, setSpecialist]= useState('')



    const fetchData = async () => {

        try {
          const response = await getWithId(idProp);

          setPatient(response)
          console.log('sss', response.entries[0].type)

          if (response.entries[0].id){
        
            setId(response.entries[0].id)
        }

          if (response.entries[0].type)
            setType(response.entries[0].type)
      
            if (response.entries[0].description){
            setDescription(response.entries[0].description)
            }
            if (response.entries[0].date){
            setDate(response.entries[0].date)
          }
          if (response.entries[0].specialist){
            setSpecialist(response.entries[0].specialist)
          }
        

        } catch (error) {
          console.log('Error fetching data:', error);
        }
    }
    
    

    //fetching patient data
    useEffect(() => {

    fetchData()

    },[])



    return (
        <><div>
            <h1>Patient</h1>
        </div>
        Name: {patient.name}
        Date of birth: {patient.dateOfBirth}
        Occupation: {patient.occupation}
        Gender: {patient.gender}
        <br/>
        Entries: Date {date} <br/>
                Type: {type} <br/>
                Description: {description} <br/>
                Specialist: {specialist}
        <div>
            </div></>
    )
}




export default Patient















