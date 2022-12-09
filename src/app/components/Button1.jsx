import React from "react"

const CompButton1 = (props) => {
    return (
        <button className="Button1" onClick={props.clickFunction}>{props.text}</button>
    )
}

export default CompButton1