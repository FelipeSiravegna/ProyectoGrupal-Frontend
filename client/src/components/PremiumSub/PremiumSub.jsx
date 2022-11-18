import React from 'react'
import './PremiumSub.css'
import fondo from '../media/dorao.jpg'
import logo from '../media/LogoCompleto.png'
import fondoPremium from '../media/fondoPremium.jpg'
import Button from '@mui/material/Button'
import { useDispatch } from 'react-redux';
import { subscribe } from '../../redux/actions';
import video from '../media/VideoPremium.mp4'
import NavbarP from '../NavbarP/NavbarP'
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import RateReviewIcon from '@mui/icons-material/RateReview';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import CompareIcon from '@mui/icons-material/Compare';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Card from 'react-bootstrap/Card';

const PremiumSub = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <img className='fondo' src={fondo} alt="" />
      <video className="video" src={video} autoPlay loop muted />
      <NavbarP />
      <img className='once' src={logo} alt="" />
      <div>
        {localStorage.username ?
          <div className='contenidoPremium'>
            <Button variant="contained" sx={{ fontSize: 35 }} color="amarillo" className='botonSub' onClick={(e) => { dispatch(subscribe()) }}>SUSCRIBE FOR $499</Button>
          </div>
          : null}
      </div>
      <div className='lasCarteras'>
        <>
          <Card
            bg='dark'
            style={{ width: '18rem' }}
            className="mb-2"
            border="warning"
            text='white'
          >
            <Card.Body>
              <Card.Title >LISTS UNLIMITED </Card.Title>
              <Card.Text>
                You can create unlimited lists of the movies you want.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            bg='dark'
            style={{ width: '18rem' }}
            className="mb-2"
            border="warning"
            text='white'
          >
            <Card.Body>
              <Card.Title variant='dark' >REVIEWS UNLIMITED </Card.Title>
              <Card.Text>
                Make the daily reviews you want, they are unlimited!
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            bg='dark'
            style={{ width: '18rem' }}
            className="mb-2"
            border="warning"
            text='white'
          >
            <Card.Body>
              <Card.Title >MOVIE MAKING </Card.Title>
              <Card.Text>
                Do you think a movie is missing? now you can create it for everyone
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            bg='dark'
            style={{ width: '18rem' }}
            className="mb-2"
            border="warning"
            text='white'
          >
            <Card.Body>
              <Card.Title >MOVIES COMPARISON </Card.Title>
              <Card.Text>
                Compare your favorite movies and check their statistics.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            id="DAL"
            bg='dark'
            style={{ width: '18rem' }}
            className="mb-2"
            border="warning"
            text='white'
          >
            <Card.Body>
              <Card.Title >PROFILE PICTURE OF YOUR CHOICE </Card.Title>
              <Card.Text>
                You can choose your profile photo for everyone to see and stand out from the rest.
              </Card.Text>
            </Card.Body>
          </Card>
        </>
      </div>
      <div className='iconitoss'>
        <h1 ><AccountBoxIcon sx={{ fontSize: 50 }} /></h1>
        <h1 > <CompareIcon sx={{ fontSize: 50 }} /> </h1>
        <h1 > <MovieCreationIcon sx={{ fontSize: 50 }} /> </h1>
        <h1 > <RateReviewIcon sx={{ fontSize: 50 }} /> </h1>
        <h1 > <FormatListNumberedIcon sx={{ fontSize: 50 }} /> </h1>
        <h1 ><AccountBoxIcon sx={{ fontSize: 50 }} /></h1>
        <h1 > <CompareIcon sx={{ fontSize: 50 }} /> </h1>
        <h1 > <MovieCreationIcon sx={{ fontSize: 50 }} /> </h1>
        <h1 > <RateReviewIcon sx={{ fontSize: 50 }} /> </h1>
        <h1 > <FormatListNumberedIcon sx={{ fontSize: 50 }} /> </h1>
        <h1 ><AccountBoxIcon sx={{ fontSize: 50 }} /></h1>
        <h1 > <CompareIcon sx={{ fontSize: 50 }} /> </h1>
        <h1 > <MovieCreationIcon sx={{ fontSize: 50 }} /> </h1>
        <h1 > <RateReviewIcon sx={{ fontSize: 50 }} /> </h1>
        <h1 > <FormatListNumberedIcon sx={{ fontSize: 50 }} /> </h1>
        <h1 ><AccountBoxIcon sx={{ fontSize: 50 }} /></h1>
        <h1 > <CompareIcon sx={{ fontSize: 50 }} /> </h1>
        <h1 > <MovieCreationIcon sx={{ fontSize: 50 }} /> </h1>
        <h1 > <RateReviewIcon sx={{ fontSize: 50 }} /> </h1>
        <h1 > <FormatListNumberedIcon sx={{ fontSize: 50 }} /> </h1>
      </div>
      <div className='iconitoss2'>
        <h1 ><AccountBoxIcon sx={{ fontSize: 50 }} /></h1>
        <h1 > <CompareIcon sx={{ fontSize: 50 }} /> </h1>
        <h1 > <MovieCreationIcon sx={{ fontSize: 50 }} /> </h1>
        <h1 > <RateReviewIcon sx={{ fontSize: 50 }} /> </h1>
        <h1 > <FormatListNumberedIcon sx={{ fontSize: 50 }} /> </h1>
        <h1 ><AccountBoxIcon sx={{ fontSize: 50 }} /></h1>
        <h1 > <CompareIcon sx={{ fontSize: 50 }} /> </h1>
        <h1 > <MovieCreationIcon sx={{ fontSize: 50 }} /> </h1>
        <h1 > <RateReviewIcon sx={{ fontSize: 50 }} /> </h1>
        <h1 > <FormatListNumberedIcon sx={{ fontSize: 50 }} /> </h1>
        <h1 ><AccountBoxIcon sx={{ fontSize: 50 }} /></h1>
        <h1 > <CompareIcon sx={{ fontSize: 50 }} /> </h1>
        <h1 > <MovieCreationIcon sx={{ fontSize: 50 }} /> </h1>
        <h1 > <RateReviewIcon sx={{ fontSize: 50 }} /> </h1>
        <h1 > <FormatListNumberedIcon sx={{ fontSize: 50 }} /> </h1>
        <h1 ><AccountBoxIcon sx={{ fontSize: 50 }} /></h1>
        <h1 > <CompareIcon sx={{ fontSize: 50 }} /> </h1>
        <h1 > <MovieCreationIcon sx={{ fontSize: 50 }} /> </h1>
        <h1 > <RateReviewIcon sx={{ fontSize: 50 }} /> </h1>
        <h1 > <FormatListNumberedIcon sx={{ fontSize: 50 }} /> </h1>
      </div>
    </div>
  )
}

export default PremiumSub