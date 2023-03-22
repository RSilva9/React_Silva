import React from 'react';
import { Link } from 'react-router-dom';
import data from "../json/funkoPop.json"

function ContainerNavBar() {

    const categorias = []

    for(let item of data){
        if(!categorias.includes(item.category)){
            categorias.push(item.category)
        }
    }

    return (
    <nav id="containerNavBar">
        <div className='d-flex justify-content-around flex-wrap'>
        {
            categorias.map(item=>(
                <Link to={`/catalogo/${item}`}>{item}</Link>
            ))
        }
        </div>
    </nav>
    );
}

export default ContainerNavBar;
