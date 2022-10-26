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
              src="https://media.istockphoto.com/vectors/photo-afpgetty-vector-id1063865208?s=612x612"
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.pinimg.com/originals/21/04/5b/21045b89220b68fb67adf60f6be3fa68.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.pinimg.com/originals/b4/00/79/b400790a7f27577bda84752c365dd67a.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>

            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </div>
      );
    }

export default Carrousel