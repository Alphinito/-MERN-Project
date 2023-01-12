import React,{useState,useContext, useEffect} from "react";
import Input1 from "../components/input";
import { ChartsContext } from "../context/chartsContext";

const VisitsList = ({dataMain}) => {

    const {dataVisitasRealizadas, dataVisitasSeguimientos} = useContext(ChartsContext)

    return(
        <div className="BoardVisitsResultsCont" style={{marginTop:0}}>

            <p className="IndicText2">{`Visitas: ${dataMain.length}`/*RECUENTO TOTAL DE VISITAS*/}</p>

            {dataMain.map(data =>(
               <div className="ResultVisitas" key={data.VIS_ID} >
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
        </div>
    )
}

export default VisitsList