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
import { Card } from "../Card/Card";

export const AppRoutes = () => {

    return (
        <div>
            <Router>
                <NavBar/>
                <Switch>
                    <Route exact path ="/Fruta" component={Fruta}/>
                    <Route exact path ="/Verdura" component={Verdura}/>
                    <Route exact path ="/producto/:id"/>
                    <Route exact path ="/card" component= {Card}/>
                    <Route exact path ="/categoria/:id" component={ItemDetailContainer}/>
                </Switch>
                <Footer/>
            </Router>
        </div>

    )
}