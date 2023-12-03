import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) =>{
    const css = { backgroundColor: props.corSecundaria } //alternativa de atribuição de estilo
    //dentro deste estilo temos duas chaves pois dentro de uma, o react espera receber uma variavel... dentro de duas ele passa a receber um objeto
    return (
        <section className='time' style={css}> 
            <h3  style={{borderColor: props.corPrimaria}} >{props.nome}</h3> 
            <Colaborador />
        </section>
    )
    
}

export default Time