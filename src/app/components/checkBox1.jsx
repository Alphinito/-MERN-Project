import React from "react"

const CheckBox1 = (props) => {
    return (
        <div className="CheckBox1Cont">
            <input type="checkbox" name={props.id} id={props.id} onChange={props.changeFunction} /><label htmlFor={props.id}>{props.text}</label> 
        </div>
    )
}

export default CheckBox1