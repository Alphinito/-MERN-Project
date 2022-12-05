import React from "react"
import NavOptions from "./navOptions"
import '../../../../public/styles/navegacion.scss'
import usPhoto from '../../../../assets/user.jpg'

const NavegacionLateral = (porps) => {
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
            <NavOptions text="Ver planificación"/>
            <NavOptions text="Actividad de grupo"/>
            <NavOptions text="Cumplimiento"/>
            <NavOptions text="Cancelaciones"/>
            <NavOptions text="Progreciones"/>
        </section>
    )
}

export default NavegacionLateral