import React from "react"
import '../../../public/styles/layouts.scss'

const MainBoardLayout = ({children}) => {
    return (
        <section className="MainBoardLayout">
            {children}
        </section>
    )
}

export default MainBoardLayout