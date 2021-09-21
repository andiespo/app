const ItemCounter = ({titulo}) => {

    const [contador,setContador] = useState(0)
    let titulo = "Mi E-commerce"
    
    return (
        <div className="ItemCounter" id={"id"} >
            <h1>{titulo}</h1>
            <p>Contador:{contador}</p>
            <button onClick= {()=> {onAdd(setContador(contador+1))}}> aumentar contador  </button>
            <contador onAdd ={}/>
        </div>
    )
}


export default ItemCounter