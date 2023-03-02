import React from "react";
import { useState, useEffect } from "react";
import data from "../json/funkoPop.json"
import { Carousel } from "bootstrap";

function PictureCarousel(){
    const [popImage, setImage] = useState([])

    useEffect(()=>{
        const imagenes = []
        for(let i=0; i<8; i++){
            imagenes.push(data[i].image)
        }
        setImage(imagenes)
    }, []);

    return(
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active d-flex">
                    <img src={popImage[0]} className="d-block w-100" alt="..."></img>
                </div>

                <div className="carousel-item">
                    <img src={popImage[1]} className="d-block w-100" alt="..."></img>
                </div>

                <div className="carousel-item">
                    <img src={popImage[2]} className="d-block w-100" alt="..."></img>
                </div>

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default PictureCarousel;