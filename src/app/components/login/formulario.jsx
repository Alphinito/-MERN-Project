import React, {useState} from "react"
import '../../../../public/styles/login.scss'
import { LogIn } from "../../../logic/login"
import CompButton1 from "../Button1.jsx"
import Input1 from "../input"

const CompFormularioLogin = () => {

    const  [inUser,setInUser] = useState('')
    const  [inPass,setInPass] = useState('')
    
    const handleChange = async e => {
        e.target.id == 'in_user' ? setInUser(e.target.value) : setInPass(e.target.value)
    }

    return (
        <div className="der_cont_login">
            <h3 className="Title">Login</h3>
            <Input1 type="text" text="Usuario" id="in_user" changeFuncion={handleChange}/>
            <Input1 type="password" text="Clave" id="in_pass" changeFuncion={handleChange}/>
            <CompButton1 text="Ingresar" clickFunction={()=>LogIn(inUser,inPass)}/>
        </div>
    )
}

export default CompFormularioLogin