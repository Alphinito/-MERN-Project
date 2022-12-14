import React from "react"

const Select1 = (props) => {
    return (
        <select name={props.id} id={props.id} className="Select1">
            <option value="" className="optionSelect1">{props.text}</option>

            <option value="" className="optionSelect1">{props.text}</option>
            <option value="" className="optionSelect1">{props.text}</option>
            <option value="" className="optionSelect1">{props.text}</option>
            <option value="" className="optionSelect1">{props.text}</option>
        </select>
    )
}

export default Select1