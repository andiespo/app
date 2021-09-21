import Header from "./Components/Header"
import Itemcount from "./Components/ItemCount"
import ItemListContainer from "./Components/ItemListContainer"
import Footer from "./Components/Footer"
const App = () => {

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