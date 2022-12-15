import React, { createContext, useState} from "react"

export const ChartsContext = createContext()

export const ChartsProvider = ({children}) => {

    const [dataVisitas,setDataVisitas] = useState({})
    const [busqueda,setBusqueda] = useState('')
    const [visitasAnual,setVisitasAnual] = useState(0)
    const [visitasMes,setVisitasMes] = useState(0)
    const [visitasDia,setVisitasDia] = useState(0)

    return(
        <ChartsContext.Provider value={{
            dataVisitas,
            setDataVisitas,
            busqueda,
            setBusqueda,
            visitasAnual,
            setVisitasAnual,
            visitasMes,
            setVisitasMes,
            visitasDia,
            setVisitasDia
        }}>
            {children}
        </ChartsContext.Provider>
    )
}