import React, {useState} from "react"
import '../../../../public/styles/results.scss'
import Lottie from "lottie-react"
import globalAnimation from '../../../../assets/animations/global.json'
import myData from '../../../../assets/animations/myData.json'
import { apiGET } from "../../../hooks/methods"
import { VisitasRealizadasDia, VisitasRealizadasMes, VisitasRealizadasAnual, VisitasRealizadasMAIN } from "../../../logic/filter"
import citys from '../../../../assets/city.png'
import zone from '../../../../assets/zone.png'
import teams from '../../../../assets/group.png'
import unic from '../../../../assets/unic.png'
import Cookies from "universal-cookie/cjs/Cookies"

const Result = (props) => {

    const cookies = new Cookies
    const rol = cookies.get('ROL',{})
    const [dias,setDias] = useState(0)
    const [mes,setMes] = useState(0)
    const [anual,setAnual] = useState(0)
    const [historico,setHistorico] = useState(0)

    async function bridge(){
        let data
        switch (props.SCSS) {
            case 'Result-ciudades':
                data = await apiGET(`charts-web/num-visitas-ciudad/${props.dataDia}`)
                setDias(VisitasRealizadasDia(data))
                setMes(VisitasRealizadasMes(data))
                setAnual(VisitasRealizadasAnual(data))
                setHistorico(VisitasRealizadasMAIN(data))
                break;
    
            case 'Result-zonas':
                data = await apiGET(`charts-web/num-visitas-zona/${props.dataDia}`)
                setDias(VisitasRealizadasDia(data))
                setMes(VisitasRealizadasMes(data))
                setAnual(VisitasRealizadasAnual(data))
                setHistorico(VisitasRealizadasMAIN(data))
                break;
    
            case 'Result-equipos':
                data = await apiGET(`charts-web/num-visitas-equipo/${props.dataDia}`)
                setDias(VisitasRealizadasDia(data))
                setMes(VisitasRealizadasMes(data))
                setAnual(VisitasRealizadasAnual(data))
                setHistorico(VisitasRealizadasMAIN(data))
                break;
    
            case 'Result':
                data = await apiGET(`charts-web/num-visitas-reales-empleado/${props.dataDia}`)
                setDias(VisitasRealizadasDia(data))
                setMes(VisitasRealizadasMes(data))
                setAnual(VisitasRealizadasAnual(data))
                setHistorico(VisitasRealizadasMAIN(data))
                break;
        }
    }
    bridge()

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
                                <i className="">{props.text}</i>
                                <h2 className="bigTitle">{props.dia}</h2>
                            </div>
                        :rol == 'LIDER'
                            ?
                                <div className={props.SCSS} onClick={props.clickFunction}>
                                    <p className="bigTitle">Mis Equipos</p>
                                        <div className="animationCont">
                                            <Lottie animationData={globalAnimation}/>
                                        </div>
                                    <i className="">{props.text}</i>
                                <h2 className="bigTitle">{props.dia}</h2>
                                </div>
                            :
                                <div className={props.SCSS} onClick={props.clickFunction}>
                                    <p className="bigTitle">Datos Globales</p>
                                        <div className="animationCont">
                                            <Lottie animationData={globalAnimation}/>
                                        </div>
                                    <i className="">{props.text}</i>
                                    <h2 className="bigTitle">{props.dia}</h2>
                                </div>
                :props.SCSS == 'Result-ciudades'
                    ?
                        <div className={props.SCSS} onClick={props.clickFunction}>
                            <p className="Text">{props.text}</p>
                            <div className="hoyCont">
                                <p className="Text">Hoy:</p>
                                <p className="NormalTextBlue">{dias||'...'}</p>
                                <p className="Text">Mes:</p>
                                <p className="NormalTextBlue">{mes||'...'}</p>
                                <p className="Text">Año:</p>
                                <p className="NormalTextBlue">{anual||'...'}</p>
                                <p className="Text">Todo:</p>
                                <p className="NormalTextBlue">{historico||'...'}</p>
                                <img src={citys} alt="icon" className="iconResult" />
                            </div>
                            
                        </div>
                    :props.SCSS == 'Result-zonas'
                        ?
                            <div className={props.SCSS} onClick={props.clickFunction}>
                                <p className="Text">{props.text}</p>
                                <div className="hoyCont">
                                    <p className="Text">Hoy:</p>
                                    <p className="NormalTextBlue">{dias||'...'}</p>
                                    <p className="Text">Mes:</p>
                                    <p className="NormalTextBlue">{mes||'...'}</p>
                                    <p className="Text">Año:</p>
                                    <p className="NormalTextBlue">{anual||'...'}</p>
                                    <p className="Text">Todo:</p>
                                    <p className="NormalTextBlue">{historico||'...'}</p>
                                    <img src={zone} alt="icon" className="iconResult" />
                                </div>
                                
                            </div>
                        :props.SCSS == 'Result-equipos'
                            ?
                                <div className={props.SCSS} onClick={props.clickFunction}>
                                    <p className="Text">{props.text}</p>
                                    <div className="hoyCont">
                                        <p className="Text">Hoy:</p>
                                        <p className="NormalTextBlue">{dias||'...'}</p>
                                        <p className="Text">Mes:</p>
                                        <p className="NormalTextBlue">{mes||'...'}</p>
                                        <p className="Text">Año:</p>
                                        <p className="NormalTextBlue">{anual||'...'}</p>
                                        <p className="Text">Todo:</p>
                                        <p className="NormalTextBlue">{historico||'...'}</p>
                                        <img src={teams} alt="icon" className="iconResult" />
                                    </div>
                                    
                                </div>
                            :props.SCSS == 'Result'
                                ?
                                    <div className={props.SCSS} onClick={props.clickFunction} data-id={props.dataId}>
                                        <p className="Text">{props.text}</p>
                                        <div className="hoyCont">
                                            <p className="Text">Hoy:</p>
                                            <p className="NormalTextBlue">{dias||'...'}</p>
                                            <p className="Text">Mes:</p>
                                            <p className="NormalTextBlue">{mes||'...'}</p>
                                            <p className="Text">Año:</p>
                                            <p className="NormalTextBlue">{anual||'...'}</p>
                                            <p className="Text">Todo:</p>
                                            <p className="NormalTextBlue">{historico||'...'}</p>
                                            <img src={unic} alt="icon" className="iconResult" />
                                        </div>
                                        
                                    </div>
                                :null
            }
        </>
    )
}

export default Result