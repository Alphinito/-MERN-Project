import React, { useEffect, useState } from "react"
import NavegacionLateral from "../components/home/navegacion"
import MainBoardLayout from "../containers/MainBoardLayout"
import BoardConentLayout from "../containers/BoardContent"
import BoardConentDetailLayout from "../containers/BoardContentDetail"
import TitlePage from "../components/home/TitlePage.jsx"
import BackArrow from "../components/backArrow"
import OptionsBar from "../components/home/optionsBar"
import BoardChart from "../components/home/BoardChart"
import ChartDetail from "../compounds/ChartDetail"
import ChartPreview from "../components/home/ChartPreview"
import ChartPreview2 from "../components/home/ChartPreview2"
import '../../../public/styles/board.scss'
import Cookies from "universal-cookie/cjs/Cookies"

const cookies = new Cookies

const DashBoard = () => {

    const  [loading,setLoading] = useState(true)
    const  [view,setView] = useState('')
    const  [title,setTitle] = useState('Dashboard')
    const  [classVal,setClasVal] = useState('TitlePageCont')
    const  [userInfo,setUserInfo] = useState([])

    const handleClick = (chart)=>{
        setClasVal('TitlePageContCenter')
        switch (chart) {
            case 1:
                setView('Chart1')
                setTitle('Total de visitas realizadas')
                break;

            case 2:
                setView('Chart2')
                setTitle('Clientes con menor actividad')
                break;

            case 3:
                setView('Chart3')
                setTitle('Clientes con mayor actividad')
                break;

            case 4:
                setView('Chart4')
                setTitle('Porcentaje de planificación')
                break;

            case 5:
                setView('Chart5')
                setTitle('Porcentaje de visitas canceladas')
                break;

            case 6:
                setView('Chart6')
                setTitle('Cumplimiento a la planificación')
                break;

            case 7:
                setView('Chart7')
                setTitle('Clasificación de resultados')
                break;
        
            default:
                setClasVal('TitlePageCont')
                setView('')
                setTitle('Dashboard')
                break;
        }
        
    }

    useEffect(()=>{
            setUserInfo([cookies.get('EMP_NOMBRE',{}),cookies.get('EMP_CARGO',{})])
            setLoading(false)
            console.log(loading)

    },[])

    return (
        <MainBoardLayout>
            <NavegacionLateral usNombre={userInfo[0]} usInfo={userInfo[1]}/>
            <div className={classVal}>
                {view != ''?<BackArrow clickFuncion={() => {handleClick(0)}}/>:null}
                <TitlePage text={title}/>
            </div>
            
            {view == ''
            ?
            <BoardConentLayout>
                <BoardChart clickFuncion={() => {handleClick(1)}} title="Visitas este mes" color="#9FC3EC" scss="BoardChart1">
                    <div className="ChartIndicativeContent"><h2 className="bigTitle">156</h2></div> 
                </BoardChart>
                <BoardChart clickFuncion={() => {handleClick(2)}} title="Clientes < atención" color="#FF958A" scss="BoardChart2">
                <div className="ChartIndicativeContent"><h2 className="bigTitle">156</h2></div> 
                </BoardChart>
                <BoardChart clickFuncion={() => {handleClick(3)}} title="Clientes > atención" color="#C1A0E5" scss="BoardChart3">
                <div className="ChartIndicativeContent"><h2 className="bigTitle">156</h2></div> 
                </BoardChart>
                <BoardChart clickFuncion={() => {handleClick(4)}} title="% de planificación" color="#9FC3EC" scss="BoardChart4">
                <div className="ChartIndicativeContent"><h2 className="bigTitle">156</h2></div> 
                </BoardChart>
                <BoardChart clickFuncion={() => {handleClick(5)}} title="% de cancelaciones" color="#9FC3EC" scss="BoardChart5">
                <div className="ChartIndicativeContent"><h2 className="bigTitle">156</h2></div> 
                </BoardChart>
                <BoardChart clickFuncion={() => {handleClick(6)}} title="Porcentaje de cumplimiento" color="#9FC3EC" scss="BoardChart6">
                    <ChartPreview/>
                </BoardChart>
                <BoardChart clickFuncion={() => {handleClick(7)}} title="Clasificación de resultados" color="#9FC3EC" scss="BoardChart7">
                    <ChartPreview2/>
                </BoardChart>
            </BoardConentLayout>
            :view == 'Chart1'
            ? <ChartDetail/>
            :
            <BoardConentDetailLayout>
            </BoardConentDetailLayout>}
            <OptionsBar/>
        </MainBoardLayout>
    )
}

export default DashBoard