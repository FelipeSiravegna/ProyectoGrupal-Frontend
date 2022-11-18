import React from 'react'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { useState } from 'react';

const sort = [
  {
    value: 'Normal',
    label: 'Normal',
  },
  {
    value: 'Ascending',
    label: 'Ascending',
  },
  {
    value: 'Descending',
    label: 'Descending',
  },
  {
    value: 'High',
    label: 'High Popularity',
  },
  {
    value: 'Low',
    label: 'Low Popularity',
  },
];

const SortBy = () => {
  const [sorts, setSorts] = useState('');
  // activar cuando este listo
  // let dispatch = useDispatch()

  const handleChange = (e) => {
    // dispatch(pages(1))
    // activar cuando este listo
    setSorts(e.target.value);
    if (e.target.value === "Ascending") {
      // dispatch(sortAsc(e.target.value))
      console.log(e.target.value)
    }
    else if (e.target.value === "Descending") {
      // dispatch(sortAsc(e.target.value))         
      console.log(e.target.value)
    }
    else if (e.target.value === "High") {
      // dispatch(sortPopularity(e.target.value))   
      console.log(e.target.value)
    }
    else if (e.target.value === "Low") {
      // dispatch(sortPopularity(e.target.value))
      console.log(e.target.value)
    } else {
      // dispatch(reset())
      console.log(e.target.value)
    }
  }
  
  return (
    <>
      {/* <select className={styles.select} onChange={e=>handleOnChangeAlpha(e)}>
            <option>Sort By</option>
            <option value="Normal">Normal</option>
            <option value="Ascending">Ascending</option>
            <option value="Descending">Descending</option>
            <option value="High">High Rating</option>
            <option value="Low">Low Rating</option>
        </select> */}
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-select-currency"
          select
          label="Sort By"
          value={sorts}
          onChange={handleChange}
        >
          {sort.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </>
  )
}

export default SortBy