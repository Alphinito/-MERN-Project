import React from "react"
import '../../../public/styles/layouts.scss'

const MainLoginLayout = ({children}) => {
    return (
        <section className="MainLoginLayout">
            {children}
        </section>
    )
}

export default MainLoginLayout