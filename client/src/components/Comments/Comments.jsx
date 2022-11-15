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
import Box from '@mui/material/Box';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllReviews, deleteReviews, addLikes, getLikeCounts} from '../../redux/actions';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { width } from '@mui/system';
import { useSelector } from 'react-redux';





function Comments({content, name, img, id, idUser, prueba, like, prueba3, userid}) {

  const dispatch=useDispatch()

  const mg = useSelector((state)=> state.like)
 
  const [estado, setEstado] = useState('')
 console.log(userid, idUser)

let userFind= like.find(e=> e.userId === userid && e.like === true)
let likeFilter = like.filter(e=> e.like ===true)


  const [checked, setChecked] = useState(Boolean(userFind));

  
  let aber = prueba.filter(a => a.id === id)
  
  let prueba2= like[0] ? like[0].like : null
 
//console.log(memuero[2])
console.log(id)



  const [checkeda, setCheckeda] = useState();


  useEffect(()=> 
  {dispatch(getAllReviews())
  }
  , [dispatch, estado, checked])


  
  
  const handleChange = (e) => {
    console.log(e.target.checked +" "+ 12)
    setChecked(e.target.checked);
    console.log(checked)
    dispatch(addLikes(
      {like: e.target.checked,
        reviewId: id, 
        userId: userid}))

  };
        //userId: idUser}))
        //setCheckeda(e)
      //};


 

function deleteComment (id) {
  setEstado(id)
  dispatch(deleteReviews(id))
}






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


{prueba2 ?
              <Button variant="text"  onClick={()=>handleChange(false)} >
              <Favorite color="rojo" /> </Button> 

             : <Button variant="text" onClick={()=>handleChange(true)} >
             <FavoriteBorder color="gris" />
             </Button> }  



              <Box component="span" sx={{color: 'rojo.main'}}>
              {likeFilter.length? likeFilter.length : null}
              </Box>
             <Checkbox  icon={<FavoriteBorder color={!checked && "gris"}/>} checkedIcon={<Favorite color={checked && "rojo"}/>} checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }}/>

              <Button disabled={Boolean(!aber.length)} size="10px" sx={{ width: 2, color: "azul.main" }} onClick={()=>deleteComment(id)}>
              <DeleteIcon sx={{ fontSize: 20 }} />
              </Button>
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