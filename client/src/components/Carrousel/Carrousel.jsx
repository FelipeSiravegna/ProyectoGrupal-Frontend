import React from 'react'
import './Carrousel.css'
import Carousel from 'react-bootstrap/Carousel'

const Carrousel = () => {
  return (
    <div className='carrousel'>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_Argentina1985_v2/1030ed55-6ca2-43ce-849d-ec8fcc86d599._UR3000,600_SX1500_FMwebp_.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5></h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_ThisIsUs_S5_NoLocaleOnly/c5365d24-a8d1-4c87-bb9b-2f8db713351e._UR3000,600_SX1500_FMwebp_.jpeg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5></h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_DragonBallZBattleOfGods/3c09959f-0c18-481b-b12a-cae3f19747f7._UR3000,600_SX1500_FMwebp_.jpeg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5></h5>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carrousel