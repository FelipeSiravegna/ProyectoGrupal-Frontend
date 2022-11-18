import React from 'react'
import EventNoteIcon from '@mui/icons-material/EventNote';
import StarRateIcon from '@mui/icons-material/StarRate';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import CompareIcon from '@mui/icons-material/Compare';
import Button from '@mui/material/Button'
import './InfoHome.css'
import { Link } from 'react-router-dom';

const InfoHome = () => {
    return (
        <div className='conjunto'>
            <body className='cartas'>
                <div className='card'>
                    <div className='face-back'>
                        <h3><StarRateIcon /></h3>
                        <p>
                            Give a rating to the movies you watched
                        </p>
                    </div>
                </div>
            </body>
            <body className='cartas'>
                <div className='card'>
                    <div className='face-back'>
                        <h3><EventNoteIcon /></h3>
                        <p>
                            Check when the new movies are released
                        </p>
                    </div>
                </div>
            </body>
            <body className='cartas'>
                <div className='card'>
                    <div className='face-back'>
                        <h3><DriveFileRenameOutlineIcon /></h3>
                        <p>
                            Watch and write reviews of the movies you saw
                        </p>
                    </div>
                </div>
            </body>
            <br></br>
            <body className='cartas'>
                <div className='card'>
                    <div className='face-back'>
                        <h3><PlaylistAddIcon /></h3>
                        <p>
                            Create custom lists with the movies you want
                        </p>
                    </div>
                </div>
            </body>
            <body className='cartas'>
                <div className='card'>
                    <div className='face-back'>
                        <h3><FavoriteIcon /></h3>
                        <p>
                            You can like your favorite movies whenever you want
                        </p>
                    </div>
                </div>
            </body>
            <body className='cartas'>
                <div className='card'>
                    <div className='face-back'>
                        <h3><CompareIcon /></h3>
                        <p>
                            Compare the characteristics of the movies you want
                        </p>
                    </div>
                </div>
            </body>
            <h1 className='hola'>IN THE CORNER MOVIES WE ALLOW YOU...</h1>
            <h1 className='publicidad'>BELOW ARE SOME  POPULAR MOVIES. <Link className='ll' to={'/login'}><Button variant="text" sx={{ fontSize: 19 }} color="rojo">
                Sign Up
            </Button></Link> TO SEE MORE.</h1>
        </div>
    )
}

export default InfoHome