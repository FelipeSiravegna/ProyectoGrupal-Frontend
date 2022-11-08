import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import CarrouselPremium from '../media/CarrouselPremium.png'
import CarrouselFuncion from '../media/CarrouselFuncion.png'
import THOR from '../media/THOR.png'

const Carrousel2 = () => {
  return (
    <div className='carrousel2'>
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={CarrouselPremium}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5></h5>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
          
        
              className="d-block w-100"
              src={CarrouselFuncion}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5></h5>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={THOR}
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

export default Carrousel2