import React from 'react'
import './FilmDetails.css'
import { useDispatch, useSelector } from "react-redux";
//import { traerFilmDetalle} from '../../redux/actions';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import fondoDetalle from '../media/fondoDetalle.jpg'
import NavbarP from '../NavbarP/NavbarP';
import StarHalf from '@mui/icons-material/StarHalf';
import CommentIcon from '@mui/icons-material/Comment';
import QueueIcon from '@mui/icons-material/Queue';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Button from '@mui/material/Button'

const FilmDetails = () => {

  


    const dispatch = useDispatch();
    const params = useParams();
    const { idFilm } = params
    const FilmDetails = useSelector(state => state.filmDetalle)
    
    
    //useEffect(() => {
    //  dispatch(traerFilmDetalle(idFilm))
    //}, [dispatch, idFilm])

  return (
      <div>
      <img className='fondo'src={fondoDetalle} alt="" />
      <NavbarP/>
      <div className='Contenedor'> 

      <div className='nombre'>
        <ul><h1> Cadena Perpetua</h1></ul>
      </div>

      <div className='foto'> 
      <img className='ImagenPelicula' src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/dc1fX265fZIIY5Hab8I7CdETyJy.jpg" alt="" />
<p className='emojis'></p>


      <h className='ratings'></h>
        <StarHalf color='amarillo' fontSize="large"/> <p className='valores'>25.5</p>

      <h className='totalComentarios'></h>
        <CommentIcon color='azul' fontSize="large"/> <p  className='valores'>433</p>

      <h className='totalPlaylist'></h>
        <QueueIcon color='gris' fontSize="large"/> <p  className='valores'>449</p>
      
      
      </div>

      <div className='descripcion'>
        <p> Lorem ipsum dolor sit amet consectetur lore, adipisicing elit. Delectus alias, reiciendis aliquid sunt quas tempora? Eaque, ex quibusdam reiciendis vero, distinctio nesciunt earum qui optio veritatis voluptatem consequatur magni. Amet?
           </p>
      </div>

    <div className='Tab'>

      <Tabs  className='tabs' id="controlled-tab-example">
      <Tab eventKey="contact" title="GENRES">
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nisi vitae repellendus doloremque quo. Tempora, eveniet ad consequuntur minima eligendi, quidem sapiente minus iste labore inventore aspernatur! Quisquam, veritatis iusto.
      </Tab>
      <Tab eventKey="profile" title="DETAILS">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsum quidem placeat voluptatibus fugiat neque nulla, minima velit assumenda quasi doloremque dicta magnam quam? Minima sequi esse harum in tempore?
      </Tab>
      <Tab eventKey="home" title="CAST" className='cast'>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam dolore fugit delectus cum possimus ipsum, ullam ea doloremque repudiandae rerum libero mollitia eius, facilis eum magni consectetur nisi exercitationem aperiam!
      </Tab>
    </Tabs>

<div className='trailer'>
    
 <a href="https://youtube.com/"> 
 <Button variant="text" color="rojo" className="botones" > <YouTubeIcon fontSize="large"/> watch movie preview</Button></a>
</div>

    </div>  
   </div>

   <div className='comentarios'>
    <label> REVIEWS</label>
   </div>
 </div>
  )
}

export default FilmDetails