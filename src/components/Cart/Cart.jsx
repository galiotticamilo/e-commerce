import React, {useState} from "react"
import {Link} from "react-router-dom";
import {useCart} from '../../context/CartContext'
import "../Cart/Cart.css"

function Cart() {

    const {removeItem, products, clear, totalItems, totalPrice, purchaseItems} = useCart()

    return (
        <div className="bloque-producto">
            {products.length > 0 ?
            <>
                {products.map(elem =>
                    <>  
                        <div className="contenedor-productos">
                            <h1>{elem.title} | ${elem.price} - Cantidad: {elem.quantity} unidades</h1>
                            <div className="contenedor-sumas">
                                <h1>${elem.price * elem.quantity}</h1>
                                <button className="boton-eliminar" onClick={() => removeItem(elem)}>Eliminar</button>
                            </div>
                        </div>
                    </>
                )}

                <h1>Subtotal: ${totalPrice()} ({totalItems()} unidades)</h1>
                <div className="contenedor-pagar-vaciar">
                    <Link to="/cart/payment">
                        <button className="pagar" onClick={() => purchaseItems()}>Pagar</button>
                    </Link>
                    <button className="vaciar" onClick={clear}>Vaciar carrito</button>
                </div>
            </> : 
                <>
                    <h3 className="no-items">No hay productos en su carrito.</h3>
                    <Link to="/">
                        <button className="volver-tienda">Volver a la tienda</button>
                    </Link>
                </>
            }   
        </div>
    )
}

export default Cart