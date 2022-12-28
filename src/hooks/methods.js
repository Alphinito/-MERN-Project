import axios from "axios"
const apiHost = '//192.168.0.45:9000/'

//---------------------------------------------------------------------------------------|GET
export const apiGET = async(apiLink)=>{
    const response = await axios(apiHost+apiLink)
    return response.data
}

//---------------------------------------------------------------------------------------|SET
export const apiPOST = async(link, data)=>{
    await axios.post(apiHost+link,data)
    .then(response => {
        console.log('post success');
        console.log(response)
    })
    .catch(error => {
        console.log('Oh No! Error!');  
        console.log(error)
    })
}

//---------------------------------------------------------------------------------------|PUT
export const apiPUT = async(link, data)=>{
    const response = await axios.put(apiHost+link, data)
    .then(response => {
      console.log("Update SUCCESS!")
    })
    .catch(error => {
      console.log(error)
    })
    return response.data
}