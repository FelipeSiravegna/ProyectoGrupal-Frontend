import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Button from '@mui/material/Button'
import Input from '@mui/material/Input';
import './searchbar.css'
import { searchByName } from '../../redux/actions';
import TextField from '@mui/material/TextField';

export default function SearchLog() {
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    function handleChange(e) {
        e.preventDefault()
        setInput(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(searchByName(input))
    }

    return (
        <div className='search2'>
            <label>
                <TextField id="standard-basic" size="small" label="Search Movies..." color='rojo' className='buscar2' variant="filled" value={input} onChange={(e) => handleChange(e)} />
                <Button onClick={e => handleClick(e)} className='botonBusqueda2' variant="contained" color="rojo">
                    Search
                </Button>
            </label>
        </div>
    )
}