import React, { useContext } from "react"
import Select2 from "../select2"
import '../../../../public/styles/results.scss'
import { ChartsContext } from "../../context/chartsContext"

const TimeIndicator = (props) => {

    const {currentGroupFilter} = useContext(ChartsContext)

    return (
        <div className="TimeIndicator">
            {
                currentGroupFilter != 0
                ?<div className="mensual"> <Select2 dateTipe='dia' changeFunction={props.changeFunctionDia}/> {currentGroupFilter == 0 ?<p className="bigTitle">{props.mes}</p>: null}</div>
                :null
            }
            <div className="mensual"> <Select2 dateTipe='mes' changeFunction={props.changeFunctionMes}/> {currentGroupFilter == 0 ?<p className="bigTitle">{props.mes}</p>: null}</div>
            <div className="anual"> <Select2 dateTipe='año' changeFunction={props.changeFunctionAño}/>{currentGroupFilter == 0 ?<p className="bigTitle">{props.anual}</p>: null} </div>
            
            {
                currentGroupFilter != 0 || props.showData == false
                ?null
                :<div className="historico"> <i>HISTORICO</i> <p className="bigTitle">{props.dia}</p></div>
            }
        </div>
    )
}

export default TimeIndicator