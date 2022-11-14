import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import NavbarP from '../NavbarP/NavbarP';
import { useAuth0 } from "@auth0/auth0-react";
import ListFav from '../List/List';
import PlayList from '../playListas/Playlist';
import './UserProfile.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { filterGenres, getAllMovies, getUserInfo, followUser, unfollowUser } from '../../redux/actions';
import UserAvatar from '../UserAvatar/UserAvatar.jsx';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

export default function UserProfile() {

    const url = window.location.href;
    let profileId = url[url.length - 1];
    profileId = parseInt(profileId);

    const { user } = useAuth0()
    const dispatch = useDispatch()
    let peliculas = useSelector(state => (state.movies))
    let token = useSelector(state => state)
    let dbUser = useSelector(state => state.user)
    let pagina = useSelector(state => (state.page))
    const [changeimage, setChangeimage] = useState(true);

    const [buttonValue, setButtonValue] = useState('FOLLOW');

    useEffect(() => {
        dispatch(getAllMovies(pagina || 1))
    }, [])

    const handleFollow = () => {
        if (buttonValue === 'FOLLOW') {
            dispatch(followUser(dbUser.id, profileId));
            setButtonValue('UNFOLLOW');
        } else {
            dispatch(unfollowUser(dbUser.id, profileId));
            setButtonValue('FOLLOW');
        }
    }

    if (dbUser !== null) {
        return (
            <div>


                <NavbarP />
                <div className='fondo23'>
                    {/* <button onClick={(e) => { dispatch(getUserInfo(token)) }}>send token</button>
                    <button onClick={(e) => { console.log(dbUser) }}>check user</button>
                    <button onClick={(e) => { console.log(token) }}>check token</button> */}
                    {


                        token &&
                        <div>

                            <div className='name'><Typography variant="h3" gutterBottom>{dbUser.username}</Typography>

                                <div className='edit'>
                                    <Button onClick={() => setChangeimage(false)} variant="outlined">CHANGE IMAGE</Button>
                                </div>

                                {
                                    !changeimage ?
                                        <div className='cancel'>
                                            <Button onClick={() => setChangeimage(true)} variant="outlined">CANCEL</Button>
                                        </div>
                                        :
                                        <div className='cancel'>
                                            <Link to={'/accounts/edit'}><Button variant="outlined"><PersonIcon /></Button></Link>
                                        </div>
                                }
                            </div>

                            <div className='conteiner'>

                                <UserAvatar urlImage={dbUser.image} userId={dbUser.id} changeimage={changeimage} />

                                <div className='seguidores'><Typography variant="h6" gutterBottom>FOLLOWING</Typography>
                                    <Typography className='contador' variant="h7" display="block" gutterBottom>{dbUser.following && dbUser.following.length}</Typography>
                                </div>

                                <div className='seguidores' ><Typography variant="h6" gutterBottom>FOLLOWERS</Typography>
                                    <Typography className='contador' variant="h7" display="block" gutterBottom>{dbUser.followers && dbUser.followers.length}</Typography>
                                </div>
                                
                                {
                                    dbUser.id !== profileId
                                        ?
                                        <div>
                                            <Button variant="outlined" onClick={handleFollow}>{buttonValue}</Button>
                                        </div>
                                        :
                                        null
                                }

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