import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { Categoria1 } from "../Categoria1/Categoria1";
import { Categoria2 } from "../Categoria2/Categoria2";
import {NavBar} from "../NavBar"
import {Footer} from "../Footer"

export const AppRoutes = () => {

    return (
        <div>
            <Router>
                <NavBar/>
                <Switch>
                    <Route path ="/Cat1" component={Categoria1}/>
                    <Route path ="/Cat2" component={Categoria2}/>
                    <Route path ="/"/>
                </Switch>
                <Footer/>
            </Router>
        </div>

    )
}