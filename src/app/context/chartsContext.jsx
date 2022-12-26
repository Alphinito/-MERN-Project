import React, { createContext, useState, useEffect, useContext} from "react"
import { MainDataVisitas,DataVisitasRealizadas,DataVisitasPlanificadas,DataVisitasCanceladas,Empleados,Equipos,Ciudades,Zonas } from "../../logic/filter"
import { MainContext } from "./mainContext"
import Cookies from "universal-cookie/cjs/Cookies"

export const ChartsContext = createContext()

export const ChartsProvider = ({children}) => {

    const cookies = new Cookies
    const rol = cookies.get('ROL',{})
    const {setLoading} = useContext(MainContext)

    //--------------------------------------------------------------------------------------------|CREACIÓN DE VAR PARA ENVIAR AL CONTEXTO
    const [basedDataContext,setBasedDataContext] = useState({})
    const [dataVisitas,setDataVisitas] = useState({})
    const [dataVisitasRealizadas,setDataVisitasRealizadas] = useState({})
    const [dataVisitasPlaneadas,setDataVisitasPlaneadas] = useState({})
    const [dataVisitasCanceladas,setDataVisitasCanceladas] = useState({})
    const [dataEmpleados,setDataEmpleados] = useState({})
    const [dataEquipos,setDataEquipos] = useState({})
    const [dataZonas,setDataZonas] = useState({})
    const [dataCiudades,setDataCiudades] = useState({})
    const [currentGroupFilter,setCurrentGroupFilter] = useState('0')
    const [busqueda,setBusqueda] = useState('')
    const [visitasAnual,setVisitasAnual] = useState(0)
    const [visitasMes,setVisitasMes] = useState(0)
    const [visitasDia,setVisitasDia] = useState(0)
    const [visitasHistorico,setVisitasHistorico] = useState(0)

    //--------------------------------------------------------------------------------------------|GET DATA Y FILTRADO SEGÚN ROL
    useEffect(()=>{
        async function  bridgueForDeclineError(){
            const visitas = await MainDataVisitas()
            const visitasReales = await DataVisitasRealizadas(visitas)
            console.log(`
            444444
            555
            666666
            777
            888`)
            console.log(visitasReales.length)
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
                    setDataVisitasRealizadas(visitasReales)
                    DataVisitasPlanificadas(visitasPlan)
                    DataVisitasCanceladas(visitasCanceladas)
                    setDataEmpleados(empleados.filter(res => res.EQU_LIDER == cookies.get('EMP_ID',{})))
                    setDataEquipos(equipos.filter(res => res.EQU_LIDER == cookies.get('EMP_ID',{})))
                    setDataZonas(zonas)
                    setDataCiudades(ciudades)
                    break;

                case 'VENTAS':
                    setDataVisitas(visitas.filter(res => res.EMP_ID == cookies.get('EMP_ID',{})))
                    setDataVisitasRealizadas(visitasReales)
                    DataVisitasPlanificadas(visitasPlan)
                    DataVisitasCanceladas(visitasCanceladas)
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
            basedDataContext,setBasedDataContext,
            dataVisitas,setDataVisitas,
            dataVisitasRealizadas,setDataVisitasRealizadas,
            dataVisitasPlaneadas,setDataVisitasPlaneadas,
            dataVisitasCanceladas,setDataVisitasCanceladas,
            dataEmpleados,setDataEmpleados,
            dataEquipos,setDataEquipos,
            dataZonas,setDataZonas,
            dataCiudades,setDataCiudades,
            busqueda,setBusqueda,
            currentGroupFilter,setCurrentGroupFilter,
            visitasHistorico,setVisitasHistorico,
            visitasAnual,setVisitasAnual,
            visitasMes,setVisitasMes,
            visitasDia,setVisitasDia
        }}>
            {children}
        </ChartsContext.Provider>
    )
}