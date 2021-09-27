import React from "react";
import "../Item/Item.css";
import {Link} from "react-router-dom"

function Item( {title, price, pictureUrl, id} ) {
    return(
        <>
            <div className="item">
                <Link to={`/item/${id}`}>
                    <img src={pictureUrl} className="img"/>  
                </Link>
                <div className="title margin">{title}</div>
                <div className="price margin">${price}</div>
                <div className="contenedor-botones">
                    <Link to={`/item/${id}`}>
                        <button className="comprar">Comprar</button>
                    </Link>
                    
                    <Link to={`/item/${id}`}>
                        <button className="ver-mas">Ver más</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Item