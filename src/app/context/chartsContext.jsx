import React, { createContext, useState} from "react"

export const ChartsContext = createContext()

export const ChartsProvider = ({children}) => {

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