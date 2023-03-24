import React from "react";
import { createContext, useState } from "react";

const cartContext = createContext({
    cart: []
})

function CartContextProvider(props){
    const [cart, setCart] = useState([])
    
    function addItemToCart(item, count){
        let found
        for(let includedItem of cart){
            if(includedItem.number == item.number){
                found = includedItem
            }
        }
        if(found){
            found.count += count
        }else{
            const newCart = [...cart]
            newCart.push({...item, count})
            setCart(newCart)
        }
    }

    function removeItemFromCart(number){
        let index
        for(let includedItem of cart){
            if(includedItem.number == number){
                index = cart.indexOf(includedItem)
            }
        }
        cart.splice(index, 1)
        const newCart = [...cart]
        setCart(newCart)
    }

    function clearCart(){
        setCart([])
    }

    return(
        <cartContext.Provider value={ {cart, addItemToCart, removeItemFromCart, clearCart} }>
            {props.children}
        </cartContext.Provider>
    )
}

export { CartContextProvider }

export default cartContext;