import React from "react"
import "./NavBar.css"
import Icon from "../Icon/Icon"

function NavBar() {
    return (
        <>
            <div className="nav">
                <p className="nombre">Excalibur</p>
                <div className="caja">
                    <a href="#">Inicio</a>
                    <a href="#">Catálogo</a>
                    <Icon/>
                </div>
            </div>
        </>
    )
}

export default NavBar