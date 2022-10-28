import React, { useState } from 'react';
import './NavbarP.css';
import imagen from '../media/LogoCompleto.png'
import Button from '@mui/material/Button'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const NavbarP = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className='navv'>

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
    <Container>
      <Navbar.Brand><img src={imagen} alt="" className='imagen' /></Navbar.Brand>
        <Nav>
          <Nav.Link>
          <Button variant="text" color="rojo" className="botones" onClick={handleShow}>
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


      <div className='VentanaLogin'>
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='formLogin'>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button  type="submit" color='rojo' variant="contained" >
        Sign In
      </Button>
      <Button  type="submit" variant="text" color='rojo'>
        Forgotten?
      </Button>
    </Form>
    </div>
          
          </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
      </div>
  </div>
);
}



export default NavbarP

