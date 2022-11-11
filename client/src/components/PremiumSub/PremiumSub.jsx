import React from 'react'
import './PremiumSub.css'
import fondo from '../media/fondo.jpg'
import fondoPremium from '../media/fondoPremium.jpg'
import Button from '@mui/material/Button'
import { useDispatch } from 'react-redux';
import { subscribe } from '../../redux/actions';


const PremiumSub = () => {
  const dispatch = useDispatch()
  return (
    <div>
        <img className='fondo2'src={fondo} alt="" />
        <img className='fondo3'src={fondoPremium} alt="" />

        


<div>
<div className='contenidoPremium'>
        <Button variant="contained" sx={{ fontSize: 35 }} color="amarillo" className='botonSub' onClick={(e)=>{dispatch(subscribe())}}>SUSCRIBE FOR $499</Button>
        <h1 className='frase'>statistics, reviews, favorites, unlimited lists and much more</h1>
        </div>
        

        </div>
        
        
        
        
        
        </div>
  )
}

export default PremiumSub