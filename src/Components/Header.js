import NavBar from "./NavBar"
import ItemListContainer from "./ItemListContainer"
import Footer from "./Footer"

const Header = ({titulo, subtitulo, id }) => {

    return (
        <header className="test" id={"id"} >
            <h1>{titulo}</h1>
            <p></p>
                <NavBar/>
        </header>
    )
}

export default Header