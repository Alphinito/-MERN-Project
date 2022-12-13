import React, { useEffect, useContext, useLayoutEffect } from "react"
import NavegacionLateral from "../components/home/navegacion"
import MainBoardLayout from "../containers/MainBoardLayout"
import BoardConentDetailLayout from "../containers/BoardContentDetail"
import TitlePage from "../components/home/TitlePage.jsx"
import BackArrow from "../components/backArrow"
import OptionsBar from "../components/home/optionsBar"
import ChartDetail from "../compounds/ChartDetail"
import LoadingPage from "./loading"
import '../../../public/styles/board.scss' //SCSS
import Cookies from "universal-cookie/cjs/Cookies"
import BoardChartsGrid from "../compounds/BoardChartsGrid"
import { ValSesionActual } from "../../logic/login"
import { MainContext } from "../context/mainContext"

const DashBoard = () => {

    const cookies = new Cookies
    const {loading,setLoading,view,setView,title,setTitle,classVal,setClasVal,showBackArrow,setShowBackArrow} = useContext(MainContext)

    useLayoutEffect(()=>{
        ValSesionActual('dashBoard')
        setLoading(false)
    },[])

    return (
        <MainBoardLayout>
            <NavegacionLateral usNombre={cookies.get('EMP_NOMBRE',{})} usInfo={cookies.get('CAR_CARGO',{})}/>
            <div className={classVal}>
                {showBackArrow?<BackArrow/>:null}
                <TitlePage text={title}/>
            </div>
            
            {
                loading
                ?
                    <LoadingPage/>
                :view == ''
                    ?
                        <BoardChartsGrid/>
                    :view == 'Chart1'
                        ? 
                            <ChartDetail/>
                        :
                            <BoardConentDetailLayout>
                            </BoardConentDetailLayout>
            }
            <OptionsBar/>
        </MainBoardLayout>
    )
}

export default DashBoard