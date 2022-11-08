import React from 'react'
import './CardsRotate.css'
import { useDispatch, useSelector } from 'react-redux'
import { getComingSoon } from '../../redux/actions'
import { useEffect } from 'react'
import logo from '../media/LogoCompleto.png'

const CardsRotate = ({imagen, name, date}) => {
   
  return (
    <div>
        
            <div className='cartasEstreno'>
                <div className='frontal'>
                    <img  className='porfa' src={imagen ? imagen : logo}/>
                </div>
                <div className='trasero'>
                    <h1>{name}
                    <br></br>
                    {date}  
                    </h1>
                </div>
            </div>
              
        </div>
  )
}

export default CardsRotate