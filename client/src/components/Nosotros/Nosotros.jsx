import React from 'react'
import './Nosotros.css'
import fotoFede from '../media/FotoFede.jpg'
import CardsRotate from '../CardsRotate/CardsRotate'
import fondo from '../media/fondo.jpg'
import Logo from '../media/Logo.png'
import NavbarP from '../NavbarP/NavbarP';

const Nosotros = () => {
  return (
    <div>
         <img className='fondo' src={fondo} alt="" />
            <NavbarP />
            <h1 className='developers'>- DEVELOPERS -</h1>


        <CardsRotate
        imagen={fotoFede}
        name="Federico Gutierrez"
        date="1999"
        
        
        />
        
        </div>
  )
}

export default Nosotros