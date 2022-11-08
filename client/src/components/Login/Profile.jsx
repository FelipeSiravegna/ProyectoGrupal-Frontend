import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import './Login.css'
import './Profile.css'
import imagenLogo from '../media/Logo.png'

export default function Profile() {
    const { isAuthenticated, user } = useAuth0()
    return (
        <div className='lafoto'>
            {
                isAuthenticated && <Link to={'/UserProfile'}><img className='picture' src={imagenLogo} width='50px' height='50px' /></Link>
            }
        </div>
    )
}