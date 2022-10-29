import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './Pagination.css'

export default function Paginado() {
  return (
    <div className='elPaginado'>
    <Stack  spacing={2}>
     <Pagination   count={10} color="rojo" variant="outlined" /> 
    </Stack>    
</div>



  );
}
