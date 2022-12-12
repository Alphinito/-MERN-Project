import React from "react"
import LogOutButton from "../../components/logOutButton"
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
          <LogOutButton/>
        </div>
        
    )
}

export default OptionsBar