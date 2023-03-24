import { React, useContext } from "react";
import cartContext from "./cartContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function CartRender(){
    const { cart } = useContext(cartContext)
    const { removeItemFromCart } = useContext(cartContext)
    const { clearCart } = useContext(cartContext)
    const MySwal = withReactContent(Swal)
    let precioTotal = 0
    for(let item of cart){
        precioTotal += item.price*item.count
    }
    
    return(
        <div className="d-flex flex-column p-3">
            <div className="d-flex justify-content-between">
                <h1>Tu carrito</h1>
                {
                    cart.length > 0
                    ?
                    <button className="searchButton" onClick={clearCart}>Limpiar carro</button>
                    :
                    <></>
                }
            </div>
            {
                cart.map(item=>{
                    return(
                        <div className="longCard" key={item.number}>
                            <img src={item.image}></img>
                            <div id="infoLongCard">
                                <div>
                                    <h2>Nombre:</h2>
                                    <h3>{item.name}</h3>
                                    <h2>Categoría:</h2>
                                    <h3>{item.category}</h3>
                                </div>
                                <div>
                                    <h2>Precio:</h2>
                                    <h3>${item.price}</h3>
                                </div>
                                <div>
                                    <h2>Cantidad:</h2>
                                    <h3 className="text-center">{item.count}</h3>
                                </div>
                            </div>
                            <button className="searchButton" onClick={()=>removeItemFromCart(item.number)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                </svg>
                            </button>
                        </div>
                    )
                })
            }
            {
                cart.length > 0
                ?
                (
                <div className="d-flex justify-content-between">
                    <button className="searchButton" onClick={()=>{

                        MySwal.fire({
                            title: <p>¡Agradecemos tu compra!</p>,
                            html: (
                                <>
                                    {cart.map(item=>{
                                        return(
                                            <h2>{item.name} x{item.count} - ${item.price}</h2>
                                        )
                                    })}
                                    <h3>${precioTotal}</h3>
                                </>
                            )
                        })
                    }}>Terminar compra</button>
                    <h3>Precio final: ${precioTotal}</h3>
                </div>
                )
                :
                <></>
            }
            
        </div>
    )
}

export default CartRender;


