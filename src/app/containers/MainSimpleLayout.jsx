import React from "react"
import '../../../public/styles/layouts.scss'

const MainSimpleLayout = ({children}) => {
    return (
        <section className="MainSimpleLayout">
            {children}
        </section>
    )
}

export default MainSimpleLayout