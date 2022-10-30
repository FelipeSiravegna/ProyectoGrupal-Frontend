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
import arreglo from '../FilmCard/FilmCard.js'
import Paginado from '../Pagination/Pagination';


const Home = () => {
 
  let peliculas = useSelector(state => (state.movies)) 
      const dispatch = useDispatch()
  
      function onClick(e){
          e.preventDefault()
          dispatch(getAllMovies())
        }
      
        useEffect(() => {
         {
          dispatch(getAllMovies())
          dispatch(filter())
          }
      }, [dispatch, peliculas.length])


//<Paginado/>

  return (
    
    <div className="App">
      <img className='fondo'src={fondo} alt="" />
<NavbarP/>
       <Carrousel/>
  <InfoHome/>
  <Searchbar/>
       <Acordeon/>
        <button className="HOLAA" onClick={onClick}>ACA</button>




      </div>
    );
  }


export default Home;