import './CampoTexto.css'

const CampoTexto = (props) => {  //isso é uma arrow function ||props é o nome comum pra essa variavel de propriedades.
    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input  placeholder={props.placeholder}/>
        </div>
    )
}
export default CampoTexto