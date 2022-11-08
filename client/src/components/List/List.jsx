import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function ListFav() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/xFw9RXKZDvevAGocgBK0zteto4U.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Suicide Squad"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                RELEASE DATE
              </Typography>
              {" — 2016-08-03"}
              <br />
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                RATING
              </Typography>
              {" — 5.914"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/tM0hpWw3GONam6TKcMMciecHjhT.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="The Boy Next Door"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                RELEASE DATE
              </Typography>
              {" — 2015-01-23"}
              <br />
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                RATING
              </Typography>
              {" — 4.82"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/rhr4y79GpxQF9IsfJItRXVaoGs4.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Jurassic World"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                RELEASE DATE
              </Typography>
              {' — 2015-06-06'}
              <br />
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                RATING
              </Typography>
              {' — 6.677'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
