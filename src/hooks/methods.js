import axios from "axios"


export const apiGET = async(apiLink)=>{
    const response = await axios('//192.168.0.45:9000/'+apiLink)
    return response.data
}