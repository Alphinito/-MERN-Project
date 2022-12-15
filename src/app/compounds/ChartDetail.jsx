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

    const {busqueda, setBusqueda, dataVisitas, dataVisitasFiltred, visitasMes, setVisitasMes, visitasAnual, setVisitasAnual, visitasDia, setvisitasDia} = useContext(ChartsContext)

    const handleChange = async e => {
        setBusqueda(e.target.value)
    }
    let basedData
    if(!busqueda){
        basedData = dataVisitas
    }else{
        const currentDate = new Date();
        basedData = dataVisitas.filter(res => res.EMP_NOMBRE.toLowerCase().includes(busqueda.toLowerCase()) || res.EMP_APELLIDO.toLowerCase().includes(busqueda.toLowerCase())) //FILTRO DE BUSQUEDA
        console.log('BUSQUEDA: '+busqueda)
        console.log(basedData) 
    }
    useEffect( () => {//-------------------------------------------------|USE EFECT DE ACTUALIZACIÓN
        setVisitasMes(VisitasRealizadasMes(basedData))
        setVisitasAnual(VisitasRealizadasAnual(basedData))
    }, [busqueda])

    useEffect(()=>{//----------------------------------------------------|USE EFECT DE ARRANQUE Y FIN
        setVisitasMes(VisitasRealizadasMes(dataVisitas))
        setVisitasAnual(VisitasRealizadasAnual(dataVisitas))
        //setvisitasDia(dataVisitas)
        return()=>{//SE EJECUTA AL FINAL
            setBusqueda('') 
        }  
    },[])

    return (
        <BoardConentDetailLayout>
            <Input1 text="Busqueda..." changeFuncion={handleChange}/>
            <Select1 text="Elije una opción"/>
            <ChartDetailContent>
                {
                   basedData.map( data =>(
                        <Result text={data.EMP_NOMBRE+' '+data.EMP_APELLIDO+' ('+data.VIS_FECHA+')'} key={data.VIS_ID}/>
                   ))

                }
            </ChartDetailContent>
            <TimeIndicator mes={visitasMes} anual={visitasAnual} dia={visitasDia}/>
        </BoardConentDetailLayout>
    )
}

export default ChartDetail