import Header from "./Components/Header"

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