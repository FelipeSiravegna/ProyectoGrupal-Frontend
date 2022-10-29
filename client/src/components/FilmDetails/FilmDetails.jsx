import './FilmDetails.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { getMovieDetail} from '../../redux/actions';
import { useParams } from "react-router-dom";
import fondoDetalle from '../media/fondoDetalle.jpg'
import NavbarP from '../NavbarP/NavbarP';
import StarHalf from '@mui/icons-material/StarHalf';
import QueueIcon from '@mui/icons-material/Queue';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Button from '@mui/material/Button'
import GroupsIcon from '@mui/icons-material/Groups';
import Logo from '../media/Logo.png'
const FilmDetails = () => {


    const dispatch = useDispatch();
    const params = useParams();
    const { idFilm } = params
    const filmDetails = useSelector(state => state.detail)
    
    useEffect(() => {
      dispatch(getMovieDetail(idFilm))
    }, [dispatch, idFilm])

    console.log(filmDetails)

  return (
      <div>
      <img className='fondo'src={fondoDetalle} alt="" />
      <NavbarP/>
      <div className='Contenedor'> 

      <div className='nombre'>
        <ul><h1>{filmDetails.name}</h1></ul>
      </div>

      <div className='foto'> 
      <img className='ImagenPelicula' src={filmDetails.image ? filmDetails.image : Logo} alt="" />



<p className='emojis'></p>
      
        <StarHalf color='amarillo' fontSize="large" className='icono' /> 
        <p className='valores'>{filmDetails.rating ? filmDetails.rating : 0}</p>

      
        <GroupsIcon color='azul' sx={{ fontSize: 40 }} className='icono2' /> 
        <p  className='valores2'>{filmDetails.popularity ? filmDetails.popularity : 0}</p>

      
        <QueueIcon color='gris' sx={{ fontSize: 30 }}  className='icono3'/> 
        <p  className='valores3'>{filmDetails.save ? filmDetails.save : 0}</p>
    
      
      </div>

      <div className='descripcion'>
        <p> {filmDetails.description} </p>
      </div>

    <div className='Tab'>

      <Tabs  className='tabs' id="controlled-tab-example">
      <Tab eventKey="contact" title="GENRES">
       {filmDetails.genres}
      </Tab>
      <Tab eventKey="profile" title="DETAILS">
      <li>Language: {filmDetails.language}</li>
      <li>Duration: {filmDetails.duration}</li>

      </Tab>
      <Tab eventKey="home" title="CAST" className='cast'>
      {filmDetails.fullCast}
      </Tab>
    </Tabs>

<div className='trailer'>
    
 <a href={filmDetails.trailer}> 
 <Button variant="text" color="rojo" className="botones" > <YouTubeIcon fontSize="large"/> watch movie preview</Button></a>
</div>

    </div>  
   </div>

   <div className='comentarios'>
    <label>REVIEWS</label>
   </div>
 </div>
  )
}

export default FilmDetails