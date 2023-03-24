import { useState, useEffect, React } from "react";
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
            <div>
                <img src={prodSelected.image}></img>
            </div>
            <div>
                <div id="productDetailInfo">
                    <div>
                        <h3>Nombre:</h3>
                        <h2>{prodSelected.name}</h2>
                    </div>
                    <div className="my-4">
                        <h3>Colección:</h3>
                        <h2>{prodSelected.category}</h2>
                    </div>
                </div>
                <div className="my-5">
                    <h4>${prodSelected.price}</h4>
                </div>
                <div id="productDetailButtons">
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