import React from 'react';
import './Noticia.css'

const Noticia = (props) => {

    const { original_title, popularity, release_date, overview, poster_path } = props.noticia

   /*   <img className="img-thumbnail thumb" alt="poster" src={`https://image.tmdb.org/t/p/w500${this.props.movie.poster_path}`}/>  */
   let contenido = overview.substring(0, 268);
    return (
        
      <div className = 'col-md-3'>
            <div className="card_2">
                <img className="img" alt="poster" src={`https://image.tmdb.org/t/p/w500${poster_path}`}/>
                    <h6 className='release'>Release_date: {release_date}</h6>
                    <h6 className='popularity'>Popularity: {popularity} likes</h6>
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