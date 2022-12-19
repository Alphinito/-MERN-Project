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
import { VisitasRealizadasDia } from "../../logic/filter"
import { VisitasRealizadasMAIN } from "../../logic/filter"

const ChartDetail = () => {

    const {busqueda, setBusqueda, dataEmpleados, dataEquipos, dataZonas, dataCiudades, currentGroupFilter, setCurrentGroupFilter, dataVisitas, visitasMes, setVisitasMes, visitasAnual, setVisitasAnual, visitasDia, setVisitasDia, visitasHistorico, setVisitasHistorico} = useContext(ChartsContext)

    //--------------------------------------------------------------------------------------|MAIN FUNCTION FOR FILTER AND SEARCH
    function filterAndSearch(){
        let basedDataa
        switch (currentGroupFilter) {
            case '0':
                if(!busqueda){
                    basedDataa = dataVisitas
                }else{
                    basedDataa = dataVisitas //FILTRO DE BUSQUEDA
                }
                break;

            case '1':
                if(!busqueda){
                    basedDataa = dataCiudades
                }else{
                    basedDataa = dataCiudades.filter(res => res.CIU_CIUDAD.toLowerCase().includes(busqueda.toLowerCase())) //FILTRO DE BUSQUEDA
                }
                break;
                
            case '2':
                if(!busqueda){
                    basedDataa = dataZonas
                }else{
                    basedDataa = dataZonas.filter(res => res.ZON_ZONA.toString().toLowerCase().includes(busqueda.toLowerCase())) //FILTRO DE BUSQUEDA
                }
                break;
                
            case '3':
                if(!busqueda){
                    basedDataa = dataEquipos
                }else{
                    basedDataa = dataEquipos.filter(res => res.EQU_EQUIPO.toLowerCase().includes(busqueda.toLowerCase()) || res.EMP_NOMBRE.toString().toLowerCase().includes(busqueda.toLowerCase()) || res.EMP_APELLIDO.toString().toLowerCase().includes(busqueda.toLowerCase())) //FILTRO DE BUSQUEDA
                }
                break;
                
            case '4':
                if(!busqueda){
                    basedDataa = dataEmpleados
                }else{
                    basedDataa = dataEmpleados.filter(res => res.EMP_NOMBRE.toLowerCase().includes(busqueda.toLowerCase()) || res.EMP_APELLIDO.toLowerCase().includes(busqueda.toLowerCase()) || res.EMP_CEDULA.toString().toLowerCase().includes(busqueda.toLowerCase())) //FILTRO DE BUSQUEDA
                }
                break;
        }
        return basedDataa
    }
    let basedData = filterAndSearch()//-----------------------------------------------------|VARIABLE EN LA QUE SE BASAN LOS RESULTADOS QUE SE MUESTRAN


    const handleChangeSelect = async e => {
        setCurrentGroupFilter(e.target.value)
    }

    const handleChange = async e => {
        setBusqueda(e.target.value)
    }

    useEffect( () => {//-------------------------------------------------|UPDATE USE EFECT
        if(currentGroupFilter == '0'){
            setVisitasDia(VisitasRealizadasDia(dataVisitas))
            setVisitasMes(VisitasRealizadasMes(dataVisitas))
            setVisitasAnual(VisitasRealizadasAnual(dataVisitas))
            setVisitasHistorico(VisitasRealizadasMAIN(dataVisitas))
        }else{
            setVisitasDia(VisitasRealizadasDia(basedData))
            setVisitasMes(VisitasRealizadasMes(basedData))
            setVisitasAnual(VisitasRealizadasAnual(basedData))
            setVisitasHistorico(VisitasRealizadasMAIN(basedData))
        }
    }, [busqueda,currentGroupFilter])

    useEffect(()=>{//----------------------------------------------------|USE EFECT START AND END
        setVisitasDia(VisitasRealizadasDia(dataVisitas))
        setVisitasMes(VisitasRealizadasMes(dataVisitas))
        setVisitasAnual(VisitasRealizadasAnual(dataVisitas))
        setVisitasHistorico(VisitasRealizadasMAIN(dataVisitas))
        return()=>{//SE EJECUTA AL FINAL
            setBusqueda('')
            setCurrentGroupFilter('0')
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
                        <Result SCSS="Result-gobal" text="VISITAS REALIZADAS HOY" dia={visitasDia}/>
                    :currentGroupFilter == 1
                        ?
                            basedData.map( data =>(
                                <Result SCSS="Result-ciudades" text={data.CIU_CIUDAD+ ' ('+data.CIU_ID+')'} key={data.CIU_ID}  dataDia={data.CIU_ID}/>
                            ))
                        :currentGroupFilter == 2
                            ?
                                basedData.map( data =>(
                                    <Result SCSS="Result" text={data.ZON_ZONA+' ('+data.ZON_ID+')'} key={data.ZON_ID} dataDia={data.ZON_ID}/>
                                ))
                            :currentGroupFilter == 3
                                ?
                                    basedData.map( data =>(
                                        <Result SCSS="Result" text={data.EQU_EQUIPO+' - Lider: '+data.EMP_NOMBRE+' '+data.EMP_APELLIDO+' ('+data.EMP_ID+')'} key={data.EQU_ID} dataDia={data.EQU_ID}/>
                                    ))
                                :currentGroupFilter == 4
                                    ?
                                        basedData.map( data =>(
                                            <Result SCSS="Result" text={data.EMP_NOMBRE+' '+data.EMP_APELLIDO+' - '+data.EMP_CEDULA+' ('+data.CAR_CARGO+')'} key={data.EMP_ID} dataDia={data.EMP_ID}/>
                                        ))
                                    :null

                }
            </ChartDetailContent>
            <TimeIndicator mes={visitasMes} anual={visitasAnual} dia={visitasHistorico}/>
        </BoardConentDetailLayout>
    )
}

export default ChartDetail