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
                    
                    <Link to="/category/tomos-pares">Tomos pares</Link>
                    <Link to="/">Catálogo</Link>
                    <Link to="/cart"><Icon/></Link>
                </div>
            </div>
        </>
    )
}

export default NavBar