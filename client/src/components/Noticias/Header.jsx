import React from 'react'
import images_1 from './LogoCompleto.png'
import './Noticia.css'

function Header() {
    return ( 
        <div className='header'>
           <img className = "logo"  src= {images_1} alt='Imagen no encontrada'/>
           <h3 className = 'Premiers'>Premiere Movies, the most recent movies released in the world of cinema...</h3>
        </div>
     )

}

export default Header;