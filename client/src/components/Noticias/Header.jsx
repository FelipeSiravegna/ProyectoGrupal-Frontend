import React from 'react'
import images_1 from './LogoCompleto.png'
import './Noticia.css'

function Header() {
   return (
      <div>
         <div className='header'>
            <img className="logo" src={images_1} alt='' />
            <h3 className='Premiers'>FILMS THAT WILL BE FOUND SOON IN THE CORNER MOVIES...</h3>
         </div>
      </div>
   )
}

export default Header;