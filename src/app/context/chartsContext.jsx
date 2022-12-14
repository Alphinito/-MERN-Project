import React, { createContext, useState} from "react"

export const ChartsContext = createContext()

export const ChartsProvider = ({children}) => {

    const [visitasMes,setVisitasMes] = useState(0)

    return(
        <ChartsContext.Provider value={{
            visitasMes,
            setVisitasMes,
        }}>
            {children}
        </ChartsContext.Provider>
    )
}