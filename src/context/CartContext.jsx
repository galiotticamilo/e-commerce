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

    function clear() {
        setProducts([])
    }

    const isInCart = (data) => {
        if (products?.find(elem => elem.id === data.id)) {
            return true
        }
    }

    const totalItems = () => products.reduce((acum, items) => acum + items.quantity, 0)
    const totalPrice = () => products.reduce((acum, items) => acum + (items.price * items.quantity), 0)
    
    const newOrder = {
        buyer: {
            name: "Camilo Galiotti",
            phone: "+54 9 3413 92 8839",
            email: "camilogaliotti1@gmail.com"
        },
        items: [products],
        date: new Date().toString(),
        totalItems: totalItems(),
        totalPrice: totalPrice(),
        IDOrder: uuidv4(),
    }

    const [orderState, setOrderState] = useState()

    function purchaseItems() {
        setOrderState(newOrder)
    }

    return (
        <CartContext.Provider value={{
            addItem,
            removeItem,
            clear,
            products,
            totalItems,
            totalPrice,
            purchaseItems,
            orderState
            }}
            >
            {props.children}
        </CartContext.Provider>
    )
} 