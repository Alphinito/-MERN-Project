import React,{useState,useContext, useEffect} from "react";
import Input1 from "../components/input";
import Select1 from "../components/select1";
import { ChartsContext } from "../context/chartsContext";
const BoardVisitsResults = () => {

    const {dataVisitas, busqueda, setBusqueda} = useContext(ChartsContext)
    const [currentData, setCurrentData] = useState(dataVisitas)

    const handleChange = async e => {
        setBusqueda(e.target.value)
    }

    useEffect(()=>{//-----------------------------------------------------------------------------------|USE EFECT FOR UPDATE
        busqueda
        ?setCurrentData(dataVisitas.filter(res => res.VIS_ID.toString().toLowerCase().includes(busqueda.toLowerCase()) || res.EMP_NOMBRE.toLowerCase().includes(busqueda.toLowerCase()) ||res.EMP_APELLIDO.toLowerCase().includes(busqueda.toLowerCase()) ||res.EMP_CEDULA.toString().toLowerCase().includes(busqueda.toLowerCase()) ||res.CIU_CIUDAD.toLowerCase().includes(busqueda.toLowerCase()) ||res.ZON_ZONA.toString().toLowerCase().includes(busqueda.toLowerCase()) || res.CLI_NOMBRE.toLowerCase().includes(busqueda.toLowerCase()) ||res.CLI_NIT.toString().toLowerCase().includes(busqueda.toLowerCase()) || res.EQU_EQUIPO.toLowerCase().includes(busqueda.toLowerCase())))
        :setCurrentData(dataVisitas)
    },[busqueda])

    return(
        <div className="BoardVisitsResultsCont">
            <Input1 margin='no' text='Busqueda...' changeFuncion={handleChange}/> <p className="IndicText2">{`Real | Seguimiento`}</p>

            {currentData.map(data =>(
               <div className="ResultVisitas">
                    <p className="Especialista">{`${data.EMP_NOMBRE} ${data.EMP_APELLIDO} - ${data.EMP_CEDULA} (${data.CIU_CIUDAD}) (${data.ZON_ZONA}) (${data.EQU_EQUIPO})`}</p>
                    <p className="Razon">{`${data.MOT_MOTIVO} - ${data.VIS_FECHA ? data.VIS_FECHA.slice(0,10) : 'real'} - ${data.VIS_HORA_INICIO ? data.VIS_HORA_INICIO.slice(0,5) : 'real'} --#${data.VIS_ID}`}</p>
                    <p className="Cliente">{`${data.CLI_NOMBRE} - (${data.CLI_NIT})`}</p>
                    <div className="statusReal"></div>
                    <div className="statusSeguimiento"></div>
                </div> 
            ))}

        </div>
    )

}

export default BoardVisitsResults