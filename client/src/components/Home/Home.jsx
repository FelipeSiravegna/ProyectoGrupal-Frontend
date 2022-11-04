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
import {filterGenres, getAllMovies, getComingSoon} from '../../redux/actions'
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

const Home = () => { 
  const dispatch = useDispatch()
  const {loginWithRedirect,logout,isAuthenticated} = useAuth0()
  let peliculas = useSelector(state => (state.movies)) 
  let pagina = useSelector(state => (state.page))
  console.log(peliculas)

  
  useEffect(() => {
    dispatch(getAllMovies(pagina || 1)) 
    dispatch(filterGenres())
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
      "https://i.pinimg.com/564x/bc/00/e8/bc00e810b463c99fc85dc31dafff7e71.jpg",
      "https://i.pinimg.com/564x/5e/2f/71/5e2f71299a594bf9dd528969ab2fe22b.jpg",
      "https://i.pinimg.com/564x/ef/ee/e4/efeee45a55e4d873bf4de0290658b4df.jpg",
      "https://i.pinimg.com/564x/e3/e0/25/e3e02598d17737f778632428d7b1e708.jpg",
      "https://i.pinimg.com/564x/c6/4d/2c/c64d2ccbd2ba4e19d4a008d07a525e38.jpg",
      "https://i.pinimg.com/564x/82/0a/b8/820ab8ab08206d3158800ca8d69f2e42.jpg"
    ]

    const bg = images[Math.floor(Math.random() * images.length)]
    const bg2 = images2[Math.floor(Math.random() * images2.length)]
 
      return (
        
    <div className="App">
    {
      !isAuthenticated ?
      <div>
      <img className='fondo'src={fondo} alt="" />
<NavbarP/>
       <Carrousel/>
  <InfoHome/>
  <Searchbar/>
       <Acordeon/>
       
<Paginado/>

       <div className='cards'>
            {peliculas.length !== 0 ? peliculas.rows.map(a => {
                return <FilmCard
                key = {a.id}
                name = {a.name}
                id = {a.id}
                img = {a.image}   
                rating = {a.rating}    
                />             
            }) : <Box className='carga'  sx={{ display: 'flex' }}>
            <CircularProgress color="rojo" />
          </Box>
        } 
            </div >
            </div>
            
               : <div>
                
                <img className='fondo'src={fondo} alt="" />
<NavbarP/>
<img className='fondoLogeado'src={bg} alt="" />
<img className='fondoLogeado2'src={bg2} alt="" />
<h1 className='fraseBienvenida'> Welcome again <h1 className='nombredeUser'>"NombreDeUser"</h1></h1>
<h6 className='infoLog'>The Corner Movies allows you to leave reviews on every movie you've seen, 
  as well as <FavoriteIcon fontSize='small'/> it and save it to watch later<AccessTimeFilledIcon fontSize='small'/> Also if 
  are undecided you can compare two movies to choose the one that best suits you.</h6>

<div className='nuevasPelis'>
<h7 className='fraseRandom'>Very soon in The Corner Movies...</h7>
<CarrouselSlick/>
  <img className='loguito' src={Logo}></img>
</div>

<div className='busqueda'>
<SearchLog/>

</div>

         





          </div>
    }
            </div>


    );
  }


export default Home;