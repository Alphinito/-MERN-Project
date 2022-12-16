import React, { useContext, useEffect} from "react"
import '../../../public/styles/board.scss'
import BoardConentDetailLayout from "../containers/BoardContentDetail"
import Input1 from "../components/input"
import Select1 from "../components/select1"
import ChartDetailContent from "../containers/ChartDetailContent"
import Result from "../components/res/Result"
import TimeIndicator from "../components/res/TimeIndicator"
import { ChartsContext } from "../context/chartsContext"
import { VisitasRealizadasAnual } from "../../logic/filter"
import { VisitasRealizadasMes } from "../../logic/filter"

const ChartDetail = (props) => {

    const {busqueda, setBusqueda, dataEmpleados, dataEquipos, dataZonas, dataCiudades, currentGroupFilter, setCurrentGroupFilter, dataVisitas, visitasMes, setVisitasMes, visitasAnual, setVisitasAnual, visitasDia, setvisitasDia} = useContext(ChartsContext)
    let basedData //-----------------------------------------------------|VARIABLE EN LA QUE SE BASAN LOS RESULTADOS QUE SE MUESTRAN

    // if(!busqueda){
    //     basedData = dataVisitas
    // }else{
    //     basedData = dataVisitas.filter(res => res.EMP_NOMBRE.toLowerCase().includes(busqueda.toLowerCase()) || res.EMP_APELLIDO.toLowerCase().includes(busqueda.toLowerCase())) //FILTRO DE BUSQUEDA
    //     console.log('BUSQUEDA: '+busqueda)
    //     console.log(basedData) 
    // }
    currentGroupFilter == 0
    ?
        basedData = dataVisitas
    :currentGroupFilter == 1
        ?
            basedData = dataCiudades
        :currentGroupFilter == 2
            ?
                basedData = dataZonas
            :currentGroupFilter == 3
                ?
                    basedData = dataEquipos
                :currentGroupFilter == 4
                    ?
                        basedData = dataEmpleados
                    :null

    const handleChangeSelect = async e => {
        setCurrentGroupFilter(e.target.value)
        console.log('||BASEEEEEEEEEEEEEE||')
        console.log(basedData)
        console.log('||CIUDADES||')
        console.log(dataCiudades)
        console.log('||ZONAS||')
        console.log(dataZonas)
        console.log('||EQUIPOS||')
        console.log(dataEquipos)
        console.log('||EMPLEADOS||')
        console.log(dataEmpleados)
    }

    const handleChange = async e => {
        setBusqueda(e.target.value)
    }

    useEffect( () => {//-------------------------------------------------|USE EFECT DE ACTUALIZACIÓN
        setVisitasMes(VisitasRealizadasMes(basedData))
        setVisitasAnual(VisitasRealizadasAnual(basedData))
    }, [busqueda,currentGroupFilter])

    useEffect(()=>{//----------------------------------------------------|USE EFECT DE ARRANQUE Y FIN
        setVisitasMes(VisitasRealizadasMes(dataVisitas))
        setVisitasAnual(VisitasRealizadasAnual(dataVisitas))
        //setvisitasDia(dataVisitas)
        return()=>{//SE EJECUTA AL FINAL
            setBusqueda('')
            setCurrentGroupFilter(0)
        }  
    },[])

    return (
        <BoardConentDetailLayout>
            <Input1 text="Busqueda..." changeFuncion={handleChange}/>
            <Select1 id="selectGroupFilter" changeFunction={handleChangeSelect}/>
            <ChartDetailContent>
                {
                    currentGroupFilter == 0
                    ?
                        basedData.map( data =>(
                            <Result SCSS="Result-gobal" text={data.EMP_NOMBRE+' '+data.EMP_APELLIDO+' ('+data.VIS_FECHA+')'} key={data.VIS_ID}/>
                        ))
                    :currentGroupFilter == 1
                        ?
                            basedData.map( data =>(
                                <Result SCSS="Result" text={data.CIU_CIUDAD+ ' ('+data.CIU_ID+')'} key={data.CIU_ID}/>
                            ))
                        :currentGroupFilter == 2
                            ?
                                basedData.map( data =>(
                                    <Result SCSS="Result" text={data.ZON_ZONA+' ('+data.ZON_ID+')'} key={data.ZON_ID}/>
                                ))
                            :currentGroupFilter == 3
                                ?
                                    basedData.map( data =>(
                                        <Result SCSS="Result" text={data.EQU_EQUIPO+' ('+data.EQU_ID+')'} key={data.EQU_ID}/>
                                    ))
                                :currentGroupFilter == 4
                                    ?
                                        basedData.map( data =>(
                                            <Result SCSS="Result" text={data.EMP_NOMBRE+' '+data.EMP_CEDULA+' ('+data.VIS_FECHA+')'} key={data.VIS_ID}/>
                                        ))
                                    :null

                }
            </ChartDetailContent>
            <TimeIndicator mes={visitasMes} anual={visitasAnual} dia={visitasDia}/>
        </BoardConentDetailLayout>
    )
}

export default ChartDetail