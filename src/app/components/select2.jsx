import React,{ useContext } from "react"
import { ChartsContext } from "../context/chartsContext"

const Select2 = (props) => {

    //-----------------------------------------------------------------------------------------------------|VARS
    const {currentDayFilter,currentMonthFilter,currentYearFilter} = useContext(ChartsContext)
    let dias = []
    let años = []
    let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
    const currentDate = new Date()

    //-----------------------------------------------------------------------------------------------------|FUNCTIONS
    const getDias = () => {
        const iteraciones = new Date(currentYearFilter, parseInt(currentMonthFilter)+1, null).getDate()
        for (let i = 1; i < iteraciones+1; i++) {
            dias.push(i)
        }
    }
    const getAños = () => {
        let añoInicial = 2022
        const iteraciones = currentDate.getFullYear() - añoInicial
        for (let i = 0; i < iteraciones+1; i++) {
            años.push(añoInicial)
            añoInicial++
        }
    }

    //-----------------------------------------------------------------------------------------------------|ACTION
    getDias()
    getAños()

    return (
        <select name={props.id} id={props.id} className="Select2" onChange={props.changeFunction}>
            {
                props.dateTipe == 'dia'
                ?
                    <>
                    <option value={currentDate.getDate()} className="optionSelect1">Dia Actual</option>
                    {dias.map( dia =>(
                                <option /*{...currentDayFilter == dia ? 'selected' : null}*/ value={dia} className="optionSelect1" key={dia}>{dia}</option>
                            ))}
                    </>
                :props.dateTipe == 'mes'
                    ?
                        <>
                        <option value={currentDate.getMonth()} className="optionSelect1">Mes Actual</option>
                        {meses.map( (mes,index) =>(
                                <option /*{...currentMonthFilter == index ? 'selected' : null}*/ value={index} className="optionSelect1" key={mes}>{mes}</option>
                            ))}
                        </>
                    :props.dateTipe == 'año'
                        ?
                            <>
                            <option value={currentDate.getFullYear()} className="optionSelect1">Año Actual</option>
                            {años.map( año =>(
                                <option /*{...currentYearFilter == año ? 'selected' : null} value={año}*/ className="optionSelect1" key={año}>{año}</option>
                            ))}
                            </>
                        :null
            }
        </select>
    )
}

export default Select2