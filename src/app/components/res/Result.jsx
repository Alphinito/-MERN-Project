import React, { useState, useEffect } from "react"
import '../../../../public/styles/results.scss'
import Lottie from "lottie-react"
import globalAnimation from '../../../../assets/animations/global.json'
import myData from '../../../../assets/animations/myData.json'
import teamAnimation from '../../../../assets/animations/team.json'
import { apiGET } from "../../../hooks/methods"
import { VisitasRealizadasDia, VisitasRealizadasMes, VisitasRealizadasAnual, VisitasRealizadasMAIN } from "../../../logic/filter"
import citys from '../../../../assets/city.png'
import zone from '../../../../assets/zone.png'
import teams from '../../../../assets/group.png'
import unic from '../../../../assets/unic.png'
import Cookies from "universal-cookie/cjs/Cookies"
import Select2 from "../select2"

const Result = (props) => {

    const cookies = new Cookies
    const rol = cookies.get('ROL',{})
    const [dias,setDias] = useState(0)
    const [mes,setMes] = useState(0)
    const [anual,setAnual] = useState(0)
    const [historico,setHistorico] = useState(0)

    if(props.dataDia){
        async function bridge(){
            let data
            switch (props.SCSS) {
                case 'Result-ciudades':
                    data = await apiGET(`charts-web/num-visitas-ciudad/${props.dataDia}`)
                    break;
        
                case 'Result-zonas':
                    data = await apiGET(`charts-web/num-visitas-zona/${props.dataDia}`)
                    break;
        
                case 'Result-equipos':
                    data = await apiGET(`charts-web/num-visitas-equipo/${props.dataDia}`)
                    break;
        
                case 'Result':
                    data = await apiGET(`charts-web/num-visitas-reales-empleado/${props.dataDia}`)
                    break;
            }
            setDias(VisitasRealizadasDia(data,props.diaFilter,props.mesFilter,props.añoFilter))
            setMes(VisitasRealizadasMes(data,props.mesFilter,props.añoFilter))
            setAnual(VisitasRealizadasAnual(data,props.añoFilter))
            setHistorico(VisitasRealizadasMAIN(data))
        }
        bridge()
    }
    
    let prueba = (icon) => {
        if(props.dataDia){
            return (
                <div className="hoyCont">
                    <p className="Text">Día:</p>
                    <p className="NormalTextBlue">{dias}</p>
                    <p className="Text">Mes:</p>
                    <p className="NormalTextBlue">{mes}</p>
                    <p className="Text">Año:</p>
                    <p className="NormalTextBlue">{anual}</p>
                    <p className="Text">Todo:</p>
                    <p className="NormalTextBlue">{historico}</p>
                    <img src={icon} alt="icon" className="iconResult" />
                </div>
            )  
        }

    }

    return (
        <>
            {
                props.SCSS == 'Result-gobal'
                ?
                    rol == 'VENTAS'
                        ?
                            <div className={props.SCSS} onClick={props.clickFunction}>
                                <p className="bigTitle">Mis datos</p>
                                    <div className="animationCont">
                                        <Lottie animationData={myData} loop={false}/>
                                    </div>
                                <i className="">{props.text} <Select2 dateTipe='dia' changeFunction={props.changeFunctionDia}/></i>
                                <h2 className="bigTitle">{props.dia}</h2>
                            </div>
                        :rol == 'LIDER'
                            ?
                                <div className={props.SCSS} onClick={props.clickFunction}>
                                    <p className="bigTitle">Mis Equipos</p>
                                        <div className="animationCont">
                                            <Lottie animationData={teamAnimation}/>
                                        </div>
                                    <i className="">{props.text} <Select2 dateTipe='dia' changeFunction={props.changeFunctionDia}/></i>
                                <h2 className="bigTitle">{props.dia}</h2>
                                </div>
                            :
                                <div className={props.SCSS} onClick={props.clickFunction}>
                                    <p className="bigTitle">Datos Globales</p>
                                        <div className="animationCont">
                                            <Lottie animationData={globalAnimation}/>
                                        </div>
                                    <i className="">{props.text} <Select2 dateTipe='dia' changeFunction={props.changeFunctionDia}/></i>
                                    <h2 className="bigTitle">{props.dia}</h2>
                                </div>
                :props.SCSS == 'Result-ciudades'
                    ?
                        <div className={props.SCSS} onClick={props.clickFunction}>
                            <p className="Text">{props.text}</p>
                            {prueba(citys)}
                        </div>
                    :props.SCSS == 'Result-zonas'
                        ?
                            <div className={props.SCSS} onClick={props.clickFunction}>
                                <p className="Text">{props.text}</p>
                                {prueba(zone)}
                            </div>
                        :props.SCSS == 'Result-equipos'
                            ?
                                <div className={props.SCSS} onClick={props.clickFunction}>
                                    <p className="Text">{props.text}</p>
                                    {prueba(teams)}
                                </div>
                            :props.SCSS == 'Result'
                                ?
                                    <div className={props.SCSS} onClick={props.clickFunction} data-id={props.dataId}>
                                        <p className="Text">{props.text}</p>
                                        {prueba(unic)}
                                    </div>
                                :null
            }
        </>
    )
}

export default Result