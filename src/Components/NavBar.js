import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {

    return (
      <div className="row">
      <div className="col-lg-12 col-xs-12">
          <NavBar className="navbar navbar-expand-md navbar-light fixed-top bg-light">
            <NavLink className="navbar-brand" to="/">The Healthy APP</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/cat1">Categoria1</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/cat2">Categoria2</NavLink>
                </li>
              </ul>
            </div>
          </NavBar>
      </div>
  </div>
          
    )
}
export default NavBar