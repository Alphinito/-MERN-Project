import React, { createContext, useState} from "react"

export const MainContext = createContext()

export const MainProvider = ({children}) => {

    const  [loading,setLoading] = useState(true)
    const  [view,setView] = useState('')
    const  [title,setTitle] = useState('Dashboard')
    const  [classVal,setClasVal] = useState('TitlePageCont')
    const  [showBackArrow, setShowBackArrow] = useState(false)


    return(
        <MainContext.Provider value={{
            loading,
            setLoading,
            view,
            setView,
            title,
            setTitle,
            classVal,
            setClasVal,
            showBackArrow,
            setShowBackArrow
        }}>
            {children}
        </MainContext.Provider>
    )
}