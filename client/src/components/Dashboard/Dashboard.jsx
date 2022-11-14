import React, { useEffect,useState } from 'react';
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
import Users from './Users';
import Movies from './movies';
import ModernTable from './Table/Table'
import { useAuth0 } from '@auth0/auth0-react';
import { AppBar ,Menu,MenuItem} from '@mui/material';

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
    const [anchorEl,setAnchorEl]=useState(null)
    const {isLoading,user} = useAuth0()

    const [title,setTitle]=useState("")
    const [items,setItems]=useState([])
    const [properties,setProperties]=useState([])
    const [action,setAction]=useState([])

    const request = {}

    const openMenu = Boolean(anchorEl)
    const handleClick=(e)=>{
      console.log("esto",e.currentTarget)
      setAnchorEl(e.currentTarget)
    }
    const handleClose=()=>{
      setAnchorEl(null)
    }
    const closeWActions =(e,action)=>{
      handleClose()
      console.log("me ejecute",e.target.innerText)
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
                  <h1>Whelcome {user && user.name} to the Dashboard</h1>
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
              
                
                  <Toolbar sx={{width:'80%',backgroundColor:'grey',margin:'10%'}}>
                    <Box sx={{display:'flex',justifyContent: 'space-between',width:'100%',alignItems:'center'}} component="div">
                      <Box><Typography 
                            aria-controls='menu-users' 
                            aria-haspopup='true' 
                            aria-expanded={openMenu?'true':undefined}
                            onClick={handleClick} 
                            sx={{cursor:'pointer'}}>
                            Users
                          </Typography>
                          {/*dropDown users */}
                          <Menu id='menu-users' anchorEl={anchorEl} open={openMenu} onClose={handleClose}> 
                                <MenuItem onClick={(e)=>{closeWActions(e,request)}}>Ban Users</MenuItem>
                                <MenuItem onClick={(e)=>{closeWActions(e,request)}}>Get Users</MenuItem>
                          </Menu>
                      </Box>
                      <Box><Typography 
                            aria-controls='menu-movies' 
                            aria-haspopup='true' 
                            aria-expanded={openMenu?'true':undefined}
                            onClick={handleClick} 
                            sx={{cursor:'pointer'}}>
                            Movies
                          </Typography>
                          {/*dropDown movies */}
                          <Menu id='menu-movies' anchorEl={anchorEl} open={openMenu} onClose={handleClose}> 
                                <MenuItem onClick={(e)=>{closeWActions(e,request)}}>Ban Movies</MenuItem>
                                <MenuItem onClick={(e)=>{closeWActions(e,request)}}>Get Movies</MenuItem>
                          </Menu></Box>
                      <Box><Typography 
                            aria-controls='menu-lists' 
                            aria-haspopup='true' 
                            aria-expanded={openMenu?'true':undefined}
                            onClick={handleClick} 
                            sx={{cursor:'pointer'}}>
                            Lists
                          </Typography>
                          {/*dropDown users */}
                          <Menu id='menu-lists' anchorEl={anchorEl} open={openMenu} onClose={handleClose}> 
                                <MenuItem onClick={(e)=>{closeWActions(e,request)}}>Ban Lists</MenuItem>
                                <MenuItem onClick={(e)=>{closeWActions(e,request)}}>Get Lists</MenuItem>
                          </Menu></Box>
                      <Box><Typography 
                            aria-controls='menu-lists' 
                            aria-haspopup='true' 
                            aria-expanded={openMenu?'true':undefined}
                            onClick={handleClick} 
                            sx={{cursor:'pointer'}}>
                            Genres
                          </Typography>
                          {/*dropDown users */}
                          <Menu id='menu-lists' anchorEl={anchorEl} open={openMenu} onClose={handleClose}> 
                                <MenuItem onClick={(e)=>{closeWActions(e,request)}}>Ban Genres</MenuItem>
                                <MenuItem onClick={(e)=>{closeWActions(e,request)}}>Get Genres</MenuItem>
                          </Menu></Box>
                    </Box>
                  </Toolbar>
                
              
              {/* Recent Orders */}
              <Grid item xs={12} ys={5}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Users />
                </Paper>
              </Grid>
              <Grid item xs={12} ys={5}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <ModernTable title={title} items={items} properties={properties} action={action} />
                </Paper>
              </Grid>

              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Movies />
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