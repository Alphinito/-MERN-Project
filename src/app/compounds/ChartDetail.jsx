import React, { useContext, useEffect } from "react"
import '../../../public/styles/board.scss'
import BoardConentDetailLayout from "../containers/BoardContentDetail"
import Input1 from "../components/input"
import Select1 from "../components/select1"
import ChartDetailContent from "../containers/ChartDetailContent"
import Result from "../components/res/Result"
import TimeIndicator from "../components/res/TimeIndicator"
import { ChartsContext } from "../context/chartsContext"
import { VisitasRealizadas } from "../../logic/filter"

const ChartDetail = (props) => {

    const {visitasMes, setVisitasMes} = useContext(ChartsContext)

    useEffect(()=>{
        async function  bridgueForDeclineError(){
            setVisitasMes(await VisitasRealizadas(null,null))
        }
        bridgueForDeclineError()
    },[])

    return (
        <BoardConentDetailLayout>
            <Input1 text="Busqueda..."/>
            <Select1 text="Elije una opción"/>
            <ChartDetailContent>
                {
                    visitasMes.map( data =>(
                        <Result text={data.EMP_NOMBRE} key={data.VIS_ID}/>
                    ))

                }
            </ChartDetailContent>
            <TimeIndicator/>
        </BoardConentDetailLayout>
    )
}

export default ChartDetail