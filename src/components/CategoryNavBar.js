import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromDB } from '../firestore';

function CategoryNavBar() {

    const [categorias, setCategorias] = useState([])
    const newArr = []

    async function readData(){
        let response = await getProductsFromDB()
        for(let item of response){
            if(!newArr.includes(item.category)){
                newArr.push(item.category)
            }
        }
        setCategorias(newArr)
    }

    useEffect(()=>{
        readData()
    },[])

    return (
    <nav id="containerNavBar">
        <div className='d-flex justify-content-around flex-wrap'>
        {
            categorias.map((cat)=>{
                return(
                    <Link to={`/catalogo/${cat}`} key={cat}>{cat}</Link>
                )
            })
        }
        </div>
    </nav>
    );
}

export default CategoryNavBar;
