import { createContext, useContext, useState } from "react";

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
        console.log('se elimino --', products)
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
        totalPrice: totalPrice()
    }

    function purchaseItems() {
        console.log(newOrder)
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
            }}
            >
            {props.children}
        </CartContext.Provider>
    )
} 