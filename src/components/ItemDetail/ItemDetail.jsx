import React from "react";

function ItemDetail( {title, price, pictureUrl, description} ) {
    return(
        <>
            <div className="container">
                <div style={{backgroundImage: `url(${pictureUrl})`}} className="img"></div>
                <div className="description">{description}</div>
                <div className="title">{title}</div>
                <div className="price">{price}</div>
            </div>
        </>
    )
}

export default ItemDetail