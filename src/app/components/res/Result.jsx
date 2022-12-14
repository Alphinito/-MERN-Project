import React from "react"
import '../../../../public/styles/results.scss'

const Result = (props) => {
    return (
        <div className="Result">
            <p className="Text">{props.text}</p>
        </div>
    )
}

export default Result