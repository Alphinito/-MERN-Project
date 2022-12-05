import React from "react"
import '../../../../public/styles/board.scss'

const BoardChart2 = ({clickFuncion,children}) => {
    return (
        <div className="BoardChart2" onClick={clickFuncion}>
            {children}
        </div>
    )
}

export default BoardChart2