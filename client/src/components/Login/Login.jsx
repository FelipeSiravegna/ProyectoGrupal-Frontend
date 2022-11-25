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
import Profile from './Profile.jsx';

export default function Login() {

  const token = useSelector((state) => state.idToken)
  const userDB = useSelector((state) => state.user)

  const { logout } = useAuth0()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserInfo(token))
  }, [token])

  useEffect(() => {
  }, [localStorage.username])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function deslogaut() {
    localStorage.clear()
  }

  return (
    <div>
      <div>
        {
          !localStorage.username ?
            <div className='deslogaut'>
              <Link to={'/login'} className='botones4'>
                <Button variant="text" color="rojo" className='ll' >
                  Login
                </Button>
              </Link>
              <Link to={'/register'} className='ll'>
                <Button variant="contained" color="rojo" className='ll'>
                  Register
                </Button>
              </Link>
            </div>
            :
            <div className='botonesDiv'>
              <Link className='botones4' to={'/community'}>
                <Button variant="text" color="rojo" className="botones" >
                  Members
                </Button>
              </Link>
              <Link className='botones4' to={'/comingsoon'}>
                <Button variant="text" color="azul">
                  Coming soon
                </Button>
              </Link>
              {!userDB.premium ?
                <Link className='botones4' to={'/premium'}>
                  <Button variant="text" color="amarillo">
                    Premium
                  </Button>
                </Link>
                : null}
              {userDB.premium ?
                <Button variant="text" onClick={handleShow} color="rojo" className="botones" >
                  Compare
                </Button>
                : null}
              <Modal show={show} onHide={handleClose} className="my-modal" >
                <Modal.Header closeButton>
                  <Modal.Title className='tituloModal'>Compare Movies</Modal.Title>
                </Modal.Header>
                <Modal.Body> <Compare /> </Modal.Body>
              </Modal>
              <Link className='botones4' to={'/lists'}>
                <Button variant="text" color="rojo" className="botones" >
                  Lists
                </Button>
              </Link>
              <Link className='botones4' to={`/activity/${userDB.id}`}>
                <Button variant="text" color="rojo">
                  Activity
                </Button>
              </Link>
              <Modal show={show} onHide={handleClose} className="my-modal" >
                <Modal.Header closeButton>
                  <Modal.Title className='tituloModal'>Compare Movies</Modal.Title>
                </Modal.Header>
                <Modal.Body> <Compare /> </Modal.Body>
              </Modal>
              <Link className='botones4' to={'/wachlist'}>
                <Button variant="text" color="rojo" className="botones" >
                  Watchlist
                </Button>
              </Link>
              <DropdownButton align="end" id="nav-dropdown">
                <div className='dropy'>
                  {userDB.premium ?
                    <Dropdown.Item className='drop'>
                      <Link className='botones4' to={`/createMovie`}><Button variant="text" color="azul" className="botones" >
                        Director
                      </Button></Link>
                    </Dropdown.Item>
                    : null}

                  <Dropdown.Item className='drop'>
                    <Link className='botones4' to={`/UserProfile/${userDB.id}`}>
                      <Button variant="text" color="rojo" className="botones">
                        My Profile
                      </Button>
                    </Link>
                  </Dropdown.Item>

                  {userDB.admin ?
                    <Dropdown.Item className='drop'>
                      <Link className='botones4' to={'/dashboard'}>
                        <Button variant="text" color="azul" className="botones">
                          Dashboard
                        </Button>
                      </Link>
                    </Dropdown.Item>
                    : null}
                  <Dropdown.Item className='drop'>
                    <Link className='botones4' to={'/accounts/edit'}>
                      <Button variant="text" color="rojo" className="botones">
                        Settings
                      </Button>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item className='drop'>
                  
                    <Link className='botones4' to="/developers">
                      <Button variant="text" color="rojo" className="botones">
                        Developers
                      </Button>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item className='drop'>
                    <Link className='botones4' to="/">
                      <Button variant="text" color="rojo" className="botones" onClick={() => deslogaut()}>
                        Logout
                      </Button>
                    </Link>
                  </Dropdown.Item>
                </div>
              </DropdownButton>
            </div>
        }
      </div>
    </div>
  )
}