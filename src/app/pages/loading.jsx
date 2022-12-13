import React from "react"
import '../../../public/styles/loadingPage.scss'
import Lottie from "lottie-react"
import loading from '../../../assets/animations/loadingLine.json'
//import

const LoadingPage = () => {
    return (
        <div className="LoadingPageCont">
            <div className="animation" style={{width: "15%"}}>
                <Lottie animationData={loading}/>
            </div>
            
        </div>
    )
}

export default LoadingPage