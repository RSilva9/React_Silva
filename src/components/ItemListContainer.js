import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getProductsFromDB } from "../firestore";

getProductsFromDB()

function ItemListContainer(){
    const [prodArray, setProd] = useState([])
    const params = useParams()
    const categoryName = params.categoryName
    const filteredArray = []

    async function readData(){
        let response = await getProductsFromDB()
            if(categoryName == null){
                setProd(response)
            }else{
                for(let item of response){
                    if(item.category == categoryName){
                        filteredArray.push(item)
                    }
                }
                setProd(filteredArray)
            }
    }

    useEffect(()=>{
        readData()
    }, [categoryName]);

    return(
        <div id="productGrid">
            {prodArray.map((prod)=>(
                <Link to={`../producto/${prod.number}`} className="cCard" key={prod.number}>
                    <img src={prod.image} alt="..."></img>
                    <h2 className="mt-2">{prod.name}</h2>
                    <h3>{prod.category}</h3>
                </Link>
            ))}
        </div>
    );
}

export default ItemListContainer;