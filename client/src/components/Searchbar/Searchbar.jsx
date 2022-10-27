import React from 'react';
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import Button from '@mui/material/Button'
import Input from '@mui/material/Input';
import './searchbar.css'

export default function Searchbar(){
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    function handleChange(e){
        setInput(e.target.value)
     }
    
    function handleClick(){
       dispatch()
       setInput('')
    }
    
    return(
        <div className='search'>
            <label>
            <h2 className='titulo'>Search movie!</h2>
            <Input className='buscar' placeholder='movie...' type="text" value={input} onChange={e => handleChange(e)} />
            <Button onClick={handleClick} variant="contained" color="rojo">
              Search
            </Button>
            </label>
        </div>
    )
}