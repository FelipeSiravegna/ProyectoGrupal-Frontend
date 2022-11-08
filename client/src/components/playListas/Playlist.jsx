import React, { useRef } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './PlayList.css'

export default function Playlist() {
    const scrollCarrusel = useRef()

    const handleClickRigth = () => {
        scrollCarrusel.current.scrollLeft += scrollCarrusel.current.offsetWidth
    }
    const handleClickLeft = () => {
        scrollCarrusel.current.scrollLeft -= scrollCarrusel.current.offsetWidth
    }

    return (
        <div className='peliculas-recomendadas'>
            <div className='contenedor-titulo-controler'>
                <h3>PLAYLIST</h3>
                <div className='indicadores'>
                    <button></button>
                    <button></button>
                </div>
            </div>
            <div className='contenedor-principal'>
                <button onClick={handleClickLeft} id='flecha-izquierda' className='flecha-izquierda'><ArrowBackIosIcon /></button>
                <div ref={scrollCarrusel} className='contenedor-carrusel'>
                    <div className='carrusel'>
                        <div className='pelicula'>
                            <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/rhr4y79GpxQF9IsfJItRXVaoGs4.jpg" alt="" />
                        </div>
                        <div className='pelicula'>
                            <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/tM0hpWw3GONam6TKcMMciecHjhT.jpg" alt="" />
                        </div>
                        <div className='pelicula'>
                            <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/xFw9RXKZDvevAGocgBK0zteto4U.jpg" alt="" />
                        </div>
                        <div className='pelicula'>
                            <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/rhr4y79GpxQF9IsfJItRXVaoGs4.jpg" alt="" />
                        </div>
                        <div className='pelicula'>
                            <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/tM0hpWw3GONam6TKcMMciecHjhT.jpg" alt="" />
                        </div>
                        <div className='pelicula'>
                            <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/xFw9RXKZDvevAGocgBK0zteto4U.jpg" alt="" />
                        </div>
                        <div className='pelicula'>
                            <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/xFw9RXKZDvevAGocgBK0zteto4U.jpg" alt="" />
                        </div>
                        <div className='pelicula'>
                            <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/xFw9RXKZDvevAGocgBK0zteto4U.jpg" alt="" />
                        </div>
                        <div className='pelicula'>
                            <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/rhr4y79GpxQF9IsfJItRXVaoGs4.jpg" alt="" />
                        </div>
                        <div className='pelicula'>
                            <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/tM0hpWw3GONam6TKcMMciecHjhT.jpg" alt="" />
                        </div>
                        <div className='pelicula'>
                            <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/xFw9RXKZDvevAGocgBK0zteto4U.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <button onClick={handleClickRigth} id='flecha-derecha' className='flecha-derecha'><ArrowForwardIosIcon /></button>
            </div>
        </div>
    )
}