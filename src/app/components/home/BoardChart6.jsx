import React from "react"
import '../../../../public/styles/board.scss'

const BoardChart6 = ({clickFuncion,children}) => {
    return (
        <div className="BoardChart6" onClick={clickFuncion}>
            {children}
        </div>
    )
}

export default BoardChart6