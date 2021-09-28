import ItemDetailContainer from "./ItemDetailContainer";

const pedido=  fetch ('https://jsonplaceholder.typicode.com/users')
    

    pedido 
    .then (respuesta =>{
        return respuesta.json()
    })
    .then (respuesta =>{
        console.log(respuesta)
    })
    .catch (error =>{
        console.log(error)
    })


export default ItemDetail