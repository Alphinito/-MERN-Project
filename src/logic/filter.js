import { apiGET } from "../hooks/methods"

//-----------------------------------------------------------------------------------------------------------|MAIN DATA|
export const VisitasRealizadas = async() => {//-------------------------------------------|Visitas Realizadas|
    const response = await apiGET('charts-web/num-visitas-reales-main')
    console.log(response)
    return response
}
export const Empleados = async() => {//------------------------------------------------------------|Empleados|
    const response = await apiGET('empleados')
    console.log(response)
    return response
}
export const Equipos = async() => {//----------------------------------------------------------------|Equipos|
    const response = await apiGET('equipos')
    console.log(response)
    return response
}
export const Ciudades = async() => {//--------------------------------------------------------------|Ciudades|
    const response = await apiGET('ciudades')
    console.log(response)
    return response
}
export const Zonas = async() => {//--------------------------------------------------------------------|Zonas|
    const response = await apiGET('zonas')
    console.log(response)
    return response
}


//-----------------------------------------------------------------------------------------------------------|EXTRACCIÓN|
export const VisitasRealizadasAnual = (data) => {
    const currentDate = new Date();
    const responseFilter = data.filter(res => new Date(res.REA_FECHA).getFullYear() == new Date(currentDate).getFullYear())
    return responseFilter.length
}
export const VisitasRealizadasMes = (data) => {
    const currentDate = new Date();
    const responseFilter = data.filter(res => new Date(res.REA_FECHA).getMonth() == new Date(currentDate).getMonth())
    return responseFilter.length
}
export const VisitasRealizadasDia = (data) => {
    const currentDate = new Date();
    const responseFilter = data.filter(res => new Date(res.REA_FECHA).getDay() == new Date(currentDate).getDay())
    return responseFilter.length
}
