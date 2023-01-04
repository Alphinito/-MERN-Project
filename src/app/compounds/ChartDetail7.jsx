import React, { useContext, useEffect, useState} from "react"
import ChartPreview2 from '../components/home/ChartPreview2'
import '../../../public/styles/board.scss'
import BoardConentDetailLayout from "../containers/BoardContentDetail"
import Input1 from "../components/input"
import Select1 from "../components/select1"
import Select2 from "../components/select2"
import SingleLayout from "../containers/SingleLayout"
import ChartDetailContent from "../containers/ChartDetailContent"
import Result from "../components/res/Result"
import Lottie from "lottie-react"
import buscaAlgo from '../../../assets/animations/search.json'
import { ChartsContext } from "../context/chartsContext"
import { VisitasRealizadasAnual } from "../../logic/filter"
import { VisitasRealizadasMes } from "../../logic/filter"
import { VisitasRealizadasDia } from "../../logic/filter"
import { VisitasRealizadasMAIN } from "../../logic/filter"
import Cookies from "universal-cookie/cjs/Cookies"
import CheckBox1 from "../components/checkBox1"

const ChartDetail7 = () => {

    const cookies = new Cookies
    const rol = cookies.get('ROL',{})
    const {currentMonthFilter, setCurrentMonthFilter,currentYearFilter, setCurrentYearFilter, busqueda, setBusqueda, dataEmpleados, dataEquipos, dataZonas, dataCiudades, currentGroupFilter, setCurrentGroupFilter, dataVisitasSeguimientos, dataVisitasRealizadas, visitasMes, setVisitasMes, visitasAnual, setVisitasAnual, visitasDia, setVisitasDia, visitasHistorico, setVisitasHistorico} = useContext(ChartsContext)
    const [currentData, setCurrentData] = useState(dataVisitasSeguimientos)
    const [chartTitle, setChartTitle] = useState()
    const [currentHistorico, setcurrentHistorico] = useState(false)

    //--------------------------------------------------------------------------------------|MAIN FUNCTION FOR FILTER AND SEARCH
    function filterAndSearch(){
        let basedDataa
        switch (currentGroupFilter) {
            case '0':
                if(!busqueda){
                    basedDataa = dataVisitasSeguimientos
                }else{
                    basedDataa = dataVisitasSeguimientos //FILTRO DE BUSQUEDA
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
    const handleChangeMeses = async e => {
        setCurrentMonthFilter(e.target.value)
    }
    const handleChangeAños = async e => {
        setCurrentYearFilter(e.target.value)
    }
    const handleChangeCheckBox = e => {
        e.target.checked
        ?setcurrentHistorico(true)
        :setcurrentHistorico(false)
    }
    const handleChange = async e => {//----------------------------------|CATCH INPUT SEARCH
        setBusqueda(e.target.value)
    }

    useEffect(() => {//-------------------------------------------------|UPDATE USE EFECT
        setChartTitle(rol=='VENTAS'&& rol != 'LIDER'?'Mis datos':'Global')
        setCurrentData(dataVisitasSeguimientos)
    }, [busqueda,currentGroupFilter,currentMonthFilter,currentYearFilter])

    useEffect(()=>{//----------------------------------------------------|USE EFECT START AND END
        setVisitasDia(VisitasRealizadasDia(dataVisitasRealizadas))
        setVisitasMes(VisitasRealizadasMes(dataVisitasRealizadas))
        setVisitasAnual(VisitasRealizadasAnual(dataVisitasRealizadas))
        setVisitasHistorico(VisitasRealizadasMAIN(dataVisitasRealizadas))
        return()=>{//SE EJECUTA AL FINAL
            const currentFecha = new Date()
            setBusqueda('')
            setCurrentGroupFilter('0')
            setCurrentMonthFilter(currentFecha.getMonth())
            setCurrentYearFilter(currentFecha.getFullYear())
        }  
    },[])

    const clickFunction = (e,key,text) =>{//----------------------------------|WHEN CLICK A RESULT
        switch (currentGroupFilter) {
            case '0':
                setCurrentData(dataVisitasSeguimientos)
                break;
            case '1':
                setCurrentData(dataVisitasSeguimientos.filter(dat => dat.EMP_CIUDAD == key))
                break;
            case '2':
                setCurrentData(dataVisitasSeguimientos.filter(dat => dat.EMP_ZONA == key))
                break;
            case '3':
                setCurrentData(dataVisitasSeguimientos.filter(dat => dat.EQU_ID == key))
                break;
            case '4':
                setCurrentData(dataVisitasSeguimientos.filter(dat => dat.EMP_ID == key))
                break;
        }
        setChartTitle(text)
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
                <ChartPreview2 title={chartTitle} titleSize={30} dataa={currentData} mes={currentMonthFilter} anual={currentYearFilter} historico={currentHistorico}/>

                <div className="contSelectsFila">
                    <CheckBox1 text='Ver historico' id={1} changeFunction={handleChangeCheckBox}/>
                    <Select2 
                        dateTipe='mes'
                        changeFunction={handleChangeMeses}
                    />

                    <Select2 
                        dateTipe='año'
                        changeFunction={handleChangeAños}
                    />
                </div>
            </ChartDetailContent>
            {
                currentGroupFilter == 0 && rol != 'VENTAS'
                ?
                    <SingleLayout padding={'4rem'} color={'#f9f9f9'}>
                          <Lottie animationData={buscaAlgo}/>
                    </SingleLayout>

                :currentGroupFilter == 1
                    ?
                        <div className="resultsCont">
                            {basedData.map( data =>(
                                <Result 
                                    clickFunction={e=>{clickFunction(e,data.CIU_ID,data.CIU_CIUDAD)}} 
                                    SCSS="Result-ciudades" 
                                    text={`${data.CIU_CIUDAD} (${data.CIU_ID})`} 
                                    key={data.CIU_ID}
                                />
                            ))}
                        </div>

                    :currentGroupFilter == 2
                        ?
                            <div className="resultsCont">
                                {basedData.map( data =>(
                                    <Result 
                                        clickFunction={e=>{clickFunction(e,data.ZON_ID,data.ZON_ZONA)}} 
                                        SCSS="Result-zonas" 
                                        text={`${data.ZON_ZONA} (${data.ZON_ID})`} 
                                        key={data.ZON_ID} 
                                    />
                                ))}
                            </div>
                        :currentGroupFilter == 3
                            ?
                                <div className="resultsCont">
                                    {basedData.map( data =>(
                                        <Result 
                                            clickFunction={e=>{clickFunction(e,data.EQU_ID,data.EQU_EQUIPO)}} 
                                            SCSS="Result-equipos"
                                            text={`${data.EQU_EQUIPO} - Lider: ${data.EMP_NOMBRE} ${data.EMP_APELLIDO} (${data.EMP_ID})`} 
                                            key={data.EQU_ID} 
                                        />
                                    ))}
                                </div>
                            :currentGroupFilter == 4
                                ?
                                    <div className="resultsCont">
                                        {basedData.map( data =>(
                                            <Result 
                                                clickFunction={e=>{clickFunction(e,data.EMP_ID,`${data.EMP_NOMBRE} ${data.EMP_APELLIDO}`)}} 
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

export default ChartDetail7