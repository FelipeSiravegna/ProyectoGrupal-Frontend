
import './App.css';
import React, { Component } from 'react';
import Carrousel from './components/Carrousel/Carrousel';
import FilmDetails from './components/FilmDetails/FilmDetails';
import Home from './components/Home/Home';
import PremiumSub from './components/PremiumSub/PremiumSub';
import UserProfile from './components/UserProfile/UserProfile'
import NavbarP from './components/NavbarP/NavbarP';
import News from './components/Noticias/News';
import dotenv from 'dotenv';
import axios from 'axios';
import Compare from './components/Compare/Compare'
import NavDash from './components/Nav+Dash/Nav+Dash';
import { Route, Routes } from 'react-router-dom';
import Carrousel2 from './components/Carrousel/Carrousel2';
import Admin from './components/Admin/Admin';
import Users from './components/Users.jsx/Users';
import Register from './components/Register/Register'
import Review from './components/Review/Review';
import Comments from './components/Comments/Comments';
import Post from './components/Comments/Post';
import Loginscreen from './components/Login/Loginscreen'
dotenv.config();
axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";

//<Route exact path='/post' element={<Post/>}/>
const App = () => {
  return (  

     <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/filmdetails/:idFilm' element={<FilmDetails/>}/>
        <Route exact path='/UserProfile' element={<UserProfile/>}/>
        <Route exact path='/premium' element={<PremiumSub/>}/>
        <Route exact path='/noticias' element={<News/>}/>
        <Route exact path='/dashboard' element={<NavDash/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/a' element={<Post/>}/>
        <Route exact path='/aa' element={<Users/>}/>
        <Route exact path='/login' element={<Loginscreen/>}/>

        </Routes>
      
    );
  }



export default App;