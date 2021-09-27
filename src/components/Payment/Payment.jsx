import React from "react";
import {Link} from "react-router-dom"
import {useCart} from "../../context/CartContext"
import "../Payment/Payment.css"

function Payment() {

    const {orderState, clear} = useCart()

    return(
        <div className="payment">
            <div className="contenedor-payment">
                <div className="pago-realizado">Pago realizado con éxito. ¡Gracias por su compra!</div>
                <div className="id-fecha">ID de la orden: {orderState.IDOrder}</div>
                <div className="id-fecha">Fecha: {orderState.date}</div>
                <div className="detalle">Detalle de la orden</div>
                <div>
                    {orderState.items[0].map(elem => 
                        <>
                            <div className="hijos-detalle-orden">
                            {elem.title} - ${elem.price} | {elem.quantity} Unidades
                            </div>
                        </>
                    )}
                </div>
                <div className="hijos-detalle-orden subtotal">Subtotal: ${orderState.totalPrice} | {orderState.totalItems} Unidades</div>

                <div className="detalle">Información del comprador</div>
                <div className="comprador">{orderState.name}</div>
                <div className="comprador">{orderState.phone}</div>
                <div className="comprador">{orderState.email}</div>  
            </div>
            <Link to="/">
                <button className="volver-tienda margin-top" onClick={clear}>Volver a la tienda</button>
            </Link>
        </div>
    )
}

export default Payment