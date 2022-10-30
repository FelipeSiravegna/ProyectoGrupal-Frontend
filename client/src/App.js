import './App.css';
import React, { Component } from 'react';
import Carrousel from './components/Carrousel/Carrousel';
import FilmDetails from './components/FilmDetails/FilmDetails';
import Home from './components/Home/Home';
import PremiumSub from './components/PremiumSub/PremiumSub';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (  
    <div>
     
     <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/filmdetails/:idFilm' element={<FilmDetails/>}/>
        </Routes>
        

     
      </div>
    );
  }


export default App;
