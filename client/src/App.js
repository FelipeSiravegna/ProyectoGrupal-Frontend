import React, { Component } from 'react';
import './App.css';
import Carrousel from './components/Carrousel/Carrousel';
// import Home from './components/Home/Home';
import InfoHome from './components/InfoHome/InfoHome';
import Navbar from './components/Navbar/Navbar';
import Form from './components/Form/Form'
import BasicPagination from './components/Pagination/Pagination'


//<Carrousel/>
  
  const App = () => {
    return (  
      <div>
      
{/* <Home/> */}

<Form/>
<BasicPagination />

      </div>
    );
  }


export default App;
