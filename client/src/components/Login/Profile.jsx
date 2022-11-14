import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import './Login.css'
import './Profile.css'
import imagenLogo from '../media/Logo.png'
import { useSelector } from 'react-redux';


export default function Profile(){

    let dbUser = useSelector(state => state.user)

    return(
            <div className='lafoto'>
                {
                    localStorage.username && <Link to={'/UserProfile'}><img className='picture' src={dbUser.image}/></Link>
                
                }
            </div>
    )
}