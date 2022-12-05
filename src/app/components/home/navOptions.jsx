import React from "react"
import '../../../../public/styles/navegacion.scss'

const NavOptions = (porps) => {
    return (
        <div className="contOption">
            <p className="optionText">{porps.text}</p>
        </div>
    )
}

export default NavOptions