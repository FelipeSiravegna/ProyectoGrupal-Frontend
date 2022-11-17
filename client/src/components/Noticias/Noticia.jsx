import React from 'react';
import './Noticia.css'
import CardsRotate from '../CardsRotate/CardsRotate'
import InfoHome from '../InfoHome/InfoHome';
import NavbarP from '../NavbarP/NavbarP';
import fondo from '../media/fondo.jpg'

const Noticia = (props) => {
    const { original_title, popularity, release_date, overview, poster_path } = props.noticia

   /*   <img className="img-thumbnail thumb" alt="poster" src={`https://image.tmdb.org/t/p/w500${this.props.movie.poster_path}`}/>  */
   let contenido = overview.substring(0, 268);
    return (
        
        <div className = 'col-md-3'>
            
            <div className="card_2">
                <img className="luis" alt="poster" src={`https://image.tmdb.org/t/p/w500${poster_path}`}/>
                    <div className='card-body'>
                        <h5 className='title'>{original_title}</h5>
                        <p className='contenido'>{contenido}...</p>
                       { /* <a href = {url} className = 'btn btn-prymary'>Leer mas..</a> */}
                    </div>
            </div>
            
           

      </div>
    )
}
export default Noticia;