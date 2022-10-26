import React from 'react'
import './Navbar.css';
import imagen from '../media/LogoCompleto.png'
import { AppBar, Toolbar, Typography } from '@mui/material';
import Button from '@mui/material/Button'

const Navbar = () => {
  return (
      <div>
        <img className='imagen'src={imagen} alt="" />
        <h1 className='borde'>.</h1>
        
    <div className='contenido'>     
    <Button color="rojo" >
          LOGIN
        </Button>
        <Button color="rojo" variant='contained'>
          REGISTER
        </Button>
    </div>
    </div>
  )
}

export default Navbar

