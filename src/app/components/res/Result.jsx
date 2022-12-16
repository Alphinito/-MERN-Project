import React from "react"
import '../../../../public/styles/results.scss'

const Result = (props) => {
    return (
        <div className={props.SCSS}>
            {
                props.SCSS == 'Result-gobal'
                ?
                    <p className="bigTitle">Datos Globales</p>
                :null
            }
            <p className="Text">{props.text}</p>
        </div>
    )
}

export default Result