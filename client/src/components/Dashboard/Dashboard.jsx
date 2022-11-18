import React, { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Chart from './Chart';
import DateWeb from './DateWeb';
import ModernTable from './Table/Table'
import { useAuth0 } from '@auth0/auth0-react';
import { Menu, MenuItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  allUsers,
  activeUsers,
  banUser,
  availableUsers,
  bannedUsers,
  unBanUser,
  premiumUsers,
  freeUsers,
  allReviews,
  deleteReviews,
  getList,
  banList,
  getMoviesAdmin,
  banMovie
} from '../../redux/actions/index.js';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const mdTheme = createTheme();

function DashboardContent() {

  const items = useSelector((state) => state.items)
  const dispatch = useDispatch()

  const [anchorEl, setAnchorEl] = useState(null)
  const { isLoading, user } = useAuth0()

  const [title, setTitle] = useState("")
  //const [items,setItems]=useState([])
  const [properties, setProperties] = useState([])
  const [action, setAction] = useState([])

  const request = {}

  const getAllUsers = () => {
    setProperties(["username", "email", "premium", "banned"])
    dispatch(allUsers())
  }
  const getActiveUsers = () => {
    setProperties(["username", "email", "premium", "banned"])
    dispatch(activeUsers())
    setAction([])
  }
  const getMovies = () => {
    setProperties(["id", "name", "active", "banned", "description"])
    dispatch(getMoviesAdmin())
    setAction([])
  }
  const banMoviesAdmin = () => {
    setProperties(["id", "name", "active", "banned", "description"])
    dispatch(getMoviesAdmin())
    setAction(["Ban Movie", (j) => { banMovie(j) }])
  }
  const getAvailableUsers = () => {
    setProperties(["username", "email", "premium", "banned"])
    dispatch(availableUsers())
    setAction(["Ban User", (j) => {
      dispatch(banUser(j))
      dispatch(availableUsers())
    }])
  }
  const getBannedUsers = () => {
    setProperties(["username", "email", "premium", "banned"])
    dispatch(bannedUsers())
    setAction(["Unban User", (j) => {
      dispatch(unBanUser(j))
      dispatch(bannedUsers())
    }])
  }
  const getPremiumUsers = () => {
    setProperties(["username", "email", "premium", "banned"])
    dispatch(premiumUsers())
    setAction([])
  }
  const getFreeUsers = () => {
    setProperties(["username", "email", "premium", "banned"])
    dispatch(freeUsers())
    setAction([])
  }
  const getAllReviews = () => {
    setProperties(["id", "content", "banned", "movieId", "userId"])
    dispatch(allReviews())
    setAction([])
  }
  const getAllList = () => {
    setProperties(["name", "description", "banned", "userId", "active"])
    dispatch(getList())
    setAction([])
  }
  const bannList = () => {
    setProperties(["name", "description", "banned", "userId", "active"])
    dispatch(getList())
    setAction(["Ban", (j) => { dispatch(banList(j)) }])
  }
  const deleteAReview = () => {
    setProperties(["id", "content", "banned", "movieId", "userId"])
    dispatch(allReviews())
    setAction(["Delete Review", (j) => {
      dispatch(deleteReviews(j.id))
      dispatch(allReviews())
    }])
  }

  const openMenu = Boolean(anchorEl)
  const handleClick = (e) => {
    setAnchorEl([e.target.innerText, e.currentTarget])
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const closeWActions = (e, action) => {
    handleClose()
    action(e)
    setTitle(e.target.innerText)
  }

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark"></nav>
      <ThemeProvider theme={mdTheme}>
        {
          !isLoading && <>
            <Box sx={{ display: 'flex' }}>
              <Box
                component="main"
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                      ? theme.palette.grey[100]
                      : theme.palette.grey[900],
                  flexGrow: 1,
                  height: '100vh',
                  overflow: 'auto',
                }}
              >
                <Toolbar />
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                  <h1>Welcome to the Dashboard {localStorage.username}</h1>
                  <Grid container spacing={3}>
                    {/* Chart */}
                    <Grid item xs={12} md={8} lg={9}>
                      <Paper
                        sx={{
                          p: 2,
                          display: 'flex',
                          flexDirection: 'column',
                          height: 240,
                        }}
                      >
                        <Chart />
                      </Paper>
                    </Grid>
                    {/* Recent Deposits */}
                    <Grid item xs={12} md={4} lg={3}>
                      <Paper
                        sx={{
                          p: 2,
                          display: 'flex',
                          flexDirection: 'column',
                          height: 240,
                        }}
                      >
                        <DateWeb />
                      </Paper>
                    </Grid>
                    <Toolbar sx={{ width: '80%', backgroundColor: 'grey', margin: '10%' }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }} component="div">
                        <Box><Typography
                          aria-controls='menu-users'
                          aria-haspopup='true'
                          aria-expanded={openMenu ? 'true' : undefined}
                          onClick={handleClick}
                          sx={{ cursor: 'pointer' }}>
                          Users
                        </Typography>
                          {/*dropDown users */}
                          <Menu id='menu-users' anchorEl={!!anchorEl ? "Users" == anchorEl[0] ? anchorEl[1] : undefined : undefined} open={!!anchorEl && "Users" == anchorEl[0] ? true : false} onClose={handleClose}>
                            <MenuItem onClick={(e) => { closeWActions(e, getAllUsers) }}>All Users</MenuItem>
                            <MenuItem onClick={(e) => { closeWActions(e, getAvailableUsers) }}>Available Users</MenuItem>
                            <MenuItem onClick={(e) => { closeWActions(e, getBannedUsers) }}>Banned Users</MenuItem>
                            <MenuItem onClick={(e) => { closeWActions(e, getActiveUsers) }}>Active Users</MenuItem>
                            <MenuItem onClick={(e) => { closeWActions(e, getPremiumUsers) }}>Premium Users</MenuItem>
                            <MenuItem onClick={(e) => { closeWActions(e, getFreeUsers) }}>Free Users</MenuItem>
                          </Menu>
                        </Box>
                        <Box><Typography
                          aria-controls='menu-movies'
                          aria-haspopup='true'
                          aria-expanded={openMenu ? 'true' : undefined}
                          onClick={handleClick}
                          sx={{ cursor: 'pointer' }}>
                          Movies
                        </Typography>
                          {/*dropDown movies */}
                          <Menu id='menu-movies' anchorEl={!!anchorEl ? "Movies" == anchorEl[0] ? anchorEl[1] : null : null} open={!!anchorEl && "Movies" == anchorEl[0] ? true : false} onClose={handleClose}>
                            <MenuItem onClick={(e) => { closeWActions(e, getMovies) }}>Get Movies</MenuItem>
                            <MenuItem onClick={(e) => { closeWActions(e, banMoviesAdmin) }}>Ban Movies</MenuItem>
                            {/* <MenuItem onClick={(e)=>{closeWActions(e,request)}}>Unbann Movies</MenuItem> */}
                          </Menu></Box>
                        <Box><Typography
                          aria-controls='menu-lists'
                          aria-haspopup='true'
                          aria-expanded={openMenu ? 'true' : undefined}
                          onClick={handleClick}
                          sx={{ cursor: 'pointer' }}>
                          Lists
                        </Typography>
                          {/*dropDown users */}
                          <Menu id='menu-lists' anchorEl={!!anchorEl ? "Lists" == anchorEl[0] ? anchorEl[1] : null : null} open={!!anchorEl && "Lists" == anchorEl[0] ? true : false} onClose={handleClose}>
                            <MenuItem onClick={(e) => { closeWActions(e, getAllList) }}>Get Lists</MenuItem>
                            <MenuItem onClick={(e) => { closeWActions(e, bannList) }}>Ban Lists</MenuItem>
                            {/* <MenuItem onClick={(e)=>{closeWActions(e,request)}}>Unbann Lists</MenuItem> */}
                          </Menu></Box>
                        <Box><Typography
                          aria-controls='menu-Reviews'
                          aria-haspopup='true'
                          aria-expanded={openMenu ? 'true' : undefined}
                          onClick={handleClick}
                          sx={{ cursor: 'pointer' }}>
                          Reviews
                        </Typography>
                          {/*dropDown users */}
                          <Menu id='menu-Reviews' anchorEl={!!anchorEl ? "Reviews" == anchorEl[0] ? anchorEl[1] : undefined : undefined} open={!!anchorEl && "Reviews" == anchorEl[0] ? true : false} onClose={handleClose}>
                            <MenuItem onClick={(e) => { closeWActions(e, getAllReviews) }}>Get Reviews</MenuItem>
                            <MenuItem onClick={(e) => { closeWActions(e, deleteAReview) }}>Delete Reviews</MenuItem>
                            {/* <MenuItem onClick={(e)=>{closeWActions(e,request)}}>Unbann Reviews</MenuItem> */}
                          </Menu></Box>
                      </Box>
                    </Toolbar>
                    {/* Recent Orders */}
                    <Grid item xs={12} ys={5}>
                      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <ModernTable title={title} items={items} properties={properties} action={action} />
                      </Paper>
                    </Grid>
                  </Grid>
                  <Copyright sx={{ pt: 4 }} />
                </Container>
              </Box>
            </Box>
          </>
        }
      </ThemeProvider>
    </div>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}