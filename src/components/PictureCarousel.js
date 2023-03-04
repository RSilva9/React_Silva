import React from "react";
import { useState, useEffect } from "react";
import data from "../json/funkoPop.json"
import { Carousel } from "react-bootstrap";

function PictureCarousel(){
    const [popImage, setImage] = useState([])

    useEffect(()=>{
        const imagenes = []
        for(let i=0; i<12; i++){
            imagenes.push(data[i].image)
        }
        setImage(imagenes)
    }, []);

    return (
        <Carousel>
          <Carousel.Item>
          <section className="d-flex flex-column flex-md-row align-items-center" id="prodRow">
                <div id="cell1">
                    <img src={popImage[0]} alt="First"/>
                    <img src={popImage[1]} alt="Second"/>
                    <img src={popImage[2]} alt="Third"/>
                    <img src={popImage[3]} alt="Fourth"/>
                </div>
            </section>
          </Carousel.Item>
          <Carousel.Item>
            <section className="d-flex flex-column flex-md-row align-items-center" id="prodRow">
                <div id="cell2">
                    <img src={popImage[4]} alt="First"/>
                    <img src={popImage[5]} alt="Second"/>
                    <img src={popImage[6]} alt="Third"/>
                    <img src={popImage[7]} alt="Fourth"/>
                </div>
            </section>
          </Carousel.Item>
          <Carousel.Item>
          <section className="d-flex flex-column flex-md-row align-items-center" id="prodRow">
                <div id="cell3">
                    <img src={popImage[8]} alt="First"/>
                    <img src={popImage[9]} alt="Second"/>
                    <img src={popImage[10]} alt="Third"/>
                    <img src={popImage[11]} alt="Fourth"/>
                </div>
            </section>
          </Carousel.Item>
        </Carousel>
      );

}

export default PictureCarousel;