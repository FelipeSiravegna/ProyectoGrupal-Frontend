import React, { Component } from 'react';
import './Home.css';
import Button from '@mui/material/Button'
import { useSelector } from 'react-redux';
import fondo from '../media/fondo.jpg'
import NavbarP from '../NavbarP/NavbarP';
import Carrousel from '../Carrousel/Carrousel';
import Acordeon from '../Acordeon/Acordeon';
import InfoHome from '../InfoHome/InfoHome';



const Home = () => {
  const data = useSelector(state => {
    console.log(state)
  })
  return (
    
    <div className="App">
<img className='fondo'src={fondo} alt="" />
<NavbarP/>
       <Carrousel/>
  <InfoHome/>
       <Acordeon/>
      </div>
    );
  }


export default Home;