
import './App.css';
import React, { Component } from 'react';
import Carrousel from './components/Carrousel/Carrousel';
import FilmDetails from './components/FilmDetails/FilmDetails';
import Home from './components/Home/Home';
import PremiumSub from './components/PremiumSub/PremiumSub';
import News from './components/Noticias/News';
import UserProfile from './components/UserProfile/UserProfile'
import NavbarP from './components/NavbarP/NavbarP';
import Compare from './components/Compare/Compare'
import NavDash from './components/Nav+Dash/Nav+Dash';
import dotenv from 'dotenv';
import axios from 'axios';

import { Route, Routes } from 'react-router-dom';
import CardsRotate from './components/CardsRotate/CardsRotate';
import CarrouselSlick from './components/CarrouselSlick/CarrouselSlick.jsx';
import SearchLog from './components/Searchbar/SearchLog';
import Filters from './components/Filters/Filters';
import Carrousel2 from './components/Carrousel/Carrousel2';
import Admin from './components/Admin/Admin';
import Users from './components/Users.jsx/Users';
import Register from './components/Register/Register'

const App = () => {
  return (  

     <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/filmdetails/:idFilm' element={<FilmDetails/>}/>
        <Route exact path='/UserProfile' element={<UserProfile/>}/>
        <Route exact path='/premium' element={<PremiumSub/>}/>
        <Route exact path='/dashboard' element={<NavDash/>}/>
        <Route exact path='/aa' element={<Users/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/news' element={<News/>}/>
      </Routes>
      
    );
  }


export default App;