import React from "react";
import "../Item/Item.css";
import {Link} from "react-router-dom"

function Item( {title, price, pictureUrl, id} ) {
    return(
        <>
            <div className="item">
                <Link to={`/item/${id}`}>
                    <div style={{backgroundImage: `url(${pictureUrl})`}} className="img margin"></div>
                </Link>
                <div className="title margin">{title}</div>
                <div className="price margin">${price}</div>
                <div className="contenedor-botones">
                    <Link to={`/item/${id}`}>
                        <button className="comprar">Comprar</button>
                    </Link>
                    
                    <a target="_blank" href="http://www.editorialivrea.com/ARG/ajin/">
                        <button className="ver-mas">Ver más</button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Item