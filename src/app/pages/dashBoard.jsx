import React, { useState } from "react"
import NavegacionLateral from "../components/home/navegacion"
import MainBoardLayout from "../containers/MainBoardLayout"
import BoardConentLayout from "../containers/BoardContent"
import BoardConentDetailLayout from "../containers/BoardContentDetail"
import TitlePage from "../components/home/TitlePage.jsx"
import BackArrow from "../components/backArrow"
import BoardChart1 from "../components/home/BoardChart1"
import BoardChart2 from "../components/home/BoardChart2"
import BoardChart3 from "../components/home/BoardChart3"
import BoardChart4 from "../components/home/BoardChart4"
import BoardChart5 from "../components/home/BoardChart5"
import BoardChart6 from "../components/home/BoardChart6"
import BoardChart7 from "../components/home/BoardChart7"
import '../../../public/styles/board.scss'

const DashBoard = () => {

    const  [view,setView] = useState('')
    const  [title,setTitle] = useState('Dashboard')
    const  [classVal,setClasVal] = useState('TitlePageCont')

    const handleClick = (chart)=>{
        setClasVal('TitlePageContCenter')
        switch (chart) {
            case 1:
                setView('Chart1')
                setTitle('Visitas este mes')
                break;

            case 2:
                setView('Chart2')
                setTitle('Chart2')
                break;

            case 3:
                setView('Chart3')
                setTitle('Chart3')
                break;

            case 4:
                setView('Chart4')
                setTitle('Chart4')
                break;

            case 5:
                setView('Chart5')
                setTitle('Chart5')
                break;

            case 6:
                setView('Chart6')
                setTitle('Chart6')
                break;

            case 7:
                setView('Chart7')
                setTitle('Chart7')
                break;
        
            default:
                setClasVal('TitlePageCont')
                setView('')
                setTitle('Dashboard')
                break;
        }
        
    }

    return (
        <MainBoardLayout>
            <NavegacionLateral usNombre="Oscar Vanegas Contreras" usInfo="Mercadeo"/>
            <div className={classVal}>
                {view != ''?<BackArrow clickFuncion={() => {handleClick(0)}}/>:null}
                <TitlePage text={title}/>
            </div>
            
            {view == ''
            ?
            <BoardConentLayout>
                <BoardChart1 clickFuncion={() => {handleClick(1)}}>
                    <h2 className="Title">Visitas este mes</h2>
                </BoardChart1>
                <BoardChart2 clickFuncion={() => {handleClick(2)}}>
                    <h2 className="Title">Clientes mas visitados</h2>
                </BoardChart2>
                <BoardChart3 clickFuncion={() => {handleClick(3)}}>
                    <h2 className="Title">Clientes menos visitados</h2>
                </BoardChart3>
                <BoardChart4 clickFuncion={() => {handleClick(4)}}>
                    <h2 className="Title">Porcentaje de planificación</h2>
                </BoardChart4>
                <BoardChart5 clickFuncion={() => {handleClick(5)}}>
                    <h2 className="Title">Porcentaje de cancelaciones</h2>
                </BoardChart5>
                <BoardChart6 clickFuncion={() => {handleClick(6)}}>
                    <h2 className="Title">Porcentaje de cumplimiento</h2>
                </BoardChart6>
                <BoardChart7 clickFuncion={() => {handleClick(7)}}>
                    <h2 className="Title">Resultados Pos/Neg</h2>
                </BoardChart7>
            </BoardConentLayout>
            :
            <BoardConentDetailLayout>
                <BoardChart3 clickFuncion={() => {handleClick(3)}}></BoardChart3>
                <BoardChart4 clickFuncion={() => {handleClick(4)}}></BoardChart4>
                <BoardChart7 clickFuncion={() => {handleClick(7)}}></BoardChart7>
            </BoardConentDetailLayout>}
        </MainBoardLayout>
    )
}

export default DashBoard