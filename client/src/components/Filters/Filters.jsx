import React from 'react'
import './Filters.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { allDirector, allGenres, filterDirector, filterGenres, getAllMovies, orderPopularity, orderRating } from '../../redux/actions'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { minHeight } from '@mui/system'

const Filters = () => {
  const dispatch = useDispatch()
  const generos = useSelector(state => state.genres)
  const directores = useSelector(state => state.directors)
  const [age, setAge] = useState('');
  const [open, setOpen] = useState(false);
  const [age2, setAge2] = useState('');
  const [open2, setOpen2] = useState(false);
  const [age3, setAge3] = useState('');
  const [age4, setAge4] = useState('');

  useEffect(() => {
    dispatch(allGenres())
    dispatch(allDirector())
  }, [])

  function onSelectChange(e) {
    setAge(e.target.value)
    if (e.target.value === "None") return dispatch(getAllMovies(1))
    dispatch(filterGenres(e.target.value))
  }

  function onSelectDirector(e) {
    setAge2(e.target.value)
    if (e.target.value === "None") return dispatch(filterDirector(1))
    dispatch(filterDirector(e.target.value))
  }

  function onSelectPopularity(e) {
    setAge3(e.target.value)
    if (e.target.value === "None") return dispatch(getAllMovies(1))
    dispatch(orderPopularity(e.target.value))
  }

  function onSelectRating(e) {
    setAge4(e.target.value)
    if (e.target.value === "None") return dispatch(getAllMovies(1))
    dispatch(orderRating(e.target.value))
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };

  return (
    <div className='filtritos' >
      <FormControl sx={{ m: 0, minWidth: 90 }} size="small" style={{ color: "#f44336" }}>
        <InputLabel id="demo-controlled-open-select-label" style={{ color: "#f44336" }}>Genres</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          label="Grouping"
          color='rojo'
          onChange={e => onSelectChange(e)}
        >
          <MenuItem value={"None"}>
            <em>None</em>
          </MenuItem>
          {generos.map(a =>
            <MenuItem key={a.id} value={a.name}>{a.name}</MenuItem>
          )}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 0, minWidth: 98 }} size="small" style={{ color: "#f44336" }}>
        <InputLabel id="demo-controlled-open-select-label" style={{ color: "#f44336" }}>Director</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open2}
          onClose={handleClose2}
          onOpen={handleOpen2}
          value={age2}
          label="Grouping"
          color='rojo'
          onChange={e => onSelectDirector(e)}
        >
          <MenuItem value={"None"}>
            <em>None</em>
          </MenuItem>
          {directores.map(a =>
            <MenuItem key={a.id} value={a.name}>{a.name}</MenuItem>
          )}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 0, minWidth: 110 }} size="small" style={{ color: "#f44336" }}>
        <InputLabel id="demo-controlled-open-select-label" style={{ color: "#f44336" }}>Popularity</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          value={age3}
          onChange={e => onSelectPopularity(e)}
          color='rojo'
        >
          <MenuItem value={"None"}><em>None</em></MenuItem>
          <MenuItem value="ASC">Less Popular</MenuItem>
          <MenuItem value="DESC">Most Popular</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 0, minWidth: 110 }} size="small" style={{ color: "#f44336" }}>
        <InputLabel id="demo-controlled-open-select-label" style={{ color: "#f44336" }}>Rating</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          value={age4}
          onChange={e => onSelectRating(e)}
          color='rojo'
        >
          <MenuItem value={"None"}><em>None</em></MenuItem>
          <MenuItem value="ASC">Less Rating</MenuItem>
          <MenuItem value="DESC">Most Rating</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default Filters