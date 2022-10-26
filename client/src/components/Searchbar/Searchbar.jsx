import React from 'react';
import { useState } from 'react';
import {useDispatch} from 'react-redux'

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
        <div>
            <h1>Searchbar component!</h1>
            <label><input type="text" value={input} onChange={e => handleChange(e)} /><button onClick={handleClick}>Search</button></label>
        </div>
    )
}