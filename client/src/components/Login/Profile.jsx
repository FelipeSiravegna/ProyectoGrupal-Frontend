import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import './Login.css'
import './Profile.css'


export default function Profile(){

    const {isAuthenticated,user} = useAuth0()
    console.log(user)
    return(
            <div className='lafoto'>
                {
                    isAuthenticated && <img className='picture' src={user.picture} width='50px' height='50px' />
                
                }
            </div>
    )
}