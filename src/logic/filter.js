import { apiGET } from "../hooks/methods"

//-----------------------------------------------------------------------------------------------------------|GET MAIN DATA|
export const MainDataVisitas = async() => {//--------------------------------------------------------|Visitas|
    const response = await apiGET('charts-web/visitas-main')
    return response
}
//--------------------------------------------------------------------------------------------|Visitas Reales|
export const DataVisitasRealizadas =  async() => {
    const response = await apiGET('charts-web/visitas-reales-main')
    const responseFilter = response.filter(res => res.VIS_REAL == 1 && res.VIS_CANCELADO == 0)
    return responseFilter
}
export const DataVisitasSeguimiento = async() => {//-------------------------------------|Seguimiento Visitas|
    const response = await apiGET('charts-web/visitas-resultados-main')
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

export const Clientes = async() => {//--------------------------------------------------------------|Clientes|
    const response = await apiGET('clientes')
    return response
}

export const ResultadosVisitas = async() => {//--------------------------------------------|ResultadosVisitas|
    const response = await apiGET('resultados')
    return response
}
export const Zonas = async() => {//--------------------------------------------------------------------|Zonas|
    const response = await apiGET('zonas')
    return response
}

//-----------------------------------------------------------------------------------------------------------|EXTRACCI??N|
//--------------------------------------------------------------------------------------------------|  DATA  |
//-----------------------------------------------------------------------------|Visitas Planificadas|
export const DataVisitasPlanificadas = (data) => {
    const responseFilter = data.filter(res => res.VIS_REAL == 0 && res.VIS_CANCELADO == 0)
    return responseFilter
}
//-------------------------------------------------------------------------------|Visitas Canceladas|
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
export const VisitasRealizadasAnual = (data,a??o) => {
    const currentDate = new Date();
    let responseFilter
    if(!a??o){
        responseFilter = data.filter(res => new Date(res.REA_FECHA).getFullYear() == new Date(currentDate).getFullYear())
    }else{
        responseFilter = data.filter(res => new Date(res.REA_FECHA).getFullYear() == a??o)
    }
    return responseFilter.length
}
//------------------------------------------------------------------------------------------|Mensual|
export const VisitasRealizadasMes = (data,mes,a??o) => {
    const currentDate = new Date();
    let responseFilter
    if(!mes && !a??o){
        responseFilter = data.filter(res => new Date(res.REA_FECHA).getMonth() == new Date(currentDate).getMonth() && new Date(res.REA_FECHA).getFullYear() == new Date(currentDate).getFullYear())
    }else{
        responseFilter = data.filter(res => new Date(res.REA_FECHA).getMonth() == mes && new Date(res.REA_FECHA).getFullYear() == a??o)
    }
    return responseFilter.length
}
//----------------------------------------------------------------------------------------------|Dia|
export const VisitasRealizadasDia = (data,dia,mes,a??o) => {
    const currentDate = new Date();
    let responseFilter
    if(!dia && !mes && !a??o){
        responseFilter = data.filter(res => new Date(res.REA_FECHA).getDate() == new Date(currentDate).getDate() && new Date(res.REA_FECHA).getMonth() == new Date(currentDate).getMonth() && new Date(res.REA_FECHA).getFullYear() == new Date(currentDate).getFullYear())
    }else{
        responseFilter = data.filter(res => new Date(res.REA_FECHA).getDate() == dia && new Date(res.REA_FECHA).getMonth() == mes && new Date(res.REA_FECHA).getFullYear() == a??o)
    }
    return responseFilter.length
}
