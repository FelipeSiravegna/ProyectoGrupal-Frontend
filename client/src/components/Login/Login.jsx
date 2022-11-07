import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import './Profile.jsx'
import './Login.css'
import { Link } from 'react-router-dom';
import PremiumSub from '../PremiumSub/PremiumSub.jsx';

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

<Link className='botones4' to={'/premium'}>
          <Button variant="text" color="amarillo">
          Premium

          </Button>
          </Link>

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

          <Link className='botones4' to={'/noticias'}>
           <Button variant="text" color="amarillo">
              News
           </Button>
          </Link>


          
      <DropdownButton  align="end" id="nav-dropdown">
        <div className='dropy'>

        
        <Dropdown.Item className='drop'>
        <Link className='botones4' to={'/UserProfile'}>
          <Button variant="text" color="rojo" className="botones">
            My Profile
            </Button>
            </Link>
            </Dropdown.Item>

            <Dropdown.Item className='drop'><Button variant="text" color="rojo" className="botones">
            Following
            </Button></Dropdown.Item>
            <Dropdown.Item className='drop'> <Button variant="text" color="rojo" className="botones">
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