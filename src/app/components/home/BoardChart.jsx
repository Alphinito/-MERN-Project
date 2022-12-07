import React from "react"
import '../../../../public/styles/board.scss'
import ChartTitle from "./ChartTitle"

const BoardChart = ({color,scss,title,clickFuncion,children}) => {

    return (
        <div className={scss} onClick={clickFuncion}>
            {children}
            <ChartTitle text={title} color={color}/>
        </div>
    )
}

export default BoardChart