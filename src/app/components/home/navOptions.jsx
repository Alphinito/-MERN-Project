import React from "react"
import '../../../../public/styles/navegacion.scss'

const NavOptions = (props) => {
    return (
        <div className="contOption" onClick={props.clickFunction}>
            <p className="optionText">{props.text}</p>
        </div>
    )
}

export default NavOptions