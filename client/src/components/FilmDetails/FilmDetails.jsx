import './FilmDetails.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { getMovieDetail, getAllReviews, getUserInfo } from '../../redux/actions';
import { useParams } from "react-router-dom";
import { resetDetail } from '../../redux/actions';
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
import { useAuth0 } from "@auth0/auth0-react";
import Rating from '@mui/material/Rating';
import Fab from '@mui/material/Fab';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CarrouselSlick from '../CarrouselSlick/CarrouselSlick';
import Post from '../Comments/Post';


const FilmDetails = () => {

  const dispatch = useDispatch();
  const params = useParams();
  const { idFilm } = params
  const filmDetails = useSelector(state => state.detail)
  const token = useSelector((state)=> state.idToken)
  const userDB = useSelector((state)=> state.user)
  

  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0()

  const [value, setValue] = useState(2);
  const [favorito, setFavorito] = useState(false);
  const [guardado, setGuardado] = useState(false);
  const [playlist, setPlaylist] = useState(false);


  
  const list = () => {
    setPlaylist(true)
    if (playlist === true) {
      setPlaylist(false)
    }
  }
  
  const like = () => {
    setFavorito(true)
    if (favorito === true) {
      setFavorito(false)
    }
  }
  
  const save = () => {
    setGuardado(true)
    if (guardado === true) {
      setGuardado(false)
    }
  }

  useEffect(() => {
    dispatch(getMovieDetail(idFilm))
  }, [])

  useEffect(()=>{
    dispatch(getUserInfo()) 
  },[token])


  //componentWillUnmount
  useEffect(() => {
    return () => {
      dispatch(resetDetail());
    }
  }, [])
  
  
  return (

    <div>
      <img className='fondo' src={fondoDetalle} alt="" />
      <NavbarP />
      <p className='nene'>Coming soon in The Corner Movies...</p>
      <p className='aberg'><CarrouselSlick /></p>
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
          <p className='valores2'>{filmDetails.popularity ? filmDetails.popularity : 0}</p>


          <QueueIcon color='gris' sx={{ fontSize: 30 }} className='icono3' />
          <p className='valores3'>{filmDetails.saves ? filmDetails.save : 0}</p>

          <div>{token ?

            <div className='logeado'>
              <div className='interacción'>
                <Fab color='rojo' aria-label="like" onClick={like}>
                  {favorito ? <FavoriteIcon /> : <FavoriteBorderIcon />}</Fab>
                <br></br><br></br>
                <Fab color='azul' aria-label="like" onClick={save}>
                  {guardado ? <AccessTimeFilledIcon /> : <MoreTimeIcon />}</Fab>
                <br></br><br></br>
                <Fab color='amarillo' aria-label="like" onClick={list}>
                  {playlist ? <PlaylistAddCheckIcon /> : <PlaylistAddIcon />}</Fab>
              </div>

              <Rating id='ratingDet' name="simple-controlled" value={value} size="small" onChange={(event, newValue) => { setValue(newValue); }} />

            </div>
            : null}
          </div>


        </div>

        <div className='descripcion'>
          <p> {filmDetails.description} </p>
        </div>

        <div className='Tab'>

          <Tabs className='tabs' id="controlled-tab-example">
            <Tab eventKey="contact" title="GENRES">
              {filmDetails.length !== 0 ? filmDetails.genres.map(a => a.name + ", ") : null}
            </Tab>
            <Tab eventKey="profile" title="DETAILS" className='cast'>
              <li>LANGUAJE: <br></br>{filmDetails.language}</li>
              <br></br>
              <li>DURATION: <br></br>{(filmDetails.length / 60).toFixed(2)} hr</li>
              <br></br>
              <li>RELEASED DATE: <br></br>{filmDetails.releaseDate}</li>

            </Tab>
            <Tab eventKey="home" title="CAST" className='cast'>
              <li>DIRECTOR: <br></br>{filmDetails.length !== 0 ? filmDetails.fullCast.director.name : null}.</li>
              <br></br>
              <li>CAST: <br></br>{filmDetails.length !== 0 ? filmDetails.fullCast.cast.map(a => a.name + "," + " ") : null}.</li>
              <br></br>
              <li>PRODUCERS: <br></br>{filmDetails.length !== 0 ? filmDetails.fullCast.producers.map(a => a.name + "," + " ") : null}.</li>
            </Tab>
          </Tabs>

          <div className='trailer'>


            <a href={filmDetails.trailer} target="_blank">


              <Button variant="text" color="rojo"  > <YouTubeIcon fontSize="large" /> watch movie preview</Button></a>
          </div>

        </div>
      </div>

      <div className='comentarios'>
        {Object.keys(userDB).length && idFilm && (
          <Post
            userId={userDB.id}
            userName={userDB.username}
            userImg={userDB.image}
            movieId={idFilm}
          />
        )}
      </div>
    </div>


  )
}

export default FilmDetails