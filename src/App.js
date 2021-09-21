
import {useState,useEffect} from "react"
import Header from "./Components/Header"

const App = () => {

        const [contador,setContador] = useState()
        let titulo = "Mi E-commerce"
        
        return (
        <>
        <Header id ="main-header" titulo= "The Healthy APP" Subtitulo= "Mi E-commerce"/>
        <ItemCount/>
        <ItemListContainer/>
        <Footer/>
        </>
        )
}
export default App