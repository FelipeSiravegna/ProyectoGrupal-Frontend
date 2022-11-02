import React, { Component } from 'react';
import './Home.css';
import fondo from '../media/fondo.jpg'
import NavbarP from '../NavbarP/NavbarP';
import Carrousel from '../Carrousel/Carrousel';
import Acordeon from '../Acordeon/Acordeon';
import InfoHome from '../InfoHome/InfoHome';
import Searchbar from '../Searchbar/Searchbar';
import { useDispatch, useSelector } from 'react-redux'
import {getAllMovies, filter} from '../../redux/actions'
import FilmCard from '../FilmCard/FilmCard.jsx';
import { useEffect } from 'react';
import Paginado from '../Pagination/Pagination';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';



const Home = () => {
  


  let peliculas = useSelector(state => (state.movies)) 
  let pagina = useSelector(state => (state.page))
  const dispatch = useDispatch()
 
      
        useEffect(() => {
          dispatch(getAllMovies(pagina || 1)) 
      }, [])



  return (
    
    <div className="App">
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
    );
  }


export default Home;