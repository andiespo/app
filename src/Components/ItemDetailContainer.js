import {useState,useEffect} from "react"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import ItemListContainer from "./ItemListContainer"

const productos = [
    {id:1,titulo: "Producto 1"},
    {id:2,titulo: "Producto 2"}
]
const ItemDetailContainer = () => {

    const [productos,setProductos] = useState ([])

    useEffect= (() => {

      const pedido=  new Promise ((resolver)=> {
            setTimeout(() => {
               resolver(productos) 
            }, 2000);
        })

    pedido 
    .then (resultado =>{
        console.log(productos)
    })
}) 

    return (
        <div className="Item" id={"id"} >
            <h1></h1>
            <p></p>
            <ItemList productos={productos}/>
            <ItemCount stock= {10} initial= {1} onAdd={()=> {}}/>
            <ItemListContainer/>
        </div>
    )
}


export default  ItemDetailContainer