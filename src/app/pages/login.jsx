import React from "react"
import SingleLayout from '../containers/SingleLayout.jsx'
import CompLogo from "../components/login/logo.jsx"
import MainLoginLayout from "../containers/MainLoginLayout.jsx"
import CompFormularioLogin from "../components/login/formulario.jsx"
import { ValSesionActual } from "../../logic/login.js"

const Login = () => {

    ValSesionActual('login')
    
    return (
        <MainLoginLayout>
            <SingleLayout color="#F9F9F9" colorBorder="#eeeeee">
                <CompLogo/>
            </SingleLayout>
            <SingleLayout>
                <CompFormularioLogin/>
            </SingleLayout>
        </MainLoginLayout>
    )
}

export default Login
