import React, { useContext, useEffect} from "react"
import '../../../public/styles/board.scss'
import BoardConentDetailLayout from "../containers/BoardContentDetail"
import Input1 from "../components/input"
import Select1 from "../components/select1"
import ChartDetailContent from "../containers/ChartDetailContent"
import Result from "../components/res/Result"
import TimeIndicator from "../components/res/TimeIndicator"
import { ChartsContext } from "../context/chartsContext"
import { VisitasRealizadasMAIN,VisitasRealizadasAnual,VisitasRealizadasMes,VisitasRealizadasDia } from "../../logic/filter"
import Cookies from "universal-cookie/cjs/Cookies"

const ChartDetail = () => {

    const cookies = new Cookies
    const rol = cookies.get('ROL',{})
    const {currentDayFilter, setCurrentDayFilter,currentMonthFilter, setCurrentMonthFilter,currentYearFilter, setCurrentYearFilter,busqueda, setBusqueda, dataEmpleados, dataEquipos, dataZonas, dataCiudades, currentGroupFilter, setCurrentGroupFilter, dataVisitas, dataVisitasRealizadas, visitasMes, setVisitasMes, visitasAnual, setVisitasAnual, visitasDia, setVisitasDia, visitasHistorico, setVisitasHistorico} = useContext(ChartsContext)

    //--------------------------------------------------------------------------------------|MAIN FUNCTION FOR FILTER AND SEARCH
    function filterAndSearch(){
        let basedDataa
        switch (currentGroupFilter) {
            case '0':
                if(!busqueda){
                    basedDataa = dataVisitasRealizadas
                }else{
                    basedDataa = dataVisitasRealizadas //FILTRO DE BUSQUEDA
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
                    basedDataa = dataEmpleados.filter(res => res.EMP_NOMBRE.toLowerCase().includes(busqueda.toLowerCase()) || res.EMP_APELLIDO.toLowerCase().includes(busqueda.toLowerCase()) || res.EMP_CEDULA.toString().toLowerCase().includes(busqueda.toLowerCase()) || res.EMP_ID.toString().toLowerCase().includes(busqueda.toLowerCase()) || res.EQU_EQUIPO.toLowerCase().includes(busqueda.toLowerCase())) //FILTRO DE BUSQUEDA
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
    const handleChangeDias = async e => {
        setCurrentDayFilter(e.target.value)
    }
    const handleChangeMeses = async e => {
        setCurrentMonthFilter(e.target.value)
    }
    const handleChangeAños = async e => {
        setCurrentYearFilter(e.target.value)
    }

    useEffect( () => {//-------------------------------------------------|UPDATE USE EFECT
        if(currentGroupFilter == '0'){
            setVisitasDia(VisitasRealizadasDia(dataVisitasRealizadas,currentDayFilter,currentMonthFilter,currentYearFilter))
            setVisitasMes(VisitasRealizadasMes(dataVisitasRealizadas,currentMonthFilter,currentYearFilter))
            setVisitasAnual(VisitasRealizadasAnual(dataVisitasRealizadas,currentYearFilter))
            setVisitasHistorico(VisitasRealizadasMAIN(dataVisitasRealizadas))
        }else{//aquiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
            setVisitasDia(VisitasRealizadasDia(basedData,currentDayFilter,currentMonthFilter,currentYearFilter))
            setVisitasMes(VisitasRealizadasMes(basedData,currentMonthFilter,currentYearFilter))
            setVisitasAnual(VisitasRealizadasAnual(basedData,currentYearFilter))
            setVisitasHistorico(VisitasRealizadasMAIN(basedData))
        }
    }, [busqueda,currentGroupFilter,currentDayFilter,currentMonthFilter,currentYearFilter])

    useEffect(()=>{//----------------------------------------------------|USE EFECT START AND END
        setVisitasDia(VisitasRealizadasDia(dataVisitasRealizadas))
        setVisitasMes(VisitasRealizadasMes(dataVisitasRealizadas))
        setVisitasAnual(VisitasRealizadasAnual(dataVisitasRealizadas))
        setVisitasHistorico(VisitasRealizadasMAIN(dataVisitasRealizadas))
        return()=>{//SE EJECUTA AL FINAL
            const currentFecha = new Date()
            setBusqueda('')
            setCurrentGroupFilter('0')
            setCurrentDayFilter(currentFecha.getDate())
            setCurrentMonthFilter(currentFecha.getMonth())
            setCurrentYearFilter(currentFecha.getFullYear())
        }  
    },[])

    const clickFunction = e =>{
        console.log(e.target.dataset.id)
    }

    return (
        <BoardConentDetailLayout>
            {
                rol == 'VENTAS'
                    ?
                        null
                    :
                        <>
                        <Input1 text="Busqueda..." changeFuncion={handleChange}/>
                        <Select1 id="selectGroupFilter" changeFunction={handleChangeSelect}/>
                        </>
            }
            <ChartDetailContent>
                {
                    currentGroupFilter == 0
                    ?
                        <Result 
                            SCSS="Result-gobal" 
                            text="VISITAS REALIZADAS EN EL DÍA:" 
                            dia={visitasDia} 
                            changeFunctionDia={handleChangeDias}
                        />

                    :currentGroupFilter == 1
                        ?
                            basedData.map( data =>(
                                <Result 
                                    clickFunction={clickFunction} 
                                    SCSS="Result-ciudades" 
                                    text={data.CIU_CIUDAD+ ' ('+data.CIU_ID+')'} 
                                    key={data.CIU_ID}  
                                    dataDia={data.CIU_ID}
                                    diaFilter={currentDayFilter}
                                    mesFilter={currentMonthFilter}
                                    añoFilter={currentYearFilter}
                                />
                            ))
                        :currentGroupFilter == 2
                            ?
                                basedData.map( data =>(
                                    <Result 
                                        clickFunction={clickFunction} 
                                        SCSS="Result-zonas" 
                                        text={data.ZON_ZONA+' ('+data.ZON_ID+')'} 
                                        key={data.ZON_ID} 
                                        dataDia={data.ZON_ID}
                                        diaFilter={currentDayFilter}
                                        mesFilter={currentMonthFilter}
                                        añoFilter={currentYearFilter}
                                    />
                                ))
                            :currentGroupFilter == 3
                                ?
                                    basedData.map( data =>(
                                        <Result 
                                            clickFunction={clickFunction} 
                                            SCSS="Result-equipos" 
                                            text={data.EQU_EQUIPO+' - Lider: '+data.EMP_NOMBRE+' '+data.EMP_APELLIDO+' ('+data.EMP_ID+')'} 
                                            key={data.EQU_ID} 
                                            dataDia={data.EQU_ID}
                                            diaFilter={currentDayFilter}
                                            mesFilter={currentMonthFilter}
                                            añoFilter={currentYearFilter}
                                        />
                                    ))
                                :currentGroupFilter == 4
                                    ?
                                        basedData.map( data =>(
                                            <Result 
                                                clickFunction={clickFunction} 
                                                SCSS="Result" 
                                                text={`${data.EMP_NOMBRE} ${data.EMP_APELLIDO} - ${data.EMP_CEDULA} (${data.EQU_EQUIPO})`} 
                                                key={data.EMP_ID} 
                                                dataDia={data.EMP_ID}
                                                dataId={data.EMP_ID}
                                                diaFilter={currentDayFilter}
                                                mesFilter={currentMonthFilter}
                                                añoFilter={currentYearFilter}
                                            />
                                        ))
                                    :null

                }
            </ChartDetailContent>

            <TimeIndicator 
                mes={visitasMes} 
                changeFunctionMes={handleChangeMeses}
                anual={visitasAnual} 
                changeFunctionAño={handleChangeAños}
                dia={visitasHistorico}
                changeFunctionDia={handleChangeDias}
            />

        </BoardConentDetailLayout>
    )
}

export default ChartDetail