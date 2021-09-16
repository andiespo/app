
import Header from "./Components/Header"

const App = () => {

        return (
        <>
        <Header id ="main-header" titulo= "The Healthy APP" Subtitulo= "Mi E-commerce" Edad= {32} />
        <ItemListContainer/>
        <footer>
        <p>Copyright & 2021</p>
        </footer>
        </>
        )
}
export default App