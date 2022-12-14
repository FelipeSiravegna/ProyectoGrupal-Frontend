import React from 'react'
import './Filters.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { get4Search, allDirector, allGenres } from '../../redux/actions'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Filters = () => {
  const dispatch = useDispatch()
  const generos = useSelector(state => state.genres)
  const directores = useSelector(state => state.directors)
  const [envio, setEnvio] = useState({ genres: "null", director: "null", popularity: "null", rating: "null" })

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
    let objeto = envio
    objeto.genres = e.target.value
    setEnvio(objeto)
    if (e.target.value === "None") {
      let objeto = envio
      objeto.genres = "null"
      setEnvio(objeto)
      return dispatch(get4Search(envio))
    }
    dispatch(get4Search(envio))
  }

  function onSelectDirector(e) {
    setAge2(e.target.value)
    let objeto = envio
    objeto.director = e.target.value
    setEnvio(objeto)
    if (e.target.value === "None") {
      let objeto = envio
      objeto.director = "null"
      setEnvio(objeto)
      return dispatch(get4Search(envio))
    }
    dispatch(get4Search(envio))
  }

  function onSelectPopularity(e) {
    setAge3(e.target.value)
    let objeto = envio
    objeto.popularity = e.target.value
    setEnvio(objeto)
    if (e.target.value === "None") {
      let objeto = envio
      objeto.popularity = "null"
      setEnvio(objeto)
      return dispatch(get4Search(envio))
    }
    dispatch(get4Search(envio))
  }

  function onSelectRating(e) {
    setAge4(e.target.value)
    let objeto = envio
    objeto.rating = e.target.value
    setEnvio(objeto)
    if (e.target.value === "None") {
      let objeto = envio
      objeto.rating = "null"
      setEnvio(objeto)
      return dispatch(get4Search(envio))
    }
    dispatch(get4Search(envio))
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
          <MenuItem value="DESC">Less Popular</MenuItem>
          <MenuItem value="ASC">Most Popular</MenuItem>
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
          <MenuItem value="DESC">Less Rating</MenuItem>
          <MenuItem value="ASC">Most Rating</MenuItem>
        </Select>
      </FormControl>

    </div>
  )
}

export default Filters