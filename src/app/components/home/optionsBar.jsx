import React from "react"
import img from '../../../../assets/config.png'
import '../../../../public/styles/board.scss'
import '../../../../public/styles/layouts.scss'

const OptionsBar = (props) => {
    return (
        <div className="OptionsBarLayout">
          <img src={img} alt="Back Arrow" className="BackArrow" onClick={props.clickFuncion}/>
          <img src={img} alt="Back Arrow" className="BackArrow" onClick={props.clickFuncion}/>  
          <img src={img} alt="Back Arrow" className="BackArrow" onClick={props.clickFuncion}/>  
          <img src={img} alt="Back Arrow" className="BackArrow" onClick={props.clickFuncion}/>  
          <img src={img} alt="Back Arrow" className="BackArrow" onClick={props.clickFuncion}/>  
        </div>
        
    )
}

export default OptionsBar