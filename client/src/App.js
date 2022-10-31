
import './App.css';
import React, { Component } from 'react';
import Carrousel from './components/Carrousel/Carrousel';
import FilmDetails from './components/FilmDetails/FilmDetails';
import Home from './components/Home/Home';
import PremiumSub from './components/PremiumSub/PremiumSub';
import UserProfile from './components/UserProfile/UserProfile'
import NavbarP from './components/NavbarP/NavbarP';

import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (  

     <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/filmdetails/:idFilm' element={<FilmDetails/>}/>
        <Route exact path='/UserProfile' element={<UserProfile/>}/>
        </Routes>
    
    );
  }


export default App;
