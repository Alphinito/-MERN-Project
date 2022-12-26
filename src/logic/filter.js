import { apiGET } from "../hooks/methods"

//-----------------------------------------------------------------------------------------------------------|MAIN DATA|
export const MainDataVisitas = async() => {//--------------------------------------------------------|Visitas|
    const response = await apiGET('charts-web/visitas-main')
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
//------------------------------------------------------------------------------------------------------|DATA|
//---------------------------------------------------------------------------------------|Visitas Reales|
export const DataVisitasRealizadas = (data) => {
    const responseFilter = data.filter(res => res.VIS_REAL == 1 && res.VIS_CANCELADO == 0)
    return responseFilter
}
//---------------------------------------------------------------------------------|Visitas Planificadas|
export const DataVisitasPlanificadas = (data) => {
    const responseFilter = data.filter(res => res.VIS_REAL == 0 && res.VIS_CANCELADO == 0)
    return responseFilter
}
//-----------------------------------------------------------------------------------|Visitas Canceladas|
export const DataVisitasCanceladas = (data) => {
    const responseFilter = data.filter(res => res.VIS_CANCELADO == 1)
    return responseFilter
}
//--------------------------------------------------------------------------------------------------|CANTIDAD|
//---------------------------------------------------------------------------------------------|Main|
export const VisitasRealizadasMAIN = (data) => {
    return data.length
}
//--------------------------------------------------------------------------------------------|Anual|
export const VisitasRealizadasAnual = (data) => {
    const currentDate = new Date();
    const responseFilter = data.filter(res => new Date(res.REA_FECHA).getFullYear() == new Date(currentDate).getFullYear())
    return responseFilter.length
}
//------------------------------------------------------------------------------------------|Mensual|
export const VisitasRealizadasMes = (data) => {
    const currentDate = new Date();
    const  responseFilter = data.filter(res => new Date(res.REA_FECHA).getMonth() == new Date(currentDate).getMonth())
    return responseFilter.length
}
//----------------------------------------------------------------------------------------------|Dia|
export const VisitasRealizadasDia = (data) => {
    const currentDate = new Date();
    const responseFilter = data.filter(res => new Date(res.REA_FECHA).getDate() == new Date(currentDate).getDate() && new Date(res.REA_FECHA).getMonth() == new Date(currentDate).getMonth())
    return responseFilter.length
}
