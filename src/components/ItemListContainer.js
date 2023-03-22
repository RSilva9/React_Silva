import React, { useEffect, useState } from "react";
import data from "../json/funkoPop.json"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function ItemListContainer(){
    const [prodArray, setProd] = useState([])
    const params = useParams()
    const categoryName = params.categoryName
    const filteredArray = []

    useEffect(()=>{
        if(categoryName == null){
            setProd(data)
        }else{
            for(let item of data){
                if(item.category == categoryName){
                    filteredArray.push(item)
                }
            }
            setProd(filteredArray)
        }

    }, [categoryName]);

    return(
        <div id="productGrid">
            {prodArray.map((prod)=>(
                <Link to={`../producto/${prod.number}`} className="cCard">
                    <img src={prod.image} alt="..."></img>
                    <h2 className="mt-2">{prod.name}</h2>
                    <h3>{prod.category}</h3>
                </Link>
            ))}
        </div>
    );
}

export default ItemListContainer;