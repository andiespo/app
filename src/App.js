
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import "./App.css";
import { AppRoutes } from "./Components/routes/AppRoutes";
import context from "./Components/context";
import { useState } from "react";


const [carrito, setCarrito]= useState([])


function App () {
        
        return (
         <div className="App">
             <contexto.provider value={{carrito,setCarrito}}> 
            <AppRoutes/>
            </contexto.provider> 
         </div>
        )
}
export default App

function makeItBark(name) {
        function Dog (name) {
            this.name = name;
        }
    
        Dog.bark = function () {
            return this.name + ' says woof hey';
        };
    
        let scooby = new Dog(name);
        return scooby.bark();
    }
    