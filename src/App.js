import Header from "./Components/Header"
import ItemListContainer from "./Components/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer"
import Footer from "./Components/Footer"
const App = () => {

        let titulo = "Mi E-commerce"
        
        return (
        <>
        <Header id ="main-header" titulo= "The Healthy APP" Subtitulo= "Mi E-commerce"/>
        <ItemListContainer/>
        <ItemDetailContainer/>
        <Footer/>
        </>
        )
}
export default App