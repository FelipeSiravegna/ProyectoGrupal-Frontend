import React from 'react'
import './ListUser.css'
import { useState } from 'react'
import Button from '@mui/material/Button';
import Modal from 'react-bootstrap/Modal';
import { compareSelec, searchCompare, resetSearch, listDetails } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect } from 'react';
import Stack from '@mui/material/Stack';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Link } from 'react-router-dom';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import { addMovieToList } from '../../redux/actions';

const AddMovieList = ({ idList, lista }) => {
  const dispatch = useDispatch()
  let peliculas = useSelector(state => (state.compare))
  const [show, setShow] = useState(false);
  const opciones = peliculas.length !== 0 ? peliculas.rows.map(a => a.name) : null
  let eleccion1 = useSelector(state => (state.busqueda1))

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [boton, setBoton] = useState(false)

  function handleChange(e) {
    dispatch(searchCompare(e))
  }

  function handleClick(e) {
    dispatch(addMovieToList(idList, e))
  }

  useEffect(() => {
    dispatch(compareSelec())
    dispatch(listDetails(idList))
  }, [show])

  //componentWillUnmount
  useEffect(() => {
    return () => {
      dispatch(resetSearch());
    }
  }, [])

  return (
    <div>
      <Button className='agregar' variant='outlined' color='verde' onClick={handleShow}>
        <PlaylistAddIcon color='verde' sx={{ fontSize: 40 }} />
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add movies to list</Modal.Title>
        </Modal.Header>
        <Modal.Body className='yu'>
          <Stack spacing={2} sx={{ width: 300 }}>
            <Autocomplete
              id="frees"
              freeSolo
              options={opciones}
              renderInput={(params) => <TextField {...params} label="Select movie..." />}
              onChange={(event, value) => handleChange(value)}
            />
          </Stack>
          <div className='funcionaporfa'>
            {eleccion1.length !== 0 ? eleccion1.rows.map(a => {
              {
                return (
                  <div className='lacartaelegida'>
                    <img className='foteli' src={a.image} alt="" />
                    <p className='nombreo'>{a.name}</p>
                    <div className='lebotone'>
                      <Link to={`/filmdetails/${a.id}`}>
                        <Button variant="text">
                          <RemoveRedEyeIcon sx={{ fontSize: 40 }} color='azul' />
                        </Button>
                      </Link>
                      <br></br>
                      <Button variant="text" onClick={() => handleClick(a.id)}>
                        <LibraryAddIcon sx={{ fontSize: 40 }} color='verde' />
                      </Button>
                    </div>
                  </div >
                )
              }
            }) : null}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color='rojo' onClick={handleClose}>
            Close
          </Button>
          <Button color='verde' onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddMovieList