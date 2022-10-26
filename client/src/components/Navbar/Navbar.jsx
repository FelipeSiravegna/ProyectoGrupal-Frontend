import React from 'react'
import './Navbar.css';
import imagen from '../media/LogoCompleto.png'
import { AppBar, Toolbar, Typography } from '@mui/material';


const Navbar = () => {
  return (
      <div>
        <img className='imagen'src={imagen} alt="" />
        <h1 className='borde'>.</h1>
        
    <div className='contenido'>     
    <button>HOLA</button>   
    <span>HOLA</span> 
    <span>HOLA</span> 
    </div>
    </div>
  )
}

export default Navbar

