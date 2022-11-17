import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import NavbarP from '../NavbarP/NavbarP';
import './UserProfile.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllMovies, followUser, unfollowUser, getList } from '../../redux/actions';
import UserAvatar from '../UserAvatar/UserAvatar.jsx';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';


export default function UserProfile() {

    const url = window.location.href;
    let profileId = url[url.length - 1];
    profileId = parseInt(profileId);


    const dispatch = useDispatch()

    let token = useSelector(state => state)
    let dbUser = useSelector(state => state.user)
    let pagina = useSelector(state => (state.page))
    let otherUserInfo = useSelector(state => state.otherUserInfo);

    const [changeimage, setChangeimage] = useState(true);

    const [render, setRender] = useState(true);
    const [follows, setFollows] = useState('');

    const listas = useSelector(state => (state.list))
    let usuario = listas.filter(a=>`${a.userId}` === localStorage.id)

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
        
        if(e.target.innerText === 'PlayList') setRender(true)
        if(e.target.innerText === 'Favorits') setRender(false)

    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = (e) => {
        setShow(true)
        setFollows(e.target.innerText)
    }

    //fav

    let data = localStorage.fav && JSON.parse(localStorage.fav).concat(localStorage.fav8 && JSON.parse(localStorage.fav8).concat(localStorage.fav9 && JSON.parse(localStorage.fav9)).concat(localStorage.fav10 && JSON.parse(localStorage.fav10)).concat(localStorage.fav11 && JSON.parse(localStorage.fav11)).concat(localStorage.fav12 && JSON.parse(localStorage.fav12)).concat(localStorage.fav13 && JSON.parse(localStorage.fav13)).concat(localStorage.fav14 && JSON.parse(localStorage.fav14)).concat(localStorage.fav15 && JSON.parse(localStorage.fav15)).concat(localStorage.fav16 && JSON.parse(localStorage.fav16)).concat(localStorage.fav17 && JSON.parse(localStorage.fav17)).concat(localStorage.fav18 && JSON.parse(localStorage.fav18)).concat(localStorage.fav19 && JSON.parse(localStorage.fav19)).concat(localStorage.fav20 && JSON.parse(localStorage.fav20)).concat(localStorage.fav21 && JSON.parse(localStorage.fav21)).concat(localStorage.fav23 && JSON.parse(localStorage.fav23)).concat(localStorage.fav24 && JSON.parse(localStorage.fav24)).concat(localStorage.fav29 && JSON.parse(localStorage.fav29)).concat(localStorage.fav30 && JSON.parse(localStorage.fav30)).concat(localStorage.fav31 && JSON.parse(localStorage.fav31)).concat(localStorage.fav32 && JSON.parse(localStorage.fav32)).concat(localStorage.fav33 && JSON.parse(localStorage.fav33)).concat(localStorage.fav34 && JSON.parse(localStorage.fav34)).concat(localStorage.favv35 && JSON.parse(localStorage.fav35)).concat(localStorage.favfav36 && JSON.parse(localStorage.favfav36)).concat(localStorage.fav37 && JSON.parse(localStorage.fav37)).concat(localStorage.fav38 && JSON.parse(localStorage.fav38)).concat(localStorage.fav39 && JSON.parse(localStorage.fav39)).concat(localStorage.fav40 && JSON.parse(localStorage.fav40)))
    let dataLimpia = data !== undefined && data.filter(e => e !== undefined)
   console.log(data)
    const [watch, setWatch] = useState();

    
    useEffect(()=>{

      if(dataLimpia){
  
        let set =  new Set( dataLimpia.map( JSON.stringify ) )
        let arrSinDuplicaciones = Array.from( set ).map( JSON.parse );
        setWatch(arrSinDuplicaciones)
      }
      
    },[])

    if (dbUser !== null) {
        return (
            <div>


                <NavbarP />
                {
                    profileId === dbUser.id
                        ?
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
                            <button className={!render ? 'buttonplaylist' : 'buttonplaylistCheck'} name='PlayList' onClick={(e)=> handleRender(e)} ><h4>PlayList</h4><h6 className='h3marcadores'>__________</h6></button>
                            </div>
                            <div className='separadorRigth'>
                            <button className={render ? 'buttonfavorite' : 'buttonfavoriteCheck'} name='Favorits' onClick={(e)=> handleRender(e)}><h4>Favorits</h4><h6 className='h3marcadores'>__________</h6></button>
                            </div>
                            </div>

                            <div className='gridcontainer'>
                                
                                {
                                
                                render && movie.length ? movie[0].map(e => {

                        return <div className='griditem'>
                            <Link className='linkPel' to={`/filmdetails/${e.id}`}>
                            <img className='griditemImg' key = {e.id} src = {e.image} />
                            <h4 className='nameMovieP'>{e.name}</h4>
                            </Link>
                        </div>
                                    })
                                    :
                                    watch !== undefined ? watch.map(e => {

                                        return <div className='griditem'>
                                            <Link className='linkPel' to={`/filmdetails/${e.id}`}>
                                            <img className='griditemImg' key = {e.id} src = {e.image} />
                                            <h4 className='nameMovieP'>{e.name}</h4>
                                            </Link>
                                        </div>
                                                    })
                                                    :
                                                    <div className='nolistas'>
                                                    <h1>you don't have favorite movies</h1>
                                                    </div>
                                }

                        </div>
                        </div>
                        :
                        <div className='fondo23'>
                            {/* <button onClick={(e) => { dispatch(getUserInfo(token)) }}>send token</button>
                            <button onClick={(e) => { console.log(dbUser) }}>check user</button>
                            <button onClick={(e) => { console.log(token) }}>check token</button> */}
                            {
                                token &&
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