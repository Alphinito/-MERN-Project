import React from "react"
import img from '../../../assets/log-out.png';
import Cookies from "universal-cookie"
const cookies = new Cookies();

const LogOutButton = () => {

    const closeSesion = () => {
        cookies.remove('EMP_ID', {path: "/"})
        cookies.remove('EMP_CARGO', {path: "/"})
        cookies.remove('EMP_CEDULA', {path: "/"})
        cookies.remove('EMP_NOMBRE', {path: "/"})
        cookies.remove('EMP_APELLIDO', {path: "/"})
        cookies.remove('EMP_CORREO', {path: "/"})
        cookies.remove('EMP_ACTIVO', {path: "/"})
        cookies.remove('EMP_CENTRO_DE_COSTE', {path: "/"})
        cookies.remove('EMP_COD_SAP', {path: "/"})
        cookies.remove('EMP_EQUIPO', {path: "/"})
        cookies.remove('EMP_LIDER', {path: "/"})
        cookies.remove('EMP_ZONA', {path: "/"})
        cookies.remove('EMP_CIUDAD', {path: "/"})
        window.location.href="./"
    }

    return (
        <img src={img} alt="Log Out" className="LogOutButton" onClick={closeSesion}/>
    )
}

export default LogOutButton