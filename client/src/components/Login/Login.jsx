import React, { useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button'
import Box from '@mui/material/Box';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import './Profile.jsx'
import './Login.css'
import { Link } from 'react-router-dom';
import PremiumSub from '../PremiumSub/PremiumSub.jsx';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Compare from '../Compare/Compare.jsx';
import { useDispatch } from 'react-redux';
import { userCreate } from '../../redux/actions/index.js';

export default function Login(){
  
  const dispatch = useDispatch()
  
  const {loginWithRedirect,logout,isAuthenticated,isLoading,user} = useAuth0()
  
  const [newUser,setUser] = useState({
    email: '',
    password: '',
    username: ''
  })
  
  
//   useEffect(()=>{
//   let num = 22
//   if(user){
//     setUser({
//       email: user.email ? user.email : `example${num+1}@example.com`,
//       password: `${user.sub.split("|")[1].slice(12)}@hH`,
//       username: user.nickname.split(" ")[0]
//     })
//   }
//   num += 1
// },[])

// if(user && newUser.username){
//   console.log(newUser,'llegueeeee')
//   dispatch(userCreate(newUser))

// }


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 

    return(
          <div>
             {
              !isAuthenticated && !isLoading ?
              <div>
            <Button variant="text" color="rojo" className="botones2" onClick={() => loginWithRedirect()}>
              Login
            </Button>
            <Link to={'./register'} className={'botonRegister'} >
            <Button /*onClick={() => loginWithRedirect()}*/ variant="contained" color="rojo" className="botones2">
            Register
          </Button>
          </Link>
 
          </div>
            :
            <div className='botonesDiv'>

<Link className='botones4' to={'/premium'}>
          <Button variant="text" color="amarillo">
          Premium

          </Button>
          </Link>

          <Button variant="text" onClick={handleShow} color="rojo" className="botones" >
        Compare
          </Button> 
          <Modal show={show} onHide={handleClose} className="my-modal" >
        <Modal.Header closeButton>
          <Modal.Title className='tituloModal'>Compare Movies</Modal.Title>
        </Modal.Header>
        <Modal.Body> <Compare/> </Modal.Body>
 
      </Modal>
    



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

        
        <Dropdown.Item className='drop'>
        <Link className='botones4' to={'/UserProfile'}>
          <Button variant="text" color="rojo" className="botones">
            My Profile
            </Button>
            </Link>
            </Dropdown.Item>

<div className='drope'>
            <Dropdown.Item className='drop'>
        <Link className='botones4' to={'/dashboard'}>
          <Button variant="text" color="rojo" className="botones">
            Dashboard
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
            </div>
      </DropdownButton>

</div>
             }


          </div>
    )
}