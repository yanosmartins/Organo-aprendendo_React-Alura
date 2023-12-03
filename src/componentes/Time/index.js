import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria } //alternativa de atribuição de estilo
    //dentro deste estilo temos duas chaves pois dentro de uma, o react espera receber uma variavel... dentro de duas ele passa a receber um objeto
    return (
        (props.colaboradores.length > 0) ? <section className='time' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }} >{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador corFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
            </div>
        </section>
            : ''
    )

}

export default Time

// atenção aos parenteses .. no jsx, o condicional é apenas definido por sua condição, (se tamanho dos colaboradores for maior que zero)
// e os && no lugar do '?' como "faça:"
//nao precisa dos parenteses
//nesse caso decidi fazer um iternário usando o ponto de interrogação e os dois pontos com o 'senao' impriminto ''.