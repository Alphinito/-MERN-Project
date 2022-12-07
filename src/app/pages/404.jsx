import React from "react"
import '../../../public/styles/board.scss'
import '../../../public/styles/layouts.scss'
import Lottie from "lottie-react"
import notFound from '../../../assets/animations/404.json'
//import

const Page404 = () => {
    return (
        <div className="MainSimpleLayout">
            <div className="a" style={{width: "25%"}}>
                <Lottie animationData={notFound}/>
                <div className="Title">
                    La dirección a la que estás intentando acceder no existe
                </div>
            </div>
            
        </div>
    )
}

export default Page404