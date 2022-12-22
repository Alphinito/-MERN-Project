import React, {useContext} from "react"
import NavOptions from "./navOptions"
import '../../../../public/styles/navegacion.scss'
import usPhoto from '../../../../assets/user.jpg'
import { MainContext } from "../../context/mainContext"
import Cookies from "universal-cookie"
const cookies = new Cookies();

const NavegacionLateral = (porps) => {

    const {view,setView,title,setTitle,classVal,setClasVal,setShowBackArrow} = useContext(MainContext)

    const handleClick = (navOption)=>{
        setClasVal('TitlePageCont')
        setShowBackArrow(false)
        switch (navOption) {
            case 1:
                setView('Chart1')
                setTitle('Gestión de usuarios')
                break;

            case 2:
                setView('Chart2')
                setTitle('Gestión de clientes')
                break;

            case 3:
                setView('Chart3')
                setTitle('Gestión de equipos')
                break;

            case 4:
                setView('Chart4')
                setTitle('Gestión de zonas')
                break;

            case 5:
                setView('Chart2')
                setTitle('Planificación de visitas')
                break;

            case 6:
                setView('Chart3')
                setTitle('Registro de visitas realizadas')
                break;

            case 7:
                setView('Chart4')
                setTitle('Seguimiento a visitas')
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
            {
                cookies.get('ROL',{}) == 'ADMIN' //ADMINS
                ?
                    <>
                    <NavOptions text="Gestionar usuarios" clickFunction={()=>{handleClick(1)}}/>
                    <NavOptions text="Clientes" clickFunction={()=>{handleClick(2)}}/>
                    <NavOptions text="Euipos" clickFunction={()=>{handleClick(3)}}/>
                    <NavOptions text="Zonas" clickFunction={()=>{handleClick(4)}}/>
                    </>
                :cookies.get('ROL',{}) == 'MERCADEO' //MERCADEO
                    ?
                        <>
                        <NavOptions text="Clientes" clickFunction={()=>{handleClick(2)}}/>
                        <NavOptions text="Euipos" clickFunction={()=>{handleClick(3)}}/>
                        <NavOptions text="Zonas" clickFunction={()=>{handleClick(4)}}/>
                        </>
                    :cookies.get('ROL',{}) == 'LIDER' //VENTAS
                        ?
                            //AQUÍ MISMO VALIDAR SI ES LIDER Y AÑADIR OPCIONES
                            <>
                            <NavOptions text="Planificar" clickFunction={()=>{handleClick(5)}}/>
                            <NavOptions text="Registrar" clickFunction={()=>{handleClick(6)}}/>
                            <NavOptions text="Seguimiento" clickFunction={()=>{handleClick(7)}}/>
                        </>
                        :cookies.get('ROL',{}) == 'VENTAS' //VENTAS
                            ?
                                //AQUÍ MISMO VALIDAR SI ES LIDER Y AÑADIR OPCIONES
                                <>
                                <NavOptions text="Planificar" clickFunction={()=>{handleClick(5)}}/>
                                <NavOptions text="Registrar" clickFunction={()=>{handleClick(6)}}/>
                                <NavOptions text="Seguimiento" clickFunction={()=>{handleClick(7)}}/>
                                </>
                            :null

            }
        </section>
    )
}

export default NavegacionLateral