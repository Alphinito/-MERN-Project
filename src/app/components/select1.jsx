import React from "react"
import Cookies from "universal-cookie/cjs/Cookies"

const cookies = new Cookies
const rol = cookies.get('ROL',{})

const Select1 = (props) => {
    return (
        <select name={props.id} id={props.id} className="Select1" onChange={props.changeFunction}>
            {
            
                rol == 'ADMIN'
                ?
                    <>
                    <option value="0" className="optionSelect1">Global</option>
                    <option value="1" className="optionSelect1">Ciudades</option>
                    <option value="2" className="optionSelect1">Zonas</option>
                    <option value="3" className="optionSelect1">Equipos</option>
                    <option value="4" className="optionSelect1">Individual</option>
                    </>
                :rol == 'MERCADEO'
                    ?
                        <>
                        <option value="0" className="optionSelect1">Global</option>
                        <option value="1" className="optionSelect1">Ciudades</option>
                        <option value="2" className="optionSelect1">Zonas</option>
                        <option value="3" className="optionSelect1">Equipos</option>
                        <option value="4" className="optionSelect1">Individual</option>
                        </>
                    :rol == 'LIDER'
                        ?
                            <>
                            <option value="0" className="optionSelect1">Global</option>
                            <option value="3" className="optionSelect1">Equipos</option>
                            <option value="4" className="optionSelect1">Individual</option>
                            </>
                        :null
                
            }
        </select>
    )
}

export default Select1