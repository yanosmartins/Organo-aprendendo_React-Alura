import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    
    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento=> props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}>
            <option disabled selected></option>
                {props.itens.map(item => <option key={item}>{item}</option>)} {/* aqui criei um map, que seria equivalente a um foreach do js. Porém esse map além de passar por todos os itens, ele renderiza e os devolve renderizados.. OU ALGO ASSIM */}
            </select> 
        </div>
    )
}
 
export default ListaSuspensa