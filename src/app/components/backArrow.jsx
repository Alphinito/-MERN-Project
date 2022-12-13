import React, {useContext} from "react"
import img from '../../../assets/turn-back.png';
import { MainContext } from "../context/mainContext";

const BackArrow = () => {

    const {view,setView,title,setTitle,classVal,setClasVal,setShowBackArrow} = useContext(MainContext)

    const handleClick = ()=>{

        setShowBackArrow(false)
        setClasVal('TitlePageCont')
        setView('')
        setTitle('Dashboard')

    }
        

    return (
        <img src={img} alt="Back Arrow" className="BackArrow" onClick={handleClick}/>
    )
}

export default BackArrow