import React from "react";
import { useState, useEffect } from "react";
import data from "../json/funkoPop.json"
import { Carousel } from "react-bootstrap";

function PictureCarousel(){
    const [popImage, setImage] = useState([])

    useEffect(()=>{
        const imagenes = []
        data.forEach(d=>{
            imagenes.push(d.image)
        })
        setImage(imagenes)
    }, []);

    return (
        <Carousel controls={false} indicators={false} interval={2500}>
          <Carousel.Item>
            <section className="d-flex align-items-center">
                <div id="cell1">
                    <img src={popImage[0]} alt="First"/>
                    <img src={popImage[5]} alt="Second"/>
                    <img src={popImage[8]} alt="Third"/>
                </div>
            </section>
          </Carousel.Item>
          <Carousel.Item>
            <section className="d-flex align-items-center">
                <div id="cell2">
                    <img src={popImage[12]} alt="First"/>
                    <img src={popImage[17]} alt="Second"/>
                    <img src={popImage[24]} alt="Third"/>
                </div>
            </section>
          </Carousel.Item>
          <Carousel.Item>
            <section className="d-flex align-items-center">
                <div id="cell3">
                    <img src={popImage[6]} alt="First"/>
                    <img src={popImage[7]} alt="Second"/>
                    <img src={popImage[8]} alt="Third"/>
                </div>
            </section>
          </Carousel.Item>
        </Carousel>
      );

}

export default PictureCarousel;