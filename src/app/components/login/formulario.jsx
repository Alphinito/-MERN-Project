import React from "react"
import '../../../../public/styles/login.scss'
import CompButton1 from "../Button1.jsx"

const CompFormularioLogin = () => {
    return (
        <div className="der_cont_login">
            <h3 className="Title">Login</h3>
            <input type="text" placeholder="Clave"/>
            <input type="text" placeholder="Usuario"/>
            <CompButton1 text="Ingresar"/>
        </div>
    )
}

export default CompFormularioLogin