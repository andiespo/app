import React from "react";
import { ProductoList } from "../ProductoList/ProductoList";

export const Fruta = () => {

    return (
        <div className="container mt-3">
            <h1>Fruta</h1>
            <hr />
            <ProductoList categoria="Fruta" />
        </div>
    )
}