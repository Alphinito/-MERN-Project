import React,{useState,useContext, useEffect} from "react";
import Input1 from "../components/input";
import { ChartsContext } from "../context/chartsContext";
const BoardVisitsResults = () => {

    const {dataVisitas, dataVisitasRealizadas, dataVisitasSeguimientos, busqueda, setBusqueda} = useContext(ChartsContext)
    const [currentData, setCurrentData] = useState(dataVisitas)
    const [currentPagination, setCurrentPagination] = useState(0)
    const pagRange = 25

    const handleChange = async e => {
        setBusqueda(e.target.value)
    }

    const nextPage = () => {
        setCurrentPagination(currentPagination+pagRange)
    }

    const prevPage = () => {
        setCurrentPagination(currentPagination-pagRange)
    }

    useEffect(()=>{//-----------------------------------------------------------------------------------|USE EFECT FOR UPDATE
        busqueda
        ?setCurrentData(dataVisitas.filter(res => res.VIS_ID.toString().toLowerCase().includes(busqueda.toLowerCase()) || res.EMP_NOMBRE.toLowerCase().includes(busqueda.toLowerCase()) || res.EMP_APELLIDO.toLowerCase().includes(busqueda.toLowerCase()) || res.EMP_CEDULA.toString().toLowerCase().includes(busqueda.toLowerCase()) || res.CIU_CIUDAD.toLowerCase().includes(busqueda.toLowerCase()) || res.ZON_ZONA.toString().toLowerCase().includes(busqueda.toLowerCase()) || res.CLI_NOMBRE.toLowerCase().includes(busqueda.toLowerCase()) || res.CLI_NIT.toString().toLowerCase().includes(busqueda.toLowerCase()) || res.EQU_EQUIPO.toLowerCase().includes(busqueda.toLowerCase())))
        :setCurrentData(dataVisitas)
    },[busqueda])

    return(
        <div className="BoardVisitsResultsCont">
            <Input1 margin='no' text='Busqueda...' changeFuncion={handleChange}/> <p className="IndicText2">{`Real | Seguimiento`}</p>
            <p className="IndicText2">{`Resultados: ${currentData.length}`}</p>
            {currentData.map(data =>(
               <div className="ResultVisitas" key={data.VIS_ID}>
                    <p className="Especialista">{`${data.EMP_NOMBRE} ${data.EMP_APELLIDO} - ${data.EMP_CEDULA} (${data.CIU_CIUDAD}) (${data.ZON_ZONA}) (${data.EQU_EQUIPO})`}</p>
                    <p className="Razon">{`${data.MOT_MOTIVO} | ${data.VIS_FECHA ? `Planeado: ${data.VIS_FECHA.slice(0,10)}` : 'Realizado:'} - ${data.VIS_HORA_INICIO ? data.VIS_HORA_INICIO.slice(0,5) : dataVisitasRealizadas.filter(res => res.VIS_ID == data.VIS_ID)[0]['REA_FECHA'].slice(0,10)} | #${data.VIS_ID}`}</p>
                    <p className="Cliente">{`${data.CLI_NOMBRE} - (${data.CLI_NIT})`}</p>
                    {
                        //Indicador visita es real
                        dataVisitasRealizadas.filter(res => res.VIS_ID == data.VIS_ID).length >= 1
                        ?<div className="statusRealEcho"></div>
                        :<div className="statusRealPendiente"></div>
                    }
                    {
                        //Indicador visita tiene seguimiento
                        dataVisitasSeguimientos.filter(res => res.VIS_ID == data.VIS_ID).length >= 1
                        ?<div className="statusSegEcho"></div>
                        :<div className="statusSegPendiente"></div>
                    }
                </div> 
            ))}
            <div className="buttonsPagination">
                <button className="pagButtonPrev" onClick={nextPage}>Anterior</button>
                <button className="pagButtonNext" onClick={prevPage}>Siguiente</button>

            </div>
        </div>
    )

}

export default BoardVisitsResults