import React, { Component } from 'react';
import './App.css';
import Carrousel from './components/Carrousel/Carrousel';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';


//<Home/>
  
  const App = () => {
    return (  
      <div>
      
  <Navbar/>
<Carrousel/>

      </div>
    );
  }


export default App;
