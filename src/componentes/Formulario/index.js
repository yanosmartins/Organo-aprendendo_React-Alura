import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = (props) => {

    // const times = [
    //     'Programação',
    //     'Front-End',
    //     'Data Science',
    //     'Devops',
    //     'UX e Design',
    //     'Mobile',
    //     'Inovação e Gestão'
    // ]

    const [nome, SetNome] = useState('')
    const [cargo, SetCargo] = useState('')
    const [imagem, SetImagem] = useState('')
    const [time, SetTime] = useState('')


    const aoSalvar = (evento) => { //CRIANDO UMA FUNÇÂO
        evento.preventDefault() //aqui estamos previnindo o comportamento padrão.
        // console.log('Form foi submetido =>', nome, cargo, imagem, time)
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem: imagem, //é a mesma coisa do que escrever só imagem
            time
        })
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>

                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" valor={nome} aoAlterado={valor => SetNome(valor)} />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" valor={cargo} aoAlterado={valor => SetCargo(valor)} />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" valor={imagem} aoAlterado={valor => SetImagem(valor)} />
                <ListaSuspensa label='Times' itens={props.times} valor={time} aoAlterado={valor => SetTime(valor)} />
                {/* <Botao texto='Criar Card'/>   Uma forma de fazer o botão*/}
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )

}
export default Formulario