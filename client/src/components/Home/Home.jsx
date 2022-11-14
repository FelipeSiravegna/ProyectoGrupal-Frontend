import React, { Component } from 'react';
import './Home.css';
import fondo from '../media/fondo.jpg'
import Logo from '../media/Logo.png'
import NavbarP from '../NavbarP/NavbarP';
import Carrousel from '../Carrousel/Carrousel';
import Acordeon from '../Acordeon/Acordeon';
import InfoHome from '../InfoHome/InfoHome';
import Searchbar from '../Searchbar/Searchbar';
import { useDispatch, useSelector } from 'react-redux'
import { filterGenres, getAllMovies, getComingSoon, getUserInfo } from '../../redux/actions'
import FilmCard from '../FilmCard/FilmCard.jsx';
import { useEffect } from 'react';
import Paginado from '../Pagination/Pagination';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CarrouselSlick from '../CarrouselSlick/CarrouselSlick';
import SearchLog from '../Searchbar/SearchLog';
import Filters from '../Filters/Filters';
import Button from '@mui/material/Button'
import Carrousel2 from '../Carrousel/Carrousel2';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';



const Home = () => {
  const dispatch = useDispatch()
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0()
  let peliculas = useSelector(state => (state.movies))
  let pagina = useSelector(state => (state.page))
  const token = useSelector((state) => state.idToken)
  const userDB = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(getUserInfo())
  }, [token])

  useEffect(() => {
    console.log(userDB)
  }, [userDB])


  useEffect(() => {
    dispatch(getAllMovies(pagina || 1))
  }, [])

  const images = [
    "https://i.pinimg.com/564x/87/e7/1c/87e71c7d37a747dcfcdec2b6ce3b1adb.jpg",
    "https://i.pinimg.com/564x/ad/b3/e5/adb3e50e5f10d289ac916ce5d0187c89.jpg",
    "https://i.pinimg.com/564x/83/19/d5/8319d50b7a55bd6c80740da3b95e74cf.jpg",
    "https://i.pinimg.com/564x/3e/d0/ce/3ed0cec2e68f993056aef64cb5fc174f.jpg",
    "https://i.pinimg.com/564x/f4/f6/f1/f4f6f187ee110b2a32d8752fa7ed8960.jpg",
    "https://i.pinimg.com/564x/85/35/14/853514b720202376d42d236c3623e4b4.jpg"
  ]
  const images2 = [
    "https://i.pinimg.com/564x/5f/b6/d6/5fb6d62a14df6ac1253edc3bf82b2a37.jpg",
    "https://i.pinimg.com/564x/98/d8/3e/98d83e03b1063e09483d084f8a603658.jpg",
    "https://i.pinimg.com/564x/df/dd/fe/dfddfe14e7d1178b220fa08fd96e01f1.jpg",
    "https://i.pinimg.com/564x/e3/e0/25/e3e02598d17737f778632428d7b1e708.jpg",
    "https://i.pinimg.com/564x/2f/a2/12/2fa212650d39691cfcee6b4c74f0ca17.jpg",
    "https://i.pinimg.com/564x/d7/d7/7d/d7d77dbfb35fa218ebb62b3781593451.jpg"
  ]

  const bg = images[Math.floor(Math.random() * images.length)]
  const bg2 = images2[Math.floor(Math.random() * images2.length)]

  return (

    <div className="App">
      {
        userDB.active !== true ?
          <div>
            <img className='fondo' src={fondo} alt="" />
            <NavbarP />
            <Carrousel />
            <InfoHome />

            <div className='elBuscador'>
              <Searchbar />
            </div>


            <div className='Paginator'>
              <Paginado />
            </div>

            <div className='cards'>
              {peliculas.length !== 0 ? peliculas.rows.map(a => {
                return <FilmCard
                  key={a.id}
                  name={a.name}
                  id={a.id}
                  img={a.image}
                  rating={a.rating}
                />
              }) : <Box className='carga' sx={{ display: 'flex' }}>
                <CircularProgress color="rojo" />
              </Box>
              }
            </div >
            <div className='infoLIK'>
              <PlaylistAddIcon className='favr' sx={{ fontSize: 59 }} color='azul' />
              <h1 className='infoLike'><Button variant="text" sx={{ fontSize: 19 }} color="rojo">Sign in</Button>TO ACCESS YOUR CUSTOM OR SAVED PLAYLISTS.</h1>
            </div>
          </div>

          : <div>

            <img className='fondo' src={fondo} alt="" />
            <NavbarP />
            <img className='fondoLogeado' src={bg} alt="" />
            <img className='fondoLogeado2' src={bg2} alt="" />
            <h1 className='fraseBienvenida'> Welcome again <h3 className='nombredeUser'>{userDB.username}</h3></h1>
            <h6 className='infoLog'>The Corner Movies allows you to leave reviews on every movie you've seen,
              as well as <FavoriteIcon fontSize='small' /> it and save it to watch later<AccessTimeFilledIcon fontSize='small' /> Also if
              are undecided you can compare two movies to choose the one that best suits you.</h6>

            <div className='nuevasPelis'>
              <h6 className='fraseRandom'>Very soon in The Corner Movies...</h6>
              <CarrouselSlick />
            </div>
            <img className='loguito' src={Logo}></img>


            <h1 className='intro'>DID YOU KNOW THAT BY ACCESSING THE<Button variant="text" sx={{ fontSize: 19 }} color="amarillo">
              premium
            </Button>PACK YOU CAN REQUEST A<Button variant="text" sx={{ fontSize: 19 }} color="azul">
                director's
              </Button>ACCOUNT?</h1>



            <div className='carrousel2'>
              <Carrousel2 />
            </div>

            <div className='busqueda'>
              <SearchLog />
              <Filters />

              <div className='lasCartulis'>
                {peliculas.length !== 0 ? peliculas.rows.map(a => {
                  return <FilmCard
                    key={a.id}
                    name={a.name}
                    id={a.id}
                    img={a.image}
                    rating={a.rating}
                  />
                }) : <Box className='carga' sx={{ display: 'flex' }}>
                  <CircularProgress color="rojo" />
                </Box>
                }
              </div>
            </div>
            <div className='Paginame'><Paginado /> </div>









          </div>
      }
    </div>


  );
}


export default Home;