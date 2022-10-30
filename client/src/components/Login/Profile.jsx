import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './Login.css'

export default function Profile(){

    const {isAuthenticated,user} = useAuth0()
    console.log(user)
    return(
            <div>
                {
                    isAuthenticated && <img className='picture' src={user.picture} width='50px' height='50px' />
                
                }
            </div>
    )
}