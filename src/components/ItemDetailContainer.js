import React from "react";
import { useState, useEffect } from "react";
import data from "../json/funkoPop.json"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ItemCount from "./itemCount";
import { useContext } from "react";
import cartContext from "./cartContext";

function ItemDetailContainer(){
    const [prodSelected, setProd] = useState({})
    const params = useParams()
    const numberProducto = params.numberProducto
    const { cart, setCart} = useContext(cartContext)

    useEffect(() => {
        data.forEach(d => {
            if(d.number == numberProducto){
                setProd(d)
            }
        });
    }, []); 

    const { addItemToCart } = useContext(cartContext)

    function addToCart(count){
        if(count != 0){
            addItemToCart(prodSelected, count)
            alert(`${count} producto(s) agregado(s).`)
        }else{
            alert("Seleccione una cantidad válida.")
        }
    }
    
    return(
        <div id="productDetail">
            <div className="w-50">
                <img src={prodSelected.image}></img>
            </div>
            <div className="w-50 ms-5">
                <div>
                    <h2>Nombre:</h2>
                    <h3>{prodSelected.name}</h3>
                </div>
                <div className="my-5">
                    <h2>Colección:</h2>
                    <h3>{prodSelected.category}</h3>
                </div>
                <div className="d-flex flex-column">
                    <Link to={"https://www.funko.com/search/?q=" + prodSelected.name} target="_blank">
                        <button className="searchButton">
                            Buscar en sitio oficial
                        </button>
                    </Link>
                    <ItemCount addToCart={addToCart}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetailContainer;