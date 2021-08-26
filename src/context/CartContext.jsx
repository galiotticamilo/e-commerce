import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = props => {

    const [products, setProducts] = useState([])

    const addItem = (product, cantidad) => {
        if (isInCart(product)) {
            products.map(prod => {
                if (prod.id === product.id) {
                    return prod.quantity += cantidad
                }
            })
        } else {
            setProducts(state => {
                return [...state, {...product, quantity: cantidad}]
            })
        }
    }

    // no lo hago porque no puedo ahcer nada ahre

    function removeItem(event) {
        
    }

    function clear() {
        setProducts([])
    }

    function isInCart(product) {
        products?.find(elem => elem.id === product.id)
    }

    return (
        <CartContext.Provider value={{addItem, removeItem, clear, products}}>
            {props.children}
        </CartContext.Provider>
    )
} 