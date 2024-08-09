/* eslint-disable react/prop-types */
import {useState, useEffect, createContext, useContext } from "react";

const cartContext = createContext();

export const { Provider } = cartContext;

export const useCartContext = () => {
    return useContext(cartContext)
}

const  CartContextProvider = ({children}) => {
    const [qtyItems, setQtyItems] = useState(0)
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(()=>{
        const localCart = JSON.parse(localStorage.getItem(`cart`))
        const localTotal = JSON.parse(localStorage.getItem(`total`))
        const localQty = JSON.parse(localStorage.getItem(`qty`))
        if(localCart && localTotal){
            setCart(localCart)
            setTotal(localTotal)
            setQtyItems(localQty)
        }
    },[])

    const isInCart=(id)=> {
        return cart.find((elem)=> elem.id === id)
    }

    const addToCart = (item, qty) =>{
        setQtyItems(qtyItems + qty)
        setTotal(total + item.precio * qty)
        let newCart = []
        
        if(isInCart(item.id)){
            newCart = cart.map((elem)=> {
                if (elem.id === item.id){
                    return {...elem, qty: elem.qty + qty}
                }else {
                    return elem
                }
            })

        }else{
             newCart = [...cart, {...item,qty}]
        }

       
        setCart(newCart)
        localStorage.setItem(`cart`,JSON.stringify(newCart))
        localStorage.setItem(`total`,JSON.stringify(total))
        localStorage.setItem(`qty`,JSON.stringify(qty))

    }

    const removeItem = () => {}
    const clearCart = () => {}

    const contextValue = { 
        
        titulo: "Bienvenidos a la mejor tienda de deportes",
        qtyItems,
        addToCart
    }
    return <Provider value ={contextValue}>{children}</Provider>
}

export default CartContextProvider;

// llegue al min 1.36 clase 6