import React, { createContext, useState, useEffect, useContext} from "react"
import { MainDataVisitas,DataVisitasRealizadas,DataVisitasPlanificadas,DataVisitasCanceladas,Empleados,Equipos,Ciudades,Zonas } from "../../logic/filter"
import { MainContext } from "./mainContext"
import Cookies from "universal-cookie/cjs/Cookies"

export const ChartsContext = createContext()

export const ChartsProvider = ({children}) => {

    const cookies = new Cookies
    const rol = cookies.get('ROL',{})
    const {setLoading} = useContext(MainContext)
    const currentFecha = new Date()

    //--------------------------------------------------------------------------------------------|CREACIÓN DE VAR PARA ENVIAR AL CONTEXTO
    //data
    const [basedDataContext,setBasedDataContext] = useState({})
    const [dataVisitas,setDataVisitas] = useState({})
    const [dataVisitasRealizadas,setDataVisitasRealizadas] = useState({})
    const [dataVisitasPlaneadas,setDataVisitasPlaneadas] = useState({})
    const [dataVisitasCanceladas,setDataVisitasCanceladas] = useState({})
    const [dataEmpleados,setDataEmpleados] = useState({})
    const [dataEquipos,setDataEquipos] = useState({})
    const [dataZonas,setDataZonas] = useState({})
    const [dataCiudades,setDataCiudades] = useState({})
    //filter
    const [currentGroupFilter,setCurrentGroupFilter] = useState('0')
    const [busqueda,setBusqueda] = useState('')
    const [currentDayFilter, setCurrentDayFilter] = useState(currentFecha.getDate())
    const [currentMonthFilter, setCurrentMonthFilter] = useState(currentFecha.getMonth())
    const [currentYearFilter, setCurrentYearFilter] = useState(currentFecha.getFullYear())
    //results
    const [visitasAnual,setVisitasAnual] = useState(0)
    const [visitasMes,setVisitasMes] = useState(0)
    const [visitasDia,setVisitasDia] = useState(0)
    const [visitasHistorico,setVisitasHistorico] = useState(0)

    //--------------------------------------------------------------------------------------------|GET DATA Y FILTRADO SEGÚN ROL
    useEffect(()=>{
        async function  bridgueForDeclineError(){
            const visitas = await MainDataVisitas()
            const visitasReales = await DataVisitasRealizadas()
            const visitasPlan = await DataVisitasPlanificadas(visitas)
            const visitasCanceladas = await DataVisitasCanceladas(visitas)
            const empleados = await Empleados()
            const equipos = await Equipos()
            const zonas = await Zonas()
            const ciudades = await Ciudades()

            switch (rol) {
                case 'ADMIN':
                    setDataVisitas(visitas)
                    setDataVisitasRealizadas(visitasReales)
                    DataVisitasPlanificadas(visitasPlan)
                    DataVisitasCanceladas(visitasCanceladas)
                    setDataEmpleados(empleados)
                    setDataEquipos(equipos)
                    setDataZonas(zonas)
                    setDataCiudades(ciudades)
                    break;

                case 'MERCADEO':
                    setDataVisitas(visitas)
                    setDataVisitasRealizadas(visitasReales)
                    DataVisitasPlanificadas(visitasPlan)
                    DataVisitasCanceladas(visitasCanceladas)
                    setDataEmpleados(empleados)
                    setDataEquipos(equipos)
                    setDataZonas(zonas)
                    setDataCiudades(ciudades)
                    break;

                case 'LIDER':
                    setDataVisitas(visitas.filter(res => res.EQU_LIDER == cookies.get('EMP_ID',{})))
                    setDataVisitasRealizadas(visitasReales.filter(res => res.EQU_LIDER == cookies.get('EMP_ID',{})))
                    DataVisitasPlanificadas(visitasPlan.filter(res => res.EQU_LIDER == cookies.get('EMP_ID',{})))
                    DataVisitasCanceladas(visitasCanceladas.filter(res => res.EQU_LIDER == cookies.get('EMP_ID',{})))
                    setDataEmpleados(empleados.filter(res => res.EQU_LIDER == cookies.get('EMP_ID',{})))
                    setDataEquipos(equipos.filter(res => res.EQU_LIDER == cookies.get('EMP_ID',{})))
                    setDataZonas(zonas)
                    setDataCiudades(ciudades)
                    break;

                case 'VENTAS':
                    setDataVisitas(visitas.filter(res => res.EMP_ID == cookies.get('EMP_ID',{})))
                    setDataVisitasRealizadas(visitasReales.filter(res => res.EMP_ID == cookies.get('EMP_ID',{})))
                    DataVisitasPlanificadas(visitasPlan.filter(res => res.EMP_ID == cookies.get('EMP_ID',{})))
                    DataVisitasCanceladas(visitasCanceladas.filter(res => res.EMP_ID == cookies.get('EMP_ID',{})))
                    break;
                default:
                    break;
            }
            setLoading(false)
        }
        bridgueForDeclineError()
    },[])

    return(
        <ChartsContext.Provider value={{
            //data
            basedDataContext,setBasedDataContext,
            dataVisitas,setDataVisitas,
            dataVisitasRealizadas,setDataVisitasRealizadas,
            dataVisitasPlaneadas,setDataVisitasPlaneadas,
            dataVisitasCanceladas,setDataVisitasCanceladas,
            dataEmpleados,setDataEmpleados,
            dataEquipos,setDataEquipos,
            dataZonas,setDataZonas,
            dataCiudades,setDataCiudades,
            //filter
            busqueda,setBusqueda,
            currentGroupFilter,setCurrentGroupFilter,
            currentDayFilter, setCurrentDayFilter,
            currentMonthFilter, setCurrentMonthFilter,
            currentYearFilter, setCurrentYearFilter,
            //results
            visitasHistorico,setVisitasHistorico,
            visitasAnual,setVisitasAnual,
            visitasMes,setVisitasMes,
            visitasDia,setVisitasDia
        }}>
            {children}
        </ChartsContext.Provider>
    )
}