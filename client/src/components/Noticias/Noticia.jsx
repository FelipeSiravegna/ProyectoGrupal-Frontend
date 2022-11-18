import React from 'react';
import './Noticia.css'

const Noticia = (props) => {
    const { original_title, overview, poster_path } = props.noticia

    let contenido = overview.substring(0, 268);
    return (
        <div className='col-md-3'>
            <div className="card_2">
                <img className="luis" alt="poster" src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
                <div className='card-body'>
                    <h5 className='title'>{original_title}</h5>
                    <p className='contenido'>{contenido}...</p>
                </div>
            </div>
        </div>
    )
}

export default Noticia;