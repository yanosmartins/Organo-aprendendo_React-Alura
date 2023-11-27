import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {  //isso é uma arrow function ||props é o nome comum pra essa variavel de propriedades.
    
    

    const aoDigitado =(evento) => {
        props.aoAlterado(evento.target.value)
    }
    
    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}
export default CampoTexto