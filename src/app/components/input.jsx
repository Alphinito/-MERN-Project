import React from "react"

const Input1 = (props) => {
    return (
        <input type={props.type} className="Input1" placeholder={props.text} id={props.id} name={props.id} onChange={props.changeFuncion}
        style={
            props.margin
            ?{margin: 0}
            :{}
        }
        />
    )
}

export default Input1