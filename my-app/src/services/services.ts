
















import axios from "axios"


const baseUrl = 'http://localhost:3003/api/'


export const getWithId = async (id:string) => {

    const response = await axios.get(baseUrl + id)
    return response.data
}


































