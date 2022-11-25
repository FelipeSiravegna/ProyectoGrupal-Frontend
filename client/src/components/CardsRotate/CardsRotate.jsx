import React from 'react'
import './CardsRotate.css'
import logo from '../media/LogoCompleto.png'
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

const CardsRotate = ({ imagen, name, linke, git }) => {

    return (
        <div>
            <div className='cartasEstreno'>
                <div className='frontal'>
                    <img className='porfa' src={imagen ? imagen : logo} />
                </div>
                <div className='trasero'>
                    <h1 className='nombreMio'>{name}</h1>
                        <br></br>
                        <p className='fsd'>FULL STACK DEVELOPER</p>


                        <div className='redes'>
                        <Stack direction="row" spacing={1}>

                            <a href={linke}>
                            <IconButton aria-label="delete">
                            <LinkedInIcon color='azul'/>
                            </IconButton>
                            </a>

                            <a href={git}>
                                <IconButton color="negro" aria-label="add to shopping cart">
                                    <GitHubIcon color='negro' />
                                    </IconButton>
                                    </a>
                            </Stack>
                            </div>
                </div>
            </div>
        </div>
    )
}

export default CardsRotate