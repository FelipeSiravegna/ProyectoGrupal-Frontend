import React from 'react';
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import Button from '@mui/material/Button'
import Input from '@mui/material/Input';
import './searchbar.css'
import { pages } from '../../redux/actions';

export default function Searchbar(){
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    function handleChange(e){
        setInput(e.target.value)
     }
    
    function handleClick(){
       dispatch(pages(input, 0))
       setInput('')
    }
    
    return(
        <div className='search'>
            <label>
            <Input className='buscar' placeholder='movie...' type="text" value={input} onChange={e => handleChange(e)} />
            <Button onClick={handleClick} className='botonBusqueda' variant="contained" color="rojo">
              Search
            </Button>
            </label>
        </div>
    )
}