import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const CartContext = createContext()
export const useCart = () => useContext(CartContext)

export const CartProvider = props => {

    const [products, setProducts] = useState([])

    const addItem = (data, cantidad) => {
        if (isInCart(data)) {
            products.map(prod => {
                if (prod.id === data.id) {
                    return prod.quantity += cantidad
                }
            })

            
        } else {
            setProducts(state => {
                return  [...state, {...data, quantity: cantidad}]
            })
        }
    }

    const removeItem = (product) => {
        const dataFiltrada = products.filter((elem) => elem !== product)
        setProducts(dataFiltrada)
    }

    const isInCart = (data) => {
        if (products?.find(elem => elem.id === data.id)) {
            return true
        }
    }

    const totalItems = () => products.reduce((acum, items) => acum + items.quantity, 0)
    const totalPrice = () => products.reduce((acum, items) => acum + (items.price * items.quantity), 0)
    
    const newOrder = {
        items: [products],
        date: new Date().toString(),
        totalItems: totalItems(),
        totalPrice: totalPrice(),
        IDOrder: uuidv4(),
    }

    const [orderState, setOrderState] = useState({
        ...newOrder,
        name: "",
        email: "",
        emailConfirm: "",
        phone: ""
    })

    const updateDatos = (event) => {
        event.preventDefault()
        setOrderState({
            ...orderState,
            ...newOrder,
            [event.target.name] : event.target.value
        })    
    }

    const enviarDatos = (event) => {
        event.preventDefault();
    }

    function clear() {
        setProducts([])
        setOrderState({...newOrder,
            name: "",
            email: "",
            emailConfirm: "",
            phone: ""
        })
    }

    return (
        <CartContext.Provider value={{
            addItem,
            removeItem,
            clear,
            products,
            totalItems,
            totalPrice,
            updateDatos,
            enviarDatos,
            orderState,
            }}
            >
            {props.children}
        </CartContext.Provider>
    )
} 