import { producto } from "../../Data/Data"


export const GetProdbyCat = (categotia) => {
    return producto.filter (producto => producto.categoria === categoria);
}

