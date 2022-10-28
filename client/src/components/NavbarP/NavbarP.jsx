import React from 'react'
import './NavbarP.css';
import imagen from '../media/LogoCompleto.png'
import { AppBar, Toolbar, Typography } from '@mui/material';
import Button from '@mui/material/Button'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavbarP = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand><img src={imagen} alt="" className='imagen' /></Navbar.Brand>
        <Nav>
          <Nav.Link>
          <Button variant="text" color="rojo" className="botones">
              Login
            </Button>
          </Nav.Link>
          <Nav.Link>
            <Button variant="contained" color="rojo" className="botones">
              Register
            </Button>
          </Nav.Link>
        </Nav>
    </Container>
  </Navbar>
);
}



export default NavbarP

