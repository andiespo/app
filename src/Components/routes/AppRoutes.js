import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { Fruta } from "../Fruta/Fruta";
import {NavBar} from "../NavBar"
import {Footer} from "../Footer"
import { Verdura } from "../Verdura/Verdura";

export const AppRoutes = () => {

    return (
        <div>
            <Router>
                <NavBar/>
                <Switch>
                    <Route path ="/Fruta" component={Fruta}/>
                    <Route path ="/Verdura" component={Verdura}/>
                    <Route path ="/prodcuto/:id"/>
                </Switch>
                <Footer/>
            </Router>
        </div>

    )
}