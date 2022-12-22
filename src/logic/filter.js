import { apiGET } from "../hooks/methods"
import Cookies from "universal-cookie/cjs/Cookies"

const cookies = new Cookies
const rol = cookies.get('ROL',{})
//-----------------------------------------------------------------------------------------------------------|MAIN DATA|
export const VisitasRealizadas = async() => {//-------------------------------------------|Visitas Realizadas|
    const response = await apiGET('charts-web/num-visitas-reales-main')
    return response
}
export const Empleados = async() => {//------------------------------------------------------------|Empleados|
    const response = await apiGET('empleados')
    return response
}
export const Equipos = async() => {//----------------------------------------------------------------|Equipos|
    const response = await apiGET('equipos')
    return response
}
export const Ciudades = async() => {//--------------------------------------------------------------|Ciudades|
    const response = await apiGET('ciudades')
    return response
}
export const Zonas = async() => {//--------------------------------------------------------------------|Zonas|
    const response = await apiGET('zonas')
    return response
}

//-----------------------------------------------------------------------------------------------------------|EXTRACCIÓN|
//------------------------------------------------------------------------------------------------------|MAIN|
export const VisitasRealizadasMAIN = (data) => {
    return data.length
}
//-----------------------------------------------------------------------------------------------------|ANUAL|
export const VisitasRealizadasAnual = (data) => {
    const currentDate = new Date();
    const responseFilter = data.filter(res => new Date(res.REA_FECHA).getFullYear() == new Date(currentDate).getFullYear())
    return responseFilter.length
}
//---------------------------------------------------------------------------------------------------|MENSUAL|
export const VisitasRealizadasMes = (data) => {
    const currentDate = new Date();
    const  responseFilter = data.filter(res => new Date(res.REA_FECHA).getMonth() == new Date(currentDate).getMonth())
    return responseFilter.length
}
//-------------------------------------------------------------------------------------------------------|DIA|
export const VisitasRealizadasDia = (data) => {
    const currentDate = new Date();
    const responseFilter = data.filter(res => new Date(res.REA_FECHA).getDate() == new Date(currentDate).getDate() && new Date(res.REA_FECHA).getMonth() == new Date(currentDate).getMonth())
    return responseFilter.length
}
