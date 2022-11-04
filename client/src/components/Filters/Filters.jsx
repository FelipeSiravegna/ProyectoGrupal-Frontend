import React from 'react'
import './Filters.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { allGenres, filterGenres} from '../../redux/actions'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';



const Filters = () => {
const dispatch = useDispatch()
const generos = useSelector(state => state.genres)

const [age, setAge] = useState('');
const [open, setOpen] = useState(false);



useEffect(() => {
  dispatch(allGenres())
  }, [])


  function onSelectChange(e){
    console.log(e.target.value)
    dispatch(filterGenres(e.target.value))
}

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          label="Age"
          onChange={e => onSelectChange(e)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {generos.map(a=> 
          <MenuItem key={a.id} value={a.name}>{a.name}</MenuItem>
          )}
        </Select>
      </FormControl>
      

      </div>
  )
}

export default Filters