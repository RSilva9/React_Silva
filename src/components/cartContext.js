import React from "react";
import { createContext, useState } from "react";

const cartContext = createContext({
    cart: []
})

function CartContextProvider(props){
    const [cart, setCart] = useState([])
    
    function addItemToCart(item, count){
        const newCart = [...cart]
        newCart.push({...item, count})
        setCart(newCart)
    }

    return(
        <cartContext.Provider value={ {cart : cart, addItemToCart: addItemToCart} }>
            {props.children}
        </cartContext.Provider>
    )
}

export { CartContextProvider }

export default cartContext;