import React from "react"
import '../../../public/styles/board.scss'
import '../../../public/styles/layouts.scss'
import Lottie from "lottie-react"
import loading from '../../../assets/animations/loadingLine.json'
//import

const LoadingPage = () => {
    return (
        <div className="MainSimpleLayout">
            <div className="a" style={{width: "15%"}}>
<Lottie animationData={loading}/>
            </div>
            
        </div>
    )
}

export default LoadingPage