import React from "react"
import "./NavBar.css"
import Icon from "../Icon/Icon"
import ItemListContainer from "../ItemListContainer/ItemListContainer"

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
            <ItemListContainer greeting="Holaaa"/>
        </>
    )
}

export default NavBar