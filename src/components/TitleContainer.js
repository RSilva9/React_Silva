import React from 'react';
import Title from './Title';
import { useState, useEffect } from 'react';
import { getProductsFromDB } from "../firestore";

function TitleContainer(){
    const [image, setImage] = useState([])
    
    async function readData(){
        let response = await getProductsFromDB()
        response.forEach(item=>{
            if(item.image == "/pops/DarthVader.webp"){
                setImage(item.image)
            }
        })
    }

    useEffect(()=>{
        readData()
    })

    return(
        <div id="TitleContainer">
            <img src={image}></img>
            <Title greeting={<h1 className='text-center'>Los mejores Funko Pop para tu colección</h1>} />
        </div>
    )
}

export default TitleContainer;