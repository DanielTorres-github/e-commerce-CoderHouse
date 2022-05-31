import { createContext, useState } from "react";


export const cartContext = createContext([])

function CartContextProvider({ children }) {

    const [cartList, setCartList] = useState([])
    const [contador, setContador] = useState(0)
    const [precioTotal, setPrecioTotal] = useState(0)

    function chequearProducto(item) {
        if (cartList.some(e => e.id === item.id)) {
            const itemRepetido = cartList.find(e => e.id === item.id)
            itemRepetido.cant = itemRepetido.cant + item.cant
        } else {
            setCartList([...cartList, item])
        }
    }

    function eliminarItem(item) {
        setCartList(cartList.filter(e => e.id != item.id))
        setContador(contador - item.cant)
        setPrecioTotal(precioTotal - (item.precio * item.cant))
    }

    function vaciarCarrito() {
        setCartList([])
        setPrecioTotal(0)
    }

    function addToCart(item) {
        chequearProducto(item)
        setContador(contador + item.cant)
        setPrecioTotal(precioTotal + (item.precio * item.cant))
    }

    return (
        <cartContext.Provider value={{ addToCart, contador, cartList, eliminarItem, vaciarCarrito, precioTotal }}>
            {children}
        </cartContext.Provider>
    );
}

export default CartContextProvider