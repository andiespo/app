import CartWidget from "./CartWidget"
const NavBar = () => 

<div class="row">
    <div class="col-lg-12 col-xs-12">
        <NavBar class="navbar navbar-expand-md navbar-light fixed-top bg-light">
          <a class="navbar-brand" href="#">The Healthy APP</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">Productos </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Nosotros</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Clientes</a>
              </li>
              <li class="nav-item">
                <a class="material-icons" href="#">shopping_cart</a>
              </li>
            </ul>
          </div>
        </NavBar>
    </div>
</div>
        

export default NavBar