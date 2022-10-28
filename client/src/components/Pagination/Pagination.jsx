import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';

export default function BasicPagination() {
  // activar cuando este listo
//  let dispatch = useDispatch()
  const handleChange=(e, p)=>{
    console.log(e,p)
    // activar cuando este listo
    // dispatch(pages(p))
  }
  return (
    <Stack spacing={2}>
      <Pagination count={10} color="primary" onChange={handleChange}/>
    </Stack>
  );
}
