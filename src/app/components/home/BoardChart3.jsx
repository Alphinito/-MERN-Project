import React from "react"
import '../../../../public/styles/board.scss'

const BoardChart3 = ({clickFuncion,children}) => {
    return (
        <div className="BoardChart3" onClick={clickFuncion}>
            {children}
        </div>
    )
}

export default BoardChart3