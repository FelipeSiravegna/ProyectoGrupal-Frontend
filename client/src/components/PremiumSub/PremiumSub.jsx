import React from 'react'
import './PremiumSub.css'
import fondo from '../media/fondo.jpg'
import fondoPremium from '../media/fondoPremium.jpg'
import Button from '@mui/material/Button'

const PremiumSub = () => {
  return (
    <div>
        <img className='fondo2'src={fondo} alt="" />
        <img className='fondo3'src={fondoPremium} alt="" />


<div>
<div className='contenidoPremium'>
        <Button variant="contained" sx={{ fontSize: 35 }} color="amarillo" className='botonSub'>SUSCRIBE FOR $499</Button>
        </div>
        

        </div>
        
        
        
        
        
        </div>
  )
}

export default PremiumSub