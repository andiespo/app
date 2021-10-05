import ItemDetailContainer from "./ItemDetailContainer";

const ItemDetail=  ({producto}) => {
    return (
        <div>
                <h2>{producto.titulo}</h2>
                <p>producto.descripcion</p>
        </div>
    )
}
    


export default ItemDetail