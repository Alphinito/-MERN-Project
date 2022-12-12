import React, {useContext} from "react"
import img from '../../../assets/turn-back.png';
import { MainContext } from "../context/mainContext";

const BackArrow = (props) => {

    const {view,setView,title,setTitle,classVal,setClasVal} = useContext(MainContext)

    const handleClick = ()=>{

        setClasVal('TitlePageCont')
        setView('')
        setTitle('Dashboard')

    }
        

    return (
        <img src={img} alt="Back Arrow" className="BackArrow" onClick={handleClick}/>
    )
}

export default BackArrow