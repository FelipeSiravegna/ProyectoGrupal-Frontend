import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import './Profile.jsx'
import './Login.css'

export default function Login(){
  

  
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const {loginWithRedirect,logout,isAuthenticated} = useAuth0()

    return(
          <div>
             {
              !isAuthenticated ?
              <div>
            <Button variant="text" color="rojo" className="botones2" onClick={() => loginWithRedirect()}>
              Login
            </Button>
            <Button variant="contained" color="rojo" className="botones2">
            Register
          </Button>
          </div>
            :
            <div className='botonesDiv'>


          <Button variant="text" color="amarillo" className="botones4" >
        Premium
          </Button>

          <Button variant="text" color="rojo" className="botones" >
        Compare
          </Button>

          <Button variant="text" color="rojo" className="botones" >
          Watchlist
          </Button>

          <Button variant="text" color="rojo" className="botones" >
          List
          </Button>

          <Button variant="text" color="rojo" className="botones" >
        favorites
          </Button>


          
      <DropdownButton  align="end" id="nav-dropdown">
        <div>
        <Dropdown.Item className='drop'><Button variant="text" color="rojo" className="botones" onClick={() => logout()}>
            My Profile
            </Button></Dropdown.Item>
            <Dropdown.Item className='drop'><Button variant="text" color="rojo" className="botones" onClick={() => logout()}>
            Following
            </Button></Dropdown.Item>
            <Dropdown.Item className='drop'> <Button variant="text" color="rojo" className="botones" onClick={() => logout()}>
           Settings
            </Button></Dropdown.Item>
        <Dropdown.Item className='drop'>
          <Button variant="text" color="rojo" className="botones" onClick={() => logout()}>
            Logout
            </Button></Dropdown.Item>
            </div>
      </DropdownButton>

</div>
             }


          </div>
    )
}