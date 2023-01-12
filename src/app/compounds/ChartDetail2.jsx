import React, { useContext, useEffect, useState} from "react"
import ChartClientes from '../components/charts/ChartClientes'
import '../../../public/styles/board.scss'
import BoardConentDetailLayout from "../containers/BoardContentDetail"
import Input1 from "../components/input"
import ChartDetailContent from "../containers/ChartDetailContent"
import Result from "../components/res/Result"
import VisitsList from "../components/VisitsList"
import { ChartsContext } from "../context/chartsContext"
import Cookies from "universal-cookie/cjs/Cookies"

const ChartDetail2 = () => {

    const cookies = new Cookies
    const rol = cookies.get('ROL',{})
    const {dataVisitas,dataClientes, busqueda, setBusqueda, currentGroupFilter, dataVisitasSeguimientos} = useContext(ChartsContext)
    const [currentData, setCurrentData] = useState(dataVisitas)
    const [chartTitle, setChartTitle] = useState('Seleccione un cliente')
    const [clienteNit, setClienteNit] = useState(0)

    //--------------------------------------------------------------------------------------|MAIN FUNCTION FOR FILTER AND SEARCH
    function filterAndSearch(){
        let basedDataa
            if(!busqueda){
                basedDataa = dataClientes
            }else{
                basedDataa = dataClientes.filter(res => res.CLI_NOMBRE.toLowerCase().includes(busqueda.toLowerCase()) || res.CLI_NIT.toString().toLowerCase().includes(busqueda.toLowerCase())) //FILTRO DE BUSQUEDA
            }
        return basedDataa

    }
    let basedData = filterAndSearch()//-----------------------------------------------------|VARIABLE EN LA QUE SE BASAN LOS RESULTADOS QUE SE MUESTRAN

    const handleChange = async e => {//----------------------------------|CATCH INPUT SEARCH
        setBusqueda(e.target.value)
    }

    useEffect(() => {//-------------------------------------------------|UPDATE USE EFECT
        setCurrentData(dataVisitasSeguimientos)
    }, [busqueda])

    useEffect(()=>{//----------------------------------------------------|USE EFECT START AND END
        return()=>{//SE EJECUTA AL FINAL
            setBusqueda('')
        }  
    },[])

    const clickFunction = (e,key,text) =>{//----------------------------------|WHEN CLICK A RESULT
        setCurrentData(dataVisitas.filter(dat => dat.CLI_NIT == key))
        setClienteNit(key)
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
                        <p className="IndicText">| Clientes</p>
                        </>
            }
            <ChartDetailContent>
                <ChartClientes title={chartTitle} titleSize={30} dataMain={currentData} cliente={clienteNit}/>
                {
                    !clienteNit
                    ?null
                    :<VisitsList dataMain={currentData}/>
                }
                
            </ChartDetailContent>
            {
                currentGroupFilter == 0 && rol != 'VENTAS'
                ?
                    <div className="resultsCont">
                        {basedData.map( data =>(
                            <Result 
                                clickFunction={e=>{clickFunction(e,data.CLI_NIT,data.CLI_NOMBRE)}} 
                                SCSS="Result-ciudades" 
                                text={`${data.CLI_NOMBRE} (${data.CLI_NIT}) ${data.TIP_TIPO}`} 
                                key={data.CLI_NIT}
                            />
                        ))}
                    </div>

                :null
            }
        </BoardConentDetailLayout>
    )
}

export default ChartDetail2