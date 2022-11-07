import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import NavbarP from '../NavbarP/NavbarP';
import { useAuth0 } from "@auth0/auth0-react";
import ListFav from '../List/List';
import PlayList from '../PlayList/Playlist';
import './UserProfile.css'

export default function UserProfile() {

    const {user} = useAuth0()

    return (
         <div>

<NavbarP/>

 {
    
user && 
<div>

<div className='name'><Typography variant="h3" gutterBottom>{user.name}</Typography>
<div className='edit'>
<Button variant="outlined">EDITAR PERFIL</Button>
</div>
</div>
<div className='conteiner'>

<img className='avatar' src={user.picture}/>

<div className='seguidores'><Typography variant="h6" gutterBottom>FOLLOWING</Typography>
<Typography className='contador' variant="h7" display="block" gutterBottom>115</Typography>
</div>

<div className='seguidores' ><Typography variant="h6" gutterBottom>FOLLOWERS</Typography>
<Typography className='contador' variant="h7" display="block" gutterBottom>1.000.053</Typography>
</div>


</div>
</div>
 }
 <br/>
 <br/>
 <div>
 <PlayList/>
</div>
<br/>
<PlayList/>
         </div>
        )
    }