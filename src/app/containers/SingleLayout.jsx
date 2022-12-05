import React from "react"
import '../../../public/styles/layouts.scss'

const SingleLayout = ({color, children}) => {
    return (
        <section className="SingleLayout" style={{backgroundColor: color}}>
            {children}
        </section>
    )
}

export default SingleLayout