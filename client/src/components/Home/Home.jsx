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
import { pages } from '../../redux/actions';
import { withEvents } from 'react-component-update';



const Home = () => {

  let peliculas = useSelector(state => (state.movies)) 
  let pagina = useSelector(state => (state.page))
  const dispatch = useDispatch()

    
      
        useEffect(() => {
          dispatch(getAllMovies(pagina)) 
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
            }) : null
        } 
            </div >


      </div>
    );
  }


export default Home;