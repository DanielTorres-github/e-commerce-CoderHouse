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

    function addToCart(item) {
        chequearProducto(item)
        // setCartList([...cartList, item]);
        setContador(cartList.length)

        console.log(cartList)
        // setContador(contador + 1)
    }

    return (
        <cartContext.Provider value={{ addToCart, contador, cartList }}>
            {children}
        </cartContext.Provider>
    );
}

export default CartContextProvider