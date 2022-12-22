import React, { createContext, useState, useEffect, useContext} from "react"
import { VisitasRealizadas,Empleados,Equipos,Ciudades,Zonas } from "../../logic/filter"
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
            const visitas = await VisitasRealizadas()
            const empleados = await Empleados()
            const equipos = await Equipos()
            const zonas = await Zonas()
            const ciudades = await Ciudades()

            switch (rol) {
                case 'ADMIN':
                    setDataVisitas(visitas)
                    setDataEmpleados(empleados)
                    setDataEquipos(equipos)
                    setDataZonas(zonas)
                    setDataCiudades(ciudades)
                    break;

                case 'MERCADEO':
                    setDataVisitas(visitas)
                    setDataEmpleados(empleados)
                    setDataEquipos(equipos)
                    setDataZonas(zonas)
                    setDataCiudades(ciudades)
                    break;

                case 'LIDER':
                    setDataVisitas(visitas.filter(res => res.EQU_LIDER == cookies.get('EMP_ID',{})))
                    setDataEmpleados(empleados.filter(res => res.EQU_LIDER == cookies.get('EMP_ID',{})))
                    setDataEquipos(equipos.filter(res => res.EQU_LIDER == cookies.get('EMP_ID',{})))
                    setDataZonas(zonas)
                    setDataCiudades(ciudades)
                    break;

                case 'VENTAS':
                    setDataVisitas(visitas.filter(res => res.EMP_ID == cookies.get('EMP_ID',{})))
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