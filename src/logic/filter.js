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
export const VisitasRealizadasMAIN = (data) => {
    let responseFilter = {}
    switch (rol) {
        case 'ADMIN':
            responseFilter = data
            break;

        case 'MERCADEO':
            responseFilter = data
            break;

        case 'LIDER':
            responseFilter = data.filter(res => res.EMP_EQUIPO == cookies.get('EMP_EQUIPO',{}))
            break;

        case 'VENTAS':
            responseFilter = data.filter(res => res.EMP_ID == cookies.get('EMP_ID',{}))
            break;
    }
    return responseFilter.length
}
export const VisitasRealizadasAnual = (data) => {
    const currentDate = new Date();
    let responseFilter = {}
    switch (rol) {
        case 'ADMIN':
            responseFilter = data.filter(res => new Date(res.REA_FECHA).getFullYear() == new Date(currentDate).getFullYear())
            break;

        case 'MERCADEO':
            responseFilter = data.filter(res => new Date(res.REA_FECHA).getFullYear() == new Date(currentDate).getFullYear())
            break;

        case 'LIDER':
            responseFilter = data.filter(res => new Date(res.REA_FECHA).getFullYear() == new Date(currentDate).getFullYear() && res.EMP_EQUIPO == cookies.get('EMP_EQUIPO',{}))
            break;

        case 'VENTAS':
            responseFilter = data.filter(res => new Date(res.REA_FECHA).getFullYear() == new Date(currentDate).getFullYear() && res.EMP_ID == cookies.get('EMP_ID',{}))
            break;
    }
    return responseFilter.length
}

export const VisitasRealizadasMes = (data) => {
    const currentDate = new Date();
    let responseFilter = {}
    switch (rol) {
        case 'ADMIN':
            responseFilter = data.filter(res => new Date(res.REA_FECHA).getMonth() == new Date(currentDate).getMonth())
            break;

        case 'MERCADEO':
            responseFilter = data.filter(res => new Date(res.REA_FECHA).getMonth() == new Date(currentDate).getMonth())
            break;

        case 'LIDER':
            responseFilter = data.filter(res => new Date(res.REA_FECHA).getMonth() == new Date(currentDate).getMonth() && res.EMP_EQUIPO == cookies.get('EMP_EQUIPO',{}))
            break;

        case 'VENTAS':
            responseFilter = data.filter(res => new Date(res.REA_FECHA).getMonth() == new Date(currentDate).getMonth() && res.EMP_ID == cookies.get('EMP_ID',{}))
            break;
    }
    return responseFilter.length
}

export const VisitasRealizadasDia = (data) => {
    const currentDate = new Date();
    let responseFilter = {}
    switch (rol) {
        case 'ADMIN':
            responseFilter = data.filter(res => new Date(res.REA_FECHA).getDate() == new Date(currentDate).getDate() && new Date(res.REA_FECHA).getMonth() == new Date(currentDate).getMonth())
            break;

        case 'MERCADEO':
            responseFilter = data.filter(res => new Date(res.REA_FECHA).getDate() == new Date(currentDate).getDate() && new Date(res.REA_FECHA).getMonth() == new Date(currentDate).getMonth())
            break;

        case 'LIDER':
            responseFilter = data.filter(res =>  new Date(res.REA_FECHA).getDate() == new Date(currentDate).getDate() && new Date(res.REA_FECHA).getMonth() == new Date(currentDate).getMonth() && res.EMP_EQUIPO == cookies.get('EMP_EQUIPO',{}))
            break;

        case 'VENTAS':
            responseFilter = data.filter(res => new Date(res.REA_FECHA).getDate() == new Date(currentDate).getDate() && new Date(res.REA_FECHA).getMonth() == new Date(currentDate).getMonth() && res.EMP_ID == cookies.get('EMP_ID',{}))
            break;
    }
    return responseFilter.length
}
