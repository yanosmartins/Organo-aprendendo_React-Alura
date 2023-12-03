import './Colaborador.css'

const Colaborador = ({nome, imagem, cargo}) =>{ //aqui transformamos os objetos vindos da props ao inves de usar a props em si... um diferente coding style
    return (<div className='colaborador'>
        <div className='cabecalho'>
            <img src={imagem} alt ={nome}/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </div>

    </div>)
}

export default Colaborador