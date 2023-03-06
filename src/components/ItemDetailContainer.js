import React from "react";
import { useState, useEffect } from "react";
import data from "../json/funkoPop.json"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ItemDetailContainer(){
    const [prodSelected, setProd] = useState({})
    const params = useParams()
    const numberProducto = params.numberProducto

    useEffect(() => {
        data.forEach(d => {
            if(d.number == numberProducto){
                setProd(d)
            }
        });
    }, []); 

    

    return(
        <div id="productDetail">
            <div className="w-50 ms-5">
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
                <Link to={"https://www.funko.com/search?term=" + prodSelected.name} target="_blank">
                    <button id="searchButton">
                        Buscar en sitio oficial
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ItemDetailContainer;