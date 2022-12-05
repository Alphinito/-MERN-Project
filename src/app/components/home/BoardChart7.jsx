import React from "react"
import '../../../../public/styles/board.scss'

const BoardChart7 = ({clickFuncion,children}) => {
    return (
        <div className="BoardChart7" onClick={clickFuncion}>
            {children}
        </div>
    )
}

export default BoardChart7