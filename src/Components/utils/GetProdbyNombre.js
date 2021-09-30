import { producto } from "../../Data/Data"


export const GetProdbyNombre = (CaNombre) => {
    return producto.filter (producto => producto.nombre === nombre);
}

