import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './Pagination.css'
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovies, pages } from '../../redux/actions';

export default function Paginado({ movies }) {
  let dispatch = useDispatch()
  let pagina = useSelector(state => (state.page))
  let peliculas = useSelector(state => (state.peliculas))

  const handleChange = (e, p) => {
    dispatch(pages(p))
    dispatch(getAllMovies(p))
  }

  let counts = Math.ceil(movies / 10)
  console.log(counts)

  return (
    <div className='elPaginado'>
      <Stack spacing={2}>
        <Pagination count={counts === 0 ? 1 : counts} color="rojo" sx={{ button: { color: '#ffffff' } }} onChange={handleChange} />
      </Stack>
    </div>
  );
}