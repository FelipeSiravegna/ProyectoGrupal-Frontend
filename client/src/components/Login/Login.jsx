import React, { useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button'
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
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../../redux/actions/index.js';



export default function Login(){
  
const token = useSelector((state)=> state.idToken)
const userDB = useSelector((state)=> state.user)

  const {logout} = useAuth0()
  
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getUserInfo(token)) 
  },[token])
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    return(
          <div>
             {
              userDB.active !== true ?
              <div>
                <Link to={'/login'} className={'botonRegisterLogin'} >
            <Button variant="text" color="rojo" className="botones2">
              Login
            </Button>
            </Link>
            <Link to={'/register'} className={'botonRegisterLogin'} >
            <Button /*onClick={() => loginWithRedirect()}*/ variant="contained" color="rojo" className="botones2">
            Register
          </Button>
          </Link>
 
          </div>
            :
            <div className='botonesDiv'>


<Link className='botones4' to={'/premium'}>
         <Link className='botones4' to={'/news'}>
          <Button variant="text" color="azul">
             News
          </Button>
          </Link>

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
            favorito
          </Button>

          
          
    



          
      <DropdownButton  align="end" id="nav-dropdown">
        <div className='dropy'>

        
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