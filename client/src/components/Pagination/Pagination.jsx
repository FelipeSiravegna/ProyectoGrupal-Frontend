import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './Pagination.css'
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovies, pages } from '../../redux/actions';

export default function Paginado() {
  let dispatch = useDispatch()
  let pagina = useSelector(state => (state.page))
  let peliculas = useSelector(state => (state.peliculas))

  const handleChange = (e, p) => {
    dispatch(pages(p))
    dispatch(getAllMovies(p))
  }

  return (
    <div className='elPaginado'>
      <Stack spacing={2}>
        <Pagination count={9} color="rojo" sx={{ button: { color: '#ffffff' } }} onChange={handleChange} />
      </Stack>
    </div>
  );
}