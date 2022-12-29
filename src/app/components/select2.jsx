import React from "react"

const Select2 = (props) => {

    let dias = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
    let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
    let años = [2022,2023]
    const currentDate = new Date()

    return (
        <select name={props.id} id={props.id} className="Select2" onChange={props.changeFunction}>
            {
                props.dateTipe == 'dia'
                ?
                    <>
                    <option value={currentDate.getDate()} className="optionSelect1">Dia Actual</option>
                    {dias.map( dia =>(
                                <option value={dia} className="optionSelect1" key={dia}>{dia}</option>
                            ))}
                    </>
                :props.dateTipe == 'mes'
                    ?
                        <>
                        <option value={currentDate.getMonth()} className="optionSelect1">Mes Actual</option>
                        {meses.map( (mes,index) =>(
                                <option value={index} className="optionSelect1" key={mes}>{mes}</option>
                            ))}
                        </>
                    :props.dateTipe == 'año'
                        ?
                            <>
                            <option value={currentDate.getFullYear()} className="optionSelect1">Año Actual</option>
                            {años.map( año =>(
                                <option value={año} className="optionSelect1" key={año}>{año}</option>
                            ))}
                            </>
                        :null
            }
        </select>
    )
}

export default Select2