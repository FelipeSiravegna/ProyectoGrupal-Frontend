import React from 'react'
import './Compare.css'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {compareSelec, searchCompare, searchCompare2} from '../../redux/actions'
import Stack from '@mui/material/Stack';
import { selectClasses } from '@mui/material';
import FilmCard from '../FilmCard/FilmCard.jsx';
import { CardCompare } from './CardCompare';

const Compare = () => {
    const dispatch = useDispatch()
    const [input, setInput] = useState('')
    let peliculas = useSelector(state => (state.compare))
    let eleccion1 = useSelector(state => (state.busqueda1))
    let eleccion2 = useSelector(state => (state.busqueda2))
    const opciones = peliculas.length !== 0 ? peliculas.rows.map(a=>a.name) : null
    

useEffect(() => {
    dispatch(compareSelec())
}, [])

function handleChange(e){
   dispatch(searchCompare(e))
 }

 function handleChange2(e){
    if(opciones.map(a=>a.name === e)){
    dispatch(searchCompare2(e))
    }else{
        console.log("ERROR")
    }
  }


return (
  <div>
    <div className='inputs'>
        <div className='contain1'>
   <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={opciones}
        renderInput={(params) => <TextField {...params} label="Select the first movie..." />}
        onChange={(event, value) => handleChange(value)}
        />
      </Stack>   
      
      
<div className='lacarta'>
            {eleccion1.length !== 0 ? eleccion1.rows.map(a => {
                return <CardCompare
                key = {a.id}
                name = {a.name}
                popularity = {a.popularity}
                image = {a.image}   
                rating = {a.rating}    
                saves = {a.saves}
                language = {a.language}
                length = {(a.length / 60).toFixed(2)}
                releaseDate = {a.releaseDate}
                pos = "izq"
                />             
            }) : null
        } 
            </div >
            </div>


      <div className='contain2'>
      <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={opciones}
        renderInput={(params) => <TextField {...params} label="Select the second movie..." />}
        onChange={(event, value) => handleChange2(value)}
      />
    </Stack>    
            <div className='lacarta2'>
            {eleccion2.length !== 0 ? eleccion2.rows.map(a => {
                return <CardCompare
                key = {a.id}
                name = {a.name}
                popularity = {a.popularity}
                image = {a.image}   
                rating = {a.rating}    
                saves = {a.saves}
                language = {a.language}
                length = {(a.length / 60).toFixed(2)}
                releaseDate = {a.releaseDate}
                pos = "der"    
                />             
            }) : null
        } 
            </div >
</div>
</div>

<div> 

            

            </div>
            </div>
  )
}

export default Compare