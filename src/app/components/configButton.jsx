import React from "react"
import img from '../../../assets/config.png';

const ConfigButton = (props) => {
    return (
        <img src={img} alt="Back Arrow" className="BackArrow" onClick={props.clickFuncion}/>
    )
}

export default ConfigButton