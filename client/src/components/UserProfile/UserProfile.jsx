import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import NavbarP from '../NavbarP/NavbarP';
import { useAuth0 } from "@auth0/auth0-react";
import ListFav from '../List/List';
import PlayList from '../playListas/Playlist';
import './UserProfile.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { filterGenres, getAllMovies, getUserInfo } from '../../redux/actions';
import UserAvatar from '../UserAvatar/UserAvatar.jsx';

export default function UserProfile() {
    const { user } = useAuth0()
    const dispatch = useDispatch()
    let peliculas = useSelector(state => (state.movies))
    let token = useSelector(state => state)
    let dbUser = useSelector(state => state.user)
    let pagina = useSelector(state => (state.page))

    useEffect(() => {
        dispatch(getAllMovies(pagina || 1))
    }, [])

    if(dbUser !== null){
        return (
            <div>
    
                <NavbarP />
                <div className='fondo23'>
                    <button onClick={(e) => { dispatch(getUserInfo(token)) }}>send token</button>
                    <button onClick={(e) => { console.log(dbUser) }}>check user</button>
                    <button onClick={(e) => { console.log(token) }}>check token</button>
                    {
    
                        token &&
                        <div>
    
                            <div className='name'><Typography variant="h3" gutterBottom>{ }</Typography>
                                <div className='edit'>
                                    <Button variant="outlined">EDITAR PERFIL</Button>
                                </div>
                            </div>
                            <div className='conteiner'>
    
                                <UserAvatar urlImage={dbUser.image} userId={dbUser.id}/>
    
                                <div className='seguidores'><Typography variant="h6" gutterBottom>FOLLOWING</Typography>
                                    <Typography className='contador' variant="h7" display="block" gutterBottom>115</Typography>
                                </div>
    
                                <div className='seguidores' ><Typography variant="h6" gutterBottom>FOLLOWERS</Typography>
                                    <Typography className='contador' variant="h7" display="block" gutterBottom>1.000.053</Typography>
                                </div>
    
    
                            </div>
                        </div>
                    }
                    <br />
                    <br />
                    <div className='PlayList'>
                        <PlayList name={'PlayList'} peliculas={peliculas} />
                        <PlayList name={'Favorits'} peliculas={peliculas} />
                    </div>
                    <br />
                </div>
            </div>
        )
    } else {
        return <h1>Loading...</h1>
    }    
}