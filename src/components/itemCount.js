import React from "react";
import { useState, useEffect } from "react";

function ItemCount({addToCart}){
    const [count, setCount] = useState(1)
    
    const handleSuma = ()=>{
        setCount(prevCount => prevCount + 1)
    }
    const handleResta = ()=>{
        if(count != 1){
            setCount(prevCount => prevCount - 1)
        }
    }

    return(
        <div id="itemCount">
            <div className="d-flex">
                <button onClick={handleResta} id="buttonResta">-</button>
                <p>{count}</p>
                <button onClick={handleSuma} id="buttonSuma">+</button>
            </div>
            <button className="searchButton mt-2" onClick={()=> addToCart(count)}>
                Agregar al carrito.
            </button>
        </div>
    )
}

export default ItemCount;