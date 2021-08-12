import React from "react"
import "./NavBar.css"
import Icon from "../Icon/Icon"
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <>
            <div className="nav">
                <Link to="/">
                    <p className="nombre">Example</p>
                </Link>
                <div className="caja">
                    <a href="#">Inicio</a>
                    <Link to="/category/:categoryid">Catálogo</Link>
                    <Icon/>
                </div>
            </div>
        </>
    )
}

export default NavBar