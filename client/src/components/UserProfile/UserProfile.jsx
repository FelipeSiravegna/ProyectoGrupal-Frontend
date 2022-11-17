import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import NavbarP from '../NavbarP/NavbarP';
import { useAuth0 } from "@auth0/auth0-react";
import ListFav from '../List/List';
import PlayList from '../playListas/Playlist';
import './UserProfile.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { filterGenres, getAllMovies, getOtherUserInfo, followUser, unfollowUser, getList } from '../../redux/actions';
import UserAvatar from '../UserAvatar/UserAvatar.jsx';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';


export default function UserProfile() {

    const url = window.location.href;
    let profileId = url[url.length - 1];
    profileId = parseInt(profileId);


    const dispatch = useDispatch()
    let peliculas = useSelector(state => (state.movies))
    let token = useSelector(state => state)
    let dbUser = useSelector(state => state.user)
    let pagina = useSelector(state => (state.page))
    let otherUserInfo = useSelector(state => state.otherUserInfo);

    const [changeimage, setChangeimage] = useState(true);

    const [playlist, setPlaylist] = useState(true);
    const [follows, setFollows] = useState('');

    const listas = useSelector(state => (state.list))
    let usuario = listas.filter(a=>`${a.userId}` === localStorage.id)
    let listasUser = listas?listas.filter(a=>a.userId === profileId):null
    const [buttonValue, setButtonValue] = useState('FOLLOW');

    useEffect(() => {
        dispatch(getAllMovies(pagina || 1));
        dispatch(getList());
    },[])

    const movie = usuario.map(e=> e.movies)

    const handleFollow = () => {
        if (buttonValue === 'FOLLOW') {
            dispatch(followUser(dbUser.id, profileId));
            setButtonValue('UNFOLLOW');
        } else {
            dispatch(unfollowUser(dbUser.id, profileId));
            setButtonValue('FOLLOW');
        }
    }

    const handleRender = (e) => {
        console.log(e,playlist)
        if(e.target.innerText === 'PlayList') setPlaylist(true)
        if(e.target.innerText === 'Favorits') setPlaylist(false)
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = (e) => {
        setShow(true)
        setFollows(e.target.innerText)
    };

    if (dbUser !== null) {
        return (
            <div>


                <NavbarP />
                {
                    profileId === dbUser.id?
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

                                        <div className='seguidores'><button onClick={(e)=>handleShow(e)} className='seguidoresButton'>
                                            <Typography variant="h6">FOLLOWING</Typography></button>
                                            <Typography className='contador' variant="h7" display="block" gutterBottom>{dbUser.following && dbUser.following.length}</Typography>
                                        </div>

                                        <div className='seguidores'><button onClick={(e)=>handleShow(e)} className='seguidoresButton'>
                                            <Typography variant="h6">FOLLOWERS</Typography></button>
                                            <Typography className='contador' variant="h7" display="block" gutterBottom>{dbUser.followers && dbUser.followers.length}</Typography>
                                        </div>

                                        
                                    <Modal show={show} onHide={handleClose} className="my-modal" >
              <Modal.Header closeButton>
                <Modal.Title className='tituloModal'>{follows}</Modal.Title>
              </Modal.Header>
              <Modal.Body> ghg </Modal.Body>

            </Modal>

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
                            
                            <div className='optionsProfile'>
                            <div className='separadorLeft'>
                            <button className='buttonsprofile' name='PlayList' onClick={(e)=> handleRender(e)} ><h4>PlayList</h4><h6 className='h3marcadores'>__________</h6></button>
                            </div>
                            </div>

                            <div className='gridcontainer'>
                                
                                {
                                    
                                playlist &&

                                listasUser.length ? listasUser.map(e => {

                        return <div className='griditem'>
                            <Link className='linkPel' to={`/list/${e.id}`}>
                            <img className='griditemImg' key = {e.id} />
                            <h4 className='nameMovieP'>{e.name}</h4>
                            <h4 className='descMovieP'>{e.description}</h4>
                            </Link>
                        </div>
                                    })
                                    :
                                    <div className='nolistas'>
                                    <h1>you don't have favorite lists yet</h1>
                    
                                    </div>
                               }
                                

                        </div>
                        </div>
                        :
                        <div className='fondo23'>
                           
                               {} token &&
                                <div>

                                    <div className='name'><Typography variant="h3" gutterBottom>{otherUserInfo.username}</Typography></div>

                                    <div className='conteiner'>

                                        <UserAvatar urlImage={otherUserInfo.image} userId={otherUserInfo.id} changeimage={changeimage} />

                                        <div className='seguidores'><Typography variant="h6" gutterBottom>FOLLOWING</Typography>
                                            <Typography className='contador' variant="h7" display="block" gutterBottom>{otherUserInfo.following && otherUserInfo.following.length}</Typography>
                                        </div>

                                        <div className='seguidores' ><Typography variant="h6" gutterBottom>FOLLOWERS</Typography>
                                            <Typography className='contador' variant="h7" display="block" gutterBottom>{otherUserInfo.followers && otherUserInfo.followers.length}</Typography>
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
                   
                        </div>
                }
            </div>

        )
    } else {
        return <h1>Loading...</h1>
    }
}