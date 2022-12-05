import React from "react"
import '../../../../public/styles/board.scss'

const BoardChart1 = ({clickFuncion,children}) => {

    return (
        <div className="BoardChart1" onClick={clickFuncion}>
            {children}
        </div>
    )
}

export default BoardChart1