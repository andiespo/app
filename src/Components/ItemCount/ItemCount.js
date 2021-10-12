import { useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemCount=  (onAdd) => {

    useState [contador,setContador]= useState (0)

    const sumar= () =>
        setContador(contador+1);

        const restar= () =>
        setContador(contador-1);    
    return (
        <div>
                <button className="btn btn-dark me-3" onClick={restar}>-</button>
                <span>{contador}</span>
                <button className="btn btn-dark ms-3" onClick={sumar}>+</button>
                <button className="btn btn-dark ms-3" onClick={()=>onAdd()}>Agregar al Carrito</button>
                
        </div>
    )
}
    


export default ItemCount