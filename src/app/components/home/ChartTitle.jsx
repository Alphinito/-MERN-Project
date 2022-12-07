import React from "react"
import '../../../../public/styles/board.scss'

const ChartTitle = (props) => {
    return (
        <div className="ChartTitleCont" style={{backgroundColor: props.color}}>
            <p className="ChartTitle">{props.text}</p>
        </div>
    )
}

export default ChartTitle