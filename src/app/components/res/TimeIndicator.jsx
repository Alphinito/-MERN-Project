import React from "react"
import '../../../../public/styles/results.scss'

const TimeIndicator = (props) => {
    return (
        <div className="TimeIndicator">
            <div className="mensual"></div>
            <div className="anual"></div>
            <div className="historico"></div>
        </div>
    )
}

export default TimeIndicator