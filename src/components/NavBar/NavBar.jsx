import React from "react"
import "./NavBar.css"
import Icon from "../Icon/Icon"
import {Link} from "react-router-dom";


function NavBar() {

    
    return (
        <>
            <div className="nav">
                <Link className="nombre" to="/">Example</Link>
                <div className="caja">
                    <Link className="catalogo" to="/">Catálogo</Link>
                    <Link className="tomos-pares" to="/category/tomos-pares">Tomos pares</Link>
                    <Link className="icon-cart" to="/cart"><Icon/></Link>
                </div>
            </div>
        </>
    )
}

export default NavBar