import React from "react"
import '../../../../public/styles/navegacion.scss'

const TitlePage = (props) => {
    return (
        <h2 className="TitlePageContText">{props.text}</h2>
    )
}

export default TitlePage