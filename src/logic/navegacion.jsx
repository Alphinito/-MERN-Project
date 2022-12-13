import {useContext} from "react"
import { MainContext } from "../app/context/mainContext"

export const BackToDashBoard = () => {

    const {view,setView,title,setTitle,classVal,setClasVal,setShowBackArrow} = useContext(MainContext)

    setShowBackArrow(false)
    setClasVal('TitlePageCont')
    setView('')
    setTitle('Dashboard')
    
}