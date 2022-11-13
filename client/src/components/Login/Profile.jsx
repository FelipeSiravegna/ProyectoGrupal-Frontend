import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import './Profile.css'
import imagenLogo from '../media/Logo.png'
import { useSelector, useDispatch } from 'react-redux';
import { getUserInfo } from '../../redux/actions';

export default function Profile(){

    const token = useSelector((state) => state.idToken)
    const userDB = useSelector((state) => state.user)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserInfo(token))
    }, [token])

    return(
            <div className='lafoto'>
                {

                    token && <Link to={`/UserProfile/${userDB.id}`}><img className='picture' src={imagenLogo} width='50px' height='50px' /></Link>

                
                }
            </div>
    )
}