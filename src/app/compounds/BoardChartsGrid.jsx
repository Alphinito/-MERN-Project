import React, { useContext, useEffect } from "react"
import BoardConentLayout from "../containers/BoardContent"
import BoardChart from "../components/home/BoardChart"
import ChartPreview from "../components/charts/ChartPreview"
import ChartPreview2 from "../components/charts/ChartPreview2"
import '../../../public/styles/board.scss' //SCSS
import { MainContext } from "../context/mainContext"
import { ChartsContext } from "../context/chartsContext"
import { VisitasRealizadasMes } from "../../logic/filter"
import BoardVisitsResults from "./BoardVisitsResults"

const BoardChartsGrid = () => {

    const {setShowOptions,view,setView,title,setTitle,classVal,setClasVal,setShowBackArrow} = useContext(MainContext)
    const {dataVisitasSeguimientos,dataVisitasRealizadas,dataVisitasPlaneadas,dataVisitasCanceladas,visitasMes,setVisitasMes} = useContext(ChartsContext)

    const handleClick = (chart)=>{
        setClasVal('TitlePageContCenter')
        setShowBackArrow(true)
        switch (chart) {
            case 1:
                setView('Chart1')
                setTitle('Total de visitas realizadas')
                setShowOptions(false)
                break;

            case 2:
                setView('Chart2')
                setTitle('Relación con clientes')
                setShowOptions(false)
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
                setShowOptions(false)
                setView('Chart6')
                setTitle('Planificación de visitas')
                break;

            case 7:
                setShowOptions(false)
                setView('Chart7')
                setTitle('Clasificación de resultados')
                break;
        
            default:
                setShowBackArrow(false)
                setClasVal('TitlePageCont')
                setView('')
                setTitle('Dashboard')
                break;
        }
        
    }

    useEffect(()=>{
        setVisitasMes(VisitasRealizadasMes(dataVisitasRealizadas))
    },[])

    return (
        <BoardConentLayout>
            <BoardChart clickFuncion={() => {handleClick(1)}} title="Visitas este mes" color="#9FC3EC" scss="BoardChart1">
                <div className="ChartIndicativeContent"><h2 className="bigTitle">{visitasMes}</h2></div> 
            </BoardChart>
            <BoardChart clickFuncion={() => {handleClick(2)}} title="Relación con clientes" color="#FF958A" scss="BoardChart2">
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
            <BoardChart clickFuncion={() => {handleClick(6)}} title="Planificación de visitas" color="#9FC3EC" scss="BoardChart6">
                <ChartPreview dataa={dataVisitasRealizadas} title='Este mes' titleSize={14}/>
            </BoardChart>
            <BoardChart clickFuncion={() => {handleClick(7)}} title="Clasificación de resultados" color="#9FC3EC" scss="BoardChart7">
                <ChartPreview2 dataa={dataVisitasSeguimientos} title='Este mes' titleSize={14}/>
            </BoardChart>
            <BoardVisitsResults/>
        </BoardConentLayout>
    )
}

export default BoardChartsGrid