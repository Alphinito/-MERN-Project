import React, { useContext, useEffect, useState} from "react"
import ChartPreview from '../components/home/ChartPreview'
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
import Cookies from "universal-cookie/cjs/Cookies"

const ChartDetail6 = () => {

    const cookies = new Cookies
    const rol = cookies.get('ROL',{})
    const {busqueda, setBusqueda, dataEmpleados, dataEquipos, dataZonas, dataCiudades, currentGroupFilter, setCurrentGroupFilter, dataVisitas, dataVisitasRealizadas, visitasMes, setVisitasMes, visitasAnual, setVisitasAnual, visitasDia, setVisitasDia, visitasHistorico, setVisitasHistorico} = useContext(ChartsContext)
    const [currentData, setCurrentData] = useState(dataVisitasRealizadas)

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

    const handleChangeSelect = async e => {//----------------------------|CATCH SELECT SEARCH
        setCurrentGroupFilter(e.target.value)
    }

    const handleChange = async e => {//----------------------------------|CATCH INPUT SEARCH
        setBusqueda(e.target.value)
    }

    useEffect( () => {//-------------------------------------------------|UPDATE USE EFECT
        if(currentGroupFilter == '0'){
            setVisitasDia(VisitasRealizadasDia(dataVisitasRealizadas))
            setVisitasMes(VisitasRealizadasMes(dataVisitasRealizadas))
            setVisitasAnual(VisitasRealizadasAnual(dataVisitasRealizadas))
            setVisitasHistorico(VisitasRealizadasMAIN(dataVisitasRealizadas))
        }else{//aquiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
            setVisitasDia(VisitasRealizadasDia(basedData))
            setVisitasMes(VisitasRealizadasMes(basedData))
            setVisitasAnual(VisitasRealizadasAnual(basedData))
            setVisitasHistorico(VisitasRealizadasMAIN(basedData))
        }
    }, [busqueda,currentGroupFilter])

    useEffect(()=>{//----------------------------------------------------|USE EFECT START AND END
        setVisitasDia(VisitasRealizadasDia(dataVisitasRealizadas))
        setVisitasMes(VisitasRealizadasMes(dataVisitasRealizadas))
        setVisitasAnual(VisitasRealizadasAnual(dataVisitasRealizadas))
        setVisitasHistorico(VisitasRealizadasMAIN(dataVisitasRealizadas))
        return()=>{//SE EJECUTA AL FINAL
            setBusqueda('')
            setCurrentGroupFilter('0')
        }  
    },[])

    const clickFunction = (e,key) =>{//----------------------------------|WHEN CLICK A RESULT
        switch (currentGroupFilter) {
            case '0':
                setCurrentData(dataVisitasRealizadas)
                break;
            case '1':
                setCurrentData(dataVisitasRealizadas.filter(dat => dat.EMP_CIUDAD == key))
                break;
            case '2':
                setCurrentData(dataVisitasRealizadas.filter(dat => dat.EMP_ZONA == key))
                break;
            case '3':
                setCurrentData(dataVisitasRealizadas.filter(dat => dat.EQU_ID == key))
                break;
            case '4':
                setCurrentData(dataVisitasRealizadas.filter(dat => dat.EMP_ID == key))
                break;
        }
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
                <ChartPreview dataa={currentData}/>
            </ChartDetailContent>
            {
                currentGroupFilter == 0
                ?
                    <TimeIndicator 
                        showData={false}
                    />
                :currentGroupFilter == 1
                    ?
                        <div className="resultsCont">
                            {basedData.map( data =>(
                                <Result 
                                    clickFunction={e=>{clickFunction(e,data.CIU_ID)}} 
                                    SCSS="Result-ciudades" 
                                    text={data.CIU_CIUDAD+ ' ('+data.CIU_ID+')'} 
                                    key={data.CIU_ID}
                                />
                            ))}
                        </div>

                    :currentGroupFilter == 2
                        ?
                            <div className="resultsCont">
                                {basedData.map( data =>(
                                    <Result 
                                        clickFunction={e=>{clickFunction(e,data.ZON_ID)}} 
                                        SCSS="Result-zonas" 
                                        text={data.ZON_ZONA+' ('+data.ZON_ID+')'} 
                                        key={data.ZON_ID} 
                                    />
                                ))}
                            </div>
                        :currentGroupFilter == 3
                            ?
                                <div className="resultsCont">
                                    {basedData.map( data =>(
                                        <Result 
                                            clickFunction={e=>{clickFunction(e,data.EQU_ID)}} 
                                            SCSS="Result-equipos"
                                            text={data.EQU_EQUIPO+' - Lider: '+data.EMP_NOMBRE+' '+data.EMP_APELLIDO+' ('+data.EMP_ID+')'} 
                                            key={data.EQU_ID} 
                                        />
                                    ))}
                                </div>
                            :currentGroupFilter == 4
                                ?
                                    <div className="resultsCont">
                                        {basedData.map( data =>(
                                            <Result 
                                                clickFunction={e=>{clickFunction(e,data.EMP_ID)}} 
                                                SCSS="Result" 
                                                text={`${data.EMP_NOMBRE} ${data.EMP_APELLIDO} - ${data.EMP_CEDULA} (${data.EQU_EQUIPO})`} 
                                                key={data.EMP_ID} 
                                            />
                                        ))}
                                    </div>
                                :null
            }
        </BoardConentDetailLayout>
    )
}

export default ChartDetail6