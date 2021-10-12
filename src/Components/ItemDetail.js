import ItemDetailContainer from "./ItemDetailContainer";
import ItemCount from "./ItemCount/ItemCount";
import { useParams } from "react-router";
import { useContext } from "react";
import context from "./context";


const ItemDetail=  () => {
    const {id}=useParams();
    const item = GetElementById(parseInt(id));

    const [setCarrito] = useContext(context);

    return (
        <div>
                <h2>{producto.titulo}</h2>
                <p>producto.descripcion</p>
                <ItemCount></ItemCount>
        </div>
    )
}
    


export default ItemDetail