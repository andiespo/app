import React from "react";
import { Card } from "../Card/Card";
import { GetProdbyCat } from "../utils/GetProdbyCat";
import './ProductoList.css';

export const ProductoList = (categoria) => {

    const producto = GetProdbyCat(categoria);
    return (
        <div className="producto-container">
            <ul>
                {
                    producto.map (producto=> <Card 
                        key={producto.id}
                        id={producto.id} 
                        temporada={producto.temporada} 
                        categoria ={producto.categoria}/>)
                }
            </ul>
        </div>
    )
}