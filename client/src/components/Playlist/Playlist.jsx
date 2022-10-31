import React from 'react';

export default function Playlist(){
    return(
        <div className='contenedor'>
            <div className='titulo-controler'>
                <h3>PLAYLIST</h3>
                <div className='controler'></div>
            </div>
            <div className='contenedor-principal'>
                <button id='flecha-izquierda' className='flecha-izquierda'></button>

                <div className='contenedor-carrusel'>
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

            </div>
        </div>
    )
}