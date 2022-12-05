import React from "react"
import '../../../public/styles/layouts.scss'

const BoardConentLayout = ({children}) => {
    return (
        <section className="BoardConentLayout">
            {children}
        </section>
    )
}

export default BoardConentLayout