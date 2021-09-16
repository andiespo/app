import NavBar from "./Components/NavBar"
import ItemListContainer from "./ItemListContainer"

const Header = ({titulo, subtitulo, edad, id }) => {

    return (
        <header className="test" id={"id"} >
            <h1>{titulo}</h1>
            <p>{Edad}</p>
                <NavBar/>
        </header>
    )
}

export default Header