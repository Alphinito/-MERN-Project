import React, {useContext} from "react"
import NavOptions from "./navOptions"
import '../../../../public/styles/navegacion.scss'
import usPhoto from '../../../../assets/user.jpg'
import { MainContext } from "../../context/mainContext"

const NavegacionLateral = (porps) => {

    const {view,setView,title,setTitle,classVal,setClasVal} = useContext(MainContext)

    const handleClick = (navOption)=>{
        setClasVal('TitlePageContCenter')
        switch (navOption) {
            case 1:
                setView('Chart1')
                setTitle('Gestión de usuarios')
                break;

            case 2:
                setView('Chart2')
                setTitle('Clientes con menor actividad')
                break;

            case 3:
                setView('Chart3')
                setTitle('Clientes con mayor actividad')
                break;

            case 4:
                setView('Chart4')
                setTitle('Porcentaje de planificación')
                break;
        
            default:
                setClasVal('TitlePageCont')
                setView('')
                setTitle('Dashboard')
                break;
        }
        
    }

    return (
        <section className="navLateral">
            <div className="contPorfile">
                <img src={usPhoto} alt="Porfilephoto" />
                <div className="userInfo">
                    <p>{porps.usNombre}</p>
                    <i>{porps.usInfo}</i>  
                </div>
            </div>
            <p className="IndicText">Operaciones</p>
            <NavOptions text="Dashboard" clickFunction={()=>{handleClick(0)}}/>
            <NavOptions text="Gestionar usuarios" clickFunction={()=>{handleClick(1)}}/>
            <NavOptions text="Cumplimiento" clickFunction={()=>{handleClick(2)}}/>
            <NavOptions text="Cancelaciones" clickFunction={()=>{handleClick(3)}}/>
            <NavOptions text="Progreciones" clickFunction={()=>{handleClick(4)}}/>
        </section>
    )
}

export default NavegacionLateral