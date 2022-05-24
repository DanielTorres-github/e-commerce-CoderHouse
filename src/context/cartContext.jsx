import { createContext, useState } from "react";


export const cartContext = createContext([])

function CartContextProvider({ children }) {

    const [cartList, setCartList] = useState([])
    const [contador, setContador] = useState(1)

    function addToCart(item) {
        setCartList(item);
        setContador(contador + 1)
    }

    return (
        <cartContext.Provider value={{ addToCart, contador }}>
            {children}
        </cartContext.Provider>
    );
}

export default CartContextProvider