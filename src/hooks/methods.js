import axios from "axios"


export const apiGET = async(apiLink)=>{
    const response = await axios('//localhost:9000/'+apiLink)
    return response.data
}