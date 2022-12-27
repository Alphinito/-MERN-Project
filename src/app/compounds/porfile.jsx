import React from "react"
import noPhoto from '../../../assets/user.jpg'
import SingleLayout from "../containers/SingleLayout"
import '../../../public/styles/porfile.scss' //SCSS
import Cookies from "universal-cookie"

const Porfile = () => {

    const cookies = new Cookies();

    return (
        <SingleLayout 
            color={'#f9f9f9'}
        >
            <div className="perfilInfoCont">
                <div className="perfilFotoCont">
                    <img src={noPhoto} alt="" className="perfilFoto" />
                    <input type="file" name="" id="" />
                </div>
                <div className="perfilData">
                    <p className="Title">{`${cookies.get('EMP_NOMBRE',{})} ${cookies.get('EMP_APELLIDO',{})}`}</p>
                    <div className="perfilDataEspecific">
                        <p className="titleData">ID: <p className="data">{cookies.get('EMP_ID',{})}</p> </p>
                        <p className="titleData">Cargo: <p className="data">{cookies.get('CAR_CARGO',{})}</p> </p>
                        <p className="titleData">Zona: <p className="data">{cookies.get('ZON_ZONA',{})}</p> </p>
                        <p className="titleData">Correo: <p className="data">{cookies.get('EMP_CORREO',{})}</p> </p>
                        <p className="titleData">Ciudad: <p className="data">{cookies.get('CIU_CIUDAD',{})}</p> </p>
                        <p className="titleData">Centro de coste: <p className="data">{cookies.get('EMP_CENTRO_DE_COSTE',{})}</p> </p>
                        <p className="titleData">SAP: <p className="data">{cookies.get('EMP_COD_SAP',{})}</p> </p>
                        <p className="titleData">Equipo: <p className="data">{cookies.get('EQU_EQUIPO',{})}</p> </p>
                        <p className="titleData">Lider: <p className="data">{cookies.get('EMP_LIDER',{})}</p> </p>
                    </div>

                </div>
            </div>
        </SingleLayout>
    )
}

export default Porfile