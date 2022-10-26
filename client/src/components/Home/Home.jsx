import React, { Component } from 'react';
import './Home.css';
import Button from '@mui/material/Button'
import { useSelector } from 'react-redux';





const Home = () => {
  const data = useSelector(state => {
    console.log(state)
  })
  return (


    
      <div className="App">
        <Button color="rojo" variant='contained'>
          PRUEBA
        </Button>
        <Button color="rojo2" variant='contained'>
          PRUEBA
        </Button>
        <Button color="gris" variant='contained'>
          PRUEBA
        </Button>
        <Button color="blanco" variant='contained' >
          PRUEBA
        </Button>
        <Button color="amarillo" variant='contained'>
          PRUEBA
        </Button>
        <Button color="azul" variant='contained'>
          PRUEBA
        </Button>

        <Button variant='contained' className='NEGRO'>
          PRUEBA
        </Button>

  
      </div>
    );
  }


export default Home;