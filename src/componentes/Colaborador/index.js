import './Colaborador.css'

const Colaborador = ({ nome, imagem, cargo, corFundo }) => { //aqui transformamos os objetos vindos da props ao inves de usar a props em si... um diferente coding style
    return (<div className='colaborador'>
        <div className='cabecalho' style={{ backgroundColor: corFundo }}>
            <img src={imagem} alt={nome} />
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </div>

    </div>)
}

export default Colaborador