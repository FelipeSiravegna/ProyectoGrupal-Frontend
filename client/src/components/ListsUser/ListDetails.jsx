import React from 'react'
import './ListUser.css'
import './ListUser.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { followedList, listDetails, removeMovieToList, followLists, unFollowList } from '../../redux/actions'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { useSelector, useDispatch } from 'react-redux'
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from 'react-router-dom'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom'
import Logo from '../media/Logo.png'
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@material-ui/core'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import AddMovieList from './AddMovieList'
import fondo from '../media/fondo.jpg'
import NavbarP from '../NavbarP/NavbarP'
import AddIcon from '@mui/icons-material/Add';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import CloseIcon from '@mui/icons-material/Close';

const ListDetails = () => {

  const params = useParams();
  const { idList } = params
  const dispatch = useDispatch()
  const lista = useSelector(state => (state.listDetails))
  const usuario = lista.user?lista.user.id:null
  const dueño = `${usuario}` === localStorage.id
  const seguido = useSelector(state => (state.listFollowed))
  const [estado, setEstado] = useState('')
  const [estadito, setE] = useState('')

var items = document.getElementsByClassName("elnombresito")


let variable = seguido.followedLists?seguido.followedLists.map(a=>`${a.id}`):null
let follow = variable? variable.filter(a=> a === idList):null
let ayuda = follow?follow.length:null

useEffect(()=>{
dispatch(listDetails(idList)) 
dispatch(followedList(localStorage.id)) 
items
},[items.length, estado, dueño, usuario, estadito])

console.log(estadito)



function seguirLista (e){
dispatch(followLists(e, idList))
}

function noSeguirLista (e){
dispatch(unFollowList(e, idList))
}

function removeFilm(b){
dispatch(removeMovieToList(idList, b))
setEstado(b)
}


return (
  <div>
    <img className='fondo'src={fondo} alt="" />
  <NavbarP/>
<React.Fragment>
    <CssBaseline />
    <Container maxWidth="xl">



{!dueño ? 
<div className='followers'>
{ayuda === 0 ? 
      
      
      <Button variant='outlined' color='azul' onClick={()=>seguirLista(localStorage.id)} > <h className='letras'>FOLLOW</h>
<AddIcon onClick={()=>setE(false)} sx={{ fontSize: 50 }} color='azul'>  </AddIcon>
      </Button> 
      : <Button variant='outlined' color='rojo' onClick={()=>noSeguirLista(localStorage.id)}> <h className='letras'>UNFOLLOW</h>
      <CloseIcon onClick={()=>setE(true)} sx={{ fontSize: 50 }} color='rojo'/>
              </Button>}
              </div>      
: null}


 {dueño ? 
    <AddMovieList idList={idList} lista={lista}/>
    : null}


    <ListGroup as="ol" numbered>

<h2 className='elnombre'><img className='loge' src={Logo}></img>{lista.name}</h2>     
<h3 className='ladesc2'>By: {lista.user ? lista.user.username : null} </h3>
<h3 className='ladesc'>{lista.description}</h3>

{lista.movies? lista.movies.map(a => {return( 
<div className='lalista2'>
    <ListGroup.Item className='lalista'>
<img className='listImg' src={a.image} alt="" />
<h className="elnombresito">{a.name}</h>
<Badge bg="none" pill className='ojo'> 
<Link to={`/filmdetails/${a.id}`}>
<RemoveRedEyeIcon color='azul'/>
</Link>
      </Badge>


{dueño ? 
      <Badge bg="none" pill className='ojo2'   >
      <Button variant='outlined' color='rojo' onClick={()=>removeFilm(a.id)} >
<DeleteIcon color='rojo'/>
      </Button>
      </Badge>
      : null}
      

</ListGroup.Item>
</div>
)}) : 
<div>
<h1 className='nd'>This list does not contain movies</h1>
</div>
}
    </ListGroup>
    </Container>
  </React.Fragment>



  </div>
)
}

export default ListDetails