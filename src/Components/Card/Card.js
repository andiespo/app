import React from "react";
import { Link } from "react-router-dom";

export const Card = (categoria, temporada,id) => {

    return (
        <div className="card" style={{width:'18rem'}}>
        <img src={'/assets/producto/$id.jpg'} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{Categoria}</h5>
        <p className="card-text">{Temporada}</p>
        <link to="#" class="btn btn-primary">Ver Detalle</link>
  </div>
</div>
    )
}