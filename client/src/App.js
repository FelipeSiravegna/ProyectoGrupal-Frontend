import './App.css';
import React from 'react';
import FilmDetails from './components/FilmDetails/FilmDetails';
import Home from './components/Home/Home';
import PremiumSub from './components/PremiumSub/PremiumSub';
import News from './components/Noticias/News';
import UserProfile from './components/UserProfile/UserProfile'
import dotenv from 'dotenv';
import axios from 'axios';
import NavDash from './components/Nav+Dash/Nav+Dash';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register/Register'
import Loginscreen from './components/Login/Loginscreen'
import ListDetails from './components/ListsUser/ListDetails';
import Listas from './components/ListsUser/Listas';
import AccountsEdit from './components/UserProfile/AccountsEdit'
import Activity from './components/Activity/Activity.jsx';
import Wachlist from './components/WatchList/WatchList'
import Form from './components/Form/Form.jsx';
import Nosotros from './components/Nosotros/Nosotros.jsx';
import Community from './components/Community/Community';

dotenv.config();
axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";

const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/filmdetails/:idFilm' element={<FilmDetails />} />
      <Route exact path='/UserProfile/:userId' element={<UserProfile />} />
      <Route exact path='/premium' element={<PremiumSub />} />
      <Route exact path='/comingsoon' element={<News />} />
      <Route exact path='/dashboard' element={<NavDash />} />
      <Route exact path='/register' element={<Register />} />
      <Route exact path='/list/:idList' element={<ListDetails />} />
      <Route exact path='/lists' element={<Listas />} />
      <Route exact path='/login' element={<Loginscreen />} />
      <Route exact path='/accounts/edit' element={<AccountsEdit />} />
      <Route exact path='/community' element={<Community />} />
      <Route exact path='/activity/:loggedUserId' element={<Activity />} />
      <Route exact path='/wachlist' element={<Wachlist />} />
      <Route exact path='/createMovie' element={<Form />} />
      <Route exact path='/developers' element={<Nosotros />} />
    </Routes>
  );
}

export default App;