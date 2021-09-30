import React from "react";
import { GetProdbyNombre } from "../utils/GetProdbyNombre";

export const ProductoList = (nombre) => {

    const producto = GetProdbyNombre(nombre);
    return (
        <div className="container mt-3">
            <ul>
                {
                    producto.map (producto=> <li>{producto.nombre}</li>)
                }
            </ul>
        </div>
    )
}