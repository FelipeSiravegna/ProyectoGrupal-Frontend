
import './App.css';
import React, { Component } from 'react';
import Carrousel from './components/Carrousel/Carrousel';
import FilmDetails from './components/FilmDetails/FilmDetails';
import Home from './components/Home/Home';
import PremiumSub from './components/PremiumSub/PremiumSub';
import News from './components/Noticias/News';
import UserProfile from './components/UserProfile/UserProfile'
import NavbarP from './components/NavbarP/NavbarP';
import dotenv from 'dotenv';
import axios from 'axios';
import NavDash from './components/Nav+Dash/Nav+Dash';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register/Register'
import Loginscreen from './components/Login/Loginscreen'
import ListUser from './components/ListsUser/ListUser';
import ListCard from './components/ListsUser/ListDetails';
import ListDetails from './components/ListsUser/ListDetails';
import AddMovieList from './components/ListsUser/AddMovieList';
import Listas from './components/ListsUser/Listas';
import AccountsEdit from './components/UserProfile/AccountsEdit'
dotenv.config();
axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";

//<Route exact path='/post' element={<Post/>}/>

const App = () => {
  return (  

     <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/filmdetails/:idFilm' element={<FilmDetails/>}/>
        <Route exact path='/UserProfile/:userId' element={<UserProfile/>}/>
        <Route exact path='/premium' element={<PremiumSub/>}/>
        <Route exact path='/comingsoon' element={<News/>}/>
        <Route exact path='/dashboard' element={<NavDash/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/list/:idList' element={<ListDetails/>}/>
        <Route exact path='/lists' element={<Listas/>}/>
        <Route exact path='/login' element={<Loginscreen/>}/>
        <Route exact path='/accounts/edit' element={<AccountsEdit/>}/>
        </Routes>

      
    );
  }



export default App;