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
import { getAllReviews } from '../../redux/actions';

function Comments({content, name, img, like, id}) {
  const dispatch=useDispatch()





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
              {content}
              <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
              <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
  
    </List>
  );

    
}

export default Comments