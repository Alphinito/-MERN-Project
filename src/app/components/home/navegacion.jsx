import React, {useContext} from "react"
import NavOptions from "./navOptions"
import '../../../../public/styles/navegacion.scss'
import usPhoto from '../../../../assets/user.jpg'
import { MainContext } from "../../context/mainContext"
import Cookies from "universal-cookie"
import IconDashboard from "../../../../assets/dashboard.png"
import IconGestionUsuarios from "../../../../assets/gestion-usuarios.png"
import IconClientes from "../../../../assets/cliente.png"
import IconEquipos from "../../../../assets/group.png"
import IconZonas from "../../../../assets/zone.png"
import IconPlanificar from "../../../../assets/plan.png"
import IconRegistrar from "../../../../assets/registro.png"
import IconSeguimiento from "../../../../assets/ojo.png"
const cookies = new Cookies();

const NavegacionLateral = (porps) => {

    const {setShowOptions,view,setView,title,setTitle,classVal,setClasVal,setShowBackArrow} = useContext(MainContext)

    const handleClick = (navOption)=>{
        setClasVal('TitlePageCont')
        setShowBackArrow(false)
        switch (navOption) {
            case 1://---------------------------------|Gestionar usuarios
                setView('Chart1')
                setTitle('Gestión de usuarios')
                break;

            case 2://---------------------------------|Gestionar clientes
                setView('Chart2')
                setTitle('Gestión de clientes')
                break;

            case 3://---------------------------------|Gestionar equipos
                setView('Chart3')
                setTitle('Gestión de equipos')
                break;

            case 4://---------------------------------|Gestionar zonas
                setView('Chart4')
                setTitle('Gestión de zonas')
                break;

            case 5://---------------------------------|Planificación
                setView('Chart6')
                setTitle('Planificación de visitas')
                break;

            case 6://---------------------------------|Registro visitas
                setView('Chart3')
                setTitle('Registro de visitas realizadas')
                break;

            case 7://---------------------------------|Seguimiento a visitas
                setView('Chart4')
                setTitle('Seguimiento a visitas')
                break;

            case 8://---------------------------------|Perfil || Cuenta
                setView('Perfil')
                setTitle('Mi perfil')
                break;
        
            default://---------------------------------|Dashboard
                setShowOptions(true)
                setClasVal('TitlePageCont')
                setView('')
                setTitle('Dashboard')
                break;
        }
    }

    return (
        <section className="navLateral">
            
            <div className="contPorfile" onClick={()=>{handleClick(8)}}>
                <img src={usPhoto} alt="Porfilephoto" />
                <div className="userInfo">
                    <p>{porps.usNombre}</p>
                    <i>{porps.usInfo}</i>  
                </div>
            </div>

            <NavOptions text="Dashboard" Icon={IconDashboard} clickFunction={()=>{handleClick(0)}}/>

            <p className="IndicText">Operaciones</p>
            {
                cookies.get('ROL',{}) == 'ADMIN' //ADMINS
                ?
                    <>
                    <NavOptions text="Usuarios" Icon={IconGestionUsuarios} clickFunction={()=>{handleClick(1)}}/>
                    <NavOptions text="Clientes" Icon={IconClientes} clickFunction={()=>{handleClick(2)}}/>
                    <NavOptions text="Euipos" Icon={IconEquipos} clickFunction={()=>{handleClick(3)}}/>
                    <NavOptions text="Zonas" Icon={IconZonas} clickFunction={()=>{handleClick(4)}}/>
                    </>
                :cookies.get('ROL',{}) == 'MERCADEO' //MERCADEO
                    ?
                        <>
                        <NavOptions text="Clientes" Icon={IconClientes} clickFunction={()=>{handleClick(2)}}/>
                        <NavOptions text="Euipos" Icon={IconEquipos} clickFunction={()=>{handleClick(3)}}/>
                        <NavOptions text="Zonas" Icon={IconZonas} clickFunction={()=>{handleClick(4)}}/>
                        </>
                    :cookies.get('ROL',{}) == 'LIDER' //VENTAS
                        ?
                            //AQUÍ MISMO VALIDAR SI ES LIDER Y AÑADIR OPCIONES
                            <>
                            <NavOptions text="Planificar" Icon={IconPlanificar} clickFunction={()=>{handleClick(5)}}/>
                            <NavOptions text="Registrar" Icon={IconRegistrar} clickFunction={()=>{handleClick(6)}}/>
                            <NavOptions text="Seguimiento" Icon={IconSeguimiento} clickFunction={()=>{handleClick(7)}}/>
                        </>
                        :cookies.get('ROL',{}) == 'VENTAS' //VENTAS
                            ?
                                //AQUÍ MISMO VALIDAR SI ES LIDER Y AÑADIR OPCIONES
                                <>
                                <NavOptions text="Planificar" Icon={IconPlanificar} clickFunction={()=>{handleClick(5)}}/>
                                <NavOptions text="Registrar" Icon={IconRegistrar} clickFunction={()=>{handleClick(6)}}/>
                                <NavOptions text="Seguimiento" Icon={IconSeguimiento} clickFunction={()=>{handleClick(7)}}/>
                                </>
                            :null

            }
        </section>
    )
}

export default NavegacionLateral