import React from 'react'
import './Nosotros.css'
import fotoFede from '../media/FotoFede.jpg'
import CardsRotate from '../CardsRotate/CardsRotate'
import fondo from '../media/fondo.jpg'
import Logo from '../media/Logo.png'
import NavbarP from '../NavbarP/NavbarP';
import { miembros } from './Nosotros'

const Nosotros = () => {
  return (
    <div>
         <img className='fondo' src={fondo} alt="" />
            <NavbarP />
            <h1 className='developers'>- DEVELOPERS -</h1>

<div className='cartitas'>
{miembros.map(a=> 
        <CardsRotate
        imagen={a.img}
        name={a.nombre}
        linke={a.linkedin}
        git={a.github}
        />
        )}
        </div>
        </div>
  )
}

export default Nosotros