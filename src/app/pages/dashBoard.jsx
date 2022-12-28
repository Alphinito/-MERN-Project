import React, { useContext, useLayoutEffect } from "react"
import NavegacionLateral from "../components/home/navegacion"
import MainBoardLayout from "../containers/MainBoardLayout"
import BoardConentDetailLayout from "../containers/BoardContentDetail"
import TitlePage from "../components/home/TitlePage.jsx"
import BackArrow from "../components/backArrow"
import OptionsBar from "../components/home/optionsBar"
import ChartDetail from "../compounds/ChartDetail"
import ChartDetail6 from "../compounds/ChartDetail6"
import LoadingPage from "./loading"
import '../../../public/styles/board.scss' //SCSS
import Cookies from "universal-cookie/cjs/Cookies"
import BoardChartsGrid from "../compounds/BoardChartsGrid"
import Porfile from "../compounds/porfile"
import { ValSesionActual } from "../../logic/login"
import { MainContext } from "../context/mainContext"
import { ChartsContext } from "../context/chartsContext"


const DashBoard = () => {

    const cookies = new Cookies
    const {showOptions,loading,view,title,classVal,showBackArrow} = useContext(MainContext)
    const {setBasedDataContext, dataVisitas} = useContext(ChartsContext)

    useLayoutEffect(()=>{
        ValSesionActual('dashBoard')
        return()=>{
            setBasedDataContext(dataVisitas)
        }
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
                        :view == 'Chart6'
                            ?
                                <ChartDetail6/>
                            :view == 'Perfil'
                                ?
                                    <Porfile/>
                                :null
            }
            {
               showOptions
               ?<OptionsBar/>
               :null
            }
            
        </MainBoardLayout>
    )
}

export default DashBoard