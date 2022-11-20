import React from 'react'
import './CardsRotate.css'
import logo from '../media/LogoCompleto.png'
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';

const CardsRotate = ({ imagen, name, date }) => {

    return (
        <div>
            <div className='cartasEstreno'>
                <div className='frontal'>
                    <img className='porfa' src={imagen ? imagen : logo} />
                </div>
                <div className='trasero'>
                    <h1 className='nombreMio'>{name}</h1>
                        <br></br>
                        <p>Front-end</p>


                        <div className='redes'>
                        <Stack direction="row" spacing={1}>
                            <IconButton aria-label="delete">
                            <LinkedInIcon color='azul'/>
                            </IconButton>
                            <IconButton color="secondary" aria-label="add an alarm">
                                <InstagramIcon />
                                </IconButton>
                                <IconButton color="negro" aria-label="add to shopping cart">
                                    <GitHubIcon color='negro' />
                                    </IconButton>
                            </Stack>
                            </div>
                </div>
            </div>
        </div>
    )
}

export default CardsRotate