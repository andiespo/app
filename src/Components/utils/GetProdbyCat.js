import { producto } from "../../Data/Data"


export const GetProdbyCat = (Categoria) => {
    return producto.filter (producto => producto.nombre === nombre);
}

