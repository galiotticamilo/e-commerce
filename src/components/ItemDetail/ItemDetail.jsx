import React, { useState } from "react";
import { Link } from "react-router-dom"
import "../ItemDetail/ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useCart } from "../../context/CartContext"

function ItemDetail( {objeto} ) {

    const {addItem} = useCart()

    const [itemCountVisible, setItemCountVisible] = useState(true)
    const [buyButtonVisibility, setBuyButtonVisibility] = useState(true)

    const [itemsCount, setItemsCount] = useState(0)

    const onAdd = (count) => {
        setItemsCount(count)
    }

    const onAddToCart = (item, quantity) => {
        addItem(item, quantity)
        setItemCountVisible(false)
        setBuyButtonVisibility(false)
    }

    return(
        <div className="div">
            <div className="container-detail">
                <div style={{backgroundImage: `url(${objeto.pictureUrl})`}} className="img-detail"></div>   
                <div className="informacion-detail">    
                    <div className="title-detail">{objeto.title}</div>
                    <div className="description-detail">{objeto.description}</div>
                    <div className="price-detail">${objeto.price}</div>
                    
                    {itemCountVisible && <ItemCount stock={10} initial={0} onAdd={onAdd}/>}
                    {buyButtonVisibility && <button onClick={() => onAddToCart(objeto, itemsCount)} className="boton-carrito" disabled={itemsCount === 0}>Agregar al carrito</button>}
                    {!buyButtonVisibility && 
                    <div className="contenedor-terminar-compra">
                        <Link to="/cart">
                            <button className="boton-terminar">Terminar compra</button>
                        </Link>
                        <Link to="/">
                            <button className="volver-tienda-detail">Volver a la tienda</button>
                        </Link>
                    </div>
                    } 
                </div>
            </div>
        </div>
    )
}

export default ItemDetail