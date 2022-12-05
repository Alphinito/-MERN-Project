import React from "react"
import '../../../../public/styles/board.scss'

const BoardChart5 = ({clickFuncion,children}) => {
    return (
        <div className="BoardChart5" onClick={clickFuncion}>
            {children}
        </div>
    )
}

export default BoardChart5