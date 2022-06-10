import { createContext, useState } from "react";


export const cartContext = createContext([])

function CartContextProvider({ children }) {

    const [cartList, setCartList] = useState([])
    const [contador, setContador] = useState(0)
    const [precioTotal, setPrecioTotal] = useState(0)
    const [user, setUser] = useState({ name: "", email: "", tel: "" })

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

    function chequearUser(data) {
        console.log(data)
        if (localStorage.getItem("User") !== null) {
            localStorage.setItem("User", JSON.stringify(data))
        }
        if (user.email === data.email) {
            console.log("usuario existente")
        } else {
            console.log("usuario no existe")
            alert(`Bienvenido ${data.name}`)
            setUser(data)
            console.log(user)
        }
    }

    function vaciarCarrito() {
        setCartList([])
        setPrecioTotal(0)
        setContador(0)
    }

    function addToCart(item) {
        chequearProducto(item)
        setContador(contador + item.cant)
        setPrecioTotal(precioTotal + (item.precio * item.cant))
    }

    return (
        <cartContext.Provider value={{ addToCart, contador, cartList, eliminarItem, vaciarCarrito, precioTotal, chequearUser, user }}>
            {children}
        </cartContext.Provider>
    );
}

export default CartContextProvider