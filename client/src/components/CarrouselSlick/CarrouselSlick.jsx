import React, { Component } from "react";
import Slider from "react-slick";
import './CarrouselSlick.css'
import {getAllMovies, getComingSoon} from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';


const CarrouselSlick = () => {   
    let estrenos = useSelector(state => (state.moviesSoon))
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getComingSoon()) 
        }, [])
  

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      vertical: true,
      arrows : false,
    };


    return (
      <div className="elslid">
        <Slider {...settings} className='ey'>
            {estrenos.map(a => 
          <div>
            <img className="slick" src={a.image} alt="" />
          </div>
          )}
        </Slider>
      </div>
    );
  }
  

  
export default CarrouselSlick