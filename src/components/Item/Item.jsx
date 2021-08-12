import React from "react";
import "../Item/Item.css";
import ItemCount from "../ItemCount/ItemCount";
import {Link} from "react-router-dom"

function Item( {title, price, pictureUrl, id} ) {
    return(
        <>
            <div className="item">
                <div style={{backgroundImage: `url(${pictureUrl})`}} className="img margin"></div>
                <div className="title margin">{title}</div>
                <div className="price margin">{price}</div>
                <Link to={`/item/${id}`}>
                    <button>Comprar</button>
                </Link>
                {/*<ItemCount stock={10} initial={0} onAdd={(count) => {console.log("¡Agregado! Items: " + count)}}/>*/}
            </div>
        </>
    )
}

export default Item