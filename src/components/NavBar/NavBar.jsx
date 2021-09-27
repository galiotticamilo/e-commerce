import React from "react"
import "./NavBar.css"
import CartIcon from "../CartIcon/CartIcon"
import {Link} from "react-router-dom";


function NavBar() {

    
    return (
        <nav className="nav">       
            <Link className="nombre" to="/">Example</Link>
            <div className="caja">
                <Link className="catalogo" to="/">Catálogo</Link>
                <Link className="tomos-pares" to="/category/tomos-pares">Novedades</Link>
                <Link className="icon-cart" to="/cart"><CartIcon/></Link>
            </div>
        </nav>
    )
}

export default NavBar