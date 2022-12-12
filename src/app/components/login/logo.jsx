import React from "react"
import '../../../../public/styles/login.scss'
import logo from '../../../../assets/logo.png';

const CompLogo = () => {
    return (
        <div className="contLogo">
            <img src={logo} alt="Buscando ...Logo..." />
            <h1 className="bigTitleCursive">Bienvenido al DASHBOARD de SMARTS SELLER</h1>
        </div>
    )
}

export default CompLogo