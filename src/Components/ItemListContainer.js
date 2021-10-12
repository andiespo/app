import {useState,useEffect} from "react"
import { useParams } from "react-router"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"

const producto = [
    {'id': 'Manzana', 'Nombre': 'GrandSmith','temporada': 'Invierno','categoria': 'Fruta'},
    {'id': 'Pera','nombre': 'Williams','temporada': 'Verano', 'categoria': 'Fruta'},
    {'id': 'Arandanos','nombre': 'Blueberry','temporada': 'Verano','categoria': 'Fruta'},
    {'id': 'Palta','nombre': 'Hass','temporada': 'Verano','categoria': 'Verdura'},
    {'id': 'Lechuga','nombre': 'LechugaHidroponia','temporada': 'Verano','categoria': 'Verdura'},
    {'id': 'Puerro','nombre': 'Leek','temporada': 'Invierno','categoria': 'Verdura'},
]

const ItemListContainer = () => {

    const [producto,setProducto] = useState ([])
    const {id} = useParams

    useEffect= (() => {

      const pedido=  new Promise ((resolver)=> {
            setTimeout(() => {
               resolver(producto) 
            }, 2000);
        })
         
        if (id){
            pedido.then(data =>{
                setProducto(data.filter(item=> item.categoria ==id))
            })
        }else{
           
    pedido 
    .then (resultado =>{
        setProducto(resultado)
        })
    }
}) 
    if (producto.lenght>0){
    return (
        <div className="Item" id={"id"} >
            <h1></h1>
            <p></p>
            <ItemList producto={producto}/>

        </div>
    );
    } else {
        return( 
        <p>cargando...</p>
        
        )
    }
}


export default  ItemListContainer