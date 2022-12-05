import React from "react"
import '../../../../public/styles/board.scss'

const BoardChart4 = ({clickFuncion,children}) => {
    return (
        <div className="BoardChart4" onClick={clickFuncion}>
            {children}
        </div>
    )
}

export default BoardChart4