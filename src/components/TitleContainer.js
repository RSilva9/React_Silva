import React from 'react';
import Title from './Title';
import data from '../json/funkoPop.json'
import { useState, useEffect } from 'react';

function TitleContainer(){
    const [image, setImage] = useState([])

    useEffect(()=>{
        data.forEach(i=>{
            if(i.image == "/pops/DarthVader.webp"){
                setImage(i.image)
            }
        })
    })

    return(
        <div id="TitleContainer">
            <img src={image}></img>
            <Title greeting={<h1 className='text-center'>Los mejores Funko Pop para tu colección</h1>} />
        </div>
    )
}

export default TitleContainer;