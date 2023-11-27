import './Botao.css'

const Botao = (props) => {
    return (<button className='botao'>
        {props.children} {/*Neste children, eu não limito qual dado é inserido no botão como seria com o 'props.texto'... podendo botar icones também por exemplo.*/}
    </button>)
}

export default Botao