import { apiGET } from "../hooks/methods"


export const VisitasRealizadas = async() => {
    const response = await apiGET('charts-web/num-visitas-reales-main')
    console.log(response)
    return response
}

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
