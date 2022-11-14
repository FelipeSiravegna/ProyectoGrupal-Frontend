import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Typography from '@material-ui/core/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllReviews, deleteReviews, addLikes, getLikeCounts} from '../../redux/actions';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { width } from '@mui/system';
import { useSelector } from 'react-redux';




function Comments({content, name, img, id, idUser, prueba, like, prueba3}) {
  const dispatch=useDispatch()

  const mg = useSelector((state)=> state.like)

  const [estado, setEstado] = useState('')


  let prueba2= like[0] ? like[0].like : null
  const [checkeda, setCheckeda] = useState(prueba2);

  useEffect(()=> 
  {dispatch(getAllReviews())
    dispatch
  }
  , [dispatch, estado, checkeda])

  
  
  const handleChange = (e) => {
    console.log(e)
    setCheckeda(e)
    dispatch(addLikes(
      {like: e,
        reviewId: id, 
        userId: idUser}))
  };

 

function deleteComment (id) {
  setEstado(id)
  dispatch(deleteReviews(id))
}


let aber = prueba.filter(a => a.id === id)
let hdo = prueba3.map(a=> a === idUser)

//console.log(hdo, "ID COMENT")

    return (
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={img} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
              >      
              </Typography>
              <h className='pruebita'>
              {content}
              <br></br>
              <br></br>
              </h>

<div className='iconicos'>
{checkeda  ?
              <Button variant="text"  onClick={()=>handleChange(false)} onChange={()=>setCheckeda()} >
              <Favorite color="rojo" /> </Button> 

             : <Button variant="text" onClick={()=>handleChange(true)} onChange={()=>setCheckeda()}>
             <FavoriteBorder color="gris" />
             </Button> }




              {aber.length ? 
              <Button  color="azul" size="10px" sx={{ width: 2 }} onClick={()=>deleteComment(id)}>
              <DeleteIcon sx={{ fontSize: 20 }} />
              </Button>
              : null}
</div>

            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
  
    </List>
  );

    
}

export default Comments