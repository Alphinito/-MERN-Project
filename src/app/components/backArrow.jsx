import React from "react"
import img from '../../../assets/turn-back.png';

const BackArrow = (props) => {
    return (
        <img src={img} alt="Back Arrow" className="BackArrow" onClick={props.clickFuncion}/>
    )
}

export default BackArrow