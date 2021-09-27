import React, {useEffect, useState} from "react"
import { useCart } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "../OrderForm/OrderForm.css"

function OrderForm() {

    const { updateDatos, enviarDatos, orderState } = useCart()
    const [ButtonVisibility, setButtonVisibility] = useState(false)
    const [confirmVisibility, setConfirmVisibility] = useState(true)
    const [placeRequiredVisibility, setPlaceRequiredVisibility] = useState(false)

    const validPhone = (phone) => {
        var expReg= /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        var isValid = expReg.test(phone);
        return (isValid);
    }

    const validEmail = (email) => {
        var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        var isValid = expReg.test(email);     
        return (isValid); 
    }

    const confirm = () => {
        if(
            orderState.name !== "" &&
            validPhone(orderState.phone) &&
            validEmail(orderState.email) &&
            orderState.email == orderState.emailConfirm
            ){
            setButtonVisibility(true)
            setConfirmVisibility(false)
            setPlaceRequiredVisibility(false)
        } else {
            setPlaceRequiredVisibility(true)
        }
    }

    return(
        <div className="contenedor-form">          
            <div className="contenedor-input">
                <div className="input-data">
                    <label className="label-form">Nombre</label>
                    <input 
                        type="text" 
                        onChange={(event) => updateDatos(event)} 
                        name="name"
                        className="input-form"
                        disabled={ButtonVisibility}
                        />
                </div> 
            </div>

            <div className="contenedor-input">
                <div className="input-data">
                    <label className="label-form">Teléfono</label>  
                    <input
                        type="text" 
                        onChange={(event) => updateDatos(event)} 
                        name="phone"
                        className="input-form"
                        disabled={ButtonVisibility}
                        />
                </div>
            </div> 

            <div className="contenedor-input">
                <div className="input-data">
                    <label className="label-form">Email</label>
                    <input 
                        type="email"
                        onChange={(event) => updateDatos(event)} 
                        name="email"
                        className="input-form"
                        disabled={ButtonVisibility}
                        />
                </div>
            </div>

            <div className="contenedor-input">
                <div className="input-data">
                    <label className="label-form">Confirmar email</label>
                    <input
                        type="text"
                        onChange={(event) => updateDatos(event)} 
                        name="emailConfirm"
                        className="input-form"
                        disabled={ButtonVisibility}
                        />
                </div>
            </div>

            {confirmVisibility && 
            <button
                onClick={confirm}
                className="confirmar-datos-pagar">
                Confirmar datos
            </button>}

            {placeRequiredVisibility && 
            <div className="campo">
                Todos los campos son obligatorios.
            </div>}

            <Link to="/cart/payment">    
                {ButtonVisibility &&
                <button
                onSubmit={(event)=>enviarDatos(event)} 
                className="confirmar-datos-pagar green" 
                type="submit">Confirmar pago
                </button>}
            </Link>
        </div>
    )
}

export default OrderForm