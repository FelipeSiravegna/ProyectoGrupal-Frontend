import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './Pagination.css'
import { useDispatch } from 'react-redux';
import { pages } from '../../redux/actions';


export default function Paginado() {

  const handleChange=(e, p)=>{
    console.log(e,p)
    // activar cuando este listo
    let dispatch = useDispatch()
      // activar cuando este listo
       dispatch(pages(p))
  }

  return (
    <Stack spacing={2}>
      <Pagination count={10} color="rojo" sx={{button:{color: '#ffffff'}}} onChange={handleChange}/>
    </Stack>
  );
}

