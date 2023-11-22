import './CampoTexto.css'

const CampoTexto = () => {  //isso é uma arrow function 
    return(
        <div className="campo-texto">
            <label>Nome</label>
            <input  placeholder='Digite o seu nome'/>
        </div>
    )
}
export default CampoTexto