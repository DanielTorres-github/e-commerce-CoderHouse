import { createContext, useState } from "react";


export const cartContext = createContext([])

function CartContextProvider({ children }) {

    const [cartList, setCartList] = useState([])
    const [contador, setContador] = useState("")



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
    }

    function vaciarCarrito() {
        setCartList([])
    }

    function addToCart(item) {
        chequearProducto(item)
        setContador(contador + item.cant)
    }

    return (
        <cartContext.Provider value={{ addToCart, contador, cartList, eliminarItem, vaciarCarrito }}>
            {children}
        </cartContext.Provider>
    );
}

export default CartContextProvider