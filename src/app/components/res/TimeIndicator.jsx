import React from "react"
import '../../../../public/styles/results.scss'

const TimeIndicator = (props) => {
    return (
        <div className="TimeIndicator">
            <div className="mensual"> <i>MES</i> <p className="bigTitle">{props.mes}</p></div>
            <div className="anual"> <i>AÑO</i>  <p className="bigTitle">{props.anual}</p></div>
            <div className="historico"> <i>HISTORICO</i> <p className="bigTitle">{props.dia}</p></div>
        </div>
    )
}

export default TimeIndicator