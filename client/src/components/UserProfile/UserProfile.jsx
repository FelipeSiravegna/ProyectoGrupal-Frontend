import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import NavbarP from '../NavbarP/NavbarP';
import { useAuth0 } from "@auth0/auth0-react";
import ListFav from '../List/List';
import './UserProfile.css'

export default function UserProfile() {

    const {user} = useAuth0()

    return (
         <div>

<NavbarP/>

 {
    
user && 
<div className='conteiner'>

<Avatar
  alt="Remy Sharp"
  src={user.picture}
  sx={{ width: 250, height: 250 }}
/>

<div className='seguidores'><Typography variant="h4" gutterBottom>{user.name}</Typography>
</div>

<div className='seguidores'><Typography variant="h6" gutterBottom>FOLLOWING</Typography>
<Typography className='contador' variant="h6" display="block" gutterBottom>115</Typography>
</div>

<div className='seguidores' ><Typography variant="h6" gutterBottom>FOLLOWERS</Typography>
<Typography className='contador' variant="h6" display="block" gutterBottom>1.000.053</Typography>
</div>

<div className='seguidores' >
<Button variant="outlined">EDITAR PERFIL</Button>
</div>

</div>
 }

 <br/>
 <br/>
 
<ListFav/>
         </div>
        )
    }