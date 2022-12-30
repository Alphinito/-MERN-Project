import React from "react"
import '../../../public/styles/layouts.scss'

const SingleLayout = ({padding,colorBorder, color, children}) => {
    return (
        <section className="SingleLayout" 
        style={{backgroundColor: color, 
                borderRightWidth: 1, 
                borderRightStyle: 'solid',
                padding: padding,
                borderRightColor: colorBorder||'transparent'}}>
            {children}
        </section>
    )
}

export default SingleLayout