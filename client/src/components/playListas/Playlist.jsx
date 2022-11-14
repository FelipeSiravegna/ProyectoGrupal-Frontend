import React, { useRef } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import './PlayList.css'

export default function Playlist(props){
const scrollCarrusel = useRef()
console.log(props)
const handleClickRigth = () => {
    scrollCarrusel.current.scrollLeft += scrollCarrusel.current.offsetWidth
}
const handleClickLeft = () => {
    scrollCarrusel.current.scrollLeft -= scrollCarrusel.current.offsetWidth
}

    return(
        <div className='peliculas-recomendadas'>
            <div className='contenedor-titulo-controler'>
                <h3>{props.name}</h3>
                <div className='indicadores'>
    
                </div>
            </div>
            <div className='contenedor-principal'>
                
                <button onClick={handleClickLeft} id='flecha-izquierda' className='flecha-izquierda'><ArrowBackIosIcon/></button>

                <div ref={scrollCarrusel} className='contenedor-carrusel'>
                    <div className='carrusel'>
                        {
                            props.peliculas.length !== 0 ? props.peliculas.rows.map(a => {
                            
                return <div className='pelicula'>
                <img key = {a.id} src = {a.image}  />
                </div>
            }) : <Box className='carga'  sx={{ display: 'flex' }}>
            <CircularProgress color="rojo" />
          </Box>
        } 
                        
                    </div>
                </div>

                <button onClick={handleClickRigth} id='flecha-derecha' className='flecha-derecha'><ArrowForwardIosIcon/></button>
            
            </div>

        </div>
    )
}