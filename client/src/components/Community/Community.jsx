import React from 'react'
import './Community.css'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import fondo from '../media/fondo.jpg'
import Logo from '../media/Logo.png'
import NavbarP from '../NavbarP/NavbarP';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers } from '../../redux/actions';
import { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete'


const Community = () => {

    const dispatch = useDispatch()
  let users = useSelector(state => (state.usuarios))
  const opciones = users.length !== 0 ? users.map(a => a.username) : null
  const [show, setShow] = useState(false);
  const [select, setSelect] = useState();

 

  useEffect(() => {
    dispatch(getAllUsers())
  }, [select])



  function handleChange(e) {
    let filtro = users.filter(a=> a.username === e)
    let resultado = filtro.map(a=> [{name: a.username, img: a.image, seguidos: a.following.length, seguidores: a.followers.length, id: a.id, listas: a.playLists}])
    setSelect(resultado)
  }

  return (
    <div>
        <img className='fondo' src={fondo} alt="" />
            <NavbarP />


            <div className='boxi'> 
        <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#f44336', height: '100vh',  }} >
            
            <h1 className='tcm'>THE CORNER MOVIES</h1>
<h2 className='community'>COMMUNITY</h2>
<br></br>

        {users? users.map(a=> 
<List sx={{ width: '552%', maxWidth: 552, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">

        <Link to={`/UserProfile/${a.id}`}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={a.image} />
        </ListItemAvatar>
        </Link>
        
        <ListItemText
          primary={a.username}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >   
                {a.playLists ? a.playLists.length + " " + "Lists" : '0 Lists'}
                <br></br>
              {a.following.length ?  a.following.length + " " + "Following" : "0 Following"}
              <br></br>
              {a.followers.length ?  a.followers.length + " " + "Followers" : "0 Followers"}
              <div class="linea"></div>
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    ) : null}
        </Box>
      </Container>
      </div>
        
        <div className='buscator'>
          <h1 className='sMembers'>Search members</h1>
      <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={opciones}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Users" />}
      onChange={(event, value) => handleChange(value)}
      disableClearable={true}
      color='rojo'
    />
  </div>
        {select ? select[0].map(a => {return (
          <div className='userelegido'>
          <Link className='none' to={`/UserProfile/${a.id}`}>      
         <img className='img-stats' alt="Remy Sharp" src={a.img} width='150'/>
          <h1 className='blanco'>{a.name}</h1>
        </Link>
          <h3 className='stats'>Lists: {a.listas ? a.listas.length : 0} </h3>
          <h3 className='stats'>Following: {a.seguidos} </h3>
          <h3 className='stats'>Followers: {a.seguidores}</h3>
          </div>
        )}):null}
        <img  className='quesealaultima' src={Logo} alt="" />
        </div>
        
  )
} 

export default Community