import React, {useEffect, useState} from "react"
import '../../../../public/styles/results.scss'
import Lottie from "lottie-react"
import globalAnimation from '../../../../assets/animations/global.json'
import { apiGET } from "../../../hooks/methods"
import { VisitasRealizadasDia } from "../../../logic/filter"
import citys from '../../../../assets/city.png'
import zone from '../../../../assets/zone.png'
import teams from '../../../../assets/group.png'
import unic from '../../../../assets/unic.png'

const Result = (props) => {

    const [dias,setDias] = useState()

    useEffect(()=>{
        async function bridge(){
            const data = await apiGET(`charts-web/num-visitas-ciudad/${props.dataDia}`)
            const dia = VisitasRealizadasDia(data)
            console.log(dia)
            setDias(dia)
        }
        bridge()
    },[])
    
    return (
        <>
            {
                props.SCSS == 'Result-gobal'
                ?
                    <div className={props.SCSS}>
                        <p className="bigTitle">Datos Globales</p>
                            <div className="animationCont">
                                <Lottie animationData={globalAnimation}/>
                            </div>
                        <i className="">{props.text}</i>
                        <h2 className="bigTitle">{props.dia}</h2>
                    </div>
                :props.SCSS == 'Result-ciudades'
                    ?
                        <div className={props.SCSS} style={{ backgroundImage:`url(${citys})` }}>
                            <p className="Text">{props.text}</p>
                            <div className="hoyCont">
                                <p className="Text">Hoy:</p>
                                <p className="NormalTextBlue">{dias||'...'}</p>
                            </div>
                            
                        </div>
                    :props.SCSS == 'Result'
                        ?
                            <div className={props.SCSS}>
                                <p className="Text">{props.text}</p>
                                <div className="hoyCont">
                                    <p className="Text">Hoy:</p>
                                    <p className="NormalTextBlue">{dias||'...'}</p>
                                </div>
                                
                            </div>
                        :props.SCSS == 'Result-ciudades'
                            ?
                                <div className={props.SCSS} style={{ backgroundImage:`url(${image})` }}>
                                    <p className="Text">{props.text}</p>
                                    <div className="hoyCont">
                                        <p className="Text">Hoy:</p>
                                        <p className="NormalTextBlue">{dias||'...'}</p>
                                    </div>
                                    
                                </div>
                            :props.SCSS == 'Result-ciudades'
                                ?
                                    <div className={props.SCSS} style={{ backgroundImage:`url(${image})` }}>
                                        <p className="Text">{props.text}</p>
                                        <div className="hoyCont">
                                            <p className="Text">Hoy:</p>
                                            <p className="NormalTextBlue">{dias||'...'}</p>
                                        </div>
                                        
                                    </div>
                                :null
            }
        </>
    )
}

export default Result