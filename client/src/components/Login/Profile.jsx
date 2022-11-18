import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import './Profile.css'
import { useSelector } from 'react-redux';

export default function Profile() {
    const userDB = useSelector((state) => state.user)

    return (
        <div className='lafoto'>
            {
                localStorage.image && <Link to={`/UserProfile/${userDB.id}`}><img className='picture' src={userDB.image} /></Link>
            }
        </div>
    )
}