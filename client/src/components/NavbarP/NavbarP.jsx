import React, { useState } from 'react';
import './NavbarP.css';
import imagen from '../media/LogoCompleto.png'
import Button from '@mui/material/Button'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Login from '../Login/Login'
import Profile from '../Login/Profile'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const NavbarP = () => {

  let dbUser = useSelector(state => state.user)

  return (
    <div className='navv'>
      <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand><Link to={'/'}> <img src={imagen} alt="" className='imagen' /> </Link> </Navbar.Brand>
          {dbUser && <>
            <Profile />
            <Nav>
              <Nav.Link>
                <Login />
              </Nav.Link>
            </Nav>
          </>
          }
        </Container>
      </Navbar>

    </div>
  );
}

export default NavbarP