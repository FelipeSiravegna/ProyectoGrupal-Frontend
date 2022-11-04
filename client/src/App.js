
import './App.css';
import React, { Component } from 'react';
import Carrousel from './components/Carrousel/Carrousel';
import FilmDetails from './components/FilmDetails/FilmDetails';
import Home from './components/Home/Home';
import PremiumSub from './components/PremiumSub/PremiumSub';
import UserProfile from './components/UserProfile/UserProfile'
import NavbarP from './components/NavbarP/NavbarP';
import Compare from './components/Compare/Compare'

import { Route, Routes } from 'react-router-dom';
import ComingSoon from './components/ComingSoon/ComingSoon';
import CarrouselSlick from './components/CarrouselSlick/CarrouselSlick.jsx';
import SearchLog from './components/Searchbar/SearchLog';
import Filters from './components/Filters/Filters';


const App = () => {
  return (  

     <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/filmdetails/:idFilm' element={<FilmDetails/>}/>
        <Route exact path='/UserProfile' element={<UserProfile/>}/>
        <Route exact path='/premium' element={<PremiumSub/>}/>
        <Route exact path='/aa' element={<Filters/>}/>
        </Routes>
    );
  }


export default App;
