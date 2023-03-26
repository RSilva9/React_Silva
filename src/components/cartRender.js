import { React, useContext, useRef } from "react";
import cartContext from "./cartContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Form } from "react-router-dom";
import { newOrder } from "../firestore";

function CartRender(){
    const { cart } = useContext(cartContext)
    const { removeItemFromCart } = useContext(cartContext)
    const { clearCart } = useContext(cartContext)
    const MySwal = withReactContent(Swal)
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const phoneRef = useRef(null)

    let precioTotal = 0
    for(let item of cart){
        precioTotal += item.price*item.count
    }

    async function handleOrder(){
        const orderInfo = {
            cliente: nameRef.current.value,
            email: emailRef.current.value,
            telefono: phoneRef.current.value,
            productos: cart,
            total: precioTotal,
            time: new Date()
        }

        await newOrder(orderInfo)

        MySwal.fire({
            title: <p>¡Agradecemos tu compra!</p>,
            html: (
                <>
                    <h4>Nombre: {nameRef.current.value}</h4>
                    <h4>Correo: {emailRef.current.value}</h4>
                    <h4>Teléfono: {phoneRef.current.value}</h4>
                    <h2 style={{fontWeight: "bolder"}}>Resumen de tu compra:</h2>
                    {cart.map(item=>{
                        return(
                            <h2 key={item.number}>{item.name} x{item.count} - ${item.price}</h2>
                            
                        )
                    })}
                    <h3 style={ { color: "rgba(57, 179, 75, 1)", marginTop: "15px"} }>Precio total: ${precioTotal}</h3>
                </>
            ),
            confirmButtonColor: "rgba(57, 179, 75, 0.8)"
        })

        clearCart()
    }
    
    return(
        <div className="d-flex flex-column p-3">
            <div className="d-flex justify-content-between">
                {
                    cart.length > 0
                    ?
                    <>
                        <h1>Tu carrito</h1>
                        <button className="searchButton" onClick={clearCart}>Limpiar carro</button>
                    </>
                    :
                    <>
                        <h1>Tu carrito se encuentra vacío.</h1>
                    </>
                }
            </div>
            {
                cart.map(item=>{
                    return(
                        <div className="longCard" key={item.number}>
                            <img src={item.image}></img>
                            <div className="d-flex flex-row w-100">
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
                    <div>
                    <form>
                        <label>
                            Nombre:
                            <input ref={nameRef} type="text" name="name"/>
                        </label>
                        <label>
                            Correo:
                            <input ref={emailRef} type="text" name="email"/>
                        </label>
                        <label>
                            Teléfono:
                            <input ref={phoneRef} type="text" name="phone"/>
                        </label>
                        <button type="submit" className="searchButton" onClick={(evt)=>{
                            evt.preventDefault()
                            if(nameRef.current.value != "" && emailRef.current.value != "" && phoneRef.current.value != ""){
                                handleOrder()
                            }else{
                                MySwal.fire({
                                    title: <p>Complete todos los campos para terminar la compra.</p>,
                                    confirmButtonColor: "rgb(179, 57, 57)"
                                })
                            }
                            
                        }}>Terminar compra</button>
                    </form>
                        
                    </div>
                    
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


