import React from "react"
import '../../../public/styles/layouts.scss'

const SingleLayout = ({colorBorder, color, children}) => {
    return (
        <section className="SingleLayout" style={{backgroundColor: color, borderRightWidth: 1, borderRightStyle: 'solid', borderRightColor: colorBorder||'transparent'}}>
            {children}
        </section>
    )
}

export default SingleLayout