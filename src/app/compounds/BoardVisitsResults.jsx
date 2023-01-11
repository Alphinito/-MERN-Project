import React,{useState,useContext, useEffect} from "react";
import Input1 from "../components/input";
import { ChartsContext } from "../context/chartsContext";
const BoardVisitsResults = () => {

    const pagRange = 25
    const {dataVisitas, dataVisitasRealizadas, dataVisitasSeguimientos, busqueda, setBusqueda} = useContext(ChartsContext)
    const [currentResults, setCurrentResults] = useState(dataVisitas)
    const [currentPaginationI, setCurrentPaginationI] = useState(0)
    const [currentPaginationE, setCurrentPaginationE] = useState(pagRange)
    const [nextButtonState, setNextButtonState] = useState(false)
    const [prevButtonState, setPrevButtonState] = useState(false)
    const [currentDataPage, setCurrentDataPage] = useState(dataVisitas.slice(currentPaginationI,currentPaginationE))

    const handleChange = async e => {
        setBusqueda(e.target.value)
        setCurrentResults(currentDataPage)
    }

    const nextPage = () => {
        setCurrentPaginationI(currentPaginationI+pagRange)
        setCurrentPaginationE(currentPaginationE+pagRange)
        setPrevButtonState(false)
    }
    
    const prevPage = () => {
        setCurrentPaginationI(currentPaginationI-pagRange)
        setCurrentPaginationE(currentPaginationE-pagRange)
        setNextButtonState(false)
    }
    useEffect(()=>{//-----------------------------------------------------------------------------------|USE EFECT FOR UPDATE
        setCurrentDataPage(dataVisitas.slice(currentPaginationI,currentPaginationE))
        
        currentPaginationE >= dataVisitas.length
        ?setNextButtonState(true)
        :null
    
        currentPaginationI <= 0
        ?setPrevButtonState(true)   
        :null

    },[currentPaginationI])

    useEffect(()=>{//-----------------------------------------------------------------------------------|USE EFECT FOR UPDATE
        if(busqueda)
        {
            setCurrentDataPage(dataVisitas.filter(res => res.VIS_ID.toString().toLowerCase().includes(busqueda.toLowerCase()) || res.EMP_NOMBRE.toLowerCase().includes(busqueda.toLowerCase()) || res.EMP_APELLIDO.toLowerCase().includes(busqueda.toLowerCase()) || res.EMP_CEDULA.toString().toLowerCase().includes(busqueda.toLowerCase()) || res.CIU_CIUDAD.toLowerCase().includes(busqueda.toLowerCase()) || res.ZON_ZONA.toString().toLowerCase().includes(busqueda.toLowerCase()) || res.CLI_NOMBRE.toLowerCase().includes(busqueda.toLowerCase()) || res.CLI_NIT.toString().toLowerCase().includes(busqueda.toLowerCase()) || res.EQU_EQUIPO.toLowerCase().includes(busqueda.toLowerCase())))
            setNextButtonState(true)
            setCurrentPaginationI(0)
            setCurrentPaginationE(pagRange)
        }else{
            setCurrentDataPage(dataVisitas.slice(currentPaginationI,currentPaginationE))
            setCurrentResults(dataVisitas)
            setNextButtonState(false)
        }
    },[busqueda])

    useEffect(()=>{
        return()=>{//SE EJECUTA AL FINAL
            setBusqueda('')
        }
    },[])

    return(
        <div className="BoardVisitsResultsCont">
            <Input1 margin='no' text='Busqueda...' changeFuncion={handleChange}/> <p className="IndicText2">{`Real | Seguimiento`}</p>
            <p className="IndicText2">{`Resultados: ${currentResults.length}`}</p>
            {currentDataPage.map(data =>(
               <div className="ResultVisitas" key={data.VIS_ID}>
                    <p className="Especialista">{`${data.EMP_NOMBRE} ${data.EMP_APELLIDO} - ${data.EMP_CEDULA} (${data.CIU_CIUDAD}) (${data.ZON_ZONA}) (${data.EQU_EQUIPO})`}</p>
                    <div>
                        <p style={{display:"inline-block"}} className="Razon">{`${data.MOT_MOTIVO} ${data.VIS_FECHA ? `Planeado: ${data.VIS_FECHA.slice(0,10)}` : 'Realizado:'} - ${data.VIS_HORA_INICIO ? data.VIS_HORA_INICIO.slice(0,5) : dataVisitasRealizadas.filter(res => res.VIS_ID == data.VIS_ID)[0]['REA_FECHA'].slice(0,10)} - `}</p>

                        <i style={{fontSize:'14px', fontWeight:500}}>|</i>

                        <p style={{display:"inline-block"}} className="Razon">{`- Observación: ${data.VIS_OBSERVACION ? data.VIS_OBSERVACION : '...'} -`}</p>

                        {
                            dataVisitasSeguimientos.filter(res => res.VIS_ID == data.VIS_ID).length >= 1
                            ?
                            <>
                            <i style={{fontSize:'14px', fontWeight:500}}>|</i>

                            <p style={{display:"inline-block"}} className="Razon">{`- Resultado:  ${ dataVisitasSeguimientos.filter(res => res.VIS_ID == data.VIS_ID).length >= 1 ? dataVisitasSeguimientos.filter(res => res.SEG_VISITA == data.VIS_ID)[0]['RES_RESULTADO'] : ' ... '} -`}</p>

                            <i style={{fontSize:'14px', fontWeight:500}}>|</i>

                            <p style={{display:"inline-block"}} className="Razon">{`- Razón:  ${ dataVisitasSeguimientos.filter(res => res.VIS_ID == data.VIS_ID).length >= 1 ? dataVisitasSeguimientos.filter(res => res.SEG_VISITA == data.VIS_ID)[0]['RES_RAZON'] : ' ... '} -`}</p>
                            
                            <i style={{fontSize:'14px', fontWeight:500}}>|</i>

                            <p style={{display:"inline-block"}} className="Razon">{`- Res. Observación:  ${ dataVisitasSeguimientos.filter(res => res.VIS_ID == data.VIS_ID).length >= 1 ? dataVisitasSeguimientos.filter(res => res.SEG_VISITA == data.VIS_ID)[0]['SEG_OBSERVACION'] : ' ... '} -`}</p>
                            </>
                            :null
                        }
                        <i style={{fontSize:'14px', fontWeight:500}}>|</i>

                        <i style={{fontSize:'14px', fontWeight:500}}>{` #${data.VIS_ID}`}</i>
                    </div>
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
            <p className="IndicText2">{busqueda ? `Viendo resultados de: ${busqueda}`:`Viendo de ${currentPaginationI} - ${currentPaginationE}`}</p>
            <div className="buttonsPagination">
                <button disabled={prevButtonState} className="TextButton" onClick={prevPage}>Anterior</button>
                <button disabled={nextButtonState} className="TextButton" onClick={nextPage}>Siguiente</button>

            </div>
        </div>
    )

}

export default BoardVisitsResults