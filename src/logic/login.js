import { apiGET } from "../hooks/methods"
import Cookies from "universal-cookie"
const cookies = new Cookies();

export const LogIn = async(user, pass) => {

    await apiGET(`log/web/${user}/${pass}`)
    .then(response => {
        return response
    })
    .then(response=>{
        if(response.length > 0){
            var res = response[0]
            cookies.set('EMP_ID', res.EMP_ID, {path: "/"})
            cookies.set('EMP_CARGO', res.EMP_CARGO, {path: "/"})
            cookies.set('EMP_CEDULA', res.EMP_CEDULA, {path: "/"})
            cookies.set('EMP_NOMBRE', res.EMP_NOMBRE, {path: "/"})
            cookies.set('EMP_APELLIDO', res.EMP_APELLIDO, {path: "/"})
            cookies.set('EMP_CORREO', res.EMP_CORREO, {path: "/"})
            cookies.set('EMP_ACTIVO', res.EMP_ACTIVO, {path: "/"})
            cookies.set('EMP_CENTRO_DE_COSTE', res.EMP_CENTRO_DE_COSTE, {path: "/"})
            cookies.set('EMP_COD_SAP', res.EMP_COD_SAP, {path: "/"})
            cookies.set('EMP_EQUIPO', res.EMP_EQUIPO, {path: "/"})
            cookies.set('EMP_LIDER', res.EMP_LIDER, {path: "/"})
            cookies.set('EMP_ZONA', res.EMP_ZONA, {path: "/"})
            cookies.set('EMP_CIUDAD', res.EMP_CIUDAD, {path: "/"})
            cookies.set('CAR_CARGO', res.CAR_CARGO, {path: "/"})
            cookies.set('EMP_CELULAR', res.EMP_CELULAR, {path: "/"})
            cookies.set('EQU_EQUIPO', res.EQU_EQUIPO, {path: "/"})
            cookies.set('EQU_LIDER', res.EQU_LIDER, {path: "/"})
            cookies.set('ZON_ZONA', res.ZON_ZONA, {path: "/"})
            cookies.set('CIU_CIUDAD', res.CIU_CIUDAD, {path: "/"})

            if(res.EMP_CARGO == 1){
                cookies.set('ROL', 'ADMIN', {path: "/"})
            }else if(res.EMP_CARGO == 3){
                cookies.set('ROL', 'MERCADEO', {path: "/"})
            }else if(res.EMP_CARGO == 4){
                cookies.set('ROL', 'VENTAS', {path: "/"})
            }
            
            window.location.href="./"
        }else{
            alert(`UPSSSSSSSSSSSSSSSSSS ${response} |${response.length}|`)
        }
    })
}

export const ValSesionActual = (page) => {

    if(page == 'login'){
        if(cookies.get('EMP_NOMBRE',{})){
            window.location.href="./"
        }
    }else{
       if(!cookies.get('EMP_NOMBRE',{})){
            window.location.href="./login"
        } 
    }
    

}